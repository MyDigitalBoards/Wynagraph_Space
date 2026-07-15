// ─────────────────────────────────────────────────────────────────────────────
// POSTS.JS — Articles du blog WynaGraph Space
// ─────────────────────────────────────────────────────────────────────────────
// Pour ajouter un article :
//   1. Copiez un bloc existant
//   2. Donnez-lui un "id" unique (slug, sans espaces ni accents)
//   3. Renseignez "graphId" avec l'id du graphe dans data.js (ou "" si aucun)
//   4. Écrivez votre contenu dans "body" en HTML simple
//   5. Sauvegardez — l'article apparaît automatiquement sur le site
// ─────────────────────────────────────────────────────────────────────────────

window.POSTS = [
  {
    id: "cartographier-fin-de-vie-numerique",
    title: "Pourquoi cartographier sa fin de vie numérique ?",
    date: "2026-05-10",
    category: "Droits & Démarches",
    excerpt: "Comptes bancaires, réseaux sociaux, photos cloud… À notre mort, nos données numériques survivent. Voici comment s'y préparer avec un graphe.",
    graphId: "cartographie-succession-complete",
    body: `
      <p>Nous accumulons des traces numériques depuis des années : comptes bancaires en ligne, profils sur les réseaux sociaux, photos dans le cloud, abonnements, gestionnaires de mots de passe… À notre décès, tout cela ne disparaît pas automatiquement.</p>

      <h3>Le problème</h3>
      <p>Sans directives claires, vos proches se retrouvent face à des plateformes qui refusent l'accès, des données bloquées, des abonnements qui continuent de prélever. La loi République Numérique de 2016 vous donne des droits, mais encore faut-il les exercer de son vivant.</p>

      <h3>Ce que le graphe révèle</h3>
      <p>La cartographie ci-contre montre les liens entre les démarches classiques (testament notarié, personne de confiance) et le volet numérique (gestionnaire de mots de passe, directives CNIL). Ce qui frappe : <strong>tout est connecté</strong>. Un testament numérique sans exécuteur testamentaire identifié ne sert à rien.</p>

      <h3>Par où commencer ?</h3>
      <ul>
        <li>Ouvrir un gestionnaire de mots de passe et y consigner vos accès importants</li>
        <li>Rédiger une lettre de directives numériques (stockée avec votre testament)</li>
        <li>Désigner une personne de confiance qui connaît l'existence de ce document</li>
      </ul>
    `
  },
  
  {
    id: "pourquoi-penser-en-graphes",
    title: "Pourquoi penser en graphes change tout",
    date: "2026-06-01",
    category: "Développement Personnel",
    excerpt: "Les listes sont linéaires. La réalité ne l'est pas. Les graphes révèlent des connexions que les tableaux et bullet points cachent systématiquement.",
    graphId: "",
    body: `
      <p>Depuis l'école, on nous apprend à organiser l'information en listes, en tableaux, en hiérarchies. C'est efficace pour classer. Mais la réalité n'est presque jamais hiérarchique. Elle est réticulaire.</p>

      <h3>Le problème des listes</h3>
      <p>Une liste de tâches dit quoi faire. Elle ne dit pas pourquoi telle tâche bloque telle autre, ni quel nœud central, s'il est débloqué, ferait tomber cinq autres obstacles. Un graphe le montre immédiatement.</p>

      <h3>WynaGraph pour visualiser</h3>
      <p>C'est exactement pour ça qu'existe WynaGraph Workspace : créer ces cartes connectées depuis vos propres données, sans outil complexe, sans cloud, sans compte. Il vous suffit d'entrer vos données pour obtenir une visualisation immédiate.</p>
    `
  },
  {
  id: "doublons-assurance-argent-perdu",
  title: "Vous payez peut-être deux fois la même assurance sans le savoir",
  date: "2026-06-10",
  category: "Finances & Patrimoine",
  excerpt: "Carte bancaire, mutuelle employeur, assurance habitation… Beaucoup de garanties se chevauchent. Voici les doublons les plus fréquents — et comment les repérer.",
  graphId: "assurances",
  body: `
    <p>Chaque année, des millions de personnes paient des assurances qu'elles ont déjà. Pas par négligence — mais parce que les garanties sont éparpillées dans des contrats qu'on ne (re)lit jamais, souscrits à des moments différents de la vie, auprès d'acteurs différents.</p>
 
    <p>Dans les faits, un contrat d'assurance n'est pas un document qu'on prend le temps de lire. C'est un document qu'on signe, qu'on classe, et qu'on oublie. Jusqu'au jour où on en a besoin.</p>
 
    <h3>Ce que votre carte bancaire couvre déjà</h3>
    <p>Si vous avez une carte Visa Gold, Premier ou Infinite — ou l'équivalent Mastercard — vous bénéficiez probablement d'une assurance voyage automatique : annulation, retard, perte de bagages, rapatriement sanitaire. Elle s'active simplement en payant votre billet avec cette carte.</p>
    <p>Beaucoup de gens souscrivent en plus une assurance voyage séparée à chaque départ. C'est un doublon pur. Même chose pour la location de voiture : l'option "zéro franchise" proposée au comptoir est souvent déjà couverte par votre carte.</p>
 
    <h3>Ce que votre assurance habitation couvre déjà</h3>
    <p>Votre contrat MRH (Multirisques Habitation) contient presque toujours une garantie Responsabilité Civile Vie Privée. Elle couvre vous, votre conjoint, vos enfants — y compris les dommages causés à des tiers dans la vie quotidienne. Pourtant, beaucoup de familles souscrivent chaque année une assurance scolaire pour leurs enfants qui fait doublon.</p>
    <p>La MRH inclut souvent aussi une protection juridique de base. Si vous avez souscrit un contrat de protection juridique séparé sans vérifier ce que couvre déjà votre habitation, vous payez probablement deux fois.</p>
 
    <h3>Ce que votre employeur couvre déjà</h3>
    <p>Depuis 2016, toutes les entreprises ont l'obligation de proposer une mutuelle collective à leurs salariés. Mais au-delà de la santé, beaucoup d'employeurs proposent aussi une prévoyance collective : elle couvre l'arrêt maladie, l'invalidité, et parfois le décès.</p>
    <p>Si vous avez souscrit une prévoyance individuelle sans connaître précisément ce que couvre votre employeur, il est possible que vous ayez des garanties en double — parfois sur les postes les plus importants.</p>
 
    <h3>Le cas le plus coûteux : l'assurance emprunteur</h3>
    <p>Si vous avez un crédit immobilier, votre banque vous a proposé son assurance emprunteur au moment de la signature. C'est souvent l'assurance la plus chère — et depuis la loi Lemoine de 2022, vous pouvez la résilier à tout moment pour la remplacer par un contrat individuel équivalent, souvent deux à trois fois moins cher.</p>
    <p>Encore beaucoup d'emprunteurs ne le savent pas et continuent de payer l'assurance de leur banque année après année. Sur un crédit de 200 000€, la différence peut représenter plusieurs milliers d'euros sur la durée du prêt.</p>
 
    <h3>L'assurance téléphone : le doublon en triple</h3>
    <p>Votre téléphone est peut-être couvert par votre opérateur mobile, par votre carte bancaire premium, et par votre assurance habitation en option. Trois sources de couverture pour un seul appareil.</p>
 
    <h3>Comment cartographier ses contrats pour repérer les doublons</h3>
    <p>La méthode la plus efficace est de créer une carte de vos contrats : d'un côté les produits financiers (carte bancaire, MRH, mutuelle, prévoyance, assurance auto…), de l'autre les risques couverts (voyage, santé, décès, invalidité, responsabilité civile…), et des liens entre les deux.</p>
    <p>Dès que deux contrats pointent vers le même risque, le doublon est visible. Vous pouvez alors décider lequel conserver, lequel résilier, et lequel renégocier.</p>
    <p>C'est exactement ce que permet WynaGraph Workspace : créez directement votre graphe et visualisez d'un coup d'œil où se trouvent les chevauchements.</p>
 
    <h3>Par où commencer concrètement</h3>
    <ul>
      <li>Sortez les conditions générales de votre carte bancaire et notez les garanties incluses</li>
      <li>Relisez votre contrat MRH — notamment les annexes RC et protection juridique</li>
      <li>Demandez à votre RH le détail de votre prévoyance collective</li>
      <li>Vérifiez la date de souscription de votre assurance emprunteur — si c'est celle de votre banque, comparez avec le marché</li>
    </ul>
    <p>Une heure suffit pour identifier les principaux doublons. L'économie potentielle se chiffre parfois en centaines d'euros par an.</p>
  `
},
];
