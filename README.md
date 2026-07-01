# 🌻 Mon Potager

Petite **PWA** (application web installable, fonctionne hors-ligne) pour
m'accompagner au potager, de la préparation à la fin de saison — serre comprise.

## Fonctionnalités

- **🌱 Préparation** — checklist des étapes pour préparer le potager, plus une
  section dédiée à la **serre** (mise en route et entretien courant).
- **📅 Que planter** — quand semer / planter / récolter chaque légume, filtrable
  par saison. On ajoute d'un clic les cultures à *son* potager.
- **🪴 Mon potager** — pour chaque culture choisie, une checklist d'entretien et
  des **trucs & astuces**, avec barre de progression.
- **🧺 Récolte & fin de saison** — étapes pour récolter, conserver, nettoyer et
  mettre le potager au repos.

Les cases cochées et les plantes sélectionnées sont **mémorisées sur l'appareil**
(localStorage). Aucune donnée n'est envoyée sur un serveur.

## Utilisation

Aucune installation ni compilation. Il suffit de servir le dossier en HTTP :

```bash
# depuis la racine du projet
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Sur mobile, ouvrir le site puis « Ajouter à l'écran d'accueil » pour l'installer
comme une application (icône, plein écran, hors-ligne).

### Publier sur GitHub Pages

Le projet est 100 % statique : activer **GitHub Pages** sur la branche, dossier
racine `/`, et l'app est en ligne. Le service worker gère le cache hors-ligne.

## Structure

```
index.html              page unique
manifest.webmanifest    métadonnées PWA (installation)
sw.js                   service worker (hors-ligne)
css/styles.css          styles
js/data.js              tout le contenu jardinage (modifiable facilement)
js/app.js               logique (onglets, checklists, persistance)
icons/                  icônes de l'application
```

## Personnaliser le contenu

Tout le contenu jardinage vit dans [`js/data.js`](js/data.js) : étapes de
préparation, serre, plantes (dates, entretien, astuces) et fin de saison.
Chaque tâche a un `id` stable — le garder pour conserver les cases cochées.
