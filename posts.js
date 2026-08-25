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
  id: "fin-de-vie-numerique",
  title: "Vos comptes en ligne après votre mort : ce que la loi prévoit, et ce qu'elle ne prévoit pas",
  date: "2026-08-12",
  category: "Droits & Démarches",
  excerpt: "La loi française vous permet de décider du sort de vos données après votre décès. Le dispositif prévu pour les enregistrer n'a jamais vu le jour. Voici ce qui fonctionne réellement.",
  graphId: "fin-de-vie-numerique",
  body: `
    <p>Comptes bancaires en ligne, profils sur les réseaux sociaux, photos dans le cloud, abonnements prélevés chaque mois, portefeuille de crypto-actifs, gestionnaire de mots de passe : nous accumulons depuis des années des avoirs et des traces qui ne s'effacent pas d'eux-mêmes. À notre décès, aucune de ces plateformes n'est prévenue de façon automatique. Les abonnements continuent de prélever, les publications restent en ligne, et les proches se heurtent à des services conçus pour n'ouvrir qu'au titulaire.</p>

    <h3>La loi vous donne un droit réel</h3>
    <p>La France est allée plus loin que la plupart des pays européens. Depuis la loi pour une République numérique de 2016, l'article 85 de la loi Informatique et Libertés permet à toute personne de définir de son vivant des directives sur la conservation, l'effacement et la communication de ses données après sa mort. Ces directives sont modifiables et révocables à tout moment.</p>
    <p>Le texte distingue deux formes. Les <strong>directives générales</strong> couvrent l'ensemble de vos données, tous services confondus. Les <strong>directives particulières</strong> ne valent que pour un service donné et s'enregistrent directement auprès de lui — la loi précise qu'elles supposent un consentement spécifique et ne peuvent pas résulter de la simple acceptation des conditions générales d'utilisation.</p>

    <h3>Le dispositif central n'existe pas</h3>
    <p>La loi prévoyait que les directives générales soient déposées auprès d'un tiers de confiance numérique certifié par la CNIL, et référencées dans un registre unique. <strong>Ni la certification ni le registre n'ont encore vu le jour</strong> : les décrets d'application n'ont pas été publiés. Dix ans après le vote, le mécanisme prévu pour donner corps au droit reste lettre morte.</p>
    <p>Conséquence pratique : rédiger des directives générales et les garder chez soi n'a aucune portée opérationnelle. Personne ne saura qu'elles existent. La solution de repli recommandée, y compris par la CNIL, consiste à les déposer chez un notaire, qui joue alors le rôle de tiers de confiance à défaut du dispositif légal.</p>

    <h3>Sans directives, vos héritiers ne sont pas démunis mais limités</h3>
    <p>En l'absence de volonté exprimée, les héritiers peuvent exercer certains droits : accéder aux données nécessaires au règlement de la succession, faire clôturer les comptes, s'opposer à leur traitement, faire mettre à jour les informations pour tenir compte du décès.</p>
    <p>Ce périmètre est étroit. Il permet de solder une situation administrative, pas de récupérer une correspondance privée ni de trier des souvenirs. Le droit d'accès des héritiers ne se confond pas avec un droit d'hériter du contenu.</p>

    <h3>Chaque plateforme a ses propres règles</h3>
    <p>C'est là que se joue l'essentiel, car les dispositifs maison sont plus efficaces que le cadre légal — et ils se paramètrent en quelques minutes.</p>
    <ul>
      <li><strong>Google</strong> propose un gestionnaire de compte inactif : après une période d'inactivité que vous fixez, des contacts désignés sont prévenus et peuvent recevoir certaines données, ou le compte est supprimé</li>
      <li><strong>Facebook et Instagram</strong> permettent de désigner un contact légataire, qui gérera un compte transformé en page de commémoration</li>
      <li><strong>Apple</strong> propose un contact légataire, avec une clé d'accès à conserver par la personne désignée</li>
      <li><strong>LinkedIn</strong> propose un profil commémoratif ou la fermeture sur demande des proches ; <strong>X</strong> et la plupart des autres services se limitent à la suppression sur justificatifs</li>
    </ul>
    <p>Ces réglages sont gratuits et prennent une soirée pour l'ensemble de vos comptes principaux. Ils font davantage pour vos proches que n'importe quel document rédigé dans le vide.</p>

    <h3>L'argent numérique obéit à d'autres règles</h3>
    <p>Attention à ne pas tout mettre dans le même sac. Un compte bancaire en ligne ou un compte-titres relève de la succession classique : la banque est prévenue, les comptes sont bloqués, le notaire ou les héritiers reprennent la main. Aucune directive numérique n'est nécessaire.</p>
    <p>Les crypto-actifs, en revanche, posent un problème d'une autre nature. S'ils sont détenus sur un portefeuille personnel dont vous seul avez la clé, personne ne peut y accéder sans cette clé — ni la plateforme, ni le notaire, ni un juge. Les fonds existent toujours, ils sont simplement hors d'atteinte, définitivement. C'est le seul actif d'une succession qui puisse disparaître par la seule ignorance d'un mot de passe.</p>

    <h3>Le mot de passe : ce qu'il ne faut pas faire</h3>
    <p>Écrire ses identifiants dans un testament est une mauvaise idée pour deux raisons. La première est pratique : un testament n'est pas relu tous les six mois, alors que les mots de passe changent. La seconde est juridique : partager ses identifiants contrevient aux conditions d'utilisation de la quasi-totalité des services, et un accès effectué avec les codes du défunt n'est pas un accès légitime au sens des plateformes.</p>
    <p>La bonne approche consiste à séparer les deux choses. D'un côté, un gestionnaire de mots de passe avec sa fonction d'accès d'urgence, qui organise la transmission de manière contrôlée. De l'autre, un document — déposé chez le notaire avec vos autres dispositions — qui n'indique aucun code, mais dit ce qui existe, où le chercher, et ce que vous souhaitez qu'il en advienne.</p>

    <h3>Trois actions concrètes</h3>
    <ul>
      <li>Paramétrer les dispositifs des plateformes que vous utilisez réellement : c'est le geste le plus efficace, et le seul qui fonctionne sans intermédiaire</li>
      <li>Établir un inventaire de ce qui existe — comptes, abonnements, actifs — sans y inscrire de mot de passe, et le déposer avec vos dispositions de dernières volontés</li>
      <li>Prévenir la personne concernée. Un document que personne ne sait chercher équivaut à un document qui n'existe pas</li>
    </ul>
    <p>Ce dernier point est celui qu'on néglige le plus. La plupart des dispositifs échouent non parce qu'ils sont mal conçus, mais parce que personne n'a jamais dit à qui que ce soit qu'ils avaient été mis en place.</p>

    <h3>Précision et disclaimer</h3>
    <p>Cet article présente les règles générales applicables en France à titre informatif, à jour à sa date de publication. Il ne constitue pas un conseil juridique. Les dispositifs proposés par les plateformes évoluent régulièrement et sans préavis : vérifiez les réglages disponibles dans les paramètres de vos comptes. Pour tout ce qui touche à la succession elle-même, l'avis d'un notaire reste nécessaire.</p>
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

{
  id: "reconversion-professionnelle-carte",
  title: "Reconversion : pourquoi tant de projets échouent avant même la formation",
  date: "2026-07-19",
  category: "Travail",
  excerpt: "CPF, CEP, PTP, ARE… La reconversion est un labyrinthe d'acronymes où l'ordre des démarches compte plus que les démarches elles-mêmes. Une carte pour ne pas se tromper de porte d'entrée.",
  graphId: "reconversion-professionnelle",
  body: `
    <p>Un tiers des actifs français déclarent envisager une reconversion. Beaucoup commencent par chercher une formation. C'est précisément l'erreur la plus coûteuse : se former avant d'avoir validé son projet, c'est risquer de dépenser ses droits CPF pour un métier qu'on n'a jamais testé.</p>

    <h3>L'ordre des démarches est contre-intuitif</h3>
    <p>Le graphe ci-contre le montre : la reconversion suit une colonne vertébrale en quatre phases — réflexion, validation, formation, transition. Chaque phase a ses outils, et certains sont gratuits. Le Conseil en Évolution Professionnelle (CEP), par exemple, ne coûte rien et n'entame pas vos droits. Pourtant, la plupart des gens ignorent son existence… alors qu'il est <strong>obligatoire avant de démissionner</strong> si vous voulez toucher le chômage.</p>

    <h3>Le nœud que tout le monde rate</h3>
    <p>C'est la révélation de cette cartographie : la démission-reconversion — ce dispositif qui permet de quitter un CDI en conservant ses droits à l'allocation chômage — exige que le CEP soit engagé <em>avant</em> la démission, et que le projet soit validé par Transitions Pro. Démissionnez d'abord, et la porte se referme définitivement. Sur le graphe, un seul lien porte cette information. Dans la vraie vie, il vaut plusieurs mois d'allocations.</p>

    <h3>Trois portes d'entrée selon votre statut</h3>
    <p>Salarié en CDI, demandeur d'emploi ou indépendant : les chemins de financement ne sont pas les mêmes. Le salarié peut mobiliser le Projet de Transition Professionnelle pour se former en conservant sa rémunération. Le demandeur d'emploi cumule CPF et Aide Individuelle à la Formation, sans reste à charge sur le CPF. L'indépendant cotise via la CFP et dispose de son fonds d'assurance formation. Une liste vous donnerait les dispositifs ; le graphe vous montre lesquels vous concernent.</p>

    <h3>Par où commencer ?</h3>
    <ul>
      <li>Consulter vos droits sur moncompteformation.gouv.fr — sans rien acheter pour l'instant</li>
      <li>Prendre rendez-vous avec un conseiller CEP (gratuit, quel que soit votre statut)</li>
      <li>Tester le métier visé via une immersion professionnelle (PMSMP) de quelques jours</li>
      <li>Seulement ensuite : choisir une formation certifiante RNCP dans un organisme Qualiopi</li>
    </ul>

    <p>Explorez le graphe en cliquant sur chaque nœud : les conditions, plafonds et montants sont dans le panneau de détail. Les chiffres correspondent aux dispositifs en vigueur en 2026 — vérifiez toujours les montants exacts au moment de vos démarches.</p>

    <p class="sources"><em>Sources : Baromètre de la formation et de l'emploi 2025, Centre Inffo · France Travail, 2026.</em></p>
  `
},

{
  id: "audit-personnel-pourquoi-faire-le-point",
  title: "Faire l'audit de sa vie : pourquoi nommer avant de changer",
  date: "2026-08-12",
  category: "Développement Personnel",
  excerpt: "Pour « changer de vie » encore faut-il savoir de quoi elle est faite. L'audit personnel commence par un inventaire — sans jugement, sans plan d'action.",
  graphId: "audit-personnel",
  body: `
    <p>On sait dire qu'on est fatigué, à l'étroit, insatisfait. On sait rarement dire <em>de quoi</em>. C'est tout l'écart entre un malaise et un diagnostic : le premier tourne en boucle, le second permet d'agir.</p>

    <p>L'audit personnel n'est pas un exercice de développement personnel de plus. C'est un inventaire, au sens comptable du terme : on liste ce qu'on a, ce qu'on doit, ce qui fonctionne et ce qui bloque. Sans jugement, sans plan d'action à ce stade. Juste nommer.</p>

    <h3>Le problème : tout se mélange</h3>
    <p>Faute de découpage explicite, les domaines de vie se contaminent les uns les autres dans notre tête. Une difficulté financière se vit comme un échec personnel. Une fatigue chronique se lit comme un manque de volonté. Une relation qui pèse devient « un problème de caractère ».</p>
    <p>Le résultat est prévisible : on traite le symptôme le plus visible, rarement la cause. On se met au sport alors que le problème est le sommeil. On coupe dans les dépenses alors que le problème est l'absence de budget. <strong>Un diagnostic posé au mauvais endroit produit un effort perdu.</strong></p>
    <p>La première étape consiste donc à séparer ce qui doit l'être. Six domaines suffisent à couvrir l'essentiel : la santé (physique et mentale), les finances, les relations, les compétences, les valeurs et croyances, la personnalité.</p>

    <h3>Ce que le graphe révèle : les domaines ne sont pas étanches</h3>
    <p>Une fois les domaines séparés, un second constat s'impose. Ces domaines communiquent en permanence. La cartographie ci-contre rend ces passages visibles. Trois chaînes valent la peine d'être déroulées.</p>

    <p><strong>Croyance → valeur → choix, action, jugement.</strong> Une croyance ne se contente pas de vous démoraliser dans un coin de votre tête. Elle soutient vos valeurs, qui à leur tour guident vos choix, vos actions et vos jugements. Autrement dit, une croyance limitante ne produit pas un mauvais moment : elle produit une série de décisions cohérentes entre elles et orientées dans la mauvaise direction. À l'inverse, une croyance aidante pousse à l'action. Le graphe montre pourquoi ce nœud, apparemment abstrait, est l'un des plus rentables à examiner.</p>

    <p><strong>Sommeil → émotionnel → réaction.</strong> Le sommeil régule la dimension émotionnelle, qui conditionne la manière dont on réagit à un déclencheur — un événement, une personne, une situation. Ce que vous prenez pour un trait de caractère est parfois un déficit de récupération. Là encore, le lien change la nature du problème : ce n'est plus « je suis irritable », c'est « je dors mal, donc je réagis mal ».</p>

    <p><strong>Investissement → gain futur, amélioration de sa vie, augmentation de son capital.</strong> Le même acte poursuit trois finalités distinctes. Placer de l'argent pour un gain futur, investir du temps pour améliorer son quotidien, accroître son patrimoine : ce ne sont pas les mêmes arbitrages, ni le même horizon, ni le même risque acceptable. Confondre les trois explique beaucoup de décisions financières regrettées.</p>

    <h3>Les bénéfices d'un audit personnel</h3>
    <ul>
      <li><strong>Situer le problème au bon endroit</strong> — remonter du symptôme visible à la cause réelle, souvent située dans un autre domaine</li>
      <li><strong>Distinguer frein et faiblesse</strong> — un frein anatomique ou matériel ne se traite pas comme un frein psychologique ou émotionnel</li>
      <li><strong>Repérer les points de levier</strong> — les nœuds les plus connectés sont ceux où un changement se propage au reste</li>
      <li><strong>Ancrer dans le temps</strong> — la date sert de repère (analyser le passé, évaluer le présent) et d'échéance (planifier l'avenir)</li>
      <li><strong>Décider selon ses valeurs</strong> plutôt que selon l'urgence du moment</li>
    </ul>

    <h3>Par où commencer</h3>
    <ul>
      <li>Posez les domaines sans les remplir juste pour voir ceux que vous aviez oubliés</li>
      <li>Pour chacun, posez-vous la question : qu'est-ce qui va, qu'est-ce qui coince ?</li>
      <li>Identifier les liens entre les blocages repérés — c'est là qu'apparaissent les vraies priorités</li>
    </ul>
    <p>Une soirée suffit pour la première version. Elle sera incomplète, et c'est normal : un audit se relit et se corrige.</p>

    <h3>Une limite à poser</h3>
    <p>Un audit décrit mais ne soigne pas. Découvrir une croyance limitante ne la dissout pas. Certaines choses relèvent d'un accompagnement professionnel — et le fait que la carte les fasse remonter est en soi un résultat utile.</p>
  `
},


{
  id: "succession-premieres-demarches-delais",
  title: "Après un décès : les délais qui comptent vraiment",
  date: "2026-08-12",
  category: "Droits & Démarches",
  excerpt: "24 heures, 4 mois, 6 mois. Trois échéances légales démarrent au jour du décès, et les manquer coûte cher. Repères pratiques sur les comptes, l'assurance-vie, le testament et le notaire.",
  graphId: "cartographie-succession-complete",
  body: `
    <p>Un décès ouvre une période où l'on doit décider vite, dans un état où l'on décide mal. Les démarches sont nombreuses, mais toutes n'ont pas la même urgence : trois échéances légales seulement sont réellement contraignantes, et elles démarrent toutes au jour du décès — pas au jour où l'on se sent prêt.</p>

    <h3>Vingt-quatre heures : la déclaration en mairie</h3>
    <p>Le décès se déclare à la mairie du lieu où il est survenu. En pratique, l'entreprise de pompes funèbres s'en charge presque toujours, et à l'hôpital l'établissement transmet le certificat médical.</p>
    <p>Ce qui en découle compte davantage : l'acte de décès. Banque, employeur, caisse de retraite, assureur, notaire — chacun en réclamera une copie. <strong>Demandez-en une dizaine dès le premier passage</strong> : la délivrance est gratuite, sans justificatif, et cela vous évitera trois allers-retours en mairie dans le mois qui suit.</p>

    <h3>Quatre mois : le temps de réfléchir</h3>
    <p>C'est le point le plus souvent déformé. Un héritier a le choix entre trois options : accepter purement et simplement, accepter à concurrence de l'actif net, ou renoncer. Pendant quatre mois, personne ne peut le contraindre à se prononcer.</p>
    <p>Passé ce délai, un cohéritier, un créancier ou l'État peut le sommer de choisir — il dispose alors de deux mois supplémentaires. Sans sommation, le droit d'option se conserve jusqu'à dix ans, au terme desquels l'héritier silencieux est réputé renonçant.</p>
    <p>L'enjeu de ce choix est réel : accepter purement et simplement, c'est accepter aussi les dettes, y compris au-delà de ce que l'on reçoit. L'acceptation à concurrence de l'actif net limite l'engagement à la valeur des biens recueillis, mais suppose une déclaration au greffe puis un inventaire dans les délais impartis. En cas de doute sur le passif, c'est cette voie qu'il faut examiner avant d'accepter quoi que ce soit.</p>
    <p>Attention à une confusion fréquente : renoncer à la succession ne dispense pas de payer les obsèques. Les descendants et ascendants directs y restent tenus, proportionnellement à leurs ressources.</p>

    <h3>Six mois : la déclaration de succession</h3>
    <p>La déclaration se dépose auprès du service des impôts du domicile du défunt dans les six mois du décès en France métropolitaine, douze mois si le décès est survenu à l'étranger. C'est le seul délai dont le dépassement se paie immédiatement : intérêts de retard de 0,20 % par mois, majoration de 10 % à partir du treizième mois, jusqu'à 40 % après une mise en demeure restée sans effet.</p>
    <p>Six mois paraissent longs. Ils ne le sont pas quand il faut retrouver les contrats, faire estimer un bien, obtenir l'accord de plusieurs héritiers dispersés. La règle pratique : si la succession comporte un bien immobilier, le compte à rebours commence le jour du décès, pas le jour du premier rendez-vous chez le notaire.</p>
    <p>Des facilités existent — paiement fractionné, ou différé lorsque la succession porte sur des biens en nue-propriété — mais elles se demandent par lettre jointe à la déclaration, donc avant l'échéance.</p>

    <h3>Les comptes bancaires : ce qui est bloqué et ce qui ne l'est pas</h3>
    <p>Dès qu'elle est informée, la banque bloque les comptes au nom du seul défunt. Deux exceptions utiles à connaître.</p>
    <p><strong>Le compte joint continue de fonctionner</strong> au bénéfice du cotitulaire survivant, sauf opposition d'un héritier. C'est souvent ce qui permet à un conjoint de tenir les premières semaines.</p>
    <p><strong>Les frais d'obsèques peuvent être prélevés sur le compte bloqué</strong>, sur présentation de la facture, dans la limite du solde disponible et d'un plafond légal revalorisé chaque année — 5 965 € au 1er janvier 2026. Le coût moyen d'obsèques se situant entre 4 000 et 5 000 €, ce mécanisme couvre en général l'essentiel. Beaucoup de familles avancent la somme sur leurs propres deniers faute de le connaître.</p>
    <p>Si le total des avoirs bancaires est inférieur à ce même seuil et qu'il n'y a pas de bien immobilier, un héritier peut demander seul la clôture du compte, sans notaire, avec une attestation signée de tous les héritiers.</p>
    <p>Sur les frais bancaires de succession, la règle a changé deux fois en un an : la loi du 13 mai 2025 les a plafonnés à 1 % des avoirs, avec un maximum de 857 € par banque depuis le 1er janvier 2026, et prévoyait des cas de gratuité pour les petites successions et celles d'un mineur. Le Conseil constitutionnel a censuré ces cas de gratuité le 19 juin 2026 ; le plafonnement, lui, demeure. Certaines banques maintiennent volontairement leurs engagements — cela se demande.</p>

    <h3>L'assurance-vie ne suit pas le même chemin</h3>
    <p>C'est le contresens le plus répandu. L'assurance-vie est en principe hors succession : elle ne se partage pas entre les héritiers mais revient aux bénéficiaires désignés dans la clause du contrat, qui ne sont pas nécessairement les mêmes personnes ni dans les mêmes proportions.</p>
    <p>Conséquence pratique : l'assureur doit être prévenu séparément, et le versement ne dépend pas du règlement de la succession. Si vous ignorez l'existence d'un contrat, la recherche auprès de l'AGIRA est gratuite — l'organisme interroge l'ensemble des assureurs, et vous êtes contacté si un contrat vous désigne.</p>

    <h3>Le testament conditionne tout le reste</h3>
    <p>Sa présence ou son absence détermine qui hérite, donc qui doit être prévenu, donc l'étendue des démarches. Chercher un testament n'est pas une formalité parmi d'autres : c'est ce qui oriente la suite.</p>
    <p>La consultation du fichier central des dispositions de dernières volontés se fait par un notaire, avec l'acte de décès. Elle intervient tôt pour cette raison — un testament découvert au huitième mois oblige à reprendre ce qui a été fait.</p>

    <h3>Le notaire : quand il est indispensable</h3>
    <p>Son intervention s'impose notamment en présence d'un bien immobilier, d'un testament, d'une donation entre époux ou d'un contrat de mariage. À l'inverse, une succession modeste, sans immobilier et sans complexité particulière peut se régler directement avec les organismes concernés.</p>
    <p>Entre les deux, la question mérite d'être posée plutôt que tranchée par défaut : beaucoup de familles engagent des frais pour une situation qui n'en demandait pas, d'autres s'en passent alors qu'un point technique (régime matrimonial, donation antérieure, héritier mineur) aurait justifié un avis.</p>

    <h3>Précaution et disclaimer</h3>
    <p>Cet article présente les règles générales applicables en France à titre informatif, à jour à sa date de publication. Il ne constitue pas un conseil juridique et ne remplace pas un notaire. Les montants et délais évoluent — les plafonds cités sont revalorisés chaque année, et le régime des frais bancaires a changé deux fois depuis 2025. Vérifiez sur service-public.fr ou auprès de votre notaire avant de vous fier à un chiffre.</p>
  `
},

{
  id: "inventaire-personnel-sinistre",
  title: "Ce qui brûle en dix minutes, votre mémoire ne le retient pas",
  date: "2026-08-25",
  category: "Développement personnel",
  excerpt: "Après un cambriolage ou un dégât des eaux, l'assurance demande une liste précise de ce qui a disparu. La plupart des gens improvisent — et sous-déclarent.",
  graphId: "inventaire-personnel",
  body: `
    <p>Un sinistre laisse rarement le temps de réfléchir. L'assureur demande une liste des biens touchés, avec dates d'achat, valeurs et parfois factures — dans un moment où la mémoire est justement la moins fiable. Résultat : la plupart des déclarations sont incomplètes, et l'indemnisation suit.</p>

    <h3>Le problème n'est pas l'oubli, c'est l'absence de trace</h3>
    <p>Personne ne mémorise le numéro de série de son vélo électrique ni la date d'achat exacte du réfrigérateur. Ces informations existent — sur un email de confirmation, une facture papier, une photo — mais éparpillées, sans lien entre elles.</p>

    <h3>Ce qu'un graphe personnel change</h3>
    <p>Relier chaque bien de valeur à sa facture, sa garantie et sa localisation dans le logement transforme une liste qu'on redoute de faire en une carte qu'on consulte en cinq minutes le jour où on en a besoin. On voit d'un coup ce qui est couvert, ce qui ne l'est pas, et ce qu'il reste à documenter.</p>

    <p>C'est exactement ce que permet WynaGraph Workspace : construire cet inventaire une fois, hors ligne, et le garder à jour au fil des achats — sans jamais dépendre d'un service en ligne pour retrouver ce qui vous appartient.</p>
  `
},

{
  id: "comptes-en-ligne-effet-domino",
  title: "Le jour où vous perdez l'accès à votre boîte mail principale",
  date: "2026-08-24",
  category: "Technologie & Sécurité",
  excerpt: "Un email de récupération oublié, une double authentification liée à un ancien numéro : et c'est une dizaine de comptes qui deviennent inaccessibles d'un coup.",
  graphId: "comptes-en-ligne",
  body: `
    <p>La plupart des comptes en ligne ne sont pas indépendants les uns des autres. Ils dépendent d'une adresse email de récupération, d'un numéro de téléphone pour la double authentification, parfois d'un autre compte pour se connecter. Cette dépendance est invisible — jusqu'au jour où le maillon central cède.</p>

    <h3>Un point de défaillance qu'on ne voit jamais</h3>
    <p>Changer de numéro de téléphone, perdre l'accès à une vieille adresse email : un incident mineur peut suffire à verrouiller en cascade des comptes bancaires, administratifs ou professionnels, chacun pensant dépendre d'un autre pour la récupération.</p>

    <h3>Cartographier avant que ça arrive</h3>
    <p>Un graphe qui relie chaque compte à son email de récupération et à sa méthode de double authentification rend cette chaîne de dépendances visible. On repère en un coup d'œil le compte qui, s'il tombe, entraîne les autres — et on peut corriger avant l'incident, pas après.</p>

    <p>WynaGraph Workspace permet de construire cette carte localement, sans jamais faire transiter vos identifiants où que ce soit : seule la structure des dépendances compte, pas les mots de passe eux-mêmes.</p>
  `
},

{
  id: "applications-abonnements-fuite-invisible",
  title: "Combien d'abonnements payez-vous sans vous en souvenir ?",
  date: "2026-08-23",
  category: "Technologie & Sécurité",
  excerpt: "Streaming oublié, cloud en double, application testée une fois et jamais désinstallée : la fuite est rarement un gros poste, mais une accumulation de petits.",
  graphId: "applications-abonnements",
  body: `
    <p>Aucun abonnement n'est jamais souscrit pour être oublié. Et pourtant, entre les essais gratuits devenus payants, les doublons de stockage cloud et les applications installées pour un usage ponctuel, la plupart des gens paient chaque mois pour des services qu'ils n'utilisent plus.</p>

    <h3>Le vrai coût n'est pas que financier</h3>
    <p>Chaque application installée a aussi obtenu des permissions — accès aux contacts, à la localisation, aux photos — qui restent actives bien après que l'usage a cessé. On perd de l'argent, et on perd la trace de ce à quoi on a donné accès.</p>

    <h3>Une carte plutôt qu'une liste de débits bancaires</h3>
    <p>Relier chaque application à son coût, sa fréquence d'usage réelle et les permissions accordées fait apparaître immédiatement les doublons et les oublis. Ce n'est pas un relevé bancaire qui montre ça — c'est une carte des connexions entre ce que vous payez et ce que vous utilisez vraiment.</p>

    <p>Un premier passage avec WynaGraph Workspace suffit en général à repérer de quoi couvrir plusieurs mois d'abonnements — simplement en rendant visible ce qui était éparpillé.</p>
  `
},

{
  id: "boite-mail-dix-boites-en-une",
  title: "Votre boîte mail contient dix boîtes mail différentes, mélangées",
  date: "2026-08-22",
  category: "Technologie & Sécurité",
  excerpt: "Newsletters, factures, notifications, échanges importants : tout arrive au même endroit, dans le même ordre chronologique, sans aucune hiérarchie.",
  graphId: "boite-mail",
  body: `
    <p>Une boîte de réception ne trie rien par nature. Elle empile. Un email important côtoie une newsletter jamais lue, une facture urgente se perd entre deux notifications automatiques — et le tri, quand il a lieu, se fait dans l'urgence plutôt que dans la clarté.</p>

    <h3>Le mélange est le problème, pas le volume</h3>
    <p>Ce n'est pas le nombre d'emails qui pose difficulté, c'est l'absence de catégories stables. Sans elles, impossible de savoir d'où vient réellement l'encombrement, ni quels comptes ou services génèrent le plus de bruit.</p>

    <h3>Voir la structure avant de trier</h3>
    <p>Cartographier les grandes catégories d'emails et les comptes qui les génèrent change l'angle d'attaque : au lieu de trier des centaines de messages un par un, on identifie trois ou quatre sources à désabonner, et le reste se dégage de lui-même.</p>

    <p>C'est le genre de clarté que WynaGraph Workspace rend possible en quelques minutes — une vue d'ensemble avant de replonger dans le détail.</p>
  `
},

{
  id: "reseaux-sociaux-empreinte-numerique",
  title: "Combien de comptes avez-vous, sur combien de réseaux, avec quels réglages ?",
  date: "2026-08-21",
  category: "Technologie & Sécurité",
  excerpt: "Un profil créé il y a huit ans, jamais supprimé, toujours public : votre empreinte numérique est probablement plus large — et plus ouverte — que vous ne le pensez.",
  graphId: "reseaux-sociaux-personnels",
  body: `
    <p>Chaque réseau social créé à un moment de votre vie continue d'exister, même quand vous n'y allez plus. Les paramètres de confidentialité fixés à l'inscription restent souvent inchangés des années plus tard, alors que ce que vous étiez prêt à rendre public a, lui, changé.</p>

    <h3>Ce qu'on ne revoit jamais</h3>
    <p>Un compte abandonné n'est pas un compte neutre : il contient des données, parfois visibles publiquement, que personne ne pense à revérifier une fois l'usage arrêté. La plupart des gens ne pourraient pas lister tous leurs profils sans y réfléchir longuement.</p>

    <h3>Une carte de sa présence en ligne</h3>
    <p>Relier chaque compte à son usage réel et à son niveau de confidentialité fait apparaître les profils oubliés et les réglages restés trop ouverts. C'est un exercice qu'on ne fait jamais spontanément — mais qui prend dix minutes une fois qu'on le cartographie.</p>

    <p>WynaGraph Workspace permet de construire cette carte hors ligne, sans jamais se connecter aux plateformes elles-mêmes : seule votre propre description de vos comptes compte.</p>
  `
},

{
  id: "documents-administratifs-echeance-ratee",
  title: "Le jour où votre passeport expire sans que vous l'ayez vu venir",
  date: "2026-08-20",
  category: "Droits & Démarches",
  excerpt: "Un titre de séjour, une carte grise, une attestation d'assurance : chaque document a sa propre date de validité, et aucune ne s'affiche nulle part.",
  graphId: "documents-administratifs",
  body: `
    <p>Les documents administratifs importants ne se ressemblent pas dans leur cycle de vie : certains n'expirent jamais, d'autres doivent être renouvelés tous les cinq ou dix ans, auprès d'organismes différents, avec des délais de traitement qui varient énormément.</p>

    <h3>Le problème n'est pas de les ranger, c'est de savoir quand</h3>
    <p>Un classeur bien organisé répond à la question « où est ce document ? ». Il ne répond jamais à « lequel expire dans trois mois ? ». Or c'est cette seconde question qui coûte cher — un renouvellement démarré trop tard peut bloquer un voyage, une location, une démarche entière.</p>

    <h3>Relier document, échéance et organisme</h3>
    <p>Une cartographie qui relie chaque document à sa date de validité et à l'organisme qui le délivre transforme un classeur statique en système d'alerte silencieux : on voit venir les échéances au lieu de les découvrir après coup.</p>

    <p>C'est ce que WynaGraph Workspace permet de construire, une fois, et de garder à jour au fil des renouvellements — localement, sans dépendre d'un service tiers pour retrouver ce qui vous appartient.</p>
  `
},

{
  id: "bibliotheque-personnelle-livre-prete",
  title: "Ce livre que vous avez prêté... à qui déjà ?",
  date: "2026-08-19",
  category: "Culture & Société",
  excerpt: "Une bibliothèque personnelle grandit sans qu'on la cartographie jamais — jusqu'au jour où l'on cherche un titre précis, prêté on ne sait plus à qui.",
  graphId: "bibliotheque-personnelle",
  body: `
    <p>Les livres qu'on a lus, prêtés, ou qu'on garde pour plus tard s'accumulent sans qu'aucun lien ne soit jamais tracé entre eux. On se souvient d'une phrase, pas du titre. D'un ami qui l'a conseillé, pas du livre lui-même. Le lien existe dans la mémoire, jamais ailleurs.</p>

    <h3>Une bibliothèque sans mémoire de ses propres liens</h3>
    <p>Deux livres du même auteur, lus à cinq ans d'écart, ne sont jamais rapprochés. Un livre prêté à quelqu'un il y a un an devient introuvable — ni dans la bibliothèque, ni dans le souvenir de qui l'a emprunté.</p>

    <h3>Ce que révèle une carte de ses lectures</h3>
    <p>Relier les livres par auteur, par genre et par la personne qui les a recommandés ou empruntés fait apparaître des motifs qu'aucune étagère ne montre : les autrices qu'on relit sans s'en rendre compte, les prêts jamais rendus, les recommandations qui reviennent toujours de la même personne.</p>

    <p>C'est un usage simple et concret de WynaGraph Workspace — une carte de ses lectures, construite en quelques minutes, qui en dit souvent plus sur ses propres goûts qu'on ne l'aurait cru.</p>
  `
},

{
  id: "centres-interet-valeur-commune",
  title: "Vos loisirs ont un point commun que vous n'avez jamais vu",
  date: "2026-08-18",
  category: "Développement personnel",
  excerpt: "Photographie, cuisine, course à pied : des passe-temps qui semblent n'avoir rien en commun peuvent exprimer, sous des formes différentes, la même valeur.",
  graphId: "centres-interet",
  body: `
    <p>On choisit rarement ses loisirs au hasard, mais on réfléchit encore plus rarement à ce qu'ils ont en commun. Vus séparément, ils ressemblent à une liste de cases cochées sur un agenda. Reliés entre eux, ils racontent autre chose.</p>

    <h3>Le temps libre comme liste plutôt que comme carte</h3>
    <p>Une liste de loisirs répond à « qu'est-ce que je fais ? ». Elle ne répond jamais à « pourquoi celui-là plutôt qu'un autre ? » ni à « lequel devrais-je prioriser cette année ? ». Sans cette seconde couche, le temps libre se répartit un peu au hasard.</p>

    <h3>Ce qu'un graphe fait apparaître</h3>
    <p>Relier chaque centre d'intérêt à la valeur qu'il exprime — créer, partager, se dépasser — révèle des points communs entre des activités qui, à première vue, n'ont rien à voir. Deux loisirs très différents peuvent nourrir exactement le même besoin, ce qui change la façon d'arbitrer son temps.</p>

    <p>C'est le genre d'exercice que WynaGraph Workspace rend accessible : pas une analyse abstraite, mais une carte concrète de ce qui occupe réellement votre temps libre, et de ce que ça révèle.</p>
  `
},

{
  id: "reseau-de-contacts-carnet-vs-graphe",
  title: "Un carnet d'adresses classe les gens. Un graphe les relie.",
  date: "2026-08-17",
  category: "Développement personnel",
  excerpt: "L'ordre alphabétique ne dit rien de qui compte vraiment, ni de qui vous n'avez pas contacté depuis deux ans sans vous en rendre compte.",
  graphId: "reseau-de-contacts",
  body: `
    <p>Un répertoire téléphonique traite tous les contacts de la même façon : un nom, un numéro, classés par ordre alphabétique. Il ne fait aucune différence entre une relation qu'on entretient chaque semaine et une autre dont on a perdu le fil sans le remarquer.</p>

    <h3>Ce que l'ordre alphabétique ne montre pas</h3>
    <p>La nature d'un lien, sa fréquence, ce qu'il apporte : rien de tout cela n'apparaît dans une liste de contacts. On découvre souvent qu'on n'a pas parlé à quelqu'un d'important depuis longtemps par hasard, jamais parce qu'on l'a vu venir.</p>

    <h3>Relier plutôt que lister</h3>
    <p>Une cartographie de son réseau — qui relie chaque personne à la nature du lien et à la fréquence des échanges — rend visible ce qu'un carnet d'adresses ne montrera jamais : les relations qui se sont distendues sans qu'on le décide, et celles qui méritent plus d'attention.</p>

    <p>C'est exactement l'usage que permet WynaGraph Workspace : transformer un répertoire plat en carte de ce qui compte vraiment dans son entourage, personnel comme professionnel.</p>
  `
},

{
  id: "projets-personnels-blocage-invisible",
  title: "Pourquoi vos projets personnels n'avancent jamais vraiment",
  date: "2026-08-16",
  category: "Développement personnel",
  excerpt: "Un projet personnel stagne rarement par manque de volonté. Il stagne parce qu'une étape invisible en bloque discrètement trois autres.",
  graphId: "projets-personnels",
  body: `
    <p>Un projet personnel avance rarement de façon linéaire. Il dépend de ressources qu'on n'a pas encore réunies, de personnes qu'on n'a pas encore sollicitées, d'étapes qui, sans qu'on le formule clairement, en conditionnent d'autres.</p>

    <h3>Le blocage qu'on ne voit pas</h3>
    <p>Sur une simple liste de tâches, toutes les étapes se ressemblent. Rien n'indique que l'une d'elles, une fois débloquée, ferait avancer trois autres d'un coup — ni, à l'inverse, laquelle retient tout le reste sans qu'on s'en aperçoive.</p>

    <h3>Voir les dépendances plutôt que la liste</h3>
    <p>Cartographier un projet — ses étapes, les ressources qu'il mobilise, ce qui le bloque réellement — fait apparaître ces dépendances d'un coup d'œil. La question n'est plus « qu'est-ce qui reste à faire ? » mais « qu'est-ce qui, débloqué en premier, fait avancer tout le reste ? ».</p>

    <p>C'est précisément ce que WynaGraph Workspace permet de visualiser : la structure réelle d'un projet, au-delà de la liste de tâches qui la cache habituellement.</p>
  `
},

{
  id: "garde-robe-vingt-pourcent",
  title: "Vous portez 20 % de votre garde-robe, 80 % du temps",
  date: "2026-08-15",
  category: "Style de vie",
  excerpt: "Le reste du dressing n'est pas inutile — il est simplement oublié, faute d'un lien visible entre les pièces qu'on possède déjà.",
  graphId: "garde-robe",
  body: `
    <p>La plupart des dressings contiennent largement plus de vêtements que ce qu'on porte réellement. Non par excès d'achats, mais parce qu'une fois rangée, une pièce sort rarement de sa place — surtout si on a oublié avec quoi l'associer.</p>

    <h3>Le problème n'est pas la quantité, c'est l'oubli des liens</h3>
    <p>Un vêtement isolé, sans association mémorisée avec le reste de la garde-robe, finit par disparaître visuellement même s'il est toujours là. On rachète alors des pièces qui font, sans le savoir, doublon avec ce qu'on possède déjà.</p>

    <h3>Cartographier plutôt que ranger</h3>
    <p>Relier les vêtements par usage, saison et association fait ressortir des combinaisons oubliées et des pièces qui, une fois reliées, retrouvent leur utilité. C'est un exercice différent du tri classique : il ne s'agit pas de jeter, mais de reconnecter ce qui existe déjà.</p>

    <p>WynaGraph Workspace permet de construire cette carte en partant simplement de ce que contient votre dressing — de quoi acheter plus juste, et redécouvrir ce que vous possédez déjà.</p>
  `
},

];
