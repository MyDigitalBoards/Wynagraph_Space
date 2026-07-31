// ─────────────────────────────────────────────────────────────────────────────
// normalizeGraph — accepte les deux formats :
//   • Format blog natif  : nodes[].group, edges[].source/target/label
//   • Export WynaGraph   : nodes[].category, relationships[].source/target/type,
//                          properties en objet clé/valeur
// Retourne toujours le format blog (nodes[].group, edges[].label tableau props)
// ─────────────────────────────────────────────────────────────────────────────
function normalizeGraph(graph) {
  // Normaliser les nœuds
  const nodes = (graph.nodes || []).map(n => ({
    ...n,
    label:      n.label && n.label !== n.id ? n.label : (n.label || n.id),
    group:      n.group || n.category || "default",
    size:       n.size || 18,
    properties: normalizeProperties(n.properties),
  }));

  // Accepter "edges" ou "relationships"
  const rawEdges = graph.edges || graph.relationships || [];

  const edges = rawEdges.map(e => ({
    source:     e.source || e.from,
    target:     e.target || e.to,
    // "type" (WynaGraph export) → label lisible ; "label" (format natif) conservé
    label:      e.label || denormalize(e.type) || "",
    properties: normalizeProperties(e.properties),
  }));

  return { ...graph, nodes, edges };
}

// Clé "générique" = nom de remplissage automatique du Workspace pour une
// propriété non nommée (prop_1, prop 2, propriete3, champ_1, attribut1…),
// ou un simple indice numérique. Ces intitulés n'apportent rien à la
// lecture : on n'affiche alors que la valeur.
// Volontairement restrictif : un intitulé choisi par l'auteur (« Valeur »,
// « Champ libre », « Propriétaire »…) doit rester affiché.
const GENERIC_KEY_RE = /^(?:prop(?:riete|riété|erty)?|champ|attribut|attr)?[\s._-]*\d*$/i;

function isGenericKey(key) {
  const k = String(key == null ? '' : key).trim();
  return k === '' || GENERIC_KEY_RE.test(k);
}

// Convertit un objet {clé: valeur} ou un tableau en tableau de strings
function normalizeProperties(props) {
  if (!props) return [];
  if (Array.isArray(props)) {
    return props.map(String).map(s => s.trim()).filter(Boolean);
  }
  // objet clé/valeur → ["clé: valeur", ...] ; les clés génériques
  // (prop_1…) sont omises, seule leur valeur est conservée.
  return Object.entries(props)
    .map(([k, v]) => {
      const value = String(v == null ? '' : v).trim();
      if (!value) return '';                       // propriété vide : ignorée
      return isGenericKey(k) ? value : `${k}: ${value}`;
    })
    .filter(Boolean);
}

// "CONTROLE_QUALITE" → "Controle qualite"
function denormalize(str) {
  if (!str) return '';
  return str.replace(/_/g, ' ').toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

const CATEGORY_COLORS = {
  genre: "#42ebe2", auteur: "#0dbac1", livre: "#7dd3fc",
  racine: "#42ebe2", branche: "#0dbac1", penseur: "#a78bfa",
  notion: "#7dd3fc", figure: "#fbbf24", objet: "#e05454", pratique: "#34d399",
  legume: "#34d399", herbe: "#86efac", laitier: "#fde68a",
  technique: "#fbbf24", fruit: "#fcd34d", proteine: "#fca5a5", saison: "#42ebe2",
  scene: "#42ebe2", artiste: "#a78bfa",
  haircare: "#e879b9", pays: "#7dd3fc", personne: "#fbbf24", groupe: "#e05454",
  default: "#1D3655",
};

// Palette de secours pour les catégories inconnues (graphes importés depuis
// WynaGraph Workspace) : une couleur stable est attribuée par hachage du nom,
// afin que chaque catégorie reste visuellement distincte d'une session à l'autre.
const FALLBACK_PALETTE = [
  "#42ebe2", "#0dbac1", "#7dd3fc", "#a78bfa", "#fbbf24", "#34d399",
  "#e879b9", "#fca5a5", "#fcd34d", "#86efac", "#e05454", "#fde68a",
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function colorFor(group) {
  const key = (group || "").toLowerCase();
  if (!key || key === "default" || key === "unassigned") return CATEGORY_COLORS.default;
  if (CATEGORY_COLORS[key]) return CATEGORY_COLORS[key];
  return FALLBACK_PALETTE[hashString(key) % FALLBACK_PALETTE.length];
}

// Couleur de texte lisible sur un fond donné (équivalent de
// getCategoryTextColor du Workspace) : sombre sur couleur claire, blanc sinon.
function textColorFor(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "").trim());
  if (!m) return "#ffffff";
  const v = parseInt(m[1], 16);
  const r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 150 ? "#042042" : "#ffffff";
}

