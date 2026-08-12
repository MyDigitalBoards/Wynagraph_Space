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
];
