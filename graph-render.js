
// Couleurs de categorie fournies par le fichier importe lui-meme (export
// JSON du Workspace WynaGraph, voir exportToJSON dans import-export.js :
// chaque nœud y porte son propre hex de categorie sous n.color). Repeuplee
// a chaque normalizeGraph() (donc a chaque chargement de graphe), lue par
// colorFor() ci-dessous — un seul point de verite pour que le graphe, la
// legende ET les cartes utilisent tous la MEME couleur importee plutot que
// la palette generique du site. Vide (comportement par defaut, inchange)
// pour un graphe du blog qui ne fournit pas ce champ.
let importedCategoryColors = {};

const HEX_COLOR_RE = /^#[0-9a-f]{6}$/i;

function normalizeGraph(graph) {
  // Normaliser les nœuds
  const nodes = (graph.nodes || []).map(n => ({
    ...n,
    label:      n.label && n.label !== n.id ? n.label : (n.label || n.id),
    group:      n.group || n.category || "default",
    size:       n.size || 18,
    properties: normalizeProperties(n.properties),
  }));

  // Un nœud peut porter sa couleur de categorie (voir plus haut) : on la
  // retient ici, categorie par categorie (premiere valeur valide rencontree
  // gagne, comme l'assignation de categorie a l'import dans le Workspace),
  // AVANT tout rendu — remis a zero a chaque nouveau graphe pour ne pas
  // laisser les couleurs d'un import precedent contaminer le suivant.
  importedCategoryColors = {};
  nodes.forEach(n => {
    const key = (n.group || "").toLowerCase();
    const hex = typeof n.color === "string" ? n.color.trim() : "";
    if (key && !importedCategoryColors[key] && HEX_COLOR_RE.test(hex)) {
      importedCategoryColors[key] = hex;
    }
  });

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

const GENERIC_KEY_RE = /^(?:prop(?:riete|riété|erty)?|champ|attribut|attr)?[\s._-]*\d*$/i;

function isGenericKey(key) {
  const k = String(key == null ? '' : key).trim();
  return k === '' || GENERIC_KEY_RE.test(k);
}

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

function denormalize(str) {
  if (!str) return '';
  return str.replace(/_/g, ' ').toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

const CATEGORY_COLORS = {
  genre: "#42ebe2", auteur: "#0dbac1", livre: "#7dd3fc",
  racine: "#42ebe2", branche: "#0dbac1", penseur: "#a78bfa",
  notion: "#7dd3fc", figure: "#fbbf24", objet: "#e05454", pratique: "#34d399",
  legume: "#34d399", herbe: "#86efac", laitier: "#fde68a",
  technique: "#57968f", fruit: "#9572c4", proteine: "#fca5a5", saison: "#42ebe2",
  scene: "#42ebe2", artiste: "#a78bfa",
  haircare: "#e879b9", pays: "#7dd3fc", personne: "#fbbf24", groupe: "#e05454",
  default: "#1D3655",
};


const FALLBACK_PALETTE = [
  "#42ebe2", "#0dbac1", "#7dd3fc", "#a78bfa", "#fbbf24", "#34d399",
  "#e879b9", "#fca5a5", "#4dd3fc", "#86efac", "#e05454", "#aba899",
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
  // Priorite a la couleur fournie par le fichier importe lui-meme (voir
  // normalizeGraph) : elle doit l'emporter sur la palette generique du
  // site, sinon un graphe importe depuis le Workspace perdrait les
  // couleurs par categorie que l'utilisateur y a definies.
  if (importedCategoryColors[key]) return importedCategoryColors[key];
  if (CATEGORY_COLORS[key]) return CATEGORY_COLORS[key];
  return FALLBACK_PALETTE[hashString(key) % FALLBACK_PALETTE.length];
}

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

  
  const pairKey = (a, b) => [String(a), String(b)].sort().join("\u0000");
  const pairCount = {};
  graph.edges.forEach(e => {
    const k = pairKey(e.source, e.target);
    pairCount[k] = (pairCount[k] || 0) + 1;
  });
  const pairSeen = {};

 
  function smoothFor(e) {
    if (String(e.source) === String(e.target)) return undefined; 
    const k = pairKey(e.source, e.target);
    if ((pairCount[k] || 0) < 2) return false;                   
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
        gravitationalConstant: -8000,   
        centralGravity: 0.08,           
        springLength: interactive ? 220 : 90,   
        springConstant: 0.03,
      },
    
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
     
      smooth: false,
    },
  };

  const network = new vis.Network(container, { nodes, edges }, options);

  let stopAutoFit = () => {};

  if (hasPositions) {
     network.once("afterDrawing", () => network.fit({ animation: false }));
  } else {
   
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

    if (interactive) {
      ["dragStart", "zoom", "click"].forEach(ev => network.on(ev, () => stopAutoFit()));
    }
  }

  return { network, nodes, edges, graph, hasPositions, stopAutoFit: () => stopAutoFit() };
}
