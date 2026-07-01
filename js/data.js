/* =========================================================================
   Données du potager — tout le contenu jardinage de l'application.
   Modifiable librement : chaque tâche possède un id stable pour mémoriser
   les cases cochées dans le navigateur (localStorage).
   ========================================================================= */

/* ---- Étapes de PRÉPARATION du potager -------------------------------- */
const PREPARATION = [
  {
    titre: 'Planification',
    icone: '🗺️',
    taches: [
      { id: 'prep-plan-1', txt: 'Choisir l\'emplacement (min. 6 h de soleil par jour)' },
      { id: 'prep-plan-2', txt: 'Dessiner le plan des planches et allées' },
      { id: 'prep-plan-3', txt: 'Prévoir la rotation des cultures (ne pas remettre la même famille au même endroit)' },
      { id: 'prep-plan-4', txt: 'Lister les légumes à cultiver cette saison' },
      { id: 'prep-plan-5', txt: 'Noter les associations favorables et à éviter' },
    ],
  },
  {
    titre: 'Préparation du sol',
    icone: '⛏️',
    taches: [
      { id: 'prep-sol-1', txt: 'Nettoyer : enlever mauvaises herbes, cailloux et débris' },
      { id: 'prep-sol-2', txt: 'Décompacter le sol (grelinette plutôt que bêche)' },
      { id: 'prep-sol-3', txt: 'Apporter du compost mûr (2–3 cm)' },
      { id: 'prep-sol-4', txt: 'Amender selon le sol (corne broyée, fumier, cendre…)' },
      { id: 'prep-sol-5', txt: 'Ratisser pour affiner et niveler la surface' },
      { id: 'prep-sol-6', txt: 'Pailler les planches qui ne seront pas semées tout de suite' },
    ],
  },
  {
    titre: 'Matériel & semis',
    icone: '🧰',
    taches: [
      { id: 'prep-mat-1', txt: 'Vérifier et nettoyer les outils' },
      { id: 'prep-mat-2', txt: 'Préparer terreau, godets et étiquettes' },
      { id: 'prep-mat-3', txt: 'Faire l\'inventaire des graines (vérifier les dates)' },
      { id: 'prep-mat-4', txt: 'Installer le système d\'arrosage / récupérateur d\'eau' },
      { id: 'prep-mat-5', txt: 'Commander graines et plants manquants' },
    ],
  },
];

/* ---- Étapes spécifiques SERRE ---------------------------------------- */
const SERRE = [
  {
    titre: 'Mise en route de la serre',
    icone: '🏠',
    taches: [
      { id: 'serre-1', txt: 'Nettoyer et désinfecter les parois (eau + savon noir/vinaigre)' },
      { id: 'serre-2', txt: 'Aérer et vérifier l\'ouverture des fenêtres/lucarnes' },
      { id: 'serre-3', txt: 'Préparer le sol ou les bacs (compost + terreau)' },
      { id: 'serre-4', txt: 'Installer un thermomètre mini/maxi' },
      { id: 'serre-5', txt: 'Prévoir un voile d\'hivernage pour les nuits froides' },
    ],
  },
  {
    titre: 'Entretien courant de la serre',
    icone: '🌡️',
    taches: [
      { id: 'serre-e-1', txt: 'Aérer chaque jour aux heures chaudes (éviter l\'excès d\'humidité)' },
      { id: 'serre-e-2', txt: 'Surveiller la température (ombrer si > 30 °C)' },
      { id: 'serre-e-3', txt: 'Arroser le matin, au pied, sans mouiller le feuillage' },
      { id: 'serre-e-4', txt: 'Surveiller pucerons et araignées rouges (favorisées par le sec)' },
      { id: 'serre-e-5', txt: 'Retirer feuilles mortes et plants malades rapidement' },
    ],
  },
];

