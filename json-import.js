// json-import.js — Import de graphes JSON exportés depuis WynaGraph Workspace.
//
// Format accepté (celui produit par exportToJSON dans import-export.js du Workspace) :
// {
//   "metadata":      { "exporter": "WynaGraph", "generated_at": "...", ... },
//   "nodes":         [ { "id", "label", "category", "properties": { clé: valeur } }, ... ],
//   "relationships": [ { "id", "type", "source", "target", "properties": { clé: valeur } }, ... ]
// }
//
// Le format natif du blog (nodes[].group + edges[].source/target/label) est
// également accepté — normalizeGraph (graph-render.js) gère les deux.
//
// Le graphe importé est stocké en sessionStorage puis affiché via
// graph.html?id=import. 100% local : rien ne quitte le navigateur.

(function (global) {
  const STORAGE_KEY = 'wynagraph:imported-graph';
  const MAX_SIZE = 5 * 1024 * 1024; // 5 Mo, même limite que le Workspace

  // ── Validation du contenu ─────────────────────────────────────────────────
  // Retourne un message d’erreur (string) ou null si le graphe est valide.
  function validate(data) {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return 'Le fichier ne contient pas un objet JSON de graphe valide.';
    }
    if (!Array.isArray(data.nodes) || data.nodes.length === 0) {
      return 'Aucun nœud trouvé : le fichier doit contenir un tableau « nodes » non vide.';
    }
    const badNode = data.nodes.find(n => !n || n.id === undefined || n.id === null || n.id === '');
    if (badNode !== undefined) {
      return 'Certains nœuds n’ont pas d’identifiant « id ».';
    }
    const edges = data.edges !== undefined ? data.edges : data.relationships;
    if (edges !== undefined && !Array.isArray(edges)) {
      return 'Le champ « relationships » (ou « edges ») doit être un tableau.';
    }
    return null;
  }

  // ── Construction de l’objet graphe au format attendu par graph.html ─────
  function buildGraphObject(data, filename) {
    const rawEdges = Array.isArray(data.edges)
      ? data.edges
      : (Array.isArray(data.relationships) ? data.relationships : []);

    // On filtre les relations qui référencent un nœud inexistant : elles
    // feraient échouer vis-network. On en garde le compte pour prévenir.
    const ids = new Set(data.nodes.map(n => String(n.id)));
    const validEdges = rawEdges.filter(e => {
      if (!e) return false;
      const s = e.source !== undefined ? e.source : e.from;
      const t = e.target !== undefined ? e.target : e.to;
      return ids.has(String(s)) && ids.has(String(t));
    });

    // Titre : nom du fichier nettoyé (wynagraph_export_2026-07-15.json → "wynagraph export 2026-07-15")
    const baseName = String(filename || '')
      .replace(/\.json$/i, '')
      .replace(/[_]+/g, ' ')
      .trim();

    return {
      id: 'import',
      title: baseName || 'Graphe importé',
      category: 'Import',
      description: (data.metadata && data.metadata.exporter)
        ? 'Importé depuis ' + data.metadata.exporter
        : 'Graphe importé (JSON)',
      importedAt: new Date().toISOString(),
      metadata: data.metadata || null,
      nodes: data.nodes,
      relationships: validEdges,
      droppedEdges: rawEdges.length - validEdges.length,
    };
  }

  // ── Sauvegarde + ouverture dans graph.html ────────────────────────────────
  function saveAndOpen(graphObj) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(graphObj));
    } catch (err) {
      return 'Impossible de stocker le graphe dans le navigateur (fichier trop volumineux ?).';
    }
    const alreadyOnImportView =
      /graph\.html$/i.test(location.pathname) &&
      new URLSearchParams(location.search).get('id') === 'import';
    if (alreadyOnImportView) {
      location.reload();
    } else {
      location.href = '/graph.html?id=import';
    }
    return null;
  }

  // ── Mode auteur ───────────────────────────────────────────────────────────
  // L'interface d'import est réservée au propriétaire du site, et n'existe
  // QUE lorsque le site tourne en local (fichier ouvert directement, ou
  // serveur de développement sur localhost). Sur le site publié, ?studio=1
  // n'a aucun effet : un visiteur qui devine ou lit le paramètre dans ce
  // fichier — il est public, comme tout JavaScript de page — n'obtient rien.
  //
  // Sur un site statique il ne peut pas exister de véritable
  // authentification : tout le code est livré au navigateur. Le verrou
  // d'hôte est donc la seule barrière réellement fiable, et c'est celle-ci
  // qui garantit qu'un visiteur ne verra jamais l'interface d'auteur.
  //
  // Pour publier depuis une préversion privée, ajouter son nom d'hôte ici —
  // en gardant à l'esprit qu'un hôte public rouvre l'accès à quiconque
  // connaît le paramètre.
  const AUTHOR_HOSTS = ['localhost', '127.0.0.1', '::1', '[::1]'];
  const AUTHOR_KEY = 'wynagraph:author-mode';

  // Le site tourne-t-il en local ? (fichier local, localhost, ou nom d'hôte
  // de réseau local type "mon-mac.local")
  function isLocalContext() {
    try {
      if (location.protocol === 'file:') return true;
      const host = String(location.hostname || '').toLowerCase();
      if (!host) return true;                       // file:// sans hostname
      return AUTHOR_HOSTS.indexOf(host) !== -1 || /\.local$/.test(host);
    } catch (err) {
      return false;
    }
  }

  function isAuthorMode() {
    try {
      if (!isLocalContext()) {
        // Site publié : aucun mode auteur possible. On efface au passage un
        // drapeau qui aurait pu être posé sur cette origine avant ce verrou.
        try { localStorage.removeItem(AUTHOR_KEY); } catch (e) {}
        return false;
      }
      const p = new URLSearchParams(location.search);
      // La mémorisation est un confort, pas une condition : certains
      // navigateurs bloquent localStorage sur file://. Le paramètre doit
      // fonctionner même dans ce cas, quitte à devoir le remettre à chaque
      // page ouverte.
      if (p.get('studio') === '1') {
        try { localStorage.setItem(AUTHOR_KEY, '1'); } catch (e) {}
        return true;
      }
      if (p.get('studio') === '0') {
        try { localStorage.removeItem(AUTHOR_KEY); } catch (e) {}
        return false;
      }
      try {
        return localStorage.getItem(AUTHOR_KEY) === '1';
      } catch (e) {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // ── Point d’entrée : traiter un File (input ou drag & drop) ──────────────
  function handleFile(file, onError) {
    const fail = msg => { if (typeof onError === 'function') onError(msg); };

    if (!file) return;
    if (!/\.json$/i.test(file.name)) {
      fail('Format incorrect : choisissez un fichier .json exporté depuis WynaGraph Workspace.');
      return;
    }
    // Vérifier la taille AVANT lecture, comme dans le Workspace.
    if (file.size > MAX_SIZE) {
      fail('Fichier trop volumineux (limite : 5 Mo).');
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => fail('Impossible de lire le fichier.');
    reader.onload = e => {
      let data;
      try {
        data = JSON.parse(e.target.result);
      } catch (err) {
        fail('JSON invalide : le fichier n’a pas pu être analysé.');
        return;
      }
      const err = validate(data);
      if (err) { fail(err); return; }

      const graphObj = buildGraphObject(data, file.name);
      const saveErr = saveAndOpen(graphObj);
      if (saveErr) fail(saveErr);
    };
    reader.readAsText(file, 'utf-8');
  }

  // ── Relecture du graphe importé (utilisé par graph.html?id=import) ───────
  function loadImportedGraph() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  global.WynaImport = { handleFile, loadImportedGraph, isAuthorMode, STORAGE_KEY };
})(window);
