/* =========================================================================
   Mon Potager — logique de l'application (vanilla JS, sans dépendance).
   État persisté dans localStorage :
     - mp.checks     : { [tacheId]: true }         cases cochées
     - mp.plantes    : [ plantId, … ]              plantes de mon potager
   ========================================================================= */
'use strict';

const store = {
  checks: JSON.parse(localStorage.getItem('mp.checks') || '{}'),
  plantes: JSON.parse(localStorage.getItem('mp.plantes') || '[]'),
  saveChecks() { localStorage.setItem('mp.checks', JSON.stringify(this.checks)); },
  savePlantes() { localStorage.setItem('mp.plantes', JSON.stringify(this.plantes)); },
};

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const esc = (s) => s.replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

/* ---- Composants réutilisables ---------------------------------------- */

// Rend une liste de blocs { titre, icone, taches:[{id,txt}] }
function renderSections(sections) {
  return sections.map((s) => {
    const items = s.taches.map(renderCheck).join('');
    const done = s.taches.filter((t) => store.checks[t.id]).length;
    return `
      <section class="card">
        <header class="card-head">
          <h3>${s.icone} ${esc(s.titre)}</h3>
          <span class="mini-count">${done}/${s.taches.length}</span>
        </header>
        <ul class="checklist">${items}</ul>
      </section>`;
  }).join('');
}

function renderCheck(t) {
  const on = store.checks[t.id] ? 'checked' : '';
  return `
    <li>
      <label class="check ${on ? 'is-done' : ''}">
        <input type="checkbox" data-check="${t.id}" ${on}>
        <span class="box" aria-hidden="true"></span>
        <span class="txt">${esc(t.txt)}</span>
      </label>
    </li>`;
}