/* ---- Étapes de RÉCOLTE & FIN DE SAISON ------------------------------- */
const FIN_SAISON = [
  {
    titre: 'Récolte',
    icone: '🧺',
    taches: [
      { id: 'fin-rec-1', txt: 'Récolter régulièrement pour stimuler la production' },
      { id: 'fin-rec-2', txt: 'Récolter le matin, par temps sec, pour une meilleure conservation' },
      { id: 'fin-rec-3', txt: 'Récupérer les graines des plus beaux plants' },
      { id: 'fin-rec-4', txt: 'Conserver : congélation, séchage, lactofermentation, cave…' },
    ],
  },
  {
    titre: 'Nettoyage & repos du sol',
    icone: '🍂',
    taches: [
      { id: 'fin-net-1', txt: 'Arracher les plants terminés (au compost si sains)' },
      { id: 'fin-net-2', txt: 'Retirer et brûler/jeter les plants malades (pas au compost)' },
      { id: 'fin-net-3', txt: 'Semer un engrais vert (phacélie, moutarde, féverole…)' },
      { id: 'fin-net-4', txt: 'Pailler abondamment les planches nues pour l\'hiver' },
      { id: 'fin-net-5', txt: 'Nettoyer, sécher et ranger les outils' },
      { id: 'fin-net-6', txt: 'Vider et protéger le système d\'arrosage du gel' },
    ],
  },
  {
    titre: 'Bilan',
    icone: '📓',
    taches: [
      { id: 'fin-bil-1', txt: 'Noter réussites et échecs de la saison' },
      { id: 'fin-bil-2', txt: 'Mettre à jour le plan de rotation pour l\'an prochain' },
      { id: 'fin-bil-3', txt: 'Faire l\'inventaire des graines restantes' },
    ],
  },
];

/* ---- SAISONS (pour filtrer le calendrier) ---------------------------- */
const SAISONS = [
  { id: 'printemps', nom: 'Printemps', emoji: '🌸', mois: [3, 4, 5] },
  { id: 'ete',       nom: 'Été',       emoji: '☀️', mois: [6, 7, 8] },
  { id: 'automne',   nom: 'Automne',   emoji: '🍂', mois: [9, 10, 11] },
  { id: 'hiver',     nom: 'Hiver',     emoji: '❄️', mois: [12, 1, 2] },
];