function buildNetwork(container, graphRaw, opts = {}) {
  const graph = normalizeGraph(graphRaw);
  const interactive = opts.interactive !== false;

  // Positions embarquées ? (export Workspace avec x/y : on respecte la mise
  // en page telle qu'elle était dans le Workspace, physique coupée.)
  const hasPositions = graph.nodes.length > 0 &&
    graph.nodes.every(n => typeof n.x === 'number' && typeof n.y === 'number');

  const nodes = new vis.DataSet(
    graph.nodes.map((n) => {
      const c = colorFor(n.group);
      return {
        id: n.id,
        label: interactive ? n.label : "",
        ...(hasPositions ? { x: n.x, y: n.y } : {}),
        value: n.size || 14,
        // Même rendu que le Workspace : boîte remplie de la couleur de la
        // catégorie (identique aux pastilles de la légende), texte contrasté.
        shape: "box",
        margin: interactive ? 10 : 4,
        color: {
          background: c,
          border: c,
          highlight: { background: c, border: "#42ebe2" },
          hover:     { background: c, border: "#ffffff" },
        },
        font: {
          color: textColorFor(c),
          size: interactive ? 13 : 10,
          face: "Inter",
          bold: interactive,
        },
        borderWidth: 1,
        borderWidthSelected: 2,
        shadow: interactive
          ? { enabled: true, color: "rgba(0,0,0,0.4)", size: 10, x: 0, y: 4 }
          : false,
      };
    })
  );

  // Une courbure n'a de raison d'être que si plusieurs liens relient la
  // même paire de nœuds : sans elle, ils se superposeraient. Partout
  // ailleurs, la ligne droite est plus lisible et sa longueur suit
  // exactement la distance entre les deux nœuds. On repère donc les paires
  // concernées avant de construire les liens.
  const pairKey = (a, b) => [String(a), String(b)].sort().join("\u0000");
  const pairCount = {};
  graph.edges.forEach(e => {
    const k = pairKey(e.source, e.target);
    pairCount[k] = (pairCount[k] || 0) + 1;
  });
  const pairSeen = {};

  // Courbure d'un lien : droite si la paire est unique ; sinon un arc de
  // part et d'autre, écarté un peu plus à chaque lien supplémentaire.
  function smoothFor(e) {
    if (String(e.source) === String(e.target)) return undefined; // boucle : vis gère
    const k = pairKey(e.source, e.target);
    if ((pairCount[k] || 0) < 2) return false;                   // ligne droite
    const rank = (pairSeen[k] = (pairSeen[k] || 0) + 1) - 1;
    return {
      enabled: true,
      type: rank % 2 === 0 ? "curvedCW" : "curvedCCW",
      roundness: 0.2 + 0.12 * Math.floor(rank / 2),
    };
  }

  const edges = new vis.DataSet(
    graph.edges.map((e, i) => ({
      id: i,
      from: e.source,
      to: e.target,
      label: e.label || "",
      properties: e.properties || [],
      color: {
        color: "rgba(255,255,255,0.18)",
        highlight: "#42ebe2",
        hover: "#42ebe2",
      },
      font: {
        color: "#AAB4C0",
        size: 11,
        align: "middle",
        strokeWidth: interactive ? 3 : 0,
        strokeColor: "#042042",
      },
      width: 1,
      smooth: smoothFor(e),
      arrows: interactive
        ? { to: { enabled: true, scaleFactor: 0.8 } }
        : undefined,
    }))
  );

  const options = {
    physics: hasPositions ? false : {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -3500,
        centralGravity: 0.15,
        springLength: interactive ? 142 : 90,
        springConstant: 0.04,
      },
      // Pré-placement partiel, hors écran : le graphe apparaît déjà dégrossi
      // et cadré, puis finit de se poser sous les yeux du visiteur. C'est ce
      // dosage qui donne le mouvement sans l'explosion initiale — trop peu
      // d'itérations et l'ouverture part d'un amas confus, trop et il ne
      // reste plus rien à voir. `fit: true` : vis cadre une seule fois, à la
      // fin de ce pré-placement.
      stabilization: {
        enabled: true,
        iterations: interactive ? 90 : 60,
        fit: true,
      },
      maxVelocity: 12,
      minVelocity: 0.7,
    },
    interaction: {
      hover: interactive,
      zoomView: interactive,
      dragView: interactive,
      dragNodes: interactive,
      selectable: interactive,
      selectConnectedEdges: false,
    },
    nodes: { borderWidth: 1, scaling: { min: 8, max: 30 } },
    edges: {
      font: { color: "#AAB4C0", size: 11, align: "middle", strokeWidth: 3, strokeColor: "#042042" },
      color: { color: "rgba(255,255,255,.18)", highlight: "#42ebe2", hover: "#42ebe2" },
      arrows: { to: { enabled: true, scaleFactor: 0.8 } },
      // Réglage par défaut : lignes droites. Le mode « dynamic » de
      // vis-network attache à chaque lien un point de contrôle invisible,
      // lui-même soumis à la physique : il traîne derrière le mouvement et
      // déforme les liens en arcs qui ne suivent plus la distance réelle
      // entre les nœuds. Les rares liens multiples reçoivent une courbure
      // explicite (voir smoothFor ci-dessus).
      smooth: false,
    },
  };

  const network = new vis.Network(container, { nodes, edges }, options);

  // Interrompt le cadrage automatique du démarrage. Appelé dès que le
  // visiteur prend la main, et par l'appelant lorsqu'il pilote lui-même la
  // vue (recadrage sur filtrage, par exemple).
  let stopAutoFit = () => {};

  if (hasPositions) {
    // Graphe importé avec ses positions : mise en page respectée, rien à
    // simuler. Le visiteur peut activer la physique s'il le souhaite.
    network.once("afterDrawing", () => network.fit({ animation: false }));
  } else {
    // Un seul recadrage, en douceur, une fois que le graphe a fini de se
    // poser. Pas de suivi répété pendant l'animation : recadrer toutes les
    // fractions de seconde pendant que les nœuds bougent produit des
    // sursauts de la vue. Le cadrage initial est déjà assuré par
    // `stabilization.fit`, celui-ci ne fait que rattraper la dérive
    // résiduelle du dernier mouvement.
    let pending = true;
    stopAutoFit = () => {
      if (!pending) return;
      pending = false;
      clearTimeout(settleFit);
    };
    const settleFit = setTimeout(() => {
      if (!pending) return;
      pending = false;
      network.fit({ animation: { duration: 700, easingFunction: "easeInOutQuad" } });
    }, 1600);

    // Le visiteur a pris la main : la vue lui appartient, on n'y touche plus.
    if (interactive) {
      ["dragStart", "zoom", "click"].forEach(ev => network.on(ev, () => stopAutoFit()));
    }
  }

  // La physique reste ACTIVE : le graphe respire, et un nœud déplacé
  // entraîne ses voisins. En plein écran, le visiteur peut la couper via le
  // bouton « Physique » s'il préfère figer la disposition.
  return { network, nodes, edges, graph, hasPositions, stopAutoFit: () => stopAutoFit() };
}