// Barre de progression globale d'un ensemble de tâches
function progress(ids) {
  const total = ids.length;
  const done = ids.filter((id) => store.checks[id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  return `
    <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width:${pct}%"></div>
      <span class="progress-label">${done}/${total} · ${pct}%</span>
    </div>`;
}

function allIds(sections) {
  return sections.flatMap((s) => s.taches.map((t) => t.id));
}

/* ---- Onglets --------------------------------------------------------- */

function renderPreparation() {
  return `
    <h2>🌱 Préparation du potager</h2>
    <p class="lead">Coche les étapes au fur et à mesure. Tout est mémorisé sur ton appareil.</p>
    ${progress(allIds(PREPARATION))}
    ${renderSections(PREPARATION)}

    <h2 class="sep">🏠 La serre</h2>
    <p class="lead">Étapes dédiées à ta petite serre.</p>
    ${progress(allIds(SERRE))}
    ${renderSections(SERRE)}
  `;
}

function moisNom(m) {
  return ['', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
    'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][m];
}

let saisonActive = null; // null = toutes

function saisonCourante() {
  const m = new Date().getMonth() + 1;
  return SAISONS.find((s) => s.mois.includes(m)) || SAISONS[0];
}

function renderCalendrier() {
  const filtre = saisonActive;
  const chips = SAISONS.map((s) => `
    <button class="chip ${filtre === s.id ? 'is-on' : ''}" data-saison="${s.id}">
      ${s.emoji} ${s.nom}
    </button>`).join('');
  const toutes = `<button class="chip ${!filtre ? 'is-on' : ''}" data-saison="">Toutes</button>`;

  const liste = PLANTES
    .filter((p) => !filtre || p.saisons.includes(filtre))
    .map((p) => {
      const dans = store.plantes.includes(p.id);
      return `
        <article class="plant-row">
          <div class="plant-emoji">${p.emoji}</div>
          <div class="plant-main">
            <div class="plant-top">
              <h3>${esc(p.nom)}</h3>
              ${p.serre ? '<span class="tag tag-serre">🏠 Serre +</span>' : ''}
            </div>
            <dl class="plant-when">
              ${p.semis && p.semis !== '—' ? `<div><dt>Semis</dt><dd>${esc(p.semis)}</dd></div>` : ''}
              ${p.plantation && p.plantation !== '—' ? `<div><dt>Plantation</dt><dd>${esc(p.plantation)}</dd></div>` : ''}
              <div><dt>Récolte</dt><dd>${esc(p.recolte)}</dd></div>
            </dl>
          </div>
          <button class="btn-add ${dans ? 'is-in' : ''}" data-toggle-plant="${p.id}">
            ${dans ? '✓ Dans mon potager' : '+ Ajouter'}
          </button>
        </article>`;
    }).join('');

  const now = saisonCourante();
  return `
    <h2>📅 Que planter&nbsp;?</h2>
    <p class="lead">Nous sommes en <strong>${moisNom(new Date().getMonth() + 1)}</strong>
      — saison ${now.emoji} <strong>${now.nom}</strong>. Ajoute des plantes à ton potager
      pour suivre leur entretien dans l'onglet « Mon potager ».</p>
    <div class="note">🇧🇪 Adapté au <strong>climat belge</strong> (tempéré, zone 8) : on sème souvent
      au chaud ou sous serre, puis on plante en pleine terre après les <strong>Saints de Glace</strong>
      (mi-mai, fin des gelées). Uniquement des cultures qui poussent réellement chez nous
      — pas de tropicales.</div>
    <div class="chips">${toutes}${chips}</div>
    <div class="plant-list">${liste || '<p class="empty">Aucune plante pour ce filtre.</p>'}</div>
  `;
}

function renderMonPotager() {
  const mes = PLANTES.filter((p) => store.plantes.includes(p.id));
  if (!mes.length) {
    return `
      <h2>🪴 Mon potager</h2>
      <p class="empty big">Ton potager est vide pour l'instant.<br>
        Va dans l'onglet <strong>📅 Que planter</strong> et ajoute les plantes que tu cultives
        pour suivre leur entretien ici.</p>`;
  }
  const blocs = mes.map((p) => {
    const done = p.entretien.filter((t) => store.checks[t.id]).length;
    const astuces = p.astuces.map((a) => `<li>${esc(a)}</li>`).join('');
    return `
      <section class="card plant-card">
        <header class="card-head">
          <h3>${p.emoji} ${esc(p.nom)}
            ${p.serre ? '<span class="tag tag-serre">🏠</span>' : ''}
          </h3>
          <span class="mini-count">${done}/${p.entretien.length}</span>
        </header>
        <ul class="checklist">${p.entretien.map(renderCheck).join('')}</ul>
        <details class="astuces">
          <summary>💡 Trucs &amp; astuces</summary>
          <ul>${astuces}</ul>
        </details>
        <button class="link-remove" data-toggle-plant="${p.id}">Retirer de mon potager</button>
      </section>`;
  }).join('');
  return `
    <h2>🪴 Mon potager</h2>
    <p class="lead">Suivi de l'entretien de tes ${mes.length} culture(s).</p>
    ${progress(mes.flatMap((p) => p.entretien.map((t) => t.id)))}
    ${blocs}
  `;
}

function renderFin() {
  return `
    <h2>🧺 Récolte & fin de saison</h2>
    <p class="lead">Les étapes pour bien récolter puis clôturer le potager.</p>
    ${progress(allIds(FIN_SAISON))}
    ${renderSections(FIN_SAISON)}
  `;
}

const TABS = {
  prep: { label: 'Préparation', icon: '🌱', render: renderPreparation },
  calendrier: { label: 'Que planter', icon: '📅', render: renderCalendrier },
  potager: { label: 'Mon potager', icon: '🪴', render: renderMonPotager },
  fin: { label: 'Récolte', icon: '🧺', render: renderFin },
};

let tabActive = 'prep';

function renderTabbar() {
  return Object.entries(TABS).map(([key, t]) => `
    <button class="tab ${key === tabActive ? 'is-on' : ''}" data-tab="${key}">
      <span class="tab-ico">${t.icon}</span>
      <span class="tab-lbl">${t.label}</span>
    </button>`).join('');
}

function render() {
  $('#view').innerHTML = TABS[tabActive].render();
  $('#tabbar').innerHTML = renderTabbar();
  $('#view').scrollTop = 0;
  window.scrollTo(0, 0);
}

/* ---- Interactions (délégation d'événements) -------------------------- */

document.addEventListener('change', (e) => {
  const cb = e.target.closest('[data-check]');
  if (!cb) return;
  const id = cb.dataset.check;
  if (cb.checked) store.checks[id] = true; else delete store.checks[id];
  store.saveChecks();
  render(); // met à jour compteurs & barres
});

document.addEventListener('click', (e) => {
  const tab = e.target.closest('[data-tab]');
  if (tab) { tabActive = tab.dataset.tab; render(); return; }

  const chip = e.target.closest('[data-saison]');
  if (chip) { saisonActive = chip.dataset.saison || null; render(); return; }

  const tgl = e.target.closest('[data-toggle-plant]');
  if (tgl) {
    const id = tgl.dataset.togglePlant;
    const i = store.plantes.indexOf(id);
    if (i >= 0) store.plantes.splice(i, 1); else store.plantes.push(id);
    store.savePlantes();
    render();
    return;
  }
});

/* ---- Installation PWA ------------------------------------------------ */
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  $('#install').hidden = false;
});
$('#install').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $('#install').hidden = true;
});
window.addEventListener('appinstalled', () => { $('#install').hidden = true; });

/* ---- Service worker -------------------------------------------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

/* ---- Go -------------------------------------------------------------- */
render();