/* ---- PLANTES : quand semer/planter/récolter + entretien + astuces ---- */
/* saisons = saisons où l'on SÈME/PLANTE (pour le filtre du calendrier).   */
const PLANTES = [
  {
    id: 'tomate', nom: 'Tomate', emoji: '🍅', famille: 'Solanacées', serre: true,
    saisons: ['printemps'],
    semis: 'Février–Avril, au chaud ou en serre',
    plantation: 'Mai, après les Saints de Glace (mi-mai)',
    recolte: 'Juillet–Octobre',
    entretien: [
      { id: 'e-tomate-1', txt: 'Tuteurer les pieds solidement' },
      { id: 'e-tomate-2', txt: 'Supprimer les gourmands chaque semaine' },
      { id: 'e-tomate-3', txt: 'Arroser au pied, régulièrement, sans mouiller le feuillage' },
      { id: 'e-tomate-4', txt: 'Pailler le pied pour garder l\'humidité' },
      { id: 'e-tomate-5', txt: 'Retirer les feuilles basses jaunies' },
    ],
    astuces: [
      'Un arrosage régulier évite l\'éclatement des fruits et le cul noir (nécrose apicale).',
      'En serre, aérer chaque jour pour prévenir le mildiou.',
      'Le basilic et l\'œillet d\'Inde à proximité éloignent certains nuisibles.',
    ],
  },
  {
    id: 'courgette', nom: 'Courgette', emoji: '🥒', famille: 'Cucurbitacées', serre: false,
    saisons: ['printemps'],
    semis: 'Avril–Mai (au chaud), Mai–Juin en pleine terre',
    plantation: 'Mi-mai à juin',
    recolte: 'Juin–Octobre',
    entretien: [
      { id: 'e-courgette-1', txt: 'Laisser 1 m² par pied (elle s\'étale)' },
      { id: 'e-courgette-2', txt: 'Arroser copieusement au pied par temps chaud' },
      { id: 'e-courgette-3', txt: 'Pailler pour garder le sol frais' },
      { id: 'e-courgette-4', txt: 'Récolter jeune (15–20 cm) pour relancer la production' },
    ],
    astuces: [
      'Récolter souvent : un fruit oublié épuise le plant et stoppe les nouvelles courgettes.',
      'En cas d\'oïdium (feutrage blanc), pulvériser du lait dilué ou du bicarbonate.',
    ],
  },
  {
    id: 'salade', nom: 'Salade / Laitue', emoji: '🥬', famille: 'Astéracées', serre: true,
    saisons: ['printemps', 'ete', 'automne'],
    semis: 'Mars–Septembre (échelonné toutes les 2–3 sem.)',
    plantation: 'Avril–Octobre',
    recolte: 'Mai–Novembre',
    entretien: [
      { id: 'e-salade-1', txt: 'Éclaircir pour laisser ~25 cm entre les plants' },
      { id: 'e-salade-2', txt: 'Arroser régulièrement pour éviter la montée en graines' },
      { id: 'e-salade-3', txt: 'Biner pour aérer le sol' },
      { id: 'e-salade-4', txt: 'Surveiller limaces et escargots' },
    ],
    astuces: [
      'Semer un peu toutes les 2–3 semaines pour une récolte continue.',
      'En été, semer à mi-ombre : la chaleur fait monter les laitues en graines.',
    ],
  },
  {
    id: 'radis', nom: 'Radis', emoji: '🔴', famille: 'Brassicacées', serre: true,
    saisons: ['printemps', 'ete', 'automne'],
    semis: 'Mars–Septembre, directement en place',
    plantation: '—',
    recolte: '3–5 semaines après le semis',
    entretien: [
      { id: 'e-radis-1', txt: 'Semer clair pour éviter d\'éclaircir' },
      { id: 'e-radis-2', txt: 'Garder le sol frais (arrosages légers et fréquents)' },
      { id: 'e-radis-3', txt: 'Récolter jeune avant qu\'ils deviennent creux/piquants' },
    ],
    astuces: [
      'Idéal pour débuter et occuper les rangs libres : très rapide.',
      'Un manque d\'eau les rend piquants et fibreux.',
    ],
  },
  {
    id: 'carotte', nom: 'Carotte', emoji: '🥕', famille: 'Apiacées', serre: false,
    saisons: ['printemps', 'ete'],
    semis: 'Mars–Juillet, directement en place',
    plantation: '—',
    recolte: 'Juin–Novembre',
    entretien: [
      { id: 'e-carotte-1', txt: 'Éclaircir à 3–5 cm entre les plants' },
      { id: 'e-carotte-2', txt: 'Biner et désherber régulièrement' },
      { id: 'e-carotte-3', txt: 'Garder le sol frais, sans excès' },
    ],
    astuces: [
      'Semer avec des radis : ils marquent le rang et lèvent plus vite.',
      'La mouche de la carotte : associer avec des oignons ou poser un voile.',
    ],
  },
  {
    id: 'haricot', nom: 'Haricot vert', emoji: '🫛', famille: 'Fabacées', serre: false,
    saisons: ['printemps', 'ete'],
    semis: 'Mai–Juillet (sol > 12 °C), en place',
    plantation: '—',
    recolte: 'Juillet–Octobre',
    entretien: [
      { id: 'e-haricot-1', txt: 'Butter les pieds quand ils font ~15 cm' },
      { id: 'e-haricot-2', txt: 'Tuteurer les variétés à rames' },
      { id: 'e-haricot-3', txt: 'Arroser au pied, surtout à la floraison' },
      { id: 'e-haricot-4', txt: 'Récolter tous les 2–3 jours' },
    ],
    astuces: [
      'Ne pas semer trop tôt : le haricot craint le froid et pourrit en sol froid.',
      'Cueillir souvent stimule la production de nouvelles gousses.',
    ],
  },
  {
    id: 'poivron', nom: 'Poivron / Piment', emoji: '🫑', famille: 'Solanacées', serre: true,
    saisons: ['printemps'],
    semis: 'Février–Mars, au chaud',
    plantation: 'Mai–Juin (idéal en serre)',
    recolte: 'Juillet–Octobre',
    entretien: [
      { id: 'e-poivron-1', txt: 'Tuteurer les pieds chargés de fruits' },
      { id: 'e-poivron-2', txt: 'Arroser régulièrement sans excès' },
      { id: 'e-poivron-3', txt: 'Pincer la tête pour favoriser la ramification' },
    ],
    astuces: [
      'Chaleur indispensable : la serre donne de bien meilleurs résultats.',
      'Récolter vert ou attendre le rouge (plus sucré) selon le goût.',
    ],
  },
  {
    id: 'concombre', nom: 'Concombre', emoji: '🥒', famille: 'Cucurbitacées', serre: true,
    saisons: ['printemps'],
    semis: 'Mars–Mai, au chaud',
    plantation: 'Mai–Juin (excellent en serre)',
    recolte: 'Juillet–Septembre',
    entretien: [
      { id: 'e-concombre-1', txt: 'Palisser sur un treillis ou des ficelles' },
      { id: 'e-concombre-2', txt: 'Arroser abondamment et régulièrement' },
      { id: 'e-concombre-3', txt: 'Pailler pour maintenir l\'humidité' },
    ],
    astuces: [
      'Un stress hydrique rend les concombres amers.',
      'En serre, aérer pour limiter l\'oïdium.',
    ],
  },
  {
    id: 'aubergine', nom: 'Aubergine', emoji: '🍆', famille: 'Solanacées', serre: true,
    saisons: ['printemps'],
    semis: 'Février–Mars, au chaud',
    plantation: 'Mai–Juin (idéal en serre)',
    recolte: 'Juillet–Octobre',
    entretien: [
      { id: 'e-aubergine-1', txt: 'Tuteurer les pieds' },
      { id: 'e-aubergine-2', txt: 'Limiter à 4–6 fruits par pied pour de beaux légumes' },
      { id: 'e-aubergine-3', txt: 'Arroser régulièrement au pied' },
    ],
    astuces: [
      'Plante gourmande en chaleur : la serre prolonge la saison.',
      'Surveiller les doryphores (mêmes que la pomme de terre).',
    ],
  },
  {
    id: 'fraise', nom: 'Fraise', emoji: '🍓', famille: 'Rosacées', serre: false,
    saisons: ['printemps', 'automne'],
    semis: '—',
    plantation: 'Août–Septembre ou Mars–Avril',
    recolte: 'Mai–Juillet (et remontantes jusqu\'en automne)',
    entretien: [
      { id: 'e-fraise-1', txt: 'Pailler sous les fruits (paille) pour les garder propres' },
      { id: 'e-fraise-2', txt: 'Couper les stolons non désirés' },
      { id: 'e-fraise-3', txt: 'Arroser au pied sans mouiller les fruits' },
      { id: 'e-fraise-4', txt: 'Renouveler les plants tous les 3 ans' },
    ],
    astuces: [
      'Récupérer les stolons enracinés pour multiplier gratuitement les plants.',
      'Un filet protège des oiseaux à maturité.',
    ],
  },
  {
    id: 'pdt', nom: 'Pomme de terre', emoji: '🥔', famille: 'Solanacées', serre: false,
    saisons: ['printemps'],
    semis: '—',
    plantation: 'Mars–Mai (plants germés / tubercules)',
    recolte: 'Juin–Septembre',
    entretien: [
      { id: 'e-pdt-1', txt: 'Butter les pieds au fur et à mesure de la croissance' },
      { id: 'e-pdt-2', txt: 'Arroser en période sèche pendant la formation des tubercules' },
      { id: 'e-pdt-3', txt: 'Surveiller doryphores et mildiou' },
    ],
    astuces: [
      'Faire pré-germer les tubercules à la lumière avant plantation.',
      'Récolter les primeurs à la floraison, le reste quand le feuillage jaunit.',
    ],
  },
  {
    id: 'pois', nom: 'Petits pois', emoji: '🟢', famille: 'Fabacées', serre: false,
    saisons: ['printemps', 'automne'],
    semis: 'Février–Avril et Octobre–Novembre, en place',
    plantation: '—',
    recolte: 'Mai–Juillet',
    entretien: [
      { id: 'e-pois-1', txt: 'Installer un support (rames, grillage) dès le semis' },
      { id: 'e-pois-2', txt: 'Butter légèrement les jeunes plants' },
      { id: 'e-pois-3', txt: 'Récolter régulièrement les gousses bien pleines' },
    ],
    astuces: [
      'Culture de saison fraîche : sème tôt, il gèle rarement à ce stade.',
      'Comme tous les légumineuses, il enrichit le sol en azote.',
    ],
  },
  {
    id: 'poireau', nom: 'Poireau', emoji: '🧅', famille: 'Amaryllidacées', serre: false,
    saisons: ['printemps', 'ete'],
    semis: 'Février–Avril',
    plantation: 'Mai–Juillet (repiquage)',
    recolte: 'Septembre–Mars (tout l\'hiver)',
    entretien: [
      { id: 'e-poireau-1', txt: 'Habiller les racines et le feuillage au repiquage' },
      { id: 'e-poireau-2', txt: 'Butter pour blanchir les fûts' },
      { id: 'e-poireau-3', txt: 'Biner et arroser en été' },
    ],
    astuces: [
      'Rustique : se récolte au fur et à mesure des besoins tout l\'hiver.',
      'Contre le ver du poireau, poser un voile anti-insectes.',
    ],
  },
  {
    id: 'epinard', nom: 'Épinard', emoji: '🍃', famille: 'Amaranthacées', serre: true,
    saisons: ['printemps', 'automne'],
    semis: 'Mars–Mai et Août–Septembre, en place',
    plantation: '—',
    recolte: 'Avril–Novembre',
    entretien: [
      { id: 'e-epinard-1', txt: 'Garder le sol frais (arrosages réguliers)' },
      { id: 'e-epinard-2', txt: 'Éclaircir à ~10 cm' },
      { id: 'e-epinard-3', txt: 'Récolter feuille à feuille ou couper à 3 cm du sol' },
    ],
    astuces: [
      'Préfère la fraîcheur : monte vite en graines par forte chaleur.',
      'Semis d\'automne possible en serre pour une récolte hivernale.',
    ],
  },
  {
    id: 'aromatiques', nom: 'Aromatiques', emoji: '🌿', famille: 'Diverses', serre: true,
    saisons: ['printemps', 'ete'],
    semis: 'Mars–Juin selon les espèces',
    plantation: 'Avril–Juin',
    recolte: 'Toute la belle saison',
    entretien: [
      { id: 'e-aromatiques-1', txt: 'Pincer régulièrement pour ramifier (basilic, menthe)' },
      { id: 'e-aromatiques-2', txt: 'Récolter le matin, avant la floraison, pour plus d\'arôme' },
      { id: 'e-aromatiques-3', txt: 'Limiter la menthe (envahissante) en pot' },
      { id: 'e-aromatiques-4', txt: 'Rentrer le basilic ou le protéger dès les nuits fraîches' },
    ],
    astuces: [
      'Beaucoup d\'aromatiques (thym, romarin, sauge) aiment le sec et le soleil.',
      'Sécher ou congeler le surplus pour l\'hiver.',
    ],
  },
];
