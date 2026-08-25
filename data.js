// Données des graphes — modifier ce fichier pour ajouter des modèles
window.GRAPHS = [

{
  "id": "cartographie-succession-complete",
  "title": "Succession et démarches après décès : un guide pour ne rien oublier",
  "category": "Droits & Démarches",
  "description": "Vue d'ensemble des formalités administratives et patrimoniales.",
  "longDescription": "Cette cartographie intègre les obligations légales, gestion des contrats, délais et organismes à contacter.",
  "nodes": [
    {
      "id": "5ec52308-46fd-41c4-9d13-fb1e51b31544",
      "label": "Conjoint",
      "category": "Personne",
      "properties": {
        "Nom": "à renseigner",
        "Régime matrimonial": "à préciser"
      }
    },
    {
      "id": "83c53c55-9bde-4d11-aa08-010cce5111ad",
      "label": "Pension de réversion",
      "category": "Allocation",
      "properties": {
        "prop_1": "Sous conditions d'âge et de ressources",
        "prop_2": "Demande auprès de chaque caisse de retraite"
      }
    },
    {
      "id": "aa5989da-cc5e-4bf6-b141-46ea3c9e05a3",
      "label": "Etablissement du certificat de décès",
      "category": "Formalite",
      "properties": {
        "prop_1": "Document indispensable à toutes les démarches"
      }
    },
    {
      "id": "f10a99b7-cd50-4267-9277-bd085a8b570d",
      "label": "Médecin",
      "category": "Personne",
      "properties": {
        "Nom": "à renseigner",
        "Coordonnées": "à renseigner"
      }
    },
    {
      "id": "a108a847-c8e6-45fe-8f99-586661b24577",
      "label": "Défunt",
      "category": "Defunt",
      "properties": {
        "Nom et prénoms": "à renseigner",
        "Date du décès": "à renseigner",
        "Lieu du décès": "à renseigner"
      }
    },
    {
      "id": "590c6c3d-4a68-457f-a542-d7d7b6bc8966",
      "label": "Inhumation",
      "category": "Derniere_volonte",
      "properties": {
        "Volonté écrite ou témoignage": "à vérifier"
      }
    },
    {
      "id": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "label": "Informer les organismes payeurs",
      "category": "Formalite",
      "properties": {
        "prop_1": "Joindre un acte de décès à chaque courrier"
      }
    },
    {
      "id": "a1f6f262-a3b2-4ca6-abe9-b71744b84217",
      "label": "Bailleur",
      "category": "Organisme",
      "properties": {
        "Coordonnées": "à renseigner",
        "Référence du bail": "à renseigner"
      }
    },
    {
      "id": "2628f5eb-ed14-4fcb-b262-a11aa38e971f",
      "label": "Biens professionnels",
      "category": "Patrimoine",
      "properties": {
        "prop_1": "Inventaire à établir"
      }
    },
    {
      "id": "523b5a16-143c-47c1-bfe7-d692e0d27704",
      "label": "Entreprise",
      "category": "Bien",
      "properties": {
        "Forme juridique": "à préciser",
        "Parts ou actions détenues": "à renseigner"
      }
    },
    {
      "id": "af25e11d-4b6b-4313-b3b8-85bd042543c8",
      "label": "Fonds de commerce",
      "category": "Bien",
      "properties": {
        "Valeur estimée": "à renseigner"
      }
    },
    {
      "id": "024b1b23-f96f-4660-9d53-225456b77fd8",
      "label": "Biens Matériels",
      "category": "Patrimoine",
      "properties": {
        "prop_1": "Inventaire à établir"
      }
    },
    {
      "id": "ea8e4c15-c16d-4ef5-978d-695970094363",
      "label": "Objets d'art ou de collection",
      "category": "Bien",
      "properties": {
        "prop_1": "Expertise éventuelle à prévoir"
      }
    },
    {
      "id": "dce19039-dfca-4554-99b0-fde87f4602a8",
      "label": "Déclarer le décès",
      "category": "Formalite",
      "properties": {
        "prop_1": "Gratuit",
        "prop_2": "Pièce d'identité du déclarant requise"
      }
    },
    {
      "id": "f40fea49-8760-4f68-accb-892f9a4d60b7",
      "label": "Dans les 24 heures",
      "category": "Delais",
      "properties": {
        "prop_1": "Délai légal à compter du constat du décès"
      }
    },
    {
      "id": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "label": "Contrat d'assurance obsèques",
      "category": "Contrat",
      "properties": {
        "N° de contrat": "à renseigner",
        "Capital prévu": "à renseigner"
      }
    },
    {
      "id": "7a6dcf1e-51c0-47a6-95b2-3dcf02e1d178",
      "label": "Achat d'une concession",
      "category": "Depense",
      "properties": {
        "Durée": "15/30/50 ans ou perpétuelle"
      }
    },
    {
      "id": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "label": "Organisation des funérailles",
      "category": "Formalite",
      "properties": {
        "prop_1": "Respecter les volontés du défunt"
      }
    },
    {
      "id": "8ebc8806-8cc0-421e-9f4f-71803b4b7b45",
      "label": "Voisin",
      "category": "Personne",
      "properties": {
        "Nom": "à renseigner"
      }
    },
    {
      "id": "0f45475a-0112-49a3-802c-d838a71cfad8",
      "label": "Transport du corps",
      "category": "Depense",
      "properties": {
        "prop_1": "Autorisation nécessaire hors commune"
      }
    },
    {
      "id": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "label": "Légataire",
      "category": "Personne",
      "properties": {
        "Nom": "à renseigner",
        "Lien avec le défunt": "à préciser"
      }
    },
    {
      "id": "4e17d08a-5050-476f-a991-154f24659bb4",
      "label": "Propriété intellectuelle",
      "category": "Patrimoine",
      "properties": {
        "Titres et contrats": "à réunir"
      }
    },
    {
      "id": "27ad8527-aad9-426a-8d62-451152b1fe2b",
      "label": "Inhumation ou Crémation",
      "category": "Depense",
      "properties": {
        "prop_1": "Selon les volontés du défunt"
      }
    },
    {
      "id": "488e9d8f-f6dd-4647-91cd-d66a2e793170",
      "label": "Cérémonie d'accompagnement",
      "category": "Depense",
      "properties": {
        "Civile ou religieuse": "à préciser"
      }
    },
    {
      "id": "a9718d5a-63f3-4404-9eb2-13e2a88eb805",
      "label": "Vérifier l'existence d'un Testament",
      "category": "Formalite",
      "properties": {
        "prop_1": "Interrogation du FCDDV"
      }
    },
    {
      "id": "24e57cd9-16c1-45c8-a078-fb2fea84e348",
      "label": "Fichier central des dispositions de dernières volontés",
      "category": "Organisme",
      "properties": {
        "prop_1": "FCDDV",
        "prop_2": "Interrogation en ligne ou via un notaire"
      }
    },
    {
      "id": "b755582e-5910-433f-921d-b4437ed349fd",
      "label": "Contrat d'assurance Vie",
      "category": "Contrat",
      "properties": {
        "prop_1": "Hors succession en principe",
        "Bénéficiaires désignés": "à vérifier"
      }
    },
    {
      "id": "a04deb94-8c40-4aa5-8a1b-565458358377",
      "label": "AGIRA",
      "category": "Organisme",
      "properties": {
        "prop_1": "Recherche gratuite des contrats d'assurance",
        "prop_2": "Réponse sous 15 jours environ"
      }
    },
    {
      "id": "5702e50e-58dc-4713-b172-fd6574358cfc",
      "label": "Emprunt",
      "category": "Dette",
      "properties": {
        "Capital restant dû": "à renseigner"
      }
    },
    {
      "id": "b7929996-ab8a-47b5-ac9e-ed51b9295922",
      "label": "Contrat d'assurance décès",
      "category": "Contrat",
      "properties": {
        "N° de contrat": "à renseigner",
        "Assureur": "à renseigner"
      }
    },
    {
      "id": "ac8badf1-d6f3-4beb-a847-c38965a33bb2",
      "label": "Testament",
      "category": "Document",
      "properties": {
        "Date de rédaction": "à renseigner"
      }
    },
    {
      "id": "71da58db-6927-465b-b8b3-cbc8efad33cc",
      "label": "Olographe",
      "category": "Testament",
      "properties": {
        "prop_1": "Écrit daté et signé de la main du testateur"
      }
    },
    {
      "id": "bc3cde6e-5fa1-4ccd-becb-b62dd1d57e60",
      "label": "Recherche d'une assurance obsèques",
      "category": "Formalite",
      "properties": {
        "prop_1": "Vérifier les papiers du défunt et interroger l'AGIRA"
      }
    },
    {
      "id": "3fd35a90-68b4-490f-bc64-bd62db91371e",
      "label": "Dans les 48 heures",
      "category": "Delais",
      "properties": {
        "prop_1": "Délai recommandé"
      }
    },
    {
      "id": "2b2fb7dd-a17e-477a-8c7c-9a95fc41459c",
      "label": "Caisse de retraite",
      "category": "Organisme",
      "properties": {
        "Nom de la caisse": "à renseigner",
        "N° de pensionné": "à renseigner"
      }
    },
    {
      "id": "f8a51800-3ae7-4fab-84a9-364deb230bdf",
      "label": "Dans les 6 jours",
      "category": "Delais",
      "properties": {
        "Délai légal": "6 jours ouvrables après le décès"
      }
    },
    {
      "id": "3e3750c1-745c-4974-898b-70438f5a8f3a",
      "label": "Capital décès de la CPAM",
      "category": "Allocation",
      "properties": {
        "prop_1": "Montant forfaitaire",
        "prop_2": "Sous conditions d'activité du défunt"
      }
    },
    {
      "id": "1efe2bf5-2149-497e-b8d9-93f199905bf7",
      "label": "Organiser la succession",
      "category": "Formalite",
      "properties": {
        "prop_1": "Réunir livret de famille et actes de propriété"
      }
    },
    {
      "id": "df8f7aa9-67d2-4ae4-a9e4-cc71b9b24813",
      "label": "Maison de retraite",
      "category": "Organisme",
      "properties": {
        "Établissement": "à renseigner"
      }
    },
    {
      "id": "76e9ce6f-d912-44b8-bfe4-06f80192b971",
      "label": "Pompes funèbres",
      "category": "Entreprise",
      "properties": {
        "Coordonnées": "à renseigner",
        "prop_2": "Comparer plusieurs devis"
      }
    },
    {
      "id": "1ce11da3-c6e4-41eb-950c-0469f81eb364",
      "label": "Achat et pose d'un emblème sur la sépulture",
      "category": "Depense",
      "properties": {
        "Devis": "à renseigner"
      }
    },
    {
      "id": "4311d8c3-90f6-4439-a3cc-30131efe179c",
      "label": "Achat de fleurs",
      "category": "Depense",
      "properties": {
        "Budget": "à renseigner"
      }
    },
    {
      "id": "6af21ab1-048b-4776-85d7-f34f435594aa",
      "label": "Impôts",
      "category": "Dette",
      "properties": {
        "prop_1": "Dettes fiscales déductibles de l'actif successoral"
      }
    },
    {
      "id": "d871da4d-5bf3-4799-962e-99cf5b62390d",
      "label": "Centre des impôts",
      "category": "Organisme",
      "properties": {
        "prop_1": "Service des impôts du domicile du défunt"
      }
    },
    {
      "id": "252ab1e4-bc47-44eb-b448-7997d31782ca",
      "label": "Office Notarial",
      "category": "Entreprise",
      "properties": {
        "Notaire": "à renseigner",
        "prop_2": "Obligatoire si bien immobilier ou testament"
      }
    },
    {
      "id": "631375a4-0c0f-4656-9cbd-1807a2510c5c",
      "label": "Dans le mois",
      "category": "Delais",
      "properties": {
        "prop_1": "Délai recommandé"
      }
    },
    {
      "id": "dc47759c-2b09-4854-bd71-40fc2b795c80",
      "label": "Crémation",
      "category": "Derniere_volonte",
      "properties": {
        "Volonté écrite ou témoignage": "à vérifier"
      }
    },
    {
      "id": "e8d39491-0d4d-41b1-9bc7-50675b6f941c",
      "label": "Gérer les comptes bancaires",
      "category": "Formalite",
      "properties": {
        "prop_1": "Comptes individuels bloqués au décès"
      }
    },
    {
      "id": "0050494a-c05c-459b-b497-713a03e3c288",
      "label": "Dans les 10 jours",
      "category": "Delais",
      "properties": {
        "prop_1": "Délai recommandé"
      }
    },
    {
      "id": "a1536efb-329d-4a13-ab2e-f0f3ec898942",
      "label": "Déclaration de revenus",
      "category": "Formalite",
      "properties": {
        "prop_1": "Revenus du 1er janvier à la date du décès"
      }
    },
    {
      "id": "a0ba2779-af5f-436c-8eb5-6a0e4413ec0f",
      "label": "Etablissement bancaire",
      "category": "Entreprise",
      "properties": {
        "Banque": "à renseigner",
        "N° de compte": "à renseigner"
      }
    },
    {
      "id": "725d1b53-7984-44ef-92f7-a31bd15bac3d",
      "label": "Résiliation des abonnements",
      "category": "Formalite",
      "properties": {
        "prop_1": "Joindre un acte de décès à chaque demande"
      }
    },
    {
      "id": "5c8d064b-21df-400e-b1a9-2aa5061a4785",
      "label": "Déclaration de succession",
      "category": "Formalite",
      "properties": {
        "prop_1": "Formulaire 2705",
        "prop_2": "Dispense possible pour les petites successions"
      }
    },
    {
      "id": "c8dfaff0-09d3-4829-b8d7-84b53905deb2",
      "label": "Produits d'épargne",
      "category": "Actif_financier",
      "properties": {
        "Livrets et plans": "à lister"
      }
    },
    {
      "id": "f38608a2-f448-44e0-906c-381e8b0880c7",
      "label": "Equipements",
      "category": "Bien",
      "properties": {
        "Liste": "à établir"
      }
    },
    {
      "id": "ff8d4453-0d62-4816-854a-f7f879dc8310",
      "label": "Brevet",
      "category": "Bien",
      "properties": {
        "N° INPI": "à renseigner"
      }
    },
    {
      "id": "27afd14c-4a9a-4b40-adaa-7ec5803fd57a",
      "label": "Droits d'auteur",
      "category": "Bien",
      "properties": {
        "prop_1": "Protégés 70 ans après le décès"
      }
    },
    {
      "id": "227b008d-5d19-4c23-bee1-0a6baa1e4103",
      "label": "Mairie",
      "category": "Organisme",
      "properties": {
        "prop_1": "Mairie du lieu de décès",
        "prop_2": "Service état civil"
      }
    },
    {
      "id": "2ae44539-3098-412d-8ed8-7561f791a760",
      "label": "Hôpital",
      "category": "Organisme",
      "properties": {
        "Établissement": "à renseigner"
      }
    },
    {
      "id": "9a500cdd-c009-40e2-9332-6fc3190433fe",
      "label": "Dans les 6 mois",
      "category": "Delais",
      "properties": {
        "prop_1": "Délai légal si décès en France",
        "prop_2": "12 mois si décès à l'étranger"
      }
    },
    {
      "id": "fea1c170-b1dd-4fd3-a569-70350e57fd58",
      "label": "Amis",
      "category": "Personne",
      "properties": {
        "Liste des personnes à prévenir": "à établir"
      }
    },
    {
      "id": "c20f7561-caec-4c4e-81c1-67260ba3e845",
      "label": "Authentique",
      "category": "Testament",
      "properties": {
        "prop_1": "Reçu par notaire en présence de témoins"
      }
    },
    {
      "id": "16e067e2-a815-4891-9634-fc0747c997ea",
      "label": "Etablissement de l'acte de décès",
      "category": "Formalite",
      "properties": {
        "prop_1": "Demander plusieurs copies (gratuites)"
      }
    },
    {
      "id": "2e95b26e-ef13-4607-b3e4-8b6b7fa6f219",
      "label": "Mystique",
      "category": "Testament",
      "properties": {
        "prop_1": "Remis clos et scellé à un notaire"
      }
    },
    {
      "id": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "label": "Placements financiers",
      "category": "Patrimoine",
      "properties": {
        "Relevés et contrats": "à réunir"
      }
    },
    {
      "id": "92e1b44c-d9e4-4d7d-9fe0-5c8185459b53",
      "label": "Dépôt bancaire",
      "category": "Actif_financier",
      "properties": {
        "Établissement et solde": "à renseigner"
      }
    },
    {
      "id": "ed94337d-eb18-4c5e-9863-b89b340ebca2",
      "label": "Actions",
      "category": "Actif_financier",
      "properties": {
        "Établissement teneur de compte": "à renseigner"
      }
    },
    {
      "id": "8448eb30-78ab-457d-84ba-c13b7dced5a5",
      "label": "Cotisations retraite",
      "category": "Actif_financier",
      "properties": {
        "Caisses concernées": "à renseigner"
      }
    },
    {
      "id": "bed6ae9b-3665-4912-a46d-bb9d2e1aa4ca",
      "label": "Parts de fonds collectifs",
      "category": "Actif_financier",
      "properties": {
        "OPC détenus": "à lister"
      }
    },
    {
      "id": "58299f55-3e93-41d0-b89d-279e14f96eb5",
      "label": "Foncier et Immobilier",
      "category": "Patrimoine",
      "properties": {
        "Titres de propriété": "à réunir"
      }
    },
    {
      "id": "38f7902f-ed6f-4e73-a144-15bb4a64d808",
      "label": "Habitation",
      "category": "Propriete",
      "properties": {
        "Adresse": "à renseigner",
        "Résidence principale ou secondaire": "à préciser"
      }
    },
    {
      "id": "5d346e33-e36f-4797-a4c5-e3bec16da6c4",
      "label": "Courriers d'invitation et de remerciements",
      "category": "Depense",
      "properties": {
        "Liste des destinataires": "à établir"
      }
    },
    {
      "id": "20f30fb3-e5b3-4089-96ed-1c0b8b6a0cf8",
      "label": "Terrain",
      "category": "Propriete",
      "properties": {
        "Références cadastrales": "à renseigner"
      }
    },
    {
      "id": "dbbf672c-296b-4965-8445-72c9538c7adf",
      "label": "Employeur",
      "category": "Entreprise",
      "properties": {
        "Raison sociale": "à renseigner",
        "Contact RH": "à renseigner"
      }
    },
    {
      "id": "1502c490-9760-4388-be77-8e3e366c717c",
      "label": "Collègue",
      "category": "Personne",
      "properties": {
        "prop_1": "Prévenus via l'employeur"
      }
    },
    {
      "id": "bdfc2600-551e-41e7-912e-55033b9633c5",
      "label": "Allocation de veuvage",
      "category": "Allocation",
      "properties": {
        "prop_1": "Sous conditions de ressources",
        "prop_2": "Versée par la caisse de retraite (CNAV)"
      }
    },
    {
      "id": "20da5ce7-1ddc-441e-9470-24b395bbcce0",
      "label": "Famille",
      "category": "Personne",
      "properties": {
        "Membres concernés": "à lister"
      }
    },
    {
      "id": "19a7b99b-398b-4694-b59e-267f65ded529",
      "label": "Allocation de soutien familial",
      "category": "Allocation",
      "properties": {
        "prop_1": "Versée par la CAF",
        "prop_2": "Pour les enfants orphelins"
      }
    },
    {
      "id": "51edb783-f5f3-47d0-9359-c13c57ce3005",
      "label": "Service des eaux de la commune",
      "category": "Organisme",
      "properties": {
        "N° de contrat": "à renseigner"
      }
    },
    {
      "id": "0aac1452-3ddf-48e7-9495-ce1f0132bd0e",
      "label": "Centre national de traitement FBFV",
      "category": "Organisme",
      "properties": {
        "Coordonnées": "à renseigner"
      }
    },
    {
      "id": "bb2e6e44-c4f3-46d7-8646-6acb51c98244",
      "label": "Véhicules",
      "category": "Bien",
      "properties": {
        "prop_1": "Carte grise à mettre à jour",
        "Valeur Argus": "à renseigner"
      }
    },
    {
      "id": "67546a31-fbda-4631-b70c-24002d40f3cc",
      "label": "Opérateur téléphonique",
      "category": "Entreprise",
      "properties": {
        "Opérateur": "à renseigner",
        "N° de contrat": "à renseigner"
      }
    },
    {
      "id": "ea8ea9cc-36a1-4575-a2de-d2c45762cc98",
      "label": "Fournisseur d'accès Internet",
      "category": "Entreprise",
      "properties": {
        "Fournisseur": "à renseigner",
        "N° de contrat": "à renseigner"
      }
    },
    {
      "id": "45e0ff89-a0aa-4d51-a73c-c267fd3bf668",
      "label": "Assurance",
      "category": "Entreprise",
      "properties": {
        "Assureur": "à renseigner",
        "N° de contrat": "à renseigner"
      }
    },
    {
      "id": "f5385c68-438e-4a01-a690-d89e032e0c3f",
      "label": "Meubles",
      "category": "Bien",
      "properties": {
        "prop_1": "Forfait mobilier de 5 % possible pour la déclaration"
      }
    },
    {
      "id": "a69bc169-976d-4ef8-b690-da0f3e69257e",
      "label": "France travail",
      "category": "Organisme",
      "properties": {
        "prop_1": "Si le défunt était inscrit",
        "N° identifiant": "à renseigner"
      }
    },
    {
      "id": "1f1e3b61-4322-45c9-a3d4-0f8a2ddd30ca",
      "label": "Caisse d'allocations familliales",
      "category": "Organisme",
      "properties": {
        "N° allocataire": "à renseigner"
      }
    },
    {
      "id": "55c321c5-54fb-414f-a1c3-42ebf51adb9c",
      "label": "Avis d'obsèques",
      "category": "Depense",
      "properties": {
        "Journal et date de parution": "à renseigner"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_1_tqvm",
      "type": "PEUT_BENEFICIER",
      "source": "5ec52308-46fd-41c4-9d13-fb1e51b31544",
      "target": "83c53c55-9bde-4d11-aa08-010cce5111ad",
      "properties": {
        "prop_1": "À partir de 55 ans en général",
        "Non automatique": "demande à déposer"
      }
    },
    {
      "id": "e_2_oiua",
      "type": "ETABLI_PAR",
      "source": "aa5989da-cc5e-4bf6-b141-46ea3c9e05a3",
      "target": "f10a99b7-cd50-4267-9277-bd085a8b570d",
      "properties": {
        "prop_1": "Constat effectué sur place"
      }
    },
    {
      "id": "e_3_dsps",
      "type": "A_EXPRIME",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "590c6c3d-4a68-457f-a542-d7d7b6bc8966",
      "properties": {
        "prop_1": "Volonté à respecter obligatoirement"
      }
    },
    {
      "id": "e_4_w2d6",
      "type": "CONTACTER",
      "source": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "target": "a1f6f262-a3b2-4ca6-abe9-b71744b84217",
      "properties": {
        "prop_1": "Courrier recommandé avec acte de décès"
      }
    },
    {
      "id": "e_5_p5hm",
      "type": "INCLUT",
      "source": "2628f5eb-ed14-4fcb-b262-a11aa38e971f",
      "target": "523b5a16-143c-47c1-bfe7-d692e0d27704",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_6_d7sz",
      "type": "INCLUT",
      "source": "2628f5eb-ed14-4fcb-b262-a11aa38e971f",
      "target": "af25e11d-4b6b-4313-b3b8-85bd042543c8",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_7_oun7",
      "type": "INCLUT",
      "source": "024b1b23-f96f-4660-9d53-225456b77fd8",
      "target": "ea8e4c15-c16d-4ef5-978d-695970094363",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_8_r4ht",
      "type": "A_EFFECTUER",
      "source": "dce19039-dfca-4554-99b0-fde87f4602a8",
      "target": "f40fea49-8760-4f68-accb-892f9a4d60b7",
      "properties": {
        "prop_1": "Délai légal"
      }
    },
    {
      "id": "e_9_neiu",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "7a6dcf1e-51c0-47a6-95b2-3dcf02e1d178",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_10_wk6i",
      "type": "INFORMER",
      "source": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "target": "8ebc8806-8cc0-421e-9f4f-71803b4b7b45",
      "properties": {
        "prop_1": "Selon la proximité"
      }
    },
    {
      "id": "e_11_rc1x",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "0f45475a-0112-49a3-802c-d838a71cfad8",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_12_qmdy",
      "type": "HERITE",
      "source": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "target": "2628f5eb-ed14-4fcb-b262-a11aa38e971f",
      "properties": {
        "prop_1": "Selon testament et ordre des héritiers",
        "Part": "à préciser"
      }
    },
    {
      "id": "e_13_3m3t",
      "type": "HERITE",
      "source": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "target": "4e17d08a-5050-476f-a991-154f24659bb4",
      "properties": {
        "prop_1": "Selon testament et ordre des héritiers",
        "Part": "à préciser"
      }
    },
    {
      "id": "e_14_uqz6",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "27ad8527-aad9-426a-8d62-451152b1fe2b",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_15_548y",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "488e9d8f-f6dd-4647-91cd-d66a2e793170",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_16_g977",
      "type": "CONSULTER",
      "source": "a9718d5a-63f3-4404-9eb2-13e2a88eb805",
      "target": "24e57cd9-16c1-45c8-a078-fb2fea84e348",
      "properties": {
        "prop_1": "Acte de décès requis"
      }
    },
    {
      "id": "e_17_q4e8",
      "type": "CONSULTER",
      "source": "b755582e-5910-433f-921d-b4437ed349fd",
      "target": "a04deb94-8c40-4aa5-8a1b-565458358377",
      "properties": {
        "prop_1": "Recherche des bénéficiaires",
        "prop_2": "Demande gratuite"
      }
    },
    {
      "id": "e_18_ppga",
      "type": "ETAIT_MARIE",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "5ec52308-46fd-41c4-9d13-fb1e51b31544",
      "properties": {
        "Date et régime du mariage": "à renseigner"
      }
    },
    {
      "id": "e_19_d0vd",
      "type": "COUVERT_PAR",
      "source": "5702e50e-58dc-4713-b172-fd6574358cfc",
      "target": "b7929996-ab8a-47b5-ac9e-ed51b9295922",
      "properties": {
        "prop_1": "Vérifier les garanties et exclusions"
      }
    },
    {
      "id": "e_20_tljn",
      "type": "PEUT_ETRE",
      "source": "ac8badf1-d6f3-4beb-a847-c38965a33bb2",
      "target": "71da58db-6927-465b-b8b3-cbc8efad33cc",
      "properties": {
        "prop_1": "Forme la plus courante"
      }
    },
    {
      "id": "e_21_y31x",
      "type": "ENREGISTRE_AUPRES",
      "source": "b7929996-ab8a-47b5-ac9e-ed51b9295922",
      "target": "a04deb94-8c40-4aa5-8a1b-565458358377",
      "properties": {
        "prop_1": "Recherche possible par les bénéficiaires"
      }
    },
    {
      "id": "e_22_cf9d",
      "type": "A_EFFECTUER",
      "source": "bc3cde6e-5fa1-4ccd-becb-b62dd1d57e60",
      "target": "3fd35a90-68b4-490f-bc64-bd62db91371e",
      "properties": {
        "prop_1": "Avant d'engager des frais"
      }
    },
    {
      "id": "e_23_kjll",
      "type": "CONTACTER",
      "source": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "target": "2b2fb7dd-a17e-477a-8c7c-9a95fc41459c",
      "properties": {
        "prop_1": "Stopper les versements et demander la réversion"
      }
    },
    {
      "id": "e_24_g1sx",
      "type": "A_EFFECTUER",
      "source": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "target": "f8a51800-3ae7-4fab-84a9-364deb230bdf",
      "properties": {
        "prop_1": "Délai légal (hors dimanches et jours fériés)"
      }
    },
    {
      "id": "e_25_ys3z",
      "type": "SOLLICITER",
      "source": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "target": "3e3750c1-745c-4974-898b-70438f5a8f3a",
      "properties": {
        "prop_1": "Demande dans les 2 ans",
        "prop_2": "Priorité dans le mois"
      }
    },
    {
      "id": "e_26_9hql",
      "type": "CONSULTER",
      "source": "1efe2bf5-2149-497e-b8d9-93f199905bf7",
      "target": "24e57cd9-16c1-45c8-a078-fb2fea84e348",
      "properties": {
        "prop_1": "Généralement via le notaire"
      }
    },
    {
      "id": "e_27_4huf",
      "type": "DECLARE_PAR",
      "source": "dce19039-dfca-4554-99b0-fde87f4602a8",
      "target": "df8f7aa9-67d2-4ae4-a9e4-cc71b9b24813",
      "properties": {
        "prop_1": "Si décès dans l'établissement"
      }
    },
    {
      "id": "e_28_0jy8",
      "type": "CONTACTER",
      "source": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "target": "76e9ce6f-d912-44b8-bfe4-06f80192b971",
      "properties": {
        "prop_1": "Devis écrit obligatoire"
      }
    },
    {
      "id": "e_29_ov72",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "1ce11da3-c6e4-41eb-950c-0469f81eb364",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_30_mmpi",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "4311d8c3-90f6-4439-a3cc-30131efe179c",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_31_92pq",
      "type": "DOIT_PAYER",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "6af21ab1-048b-4776-85d7-f34f435594aa",
      "properties": {
        "prop_1": "Passif transmis à la succession"
      }
    },
    {
      "id": "e_32_tsbc",
      "type": "DOIT_REMBOURSER",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "5702e50e-58dc-4713-b172-fd6574358cfc",
      "properties": {
        "prop_1": "Vérifier l'assurance emprunteur"
      }
    },
    {
      "id": "e_33_4gva",
      "type": "ENREGISTRE_AUPRES",
      "source": "6af21ab1-048b-4776-85d7-f34f435594aa",
      "target": "d871da4d-5bf3-4799-962e-99cf5b62390d",
      "properties": {
        "prop_1": "Solde à régulariser"
      }
    },
    {
      "id": "e_34_lm4w",
      "type": "CONTACTER",
      "source": "1efe2bf5-2149-497e-b8d9-93f199905bf7",
      "target": "252ab1e4-bc47-44eb-b448-7997d31782ca",
      "properties": {
        "prop_1": "Premier rendez-vous à prendre rapidement"
      }
    },
    {
      "id": "e_35_l9j3",
      "type": "A_EFFECTUER",
      "source": "1efe2bf5-2149-497e-b8d9-93f199905bf7",
      "target": "631375a4-0c0f-4656-9cbd-1807a2510c5c",
      "properties": {
        "prop_1": "Prise de contact recommandée"
      }
    },
    {
      "id": "e_36_cyx3",
      "type": "A_EXPRIME",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "dc47759c-2b09-4854-bd71-40fc2b795c80",
      "properties": {
        "prop_1": "Volonté à respecter obligatoirement"
      }
    },
    {
      "id": "e_37_6310",
      "type": "A_EFFECTUER",
      "source": "e8d39491-0d4d-41b1-9bc7-50675b6f941c",
      "target": "631375a4-0c0f-4656-9cbd-1807a2510c5c",
      "properties": {
        "prop_1": "Avant tout prélèvement indu"
      }
    },
    {
      "id": "e_38_rdsf",
      "type": "A_EFFECTUER",
      "source": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "target": "0050494a-c05c-459b-b497-713a03e3c288",
      "properties": {
        "prop_1": "Au plus tôt pour éviter les trop-perçus"
      }
    },
    {
      "id": "e_39_8an5",
      "type": "DECLARER_A",
      "source": "a1536efb-329d-4a13-ab2e-f0f3ec898942",
      "target": "d871da4d-5bf3-4799-962e-99cf5b62390d",
      "properties": {
        "prop_1": "Déclaration au nom du défunt"
      }
    },
    {
      "id": "e_40_1cph",
      "type": "ENREGISTRE_AUPRES",
      "source": "5702e50e-58dc-4713-b172-fd6574358cfc",
      "target": "a0ba2779-af5f-436c-8eb5-6a0e4413ec0f",
      "properties": {
        "prop_1": "Demander le tableau d'amortissement"
      }
    },
    {
      "id": "e_41_1knz",
      "type": "A_EFFECTUER",
      "source": "725d1b53-7984-44ef-92f7-a31bd15bac3d",
      "target": "631375a4-0c0f-4656-9cbd-1807a2510c5c",
      "properties": {
        "prop_1": "Pour limiter les frais"
      }
    },
    {
      "id": "e_42_7ujq",
      "type": "DECLARER_A",
      "source": "5c8d064b-21df-400e-b1a9-2aa5061a4785",
      "target": "d871da4d-5bf3-4799-962e-99cf5b62390d",
      "properties": {
        "prop_1": "Dépôt avec paiement des droits éventuels"
      }
    },
    {
      "id": "e_43_2twx",
      "type": "CONSTITUE",
      "source": "c8dfaff0-09d3-4829-b8d7-84b53905deb2",
      "target": "b755582e-5910-433f-921d-b4437ed349fd",
      "properties": {
        "prop_1": "Traitement hors succession en principe"
      }
    },
    {
      "id": "e_44_uapm",
      "type": "INCLUT",
      "source": "024b1b23-f96f-4660-9d53-225456b77fd8",
      "target": "f38608a2-f448-44e0-906c-381e8b0880c7",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_45_l4b3",
      "type": "CONSULTER",
      "source": "bc3cde6e-5fa1-4ccd-becb-b62dd1d57e60",
      "target": "a04deb94-8c40-4aa5-8a1b-565458358377",
      "properties": {
        "prop_1": "Demande écrite avec acte de décès"
      }
    },
    {
      "id": "e_46_dwcw",
      "type": "INCLUT",
      "source": "4e17d08a-5050-476f-a991-154f24659bb4",
      "target": "ff8d4453-0d62-4816-854a-f7f879dc8310",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_47_e46v",
      "type": "INCLUT",
      "source": "4e17d08a-5050-476f-a991-154f24659bb4",
      "target": "27afd14c-4a9a-4b40-adaa-7ec5803fd57a",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_48_1cqm",
      "type": "DECLARER_A",
      "source": "dce19039-dfca-4554-99b0-fde87f4602a8",
      "target": "227b008d-5d19-4c23-bee1-0a6baa1e4103",
      "properties": {
        "prop_1": "Mairie du lieu de décès"
      }
    },
    {
      "id": "e_49_rqjd",
      "type": "DECLARE_PAR",
      "source": "dce19039-dfca-4554-99b0-fde87f4602a8",
      "target": "2ae44539-3098-412d-8ed8-7561f791a760",
      "properties": {
        "prop_1": "Si décès dans l'établissement"
      }
    },
    {
      "id": "e_50_eblh",
      "type": "A_EFFECTUER",
      "source": "a1536efb-329d-4a13-ab2e-f0f3ec898942",
      "target": "9a500cdd-c009-40e2-9332-6fc3190433fe",
      "properties": {
        "prop_1": "L'année suivant le décès selon le calendrier fiscal"
      }
    },
    {
      "id": "e_51_q2qg",
      "type": "INFORMER",
      "source": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "target": "fea1c170-b1dd-4fd3-a569-70350e57fd58",
      "properties": {
        "prop_1": "Par téléphone ou avis d'obsèques"
      }
    },
    {
      "id": "e_52_tz2q",
      "type": "A_EFFECTUER",
      "source": "5c8d064b-21df-400e-b1a9-2aa5061a4785",
      "target": "9a500cdd-c009-40e2-9332-6fc3190433fe",
      "properties": {
        "prop_1": "Délai légal",
        "prop_2": "Intérêts de retard au-delà"
      }
    },
    {
      "id": "e_53_wd29",
      "type": "PEUT_ETRE",
      "source": "ac8badf1-d6f3-4beb-a847-c38965a33bb2",
      "target": "c20f7561-caec-4c4e-81c1-67260ba3e845",
      "properties": {
        "prop_1": "Force probante maximale"
      }
    },
    {
      "id": "e_54_qkbo",
      "type": "ETABLI_PAR",
      "source": "16e067e2-a815-4891-9634-fc0747c997ea",
      "target": "227b008d-5d19-4c23-bee1-0a6baa1e4103",
      "properties": {
        "prop_1": "Sur présentation du certificat de décès"
      }
    },
    {
      "id": "e_55_o9tl",
      "type": "PEUT_ETRE",
      "source": "ac8badf1-d6f3-4beb-a847-c38965a33bb2",
      "target": "2e95b26e-ef13-4607-b3e4-8b6b7fa6f219",
      "properties": {
        "prop_1": "Forme rare"
      }
    },
    {
      "id": "e_56_d78y",
      "type": "ENREGISTRE_AUPRES",
      "source": "c20f7561-caec-4c4e-81c1-67260ba3e845",
      "target": "24e57cd9-16c1-45c8-a078-fb2fea84e348",
      "properties": {
        "prop_1": "Inscription systématique par le notaire"
      }
    },
    {
      "id": "e_57_md68",
      "type": "DESIGNE",
      "source": "ac8badf1-d6f3-4beb-a847-c38965a33bb2",
      "target": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "properties": {
        "Universel ou à titre particulier": "à préciser"
      }
    },
    {
      "id": "e_58_7iss",
      "type": "A_SOUSCRIT",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "b755582e-5910-433f-921d-b4437ed349fd",
      "properties": {
        "Date de souscription": "à renseigner"
      }
    },
    {
      "id": "e_59_zcgn",
      "type": "A_SOUSCRIT",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "properties": {
        "Date de souscription": "à renseigner"
      }
    },
    {
      "id": "e_60_7vp2",
      "type": "INCLUT",
      "source": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "target": "92e1b44c-d9e4-4d7d-9fe0-5c8185459b53",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_61_dz5e",
      "type": "HERITE",
      "source": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "target": "024b1b23-f96f-4660-9d53-225456b77fd8",
      "properties": {
        "prop_1": "Selon testament et ordre des héritiers",
        "Part": "à préciser"
      }
    },
    {
      "id": "e_62_ldhj",
      "type": "INCLUT",
      "source": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "target": "ed94337d-eb18-4c5e-9863-b89b340ebca2",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_63_j7br",
      "type": "INCLUT",
      "source": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "target": "8448eb30-78ab-457d-84ba-c13b7dced5a5",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_64_29n9",
      "type": "INCLUT",
      "source": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "target": "c8dfaff0-09d3-4829-b8d7-84b53905deb2",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_65_bren",
      "type": "INCLUT",
      "source": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "target": "bed6ae9b-3665-4912-a46d-bb9d2e1aa4ca",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_66_sj62",
      "type": "INCLUT",
      "source": "58299f55-3e93-41d0-b89d-279e14f96eb5",
      "target": "38f7902f-ed6f-4e73-a144-15bb4a64d808",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_67_dfuy",
      "type": "ENREGISTRE_AUPRES",
      "source": "2e95b26e-ef13-4607-b3e4-8b6b7fa6f219",
      "target": "24e57cd9-16c1-45c8-a078-fb2fea84e348",
      "properties": {
        "prop_1": "Inscription par le notaire dépositaire"
      }
    },
    {
      "id": "e_68_lz6l",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "5d346e33-e36f-4797-a4c5-e3bec16da6c4",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_69_oodx",
      "type": "A_REDIGE",
      "source": "a108a847-c8e6-45fe-8f99-586661b24577",
      "target": "ac8badf1-d6f3-4beb-a847-c38965a33bb2",
      "properties": {
        "prop_1": "Existence à vérifier auprès du FCDDV"
      }
    },
    {
      "id": "e_70_8tjt",
      "type": "INCLUT",
      "source": "58299f55-3e93-41d0-b89d-279e14f96eb5",
      "target": "20f30fb3-e5b3-4089-96ed-1c0b8b6a0cf8",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_71_4b1q",
      "type": "INFORMER",
      "source": "dbbf672c-296b-4965-8445-72c9538c7adf",
      "target": "1502c490-9760-4388-be77-8e3e366c717c",
      "properties": {
        "prop_1": "Communication interne"
      }
    },
    {
      "id": "e_72_o4zm",
      "type": "CONTACTER",
      "source": "e8d39491-0d4d-41b1-9bc7-50675b6f941c",
      "target": "a0ba2779-af5f-436c-8eb5-6a0e4413ec0f",
      "properties": {
        "prop_1": "Envoyer l'acte de décès",
        "prop_2": "Blocage des comptes individuels"
      }
    },
    {
      "id": "e_73_hbc3",
      "type": "PEUT_BENEFICIER",
      "source": "5ec52308-46fd-41c4-9d13-fb1e51b31544",
      "target": "bdfc2600-551e-41e7-912e-55033b9633c5",
      "properties": {
        "prop_1": "Si moins de 55 ans",
        "prop_2": "Demande dans les 2 ans"
      }
    },
    {
      "id": "e_74_pn2r",
      "type": "PEUT_BENEFICIER",
      "source": "20da5ce7-1ddc-441e-9470-24b395bbcce0",
      "target": "19a7b99b-398b-4694-b59e-267f65ded529",
      "properties": {
        "prop_1": "Demande auprès de la CAF"
      }
    },
    {
      "id": "e_75_xvf2",
      "type": "CONTACTER",
      "source": "725d1b53-7984-44ef-92f7-a31bd15bac3d",
      "target": "51edb783-f5f3-47d0-9359-c13c57ce3005",
      "properties": {
        "prop_1": "Résiliation ou transfert du contrat"
      }
    },
    {
      "id": "e_76_pje3",
      "type": "ENREGISTRE_AUPRES",
      "source": "e8d39491-0d4d-41b1-9bc7-50675b6f941c",
      "target": "0aac1452-3ddf-48e7-9495-ce1f0132bd0e",
      "properties": {
        "prop_1": "Signalement du décès"
      }
    },
    {
      "id": "e_77_zepe",
      "type": "INFORMER",
      "source": "68c601ca-6649-4a79-9e48-a478d3be4261",
      "target": "dbbf672c-296b-4965-8445-72c9538c7adf",
      "properties": {
        "prop_1": "Congé pour décès possible pour les proches salariés"
      }
    },
    {
      "id": "e_78_per9",
      "type": "INCLUT",
      "source": "024b1b23-f96f-4660-9d53-225456b77fd8",
      "target": "bb2e6e44-c4f3-46d7-8646-6acb51c98244",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_79_m7h5",
      "type": "CONTACTER",
      "source": "725d1b53-7984-44ef-92f7-a31bd15bac3d",
      "target": "67546a31-fbda-4631-b70c-24002d40f3cc",
      "properties": {
        "prop_1": "Résiliation sans frais sur justificatif"
      }
    },
    {
      "id": "e_80_93qi",
      "type": "CONTACTER",
      "source": "725d1b53-7984-44ef-92f7-a31bd15bac3d",
      "target": "ea8ea9cc-36a1-4575-a2de-d2c45762cc98",
      "properties": {
        "prop_1": "Résiliation sans frais sur justificatif"
      }
    },
    {
      "id": "e_81_a44q",
      "type": "CONTACTER",
      "source": "725d1b53-7984-44ef-92f7-a31bd15bac3d",
      "target": "45e0ff89-a0aa-4d51-a73c-c267fd3bf668",
      "properties": {
        "prop_1": "Résiliation ou transfert selon les contrats"
      }
    },
    {
      "id": "e_82_x9u7",
      "type": "INCLUT",
      "source": "024b1b23-f96f-4660-9d53-225456b77fd8",
      "target": "f5385c68-438e-4a01-a690-d89e032e0c3f",
      "properties": {
        "prop_1": "À inventorier pour la succession"
      }
    },
    {
      "id": "e_83_8jh3",
      "type": "CONTACTER",
      "source": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "target": "a69bc169-976d-4ef8-b690-da0f3e69257e",
      "properties": {
        "prop_1": "Si allocations en cours"
      }
    },
    {
      "id": "e_84_9l99",
      "type": "CONTACTER",
      "source": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "target": "dbbf672c-296b-4965-8445-72c9538c7adf",
      "properties": {
        "prop_1": "Solde de tout compte et capital décès éventuel"
      }
    },
    {
      "id": "e_85_fk5y",
      "type": "CONTACTER",
      "source": "33fb92f7-200b-4bee-8cb9-09298745c68c",
      "target": "1f1e3b61-4322-45c9-a3d4-0f8a2ddd30ca",
      "properties": {
        "prop_1": "Mise à jour des droits du foyer"
      }
    },
    {
      "id": "e_86_ph52",
      "type": "POUR_FINANCER",
      "source": "bf7bc49f-9b91-4ec6-9304-b791d3e0d569",
      "target": "55c321c5-54fb-414f-a1c3-42ebf51adb9c",
      "properties": {
        "prop_1": "Selon le capital prévu au contrat"
      }
    },
    {
      "id": "e_87_71p9",
      "type": "HERITE",
      "source": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "target": "58299f55-3e93-41d0-b89d-279e14f96eb5",
      "properties": {
        "prop_1": "Selon testament et ordre des héritiers",
        "Part": "à préciser"
      }
    },
    {
      "id": "e_88_huqq",
      "type": "HERITE",
      "source": "0dda3f88-b860-409c-841f-17afb4b5ccde",
      "target": "e70184e3-9f9a-438e-841a-80e5830814dc",
      "properties": {
        "prop_1": "Selon testament et ordre des héritiers",
        "Part": "à préciser"
      }
    },
    {
      "id": "e_89_i1md",
      "type": "ENVOYER_A",
      "source": "16e067e2-a815-4891-9634-fc0747c997ea",
      "target": "dbbf672c-296b-4965-8445-72c9538c7adf",
      "properties": {
        "prop_1": "Copie à joindre au courrier"
      }
    }
  ]
},

{
  "id": "audit-personnel",
  "title": "Audit personnel",
  "category": "Développement personnel",
  "description": "Cartographie des grands domaines d'un bilan personnel : santé, finances, relations, compétences, croyances et personnalité, et les liens qui les relient.",
  "longDescription": "Faire le point sur sa vie suppose d'abord d'en nommer les composantes. Ce graphe décompose l'audit personnel en domaines — santé physique et mentale, finances, relations, compétences, valeurs, croyances et traits de caractère — puis explicite leurs ramifications : ce qu'un domaine comprend, ce qu'il requiert, ce qu'il déclenche. On y suit par exemple comment une croyance soutient une valeur, qui à son tour guide les choix, les actions et les jugements du quotidien.",
  "nodes": [
    {
      "id": "86e68a3c-e412-4ca7-98bf-afaabae370ac",
      "label": "Projet",
      "category": "Projets",
      "properties": {
        "prop_1": "Un projet est une action unique et temporaire visant à créer un résultat précis grâce à des étapes clés."
      }
    },
    {
      "id": "3f69f86e-5403-4912-a67d-c386df29cde0",
      "label": "Santé",
      "category": "Santé",
      "properties": {
        "prop_1": "La santé est un état de complet bien-être physique, mental et social, et ne se limite pas à l'absence de maladie ou d'infirmité."
      }
    },
    {
      "id": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "label": "Activité",
      "category": "Santé",
      "properties": {
        "prop_1": "Une activité est une action, un travail ou un loisir que l'on fait pour bouger, apprendre ou s'occuper."
      }
    },
    {
      "id": "d77d76ae-fb5c-4250-b711-b0c022f44936",
      "label": "Bien être",
      "category": "Santé mentale",
      "properties": {
        "prop_1": "Le bien-être est un état agréable qui vient de la satisfaction des besoins du corps et du calme de l'esprit."
      }
    },
    {
      "id": "eab41c29-c9f0-4c24-9e28-706707c1d0cb",
      "label": "Finances",
      "category": "Finances",
      "properties": {
        "prop_1": "Gestion de son argent"
      }
    },
    {
      "id": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "label": "Relation",
      "category": "Contacts",
      "properties": {
        "prop_1": "Une relation est un lien, un rapport ou une connexion unissant des personnes."
      }
    },
    {
      "id": "88361550-1938-4bcc-b589-0de04160c1d8",
      "label": "Compétences",
      "category": "Talents",
      "properties": {
        "prop_1": "Une compétence est la capacité d'agir avec efficacité dans une situation donnée."
      }
    },
    {
      "id": "cbd7d8d8-6bc5-4c94-becd-ccf174516d64",
      "label": "Valeur",
      "category": "Valeurs",
      "properties": {
        "prop_1": "Les valeurs sont des principes de vie ou des croyances profondes qui définissent ce qui est important et désirable pour agir."
      }
    },
    {
      "id": "d0eb9ae0-6de7-42cc-b6ee-ea4afb8db610",
      "label": "Idéal",
      "category": "Rêves",
      "properties": {
        "prop_1": "Un idéal désigne un modèle de perfection absolue que l'esprit humain se fixe comme."
      }
    },
    {
      "id": "d2719726-be28-4701-8b6d-c809dc463f4c",
      "label": "Faiblesse",
      "category": "Faiblesses",
      "properties": {
        "prop_1": "Une faiblesse désigne un manque de force, de vigueur ou de résistance."
      }
    },
    {
      "id": "91610bca-fd4e-409e-bd8e-1b643fddefd8",
      "label": "Trait de caractère",
      "category": "Caractère",
      "properties": {
        "prop_1": "Un trait de caractère est une manière stable et habituelle qu'a un individu de réagir, de penser et de se comporter face aux situations du quotidien."
      }
    },
    {
      "id": "86814bda-327e-492b-8737-dbf2c6bc1e8c",
      "label": "Freins",
      "category": "Contraintes",
      "properties": {
        "prop_1": "Un frein pour une personne désigne un obstacle psychologique, émotionnel ou anatomique qui bloque son action, son évolution ou son bien-être. Il peut s'agir d'une peur, d'une croyance limitante"
      }
    },
    {
      "id": "0b53a7d1-55f3-4d16-9531-d61bf8719e0f",
      "label": "Date",
      "category": "Date",
      "properties": {
        "Une date est un repère temporel qui permet de": "",
        "prop_2": "Analyser son passé,",
        "prop_3": "Evaluer sa situation actuelle,",
        "prop_4": "Planifier ses objectifs futurs"
      }
    },
    {
      "id": "5aa00b76-a214-4f89-bc41-6950e10c9f95",
      "label": "Déclencheur",
      "category": "Déclencheurs",
      "properties": {
        "prop_1": "Un déclencheur (souvent appelé trigger en anglais) est un stimulus externe ou interne comme un mot, un son, une odeur, une image ou une situation qui provoque une réaction émotionnelle ou physique forte, soudaine et souvent involontaire."
      }
    },
    {
      "id": "132ba9a1-c674-4b56-9384-99cac070727e",
      "label": "Pensée",
      "category": "Pensées",
      "properties": {
        "prop_1": "Une idée est une activité de l'esprit. C'est un processus mental conscient qui permet de créer des idées, de juger, de se souvenir, d'imaginer ou de comprendre le monde."
      }
    },
    {
      "id": "885b76ea-0b0f-4f68-b8d1-dcb69090bf4f",
      "label": "Croyance",
      "category": "Croyances",
      "properties": {
        "prop_1": "Les croyances sont des certitudes ou des idées que l'on tient pour vraies sur soi et le monde qu'il y ait des preuves ou non."
      }
    },
    {
      "id": "12439f27-0b11-4e0a-9e92-e5ae62569a85",
      "label": "Une façon d'agir",
      "category": "Action",
      "properties": {
        "Une \"façon d'agir\" désigne la manière concrète de": "",
        "prop_2": "Se comporter et de réagir face aux situations",
        "prop_3": "Mener ses actions au quotidien."
      }
    },
    {
      "id": "5852e966-a1f8-4f90-8c26-b20830656c9a",
      "label": "Un façon de penser",
      "category": "Pensées",
      "properties": {
        "prop_1": "Désigne notre manière unique de traiter l'information, d'analyser les situations, de juger le monde et de résoudre les problèmes."
      }
    },
    {
      "id": "76e69046-bd78-4108-802b-193a5e6003be",
      "label": "Façon de ressentir",
      "category": "Sentiment/Emotion",
      "properties": {
        "prop_1": "La façon de ressentir d'un individu désigne sa manière unique et subjective de percevoir d'accueillir et de vivre les émotions, les sensations physiques et les événements du monde extérieur."
      }
    },
    {
      "id": "d77a5f46-4717-470f-9ec1-b5090683212a",
      "label": "Un événement",
      "category": "Déclencheurs",
      "properties": {
        "prop_1": "Fait marquant qui rompt le cours habituel du quotidien."
      }
    },
    {
      "id": "3e584dde-8d94-45d5-a3d7-ef57341ecff4",
      "label": "Une personne",
      "category": "Déclencheurs",
      "properties": {}
    },
    {
      "id": "031e1b7d-0201-4d69-9264-a69c75963c3d",
      "label": "Une situation",
      "category": "Déclencheurs",
      "properties": {
        "prop_1": "Désigne l'ensemble des circonstances, du contexte et des relations au milieu desquels on se trouve à un moment donné."
      }
    },
    {
      "id": "fb0319cc-d629-4abc-be95-1de5e67a143e",
      "label": "Réaction",
      "category": "Action",
      "properties": {
        "prop_1": "Un réaction est une réponse physique, émotionnelle ou comportementale face à un événement, un stimulis ou une situation extérieure."
      }
    },
    {
      "id": "a79cd432-56e9-489b-8cc4-59d5ff3885ce",
      "label": "Gestion du budget",
      "category": "Finances",
      "properties": {
        "prop_1": "Consiste en premier lieu à lister ses entrées et ses sorties d'argent."
      }
    },
    {
      "id": "642f616a-5373-45c0-94d3-fe87ecd135a2",
      "label": "Crédits",
      "category": "Finances",
      "properties": {
        "prop_1": "Somme d'argent empruntée qu'on s'engage à rembourser plus tard, avec des intérêts et des frais."
      }
    },
    {
      "id": "385469e7-87a1-43c3-bcee-e2970a944c8c",
      "label": "Investissements",
      "category": "Finances",
      "properties": {
        "prop_1": "Un investissement consiste à placer de l'argent, du temps ou de l'énergie dans un projet, un bien ou soi-même."
      }
    },
    {
      "id": "6f38277c-18a9-4468-be32-1985be6d182f",
      "label": "Epargne",
      "category": "Finances",
      "properties": {
        "prop_1": "Part du revenu disponible qui n'est pas dépensée immédiatement.",
        "prop_2": "Mettre de l'argent de côté pour se protéger contre les imprévus, financer des projets futurs ou faire fructifier son capital."
      }
    },
    {
      "id": "3daacd6f-f9ef-4f05-97c8-8b760a5c4df9",
      "label": "Alimentation",
      "category": "Santé",
      "properties": {
        "prop_1": "Au-delà de la simple survie biologique, l'alimentation englobe des dimensions de santé, de plaisir, de culture et d'identité."
      }
    },
    {
      "id": "bdbfddae-7423-452d-a027-383ff915f300",
      "label": "Sommeil",
      "category": "Santé",
      "properties": {
        "prop_1": "Le sommeil est vital pour la santé. Il permet au corps de récupérer de la fatigue, de réparer les cellules et de renforcer le système immunitaire."
      }
    },
    {
      "id": "7a355f04-b9b9-469e-ba49-95007f246a94",
      "label": "Gestion du stress",
      "category": "Santé",
      "properties": {
        "prop_1": "La gestion du stress regroupe l'ensemble des techniques et méthodes utilisées pour calmer le corps et l'esprit."
      }
    },
    {
      "id": "c921a310-4aff-43a7-9c66-2eb63e7fe084",
      "label": "Equilibre mental",
      "category": "Santé mentale",
      "properties": {
        "Etat de stabilité intérieure qui nous permet de": "",
        "prop_2": "Gérer le stress,",
        "prop_3": "S'adapter aux changements",
        "prop_4": "Vivre en harmonie avec soi-même et les autres."
      }
    },
    {
      "id": "ae49e1d3-398c-41b0-a76e-a7b3b443e1b4",
      "label": "Psychologique",
      "category": "Santé mentale",
      "properties": {
        "prop_1": "Qualifie tout ce qui touche à la vie intérieure, à l'esprit, aux émotions, aux  pensées et à la façon dont on agit ou réagit face au monde"
      }
    },
    {
      "id": "cf5b5a83-4022-47d6-be2d-7a8dbab7dca7",
      "label": "Emotionnel",
      "category": "Santé mentale",
      "properties": {
        "prop_1": "Capacité à ressentir, exprimer et gérer des  émotions."
      }
    },
    {
      "id": "e05f6d3d-593e-44c9-b1ab-994e1fd6ce1a",
      "label": "Anatomique",
      "category": "Santé",
      "properties": {
        "prop_1": "Qualifie tout ce qui a rapport à la structure physique, à la forme des organes et à l'agencement corporel."
      }
    },
    {
      "id": "8d9754f3-9909-4bf8-af72-b73699f326d9",
      "label": "Physique",
      "category": "Santé",
      "properties": {
        "prop_1": "Une faiblesse physique est une perte de force musculaire ou un manque d'énergie qui empêche le corps de bouger ou d'agir normalement malgré l'effort."
      }
    },
    {
      "id": "45ccf7b3-bd4c-4291-89e9-67204171cce8",
      "label": "Choix",
      "category": "Choix",
      "properties": {
        "prop_1": "Choisir est l'action de décider entre plusieurs options en écartant les autres. Il désigne aussi bien le moment de la décision que l'éventail des possibilités disponibles."
      }
    },
    {
      "id": "02e6b496-b6ca-4b82-af1e-b82971c279d0",
      "label": "Action",
      "category": "Action",
      "properties": {
        "prop_1": "Une action désigne d'abord le fait d'agir, c'est-à-dire de manifester sa volonté pour transformer le réel ou répondre à une situation."
      }
    },
    {
      "id": "c7d18477-9e53-47a4-9451-c096df9413aa",
      "label": "Jugement",
      "category": "Pensées",
      "properties": {}
    },
    {
      "id": "a9973576-7088-4495-8a55-cf093e8f3683",
      "label": "Un repère temporel",
      "category": "Date",
      "properties": {}
    },
    {
      "id": "ac9aa069-69be-4dd8-a012-45ab5f359ea9",
      "label": "Echéance",
      "category": "Date",
      "properties": {}
    },
    {
      "id": "f42826df-97cf-4101-a762-7ad40f8ea5b0",
      "label": "Analyser le passé",
      "category": "Evénement",
      "properties": {
        "prop_1": "Examiner son histoire personnelle pour comprendre ses réactions actuelles",
        "prop_2": "Identifier des schémas de comportement répétés"
      }
    },
    {
      "id": "4d3dcd78-a2f2-4f2a-a13f-ebf54f757d67",
      "label": "Evaluer le présent",
      "category": "Situation",
      "properties": {}
    },
    {
      "id": "6f586829-8c15-4a1c-9e2e-67a9ac4b6bab",
      "label": "Planifier l'avenir",
      "category": "Projets",
      "properties": {
        "prop_1": "Faire une projection de soi dans l'avenir",
        "prop_2": "Anticiper le futur en organisant ses actions"
      }
    },
    {
      "id": "19bfebfe-36f3-48ee-8347-09bd1f9d7a9a",
      "label": "Objectif",
      "category": "Projets",
      "properties": {
        "prop_1": "Un objectif est un but précis, une cible ou un résultat que l'on vise et qui guide nos actions, motive nos efforts et oriente nos choix au quotidien"
      }
    },
    {
      "id": "e7718951-1341-4e57-aaa6-e78e9cbd1feb",
      "label": "Un savoir",
      "category": "Compétence",
      "properties": {
        "prop_1": "Ensemble de connaissances théoriques, d'informations et de concepts acquis par l'étude, l'apprentissage ou l'expérience."
      }
    },
    {
      "id": "491d0697-34d8-42dc-83dd-1dfe12e89963",
      "label": "Un savoir-faire",
      "category": "Compétence",
      "properties": {
        "prop_1": "Le savoir-faire désigne la capacité à appliquer de manière pratique et concrète des connaissances théoriques."
      }
    },
    {
      "id": "3ee5f568-8604-47f8-b47e-2de9d97c52be",
      "label": "Le savoir-être",
      "category": "Compétence",
      "properties": {
        "prop_1": "Le savoir-être désigne l'ensemble des qualités personnelles, des comportements et des habiletés sociales d'un individu.",
        "prop_2": "Il définit la manière de réagir, de communiquer et de s'adapter face aux autres et à son environnement."
      }
    },
    {
      "id": "f9e5a165-622e-4ae4-942a-ac910f98662d",
      "label": "Familiale",
      "category": "Contacts",
      "properties": {}
    },
    {
      "id": "144fc3c4-c5ea-4948-87f2-f88e1e5a83ad",
      "label": "Professionnelle",
      "category": "Contacts",
      "properties": {}
    },
    {
      "id": "f8ebd664-6c88-440d-b693-dadbf8196fe7",
      "label": "Amoureuse",
      "category": "Contacts",
      "properties": {}
    },
    {
      "id": "c0b2e4f9-f5bc-4db8-9646-18c57aba484c",
      "label": "Amicale",
      "category": "Contacts",
      "properties": {}
    },
    {
      "id": "e2a6dcdb-2d86-4f17-8297-528960a6e36a",
      "label": "Platonique",
      "category": "Contacts",
      "properties": {}
    },
    {
      "id": "b6795809-b46d-407b-9cc1-fe37136d9ff9",
      "label": "Occasionnelle",
      "category": "Contacts",
      "properties": {}
    },
    {
      "id": "bfe0ab86-9cfc-4dc0-a1a7-516d20b99dd3",
      "label": "Corps",
      "category": "Santé",
      "properties": {
        "prop_1": "Enveloppe matérielle par laquelle chacun fait l'expérience du monde."
      }
    },
    {
      "id": "a5eb1a39-bbda-49c2-b4e4-2fd1c09ddf8a",
      "label": "Esprit",
      "category": "Santé mentale",
      "properties": {
        "prop_1": "Ensemble des facultés mentales, conscientes et inconscientes, qui permettent de penser, de ressentir, de se souvenir et de décider."
      }
    },
    {
      "id": "5e8cc6c1-4c99-40ef-aba5-82bcc1c5d258",
      "label": "Loisir",
      "category": "Choix",
      "properties": {}
    },
    {
      "id": "d9e286a5-6ad9-4267-bff1-9807ec769255",
      "label": "Morale",
      "category": "Faiblesses",
      "properties": {
        "prop_1": "Une faiblesse morale chez un individu désigne un manque de fermeté face aux tentations ou aux épreuves, le conduisant à trahir ses propres valeurs ou à céder à la facilité."
      }
    },
    {
      "id": "0289a7eb-91df-4c07-87bb-4338c85bd309",
      "label": "Matérielle",
      "category": "Faiblesses",
      "properties": {
        "prop_1": "Une faiblesse matérielle désigne une situation de vulnérabilité concrète liée à ses ressources financières, à ses biens ou à son environnement physique."
      }
    },
    {
      "id": "550d5bfd-45c4-4197-b684-ddfb3238a7e2",
      "label": "Aidante",
      "category": "Croyances",
      "properties": {
        "prop_1": "Une croyance aidante donne de l'élan et incite à agir."
      }
    },
    {
      "id": "6c8566fe-8388-4aa7-8f47-c589daa16f85",
      "label": "Limitante",
      "category": "Croyances",
      "properties": {
        "prop_1": "Une croyance limitante empêche l'action"
      }
    },
    {
      "id": "d912c5ea-4851-49d9-bebe-6df023e9aa5c",
      "label": "Personnalité",
      "category": "Personnalité",
      "properties": {
        "La personnalité est une structure psychologique profonde qui": "",
        "prop_2": "Influence nos réactions face au monde, Guide notre adaptation au quotidien  Nous distingue de tous les autres"
      }
    },
    {
      "id": "7db15394-bd24-451f-9d94-a05a884d0061",
      "label": "Un gain futur",
      "category": "Finances",
      "properties": {
        "prop_1": "Augmentation attendue de ses ressources financières, de ses revenus ou de son patrimoine à venir."
      }
    },
    {
      "id": "274f0def-f8ef-489c-ba5a-97eb4bfe956b",
      "label": "Améliorer sa vie",
      "category": "Projets",
      "properties": {
        "prop_1": "Consiste à chercher un plus grand équilibre et un meilleur bien-être au quotidien.",
        "prop_2": "Cela passe par l'alignement entre ses actions et ses valeurs profondes, le soin de la santé physique et mentale, ainsi que la qualité des relations avec les autres."
      }
    },
    {
      "id": "619d352a-2481-4133-9e11-1533fe1de836",
      "label": "Augmenter son capital",
      "category": "Finances",
      "properties": {
        "prop_1": "C'est accroître la valeur de ce que l'on possède. (patrimoine personnel)"
      }
    }
  ],
  "relationships": [
    {
      "id": "41c6ec10-9b9b-41c1-a8b8-fe87bd7aaf8d",
      "type": "PEUT_ETRE",
      "source": "91610bca-fd4e-409e-bd8e-1b643fddefd8",
      "target": "12439f27-0b11-4e0a-9e92-e5ae62569a85",
      "properties": {}
    },
    {
      "id": "e323ed5d-af08-404e-a229-6f1978187a24",
      "type": "PEUT_ETRE",
      "source": "91610bca-fd4e-409e-bd8e-1b643fddefd8",
      "target": "5852e966-a1f8-4f90-8c26-b20830656c9a",
      "properties": {}
    },
    {
      "id": "f8bd351c-98b7-42ac-8e59-e0c1d08c2ac1",
      "type": "PEUT_ETRE",
      "source": "91610bca-fd4e-409e-bd8e-1b643fddefd8",
      "target": "76e69046-bd78-4108-802b-193a5e6003be",
      "properties": {}
    },
    {
      "id": "d908b749-b602-4dd0-a5e6-76d8912ff5e9",
      "type": "PEUT_ETRE",
      "source": "5aa00b76-a214-4f89-bc41-6950e10c9f95",
      "target": "d77a5f46-4717-470f-9ec1-b5090683212a",
      "properties": {}
    },
    {
      "id": "20039070-8aac-458b-90dd-bd95342989a6",
      "type": "PEUT_ETRE",
      "source": "5aa00b76-a214-4f89-bc41-6950e10c9f95",
      "target": "3e584dde-8d94-45d5-a3d7-ef57341ecff4",
      "properties": {}
    },
    {
      "id": "51eca755-96b7-4445-8a0f-7c5cb605ef8f",
      "type": "PEUT_ETRE",
      "source": "5aa00b76-a214-4f89-bc41-6950e10c9f95",
      "target": "031e1b7d-0201-4d69-9264-a69c75963c3d",
      "properties": {}
    },
    {
      "id": "c5fa9f53-e60a-4215-b532-4fabbcaff78e",
      "type": "PROVOQUE",
      "source": "5aa00b76-a214-4f89-bc41-6950e10c9f95",
      "target": "fb0319cc-d629-4abc-be95-1de5e67a143e",
      "properties": {
        "prop_1": "En faisant basculer d'un état calme ou stable vers une dynamique active"
      }
    },
    {
      "id": "b321676d-8943-4eab-8a04-819ba98cfc01",
      "type": "COMPREND",
      "source": "eab41c29-c9f0-4c24-9e28-706707c1d0cb",
      "target": "a79cd432-56e9-489b-8cc4-59d5ff3885ce",
      "properties": {}
    },
    {
      "id": "4c4e8a47-7ddf-45bc-8604-0da7fdc63357",
      "type": "COMPREND",
      "source": "eab41c29-c9f0-4c24-9e28-706707c1d0cb",
      "target": "642f616a-5373-45c0-94d3-fe87ecd135a2",
      "properties": {}
    },
    {
      "id": "a553925a-c7a8-4174-a84b-01ffc046824a",
      "type": "COMPREND",
      "source": "eab41c29-c9f0-4c24-9e28-706707c1d0cb",
      "target": "385469e7-87a1-43c3-bcee-e2970a944c8c",
      "properties": {}
    },
    {
      "id": "17572444-cba8-4df3-b284-69d3f8c05dec",
      "type": "COMPREND",
      "source": "eab41c29-c9f0-4c24-9e28-706707c1d0cb",
      "target": "6f38277c-18a9-4468-be32-1985be6d182f",
      "properties": {}
    },
    {
      "id": "58a0a81e-c27f-4c8f-b459-2cc652bcbb09",
      "type": "LIEE_A",
      "source": "3f69f86e-5403-4912-a67d-c386df29cde0",
      "target": "3daacd6f-f9ef-4f05-97c8-8b760a5c4df9",
      "properties": {}
    },
    {
      "id": "3e59c6fc-ed0d-4ed5-81b0-3f26213b3a95",
      "type": "LIEE_A",
      "source": "3f69f86e-5403-4912-a67d-c386df29cde0",
      "target": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "properties": {
        "prop_1": "Physique"
      }
    },
    {
      "id": "5e634b9e-6b38-442c-862d-07c267a38698",
      "type": "LIEE_AU",
      "source": "3f69f86e-5403-4912-a67d-c386df29cde0",
      "target": "bdbfddae-7423-452d-a027-383ff915f300",
      "properties": {}
    },
    {
      "id": "52832a61-d307-4a70-8d6e-c9df900c7e7a",
      "type": "LIEE_A",
      "source": "3f69f86e-5403-4912-a67d-c386df29cde0",
      "target": "7a355f04-b9b9-469e-ba49-95007f246a94",
      "properties": {}
    },
    {
      "id": "1434d9ce-396d-44fd-a8e6-814b02b94220",
      "type": "LIEE_A",
      "source": "3f69f86e-5403-4912-a67d-c386df29cde0",
      "target": "c921a310-4aff-43a7-9c66-2eb63e7fe084",
      "properties": {}
    },
    {
      "id": "c1fbf624-a74c-4e72-a5d7-c0fca596838a",
      "type": "PEUT_ETRE",
      "source": "86814bda-327e-492b-8737-dbf2c6bc1e8c",
      "target": "ae49e1d3-398c-41b0-a76e-a7b3b443e1b4",
      "properties": {}
    },
    {
      "id": "b6e9d502-ede5-45ed-882c-190a4a395f24",
      "type": "PEUT_ETRE",
      "source": "86814bda-327e-492b-8737-dbf2c6bc1e8c",
      "target": "cf5b5a83-4022-47d6-be2d-7a8dbab7dca7",
      "properties": {}
    },
    {
      "id": "93850d2e-b285-488f-9d04-e02c4e806da5",
      "type": "PEUT_ETRE",
      "source": "86814bda-327e-492b-8737-dbf2c6bc1e8c",
      "target": "e05f6d3d-593e-44c9-b1ab-994e1fd6ce1a",
      "properties": {}
    },
    {
      "id": "bdcea37e-145b-4f8d-affd-71dd11c2755f",
      "type": "PEUT_ETRE",
      "source": "86814bda-327e-492b-8737-dbf2c6bc1e8c",
      "target": "8d9754f3-9909-4bf8-af72-b73699f326d9",
      "properties": {}
    },
    {
      "id": "e1a0f397-51f3-4da9-b6a7-53e26882f508",
      "type": "GUIDE",
      "source": "cbd7d8d8-6bc5-4c94-becd-ccf174516d64",
      "target": "45ccf7b3-bd4c-4291-89e9-67204171cce8",
      "properties": {}
    },
    {
      "id": "93bacfd8-a4a9-4cfe-ad0c-d22194d4c770",
      "type": "GUIDE",
      "source": "cbd7d8d8-6bc5-4c94-becd-ccf174516d64",
      "target": "02e6b496-b6ca-4b82-af1e-b82971c279d0",
      "properties": {}
    },
    {
      "id": "0c3c2ba6-3892-44ef-ad21-310790e6df77",
      "type": "GUIDE",
      "source": "cbd7d8d8-6bc5-4c94-becd-ccf174516d64",
      "target": "c7d18477-9e53-47a4-9451-c096df9413aa",
      "properties": {}
    },
    {
      "id": "71a53c05-85fd-4d77-9ab0-b1ba368378bf",
      "type": "PEUT_ETRE",
      "source": "0b53a7d1-55f3-4d16-9531-d61bf8719e0f",
      "target": "a9973576-7088-4495-8a55-cf093e8f3683",
      "properties": {}
    },
    {
      "id": "c69475cd-1314-4158-887e-51090df9d7aa",
      "type": "PEUT_ETRE",
      "source": "0b53a7d1-55f3-4d16-9531-d61bf8719e0f",
      "target": "ac9aa069-69be-4dd8-a012-45ab5f359ea9",
      "properties": {}
    },
    {
      "id": "bf0beae3-b002-42d7-9c6e-07839c5a80d7",
      "type": "PERMET",
      "source": "a9973576-7088-4495-8a55-cf093e8f3683",
      "target": "f42826df-97cf-4101-a762-7ad40f8ea5b0",
      "properties": {}
    },
    {
      "id": "d3c82574-c8d2-4585-b658-278cbdd15305",
      "type": "PERMET",
      "source": "a9973576-7088-4495-8a55-cf093e8f3683",
      "target": "4d3dcd78-a2f2-4f2a-a13f-ebf54f757d67",
      "properties": {}
    },
    {
      "id": "fa6c4a82-a301-4095-9734-2aa92115b3f9",
      "type": "PERMET",
      "source": "ac9aa069-69be-4dd8-a012-45ab5f359ea9",
      "target": "6f586829-8c15-4a1c-9e2e-67a9ac4b6bab",
      "properties": {}
    },
    {
      "id": "3371c577-271d-4b67-a092-84ce444af6dc",
      "type": "A_UN",
      "source": "86e68a3c-e412-4ca7-98bf-afaabae370ac",
      "target": "19bfebfe-36f3-48ee-8347-09bd1f9d7a9a",
      "properties": {}
    },
    {
      "id": "fa77335c-547e-4c1b-a63f-bb247a3791f1",
      "type": "LIEE_A",
      "source": "d0eb9ae0-6de7-42cc-b6ee-ea4afb8db610",
      "target": "19bfebfe-36f3-48ee-8347-09bd1f9d7a9a",
      "properties": {}
    },
    {
      "id": "8584191a-8f3a-48c6-b17c-ad879a4f73fc",
      "type": "REQUIERT",
      "source": "88361550-1938-4bcc-b589-0de04160c1d8",
      "target": "e7718951-1341-4e57-aaa6-e78e9cbd1feb",
      "properties": {}
    },
    {
      "id": "c28575b6-e446-45d9-ae3c-613d08dab7b8",
      "type": "REQUIERT",
      "source": "88361550-1938-4bcc-b589-0de04160c1d8",
      "target": "491d0697-34d8-42dc-83dd-1dfe12e89963",
      "properties": {}
    },
    {
      "id": "5654a5d3-dfaa-4278-95d9-586848096800",
      "type": "REQUIERT",
      "source": "88361550-1938-4bcc-b589-0de04160c1d8",
      "target": "3ee5f568-8604-47f8-b47e-2de9d97c52be",
      "properties": {}
    },
    {
      "id": "b395b293-a761-41e7-bca0-36140dd24847",
      "type": "S'EXPRIMENT_DANS",
      "source": "88361550-1938-4bcc-b589-0de04160c1d8",
      "target": "031e1b7d-0201-4d69-9264-a69c75963c3d",
      "properties": {}
    },
    {
      "id": "28d6720d-709e-4fe7-a683-62990b5c3a75",
      "type": "DE_TYPE",
      "source": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "target": "f9e5a165-622e-4ae4-942a-ac910f98662d",
      "properties": {}
    },
    {
      "id": "f7c9adeb-9f7f-43e3-9487-55a63c5633c2",
      "type": "DE_TYPE",
      "source": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "target": "144fc3c4-c5ea-4948-87f2-f88e1e5a83ad",
      "properties": {}
    },
    {
      "id": "41ca391d-a9b9-4856-8954-7091f92d5230",
      "type": "DE_TYPE",
      "source": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "target": "f8ebd664-6c88-440d-b693-dadbf8196fe7",
      "properties": {}
    },
    {
      "id": "2e3a3349-6cff-4a56-ba94-c3ae1176ea81",
      "type": "DE_TYPE",
      "source": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "target": "c0b2e4f9-f5bc-4db8-9646-18c57aba484c",
      "properties": {}
    },
    {
      "id": "6edaff33-af90-46c9-a7e6-cf46f8adfe9a",
      "type": "DE_TYPE",
      "source": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "target": "e2a6dcdb-2d86-4f17-8297-528960a6e36a",
      "properties": {}
    },
    {
      "id": "a05fed0c-caf5-4e03-b1da-b34071f999a6",
      "type": "DE_TYPE",
      "source": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "target": "b6795809-b46d-407b-9cc1-fe37136d9ff9",
      "properties": {}
    },
    {
      "id": "327838d5-fcde-4498-ace7-61d34b7cf6c9",
      "type": "SOURCE_DE",
      "source": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "target": "872ce386-2391-46ef-a647-4adf9e34c63b",
      "properties": {}
    },
    {
      "id": "ad9027f1-432c-4dba-a7a2-dfdeaa5f4cad",
      "type": "DE_TYPE",
      "source": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "target": "144fc3c4-c5ea-4948-87f2-f88e1e5a83ad",
      "properties": {
        "prop_1": "Activité physique ou mentale utile à tous."
      }
    },
    {
      "id": "1ee89993-debc-42bb-9b65-1771991aca3e",
      "type": "RELEVE_DU",
      "source": "d77d76ae-fb5c-4250-b711-b0c022f44936",
      "target": "bfe0ab86-9cfc-4dc0-a1a7-516d20b99dd3",
      "properties": {}
    },
    {
      "id": "188990a1-a3f7-4550-985c-3fa1bfdf8f00",
      "type": "RELEVE_DU",
      "source": "d77d76ae-fb5c-4250-b711-b0c022f44936",
      "target": "a5eb1a39-bbda-49c2-b4e4-2fd1c09ddf8a",
      "properties": {
        "prop_1": "Calme"
      }
    },
    {
      "id": "805087b2-0ae6-42d5-84b9-e8cb9a832d46",
      "type": "IMPLIQUE",
      "source": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "target": "bfe0ab86-9cfc-4dc0-a1a7-516d20b99dd3",
      "properties": {}
    },
    {
      "id": "ad560fc8-6a44-424f-94c8-a1096fbf0997",
      "type": "IMPLIQUE",
      "source": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "target": "a5eb1a39-bbda-49c2-b4e4-2fd1c09ddf8a",
      "properties": {}
    },
    {
      "id": "39f2325c-d098-4c83-8895-96aa9551d0dd",
      "type": "DE_TYPE",
      "source": "195e371b-709b-43c4-a9cf-b5e808a6dd52",
      "target": "5e8cc6c1-4c99-40ef-aba5-82bcc1c5d258",
      "properties": {}
    },
    {
      "id": "ea697c7c-0375-4cef-8ead-9ccac6531228",
      "type": "PEUT_ETRE",
      "source": "d2719726-be28-4701-8b6d-c809dc463f4c",
      "target": "8d9754f3-9909-4bf8-af72-b73699f326d9",
      "properties": {
        "prop_1": "Manque de force",
        "prop_2": "Manque de 'volonté'"
      }
    },
    {
      "id": "1523a5a4-789f-4278-8361-bd40ba4b25a8",
      "type": "PEUT_ETRE",
      "source": "d2719726-be28-4701-8b6d-c809dc463f4c",
      "target": "d9e286a5-6ad9-4267-bff1-9807ec769255",
      "properties": {
        "prop_1": "Résistance"
      }
    },
    {
      "id": "b8f4afab-29d7-45bc-aad9-f78fa62443c8",
      "type": "PEUT_ETRE",
      "source": "d2719726-be28-4701-8b6d-c809dc463f4c",
      "target": "0289a7eb-91df-4c07-87bb-4338c85bd309",
      "properties": {
        "prop_1": "Manque de moyens"
      }
    },
    {
      "id": "6b82dcfa-a67b-4c06-9f17-466e34a7f86c",
      "type": "LIEE_A",
      "source": "d9e286a5-6ad9-4267-bff1-9807ec769255",
      "target": "885b76ea-0b0f-4f68-b8d1-dcb69090bf4f",
      "properties": {}
    },
    {
      "id": "85fb716c-9ee0-4c9d-b00b-fec9c2249009",
      "type": "SOUTIENT",
      "source": "885b76ea-0b0f-4f68-b8d1-dcb69090bf4f",
      "target": "cbd7d8d8-6bc5-4c94-becd-ccf174516d64",
      "properties": {}
    },
    {
      "id": "5c43a8e9-1c10-46f8-be22-139c94bf01ab",
      "type": "PEUT_ETRE",
      "source": "885b76ea-0b0f-4f68-b8d1-dcb69090bf4f",
      "target": "550d5bfd-45c4-4197-b684-ddfb3238a7e2",
      "properties": {}
    },
    {
      "id": "ac790855-726f-4e2e-b095-a4a07b0d1ca6",
      "type": "PEUT_ETRE",
      "source": "885b76ea-0b0f-4f68-b8d1-dcb69090bf4f",
      "target": "6c8566fe-8388-4aa7-8f47-c589daa16f85",
      "properties": {}
    },
    {
      "id": "320c6afa-2afd-4f4b-9965-fb23e4f49c68",
      "type": "POUSSE_A",
      "source": "550d5bfd-45c4-4197-b684-ddfb3238a7e2",
      "target": "02e6b496-b6ca-4b82-af1e-b82971c279d0",
      "properties": {}
    },
    {
      "id": "ad79c1a6-31c3-4973-a689-00f96c51d3b3",
      "type": "REGULE",
      "source": "bdbfddae-7423-452d-a027-383ff915f300",
      "target": "cf5b5a83-4022-47d6-be2d-7a8dbab7dca7",
      "properties": {}
    },
    {
      "id": "b0147562-6a95-4e70-a10c-a50e90092704",
      "type": "POUR",
      "source": "7a355f04-b9b9-469e-ba49-95007f246a94",
      "target": "a5eb1a39-bbda-49c2-b4e4-2fd1c09ddf8a",
      "properties": {
        "prop_1": "Calmer"
      }
    },
    {
      "id": "a92e5db0-8208-4703-b49b-763b7c58a6f9",
      "type": "POUR",
      "source": "7a355f04-b9b9-469e-ba49-95007f246a94",
      "target": "bfe0ab86-9cfc-4dc0-a1a7-516d20b99dd3",
      "properties": {
        "prop_1": "Réguler"
      }
    },
    {
      "id": "8df44ea1-6208-4f6d-a849-b42f7b1208dd",
      "type": "COMPOSANTE_DE",
      "source": "91610bca-fd4e-409e-bd8e-1b643fddefd8",
      "target": "d912c5ea-4851-49d9-bebe-6df023e9aa5c",
      "properties": {}
    },
    {
      "id": "674d0ff9-b35c-4054-bab4-ac0b1118fb3f",
      "type": "A_POUR_BUT",
      "source": "385469e7-87a1-43c3-bcee-e2970a944c8c",
      "target": "7db15394-bd24-451f-9d94-a05a884d0061",
      "properties": {}
    },
    {
      "id": "e7e5d653-bde7-45c0-846b-094d2770cac0",
      "type": "A_POUR_BUT",
      "source": "385469e7-87a1-43c3-bcee-e2970a944c8c",
      "target": "274f0def-f8ef-489c-ba5a-97eb4bfe956b",
      "properties": {}
    },
    {
      "id": "0c6b6aa9-7a68-49db-8e3b-2e66bbfac45f",
      "type": "A_POUR_BUT",
      "source": "385469e7-87a1-43c3-bcee-e2970a944c8c",
      "target": "619d352a-2481-4133-9e11-1533fe1de836",
      "properties": {}
    }
  ]
},

{
  "id": "structure-patrimoniale",
  "title": "Exemple de Structure patrimoniale",
  "category": "Finances et Patrimoine",
  "description": "Qui détient quoi, via quelle structure, au bénéfice de qui",
  "longDescription": "Cas fictif d'un dirigeant de PME : holding animatrice, société d'exploitation, SCI immobilière, démembrement issu d'une donation-partage, régime matrimonial et assurance-vie. L'exemple illustre ce qu'un tableau ne montre pas : la chaîne de détention et la nature exacte de chaque lien.",
  "nodes": [
    {
      "id": "p_jean",
      "label": "Jean D.",
      "category": "Personne",
      "size": 26,
      "properties": {
        "Rôle": "Dirigeant fondateur",
        "Né en": "1966",
        "Régime": "Séparation de biens"
      }
    },
    {
      "id": "p_marie",
      "label": "Marie D.",
      "category": "Personne",
      "size": 22,
      "properties": {
        "Rôle": "Conjointe",
        "Née en": "1969"
      }
    },
    {
      "id": "p_camille",
      "label": "Camille D.",
      "category": "Personne",
      "size": 18,
      "properties": {
        "Rôle": "Enfant",
        "Née en": "1997"
      }
    },
    {
      "id": "p_thomas",
      "label": "Thomas D.",
      "category": "Personne",
      "size": 18,
      "properties": {
        "Rôle": "Enfant",
        "Né en": "2000"
      }
    },
    {
      "id": "s_holding",
      "label": "Holding Aurore (SAS)",
      "category": "Société",
      "size": 26,
      "properties": {
        "Forme": "SAS",
        "Nature": "Holding animatrice",
        "Créée en": "2012"
      }
    },
    {
      "id": "s_expl",
      "label": "Sud Composites (SAS)",
      "category": "Société",
      "size": 22,
      "properties": {
        "Forme": "SAS",
        "Activité": "Société d'exploitation",
        "Effectif": "34 salariés"
      }
    },
    {
      "id": "s_sci",
      "label": "SCI Les Tilleuls",
      "category": "Société",
      "size": 22,
      "properties": {
        "Forme": "SCI à l'IS",
        "Gérant": "Jean D.",
        "Créée en": "2015"
      }
    },
    {
      "id": "a_bureaux",
      "label": "Immeuble de bureaux",
      "category": "Actif",
      "size": 22,
      "properties": {
        "Localisation": "Bordeaux",
        "Surface": "620 m²",
        "Acquis en": "2015"
      }
    },
    {
      "id": "a_rp",
      "label": "Résidence principale",
      "category": "Actif",
      "size": 20,
      "properties": {
        "Localisation": "Mérignac",
        "Acquise en": "2004"
      }
    },
    {
      "id": "a_locatif",
      "label": "Appartement locatif",
      "category": "Actif",
      "size": 18,
      "properties": {
        "Localisation": "Lyon 6e",
        "Origine": "Succession maternelle",
        "Statut": "Bien propre"
      }
    },
    {
      "id": "c_mariage",
      "label": "Contrat de mariage",
      "category": "Contrat",
      "size": 18,
      "properties": {
        "Régime": "Séparation de biens",
        "Date": "1998",
        "Notaire": "Étude anonymisée"
      }
    },
    {
      "id": "c_av",
      "label": "Assurance-vie",
      "category": "Contrat",
      "size": 20,
      "properties": {
        "Ouverte en": "2003",
        "Clause bénéficiaire": "Démembrée",
        "Régime": "Hors succession"
      }
    },
    {
      "id": "c_dutreil",
      "label": "Pacte Dutreil",
      "category": "Contrat",
      "size": 20,
      "properties": {
        "Engagement": "Collectif",
        "Signé en": "2021",
        "Échéance": "2027",
        "Effet": "Abattement 75 %"
      }
    },
    {
      "id": "c_donation",
      "label": "Donation-partage 2019",
      "category": "Contrat",
      "size": 20,
      "properties": {
        "Objet": "15 % des titres de la holding",
        "Modalité": "Réserve d'usufruit"
      }
    },
    {
      "id": "c_testament",
      "label": "Testament olographe",
      "category": "Contrat",
      "size": 18,
      "properties": {
        "Rédigé en": "2022",
        "Dépôt": "FCDDV",
        "Objet": "Quotité disponible"
      }
    },
    {
      "id": "d_emprunt",
      "label": "Emprunt bancaire",
      "category": "Dette",
      "size": 20,
      "properties": {
        "Objet": "Acquisition de l'immeuble",
        "Échéance": "2030",
        "Garantie": "Hypothèque de 1er rang"
      }
    },
    {
      "id": "d_cca",
      "label": "Compte courant d'associé",
      "category": "Dette",
      "size": 18,
      "properties": {
        "Nature": "Créance sur la holding",
        "Remboursable": "À vue"
      }
    }
  ],
  "relationships": [
    {
      "id": "r01",
      "type": "DÉTIENT",
      "source": "p_jean",
      "target": "s_holding",
      "properties": {
        "Quote-part": "60 %",
        "Nature": "Pleine propriété"
      }
    },
    {
      "id": "r02",
      "type": "DÉTIENT",
      "source": "p_marie",
      "target": "s_holding",
      "properties": {
        "Quote-part": "25 %",
        "Nature": "Pleine propriété"
      }
    },
    {
      "id": "r03",
      "type": "NUE_PROPRIÉTÉ",
      "source": "p_camille",
      "target": "s_holding",
      "properties": {
        "Quote-part": "7,5 %",
        "Origine": "Donation-partage 2019"
      }
    },
    {
      "id": "r04",
      "type": "NUE_PROPRIÉTÉ",
      "source": "p_thomas",
      "target": "s_holding",
      "properties": {
        "Quote-part": "7,5 %",
        "Origine": "Donation-partage 2019"
      }
    },
    {
      "id": "r05",
      "type": "USUFRUIT",
      "source": "p_jean",
      "target": "s_holding",
      "properties": {
        "Quote-part": "15 %",
        "Durée": "Viager"
      }
    },
    {
      "id": "r06",
      "type": "DÉTIENT",
      "source": "s_holding",
      "target": "s_expl",
      "properties": {
        "Quote-part": "100 %"
      }
    },
    {
      "id": "r07",
      "type": "DÉTIENT",
      "source": "s_holding",
      "target": "s_sci",
      "properties": {
        "Quote-part": "99 %"
      }
    },
    {
      "id": "r08",
      "type": "DÉTIENT",
      "source": "p_jean",
      "target": "s_sci",
      "properties": {
        "Quote-part": "1 %",
        "Fonction": "Gérant"
      }
    },
    {
      "id": "r09",
      "type": "PROPRIÉTAIRE_DE",
      "source": "s_sci",
      "target": "a_bureaux",
      "properties": {
        "Nature": "Pleine propriété"
      }
    },
    {
      "id": "r10",
      "type": "LOCATAIRE_DE",
      "source": "s_expl",
      "target": "a_bureaux",
      "properties": {
        "Bail": "Commercial 3/6/9",
        "Loyer": "Intragroupe"
      }
    },
    {
      "id": "r11",
      "type": "A_SOUSCRIT",
      "source": "s_sci",
      "target": "d_emprunt",
      "properties": {
        "Capital restant dû": "410 k€"
      }
    },
    {
      "id": "r12",
      "type": "GARANTI_PAR",
      "source": "d_emprunt",
      "target": "a_bureaux",
      "properties": {
        "Sûreté": "Hypothèque de 1er rang"
      }
    },
    {
      "id": "r13",
      "type": "TITULAIRE_DE",
      "source": "p_jean",
      "target": "d_cca",
      "properties": {
        "Montant": "180 k€"
      }
    },
    {
      "id": "r14",
      "type": "CRÉANCE_SUR",
      "source": "d_cca",
      "target": "s_holding",
      "properties": {}
    },
    {
      "id": "r15",
      "type": "INDIVISION",
      "source": "p_jean",
      "target": "a_rp",
      "properties": {
        "Quote-part": "50 %"
      }
    },
    {
      "id": "r16",
      "type": "INDIVISION",
      "source": "p_marie",
      "target": "a_rp",
      "properties": {
        "Quote-part": "50 %"
      }
    },
    {
      "id": "r17",
      "type": "PROPRIÉTAIRE_DE",
      "source": "p_marie",
      "target": "a_locatif",
      "properties": {
        "Nature": "Bien propre"
      }
    },
    {
      "id": "r18",
      "type": "SOUSCRIPTEUR",
      "source": "p_jean",
      "target": "c_av",
      "properties": {
        "Encours": "295 k€"
      }
    },
    {
      "id": "r19",
      "type": "BÉNÉFICIAIRE",
      "source": "p_marie",
      "target": "c_av",
      "properties": {
        "Rang": "Premier",
        "Nature": "Usufruit"
      }
    },
    {
      "id": "r20",
      "type": "BÉNÉFICIAIRE",
      "source": "p_camille",
      "target": "c_av",
      "properties": {
        "Rang": "Second",
        "Nature": "Nue-propriété"
      }
    },
    {
      "id": "r21",
      "type": "BÉNÉFICIAIRE",
      "source": "p_thomas",
      "target": "c_av",
      "properties": {
        "Rang": "Second",
        "Nature": "Nue-propriété"
      }
    },
    {
      "id": "r22",
      "type": "SOUMIS_AU",
      "source": "p_jean",
      "target": "c_mariage",
      "properties": {}
    },
    {
      "id": "r23",
      "type": "SOUMIS_AU",
      "source": "p_marie",
      "target": "c_mariage",
      "properties": {}
    },
    {
      "id": "r24",
      "type": "PORTE_SUR",
      "source": "c_dutreil",
      "target": "s_holding",
      "properties": {
        "Titres engagés": "34 %"
      }
    },
    {
      "id": "r25",
      "type": "SIGNATAIRE",
      "source": "p_jean",
      "target": "c_dutreil",
      "properties": {
        "Qualité": "Associé signataire"
      }
    },
    {
      "id": "r26",
      "type": "ISSUE_DE",
      "source": "c_donation",
      "target": "s_holding",
      "properties": {
        "Objet": "15 % des titres"
      }
    },
    {
      "id": "r27",
      "type": "AUTEUR_DE",
      "source": "p_jean",
      "target": "c_testament",
      "properties": {}
    }
  ]
},

{
  "id": "biais-cognitifs",
  "title": "Les biais cognitifs",
  "category": "Psychologie",
  "description": "Source de nos erreurs de raisonnement. Une cartographie essentielle pour identifier nos propres'angles morts' cognitifs et améliorer notre esprit critique.",
  "longDescription": "Réalisé à partir du Codex des Biais Cognitifs de John Manoogian III, ce graphe organise les raccourcis mentaux de notre cerveau en quatre mécanismes fondamentaux : la surcharge d'information, le manque de sens, le besoin d'agir rapidement et la gestion de la mémoire. C'est une cartographie essentielle pour identifier nos'angles morts' cognitifs et améliorer notre esprit critique.",
  "nodes": [
    {
      "id": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "label": "Gérer l'information",
      "category": "Gestion de l'information",
      "properties": {
        "prop_1": "Le cerveau filtre la surcharge d'informations en ne retenant que ce qui attire l'attention."
      }
    },
    {
      "id": "0353572f-acb4-4bbd-9637-94200f82a203",
      "label": "Illusion de vérité par répétition",
      "category": "Filtrage",
      "properties": {
        "prop_1": "Nous nous rappelons les choses qui sont déjà  amorcées dans notre mémoire ou qui sont souvent répétées"
      }
    },
    {
      "id": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "label": "Quand l'insolite éclipse la réalité",
      "category": "Filtrage",
      "properties": {
        "prop_1": "Les choses bizarres, drôles, visuellement frappantes ou anthropomorphiques sont plus saillantes que celles qui ne le sont pas"
      }
    },
    {
      "id": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "label": "Perception du changement",
      "category": "Filtrage",
      "properties": {
        "prop_1": "On remarque lorsque quelque chose a changé"
      }
    },
    {
      "id": "1dc748db-5478-400d-aa95-199785e98217",
      "label": "Attirés par ce qui confirme nos croyances",
      "category": "Filtrage",
      "properties": {
        "prop_1": "Nous sommes attirés par les détails qui confirment nos propres croyances préexistantes"
      }
    },
    {
      "id": "45bfbeeb-2b99-4a33-9287-ad42e28f440f",
      "label": "Voir la paille, non la pourtre",
      "category": "Filtrage",
      "properties": {
        "prop_1": "Nous remarquons les failles chez les autres plus facilement que chez nous-même"
      }
    },
    {
      "id": "1970552a-548b-4504-a51c-01beb00e19c8",
      "label": "Trouver du sens",
      "category": "Interprétation",
      "properties": {
        "prop_1": "Le cerveau comble les vides et simplifie le monde pour lui donner du sens."
      }
    },
    {
      "id": "718d32be-7a70-4860-9588-f64db84a4baa",
      "label": "Trouver des motifs dans le hasard",
      "category": "Interprétation",
      "properties": {
        "prop_1": "Notre cerveau a une tendance naturelle pour chercher à donner du sens au hasard en reliant des éléments isolés pour former une image ou une logique cohérente.",
        "prop_2": "Il fabrique des récits et des schémas logiques pour structurer la réalité."
      }
    },
    {
      "id": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "label": "Combler les vides par des stéréotypes",
      "category": "Interprétation",
      "properties": {
        "prop_1": "Nous remplissons les caractéristiques manquantes à  partir de stéréotypes",
        "prop_2": "de généralités et de nos a priori"
      }
    },
    {
      "id": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "label": "On idéalise ce qu'on aime ou connaît",
      "category": "Interprétation",
      "properties": {
        "prop_1": "Nous imaginons que les personnes que nous aimons ou que les choses avec lesquelles nous sommes familiers sont meilleures que les choses et les personnes qui ne le sont pas"
      }
    },
    {
      "id": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "label": "Simplifier probabilités et nombres",
      "category": "Interprétation",
      "properties": {
        "prop_1": "Nous simplifions les probabilités et les nombres pour les rendre plus faciles et abordables à  notre pensée"
      }
    },
    {
      "id": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "label": "Croire connaître les pensées des autres",
      "category": "Interprétation",
      "properties": {
        "prop_1": "Nous pensons que nous savons ce que les autres pensent"
      }
    },
    {
      "id": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "label": "Passer à l'action",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Face à l'urgence ou à la nécessité d'agir, le cerveau prend des raccourcis décisionnels."
      }
    },
    {
      "id": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "label": "Projeter le présent sur passé/futur",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Nous projetons nos croyances et schémas de pensées actuels sur le passé et le futur"
      }
    },
    {
      "id": "95d91a65-c535-4061-8dd8-20c95f592579",
      "label": "Avoir confiance pour agir",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Pour pouvoir agir",
        "prop_2": "nous devons avoir confiance en notre capacité à  avoir un impact et sentir que ce que nous faisons est important"
      }
    },
    {
      "id": "c47cd210-ef57-461c-8d9b-f0903672ccb0",
      "label": "Privilégier l'immédiat et la proximité",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Afin de rester concentré",
        "prop_2": "nous favorisons ce qui nous est immédiat",
        "prop_3": "proche ou autour de nous"
      }
    },
    {
      "id": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "label": "Finir ce qu'on a commencé",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Pour accomplir nos tâches",
        "prop_2": "nous avons tendance à  vouloir compléter celles dans lesquelles nous avons déjà  investi du temps et de l'énergie"
      }
    },
    {
      "id": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "label": "Éviter erreurs et décisions irréversibles",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Pour éviter de faire des erreurs",
        "prop_2": "nous avons tendance à  préserver notre autonomie et notre statut de groupe et à  éviter les décisions irréversibles"
      }
    },
    {
      "id": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "label": "Préférer le simple au complexe",
      "category": "Prise de décision",
      "properties": {
        "prop_1": "Nous favorisons les options qui nous paraissent simples ou qui ont des informations plus complètes aux options plus complexes ou ambiguës"
      }
    },
    {
      "id": "69f2609d-6bd8-4f07-8a9a-ec7852826cda",
      "label": "Organiser la mémoire",
      "category": "Gestion de la mémoire",
      "properties": {
        "prop_1": "Le cerveau trie et remodèle les souvenirs pour alléger la mémoire."
      }
    },
    {
      "id": "66055844-7315-488f-b9ce-6639b03843ae",
      "label": "Stockage selon le vécu",
      "category": "Stockage",
      "properties": {
        "prop_1": "Nous stockons les souvenirs différemment selon la façon dont nous avons vécu l'expérience"
      }
    },
    {
      "id": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "label": "Réduire aux éléments-clés",
      "category": "Stockage",
      "properties": {
        "prop_1": "Nous réduisons les événements et listes à  leurs éléments-clés"
      }
    },
    {
      "id": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "label": "Modifier les souvenirs après coup",
      "category": "Stockage",
      "properties": {
        "prop_1": "Nous modifions et renforçons certains souvenirs après les faits"
      }
    },
    {
      "id": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "label": "Du spécifique au général",
      "category": "Stockage",
      "properties": {
        "prop_1": "Nous écartons les spécificités et formons des généralités"
      }
    },
    {
      "id": "15c3f7ca-8cdb-4fa9-b1b7-ba16ac8d24c9",
      "label": "Biais de disponibilité",
      "category": "Biais",
      "properties": {
        "prop_1": "Raccourci mental qui consiste à évaluer l'importance, la fréquence ou la probabilité d'un sujet en se basant uniquement sur les exemples les plus immédiats et marquants qui viennent à l'esprit. Ce mécanisme repose sur l'illusion que ce qui est facilement mémorisable ou perçu rapidement est nécessairement plus important ou plus fréquent que ce qui demande un effort de remémoration."
      }
    },
    {
      "id": "7e965bea-bdb8-4cb6-bc91-286842553f2d",
      "label": "Biais attentionnel",
      "category": "Biais",
      "properties": {
        "prop_1": "C'est la tendance à voir le monde à travers le prisme de ce qui retient notre attention au moment présent. Lorsque notre esprit est concentré sur une idée ou un sujet particulier, cela nous empêche complètement de voir les autres options ou possibilités qui s'offrent à nous."
      }
    },
    {
      "id": "3b49c1e4-4920-49af-8022-b3326d69a01f",
      "label": "Effet de vérité illusoire",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire qu'une information est vraie simplement parce qu'elle a déjà été répétée plusieurs fois, indépendamment de sa véracité objective. Plus nous entendons une déclaration, plus notre cerveau la trouve familière, et cette familiarité est confondue à tort avec de la vérité."
      }
    },
    {
      "id": "56df17cc-8c0d-4b1c-b464-b555aca00d7d",
      "label": "Effet de simple exposition",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance psychologique qui nous pousse à développer une préférence ou une familiarité positive envers quelque chose ou quelqu'un simplement à force d'y être exposé de manière répétée. Plus nous voyons ou entendons un stimulus, plus nous l'aimons ou le trouvons rassurant, souvent de manière totalement inconsciente."
      }
    },
    {
      "id": "bc000663-c8f9-43d2-928f-14b91e05283a",
      "label": "Effet de contexte",
      "category": "Biais",
      "properties": {
        "prop_1": "Biais cognitif qui influence notre perception",
        "prop_2": "notre compréhension ou notre mémorisation d'une information en fonction de l'environnement",
        "prop_3": "de la situation ou des éléments qui l'entourent. Une même donnée change radicalement de sens ou d'impact selon le décor dans lequel elle est perçue."
      }
    },
    {
      "id": "0c01e471-4ee9-49b7-ae81-1dd6f8e58b2d",
      "label": "Biais mnésique lié à  l'humeur",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance psychologique qui fait que notre état émotionnel actuel influence directement la sélection et la récupération de nos souvenirs. Lorsque nous sommes triste",
        "prop_2": "notre cerveau exhume en priorité des souvenirs sombres ou douloureux ; à l'inverse",
        "prop_3": "la joie fait resurgir des souvenirs lumineux et positifs",
        "prop_4": "agissant comme un filtre filtrant le passé selon notre météo intérieure."
      }
    },
    {
      "id": "7ebf2ae1-a3cf-438a-b81f-0a2f657805f2",
      "label": "Illusion de fréquence",
      "category": "Biais",
      "properties": {
        "prop_1": "Une fois qu'on a remarqué une chose pour la première fois, on a l'impression de la revoir partout, alors qu'elle était déjà présente avant mais ignorée. C'est aussi appelé le phénomène Baader-Meinhof."
      }
    },
    {
      "id": "566b5886-8d71-4c79-bacb-db7409de1bc1",
      "label": "Phénomène de Baader-Meinhof",
      "category": "Biais",
      "properties": {
        "prop_1": "Biais cognitif qui se manifeste lorsque vous remarquez soudainement partout un mot, un objet ou un concept que vous veniez tout juste de découvrir ou d'acheter, vous donnant l'impression étrange qu'il est devenu omniprésent du jour au lendemain."
      }
    },
    {
      "id": "e2452e29-5028-4b41-bd7a-7d777413d6ac",
      "label": "Décalage empathique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à sous-estimer l'influence que nos pulsions ou nos états émotionnels auront sur nos propres décisions futures. On juge nos comportements passés ou futurs depuis notre état émotionnel présent, très différent de celui qu'on aura au moment d'agir."
      }
    },
    {
      "id": "fdb6afe1-b8f6-4ffc-8e22-7d9ea67aa000",
      "label": "Biais d'omission",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à juger les actions nuisibles comme pires, ou moins morales, que des omissions tout aussi nuisibles. Ne pas agir semble moins condamnable que d'agir, même si le résultat est identique."
      }
    },
    {
      "id": "720469df-3e4c-4ed0-9167-1e4dc672ba5c",
      "label": "Oubli de la fréquence de base",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ignorer les statistiques générales (taux de base) au profit d'informations spécifiques ou anecdotiques concernant un cas particulier. On surpondère ainsi les détails individuels au détriment des probabilités réelles."
      }
    },
    {
      "id": "a96e2b2a-c3b6-4991-abbe-0359e2cb26e7",
      "label": "Effet de bizarrerie",
      "category": "Biais",
      "properties": {
        "prop_1": "Les informations, images ou événements inhabituels et étranges sont mieux mémorisés que les informations banales et ordinaires. Le caractère insolite agit comme un aimant pour l'attention et la mémoire."
      }
    },
    {
      "id": "b52ede92-d691-427e-946b-99ba85180f98",
      "label": "Effet d'humour",
      "category": "Biais",
      "properties": {
        "prop_1": "Les phrases ou informations amusantes sont plus facilement retenues que celles qui ne le sont pas, probablement parce qu'elles demandent un traitement cognitif plus riche et suscitent une émotion positive."
      }
    },
    {
      "id": "f1a0aebf-5120-422d-91d1-94aa7a1b1e18",
      "label": "Effet d'isolement",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à retenir plus facilement et plus longtemps un élément qui se distingue de ses voisins par une caractéristique unique (une couleur différente, une forme bizarre, une information insolite). Tout ce qui sort du lot crée une \"saillance\" visuelle ou mentale qui capte immédiatement toute notre attention."
      }
    },
    {
      "id": "dcf4bea1-b835-468b-b928-b784883c2d9b",
      "label": "Effet de supériorité de l'image",
      "category": "Biais",
      "properties": {
        "prop_1": "Les concepts appris par l'image sont mieux mémorisés et reconnus que ceux appris uniquement par des mots. Une image marquante laisse une trace mnésique plus forte qu'un texte équivalent."
      }
    },
    {
      "id": "aecbdedb-65ac-440e-9e62-64355a58c2cf",
      "label": "Effet de référence à soi",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance naturelle à retenir beaucoup plus facilement et durablement les informations que l'on relie directement à sa propre personne, à sa propre vie ou à ses expériences personnelles. Notre cerveau traite et stocke en priorité tout ce qui nous concerne intimement."
      }
    },
    {
      "id": "4ccbb52c-98f7-4604-b27f-85e9abe48adf",
      "label": "Biais de négativité",
      "category": "Biais",
      "properties": {
        "prop_1": "Les événements et informations négatifs marquent davantage l'esprit et pèsent plus lourd dans nos jugements que les événements positifs de même intensité. À poids égal, le mauvais l'emporte psychologiquement sur le bon."
      }
    },
    {
      "id": "69c57704-7937-473a-a032-5c5a9076e850",
      "label": "Ancrage",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se reposer excessivement sur la première information reçue (l'« ancre ») pour tous les jugements ultérieurs, même lorsque cette information est arbitraire ou sans rapport direct avec la décision à prendre."
      }
    },
    {
      "id": "6e8bd7be-aa0b-4c30-be34-4e8e558a1a3a",
      "label": "Conservatisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ne réviser ses croyances ou probabilités que faiblement face à de nouvelles preuves, en restant ancré sur ses estimations initiales au lieu de les mettre suffisamment à jour."
      }
    },
    {
      "id": "2e49f2a9-1663-4521-9265-6d22d8a27461",
      "label": "Effet de contraste",
      "category": "Biais",
      "properties": {
        "prop_1": "La perception d'un stimulus est modifiée par comparaison avec ce qui vient d'être perçu juste avant, plutôt qu'évaluée dans l'absolu. Un objet moyen semble petit après un grand, et grand après un petit."
      }
    },
    {
      "id": "0ee7a1e2-5173-4739-b56b-afffbb0376db",
      "label": "Biais de distinction",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir deux options comme plus différentes lorsqu'on les évalue côte à côte que lorsqu'on les évalue séparément, ce qui pousse à surestimer l'importance des différences au moment du choix."
      }
    },
    {
      "id": "8bd69e1e-a737-4d0c-baf1-fc54d8d57024",
      "label": "Effet de focus",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder trop d'importance à un seul aspect d'un événement ou d'une situation, au détriment des autres facteurs, ce qui fausse les prédictions sur le bonheur ou l'impact réel de cet événement."
      }
    },
    {
      "id": "ef012956-f53a-4782-ba19-7d48c3388ac5",
      "label": "Effet de cadrage",
      "category": "Biais",
      "properties": {
        "prop_1": "Nos décisions changent selon la façon dont une même information est présentée, par exemple en termes de gains ou de pertes, alors que les faits sous-jacents restent identiques."
      }
    },
    {
      "id": "0ecdff02-eaaa-40d4-81a9-e24750909286",
      "label": "Illusion monétaire",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à raisonner en termes de valeur nominale de l'argent plutôt qu'en termes de pouvoir d'achat réel, en ignorant l'effet de l'inflation sur la valeur des sommes en jeu."
      }
    },
    {
      "id": "cec82655-214a-4a30-9d0e-6f2cebdc567e",
      "label": "Loi de Weber-Fechner",
      "category": "Biais",
      "properties": {
        "La capacité à percevoir la différence entre deux stimuli dépend de leur intensité relative et non de leur différence absolue": "plus la quantité de départ est grande, plus le changement doit être important pour être remarqué."
      }
    },
    {
      "id": "398f8bd7-ded0-4d82-a73c-804399cf9714",
      "label": "Biais de confirmation",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à rechercher, interpréter et mémoriser en priorité les informations qui confirment nos croyances préexistantes, tout en négligeant ou minimisant celles qui les contredisent."
      }
    },
    {
      "id": "cdfa96d8-bec2-4e8c-ae19-ee73f429c6e0",
      "label": "Biais de congruence",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à tester ses hypothèses uniquement de manière directe, en cherchant des confirmations, plutôt qu'en envisageant et testant des hypothèses alternatives qui pourraient les infirmer."
      }
    },
    {
      "id": "ff3c42f0-97ed-4baf-8711-2fd2ae0e428d",
      "label": "Rationalisation post-achat",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se convaincre, après coup, qu'un achat était un bon choix, en surestimant ses qualités et en minimisant ses défauts, afin de réduire l'inconfort d'avoir pu se tromper."
      }
    },
    {
      "id": "73d930ff-6f13-4aa3-bb9f-bdd3166ca5df",
      "label": "Biais de soutien du choix",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se souvenir de ses choix passés comme meilleurs qu'ils ne l'étaient réellement, en attribuant des qualités positives à l'option choisie et des défauts à celles écartées."
      }
    },
    {
      "id": "db93c459-ea03-4030-8484-cbdf474e4de6",
      "label": "Perception sélective",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à laisser nos attentes influencer notre perception, en filtrant ce que l'on voit ou entend pour qu'il corresponde à ce que l'on s'attendait à percevoir."
      }
    },
    {
      "id": "8ece8c80-7c5c-4f99-966a-cde3a5f9ccac",
      "label": "Attente de l'expérimentateur",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance d'un chercheur à influencer inconsciemment, par ses attentes, le déroulement ou l'interprétation d'une expérience, biaisant ainsi les résultats obtenus dans le sens attendu."
      }
    },
    {
      "id": "f383f661-71d6-417a-bf59-fa6c7a7eccc3",
      "label": "Biais de l'expérimentateur",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance des chercheurs à privilégier les résultats qui confirment leur hypothèse de recherche, en négligeant ou en écartant les données qui la contredisent."
      }
    },
    {
      "id": "affe4b23-15c1-4a95-9256-9abf00e210d3",
      "label": "Effet de l'observateur",
      "category": "Biais",
      "properties": {
        "prop_1": "Le simple fait d'observer et de mesurer un phénomène peut en modifier le déroulement, faussant ainsi les résultats obtenus."
      }
    },
    {
      "id": "5551b7e8-df4f-4bb1-bae0-cede48ca2a5f",
      "label": "Biais d'attente",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir, interpréter ou rapporter un résultat de façon à ce qu'il corresponde à ce que l'on attendait, indépendamment des faits réels observés."
      }
    },
    {
      "id": "22550712-c0f5-4ea1-9b2b-872322760b8f",
      "label": "Effet de l'autruche",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ignorer volontairement une information négative ou menaçante, en évitant d'y penser ou de la rechercher, comme un moyen de se protéger d'un inconfort psychologique."
      }
    },
    {
      "id": "5d67d9f0-c95a-4320-8c04-7c003ae29626",
      "label": "Validation subjective",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir une affirmation vague ou générale comme précise et pertinente pour soi, dès lors qu'on lui accorde suffisamment de sens personnel, indépendamment de sa véracité objective."
      }
    },
    {
      "id": "a0a37709-4135-4a5e-9082-270f527711e5",
      "label": "Effet de l'influence continue",
      "category": "Biais",
      "properties": {
        "prop_1": "Une information erronée continue d'influencer nos jugements et nos raisonnements même après avoir été explicitement corrigée ou démentie."
      }
    },
    {
      "id": "10e430a5-27ac-4144-8511-b1c45e0c823e",
      "label": "Réflexe de Semmelweis",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à rejeter automatiquement une nouvelle preuve ou connaissance parce qu'elle contredit des normes, des croyances ou des paradigmes déjà établis."
      }
    },
    {
      "id": "917e6fde-e1b2-4e09-b94f-3d58616b0f2a",
      "label": "Biais de l'angle mort",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à reconnaître plus facilement l'impact des biais cognitifs chez les autres que chez soi-même, en se percevant comme moins sujet à ces biais que la moyenne des gens."
      }
    },
    {
      "id": "33ac7838-50b5-4f79-839e-fde4c9f82726",
      "label": "Cynisme naïf",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à penser que les autres sont plus égoïstes ou biaisés dans leurs jugements qu'ils ne le sont réellement, en surestimant l'intérêt personnel derrière leurs opinions."
      }
    },
    {
      "id": "54d5c0d1-2869-4a59-b54d-7a56bb87b137",
      "label": "Réalisme naïf",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire que l'on perçoit la réalité de façon objective et neutre, et que les personnes qui ne partagent pas notre point de vue sont irrationnelles, mal informées ou de mauvaise foi."
      }
    },
    {
      "id": "d8c3257d-e40a-4ca0-8128-3c977bbb531a",
      "label": "Confabulation",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à combler les trous de sa mémoire avec des souvenirs fabriqués, déformés ou mal interprétés, sans intention consciente de tromper."
      }
    },
    {
      "id": "f3fc29d7-18bb-401a-991f-b6b595259ab7",
      "label": "Illusion des séries",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir des motifs ou des tendances significatives dans des données en réalité aléatoires, en particulier dans de petits échantillons."
      }
    },
    {
      "id": "ac7aa519-2f9f-4b55-98c3-03ee5095e047",
      "label": "Insensibilité à  la taille du groupe",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à mal évaluer la probabilité d'un résultat en ignorant l'effet de la taille de l'échantillon, alors que les petits échantillons produisent des résultats bien plus variables que les grands."
      }
    },
    {
      "id": "fd71f3d1-fcf0-43b0-b2e0-adf35ca3f5b2",
      "label": "Négligence des probabilités",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ignorer complètement les probabilités objectives lors d'une décision prise dans l'incertitude, en se laissant guider par l'émotion plutôt que par le calcul."
      }
    },
    {
      "id": "3a7ee8f1-5228-43b2-98ae-56e1e7365e82",
      "label": "Erreur de la preuve anecdotique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à utiliser un exemple personnel ou une anecdote isolée comme preuve suffisante d'un fait général, en ignorant des données statistiques plus fiables et représentatives."
      }
    },
    {
      "id": "bda30ff5-fd0f-463f-b5f4-5425e8d8a9c3",
      "label": "Illusion de la validité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer la fiabilité et l'exactitude de ses propres jugements, en particulier lorsque les informations disponibles forment un récit cohérent, même si ce récit repose sur des données peu fiables."
      }
    },
    {
      "id": "b74a5023-b8b6-4c93-b94b-07e053cc04e5",
      "label": "Erreur de l'homme masqué",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ne pas appliquer une règle logique valide lorsqu'elle mène à une conclusion qui semble contre-intuitive, en refusant une déduction pourtant correcte."
      }
    },
    {
      "id": "d48822be-bda0-410c-8694-a587817e5e00",
      "label": "Illusion de la récence",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire qu'un mot, une expression ou un phénomène que l'on remarque pour la première fois est nouveau, alors qu'il existe en réalité depuis longtemps."
      }
    },
    {
      "id": "e4277c4b-4ba0-4065-9bdf-f7c3d4456f8b",
      "label": "Erreur du parieur",
      "category": "Biais",
      "properties": {
        "prop_1": "Croyance erronée que si un événement aléatoire s'est produit plus souvent que d'habitude par le passé, il est moins susceptible de se reproduire à l'avenir (ou inversement), alors que chaque tirage reste indépendant."
      }
    },
    {
      "id": "ebcce980-e81f-4ea3-966b-696ea2d5b072",
      "label": "Erreur de la main chaude",
      "category": "Biais",
      "properties": {
        "prop_1": "Croyance erronée qu'une personne ayant connu une série de succès a plus de chances de réussir à nouveau, alors que les événements restent statistiquement indépendants les uns des autres."
      }
    },
    {
      "id": "eea34542-eff3-4657-b7db-9bdeb91b0626",
      "label": "Corrélation illusoire",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir une relation entre deux événements ou variables alors qu'il n'en existe aucune, ou à en surestimer fortement la force réelle."
      }
    },
    {
      "id": "92967425-9ff3-4539-8358-de040ed20c6b",
      "label": "Paréidolie",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir un motif significatif, souvent un visage ou une forme familière, dans un stimulus vague ou aléatoire qui n'en contient pourtant pas réellement."
      }
    },
    {
      "id": "3e797d43-8e03-4e09-ab91-2b98037deec5",
      "label": "Anthropomorphisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer des caractéristiques, des intentions ou des émotions humaines à des animaux, des objets ou des phénomènes non humains."
      }
    },
    {
      "id": "e5674fcb-3ddb-4fa5-b466-a35f9d3e8f76",
      "label": "Erreur d'attribution de groupe",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à généraliser les caractéristiques observées chez un ou quelques membres d'un groupe à l'ensemble de ce groupe, ou à croire que les décisions d'un groupe reflètent les préférences individuelles de ses membres."
      }
    },
    {
      "id": "5da429b9-b472-4f1b-b48a-ffd9f88c4069",
      "label": "Erreur ultime d'attribution",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer les comportements négatifs des membres d'un exogroupe à leur nature profonde, et leurs comportements positifs à des circonstances extérieures ou à la chance."
      }
    },
    {
      "id": "85663ce3-9de1-44a6-8201-bbf3d4c6a5cb",
      "label": "Stéréotypage",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer certaines caractéristiques à tous les membres d'un groupe, sans tenir compte des informations réelles disponibles sur chaque individu."
      }
    },
    {
      "id": "f12e3b20-b30a-4924-97ef-62bd1960d69a",
      "label": "Essentialisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer à des personnes, des groupes ou des objets une essence fixe et immuable qui déterminerait leur nature, indépendamment du contexte ou de l'évolution possible."
      }
    },
    {
      "id": "9f6618bd-35aa-4645-8941-1d7f0225cfad",
      "label": "Fixité fonctionnelle",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ne concevoir un objet que dans son usage habituel, ce qui limite notre capacité à imaginer des usages alternatifs et freine la résolution créative de problèmes."
      }
    },
    {
      "id": "4de4313a-3ac9-4699-8efd-0b270fcc07f0",
      "label": "Effet d'hypocrisie morale",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à évaluer nos propres actions moralement discutables avec plus d'indulgence que lorsque ce sont les autres qui les commettent."
      }
    },
    {
      "id": "4381d222-4485-41e0-98d4-94a8ebcdf5be",
      "label": "Croyance en un monde juste",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire que le monde est fondamentalement juste, et que les gens obtiennent ce qu'ils méritent, ce qui pousse parfois à blâmer les victimes de leur propre malheur."
      }
    },
    {
      "id": "c3661fee-68e7-4908-add6-72ae8c140e30",
      "label": "Argument tiré d'un sophisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à juger la validité d'un argument non pas sur sa logique mais sur la plausibilité de sa conclusion, en rejetant un raisonnement correct simplement parce que sa conclusion paraît improbable."
      }
    },
    {
      "id": "e1a1136b-99fd-472a-bf62-3e4741782089",
      "label": "Biais d'autorité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer davantage d'exactitude et d'influence à l'opinion d'une figure d'autorité, indépendamment de son contenu réel, et à s'y conformer plus facilement."
      }
    },
    {
      "id": "256b6cea-3d99-4c3a-af4b-717e6dc818d8",
      "label": "Biais d'automatisation",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder une confiance excessive aux suggestions d'un système automatisé, en négligeant les informations contradictoires même lorsqu'elles sont correctes."
      }
    },
    {
      "id": "9bd9c92a-76c7-4e62-9bf8-91c06f277779",
      "label": "Effet de mode",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à penser, croire ou faire une chose principalement parce que beaucoup d'autres personnes pensent, croient ou font la même chose."
      }
    },
    {
      "id": "7190430c-b440-4594-b148-3e884c30ff55",
      "label": "Effet placebo",
      "category": "Biais",
      "properties": {
        "prop_1": "Lorsqu'on croit ou qu'on nous dit qu'un traitement sans principe actif va produire un effet, celui-ci peut se manifester réellement, simplement du fait de cette croyance."
      }
    },
    {
      "id": "ee4300ca-169e-4934-9346-3527c5649b69",
      "label": "Biais d'homogénéité d'exogroupe",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir les membres des autres groupes comme plus semblables entre eux que les membres de son propre groupe, perçus comme plus variés et individualisés."
      }
    },
    {
      "id": "2869a2bb-fce9-482a-8a13-dbb7455d7232",
      "label": "Effet inter-races",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à mieux reconnaître les visages des personnes de sa propre origine ethnique que ceux de personnes d'autres origines."
      }
    },
    {
      "id": "180792c0-a1c7-43b3-8171-c63116907100",
      "label": "Favoritisme intragroupe",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder un traitement préférentiel, une confiance ou des ressources aux membres de son propre groupe, au détriment des membres d'autres groupes."
      }
    },
    {
      "id": "e5c3ade6-5b10-4b56-95bb-f9c11fd5bcb1",
      "label": "Effet de halo",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ce qu'une impression positive globale d'une personne (par exemple son apparence) influence favorablement le jugement porté sur ses autres qualités, sans rapport direct."
      }
    },
    {
      "id": "fa093f3e-b6f7-4785-b5d1-e13786ec6b8a",
      "label": "Effet pom-pom girl",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir les individus comme plus attirants lorsqu'ils sont vus en groupe que lorsqu'ils sont vus isolément."
      }
    },
    {
      "id": "ce9d2d52-1106-4547-a104-3cf113bb6b3f",
      "label": "Effet de positivité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance, en particulier chez les personnes âgées, à privilégier le traitement et la mémorisation des informations positives plutôt que négatives."
      }
    },
    {
      "id": "926656e3-b8b6-43a2-87ba-3e6429b42af7",
      "label": "Pas inventé ici",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à éviter, dévaloriser ou rejeter des idées, produits ou solutions provenant de l'extérieur d'un groupe, simplement parce qu'ils n'ont pas été créés en interne."
      }
    },
    {
      "id": "58c409bc-7e42-47a8-81ce-aa0b5485d93d",
      "label": "Dévaluation réactive",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à dévaloriser une proposition ou un argument simplement parce qu'il provient d'une personne perçue comme adverse ou hostile."
      }
    },
    {
      "id": "2503e785-6ba3-4c4f-977a-244c87845694",
      "label": "Effet de la route familière",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à sous-estimer la durée d'un trajet emprunté fréquemment, celui-ci semblant plus court et demandant moins d'effort cognitif qu'un trajet inconnu de même distance."
      }
    },
    {
      "id": "b3b37d87-f047-4798-8cb2-3fe37b426d50",
      "label": "Comptabilité mentale",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à traiter l'argent différemment selon son origine ou l'usage prévu, en lui attribuant une valeur subjective plutôt qu'une valeur strictement fongible et interchangeable."
      }
    },
    {
      "id": "9676a80d-ac30-45b7-b5a4-93b0243558f8",
      "label": "Erreur d'appel à  la probabilité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à supposer que, parce qu'une chose est possible, elle est donc probable, en confondant possibilité théorique et probabilité réelle."
      }
    },
    {
      "id": "818a21f2-3238-4f0e-aa31-ec7c9e1ce73f",
      "label": "Biais de normalité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à sous-estimer la probabilité et l'impact d'une catastrophe, en supposant que, parce qu'elle ne s'est jamais produite, elle ne se produira jamais."
      }
    },
    {
      "id": "24ee4663-139a-4f8b-addf-4ab1b1a03e01",
      "label": "Loi de Murphy",
      "category": "Biais",
      "properties": {
        "prop_1": "Croyance selon laquelle tout ce qui peut mal tourner finira par mal tourner, souvent renforcée après coup par le souvenir sélectif des fois où cela s'est effectivement produit."
      }
    },
    {
      "id": "b0bb7074-933a-40d1-b2b1-070a37ea9fe6",
      "label": "Biais de la somme nulle",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir une situation comme un jeu à somme nulle, où le gain d'une partie implique nécessairement la perte d'une autre, même quand ce n'est pas le cas."
      }
    },
    {
      "id": "c55d4a77-a3c8-4a1d-a9d3-88ec2985b190",
      "label": "Biais du survivant",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à tirer des conclusions à partir des seuls cas ayant « survécu » à un processus de sélection, en ignorant les cas qui ont échoué et qui sont, de fait, invisibles."
      }
    },
    {
      "id": "7e3d8ae1-8326-4218-a3c4-77b5d742b3cf",
      "label": "Effet de sous-additivité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à estimer la probabilité d'un événement global comme inférieure à la somme des probabilités de ses composantes prises séparément."
      }
    },
    {
      "id": "54595137-9501-4fd2-9311-1141709987dc",
      "label": "Effet de dénomination",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à dépenser plus facilement de l'argent lorsqu'il se présente sous une forme jugée moins « réelle » (petites coupures, monnaie, jetons) que sous forme de grosses coupures."
      }
    },
    {
      "id": "e78b5df1-9345-4b89-99b5-9f8b92cc41a5",
      "label": "Nombre magique 7 ± 2",
      "category": "Biais",
      "properties": {
        "prop_1": "La mémoire de travail à court terme ne peut retenir simultanément qu'un nombre limité d'éléments, généralement estimé entre cinq et neuf."
      }
    },
    {
      "id": "58790247-0af5-4b92-bc11-327ef8a4dd76",
      "label": "Illusion de transparence",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer la mesure dans laquelle les autres perçoivent nos états mentaux internes, comme nos émotions ou nos pensées."
      }
    },
    {
      "id": "490a7ebe-c09d-477b-8a2a-0a2102cece11",
      "label": "Malédiction de la connaissance",
      "category": "Biais",
      "properties": {
        "prop_1": "Une fois qu'on connaît une information, il devient difficile d'imaginer ce que c'est que de ne pas la connaître, ce qui nous fait surestimer ce que les autres savent déjà."
      }
    },
    {
      "id": "97c7ebc0-98b6-4235-a3d0-c38e7cccd207",
      "label": "Effet de projecteur",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer à quel point les autres remarquent notre apparence ou notre comportement, en se croyant davantage observé qu'on ne l'est réellement."
      }
    },
    {
      "id": "da99f7d0-c604-4f1c-bbd2-193d49205542",
      "label": "Biais des incitations extrinsèques",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer l'effet des récompenses ou punitions externes sur le comportement d'autrui, en sous-estimant le rôle de leur motivation intrinsèque."
      }
    },
    {
      "id": "091c1150-3711-42f9-837c-879aafea7986",
      "label": "Illusion d'agence externe",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à interpréter les événements comme étant l'œuvre d'un agent invisible ou d'une force extérieure, plutôt que le résultat de processus impersonnels ou du hasard."
      }
    },
    {
      "id": "00611885-e456-4cc2-8acf-94d01efc3dd7",
      "label": "Illusion de connaissance asymétrique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire que l'on connaît les autres mieux qu'ils ne se connaissent eux-mêmes, tout en pensant que les autres nous connaissent moins bien que nous ne les connaissons."
      }
    },
    {
      "id": "89c33c02-1aa0-4829-97ce-c9ccdb53b95b",
      "label": "Effet de télescopage",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir les événements récents comme plus anciens qu'ils ne le sont, et les événements anciens comme plus récents."
      }
    },
    {
      "id": "d9134f2c-04e0-41ec-83e8-d97aecbcba56",
      "label": "Rétrospective de la vie en rose",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se souvenir du passé, notamment des objets, des relations ou des expériences, de façon plus positive qu'il ne l'était réellement au moment vécu."
      }
    },
    {
      "id": "738d00d4-adff-46f0-b9b3-dbc39c39ab06",
      "label": "Biais rétrospectif",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance, après qu'un événement s'est produit, à avoir l'impression qu'on l'avait prévu ou qu'il était prévisible, alors qu'on n'aurait pas pu le prédire à l'avance."
      }
    },
    {
      "id": "69de2a56-02c7-456e-91d8-48ff1d9ec90a",
      "label": "Biais de résultat",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à juger la qualité d'une décision passée en se basant sur son résultat final plutôt que sur la qualité du raisonnement au moment où elle a été prise."
      }
    },
    {
      "id": "b9103494-621a-438b-bbd6-0f7246d338cc",
      "label": "Chance morale",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à juger la moralité d'un acte en fonction de son issue, alors que cette issue dépend en partie de facteurs échappant totalement au contrôle de la personne qui a agi."
      }
    },
    {
      "id": "4d8337b9-8a82-40fd-8b9c-e2c3f712a8e1",
      "label": "Déclinisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à idéaliser le passé et à percevoir le présent, ou l'avenir, comme étant en déclin par rapport à lui, souvent de façon irréaliste."
      }
    },
    {
      "id": "c539e19d-9961-45ed-a8ab-2df03112df5c",
      "label": "Biais d'impact",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer la durée et l'intensité de nos futures réactions émotionnelles, positives comme négatives, face à un événement à venir."
      }
    },
    {
      "id": "2c24da5c-b160-409c-a440-b3854f8210bd",
      "label": "Biais de pessimisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance, chez certaines personnes, à surestimer la probabilité que des événements négatifs se produisent, dans leur propre vie ou en général."
      }
    },
    {
      "id": "ddb176ea-c11d-4cef-82fd-0c9c15b06ee8",
      "label": "Biais de planification",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à sous-estimer systématiquement le temps, les coûts et les risques nécessaires pour réaliser une tâche future, même en connaissant les dépassements survenus par le passé."
      }
    },
    {
      "id": "aa033a6f-7f5f-4e95-8f31-c61a6cffa2dd",
      "label": "Biais du gain de temps",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à mal estimer l'effet d'un changement de vitesse sur la durée d'un trajet, en surestimant le temps gagné lorsqu'on augmente une vitesse déjà élevée."
      }
    },
    {
      "id": "78525ed2-ca5c-430b-a9b8-736f023ab7d4",
      "label": "Biais pro-innovation",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance des porteurs d'une innovation à en surestimer l'utilité et l'adoption future, tout en sous-estimant ses limites ou les difficultés de sa diffusion."
      }
    },
    {
      "id": "0cc47408-5b06-4829-a3e2-a9140772a3ec",
      "label": "Biais de projection",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à supposer, à tort, que les autres partagent nos pensées, croyances, valeurs ou états émotionnels actuels."
      }
    },
    {
      "id": "29fd607e-8045-419c-89d1-a3b8afa9bd89",
      "label": "Biais de retenue",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer notre propre capacité à résister à des pulsions ou des tentations futures, ce qui nous pousse à nous exposer imprudemment à des situations tentantes."
      }
    },
    {
      "id": "d4ac3ed1-1bba-4426-b6ac-0b5aedcb21e8",
      "label": "Biais de cohérence avec soi",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir ses attitudes et comportements passés comme davantage cohérents avec ses opinions actuelles qu'ils ne l'étaient réellement à l'époque."
      }
    },
    {
      "id": "5741727e-76ae-4110-9547-fb8fdb173689",
      "label": "Biais d'excès de confiance",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à avoir une confiance excessive et injustifiée dans l'exactitude de ses propres réponses, jugements ou capacités."
      }
    },
    {
      "id": "e69d5eaf-9c72-49b2-bcb6-76e5f63d0e83",
      "label": "Désirabilité sociale",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à répondre à des questions, notamment dans des enquêtes, de manière à être perçu favorablement par les autres, plutôt qu'en exprimant sa véritable opinion."
      }
    },
    {
      "id": "20d0750b-cc9c-401e-91df-1fe321062821",
      "label": "Effet troisième personne",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire que les messages persuasifs, notamment les médias, influencent davantage les autres que soi-même."
      }
    },
    {
      "id": "80200a7c-3f45-423c-a8de-b0af19bad03a",
      "label": "Effet difficile-facile",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer sa performance sur des tâches difficiles et à la sous-estimer sur des tâches faciles, par rapport à sa performance réelle."
      }
    },
    {
      "id": "9c4ddf0f-87f2-4c43-99a2-086755500228",
      "label": "Effet Lac Wobegon",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance générale à se percevoir soi-même comme supérieur à la moyenne sur la plupart des qualités positives, ce qui est statistiquement impossible pour l'ensemble d'un groupe."
      }
    },
    {
      "id": "b09b1030-031e-4bfc-ab00-a18984698ba3",
      "label": "Effet Dunning-Kruger",
      "category": "Biais",
      "properties": {
        "prop_1": "Les personnes les moins compétentes dans un domaine ont tendance à surestimer fortement leurs compétences, faute de posséder les connaissances nécessaires pour évaluer correctement leurs propres limites."
      }
    },
    {
      "id": "9b5d635b-1dd5-44a9-b886-673bcee11b31",
      "label": "Biais égocentrique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se souvenir du passé d'une manière qui nous met en valeur, en surestimant notre propre contribution à un résultat commun par rapport à celle des autres."
      }
    },
    {
      "id": "6db8a785-f620-44d0-beeb-48cede141bce",
      "label": "Biais d'optimisme",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer la probabilité de vivre des événements positifs et à sous-estimer celle de vivre des événements négatifs, comparé à autrui."
      }
    },
    {
      "id": "e7ba11f7-af02-4c5a-8c8e-9f5b48c3b243",
      "label": "Effet Forer",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accepter comme précise et personnelle une description de sa personnalité vague et générale, en pensant qu'elle a été spécifiquement conçue pour soi."
      }
    },
    {
      "id": "a0530a02-2da0-4943-b953-c458ff3e677c",
      "label": "Effet Barnum",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder une grande validité à des descriptions de personnalité générales et flatteuses, applicables en réalité à un grand nombre de personnes, comme dans l'astrologie."
      }
    },
    {
      "id": "4b2cb31e-7180-4dfc-a5c6-31491f89bdbc",
      "label": "Biais d'autocomplaisance",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à s'attribuer le mérite de ses succès, tout en attribuant ses échecs à des facteurs externes indépendants de sa volonté."
      }
    },
    {
      "id": "81ba4c40-8070-4b19-aabe-b758cc0574ff",
      "label": "Effet acteur-observateur",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer son propre comportement à des circonstances extérieures, tout en attribuant le comportement des autres à leur personnalité ou à leurs traits de caractère."
      }
    },
    {
      "id": "21b00761-36f5-4cba-89af-18a843acde8d",
      "label": "Illusion de contrôle",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer sa capacité à contrôler des événements qui, en réalité, dépendent largement du hasard."
      }
    },
    {
      "id": "afcee631-ffc0-4d89-b46d-8e2e4a9a84e4",
      "label": "Supériorité illusoire",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer ses propres qualités et capacités par rapport à celles des autres, en se percevant comme meilleur que la moyenne dans des domaines valorisés."
      }
    },
    {
      "id": "0a392bb1-b5b5-41c9-af4e-3e73dd9cba93",
      "label": "Erreur fondamentale d'attribution",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à surestimer le rôle des traits de personnalité et à sous-estimer le rôle des facteurs situationnels pour expliquer le comportement des autres."
      }
    },
    {
      "id": "3203bd48-a094-4a98-b259-8663556c6c89",
      "label": "Hypothèse d'attribution défensive",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à attribuer moins de responsabilité à une victime, et davantage à l'auteur d'un incident, lorsque l'on se sent proche ou similaire à cette victime, pour se protéger de l'idée qu'un tel malheur pourrait nous arriver."
      }
    },
    {
      "id": "d76f1dbd-6711-49dd-8c8c-48da63accc9f",
      "label": "Biais d'attribution des traits",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à voir sa propre personnalité, ses valeurs et ses comportements comme variables et dépendants du contexte, tout en percevant ceux des autres comme fixes et prévisibles."
      }
    },
    {
      "id": "ba135b92-e512-4e06-946a-a35f9404a30d",
      "label": "Justification de l'effort",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder une valeur plus élevée à un résultat obtenu après un effort important, indépendamment de sa qualité objective, afin de justifier l'énergie investie."
      }
    },
    {
      "id": "3a6d743a-17d5-4799-978f-edc4babb48c3",
      "label": "Compensation du risque",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ajuster son comportement en prenant davantage de risques lorsqu'on se sent protégé par une mesure de sécurité, ce qui peut annuler en partie le bénéfice de cette protection."
      }
    },
    {
      "id": "4cc78d6a-5817-4898-8b15-3099be7a0db8",
      "label": "Effet Peltzman",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance des individus à adopter un comportement plus risqué en réponse à une mesure de sécurité perçue, réduisant ainsi une partie des bénéfices attendus de cette mesure."
      }
    },
    {
      "id": "32d6a682-0670-41e3-b192-da8a1015c9f5",
      "label": "Rabais hyperbolique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à préférer une récompense plus petite mais immédiate à une récompense plus grande mais différée, en accordant une valeur disproportionnée au présent."
      }
    },
    {
      "id": "53fa2e16-1563-4579-8dd4-16f30053b338",
      "label": "Appel à  la nouveauté",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à supposer qu'une idée ou une solution est meilleure simplement parce qu'elle est nouvelle ou moderne, indépendamment de sa qualité réelle."
      }
    },
    {
      "id": "84760cc4-d0cc-419b-aa92-cd2e2f046d5d",
      "label": "Effet de la victime identifiable",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ressentir plus d'empathie et à être davantage disposé à agir pour une victime spécifique et identifiée que pour un grand nombre de victimes anonymes, même si le besoin réel est plus grand."
      }
    },
    {
      "id": "b2b08377-0f89-4fcb-b9f5-8702c3355411",
      "label": "Biais des coûts irrécupérables",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à continuer un projet ou une action en raison des ressources (temps, argent, effort) déjà investies, alors que ces ressources ne peuvent de toute façon plus être récupérées."
      }
    },
    {
      "id": "ccbdb925-c4e4-4842-a061-7d5c5ab46f57",
      "label": "Escalade irrationnelle",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à justifier un investissement supplémentaire dans une décision sur la base des ressources déjà englouties, malgré des preuves croissantes que ce choix était mauvais."
      }
    },
    {
      "id": "8bbc2e1f-c35b-48ca-b70c-b2f147a5ed48",
      "label": "Escalade d'engagement",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à s'enfoncer davantage dans une décision ou un comportement dont on connaît pourtant les résultats négatifs, plutôt que de faire marche arrière."
      }
    },
    {
      "id": "34000f95-af9a-43ce-93ab-30a2c082aae5",
      "label": "Effet de génération d'information",
      "category": "Biais",
      "properties": {
        "prop_1": "Une information que l'on a soi-même générée ou déduite est mieux mémorisée qu'une information simplement lue ou reçue passivement."
      }
    },
    {
      "id": "72d4fa34-b7b2-4a3a-9a1d-515fd366e96e",
      "label": "Aversion à  la perte",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à ressentir la douleur d'une perte de façon plus intense que le plaisir d'un gain équivalent, ce qui pousse à privilégier fortement l'évitement des pertes."
      }
    },
    {
      "id": "9593327a-bbac-4cec-bcc7-6727f2965fb3",
      "label": "Effet IKEA",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder une valeur disproportionnée à un objet que l'on a soi-même partiellement fabriqué ou assemblé, indépendamment de sa qualité finale."
      }
    },
    {
      "id": "1a35febd-ceae-4db8-a720-97d1b05afb96",
      "label": "Biais de la portion",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à consommer davantage de nourriture ou de boisson lorsque la portion servie est plus grande, indépendamment de la sensation réelle de faim."
      }
    },
    {
      "id": "38ae604d-2ef7-42eb-bf95-f4b8a97c65e3",
      "label": "Biais du risque zéro",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à préférer réduire un petit risque à zéro plutôt que de réduire davantage un risque plus grand, même si la seconde option apporte un bénéfice global supérieur."
      }
    },
    {
      "id": "28ea0592-fb77-4f1f-b1ce-55d065766d64",
      "label": "Effet de disposition",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance des investisseurs à vendre trop tôt les actifs qui gagnent de la valeur, et à conserver trop longtemps ceux qui en perdent, par aversion à réaliser une perte."
      }
    },
    {
      "id": "bb88a338-fb53-4e44-a700-a0fe545cadf5",
      "label": "Effet de pseudo-certitude",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à faire des choix différents selon qu'une issue est présentée comme certaine ou seulement probable, même lorsque les probabilités réelles sont équivalentes."
      }
    },
    {
      "id": "0c833b99-93e1-4b48-a8ec-a17c3ad59a62",
      "label": "Effet de difficulté de traitement",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à juger une information comme plus vraie, plus intelligente ou plus mémorable lorsqu'elle est présentée d'une manière facile à traiter mentalement, par exemple avec une police claire."
      }
    },
    {
      "id": "806ae353-e3c4-4447-a7be-17306a026935",
      "label": "Effet de dotation",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder plus de valeur à un objet du seul fait qu'on le possède déjà, comparé à la valeur qu'on lui accorderait si on ne le possédait pas."
      }
    },
    {
      "id": "ed251fe7-0df1-4582-85f9-b231459d407a",
      "label": "Effet boomerang",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance, face à un message persuasif perçu comme trop insistant, à adopter la position exactement opposée à celle défendue par ce message."
      }
    },
    {
      "id": "8aa70b03-c9aa-4635-8f38-cd7aab322d4a",
      "label": "Justification du système",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à défendre et à rationaliser le statu quo social, économique ou politique, même lorsqu'il nous est défavorable, en le percevant comme juste et légitime."
      }
    },
    {
      "id": "1a73fee6-b3d3-432b-bb4a-db44dc226fbf",
      "label": "Psychologie inversée",
      "category": "Biais",
      "properties": {
        "prop_1": "Technique consistant à préconiser un comportement opposé à celui réellement souhaité, en misant sur la tendance de la personne à vouloir faire l'inverse de ce qu'on lui suggère."
      }
    },
    {
      "id": "12df5da8-5047-40a0-97ca-ced93f3045f8",
      "label": "Réactance",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à réagir à une contrainte perçue sur notre liberté en adoptant précisément le comportement que l'on cherchait à nous interdire ou à nous imposer."
      }
    },
    {
      "id": "345564f1-33e8-470d-b414-2595c0d90b0a",
      "label": "Effet de dominance asymétrique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à préférer une option lorsqu'une troisième option, clairement inférieure à elle mais pas à l'autre, est ajoutée aux choix proposés."
      }
    },
    {
      "id": "898f4aa5-f8e5-40f1-bfbf-c9725a467f6e",
      "label": "Biais de comparaison sociale",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à évaluer favorablement des candidats ou des idées qui ne rivalisent pas directement avec nos propres compétences ou opinions, par crainte inconsciente de la comparaison."
      }
    },
    {
      "id": "88ad6b0b-3b17-4733-b77e-d8b20f53d882",
      "label": "Biais du status quo",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à préférer que les choses restent telles qu'elles sont, en percevant tout changement par rapport à la situation actuelle comme une perte plutôt qu'un gain potentiel."
      }
    },
    {
      "id": "3c7bb4bb-7a7e-4da1-8524-7c36e9aaf68e",
      "label": "Effet d'ambiguïté",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à éviter les options dont la probabilité de succès est inconnue, en préférant une option dont le risque est clairement défini, même s'il est plus élevé."
      }
    },
    {
      "id": "5c76376b-6bf2-4e56-b26c-2bff8cde1cc1",
      "label": "Biais d'information",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à rechercher des informations supplémentaires même lorsqu'elles n'ont aucune chance de modifier concrètement l'action à entreprendre."
      }
    },
    {
      "id": "d4ae465f-f0f5-4b66-8b69-23104e0f328a",
      "label": "Biais de croyance",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à évaluer la validité logique d'un raisonnement en fonction de la plausibilité de sa conclusion, plutôt que sur la base de sa structure logique réelle."
      }
    },
    {
      "id": "f6b18da9-53e2-4d32-8bf2-7f55c7ee2fc2",
      "label": "Effet ça rime donc c'est bon",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à percevoir un énoncé rimé comme plus véridique ou plus pertinent qu'un énoncé équivalent qui ne rime pas."
      }
    },
    {
      "id": "6153011a-b8d8-4f28-9bda-f313aeebee3e",
      "label": "Effet abri à  vélo",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder une importance disproportionnée à des sujets simples et faciles à débattre, au détriment de sujets plus complexes et plus importants qui demandent une expertise réelle."
      }
    },
    {
      "id": "4d8cb9a5-a627-46ac-b766-b18d99a089ec",
      "label": "Loi de futilité de Parkinson",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance des groupes à consacrer un temps disproportionné à des questions mineures et faciles à comprendre, au détriment de décisions majeures et complexes."
      }
    },
    {
      "id": "b719dfa9-1885-48c9-9e06-3235a0635274",
      "label": "Erreur de conjonction",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à juger la probabilité de la conjonction de deux événements comme plus élevée que la probabilité de l'un des deux événements pris isolément, ce qui est statistiquement impossible."
      }
    },
    {
      "id": "06f50152-be2b-42f0-b2f2-ac014074ccc3",
      "label": "Rasoir d'Ockham",
      "category": "Biais",
      "properties": {
        "prop_1": "Principe selon lequel, entre plusieurs explications possibles d'un même phénomène, celle qui repose sur le moins d'hypothèses doit généralement être privilégiée."
      }
    },
    {
      "id": "61993aa6-8659-400f-8193-46ca7981a8db",
      "label": "Effet moins-c'est-mieux",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à préférer, dans une évaluation isolée, une option plus petite ou moins généreuse à une option plus grande, alors que la préférence s'inverse lorsqu'on les compare côte à côte."
      }
    },
    {
      "id": "2447387a-9328-4676-8efe-78b9a4363f58",
      "label": "Distraction",
      "category": "Biais",
      "properties": {
        "prop_1": "Un souvenir peut échouer à se former, ou disparaître, lorsque l'attention est détournée vers autre chose au moment de son encodage, faute de ressources cognitives disponibles."
      }
    },
    {
      "id": "38790c9a-d0c9-4b18-b271-3a61047d581e",
      "label": "Effet test",
      "category": "Biais",
      "properties": {
        "prop_1": "Le simple fait de tester activement sa mémoire sur une information améliore sa rétention à long terme, davantage que la relire passivement."
      }
    },
    {
      "id": "098c798d-0391-40ce-8481-137defcd5287",
      "label": "Effet au-suivant",
      "category": "Biais",
      "properties": {
        "prop_1": "Lorsqu'on est présenté à un groupe de personnes, on a plus de mal à se souvenir du nom de la personne rencontrée juste avant la dernière, car on se concentre déjà sur la préparation de la rencontre suivante."
      }
    },
    {
      "id": "a8f87556-23f9-43e0-954c-99a6d5d9f7eb",
      "label": "Effet Google ou Amnésie numérique",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance naturelle du cerveau à oublier une information dès qu'il sait qu'elle est facilement accessible en ligne (sur un moteur de recherche, un smartphone ou le cloud). Le cerveau ne stocke plus la donnée elle-même, mais l'emplacement ou le moyen de la retrouver."
      }
    },
    {
      "id": "16189197-bc4f-4864-8482-635d042df6cb",
      "label": "Mot sur le bout de la langue",
      "category": "Biais",
      "properties": {
        "prop_1": "Sensation de savoir un mot ou un nom, sans parvenir à le récupérer immédiatement, alors que des informations partielles (première lettre, nombre de syllabes) restent accessibles."
      }
    },
    {
      "id": "dce5f4e1-1a79-4a2c-9ca3-83bf4ea640b6",
      "label": "Effet de profondeur du traitement",
      "category": "Biais",
      "properties": {
        "prop_1": "Une information traitée de manière approfondie et significative, en lien avec son sens, est mieux mémorisée qu'une information traitée superficiellement."
      }
    },
    {
      "id": "2fd9b6ae-ada6-418f-8c1f-816c07fa3130",
      "label": "Règle pic-fin",
      "category": "Biais",
      "properties": {
        "prop_1": "Notre souvenir d'une expérience est déterminé principalement par son moment le plus intense (le pic) et par la façon dont elle s'est terminée, plutôt que par sa durée totale ou sa moyenne."
      }
    },
    {
      "id": "14dac8ed-a352-412b-88fd-e9822be71b90",
      "label": "Nivellement et affinement",
      "category": "Biais",
      "properties": {
        "prop_1": "En se remémorant un souvenir de façon répétée, on tend à en simplifier les détails (nivellement) tout en exagérant certains éléments marquants (affinement), déformant progressivement le souvenir initial."
      }
    },
    {
      "id": "9dcc8b26-2714-410c-ae89-b74b5d78512d",
      "label": "Effet de désinformation",
      "category": "Biais",
      "properties": {
        "prop_1": "L'exposition à une information erronée après un événement peut altérer le souvenir que l'on a de cet événement."
      }
    },
    {
      "id": "d321860a-6809-479e-a215-3df1b25e2b7d",
      "label": "Effet de position dans une série",
      "category": "Biais",
      "properties": {
        "La capacité à se souvenir d'un élément dépend de sa position dans une séquence": "les premiers et les derniers éléments sont mieux retenus que ceux du milieu."
      }
    },
    {
      "id": "26f49a63-b98d-40fc-823e-81133f3b9a89",
      "label": "Effet de la longueur de la liste",
      "category": "Biais",
      "properties": {
        "prop_1": "Plus une liste d'éléments à mémoriser est longue, plus la proportion d'éléments effectivement retenus diminue, même si le nombre absolu d'éléments mémorisés augmente."
      }
    },
    {
      "id": "8fe10c7b-d44b-4179-a8b8-bba9cfa9dab7",
      "label": "Négligence de la durée",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à accorder peu d'importance à la durée réelle d'une expérience lorsqu'on l'évalue rétrospectivement, au profit de son intensité et de sa fin."
      }
    },
    {
      "id": "e4390ac4-74a0-4606-b8ca-5de09de3405c",
      "label": "Effet de la modalité",
      "category": "Biais",
      "properties": {
        "prop_1": "La mémoire à court terme est meilleure pour les derniers éléments d'une liste lorsqu'ils sont présentés oralement plutôt que par écrit."
      }
    },
    {
      "id": "9535000d-0b5d-437c-98e0-dfcbb14df66b",
      "label": "Inhibition de la mémoire",
      "category": "Biais",
      "properties": {
        "prop_1": "Se remémorer certains souvenirs peut, par le mécanisme même du rappel, rendre plus difficile l'accès à d'autres souvenirs apparentés."
      }
    },
    {
      "id": "4c777033-df01-4823-8f9b-f1063ad86731",
      "label": "Effet de primauté",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à mieux mémoriser les premiers éléments d'une liste ou d'une série que ceux situés au milieu."
      }
    },
    {
      "id": "f160a863-276a-4ec8-9903-17452a8e498f",
      "label": "Effet du plus récent",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à mieux mémoriser les derniers éléments présentés dans une liste ou une série que ceux situés au milieu."
      }
    },
    {
      "id": "a1e197c0-1574-40d4-a987-35980d7bc7c8",
      "label": "Indiçage partiel",
      "category": "Biais",
      "properties": {
        "prop_1": "Le fait de se voir proposer une partie d'une information (un indice) peut en réalité rendre plus difficile le rappel du reste de cette information."
      }
    },
    {
      "id": "56d69af7-36a4-4c48-accf-e60d83127f73",
      "label": "Effet de position sérielle",
      "category": "Biais",
      "properties": {
        "Combinaison des effets de primauté et de récence": "dans une liste, les éléments situés au début et à la fin sont mieux mémorisés que ceux situés au milieu."
      }
    },
    {
      "id": "b2f904f5-bb7c-45d1-af5b-25874edc67be",
      "label": "Effet du suffixe",
      "category": "Biais",
      "properties": {
        "prop_1": "L'effet de récence, qui favorise la mémorisation des derniers éléments d'une liste orale, est réduit lorsqu'un élément supplémentaire et non pertinent est ajouté juste après la liste."
      }
    },
    {
      "id": "d5366b1b-df59-4806-a922-83b93674e581",
      "label": "Erreur d'attribution de la source",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se souvenir correctement d'une information, mais à se tromper sur son origine, en l'attribuant à une source erronée."
      }
    },
    {
      "id": "0dfa6d6a-1e4a-4b1d-8bd2-e0be66e09bb6",
      "label": "Confusion de la source",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à confondre l'origine réelle d'un souvenir, en attribuant à tort une expérience vécue à une source imaginée, ou inversement."
      }
    },
    {
      "id": "8c9b7f7b-634b-427e-bf43-41e1088f2a2a",
      "label": "Cryptomnésie",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à croire qu'une idée ou une création est originale, alors qu'il s'agit en réalité d'un souvenir oublié provenant d'une source extérieure."
      }
    },
    {
      "id": "d322ff02-483a-4103-97e5-d47d92692b78",
      "label": "Faux souvenir",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à se rappeler avec confiance d'un événement qui ne s'est en réalité jamais produit, ou dont les détails ont été profondément déformés."
      }
    },
    {
      "id": "f36339cd-2368-4f9f-84fe-3550ac426c13",
      "label": "Suggestibilité",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à incorporer dans ses propres souvenirs des informations suggérées par d'autres, par exemple à travers des questions orientées."
      }
    },
    {
      "id": "16ec805b-5ce7-407a-af74-9a133877d51a",
      "label": "Effet d'espacement",
      "category": "Biais",
      "properties": {
        "prop_1": "L'information est mieux mémorisée sur le long terme lorsque son apprentissage est réparti dans le temps, plutôt que concentré en une seule session massée."
      }
    },
    {
      "id": "2ed595fe-fc65-4842-a15a-f9a2239ac7be",
      "label": "Association implicite",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance inconsciente à associer plus rapidement certains concepts entre eux, sur la base de stéréotypes ou d'expériences passées, sans en avoir pleinement conscience."
      }
    },
    {
      "id": "e1147c21-f65d-4000-b560-a54864aaa228",
      "label": "Stéréotype implicite",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance inconsciente à attribuer certaines caractéristiques à un groupe de personnes, influençant nos jugements et comportements sans que l'on en soit conscient."
      }
    },
    {
      "id": "c2035658-81d0-4258-afb3-991cc6e100c0",
      "label": "Mémorisation stéréotypée",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à encoder et à restituer les informations en se basant sur des schémas préexistants, des clichés, des habitudes culturelles ou des structures toutes faites, plutôt que sur la réalité exacte des faits. Le cerveau simplifie le monde en le faisant entrer dans des cases mentales déjà prêtes."
      }
    },
    {
      "id": "832e3a18-6ddc-4ed1-841d-dcc79102522d",
      "label": "Préjudice",
      "category": "Biais",
      "properties": {
        "prop_1": "Opinion ou jugement défavorable formé à l'égard d'une personne ou d'un groupe, sans connaissance ou expérience suffisante pour le justifier réellement."
      }
    },
    {
      "id": "db06816e-b5d5-4f37-9e1b-9840976b2e08",
      "label": "Biais d'affaiblissement de l'affect",
      "category": "Biais",
      "properties": {
        "prop_1": "Tendance à sous-estimer l'intensité de nos futures réactions émotionnelles, en particulier face à des événements négatifs, une fois qu'un peu de temps s'est écoulé."
      }
    },
    {
      "id": "44874861-d1d8-48e9-8a7e-aedcefc1f2e2",
      "label": "La peur de l'avion (vs. voiture)",
      "category": "Exemple",
      "properties": {
        "prop_1": "Beaucoup de gens ont une peur panique de prendre l'avion, redoutant un accident mortel, mais prennent la route tous les jours sans aucune anxiété.",
        "Pourquoi c'est l'heuristique de disponibilité": "Lorsqu'un accident d'avion se produit, il fait la une de tous les journaux mondiaux avec des images spectaculaires, ce qui le rend très facile à se remémorer. En revanche, les accidents de la route, beaucoup plus fréquents, sont banalisés et ne marquent pas autant les esprits. Notre cerveau conclut donc à tort que l'avion est plus dangereux que la voiture."
      }
    },
    {
      "id": "cb7bf109-ea86-4fef-97a2-5ff5d0073bb4",
      "label": "Le choix d'un restaurant à partir de souvenirs récents",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous devez choisir un restaurant ce soir et vous optez immédiatement pour celui où vous êtes allés la semaine dernière, en pensant que c'est \"le meilleur\", sans chercher d'autres options.",
        "Processus mental": "Le nom de ce restaurant et les émotions positives du dernier repas sont immédiatement accessibles dans votre mémoire. Les dizaines d'autres restaurants de la ville, moins présents à votre esprit à cet instant précis, sont ignorés."
      }
    },
    {
      "id": "79809f7e-8874-4460-b0ce-848f2af3cb33",
      "label": "Mon grand-père a fumé toute sa vie...",
      "category": "Exemple",
      "properties": {
        "Quelqu'un minimise les dangers du tabac en affirmant": "\"Mon grand-père a fumé un paquet par jour jusqu'à 95 ans et il n'a jamais rien eu, donc le tabac n'est pas si dangereux.\"",
        "Processus mental": "L'image marquante de ce proche en bonne santé éclipse la masse de données statistiques et médicales (qui demandent un effort de réflexion) prouvant la dangerosité réelle de la cigarette. Le cas particulier et mémorable prend toute la place dans la décision."
      }
    },
    {
      "id": "de263efb-a495-49c6-a487-969aad4edd27",
      "label": "Notre Cerveau",
      "category": "Cerveau",
      "properties": {
        "prop_1": "Pour économiser de l'énergie et décider vite face à la surcharge d'informations",
        "prop_2": "le cerveau utilise des raccourcis mentaux automatiques appelés heuristiques",
        "prop_3": "ce qui crée des erreurs systématiques de perception."
      }
    },
    {
      "id": "be35dfcd-67f2-4c07-89ee-97fcd039f904",
      "label": "La voiture de vos rêves (ou la grossesse)",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous venez d'acheter une nouvelle voiture (imaginons une citadine rouge) ou vous apprenez que vous allez être parent. Soudain, vous avez l'impression que tout le monde roule en citadine rouge ou que la ville est envahie de poussettes.",
        "Processus mental": "Votre attention est focalisée sur un sujet précis. Votre cerveau filtre l'environnement et met en avant tout ce qui y correspond, créant l'illusion d'une augmentation soudaine alors que ces éléments étaient déjà présents avant, mais ignorés."
      }
    },
    {
      "id": "3bd83a00-f87b-49fc-a458-46a880b38806",
      "label": "La petite critique au milieu des compliments",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous présentez un projet devant un public. Neuf personnes vous font d'excellents retours, et une seule émet une critique constructive mineure. En sortant, vous ne pensez qu'à cette remarque négative et ruminez toute la journée.",
        "Processus mental": "Votre attention est happée par l'élément conflictuel ou menaçant. Ce \"spotlight\" mental bloque l'accès aux autres possibilités (les retours positifs), vous empêchant d'avoir une vision objective de la situation."
      }
    },
    {
      "id": "98905f32-ed5d-4bf5-99d0-6f6329608b23",
      "label": "La faim au supermarché",
      "category": "Exemple",
      "properties": {
        "Vous allez faire vos courses en ayant le ventre vide. Résultat": "vous rentrez chez vous avec des quantités de snacks et de plats préparés dont vous n'aviez pas besoin, en oubliant la moitié des produits de votre liste de base.",
        "Processus mental": "Votre faim mobilise toute votre attention sur la nourriture immédiate. Ce filtre attentionnel occulte vos objectifs initiaux (faire des courses rationnelles et équilibrées), rendant impossible l'envisage de s'en tenir à la liste."
      }
    },
    {
      "id": "9e31b0d7-99f3-47fb-a34e-ee89e8c6a1e9",
      "label": "La publicité et les slogans",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous entendez ou voyez quotidiennement la même publicité affirmant qu'une marque de dentifrice \"protège 2 fois plus longtemps\". Sans vérifier les études scientifiques, vous finissez par l'acheter en étant convaincu que c'est objectivement le meilleur.",
        "Processus mental": "La répétition fréquente du message crée un sentiment de fluidité cognitive (l'information se rappelle facilement). Votre cerveau interprète cette aisance de traitement comme un signe de vérité, oubliant que la répétition d'une affirmation n'en fait pas un fait prouvé."
      }
    },
    {
      "id": "a20a86ef-46ab-4764-afb9-83a17a74207e",
      "label": "Les 'Fake News'",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous tombez à plusieurs reprises sur une rumeur ou une fausse citation partagée par différents comptes sur votre fil d'actualité. Même si elle vous paraissait douteuse au début, vous finissez par l'accepter comme un fait établi et la partagez à votre tour.",
        "Processus mental": "L'exposition répétée à la même idée désensibilise votre esprit critique. La familiarité accumulée au fil des vues remplace la vérification des sources, rendant le mensonge \"vrai\" à votre esprit par force d'habitude."
      }
    },
    {
      "id": "67590459-7259-4401-b06a-6d9efbd7c680",
      "label": "La fausse astuce de grand-mère",
      "category": "Exemple",
      "properties": {
        "Vous vous brûlez légèrement en cuisinant et, instantanément, quelqu'un vous lance": "\"Vite, mets une bonne couche de beurre dessus pour stopper la douleur !\" Vous l'avez entendu toute votre enfance, c'est le premier réflexe que l'on vous a enseigné. Pourtant, sur le plan médical, c'est une très mauvaise idée : le corps gras emprisonne la chaleur, retarde le refroidissement de la peau et, pire encore, le beurre non stérile augmente considérablement les risques d'infection.",
        "La répétition": "Ce conseil est transmis de génération en génération avec tellement d'assurance qu'on le croirait infaillible.",
        "La confusion": "À force d'entendre cette méthode en boucle depuis toujours, le cerveau la traite avec une grande fluidité et la classe d'office dans la case \"vérité incontestable\".",
        "Le résultat": "Le jour où l'accident arrive, on applique ce faux bon plan machinalement, sans jamais remettre en question cette habitude collective pourtant contredite par tous les médecins."
      }
    },
    {
      "id": "b075dd71-4d6d-4580-8b53-bbd56315caac",
      "label": "La faute d'orthographe",
      "category": "Exemple",
      "properties": {
        "Vous recevez un e-mail professionnel très long et parfaitement rédigé, contenant une cinquantaine de lignes de texte irréprochable. Seul petit détail": "à la troisième ligne, le mot \"professionnel\" est orthographié avec deux \"f\". Le soir, quand vous repensez au message, c'est le seul détail dont vous vous souvenez.",
        "Processus mental": "L'erreur crée une rupture visuelle et logique par rapport à la norme (le texte correct). Votre cerveau zoome instantanément sur cette anomalie, faisant de cette petite faute l'élément le plus marquant de tout le document."
      }
    },
    {
      "id": "f83fbfb2-a537-43b3-82ae-11724272acce",
      "label": "Le vêtement fluo dans la foule",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous attendez sur le quai d'une gare bondée où des centaines de voyageurs habillés en noir, gris ou beige font les cent pas. Soudain, une personne passe avec une veste jaune fluo éclatante. Plus tard, si l'on vous demande comment était habillée la foule, c'est la seule tenue dont vous pourrez vous rappeler précisément.",
        "Processus mental": "En sortant de l'uniformité visuelle ambiante, la veste fluo devient un élément isolé. Le cerveau capte ce contraste et l'enregistre en priorité, reléguant le reste du décor dans un flou indifférencié."
      }
    },
    {
      "id": "5e2587e9-1a9c-43c6-91fe-0cf630db0cdc",
      "label": "Le prix en rouge",
      "category": "Exemple",
      "properties": {
        "prop_1": "Dans un rayon de supermarché où tous les étiquetages des prix sont imprimés sur des étiquettes blanches identiques, un seul produit affiche un prix en gros feutre rouge fluo. C'est le seul article dont vous retiendrez le prix en sortant du magasin.",
        "Le processus mental (Effet von Restorff)": "",
        "prop_3": "L'élément qui rompt l'uniformité visuelle capte instantanément toute votre attention et se grave durablement dans votre mémoire, éclipsant le reste."
      }
    },
    {
      "id": "487b44eb-fb59-43dd-b4c4-5199386e83ca",
      "label": "L'anecdote",
      "category": "Exemple",
      "properties": {
        "Vous assistez à une longue réunion où un collègue présente des statistiques compliquées sur la gestion du temps en entreprise. Vous écoutez distraitement, jusqu'au moment où il prend un exemple précis": "\"Par exemple, si l'un de vous a déjà galéré à gérer un projet de dernière minute en solo la semaine dernière...\" Vous repensez immédiatement à votre propre galère de mardi dernier. En sortant de la réunion, c'est le seul point de toute la présentation dont vous vous souvenez dans les moindres détails.",
        "prop_2": "Dès que l'information fait écho à votre vécu, votre cerveau active votre \"soi\" comme point de repère central."
      }
    },
    {
      "id": "e248aa10-f2b3-4c59-8b69-4173b0432247",
      "label": "La description d'un symptôme",
      "category": "Exemple",
      "properties": {
        "Vous lisez un article de santé sur les causes de la fatigue chronique. Soudain, vous tombez sur la ligne": "\"Une sensation de lourdeur dans les jambes en fin de journée, particulièrement si vous avez l'habitude de piétiner au travail.\" Vous pensez immédiatement à vos propres journées éreintantes. Le soir venu, c'est le seul symptôme dont vous vous souvenez par cœur.",
        "prop_2": "En croisant un détail qui résonne directement avec votre propre quotidien, votre cerveau cesse de traiter l'information comme une donnée abstraite et l'associe à votre propre vécu, la rendant instantanément inoubliable."
      }
    },
    {
      "id": "434d241e-e0d0-4fc0-a957-911c42f0d0b4",
      "label": "Le choix du prénom",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous lisez un roman avec de nombreux personnages dont vous oubliez constamment les noms au fil des chapitres. Tout à coup, l'auteur introduit un personnage secondaire qui porte votre propre prénom (ou celui de votre enfant/conjoint). Quelques jours plus tard, alors que les autres personnages vous sortent de la tête, vous vous souvenez précisément de toutes les péripéties de celui qui partageait ce nom.",
        "prop_2": "Votre cerveau est câblé pour s'intéresser en priorité à tout ce qui le touche de près ou de loin. Le lien direct avec votre identité crée un ancrage mémoriel ultra-puissant."
      }
    },
    {
      "id": "fd90ba1b-5d2c-4a3c-9620-073ca6512efb",
      "label": "Le numéro de téléphone",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous connaissez par cœur le numéro de téléphone fixe de vos parents depuis l'enfance, mais vous êtes totalement incapable de réciter le numéro de votre propre partenaire avec qui vous vivez pourtant depuis des années. Si votre téléphone portable n'a plus de batterie, vous êtes bloqué car vous ne l'avez jamais mémorisé.",
        "Puisque le répertoire du smartphone stocke l'information de manière infaillible et permanente, le cerveau refuse d'investir de l'énergie pour l'apprendre. Il a remplacé la donnée par un raccourci": "\"C'est dans mes contacts\"."
      }
    },
    {
      "id": "2b19f867-1a97-4ead-863d-2f459131c023",
      "label": "La recette de cuisine",
      "category": "Exemple",
      "properties": {
        "Vous avez préparé un gâteau absolument délicieux le mois dernier en suivant une recette trouvée sur un blog culinaire, que vous avez soigneusement enregistrée dans vos favoris internet. Aujourd'hui, on vous demande comment vous avez fait": "impossible de vous rappeler les proportions exactes de sucre ou de beurre. Vous êtes obligé de rouvrir la page web.",
        "prop_2": "Le cerveau externalise la charge mémorielle vers le stockage numérique. Il ne retient pas le contenu de la recette, mais l'existence du lien ou le nom du site web, créant une dépendance totale à l'outil technologique."
      }
    },
    {
      "id": "45407bf6-a4f5-434f-8e79-328cb4187bf8",
      "label": "Le GPS vs. Boussole intérieure",
      "category": "Exemple",
      "properties": {
        "Vous devez vous rendre à un nouveau rendez-vous dans une ville voisine. Autrefois, vous auriez imprimé un plan ou mémorisé les principales étapes du trajet. Aujourd'hui, vous tapez simplement l'adresse sur votre application GPS et vous vous laissez guider passivement. Une semaine plus tard, si on vous demande le chemin, vous en êtes incapable": "votre cerveau n'a pas enregistré le parcours, sachant pertinemment que le smartphone s'en chargera pour vous à nouveau.",
        "Le processus mental": "",
        "L'externalisation de la mémoire": "Face à une information disponible en permanence à l'extérieur, le cerveau fait une économie d'énergie cognitive.",
        "Le stockage de l'indice": "Au lieu de mémoriser le contenu (le chemin, la date, la formule), il retient uniquement la porte d'accès (où chercher, quoi taper).",
        "Le résultat": "Une amnésie immédiate de la réalité brute, compensée par une cartographie numérique externe."
      }
    },
    {
      "id": "809b6f29-8cfc-4ff6-ac31-ba4503c8729b",
      "label": "Le piège du genre",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous lisez le compte-rendu d'un procès où un(e) avocat(e) brillant(e) a magistralement démonté l'accusation pour sauver son client. Le texte ne précise pas explicitement son genre, mais mentionne des détails neutres. Plus tard, vous racontez l'histoire à un ami en employant systématiquement le pronom \"il\" et en qualifiant l'avocat d'un ton \"très autoritaire\", alors que le texte original décrivait une avocate calme et méthodique.",
        "prop_2": "Le cerveau associe spontanément la figure d'autorité et de plaidoirie au stéréotype masculin. Il complète automatiquement les \"trous\" de la mémoire en s'appuyant sur des clichés culturels bien ancrés."
      }
    },
    {
      "id": "b900e969-eeb7-4f02-b9a4-9405f044abc3",
      "label": "Le médecin et l'infirmière",
      "category": "Exemple",
      "properties": {
        "prop_1": "Dans un hôpital, vous assistez à une scène où une femme en blouse blanche donne des instructions à un homme en tunique médicale. Quelques heures plus tard, on vous demande qui s'occupait du patient. Vous répondez machinalement que le médecin était l'homme et l'infirmière la femme, alors que c'était exactement l'inverse.",
        "prop_2": "La hiérarchie des rôles médicaux est passée au filtre des stéréotypes de genre traditionnels. Votre cerveau a \"corrigé\" la réalité pour la faire entrer dans le schéma mental le plus prévisible et habituel."
      }
    },
    {
      "id": "5287b7fa-629e-414d-bd0d-d47d2668491d",
      "label": "Le look du PDG",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous participez à une visioconférence avec le directeur d'une grande entreprise technologique. Il porte un sweat-shirt à capuche basique et des baskets usées. Le lendemain, lorsque vous décrivez sa tenue à un collègue, vous soutenez qu'il portait \"un costume-cravate impeccable sur mesure\".",
        "prop_2": "L'image mentale classique associée au statut de \"PDG\" a totalement écrasé la perception visuelle réelle. Le cerveau privilégie le stéréotype du costume de direction plutôt que d'accepter une incohérence par rapport à sa grille de lecture habituelle."
      }
    },
    {
      "id": "d601edb6-9e82-4da7-ad11-ba904f4d5c28",
      "label": "La chanson publicitaire",
      "category": "Exemple",
      "properties": {
        "prop_1": "Au début, vous détestez profondément la musique agaçante d'une publicité locale qui passe en boucle à la radio tous les matins sur le chemin du travail. Mais après trois semaines d'écoute quotidienne, vous vous surprenez à fredonner l'air sous la douche, et vous finissez même par trouver le morceau \"plutôt sympa\".",
        "La réduction de l'inconnu": "À chaque répétition, la nouveauté et le danger perçu du stimulus diminuent. Le cerveau s'habitue sans effort conscient.",
        "Le confort de la familiarité": "Ce qui est familier devient, pour le cerveau, plus sûr et donc plus agréable à traiter.",
        "Le résultat": "Votre avis initial bascule du rejet à l'adhésion, uniquement grâce à la répétition de l'exposition."
      }
    },
    {
      "id": "96427619-4942-48d1-ba72-ca03089ba627",
      "label": "L'effet de mode",
      "category": "Exemple",
      "properties": {
        "prop_1": "Lorsque la mode des chaussures imposantes et massives (type dad shoes) est sortie, vous avez trouvé ça affreux et totalement ridicule. Pourtant, en les voyant portées partout autour de vous — dans la rue, sur les réseaux sociaux, en vitrine — de manière quotidienne pendant des mois, votre regard s'est apprivoisé. Finalement, vous finissez par vous en acheter une paire en vous disant que \"c'est tendance\".",
        "prop_2": "À force d'être confronté visuellement à un objet, le cerveau assimile la nouveauté choquante à de la familiarité. L'esthétique n'a pas changé, mais votre tolérance et votre appréciation se sont construites par la simple force de la répétition."
      }
    },
    {
      "id": "8390ce7c-885a-4595-b25a-8ef6e979b230",
      "label": "Le choix du vin",
      "category": "Exemple",
      "properties": {
        "prop_1": "Devant le rayon des vins, vous devez choisir une bouteille au hasard parmi des dizaines de références que vous ne connaissez pas. Sans trop réfléchir, votre main se tend vers une bouteille dont l'étiquette vous dit vaguement quelque chose, sans que vous puissiez l'expliquer. En y repensant, c'est simplement parce que vous aviez aperçu cette même étiquette sur une affiche publicitaire dans le métro deux semaines plus tôt.",
        "prop_2": "La familiarité visuelle crée un faux sentiment de confiance et de sécurité. Le cerveau privilégie l'option qu'il a déjà rencontrée, l'assimilant inconsciemment à un choix de meilleure qualité ou \"plus sûr\" que l'inconnu total."
      }
    },
    {
      "id": "bd9ea4aa-572f-49d2-b4c4-a611d3dc8e47",
      "label": "La voiture rouge",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous venez d'acheter une petite voiture citadine d'un rouge très spécifique. Le lendemain, en allant au travail, vous avez l'impression que la route est remplie exactement du même modèle et de la même couleur, alors que vous n'en aviez jamais remarqué une seule auparavant.",
        "Le processus mental (Phénomène de Baader-Meinhof)": "",
        "L'activation de l'attention": "Votre cerveau a enregistré une nouvelle information prioritaire (votre nouvel achat).",
        "Le filtre de sélection": "Il se met à repérer et à sur-analyser activement ce stimulus précis dans votre environnement, là où il l'ignorait complètement auparavant.",
        "Le résultat": "L'objet n'est pas devenu plus fréquent dans la réalité ; c'est votre cerveau qui est désormais hyper-sensibilisé à sa présence."
      }
    },
    {
      "id": "3712b1dd-259b-4026-a44c-322996f861eb",
      "label": "Le mot nouveau",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous apprenez un terme peu courant en feuilletant un livre un mardi (par exemple, le mot \"sérendipité\"). Le jeudi suivant, vous l'entendez prononcé par un journaliste à la télévision, puis vous le lisez dans un article de journal le samedi. Vous pensez à une coïncidence cosmique ou à un signe du destin.",
        "prop_2": "Ce mot passait très probablement inaperçu sous vos yeux ou vos oreilles toutes les semaines auparavant, mais votre cerveau, fraîchement \"programmé\" pour le reconnaître, le sort instantanément du bruit ambiant pour le porter à votre conscience."
      }
    },
    {
      "id": "2719a571-34e1-41e5-9649-61570c3ecd98",
      "label": "Le prénom rare",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous choisissez un prénom un peu original pour votre nouveau-né, persuadé qu'il sera unique à l'école. Dès la semaine de la rentrée des classes, vous entendez ce même prénom dans la bouche de deux mères au parc, puis vous le lisez sur le faire-part de voisins. Vous avez l'impression que la terre entière a eu la même idée.",
        "prop_2": "Le prénom n'a pas subitement envahi la population. C'est simplement que votre esprit est désormais câblé pour l'isoler et l'identifier immédiatement au milieu de centaines d'autres prénoms qu'il continue d'ignorer royalement."
      }
    },
    {
      "id": "a3dfd84a-d10a-48f2-bc67-d979b73c3b59",
      "label": "Le violoniste du métro",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un grand musicien joue des partitions complexes de Bach sur un violon hors de prix dans une station de métro bondée aux heures de pointe, habillé de façon simple. Presque tout le monde l'ignore et jette à peine quelques pièces en passant. Pourtant, le même musicien, jouant exactement les mêmes morceaux sur la même scène d'une prestigieuse salle de concert philharmonique avec un billet à 100 euros, déclenche une standing ovation.",
        "L'influence du décor": "Le cerveau n'évalue pas la valeur intrinsèque d'une chose de manière objective ; il s'appuie massivement sur les indices du cadre environnant (le lieu, les codes sociaux, l'ambiance).",
        "Le biais d'évaluation": "Dans le métro, le contexte de \"bruit et de transport\" déclenche un réflexe d'évitement. Dans la salle de concert, le contexte de \"prestige\" conditionne l'admiration.",
        "Le résultat": "La perception de la qualité de la musique est totalement modifiée par le simple changement de décor."
      }
    },
    {
      "id": "232ed07f-a8db-4d7b-ba17-ce2c32e0fcc2",
      "label": "Le faux air conditionné",
      "category": "Exemple",
      "properties": {
        "prop_1": "En plein hiver, vous entrez dans une salle de réunion où la température affiche pourtant un 20 °C tout à fait normal. Mais la pièce est décorée avec des affiches murales géantes représentant des plages tropicales de sable fin avec des cocotiers. Au bout de vingt minutes, plusieurs collaborateurs se plaignent qu'il fait \"trop chaud\" et demandent à baisser le chauffage.",
        "prop_2": "Le cerveau intègre les indices visuels de l'environnement pour ajuster ses sensations physiques. L'évocation visuelle de la chaleur trompe la perception thermique réelle des occupants."
      }
    },
    {
      "id": "b6b65dc8-1835-488c-8609-2cdd9a1474a5",
      "label": "Le vin de table étiqueté grand cru",
      "category": "Exemple",
      "properties": {
        "prop_1": "Lors d'un dîner",
        "prop_2": "on vous sert deux verres de vin rouge en vous affirmant que l'un est une bouteille de supermarché à 3 euros et l'autre un grand cru classé hors de prix. Vous trouvez le second infiniment plus raffiné",
        "prop_3": "complexe et subtil. En réalité",
        "prop_4": "les deux verres provenaient de la même et unique bouteille d'entrée de gamme."
      }
    },
    {
      "id": "dc7ba9a8-482b-4549-be3e-b883b0c202d5",
      "label": "Échec de récupération",
      "category": "Biais",
      "properties": {
        "prop_1": "Phénomène où une information est bien stockée dans votre mémoire à long terme mais où votre cerveau est incapable de la retrouver car il manque un point d'ancrage",
        "prop_2": "un signal ou un indice extérieur pour la réveiller. Dès que l'indice adéquat réapparaît",
        "prop_3": "le souvenir ressurgit instantanément.",
        "prop_4": "Phénomène où une information est bien stockée dans votre mémoire à long terme",
        "prop_5": "mais où votre cerveau est incapable de la retrouver car il manque un point d'ancrage"
      }
    },
    {
      "id": "9cb8b596-4608-4f7e-a276-4d78a23dd463",
      "label": "Le mot sur le bout de la langue",
      "category": "Exemple",
      "properties": {
        "Vous discutez avec un ami et vous voulez absolument citer le titre d'un film que vous adorez et avez vu dix fois. Impossible de mettre la main dessus": "vous savez qu'il est là",
        "prop_2": "mais le titre refuse obstinément de venir. Dix minutes plus tard",
        "prop_3": "alors que vous êtes passé à un autre sujet",
        "votre ami lâche": "\"Ah oui",
        "prop_5": "avec l'acteur principal qui jouait dans Matrix !\". Immédiatement",
        "prop_6": "le titre complet du film vous revient à l'esprit."
      }
    },
    {
      "id": "7c059611-6ca1-40ba-af5d-147154f11a8c",
      "label": "Le cours d'histoire bloqué dans la classe",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous révisez un examen d'histoire chez vous dans votre chambre et vous maîtrisez parfaitement vos dates. Le lendemain",
        "prop_2": "assis à votre table de composition dans la salle de classe",
        "panique": "impossible de vous rappeler la date exacte d'un traité historique crucial. Vous sortez de l'épreuve frustré",
        "prop_4": "et dès que vous franchissez la porte de l'école en retrouvant vos camarades",
        "prop_5": "la date vous revient en tête d'un coup."
      }
    },
    {
      "id": "cfddea67-a1fd-4a7b-8b70-2263c2431535",
      "label": "Le nom de l'ancienne collègue",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous croisez par surprise une personne dans les allées d'un supermarché. Son visage vous dit vaguement quelque chose",
        "prop_2": "vous savez que vous avez travaillé ensemble",
        "prop_3": "mais son prénom vous échappe complètement malgré vos efforts. Le soir",
        "prop_4": "en repensant à votre journée",
        "l'image de la machine à café de votre ancien bureau vous revient": "soudain",
        "prop_6": "son prénom surgit en une fraction de seconde."
      }
    },
    {
      "id": "e57a7e61-89e7-4ce2-8b1b-9cfb437831f2",
      "label": "Le jour de pluie nostalgique",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous vous réveillez un dimanche matin avec une grosse baisse de moral, sous une pluie battante et un ciel totalement gris. En buvant votre café, vous commencez à repenser à vos anciens emplois ou à vos relations passées, et vous n'avez en tête que les échecs, les disputes et les moments de solitude. Le lendemain, requinqué par le soleil et une excellente nouvelle professionnelle, vous repensez aux mêmes périodes de votre vie, mais cette fois, seuls les éclats de rire, les réussites et les bons moments vous reviennent à l'esprit."
      }
    },
    {
      "id": "d6ec3324-a41e-468e-888f-7468fd1e6943",
      "label": "La dispute qui assombrit les vacances",
      "category": "Exemple",
      "properties": {
        "prop_1": "Au beau milieu d'une semaine de vacances pourtant globalement idyllique",
        "prop_2": "vous avez une vive discussion avec votre partenaire pour une broutille. Pendant les deux heures qui suivent",
        "prop_3": "alors que vous ruminez votre colère",
        "prop_4": "vous êtes convaincu(e) que ce voyage est \"un ratage total\"",
        "prop_5": "vous remémorant tous les petits tracas",
        "prop_6": "les retards de train et les mauvais restaurants des jours précédents. Le soir",
        "prop_7": "après une réconciliation chaleureuse",
        "prop_8": "ces contrariétés s'effacent et vous ne retenez plus que la beauté des paysages."
      }
    },
    {
      "id": "28e81687-1057-4209-8b9a-a41ec850d283",
      "label": "L'optimisme de la réussite",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous venez d'obtenir une promotion importante au travail. Porté par cette vague d'euphorie",
        "prop_2": "vous vous remémorez vos années d'études ou vos débuts professionnels difficiles. Étrangement",
        "prop_3": "les galères financières",
        "prop_4": "les nuits blanches de révision et les échecs cuisants aux examens vous apparaissent sous un jour \"nostalgique et attendrissant\"",
        "prop_5": "presque comme une aventure exaltante",
        "prop_6": "alors que vous les aviez vécus comme un enfer absolu sur le moment."
      }
    },
    {
      "id": "57a3b8bc-1da7-4329-ba40-a216e3e3db02",
      "label": "Le mot nouveau qu'on entend partout",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un ami vous parle d'un mot qu'il vient d'apprendre",
        "prop_2": "disons « ubiquiste ». Le lendemain",
        "prop_3": "vous l'entendez à la radio",
        "prop_4": "puis vous le croisez dans un article."
      }
    },
    {
      "id": "2b5df9a5-eb4e-46df-9ad1-18ef1a5ea0d9",
      "label": "La voiture qu'on vient d'acheter",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après avoir acheté un modèle de voiture précis",
        "prop_2": "vous avez l'impression de croiser exactement le même modèle à chaque coin de rue."
      }
    },
    {
      "id": "3bcc6af4-75be-4e16-a3bd-d95442e2efa5",
      "label": "Le diagnostic médical qu'on découvre",
      "category": "Exemple",
      "properties": {
        "prop_1": "On vous diagnostique une maladie rare et",
        "prop_2": "dans les jours qui suivent",
        "prop_3": "vous avez l'impression que tout le monde en parle ou en est atteint."
      }
    },
    {
      "id": "296edcc7-e9cb-4676-a6b1-e032744b8514",
      "label": "Faire les courses le ventre plein",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous faites vos courses juste après un repas copieux et achetez très peu de nourriture",
        "prop_2": "convaincu que cela suffira pour la semaine."
      }
    },
    {
      "id": "ed654def-d208-439f-805c-257d7dcf39ef",
      "label": "La résolution prise à froid",
      "category": "Exemple",
      "properties": {
        "prop_1": "En pleine forme et motivé",
        "prop_2": "vous planifiez un programme sportif intensif pour les prochains mois",
        "prop_3": "certain de tenir la cadence."
      }
    },
    {
      "id": "94367762-93ab-43dc-803e-035ae13f81c4",
      "label": "Négocier un contrat sans colère",
      "category": "Exemple",
      "properties": {
        "prop_1": "Calme et détendu",
        "prop_2": "vous acceptez à l'avance une clause qui vous semble mineure",
        "prop_3": "sans imaginer à quel point elle vous frustrera une fois appliquée."
      }
    },
    {
      "id": "97107666-dfc7-44f4-bb87-a1e97993812b",
      "label": "Le médecin qui ne vaccine pas",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un parent refuse de faire vacciner son enfant par peur d'un effet secondaire rare",
        "prop_2": "alors que ne pas vacciner expose l'enfant à un risque bien plus grand de contracter la maladie."
      }
    },
    {
      "id": "9f96d8d1-a87e-4cdb-855c-1151bc9ef73f",
      "label": "Le sauveteur qui hésite à intervenir",
      "category": "Exemple",
      "properties": {
        "prop_1": "Face à une personne en difficulté",
        "prop_2": "un témoin hésite à porter secours par peur de mal faire",
        "prop_3": "alors que ne rien faire est presque certainement plus dommageable."
      }
    },
    {
      "id": "f0e3ebe9-7167-4f7b-920e-88c05aff42b7",
      "label": "L'investisseur qui ne vend pas",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un investisseur garde une action qu'il sait vouée à perdre de la valeur plutôt que de la vendre",
        "prop_2": "car vendre \"activement\" à perte lui semble pire que simplement ne rien faire."
      }
    },
    {
      "id": "d7b0f171-3d3d-4359-8e53-68922f29605d",
      "label": "Le test médical rare",
      "category": "Exemple",
      "properties": {
        "prop_1": "On vous annonce qu'un test de dépistage est positif pour une maladie rare fiable à 99%",
        "prop_2": "et vous en concluez que vous avez presque certainement la maladie."
      }
    },
    {
      "id": "705edaf0-7a28-47a9-9dbc-736332adc2b9",
      "label": "L'ingénieur discret et méticuleux",
      "category": "Exemple",
      "properties": {
        "prop_1": "On vous décrit une personne calme",
        "prop_2": "méticuleuse et passionnée de détails",
        "prop_3": "et vous devinez spontanément qu'elle est bibliothécaire plutôt qu'agricultrice."
      }
    },
    {
      "id": "c851f2ae-7e72-4225-86c3-397ba0171948",
      "label": "La peur de l'attaque de requin",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après un reportage sur une attaque de requin",
        "prop_2": "vous évitez de vous baigner en mer",
        "prop_3": "convaincu que le risque est élevé."
      }
    },
    {
      "id": "42388962-cd64-427e-9a74-d65dcf490997",
      "label": "La liste de courses avec un éléphant rose",
      "category": "Exemple",
      "properties": {
        "prop_1": "Dans une liste de mots à mémoriser",
        "prop_2": "celui qui décrit un « éléphant rose à roulettes » reste gravé",
        "prop_3": "alors que les mots ordinaires environnants s'effacent vite."
      }
    },
    {
      "id": "b7ad94d5-bde7-43b1-ae57-24127bfee0dc",
      "label": "Le collègue au costume improbable",
      "category": "Exemple",
      "properties": {
        "prop_1": "Des années après",
        "prop_2": "vous vous souvenez précisément du jour où un collègue est venu travailler en costume de super-héros",
        "prop_3": "mais plus du contenu de la réunion."
      }
    },
    {
      "id": "301eda22-a8e5-4775-8efc-d0cb8533644d",
      "label": "La blague absurde retenue par cœur",
      "category": "Exemple",
      "properties": {
        "prop_1": "Sur dix blagues entendues à un dîner",
        "prop_2": "c'est la plus absurde et improbable que vous racontez encore des mois plus tard."
      }
    },
    {
      "id": "29842980-9d26-49d0-aa07-17d2d0616851",
      "label": "La règle de grammaire apprise en chanson",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous retenez sans effort une règle de conjugaison présentée sous forme de comptine amusante",
        "prop_2": "alors que la version du manuel scolaire vous avait complètement échappé."
      }
    },
    {
      "id": "5840f8bf-9512-4559-addb-42834ca966c1",
      "label": "La publicité qu'on n'oublie pas",
      "category": "Exemple",
      "properties": {
        "prop_1": "Des années après l'avoir vue une seule fois",
        "prop_2": "vous vous souvenez parfaitement d'une publicité drôle",
        "prop_3": "alors que des dizaines d'autres publicités sérieuses sont oubliées."
      }
    },
    {
      "id": "b097b1f4-de92-492e-9ae0-f0484b3dc6f2",
      "label": "L'anecdote du prof qui plaisante",
      "category": "Exemple",
      "properties": {
        "prop_1": "Le seul cours dont vous vous souvenez précisément dix ans après est celui où le professeur avait fait une blague mémorable en introduction."
      }
    },
    {
      "id": "916c5531-8b15-4c29-8d11-a80fdc4aa2bb",
      "label": "Le mode d'emploi en pictogrammes",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous suivez sans difficulté une notice de montage illustrée uniquement de schémas",
        "prop_2": "alors qu'une version purement textuelle du même mode d'emploi vous aurait perdu."
      }
    },
    {
      "id": "3c67f0ae-d8bd-4eeb-a026-b72382ad1cb8",
      "label": "Le visage reconnu, le nom oublié",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous reconnaissez immédiatement le visage d'une personne croisée une seule fois il y a des années",
        "prop_2": "mais êtes incapable de retrouver son nom."
      }
    },
    {
      "id": "3e18c8e6-12af-4894-ba92-f7c55ae3e60f",
      "label": "Le cours retenu grâce aux schémas",
      "category": "Exemple",
      "properties": {
        "prop_1": "Vous vous souvenez précisément d'un concept complexe grâce au schéma dessiné au tableau",
        "prop_2": "bien plus que des explications orales qui l'accompagnaient."
      }
    },
    {
      "id": "5a11335c-d4be-4ddf-8454-12f8eab69b0f",
      "label": "Une critique parmi dix compliments",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après une présentation très bien reçue",
        "prop_2": "vous ne retenez que l'unique remarque négative formulée par un participant",
        "prop_3": "et l'événement vous semble globalement raté."
      }
    },
    {
      "id": "a2dcb77b-d0e3-438a-a557-1fe2b4ae6e75",
      "label": "La note négative sur dix avis positifs",
      "category": "Exemple",
      "properties": {
        "prop_1": "Avant d'acheter un produit très bien noté",
        "prop_2": "vous lisez en priorité les rares avis négatifs",
        "prop_3": "qui influencent votre décision plus que la majorité des avis positifs."
      }
    },
    {
      "id": "711d464f-e414-4459-91a6-50fbc252e667",
      "label": "La journée gâchée par un incident",
      "category": "Exemple",
      "properties": {
        "prop_1": "Une journée globalement agréable est retenue comme « mauvaise » à cause d'un seul incident désagréable survenu le matin."
      }
    },
    {
      "id": "4ac37c01-083d-421f-9497-14a00099eb94",
      "label": "Le prix barré en solde",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un vêtement affiché à 150 € barré et vendu à 90 € semble être une bonne affaire",
        "prop_2": "même si sa valeur réelle est plus proche de 60 €."
      }
    },
    {
      "id": "fdba5f23-422f-4746-a868-6705571ee4cf",
      "label": "La première offre dans une négociation salariale",
      "category": "Exemple",
      "properties": {
        "prop_1": "Dans une négociation",
        "prop_2": "la première somme proposée par l'employeur oriente fortement l'ensemble des échanges suivants",
        "prop_3": "même si elle est volontairement basse."
      }
    },
    {
      "id": "85ddc2bc-860c-4988-82b5-960598217975",
      "label": "La roue truquée et l'estimation en pourcentage",
      "category": "Exemple",
      "properties": {
        "prop_1": "Des participants font tourner une roue truquée donnant un chiffre au hasard",
        "puis on leur demande d'estimer le pourcentage de pays africains à l'ONU": "leur réponse est influencée par le chiffre tiré",
        "prop_3": "pourtant sans rapport."
      }
    },
    {
      "id": "e12cc8a1-822e-4dab-89a6-5680fd80e60a",
      "label": "La rumeur qui persiste malgré les preuves",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après avoir cru une rumeur sur un collègue",
        "prop_2": "vous continuez à vous méfier de lui même après avoir reçu des preuves claires de son innocence."
      }
    },
    {
      "id": "0cef0a37-4fd4-42a8-9988-b54435be714f",
      "label": "Le pronostic sportif jamais actualisé",
      "category": "Exemple",
      "properties": {
        "prop_1": "Convaincu qu'une équipe va perdre en début de saison",
        "prop_2": "vous continuez à sous-estimer ses chances de victoire malgré une série de bons résultats."
      }
    },
    {
      "id": "4acf868c-4abb-4a95-a39b-44098961a586",
      "label": "L'investisseur qui ignore les bons résultats",
      "category": "Exemple",
      "properties": {
        "prop_1": "Persuadé qu'une entreprise est un mauvais investissement",
        "prop_2": "un actionnaire continue de sous-évaluer son action malgré plusieurs trimestres de résultats excellents."
      }
    },
    {
      "id": "48485a04-cc55-4a0b-a128-78ea22524d02",
      "label": "Le prix moyen qui paraît cher",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après avoir consulté un menu très cher",
        "prop_2": "un plat à prix moyen dans un autre restaurant paraît soudain bon marché",
        "prop_3": "alors qu'il est objectivement dans la moyenne."
      }
    },
    {
      "id": "82978103-828b-4785-ae12-184b888c42a3",
      "label": "Le poids du sac",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après avoir porté un sac très lourd",
        "prop_2": "un sac de poids moyen semble étonnamment léger en comparaison",
        "prop_3": "alors que son poids réel n'a pas changé."
      }
    },
    {
      "id": "f59c1b12-1d70-4882-831f-451177fc3dba",
      "label": "L'appartement qui semble spacieux",
      "category": "Exemple",
      "properties": {
        "prop_1": "Après avoir visité un studio minuscule",
        "prop_2": "un appartement de taille modeste paraît soudain spacieux et confortable en comparaison."
      }
    },
    {
      "id": "fcbbf0bb-421e-4e4e-a5cd-23cbd27f71bf",
      "label": "Choisir entre deux téléviseurs côte à côte",
      "category": "Exemple",
      "properties": {
        "prop_1": "En magasin",
        "prop_2": "deux téléviseurs affichés côte à côte semblent très différents en qualité d'image",
        "prop_3": "mais une fois l'un d'eux installé seul chez vous",
        "prop_4": "la différence devient à peine perceptible."
      }
    },
    {
      "id": "722d90f3-8335-4481-8721-b8235bd9e774",
      "label": "Le choix de poste entre deux offres d'emploi",
      "category": "Exemple",
      "properties": {
        "prop_1": "En comparant deux offres d'emploi ligne par ligne",
        "prop_2": "un léger écart de salaire semble déterminant",
        "prop_3": "alors qu'il aurait été jugé insignifiant si chaque offre avait été évaluée séparément."
      }
    },
    {
      "id": "f2955cd0-8238-4a60-af0d-e727c713fa87",
      "label": "Deux appartements presque identiques",
      "category": "Exemple",
      "properties": {
        "prop_1": "En visitant deux appartements l'un après l'autre",
        "prop_2": "une différence mineure de luminosité devient le critère décisif",
        "prop_3": "alors qu'elle n'aurait pas été remarquée en évaluant chaque bien séparément."
      }
    },
    {
      "id": "a016ede8-e498-4d52-bb94-daced971ab17",
      "label": "Le salaire perçu comme seule source de bonheur",
      "category": "Exemple",
      "properties": {
        "prop_1": "En imaginant sa vie avec un salaire deux fois plus élevé",
        "prop_2": "on la projette comme bien plus heureuse",
        "prop_3": "en négligeant tous les autres facteurs (santé",
        "prop_4": "relations",
        "prop_5": "stress) qui la composent réellement."
      }
    },
    {
      "id": "f87477e7-b30d-4689-acfb-786a8b9aac4b",
      "label": "Le déménagement vers une région ensoleillée",
      "category": "Exemple",
      "properties": {
        "prop_1": "On imagine qu'un déménagement vers une région au climat plus agréable rendra bien plus heureux",
        "prop_2": "en oubliant que le quotidien restera largement similaire sur les autres plans."
      }
    },
    {
      "id": "38367551-b87a-48c6-932e-9f0119f5ba59",
      "label": "La note d'examen jugée décisive",
      "category": "Exemple",
      "properties": {
        "prop_1": "Avant un examen important",
        "prop_2": "un étudiant est convaincu qu'un échec ruinerait définitivement son avenir",
        "prop_3": "en focalisant toute son anxiété sur ce seul événement."
      }
    },
    {
      "id": "83770309-89aa-48a0-b1d5-3b0aa128301c",
      "label": "Le steak 90% maigre",
      "category": "Exemple",
      "properties": {
        "prop_1": "Une viande présentée comme « 90% sans matière grasse » est perçue plus favorablement que la même viande présentée comme « contenant 10% de matière grasse »",
        "prop_2": "alors que l'information est strictement identique."
      }
    },
    {
      "id": "7119d0e9-4a8f-429d-92bd-debe9583685e",
      "label": "L'opération chirurgicale à risque",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un patient accepte plus facilement une opération présentée avec « 90% de chances de survie » qu'avec « 10% de risque de décès »",
        "prop_2": "bien que les deux formulations décrivent exactement le même risque."
      }
    },
    {
      "id": "c4f38c54-57c0-4ada-8590-c3052a52eec9",
      "label": "Le taux de réussite scolaire",
      "category": "Exemple",
      "properties": {
        "prop_1": "Une école affichant « 95% de réussite au bac » paraît plus attractive qu'une école affichant « 5% d'échec au bac »",
        "prop_2": "alors que les deux chiffres décrivent la même réalité."
      }
    },
    {
      "id": "304206a3-0748-4bd9-925f-4917d32d4a12",
      "label": "L'augmentation de salaire",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un salarié se réjouit d'une augmentation de salaire de 3%",
        "prop_2": "sans réaliser que l'inflation de 4% sur la même période fait en réalité baisser son pouvoir d'achat."
      }
    },
    {
      "id": "ea8aac12-a2cb-4ae1-8f84-1795af1e2784",
      "label": "Le prix d'achat comparé sur 20 ans",
      "category": "Exemple",
      "properties": {
        "prop_1": "On compare le prix d'une maison achetée il y a 20 ans à son prix actuel et on en conclut qu'elle a énormément pris de valeur",
        "prop_2": "sans ajuster ces montants à l'inflation cumulée sur la période."
      }
    },
    {
      "id": "275e864c-a0a0-467f-8c54-58a391ca44e2",
      "label": "Le bonus perçu comme un cadeau",
      "category": "Exemple",
      "properties": {
        "prop_1": "Un employé perçoit une prime exceptionnelle comme un vrai gain de pouvoir d'achat",
        "prop_2": "même durant une période de forte inflation qui annule en réalité une bonne partie de ce gain."
      }
    }
  ],
  "relationships": [
    {
      "id": "e_1_hxnm",
      "type": "IMPLIQUE",
      "source": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "target": "0353572f-acb4-4bbd-9637-94200f82a203",
      "properties": {
        "prop_1": "Notre cerveau est submergé d'informations et doit faire un tri (filtrer) pour ne retenir que ce qui a déjà été amorcé ou rendu familier par la répétition."
      }
    },
    {
      "id": "e_2_4okl",
      "type": "IMPLIQUE",
      "source": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "target": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "properties": {}
    },
    {
      "id": "e_3_14cj",
      "type": "IMPLIQUE",
      "source": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "target": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "properties": {}
    },
    {
      "id": "e_4_zerk",
      "type": "IMPLIQUE",
      "source": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "target": "1dc748db-5478-400d-aa95-199785e98217",
      "properties": {}
    },
    {
      "id": "e_5_08vy",
      "type": "IMPLIQUE",
      "source": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "target": "45bfbeeb-2b99-4a33-9287-ad42e28f440f",
      "properties": {}
    },
    {
      "id": "e_6_wqbs",
      "type": "IMPLIQUE",
      "source": "1970552a-548b-4504-a51c-01beb00e19c8",
      "target": "718d32be-7a70-4860-9588-f64db84a4baa",
      "properties": {}
    },
    {
      "id": "e_7_ooki",
      "type": "IMPLIQUE",
      "source": "1970552a-548b-4504-a51c-01beb00e19c8",
      "target": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "properties": {}
    },
    {
      "id": "e_8_awkv",
      "type": "IMPLIQUE",
      "source": "1970552a-548b-4504-a51c-01beb00e19c8",
      "target": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "properties": {}
    },
    {
      "id": "e_9_wglx",
      "type": "IMPLIQUE",
      "source": "1970552a-548b-4504-a51c-01beb00e19c8",
      "target": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "properties": {}
    },
    {
      "id": "e_10_dhtm",
      "type": "IMPLIQUE",
      "source": "1970552a-548b-4504-a51c-01beb00e19c8",
      "target": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "properties": {}
    },
    {
      "id": "e_11_kxqm",
      "type": "IMPLIQUE",
      "source": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "target": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "properties": {}
    },
    {
      "id": "e_12_mkwy",
      "type": "IMPLIQUE",
      "source": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "target": "95d91a65-c535-4061-8dd8-20c95f592579",
      "properties": {}
    },
    {
      "id": "e_13_5t1f",
      "type": "IMPLIQUE",
      "source": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "target": "c47cd210-ef57-461c-8d9b-f0903672ccb0",
      "properties": {}
    },
    {
      "id": "e_14_pj2s",
      "type": "IMPLIQUE",
      "source": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "target": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "properties": {}
    },
    {
      "id": "e_15_zgtk",
      "type": "IMPLIQUE",
      "source": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "target": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "properties": {}
    },
    {
      "id": "e_16_2unn",
      "type": "IMPLIQUE",
      "source": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "target": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "properties": {}
    },
    {
      "id": "e_17_v478",
      "type": "IMPLIQUE",
      "source": "69f2609d-6bd8-4f07-8a9a-ec7852826cda",
      "target": "66055844-7315-488f-b9ce-6639b03843ae",
      "properties": {}
    },
    {
      "id": "e_18_yj86",
      "type": "IMPLIQUE",
      "source": "69f2609d-6bd8-4f07-8a9a-ec7852826cda",
      "target": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "properties": {}
    },
    {
      "id": "e_19_ms4g",
      "type": "IMPLIQUE",
      "source": "69f2609d-6bd8-4f07-8a9a-ec7852826cda",
      "target": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "properties": {}
    },
    {
      "id": "e_20_sz8v",
      "type": "IMPLIQUE",
      "source": "69f2609d-6bd8-4f07-8a9a-ec7852826cda",
      "target": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "properties": {}
    },
    {
      "id": "e_21_vnc7",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "15c3f7ca-8cdb-4fa9-b1b7-ba16ac8d24c9",
      "properties": {}
    },
    {
      "id": "e_22_20eq",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "7e965bea-bdb8-4cb6-bc91-286842553f2d",
      "properties": {}
    },
    {
      "id": "e_23_f5ic",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "3b49c1e4-4920-49af-8022-b3326d69a01f",
      "properties": {}
    },
    {
      "id": "e_24_z2t1",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "56df17cc-8c0d-4b1c-b464-b555aca00d7d",
      "properties": {}
    },
    {
      "id": "e_25_ywam",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "bc000663-c8f9-43d2-928f-14b91e05283a",
      "properties": {}
    },
    {
      "id": "e_27_stb2",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "0c01e471-4ee9-49b7-ae81-1dd6f8e58b2d",
      "properties": {}
    },
    {
      "id": "e_28_vbjx",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "7ebf2ae1-a3cf-438a-b81f-0a2f657805f2",
      "properties": {}
    },
    {
      "id": "e_29_appy",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "566b5886-8d71-4c79-bacb-db7409de1bc1",
      "properties": {}
    },
    {
      "id": "e_30_zxmp",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "e2452e29-5028-4b41-bd7a-7d777413d6ac",
      "properties": {}
    },
    {
      "id": "e_31_9egx",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "fdb6afe1-b8f6-4ffc-8e22-7d9ea67aa000",
      "properties": {}
    },
    {
      "id": "e_32_r1yb",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "720469df-3e4c-4ed0-9167-1e4dc672ba5c",
      "properties": {}
    },
    {
      "id": "e_33_6uoa",
      "type": ".",
      "source": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "target": "a96e2b2a-c3b6-4991-abbe-0359e2cb26e7",
      "properties": {}
    },
    {
      "id": "e_34_bsux",
      "type": ".",
      "source": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "target": "b52ede92-d691-427e-946b-99ba85180f98",
      "properties": {}
    },
    {
      "id": "e_35_zc77",
      "type": ".",
      "source": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "target": "f1a0aebf-5120-422d-91d1-94aa7a1b1e18",
      "properties": {}
    },
    {
      "id": "e_36_f6nw",
      "type": ".",
      "source": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "target": "dcf4bea1-b835-468b-b928-b784883c2d9b",
      "properties": {}
    },
    {
      "id": "e_37_o9ze",
      "type": ".",
      "source": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "target": "aecbdedb-65ac-440e-9e62-64355a58c2cf",
      "properties": {}
    },
    {
      "id": "e_38_swfn",
      "type": ".",
      "source": "c579a650-6d64-44e9-a5ff-0202684ee599",
      "target": "4ccbb52c-98f7-4604-b27f-85e9abe48adf",
      "properties": {}
    },
    {
      "id": "e_39_wgw6",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "69c57704-7937-473a-a032-5c5a9076e850",
      "properties": {}
    },
    {
      "id": "e_40_mxjy",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "6e8bd7be-aa0b-4c30-be34-4e8e558a1a3a",
      "properties": {}
    },
    {
      "id": "e_41_0yu9",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "2e49f2a9-1663-4521-9265-6d22d8a27461",
      "properties": {}
    },
    {
      "id": "e_42_ai8t",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "0ee7a1e2-5173-4739-b56b-afffbb0376db",
      "properties": {}
    },
    {
      "id": "e_43_as8k",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "8bd69e1e-a737-4d0c-baf1-fc54d8d57024",
      "properties": {}
    },
    {
      "id": "e_44_it2p",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "ef012956-f53a-4782-ba19-7d48c3388ac5",
      "properties": {}
    },
    {
      "id": "e_45_1sd4",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "0ecdff02-eaaa-40d4-81a9-e24750909286",
      "properties": {}
    },
    {
      "id": "e_46_xatg",
      "type": ".",
      "source": "b6879047-c20a-44f4-bae0-d2adbc9a4a1a",
      "target": "cec82655-214a-4a30-9d0e-6f2cebdc567e",
      "properties": {}
    },
    {
      "id": "e_47_6pca",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "398f8bd7-ded0-4d82-a73c-804399cf9714",
      "properties": {}
    },
    {
      "id": "e_48_7hy2",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "cdfa96d8-bec2-4e8c-ae19-ee73f429c6e0",
      "properties": {}
    },
    {
      "id": "e_49_xmdi",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "ff3c42f0-97ed-4baf-8711-2fd2ae0e428d",
      "properties": {}
    },
    {
      "id": "e_50_fsca",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "73d930ff-6f13-4aa3-bb9f-bdd3166ca5df",
      "properties": {}
    },
    {
      "id": "e_51_imlz",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "db93c459-ea03-4030-8484-cbdf474e4de6",
      "properties": {}
    },
    {
      "id": "e_52_0ow2",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "8ece8c80-7c5c-4f99-966a-cde3a5f9ccac",
      "properties": {}
    },
    {
      "id": "e_53_yr30",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "f383f661-71d6-417a-bf59-fa6c7a7eccc3",
      "properties": {}
    },
    {
      "id": "e_54_bk54",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "affe4b23-15c1-4a95-9256-9abf00e210d3",
      "properties": {}
    },
    {
      "id": "e_55_l1mu",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "5551b7e8-df4f-4bb1-bae0-cede48ca2a5f",
      "properties": {}
    },
    {
      "id": "e_56_j354",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "22550712-c0f5-4ea1-9b2b-872322760b8f",
      "properties": {}
    },
    {
      "id": "e_57_y0ib",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "5d67d9f0-c95a-4320-8c04-7c003ae29626",
      "properties": {}
    },
    {
      "id": "e_58_k6er",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "a0a37709-4135-4a5e-9082-270f527711e5",
      "properties": {}
    },
    {
      "id": "e_59_mg9t",
      "type": ".",
      "source": "1dc748db-5478-400d-aa95-199785e98217",
      "target": "10e430a5-27ac-4144-8511-b1c45e0c823e",
      "properties": {}
    },
    {
      "id": "e_60_fc1e",
      "type": ".",
      "source": "45bfbeeb-2b99-4a33-9287-ad42e28f440f",
      "target": "917e6fde-e1b2-4e09-b94f-3d58616b0f2a",
      "properties": {}
    },
    {
      "id": "e_61_1y1k",
      "type": ".",
      "source": "45bfbeeb-2b99-4a33-9287-ad42e28f440f",
      "target": "33ac7838-50b5-4f79-839e-fde4c9f82726",
      "properties": {}
    },
    {
      "id": "e_62_oisq",
      "type": ".",
      "source": "45bfbeeb-2b99-4a33-9287-ad42e28f440f",
      "target": "54d5c0d1-2869-4a59-b54d-7a56bb87b137",
      "properties": {}
    },
    {
      "id": "e_63_0vyx",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "d8c3257d-e40a-4ca0-8128-3c977bbb531a",
      "properties": {}
    },
    {
      "id": "e_64_418y",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "f3fc29d7-18bb-401a-991f-b6b595259ab7",
      "properties": {}
    },
    {
      "id": "e_65_thmf",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "ac7aa519-2f9f-4b55-98c3-03ee5095e047",
      "properties": {}
    },
    {
      "id": "e_66_32gr",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "fd71f3d1-fcf0-43b0-b2e0-adf35ca3f5b2",
      "properties": {}
    },
    {
      "id": "e_67_8iuv",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "3a7ee8f1-5228-43b2-98ae-56e1e7365e82",
      "properties": {}
    },
    {
      "id": "e_68_enez",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "bda30ff5-fd0f-463f-b5f4-5425e8d8a9c3",
      "properties": {}
    },
    {
      "id": "e_69_bood",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "b74a5023-b8b6-4c93-b94b-07e053cc04e5",
      "properties": {}
    },
    {
      "id": "e_70_0grx",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "d48822be-bda0-410c-8694-a587817e5e00",
      "properties": {}
    },
    {
      "id": "e_71_cifu",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "e4277c4b-4ba0-4065-9bdf-f7c3d4456f8b",
      "properties": {}
    },
    {
      "id": "e_72_bcr7",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "ebcce980-e81f-4ea3-966b-696ea2d5b072",
      "properties": {}
    },
    {
      "id": "e_73_zq7z",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "eea34542-eff3-4657-b7db-9bdeb91b0626",
      "properties": {}
    },
    {
      "id": "e_74_jt9y",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "92967425-9ff3-4539-8358-de040ed20c6b",
      "properties": {}
    },
    {
      "id": "e_75_mf43",
      "type": ".",
      "source": "718d32be-7a70-4860-9588-f64db84a4baa",
      "target": "3e797d43-8e03-4e09-ab91-2b98037deec5",
      "properties": {}
    },
    {
      "id": "e_76_rfi8",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "e5674fcb-3ddb-4fa5-b466-a35f9d3e8f76",
      "properties": {}
    },
    {
      "id": "e_77_mztk",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "5da429b9-b472-4f1b-b48a-ffd9f88c4069",
      "properties": {}
    },
    {
      "id": "e_78_1a6w",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "85663ce3-9de1-44a6-8201-bbf3d4c6a5cb",
      "properties": {}
    },
    {
      "id": "e_79_iaap",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "f12e3b20-b30a-4924-97ef-62bd1960d69a",
      "properties": {}
    },
    {
      "id": "e_80_6knl",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "9f6618bd-35aa-4645-8941-1d7f0225cfad",
      "properties": {}
    },
    {
      "id": "e_81_cl81",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "4de4313a-3ac9-4699-8efd-0b270fcc07f0",
      "properties": {}
    },
    {
      "id": "e_82_1a9j",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "4381d222-4485-41e0-98d4-94a8ebcdf5be",
      "properties": {}
    },
    {
      "id": "e_83_46bu",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "c3661fee-68e7-4908-add6-72ae8c140e30",
      "properties": {}
    },
    {
      "id": "e_84_xgao",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "e1a1136b-99fd-472a-bf62-3e4741782089",
      "properties": {}
    },
    {
      "id": "e_85_eb46",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "256b6cea-3d99-4c3a-af4b-717e6dc818d8",
      "properties": {}
    },
    {
      "id": "e_86_flpf",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "9bd9c92a-76c7-4e62-9bf8-91c06f277779",
      "properties": {}
    },
    {
      "id": "e_87_ztxv",
      "type": ".",
      "source": "70f26c35-5943-4554-a027-c2a4b96c98a1",
      "target": "7190430c-b440-4594-b148-3e884c30ff55",
      "properties": {}
    },
    {
      "id": "e_88_bdg1",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "ee4300ca-169e-4934-9346-3527c5649b69",
      "properties": {}
    },
    {
      "id": "e_89_khmd",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "2869a2bb-fce9-482a-8a13-dbb7455d7232",
      "properties": {}
    },
    {
      "id": "e_90_gsc1",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "180792c0-a1c7-43b3-8171-c63116907100",
      "properties": {}
    },
    {
      "id": "e_91_x2ue",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "e5c3ade6-5b10-4b56-95bb-f9c11fd5bcb1",
      "properties": {}
    },
    {
      "id": "e_92_vfh5",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "fa093f3e-b6f7-4785-b5d1-e13786ec6b8a",
      "properties": {}
    },
    {
      "id": "e_93_i39x",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "ce9d2d52-1106-4547-a104-3cf113bb6b3f",
      "properties": {}
    },
    {
      "id": "e_94_vbtn",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "926656e3-b8b6-43a2-87ba-3e6429b42af7",
      "properties": {}
    },
    {
      "id": "e_95_pgmi",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "58c409bc-7e42-47a8-81ce-aa0b5485d93d",
      "properties": {}
    },
    {
      "id": "e_96_u9nv",
      "type": ".",
      "source": "7bf6e32b-f37d-468f-b60c-ba3189a2b281",
      "target": "2503e785-6ba3-4c4f-977a-244c87845694",
      "properties": {}
    },
    {
      "id": "e_97_cbok",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "b3b37d87-f047-4798-8cb2-3fe37b426d50",
      "properties": {}
    },
    {
      "id": "e_98_2ksr",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "9676a80d-ac30-45b7-b5a4-93b0243558f8",
      "properties": {}
    },
    {
      "id": "e_99_ni8k",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "818a21f2-3238-4f0e-aa31-ec7c9e1ce73f",
      "properties": {}
    },
    {
      "id": "e_100_45jv",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "24ee4663-139a-4f8b-addf-4ab1b1a03e01",
      "properties": {}
    },
    {
      "id": "e_101_r5a6",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "b0bb7074-933a-40d1-b2b1-070a37ea9fe6",
      "properties": {}
    },
    {
      "id": "e_102_n3jt",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "c55d4a77-a3c8-4a1d-a9d3-88ec2985b190",
      "properties": {}
    },
    {
      "id": "e_103_14d9",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "7e3d8ae1-8326-4218-a3c4-77b5d742b3cf",
      "properties": {}
    },
    {
      "id": "e_104_6il0",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "54595137-9501-4fd2-9311-1141709987dc",
      "properties": {}
    },
    {
      "id": "e_105_2vol",
      "type": ".",
      "source": "a7044da0-52eb-4d82-a8b2-9a1a7f4dd15c",
      "target": "e78b5df1-9345-4b89-99b5-9f8b92cc41a5",
      "properties": {}
    },
    {
      "id": "e_106_uliw",
      "type": ".",
      "source": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "target": "58790247-0af5-4b92-bc11-327ef8a4dd76",
      "properties": {}
    },
    {
      "id": "e_107_fx6a",
      "type": ".",
      "source": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "target": "490a7ebe-c09d-477b-8a2a-0a2102cece11",
      "properties": {}
    },
    {
      "id": "e_108_aatw",
      "type": ".",
      "source": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "target": "97c7ebc0-98b6-4235-a3d0-c38e7cccd207",
      "properties": {}
    },
    {
      "id": "e_109_z5zm",
      "type": ".",
      "source": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "target": "da99f7d0-c604-4f1c-bbd2-193d49205542",
      "properties": {}
    },
    {
      "id": "e_110_2xaz",
      "type": ".",
      "source": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "target": "091c1150-3711-42f9-837c-879aafea7986",
      "properties": {}
    },
    {
      "id": "e_111_lc9o",
      "type": ".",
      "source": "b0ce1500-9df0-4395-81c4-3755392963f2",
      "target": "00611885-e456-4cc2-8acf-94d01efc3dd7",
      "properties": {}
    },
    {
      "id": "e_112_6mr4",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "89c33c02-1aa0-4829-97ce-c9ccdb53b95b",
      "properties": {}
    },
    {
      "id": "e_113_10dn",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "d9134f2c-04e0-41ec-83e8-d97aecbcba56",
      "properties": {}
    },
    {
      "id": "e_114_lzmi",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "738d00d4-adff-46f0-b9b3-dbc39c39ab06",
      "properties": {}
    },
    {
      "id": "e_115_ctao",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "69de2a56-02c7-456e-91d8-48ff1d9ec90a",
      "properties": {}
    },
    {
      "id": "e_116_iud8",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "b9103494-621a-438b-bbd6-0f7246d338cc",
      "properties": {}
    },
    {
      "id": "e_117_wszu",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "4d8337b9-8a82-40fd-8b9c-e2c3f712a8e1",
      "properties": {}
    },
    {
      "id": "e_118_qjyj",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "c539e19d-9961-45ed-a8ab-2df03112df5c",
      "properties": {}
    },
    {
      "id": "e_119_lra0",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "2c24da5c-b160-409c-a440-b3854f8210bd",
      "properties": {}
    },
    {
      "id": "e_120_onc5",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "ddb176ea-c11d-4cef-82fd-0c9c15b06ee8",
      "properties": {}
    },
    {
      "id": "e_121_jiep",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "aa033a6f-7f5f-4e95-8f31-c61a6cffa2dd",
      "properties": {}
    },
    {
      "id": "e_122_ajer",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "78525ed2-ca5c-430b-a9b8-736f023ab7d4",
      "properties": {}
    },
    {
      "id": "e_123_55sh",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "0cc47408-5b06-4829-a3e2-a9140772a3ec",
      "properties": {}
    },
    {
      "id": "e_124_5g2d",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "29fd607e-8045-419c-89d1-a3b8afa9bd89",
      "properties": {}
    },
    {
      "id": "e_125_k7j4",
      "type": ".",
      "source": "10e19a26-4d73-4d0d-bc2d-e15827baa05c",
      "target": "d4ac3ed1-1bba-4426-b6ac-0b5aedcb21e8",
      "properties": {}
    },
    {
      "id": "e_126_tz42",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "5741727e-76ae-4110-9547-fb8fdb173689",
      "properties": {}
    },
    {
      "id": "e_127_l7jz",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "e69d5eaf-9c72-49b2-bcb6-76e5f63d0e83",
      "properties": {}
    },
    {
      "id": "e_128_4qf9",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "20d0750b-cc9c-401e-91df-1fe321062821",
      "properties": {}
    },
    {
      "id": "e_129_82cy",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "80200a7c-3f45-423c-a8de-b0af19bad03a",
      "properties": {}
    },
    {
      "id": "e_130_upu9",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "9c4ddf0f-87f2-4c43-99a2-086755500228",
      "properties": {}
    },
    {
      "id": "e_131_mozn",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "b09b1030-031e-4bfc-ab00-a18984698ba3",
      "properties": {}
    },
    {
      "id": "e_132_wt3j",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "9b5d635b-1dd5-44a9-b886-673bcee11b31",
      "properties": {}
    },
    {
      "id": "e_133_tp0m",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "6db8a785-f620-44d0-beeb-48cede141bce",
      "properties": {}
    },
    {
      "id": "e_134_1sqm",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "e7ba11f7-af02-4c5a-8c8e-9f5b48c3b243",
      "properties": {}
    },
    {
      "id": "e_135_igen",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "a0530a02-2da0-4943-b953-c458ff3e677c",
      "properties": {}
    },
    {
      "id": "e_136_onli",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "4b2cb31e-7180-4dfc-a5c6-31491f89bdbc",
      "properties": {}
    },
    {
      "id": "e_137_1eti",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "81ba4c40-8070-4b19-aabe-b758cc0574ff",
      "properties": {}
    },
    {
      "id": "e_138_p2xs",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "21b00761-36f5-4cba-89af-18a843acde8d",
      "properties": {}
    },
    {
      "id": "e_139_00ze",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "afcee631-ffc0-4d89-b46d-8e2e4a9a84e4",
      "properties": {}
    },
    {
      "id": "e_140_lfpx",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "0a392bb1-b5b5-41c9-af4e-3e73dd9cba93",
      "properties": {}
    },
    {
      "id": "e_141_ncko",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "3203bd48-a094-4a98-b259-8663556c6c89",
      "properties": {}
    },
    {
      "id": "e_142_t52b",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "d76f1dbd-6711-49dd-8c8c-48da63accc9f",
      "properties": {}
    },
    {
      "id": "e_143_ywaa",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "ba135b92-e512-4e06-946a-a35f9404a30d",
      "properties": {}
    },
    {
      "id": "e_144_o7vb",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "3a6d743a-17d5-4799-978f-edc4babb48c3",
      "properties": {}
    },
    {
      "id": "e_145_yevj",
      "type": ".",
      "source": "95d91a65-c535-4061-8dd8-20c95f592579",
      "target": "4cc78d6a-5817-4898-8b15-3099be7a0db8",
      "properties": {}
    },
    {
      "id": "e_146_gcsu",
      "type": ".",
      "source": "c47cd210-ef57-461c-8d9b-f0903672ccb0",
      "target": "32d6a682-0670-41e3-b192-da8a1015c9f5",
      "properties": {}
    },
    {
      "id": "e_147_u10c",
      "type": ".",
      "source": "c47cd210-ef57-461c-8d9b-f0903672ccb0",
      "target": "53fa2e16-1563-4579-8dd4-16f30053b338",
      "properties": {}
    },
    {
      "id": "e_148_nzmr",
      "type": ".",
      "source": "c47cd210-ef57-461c-8d9b-f0903672ccb0",
      "target": "84760cc4-d0cc-419b-aa92-cd2e2f046d5d",
      "properties": {}
    },
    {
      "id": "e_149_gomg",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "b2b08377-0f89-4fcb-b9f5-8702c3355411",
      "properties": {}
    },
    {
      "id": "e_150_293a",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "ccbdb925-c4e4-4842-a061-7d5c5ab46f57",
      "properties": {}
    },
    {
      "id": "e_151_6lnb",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "8bbc2e1f-c35b-48ca-b70c-b2f147a5ed48",
      "properties": {}
    },
    {
      "id": "e_152_gre1",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "34000f95-af9a-43ce-93ab-30a2c082aae5",
      "properties": {}
    },
    {
      "id": "e_153_ijuv",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "72d4fa34-b7b2-4a3a-9a1d-515fd366e96e",
      "properties": {}
    },
    {
      "id": "e_154_nkyk",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "9593327a-bbac-4cec-bcc7-6727f2965fb3",
      "properties": {}
    },
    {
      "id": "e_155_6bsh",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "1a35febd-ceae-4db8-a720-97d1b05afb96",
      "properties": {}
    },
    {
      "id": "e_156_16up",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "38ae604d-2ef7-42eb-bf95-f4b8a97c65e3",
      "properties": {}
    },
    {
      "id": "e_157_gqcz",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "28ea0592-fb77-4f1f-b1ce-55d065766d64",
      "properties": {}
    },
    {
      "id": "e_158_focr",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "bb88a338-fb53-4e44-a700-a0fe545cadf5",
      "properties": {}
    },
    {
      "id": "e_159_66xz",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "0c833b99-93e1-4b48-a8ec-a17c3ad59a62",
      "properties": {}
    },
    {
      "id": "e_160_25sa",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "806ae353-e3c4-4447-a7be-17306a026935",
      "properties": {}
    },
    {
      "id": "e_161_x8j6",
      "type": ".",
      "source": "802621aa-e5bd-46cf-8c8f-e5e6b833222f",
      "target": "ed251fe7-0df1-4582-85f9-b231459d407a",
      "properties": {}
    },
    {
      "id": "e_162_ayua",
      "type": ".",
      "source": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "target": "8aa70b03-c9aa-4635-8f38-cd7aab322d4a",
      "properties": {}
    },
    {
      "id": "e_163_u3tv",
      "type": ".",
      "source": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "target": "1a73fee6-b3d3-432b-bb4a-db44dc226fbf",
      "properties": {}
    },
    {
      "id": "e_164_mig3",
      "type": ".",
      "source": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "target": "12df5da8-5047-40a0-97ca-ced93f3045f8",
      "properties": {}
    },
    {
      "id": "e_165_ub3z",
      "type": ".",
      "source": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "target": "345564f1-33e8-470d-b414-2595c0d90b0a",
      "properties": {}
    },
    {
      "id": "e_166_yzcz",
      "type": ".",
      "source": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "target": "898f4aa5-f8e5-40f1-bfbf-c9725a467f6e",
      "properties": {}
    },
    {
      "id": "e_167_ra6b",
      "type": ".",
      "source": "0b04b165-ce00-42b5-91d5-f34b761dacfc",
      "target": "88ad6b0b-3b17-4733-b77e-d8b20f53d882",
      "properties": {}
    },
    {
      "id": "e_168_8hdu",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "3c7bb4bb-7a7e-4da1-8524-7c36e9aaf68e",
      "properties": {}
    },
    {
      "id": "e_169_rhmc",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "5c76376b-6bf2-4e56-b26c-2bff8cde1cc1",
      "properties": {}
    },
    {
      "id": "e_170_ongc",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "d4ae465f-f0f5-4b66-8b69-23104e0f328a",
      "properties": {}
    },
    {
      "id": "e_171_8lbx",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "f6b18da9-53e2-4d32-8bf2-7f55c7ee2fc2",
      "properties": {}
    },
    {
      "id": "e_172_sw2q",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "6153011a-b8d8-4f28-9bda-f313aeebee3e",
      "properties": {}
    },
    {
      "id": "e_173_ggyn",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "4d8cb9a5-a627-46ac-b766-b18d99a089ec",
      "properties": {}
    },
    {
      "id": "e_174_i8wh",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "b719dfa9-1885-48c9-9e06-3235a0635274",
      "properties": {}
    },
    {
      "id": "e_175_he4r",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "06f50152-be2b-42f0-b2f2-ac014074ccc3",
      "properties": {}
    },
    {
      "id": "e_176_vemo",
      "type": ".",
      "source": "b9c00cfa-73ed-4a9e-8f9b-c4eeaf54bae9",
      "target": "61993aa6-8659-400f-8193-46ca7981a8db",
      "properties": {}
    },
    {
      "id": "e_177_yvsq",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "2447387a-9328-4676-8efe-78b9a4363f58",
      "properties": {}
    },
    {
      "id": "e_178_45gk",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "38790c9a-d0c9-4b18-b271-3a61047d581e",
      "properties": {}
    },
    {
      "id": "e_179_heqc",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "098c798d-0391-40ce-8481-137defcd5287",
      "properties": {}
    },
    {
      "id": "e_180_uijc",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "a8f87556-23f9-43e0-954c-99a6d5d9f7eb",
      "properties": {}
    },
    {
      "id": "e_181_at4g",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "16189197-bc4f-4864-8482-635d042df6cb",
      "properties": {}
    },
    {
      "id": "e_182_49dg",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "dce5f4e1-1a79-4a2c-9ca3-83bf4ea640b6",
      "properties": {}
    },
    {
      "id": "e_183_moq8",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "2fd9b6ae-ada6-418f-8c1f-816c07fa3130",
      "properties": {}
    },
    {
      "id": "e_184_o0hb",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "14dac8ed-a352-412b-88fd-e9822be71b90",
      "properties": {}
    },
    {
      "id": "e_185_1wke",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "9dcc8b26-2714-410c-ae89-b74b5d78512d",
      "properties": {}
    },
    {
      "id": "e_186_k4fx",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "d321860a-6809-479e-a215-3df1b25e2b7d",
      "properties": {}
    },
    {
      "id": "e_187_s81t",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "26f49a63-b98d-40fc-823e-81133f3b9a89",
      "properties": {}
    },
    {
      "id": "e_188_25hz",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "8fe10c7b-d44b-4179-a8b8-bba9cfa9dab7",
      "properties": {}
    },
    {
      "id": "e_189_gkrm",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "e4390ac4-74a0-4606-b8ca-5de09de3405c",
      "properties": {}
    },
    {
      "id": "e_190_em0m",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "9535000d-0b5d-437c-98e0-dfcbb14df66b",
      "properties": {}
    },
    {
      "id": "e_191_qiwp",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "4c777033-df01-4823-8f9b-f1063ad86731",
      "properties": {}
    },
    {
      "id": "e_192_tusp",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "f160a863-276a-4ec8-9903-17452a8e498f",
      "properties": {}
    },
    {
      "id": "e_193_q7ta",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "a1e197c0-1574-40d4-a987-35980d7bc7c8",
      "properties": {}
    },
    {
      "id": "e_194_p0t9",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "56d69af7-36a4-4c48-accf-e60d83127f73",
      "properties": {}
    },
    {
      "id": "e_195_aeu6",
      "type": ".",
      "source": "7b961bc6-d471-4d52-80a9-29b3cdac13cb",
      "target": "b2f904f5-bb7c-45d1-af5b-25874edc67be",
      "properties": {}
    },
    {
      "id": "e_196_oh14",
      "type": ".",
      "source": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "target": "d5366b1b-df59-4806-a922-83b93674e581",
      "properties": {}
    },
    {
      "id": "e_197_yjjw",
      "type": ".",
      "source": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "target": "0dfa6d6a-1e4a-4b1d-8bd2-e0be66e09bb6",
      "properties": {}
    },
    {
      "id": "e_198_6v7h",
      "type": ".",
      "source": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "target": "8c9b7f7b-634b-427e-bf43-41e1088f2a2a",
      "properties": {}
    },
    {
      "id": "e_199_2qap",
      "type": ".",
      "source": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "target": "d322ff02-483a-4103-97e5-d47d92692b78",
      "properties": {}
    },
    {
      "id": "e_200_6jw2",
      "type": ".",
      "source": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "target": "f36339cd-2368-4f9f-84fe-3550ac426c13",
      "properties": {}
    },
    {
      "id": "e_201_2jde",
      "type": ".",
      "source": "f49d41b9-e37e-4205-9308-6cb9618dbb57",
      "target": "16ec805b-5ce7-407a-af74-9a133877d51a",
      "properties": {}
    },
    {
      "id": "e_202_wdbj",
      "type": ".",
      "source": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "target": "2ed595fe-fc65-4842-a15a-f9a2239ac7be",
      "properties": {}
    },
    {
      "id": "e_203_g6gl",
      "type": ".",
      "source": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "target": "e1147c21-f65d-4000-b560-a54864aaa228",
      "properties": {}
    },
    {
      "id": "e_204_jnrr",
      "type": ".",
      "source": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "target": "c2035658-81d0-4258-afb3-991cc6e100c0",
      "properties": {}
    },
    {
      "id": "e_205_rv0q",
      "type": ".",
      "source": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "target": "832e3a18-6ddc-4ed1-841d-dcc79102522d",
      "properties": {}
    },
    {
      "id": "e_206_vghm",
      "type": ".",
      "source": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "target": "4ccbb52c-98f7-4604-b27f-85e9abe48adf",
      "properties": {}
    },
    {
      "id": "e_207_92ck",
      "type": ".",
      "source": "ea966319-b764-4837-aa5c-5b0cdb4c5356",
      "target": "db06816e-b5d5-4f37-9e1b-9840976b2e08",
      "properties": {}
    },
    {
      "id": "e_208_7sn5",
      "type": "COMME",
      "source": "15c3f7ca-8cdb-4fa9-b1b7-ba16ac8d24c9",
      "target": "44874861-d1d8-48e9-8a7e-aedcefc1f2e2",
      "properties": {}
    },
    {
      "id": "e_209_yf6j",
      "type": "COMME",
      "source": "15c3f7ca-8cdb-4fa9-b1b7-ba16ac8d24c9",
      "target": "cb7bf109-ea86-4fef-97a2-5ff5d0073bb4",
      "properties": {}
    },
    {
      "id": "e_210_hys8",
      "type": "COMME",
      "source": "15c3f7ca-8cdb-4fa9-b1b7-ba16ac8d24c9",
      "target": "79809f7e-8874-4460-b0ce-848f2af3cb33",
      "properties": {}
    },
    {
      "id": "e_211_dr2b",
      "type": "DOIT",
      "source": "de263efb-a495-49c6-a487-969aad4edd27",
      "target": "1970552a-548b-4504-a51c-01beb00e19c8",
      "properties": {
        "prop_1": "relever des défis au quotidien"
      }
    },
    {
      "id": "e_212_1pg1",
      "type": "DOIT",
      "source": "de263efb-a495-49c6-a487-969aad4edd27",
      "target": "2a1976e3-def0-4967-a22d-ff7079253d4f",
      "properties": {
        "prop_1": "Le cerveau reçoit, trie, analyse et stocke toutes les informations du monde extérieur et de l'intérieur du corps."
      }
    },
    {
      "id": "e_213_9zgf",
      "type": "DOIT",
      "source": "de263efb-a495-49c6-a487-969aad4edd27",
      "target": "69f2609d-6bd8-4f07-8a9a-ec7852826cda",
      "properties": {}
    },
    {
      "id": "e_214_08f2",
      "type": "DOIT",
      "source": "de263efb-a495-49c6-a487-969aad4edd27",
      "target": "65c06cb3-69e7-41fc-b87f-3f939d056d94",
      "properties": {}
    },
    {
      "id": "e_215_2g85",
      "type": "COMME",
      "source": "7e965bea-bdb8-4cb6-bc91-286842553f2d",
      "target": "be35dfcd-67f2-4c07-89ee-97fcd039f904",
      "properties": {}
    },
    {
      "id": "e_216_2uyo",
      "type": "COMME",
      "source": "7e965bea-bdb8-4cb6-bc91-286842553f2d",
      "target": "3bd83a00-f87b-49fc-a458-46a880b38806",
      "properties": {}
    },
    {
      "id": "e_217_1xpg",
      "type": "COMME",
      "source": "7e965bea-bdb8-4cb6-bc91-286842553f2d",
      "target": "98905f32-ed5d-4bf5-99d0-6f6329608b23",
      "properties": {}
    },
    {
      "id": "e_218_2rqh",
      "type": "COMME",
      "source": "3b49c1e4-4920-49af-8022-b3326d69a01f",
      "target": "9e31b0d7-99f3-47fb-a34e-ee89e8c6a1e9",
      "properties": {}
    },
    {
      "id": "e_219_yk73",
      "type": "COMME",
      "source": "3b49c1e4-4920-49af-8022-b3326d69a01f",
      "target": "a20a86ef-46ab-4764-afb9-83a17a74207e",
      "properties": {}
    },
    {
      "id": "e_220_q2nv",
      "type": "COMME",
      "source": "3b49c1e4-4920-49af-8022-b3326d69a01f",
      "target": "67590459-7259-4401-b06a-6d9efbd7c680",
      "properties": {}
    },
    {
      "id": "e_221_vy4w",
      "type": "COMME",
      "source": "f1a0aebf-5120-422d-91d1-94aa7a1b1e18",
      "target": "b075dd71-4d6d-4580-8b53-bbd56315caac",
      "properties": {}
    },
    {
      "id": "e_222_hhiw",
      "type": "COMME",
      "source": "f1a0aebf-5120-422d-91d1-94aa7a1b1e18",
      "target": "f83fbfb2-a537-43b3-82ae-11724272acce",
      "properties": {}
    },
    {
      "id": "e_223_hv8s",
      "type": "COMME",
      "source": "f1a0aebf-5120-422d-91d1-94aa7a1b1e18",
      "target": "5e2587e9-1a9c-43c6-91fe-0cf630db0cdc",
      "properties": {}
    },
    {
      "id": "e_224_jj4g",
      "type": "COMME",
      "source": "aecbdedb-65ac-440e-9e62-64355a58c2cf",
      "target": "487b44eb-fb59-43dd-b4c4-5199386e83ca",
      "properties": {}
    },
    {
      "id": "e_225_tnm3",
      "type": "COMME",
      "source": "aecbdedb-65ac-440e-9e62-64355a58c2cf",
      "target": "e248aa10-f2b3-4c59-8b69-4173b0432247",
      "properties": {}
    },
    {
      "id": "e_226_t84c",
      "type": "COMME",
      "source": "aecbdedb-65ac-440e-9e62-64355a58c2cf",
      "target": "434d241e-e0d0-4fc0-a957-911c42f0d0b4",
      "properties": {}
    },
    {
      "id": "e_227_pfcb",
      "type": "COMME",
      "source": "a8f87556-23f9-43e0-954c-99a6d5d9f7eb",
      "target": "fd90ba1b-5d2c-4a3c-9620-073ca6512efb",
      "properties": {}
    },
    {
      "id": "e_228_uzry",
      "type": "COMME",
      "source": "a8f87556-23f9-43e0-954c-99a6d5d9f7eb",
      "target": "2b19f867-1a97-4ead-863d-2f459131c023",
      "properties": {}
    },
    {
      "id": "e_229_cfu1",
      "type": "COMME",
      "source": "a8f87556-23f9-43e0-954c-99a6d5d9f7eb",
      "target": "45407bf6-a4f5-434f-8e79-328cb4187bf8",
      "properties": {}
    },
    {
      "id": "e_230_myt9",
      "type": "COMME",
      "source": "c2035658-81d0-4258-afb3-991cc6e100c0",
      "target": "809b6f29-8cfc-4ff6-ac31-ba4503c8729b",
      "properties": {}
    },
    {
      "id": "e_231_3675",
      "type": "COMME",
      "source": "c2035658-81d0-4258-afb3-991cc6e100c0",
      "target": "b900e969-eeb7-4f02-b9a4-9405f044abc3",
      "properties": {}
    },
    {
      "id": "e_232_evex",
      "type": "COMME",
      "source": "c2035658-81d0-4258-afb3-991cc6e100c0",
      "target": "5287b7fa-629e-414d-bd0d-d47d2668491d",
      "properties": {}
    },
    {
      "id": "e_233_6jhs",
      "type": "COMME",
      "source": "56df17cc-8c0d-4b1c-b464-b555aca00d7d",
      "target": "d601edb6-9e82-4da7-ad11-ba904f4d5c28",
      "properties": {}
    },
    {
      "id": "e_234_omuo",
      "type": "COMME",
      "source": "56df17cc-8c0d-4b1c-b464-b555aca00d7d",
      "target": "96427619-4942-48d1-ba72-ca03089ba627",
      "properties": {}
    },
    {
      "id": "e_235_um5f",
      "type": "COMME",
      "source": "56df17cc-8c0d-4b1c-b464-b555aca00d7d",
      "target": "8390ce7c-885a-4595-b25a-8ef6e979b230",
      "properties": {}
    },
    {
      "id": "e_236_zpd0",
      "type": "COMME",
      "source": "566b5886-8d71-4c79-bacb-db7409de1bc1",
      "target": "bd9ea4aa-572f-49d2-b4c4-a611d3dc8e47",
      "properties": {}
    },
    {
      "id": "e_237_2c6b",
      "type": "COMME",
      "source": "566b5886-8d71-4c79-bacb-db7409de1bc1",
      "target": "3712b1dd-259b-4026-a44c-322996f861eb",
      "properties": {}
    },
    {
      "id": "e_238_le7s",
      "type": "COMME",
      "source": "566b5886-8d71-4c79-bacb-db7409de1bc1",
      "target": "2719a571-34e1-41e5-9649-61570c3ecd98",
      "properties": {}
    },
    {
      "id": "e_239_9g47",
      "type": "COMME",
      "source": "bc000663-c8f9-43d2-928f-14b91e05283a",
      "target": "a3dfd84a-d10a-48f2-bc67-d979b73c3b59",
      "properties": {}
    },
    {
      "id": "e_240_y8g8",
      "type": "COMME",
      "source": "bc000663-c8f9-43d2-928f-14b91e05283a",
      "target": "232ed07f-a8db-4d7b-ba17-ce2c32e0fcc2",
      "properties": {}
    },
    {
      "id": "e_241_b2dc",
      "type": "COMME",
      "source": "bc000663-c8f9-43d2-928f-14b91e05283a",
      "target": "b6b65dc8-1835-488c-8609-2cdd9a1474a5",
      "properties": {
        "prop_1": "Le contexte informationnel (le prix annoncé, le prestige de l'étiquette) modifie l'expérience sensorielle réelle.",
        "prop_2": "Le cerveau active le circuit du plaisir et du goût en fonction de ce qu'il s'attend à ressentir d'après le cadre."
      }
    },
    {
      "id": "e_242_ij8z",
      "type": "COMME",
      "source": "dc7ba9a8-482b-4549-be3e-b883b0c202d5",
      "target": "9cb8b596-4608-4f7e-a276-4d78a23dd463",
      "properties": {
        "prop_1": "L'information n'a pas été oubliée au sens de l'effacement ; le chemin d'accès était simplement bloqué dans le labyrinthe de la mémoire.",
        "Le rôle de la clé (l'indice)": "Le cerveau fonctionne par association d'idées. Sans le bon signal de départ (l'indice), la recherche reste infructueuse. Le nom de l'acteur a agi comme une clé ouvrant la bonne porte.  Le souvenir était intact, il lui fallait juste le bon déclencheur extérieur pour refaire surface."
      }
    },
    {
      "id": "e_243_wby1",
      "type": "COMME",
      "source": "dc7ba9a8-482b-4549-be3e-b883b0c202d5",
      "target": "7c059611-6ca1-40ba-af5d-147154f11a8c",
      "properties": {
        "prop_1": "Le contexte et l'état émotionnel servent d'indices de récupération (mémoire dépendante du contexte). Le changement d'environnement a coupé les signaux d'accès au souvenir",
        "prop_2": "qui s'est trouvé temporairement verrouillé."
      }
    },
    {
      "id": "e_244_apcd",
      "type": "COMME",
      "source": "dc7ba9a8-482b-4549-be3e-b883b0c202d5",
      "target": "cfddea67-a1fd-4a7b-8b70-2263c2431535",
      "properties": {
        "prop_1": "La vision de la personne hors de son contexte habituel (le bureau) a privé votre cerveau des indices visuels contextuels nécessaires. C'est l'association secondaire (la machine à café) qui a fourni la clé d'accès manquante."
      }
    },
    {
      "id": "e_245_7esw",
      "type": "COMME",
      "source": "0c01e471-4ee9-49b7-ae81-1dd6f8e58b2d",
      "target": "e57a7e61-89e7-4ce2-8b1b-9cfb437831f2",
      "properties": {
        "prop_1": "Le cerveau utilise l'humeur présente comme une clé d'indexation pour fouiller dans les archives de la mémoire à long terme.",
        "prop_2": "Il active plus facilement les souvenirs qui partagent la même tonalité affective que l'état émotionnel actuel, rendant les souvenirs contraires temporairement inaccessibles ou invisibles.",
        "prop_3": "Votre perception du passé est constamment colorée, voire déformée, par votre état d'esprit du moment présent."
      }
    },
    {
      "id": "e_246_tpkv",
      "type": "COMME",
      "source": "0c01e471-4ee9-49b7-ae81-1dd6f8e58b2d",
      "target": "d6ec3324-a41e-468e-888f-7468fd1e6943",
      "properties": {
        "prop_1": "La colère ou le ressentiment agissent comme un aimant mémoriel qui attire et rassemble tous les petits désagréments passés",
        "prop_2": "occultant totalement les aspects positifs qui faisaient consensus quelques heures plus tôt."
      }
    },
    {
      "id": "e_247_fltd",
      "type": "COMME",
      "source": "0c01e471-4ee9-49b7-ae81-1dd6f8e58b2d",
      "target": "28e81687-1057-4209-8b9a-a41ec850d283",
      "properties": {
        "prop_1": "La joie présente colore rétrospectivement le passé. Le filtre de l'enthousiasme réécrit la charge émotionnelle des souvenirs négatifs pour les faire correspondre à l'état de triomphe actuel."
      }
    },
    {
      "id": "e_248_k3xi",
      "type": "COMME",
      "source": "7ebf2ae1-a3cf-438a-b81f-0a2f657805f2",
      "target": "57a3b8bc-1da7-4329-ba40-a216e3e3db02",
      "properties": {
        "Le mot n'est pas devenu plus fréquent du jour au lendemain": "c'est votre attention",
        "prop_2": "désormais amorcée sur ce mot",
        "prop_3": "qui le remarque enfin alors qu'il vous échappait avant."
      }
    },
    {
      "id": "e_249_wdyf",
      "type": "COMME",
      "source": "7ebf2ae1-a3cf-438a-b81f-0a2f657805f2",
      "target": "2b5df9a5-eb4e-46df-9ad1-18ef1a5ea0d9",
      "properties": {
        "prop_1": "Votre cerveau filtre désormais activement les stimuli visuels liés à ce modèle",
        "prop_2": "alors que sa fréquence réelle sur la route n'a pas changé."
      }
    },
    {
      "id": "e_250_3qj6",
      "type": "COMME",
      "source": "7ebf2ae1-a3cf-438a-b81f-0a2f657805f2",
      "target": "3bcc6af4-75be-4e16-a3bd-d95442e2efa5",
      "properties": {
        "prop_1": "L'information vient d'être rendue saillante dans votre mémoire ; votre cerveau la repère désormais partout où elle apparaît",
        "prop_2": "alors qu'elle était déjà présente avant sans être remarquée."
      }
    },
    {
      "id": "e_251_tluf",
      "type": "COMME",
      "source": "e2452e29-5028-4b41-bd7a-7d777413d6ac",
      "target": "296edcc7-e9cb-4676-a6b1-e032744b8514",
      "properties": {
        "prop_1": "Dans votre état de satiété actuel",
        "prop_2": "vous êtes incapable d'anticiper correctement la faim que vous ressentirez plus tard",
        "prop_3": "et vous sous-estimez vos besoins futurs."
      }
    },
    {
      "id": "e_252_tj4l",
      "type": "COMME",
      "source": "e2452e29-5028-4b41-bd7a-7d777413d6ac",
      "target": "ed654def-d208-439f-805c-257d7dcf39ef",
      "properties": {
        "prop_1": "Votre état émotionnel positif du moment vous empêche d'anticiper les baisses de motivation",
        "prop_2": "la fatigue ou les imprévus que vous connaîtrez plus tard."
      }
    },
    {
      "id": "e_253_irq8",
      "type": "COMME",
      "source": "e2452e29-5028-4b41-bd7a-7d777413d6ac",
      "target": "94367762-93ab-43dc-803e-035ae13f81c4",
      "properties": {
        "prop_1": "N'étant pas dans l'état émotionnel que vous vivrez au moment de l'application de la clause",
        "prop_2": "vous sous-estimez l'impact réel qu'elle aura sur vous."
      }
    },
    {
      "id": "e_254_oceb",
      "type": "COMME",
      "source": "fdb6afe1-b8f6-4ffc-8e22-7d9ea67aa000",
      "target": "97107666-dfc7-44f4-bb87-a1e97993812b",
      "properties": {
        "prop_1": "Ne rien faire est perçu comme moins actif",
        "prop_2": "donc moins « coupable » en cas de problème",
        "prop_3": "même si l'inaction cause objectivement plus de tort que l'action évitée."
      }
    },
    {
      "id": "e_255_1kle",
      "type": "COMME",
      "source": "fdb6afe1-b8f6-4ffc-8e22-7d9ea67aa000",
      "target": "9f96d8d1-a87e-4cdb-855c-1151bc9ef73f",
      "properties": {
        "prop_1": "L'idée de provoquer activement un tort par une mauvaise manipulation pèse plus lourd dans le jugement que le tort",
        "prop_2": "pourtant réel",
        "prop_3": "causé par l'inaction."
      }
    },
    {
      "id": "e_256_fsoa",
      "type": "COMME",
      "source": "fdb6afe1-b8f6-4ffc-8e22-7d9ea67aa000",
      "target": "f0e3ebe9-7167-4f7b-920e-88c05aff42b7",
      "properties": {
        "prop_1": "Vendre est perçu comme une décision active qui engage sa responsabilité",
        "prop_2": "alors que garder l'action",
        "prop_3": "bien que tout aussi risqué",
        "prop_4": "semble moins engager sa faute."
      }
    },
    {
      "id": "e_257_2o7y",
      "type": "COMME",
      "source": "720469df-3e4c-4ed0-9167-1e4dc672ba5c",
      "target": "d7b0f171-3d3d-4359-8e53-68922f29605d",
      "properties": {
        "prop_1": "Vous ignorez que la maladie elle-même est extrêmement rare dans la population",
        "prop_2": "ce qui rend un faux positif bien plus probable qu'un vrai positif",
        "prop_3": "même avec un test fiable à 99%."
      }
    },
    {
      "id": "e_258_8ybh",
      "type": "COMME",
      "source": "720469df-3e4c-4ed0-9167-1e4dc672ba5c",
      "target": "705edaf0-7a28-47a9-9dbc-736332adc2b9",
      "properties": {
        "prop_1": "Vous jugez uniquement sur la ressemblance au stéréotype",
        "prop_2": "en oubliant qu'il existe statistiquement bien plus d'agriculteurs que de bibliothécaires."
      }
    },
    {
      "id": "e_259_6ny9",
      "type": "COMME",
      "source": "720469df-3e4c-4ed0-9167-1e4dc672ba5c",
      "target": "c851f2ae-7e72-4225-86c3-397ba0171948",
      "properties": {
        "prop_1": "Vous vous focalisez sur ce cas rare et marquant sans tenir compte du taux de base réel",
        "prop_2": "extrêmement faible",
        "prop_3": "des attaques de requins par rapport au nombre de baigneurs."
      }
    },
    {
      "id": "e_260_ytrd",
      "type": "COMME",
      "source": "a96e2b2a-c3b6-4991-abbe-0359e2cb26e7",
      "target": "42388962-cd64-427e-9a74-d65dcf490997",
      "properties": {
        "prop_1": "L'étrangeté de l'image capte davantage l'attention et déclenche un traitement mental plus riche",
        "prop_2": "ce qui renforce sa trace en mémoire par rapport aux éléments banals."
      }
    },
    {
      "id": "e_261_rcmu",
      "type": "COMME",
      "source": "a96e2b2a-c3b6-4991-abbe-0359e2cb26e7",
      "target": "b7ad94d5-bde7-43b1-ae57-24127bfee0dc",
      "properties": {
        "prop_1": "Le caractère insolite de l'événement l'a rendu saillant et distinct des journées ordinaires",
        "prop_2": "ce qui a facilité son encodage et son rappel en mémoire."
      }
    },
    {
      "id": "e_262_bdqq",
      "type": "COMME",
      "source": "a96e2b2a-c3b6-4991-abbe-0359e2cb26e7",
      "target": "301eda22-a8e5-4775-8efc-d0cb8533644d",
      "properties": {
        "prop_1": "Le décalage avec les attentes habituelles crée une trace mémorielle plus forte que les blagues classiques",
        "prop_2": "plus prévisibles et donc moins marquantes."
      }
    },
    {
      "id": "e_263_3kmf",
      "type": "COMME",
      "source": "b52ede92-d691-427e-946b-99ba85180f98",
      "target": "29842980-9d26-49d0-aa07-17d2d0616851",
      "properties": {
        "prop_1": "L'humeur positive et le traitement ludique associés à l'humour engagent davantage de ressources cognitives",
        "prop_2": "ce qui renforce la mémorisation de l'information."
      }
    },
    {
      "id": "e_264_5m4r",
      "type": "COMME",
      "source": "b52ede92-d691-427e-946b-99ba85180f98",
      "target": "5840f8bf-9512-4559-addb-42834ca966c1",
      "properties": {
        "prop_1": "L'émotion positive suscitée par l'humour favorise un encodage plus profond et plus durable de l'information associée."
      }
    },
    {
      "id": "e_265_nutc",
      "type": "COMME",
      "source": "b52ede92-d691-427e-946b-99ba85180f98",
      "target": "b097b1f4-de92-492e-9ae0-f0484b3dc6f2",
      "properties": {
        "prop_1": "Le contenu drôle capte l'attention et crée une association émotionnelle positive qui ancre plus solidement le souvenir du cours entier."
      }
    },
    {
      "id": "e_266_bk2i",
      "type": "COMME",
      "source": "dcf4bea1-b835-468b-b928-b784883c2d9b",
      "target": "916c5531-8b15-4c29-8d11-a80fdc4aa2bb",
      "properties": {
        "prop_1": "Les images sont traitées et stockées différemment des mots",
        "prop_2": "avec un accès mnésique plus direct",
        "prop_3": "ce qui rend l'information visuelle plus facilement récupérable."
      }
    },
    {
      "id": "e_267_akcf",
      "type": "COMME",
      "source": "dcf4bea1-b835-468b-b928-b784883c2d9b",
      "target": "3c67f0ae-d8bd-4eeb-a026-b72382ad1cb8",
      "properties": {
        "prop_1": "La mémoire visuelle des visages est particulièrement robuste comparée à la mémoire verbale des noms",
        "prop_2": "plus abstraite et plus fragile."
      }
    },
    {
      "id": "e_268_4cyo",
      "type": "COMME",
      "source": "dcf4bea1-b835-468b-b928-b784883c2d9b",
      "target": "3e18c8e6-12af-4894-ba92-f7c55ae3e60f",
      "properties": {
        "prop_1": "L'image concrète crée une trace mnésique plus forte et plus facilement récupérable que l'explication verbale équivalente",
        "prop_2": "plus abstraite."
      }
    },
    {
      "id": "e_269_60q4",
      "type": "COMME",
      "source": "4ccbb52c-98f7-4604-b27f-85e9abe48adf",
      "target": "5a11335c-d4be-4ddf-8454-12f8eab69b0f",
      "properties": {
        "prop_1": "L'information négative pèse psychologiquement plus lourd que les informations positives de même intensité",
        "prop_2": "ce qui déforme le bilan global perçu."
      }
    },
    {
      "id": "e_270_3bf4",
      "type": "COMME",
      "source": "4ccbb52c-98f7-4604-b27f-85e9abe48adf",
      "target": "a2dcb77b-d0e3-438a-a557-1fe2b4ae6e75",
      "properties": {
        "prop_1": "Les informations négatives captent davantage l'attention et sont perçues comme plus fiables ou plus importantes que les informations positives équivalentes."
      }
    },
    {
      "id": "e_271_9mfg",
      "type": "COMME",
      "source": "4ccbb52c-98f7-4604-b27f-85e9abe48adf",
      "target": "711d464f-e414-4459-91a6-50fbc252e667",
      "properties": {
        "prop_1": "L'événement négatif domine le souvenir global de la journée",
        "prop_2": "alors que les nombreux moments positifs pèsent proportionnellement moins dans le bilan émotionnel final."
      }
    },
    {
      "id": "e_272_0c2i",
      "type": "COMME",
      "source": "69c57704-7937-473a-a032-5c5a9076e850",
      "target": "4ac37c01-083d-421f-9497-14a00099eb94",
      "properties": {
        "Le prix initial de 150 € sert d'ancre": "tous les jugements sur le prix de vente sont faits par comparaison avec cette première valeur",
        "prop_2": "même arbitraire."
      }
    },
    {
      "id": "e_273_uscq",
      "type": "COMME",
      "source": "69c57704-7937-473a-a032-5c5a9076e850",
      "target": "fdba5f23-422f-4746-a868-6705571ee4cf",
      "properties": {
        "prop_1": "Une fois l'ancre posée par la première offre",
        "prop_2": "la discussion se déroule autour de cette valeur de référence plutôt qu'autour d'une évaluation indépendante du poste."
      }
    },
    {
      "id": "e_274_xcyd",
      "type": "COMME",
      "source": "69c57704-7937-473a-a032-5c5a9076e850",
      "target": "85ddc2bc-860c-4988-82b5-960598217975",
      "properties": {
        "prop_1": "Même un nombre totalement arbitraire et sans lien logique avec la question sert d'ancre inconsciente et influence l'estimation finale."
      }
    },
    {
      "id": "e_275_soas",
      "type": "COMME",
      "source": "6e8bd7be-aa0b-4c30-be34-4e8e558a1a3a",
      "target": "e12cc8a1-822e-4dab-89a6-5680fd80e60a",
      "properties": {
        "prop_1": "Votre croyance initiale n'est révisée que très partiellement face aux nouvelles preuves",
        "prop_2": "au lieu d'être mise à jour à la hauteur de leur poids réel."
      }
    },
    {
      "id": "e_276_p7mb",
      "type": "COMME",
      "source": "6e8bd7be-aa0b-4c30-be34-4e8e558a1a3a",
      "target": "0cef0a37-4fd4-42a8-9988-b54435be714f",
      "properties": {
        "prop_1": "Les nouvelles informations positives sur l'équipe ne parviennent à corriger que faiblement votre estimation initiale",
        "prop_2": "restée ancrée sur votre première impression."
      }
    },
    {
      "id": "e_277_gq99",
      "type": "COMME",
      "source": "6e8bd7be-aa0b-4c30-be34-4e8e558a1a3a",
      "target": "4acf868c-4abb-4a95-a39b-44098961a586",
      "properties": {
        "prop_1": "L'estimation de départ reste dominante et n'est ajustée que très progressivement",
        "prop_2": "malgré l'accumulation de preuves contraires solides."
      }
    },
    {
      "id": "e_278_8xr7",
      "type": "COMME",
      "source": "2e49f2a9-1663-4521-9265-6d22d8a27461",
      "target": "48485a04-cc55-4a0b-a128-78ea22524d02",
      "properties": {
        "prop_1": "Le jugement sur le prix se fait par comparaison avec la référence récente (le menu cher)",
        "prop_2": "et non par une évaluation absolue et indépendante du prix réel."
      }
    },
    {
      "id": "e_279_feep",
      "type": "COMME",
      "source": "2e49f2a9-1663-4521-9265-6d22d8a27461",
      "target": "82978103-828b-4785-ae12-184b888c42a3",
      "properties": {
        "prop_1": "La perception du poids dépend du stimulus précédent servant de référence",
        "prop_2": "et non d'une mesure absolue et indépendante."
      }
    },
    {
      "id": "e_280_2321",
      "type": "COMME",
      "source": "2e49f2a9-1663-4521-9265-6d22d8a27461",
      "target": "f59c1b12-1d70-4882-831f-451177fc3dba",
      "properties": {
        "prop_1": "L'évaluation de la taille se fait par contraste avec la visite précédente",
        "prop_2": "plutôt que par une mesure objective de la surface réelle."
      }
    },
    {
      "id": "e_281_956o",
      "type": "COMME",
      "source": "0ee7a1e2-5173-4739-b56b-afffbb0376db",
      "target": "fcbbf0bb-421e-4e4e-a5cd-23cbd27f71bf",
      "properties": {
        "prop_1": "La comparaison directe amplifie artificiellement les différences perçues",
        "prop_2": "qui s'estompent largement dès lors que les options ne sont plus évaluées simultanément."
      }
    },
    {
      "id": "e_282_yagz",
      "type": "COMME",
      "source": "0ee7a1e2-5173-4739-b56b-afffbb0376db",
      "target": "722d90f3-8335-4481-8721-b8235bd9e774",
      "properties": {
        "prop_1": "L'évaluation conjointe pousse à surpondérer chaque petite différence",
        "prop_2": "qui perdrait presque toute son importance en évaluation isolée."
      }
    },
    {
      "id": "e_283_hoe3",
      "type": "COMME",
      "source": "0ee7a1e2-5173-4739-b56b-afffbb0376db",
      "target": "f2955cd0-8238-4a60-af0d-e727c713fa87",
      "properties": {
        "prop_1": "La mise en comparaison directe grossit artificiellement l'écart perçu entre les deux options",
        "prop_2": "au-delà de sa réelle importance pratique."
      }
    },
    {
      "id": "e_284_wgc6",
      "type": "COMME",
      "source": "8bd69e1e-a737-4d0c-baf1-fc54d8d57024",
      "target": "a016ede8-e498-4d52-bb94-daced971ab17",
      "properties": {
        "prop_1": "L'attention se concentre exclusivement sur la dimension mise en avant (le salaire)",
        "prop_2": "en éclipsant les nombreux autres facteurs qui déterminent en réalité le bien-être global."
      }
    },
    {
      "id": "e_285_cgr6",
      "type": "COMME",
      "source": "8bd69e1e-a737-4d0c-baf1-fc54d8d57024",
      "target": "f87477e7-b30d-4689-acfb-786a8b9aac4b",
      "properties": {
        "prop_1": "L'aspect saillant du changement (le climat) capte toute l'attention lors de la prédiction",
        "prop_2": "au détriment des nombreux éléments de vie qui",
        "prop_3": "eux",
        "prop_4": "ne changeront pas."
      }
    },
    {
      "id": "e_286_uhju",
      "type": "COMME",
      "source": "8bd69e1e-a737-4d0c-baf1-fc54d8d57024",
      "target": "38367551-b87a-48c6-932e-9f0119f5ba59",
      "properties": {
        "prop_1": "L'attention exclusive portée à cet événement précis exagère son importance réelle dans la trajectoire globale",
        "prop_2": "plus longue et plus riche en opportunités que ce seul moment."
      }
    },
    {
      "id": "e_287_kb0v",
      "type": "COMME",
      "source": "ef012956-f53a-4782-ba19-7d48c3388ac5",
      "target": "83770309-89aa-48a0-b1d5-3b0aa128301c",
      "properties": {
        "prop_1": "Le jugement sur le produit dépend de la formulation choisie (gain vs perte) et non du contenu factuel réel",
        "prop_2": "pourtant équivalent dans les deux cas."
      }
    },
    {
      "id": "e_288_bwsw",
      "type": "COMME",
      "source": "ef012956-f53a-4782-ba19-7d48c3388ac5",
      "target": "7119d0e9-4a8f-429d-92bd-debe9583685e",
      "properties": {
        "prop_1": "La présentation en termes de gain (survie) rend l'option plus acceptable que la présentation en termes de perte (décès)",
        "prop_2": "pour un même risque objectif."
      }
    },
    {
      "id": "e_289_alv8",
      "type": "COMME",
      "source": "ef012956-f53a-4782-ba19-7d48c3388ac5",
      "target": "c4f38c54-57c0-4ada-8590-c3052a52eec9",
      "properties": {
        "prop_1": "Le choix du cadrage (réussite plutôt qu'échec) modifie la perception de la qualité de l'établissement sans que l'information factuelle ne change."
      }
    },
    {
      "id": "e_290_llv1",
      "type": "COMME",
      "source": "0ecdff02-eaaa-40d4-81a9-e24750909286",
      "target": "304206a3-0748-4bd9-925f-4917d32d4a12",
      "properties": {
        "prop_1": "Le raisonnement se fait sur la valeur nominale (le chiffre affiché sur la fiche de paie) plutôt que sur la valeur réelle une fois l'inflation prise en compte."
      }
    },
    {
      "id": "e_291_ccdo",
      "type": "COMME",
      "source": "0ecdff02-eaaa-40d4-81a9-e24750909286",
      "target": "ea8aac12-a2cb-4ae1-8f84-1795af1e2784",
      "properties": {
        "prop_1": "La comparaison des sommes se fait en valeur nominale brute",
        "prop_2": "sans tenir compte de l'érosion du pouvoir d'achat de la monnaie entre les deux dates."
      }
    },
    {
      "id": "e_292_eoxx",
      "type": "COMME",
      "source": "0ecdff02-eaaa-40d4-81a9-e24750909286",
      "target": "275e864c-a0a0-467f-8c54-58a391ca44e2",
      "properties": {
        "prop_1": "L'attention se porte sur le montant nominal reçu",
        "prop_2": "plutôt que sur ce que ce montant permet réellement d'acheter compte tenu du contexte économique."
      }
    },
    {
      "id": "8e8f6b5c-6b92-4eb8-bca7-6abfa09d76eb",
      "type": ".",
      "source": "66055844-7315-488f-b9ce-6639b03843ae",
      "target": "dc7ba9a8-482b-4549-be3e-b883b0c202d5",
      "properties": {}
    },
    {
      "id": "21501407-1a65-41f7-bcb9-854ec906026f",
      "type": ".",
      "source": "0353572f-acb4-4bbd-9637-94200f82a203",
      "target": "dc7ba9a8-482b-4549-be3e-b883b0c202d5",
      "properties": {}
    }
  ]
},

{
  "id": "fin-de-vie-numerique",
  "title": "Fin de vie numérique",
  "category": "Droits & Démarches",
  "description": "Ce que deviennent comptes, contenus et actifs en ligne après un décès : le cadre légal français, les dispositifs des plateformes, et ce qui reste hors d'atteinte.",
  "longDescription": "La loi française permet depuis 2016 d'organiser le sort de ses données après sa mort — mais le registre destiné à recueillir ces volontés n'a jamais été créé. Ce graphe distingue les trois voies qui subsistent : les directives déposées chez un notaire, les dispositifs proposés par chaque plateforme, et les droits que la loi reconnaît aux héritiers à défaut de volonté exprimée. Il sépare aussi ce qui relève de la succession classique de ce qui n'en relève pas — un compte bancaire se transmet, une clé de portefeuille crypto se perd.",
  "nodes": [
    {
      "id": "273f3947-13e1-44ea-bc5f-393638661b3d",
      "label": "Fin de vie numérique",
      "category": "racine",
      "properties": {
        "prop_1": "Ensemble des comptes contenus et actifs en ligne qui subsistent au décès.",
        "prop_2": "Aucun n'est clôturé automatiquement si les plateformes ne sont pas informées."
      }
    },
    {
      "id": "9bbf47c9-70d1-4593-badd-8fd10f9b8eea",
      "label": "Article 85 (loi Informatique et Libertés)",
      "category": "cadre_legal",
      "properties": {
        "prop_1": "Issu de la loi pour une République numérique de 2016.",
        "prop_2": "Permet de définir des directives sur la conservation, l'effacement et la communication de ses données après le décès.",
        "prop_3": "Modifiables et révocables à tout moment."
      }
    },
    {
      "id": "f91dbc0e-8a81-47da-8859-9995f6b5e365",
      "label": "Directives générales",
      "category": "cadre_legal",
      "properties": {
        "prop_1": "Couvrent l'ensemble des données",
        "prop_2": "tous services confondus.",
        "prop_3": "Supposent un dépôt auprès d'un tiers pour être retrouvées."
      }
    },
    {
      "id": "c9def8e7-aaa3-452d-b28e-fb1d3b7484e3",
      "label": "Directives particulières",
      "category": "cadre_legal",
      "properties": {
        "Ne valent que pour un service donné. Consentement spécifique exigé": "l'acceptation des conditions générales d'utilisation ne suffit pas."
      }
    },
    {
      "id": "7d2ce016-f502-4f3b-bd96-349c5e9aabdb",
      "label": "Droits des héritiers (à défaut de directives)",
      "category": "cadre_legal",
      "properties": {
        "prop_1": "Accès aux données utiles au règlement de la succession",
        "prop_2": "clôture des comptes",
        "prop_3": "opposition au traitement",
        "prop_4": "mise à jour après décès.",
        "prop_5": "N'ouvre pas droit à la correspondance privée."
      }
    },
    {
      "id": "96dc96bc-1ece-47fd-9eb3-c79975ceae1a",
      "label": "Registre unique",
      "category": "blocage",
      "properties": {
        "Prévu par la loi pour référencer les directives générales. Jamais créé": "les décrets d'application n'ont pas été publiés."
      }
    },
    {
      "id": "ced5ce40-907f-4135-9d02-5941b4e1ea7b",
      "label": "Tiers de confiance certifié CNIL",
      "category": "blocage",
      "properties": {
        "prop_1": "Certification prévue par la loi jamais mise en œuvre. Aucun opérateur certifié à ce jour."
      }
    },
    {
      "id": "8dd42205-1feb-43c4-bd62-65293b0f3fc4",
      "label": "Dépôt chez le notaire",
      "category": "repli",
      "properties": {
        "prop_1": "Solution de repli en l'absence du dispositif légal.",
        "prop_2": "Le notaire conserve les directives et les révèle au décès. C'est aujourd'hui la seule voie opérationnelle pour des directives générales."
      }
    },
    {
      "id": "ebb276d5-7c82-48ba-8135-0e4b2672a1cb",
      "label": "Héritiers",
      "category": "humain",
      "properties": {
        "prop_1": "Titulaires des droits post-mortem lorsque le défunt n'a rien prévu."
      }
    },
    {
      "id": "169a012e-c4bc-4f66-a41b-2e781b8b6d68",
      "label": "Exécuteur testamentaire",
      "category": "humain",
      "properties": {
        "prop_1": "Désigné au testament",
        "prop_2": "veille à l'exécution des volontés. Compétent sur le patrimoine",
        "prop_3": "pas sur les accès aux services en ligne."
      }
    },
    {
      "id": "df4750f8-80f6-4af2-b63c-af8aa21421f9",
      "label": "Contact légataire désigné",
      "category": "humain",
      "properties": {
        "prop_1": "Personne désignée dans les paramètres d'un service.",
        "prop_2": "Agit sans jamais connaître le mot de passe du défunt."
      }
    },
    {
      "id": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "label": "Dispositifs proposés par les plateformes",
      "category": "dispositif",
      "properties": {
        "prop_1": "Réglages internes à chaque service",
        "prop_2": "gratuits et immédiats. En pratique plus efficaces que le cadre légal",
        "prop_3": "qui reste incomplet."
      }
    },
    {
      "id": "ebac8d14-6292-4fcf-a1f8-95170813fe74",
      "label": "Gestionnaire de compte inactif (Google)",
      "category": "dispositif",
      "properties": {
        "Se déclenche après une période d'inactivité fixée par l'utilisateur": "",
        "prop_2": "des contacts sont prévenus",
        "prop_3": "certaines données transférées",
        "prop_4": "ou le compte supprimé."
      }
    },
    {
      "id": "8a9d3dff-07c6-4477-a109-9b00861ff56a",
      "label": "Contact légataire (Meta)",
      "category": "dispositif",
      "properties": {
        "prop_1": "Facebook et Instagram.",
        "prop_2": "Gère un compte transformé en page de commémoration."
      }
    },
    {
      "id": "9ccc52c9-eb8a-4796-bbb6-c9e0ed978293",
      "label": "Contact légataire (Apple)",
      "category": "dispositif",
      "properties": {
        "prop_1": "Suppose la remise d'une clé d'accès à la personne désignée du vivant du titulaire."
      }
    },
    {
      "id": "0a181a91-cb42-4fc5-9d3b-34b9813c7393",
      "label": "Commémoration ou suppression (LinkedIn, X)",
      "category": "dispositif",
      "properties": {
        "prop_1": "Profil commémoratif ou fermeture sur demande des proches et sur présentation de justificatifs."
      }
    },
    {
      "id": "2c3c7470-4bc7-46e7-a21f-e7861f19579f",
      "label": "Réseaux sociaux (contenus publiés)",
      "category": "contenu",
      "properties": {
        "prop_1": "Restent visibles indéfiniment si personne n'intervient."
      }
    },
    {
      "id": "978c3ec9-a102-4aa6-b4c8-074dda3c6751",
      "label": "Données cloud (photos, documents)",
      "category": "contenu",
      "properties": {
        "prop_1": "Souvent la part la plus précieuse pour les proches et la moins couverte par les droits des héritiers."
      }
    },
    {
      "id": "8ec75168-427b-4efd-ba73-2d62f9ad1d5c",
      "label": "Boîte mail",
      "category": "contenu",
      "properties": {
        "prop_1": "Point de récupération de la plupart des autres comptes.",
        "prop_2": "À traiter en priorité",
        "prop_3": "avant les services qui en dépendent."
      }
    },
    {
      "id": "b1409ee8-b57a-41d5-bae1-1e6033059ae2",
      "label": "Comptes bancaires en ligne",
      "category": "actif",
      "properties": {
        "Relèvent de la succession classique": "bloqués dès que la banque est informée. Aucune directive numérique n'est nécessaire."
      }
    },
    {
      "id": "3be0ec8e-287f-44dc-a03d-86c01e864f4a",
      "label": "Crypto-actifs (portefeuille personnel)",
      "category": "actif",
      "properties": {
        "Inaccessibles sans la clé privée. Ni la plateforme, ni le notaire, ni un juge ne peuvent y suppléer": "la perte est définitive."
      }
    },
    {
      "id": "125dfac5-860e-4f74-8888-9e941229e8b7",
      "label": "Abonnements récurrents",
      "category": "actif",
      "properties": {
        "prop_1": "Continuent de prélever tant qu'ils ne sont pas résiliés y compris plusieurs années après le décès."
      }
    },
    {
      "id": "550f84b7-ed74-4694-b5e4-06d579c2494a",
      "label": "Gestionnaire de mots de passe",
      "category": "outil",
      "properties": {
        "prop_1": "Centralise les accès",
        "prop_2": "Plusieurs proposent une fonction d'accès d'urgence qui organise la transmission sans divulgation préalable."
      }
    },
    {
      "id": "570d2494-2fc8-43d5-8ba1-23ca6f8ec0fd",
      "label": "Accès d'urgence",
      "category": "outil",
      "properties": {
        "Fonction de transmission différée": "le bénéficiaire obtient l'accès après un délai de carence sauf refus du titulaire."
      }
    },
    {
      "id": "0c08de9f-3c29-4f6f-9050-ecece94dafbb",
      "label": "Inventaire des comptes (sans mots de passe)",
      "category": "outil",
      "properties": {
        "prop_1": "Liste ce qui existe et où le chercher.",
        "prop_2": "Ne contient aucun code donc ne se périme pas."
      }
    },
    {
      "id": "9145a426-e1b7-4111-8319-bf1cdb40ef48",
      "label": "Partage de mots de passe",
      "category": "risque",
      "properties": {
        "Écrire ses codes dans un testament ou une lettre": "périmé au premier changement et contraire aux conditions d'utilisation de la quasi-totalité des services."
      }
    },
    {
      "id": "ad062329-0f2b-4abc-a3a8-4e634cd15a35",
      "label": "Directives anticipées (santé)",
      "category": "perimetre_distinct",
      "properties": {
        "prop_1": "Volet médical de la fin de vie",
        "prop_2": "Régi par le code de la santé publique.",
        "prop_3": "Sans aucun effet sur les comptes en ligne."
      }
    },
    {
      "id": "0728f797-4140-4f61-a838-bba1dc56bdb7",
      "label": "Personne de confiance (santé)",
      "category": "perimetre_distinct",
      "properties": {
        "prop_1": "Notion de droit de la santé.",
        "Ne dispose d'aucun pouvoir sur les données numériques": "à ne pas confondre avec le contact légataire."
      }
    },
    {
      "id": "8f1426bc-cf84-4771-9ffc-ee7095399f26",
      "label": "Testament / succession",
      "category": "perimetre_distinct",
      "properties": {
        "prop_1": "Organise la transmission du patrimoine. Ne transmet ni les accès aux services en ligne ni les secrets cryptographiques."
      }
    }
  ],
  "relationships": [
    {
      "id": "e_30_gd6o",
      "type": "S'APPUIE_SUR",
      "source": "273f3947-13e1-44ea-bc5f-393638661b3d",
      "target": "9bbf47c9-70d1-4593-badd-8fd10f9b8eea",
      "properties": {
        "prop_1": "Le droit existe depuis 2016",
        "prop_2": "mais il suppose une démarche active du vivant."
      }
    },
    {
      "id": "e_31_g86h",
      "type": "SE_REGLE_PAR",
      "source": "273f3947-13e1-44ea-bc5f-393638661b3d",
      "target": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "properties": {
        "Voie la plus efficace": "gratuite",
        "prop_2": "immédiate",
        "prop_3": "sans intermédiaire ni formalisme."
      }
    },
    {
      "id": "e_32_nz2j",
      "type": "COMMENCE_PAR",
      "source": "273f3947-13e1-44ea-bc5f-393638661b3d",
      "target": "0c08de9f-3c29-4f6f-9050-ecece94dafbb",
      "properties": {
        "prop_1": "On ne peut transmettre que ce dont l'existence est connue des proches."
      }
    },
    {
      "id": "e_33_zd2i",
      "type": "NE_CONCERNE_PAS",
      "source": "273f3947-13e1-44ea-bc5f-393638661b3d",
      "target": "ad062329-0f2b-4abc-a3a8-4e634cd15a35",
      "properties": {
        "prop_1": "Deux planifications distinctes",
        "souvent mélangées": "régimes et effets sans rapport."
      }
    },
    {
      "id": "e_34_sw09",
      "type": "SE_DISTINGUE_DE",
      "source": "273f3947-13e1-44ea-bc5f-393638661b3d",
      "target": "8f1426bc-cf84-4771-9ffc-ee7095399f26",
      "properties": {
        "Périmètre différent": "l'un vise le patrimoine",
        "prop_2": "l'autre les accès et les contenus."
      }
    },
    {
      "id": "e_35_bpnd",
      "type": "PREVOIT",
      "source": "9bbf47c9-70d1-4593-badd-8fd10f9b8eea",
      "target": "f91dbc0e-8a81-47da-8859-9995f6b5e365",
      "properties": {
        "prop_1": "Portée maximale",
        "prop_2": "mais dispositif de dépôt inachevé."
      }
    },
    {
      "id": "e_36_e9z8",
      "type": "PREVOIT",
      "source": "9bbf47c9-70d1-4593-badd-8fd10f9b8eea",
      "target": "c9def8e7-aaa3-452d-b28e-fb1d3b7484e3",
      "properties": {
        "prop_1": "Seule branche pleinement opérationnelle aujourd'hui."
      }
    },
    {
      "id": "e_37_agfl",
      "type": "PREVOIT_A_DEFAUT",
      "source": "9bbf47c9-70d1-4593-badd-8fd10f9b8eea",
      "target": "7d2ce016-f502-4f3b-bd96-349c5e9aabdb",
      "properties": {
        "prop_1": "Filet de sécurité légal",
        "prop_2": "au périmètre volontairement restreint."
      }
    },
    {
      "id": "e_38_b1e2",
      "type": "SONT_EXERCES_PAR",
      "source": "7d2ce016-f502-4f3b-bd96-349c5e9aabdb",
      "target": "ebb276d5-7c82-48ba-8135-0e4b2672a1cb",
      "properties": {
        "prop_1": "Sur justification de la qualité d'héritier."
      }
    },
    {
      "id": "e_39_cmyl",
      "type": "SE_DEPOSENT_AUPRES_DE",
      "source": "f91dbc0e-8a81-47da-8859-9995f6b5e365",
      "target": "ced5ce40-907f-4135-9d02-5941b4e1ea7b",
      "properties": {
        "Prévu par la loi. Aucun opérateur n'est certifié": "la voie est fermée en pratique."
      }
    },
    {
      "id": "e_40_1076",
      "type": "FIGURE_DANS",
      "source": "ced5ce40-907f-4135-9d02-5941b4e1ea7b",
      "target": "96dc96bc-1ece-47fd-9eb3-c79975ceae1a",
      "properties": {
        "prop_1": "Les deux dispositifs dépendent de décrets jamais publiés."
      }
    },
    {
      "id": "e_41_s23z",
      "type": "BLOQUE",
      "source": "96dc96bc-1ece-47fd-9eb3-c79975ceae1a",
      "target": "f91dbc0e-8a81-47da-8859-9995f6b5e365",
      "properties": {
        "prop_1": "Des directives rédigées et conservées chez soi ne seront jamais retrouvées."
      }
    },
    {
      "id": "e_42_b666",
      "type": "PASSENT_PAR",
      "source": "f91dbc0e-8a81-47da-8859-9995f6b5e365",
      "target": "8dd42205-1feb-43c4-bd62-65293b0f3fc4",
      "properties": {
        "prop_1": "Seul relais fonctionnel tant que le dispositif légal reste inachevé."
      }
    },
    {
      "id": "e_43_zn1y",
      "type": "CONSERVE",
      "source": "8dd42205-1feb-43c4-bd62-65293b0f3fc4",
      "target": "0c08de9f-3c29-4f6f-9050-ecece94dafbb",
      "properties": {
        "Le document devient repérable": "c'est ce qui lui donne son utilité."
      }
    },
    {
      "id": "e_44_e9xh",
      "type": "EST_REVELE_A",
      "source": "8dd42205-1feb-43c4-bd62-65293b0f3fc4",
      "target": "169a012e-c4bc-4f66-a41b-2e781b8b6d68",
      "properties": {
        "prop_1": "Encore faut-il que quelqu'un sache que le dépôt existe."
      }
    },
    {
      "id": "e_45_072c",
      "type": "S'ENREGISTRENT_VIA",
      "source": "c9def8e7-aaa3-452d-b28e-fb1d3b7484e3",
      "target": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "properties": {
        "Le consentement doit être spécifique": "accepter les CGU ne vaut pas directive."
      }
    },
    {
      "id": "e_46_ypyo",
      "type": "COMPREND",
      "source": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "target": "ebac8d14-6292-4fcf-a1f8-95170813fe74",
      "properties": {
        "Le plus complet": "délai paramétrable",
        "prop_2": "contacts prévenus",
        "prop_3": "transfert ou suppression."
      }
    },
    {
      "id": "e_47_0cx9",
      "type": "COMPREND",
      "source": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "target": "8a9d3dff-07c6-4477-a109-9b00861ff56a",
      "properties": {
        "prop_1": "Couvre Facebook et Instagram en un seul réglage."
      }
    },
    {
      "id": "e_48_vseo",
      "type": "COMPREND",
      "source": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "target": "9ccc52c9-eb8a-4796-bbb6-c9e0ed978293",
      "properties": {
        "Particularité": "la clé d'accès doit être remise du vivant",
        "prop_2": "sinon le réglage est inopérant."
      }
    },
    {
      "id": "e_49_96lc",
      "type": "COMPREND",
      "source": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "target": "0a181a91-cb42-4fc5-9d3b-34b9813c7393",
      "properties": {
        "Pas de désignation préalable": "la demande vient des proches",
        "prop_2": "après coup."
      }
    },
    {
      "id": "e_50_srjb",
      "type": "DESIGNE",
      "source": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "target": "df4750f8-80f6-4af2-b63c-af8aa21421f9",
      "properties": {
        "Fonctionne sans partage de mot de passe": "c'est tout l'intérêt du mécanisme."
      }
    },
    {
      "id": "e_51_6t14",
      "type": "TRANSFERE",
      "source": "ebac8d14-6292-4fcf-a1f8-95170813fe74",
      "target": "978c3ec9-a102-4aa6-b4c8-074dda3c6751",
      "properties": {
        "prop_1": "Seule voie prévue à l'avance pour transmettre des souvenirs numériques."
      }
    },
    {
      "id": "e_52_wmoj",
      "type": "COMMEMORE",
      "source": "8a9d3dff-07c6-4477-a109-9b00861ff56a",
      "target": "2c3c7470-4bc7-46e7-a21f-e7861f19579f",
      "properties": {
        "prop_1": "Le compte reste visible mais figé",
        "prop_2": "sans possibilité de connexion."
      }
    },
    {
      "id": "e_53_ousl",
      "type": "DONNE_ACCES_A",
      "source": "9ccc52c9-eb8a-4796-bbb6-c9e0ed978293",
      "target": "978c3ec9-a102-4aa6-b4c8-074dda3c6751",
      "properties": {
        "prop_1": "Accès conditionné à la clé remise du vivant et à l'acte de décès."
      }
    },
    {
      "id": "e_54_njwk",
      "type": "FERME",
      "source": "0a181a91-cb42-4fc5-9d3b-34b9813c7393",
      "target": "2c3c7470-4bc7-46e7-a21f-e7861f19579f",
      "properties": {
        "prop_1": "Demande à formuler par les proches",
        "prop_2": "avec justificatifs."
      }
    },
    {
      "id": "e_55_hkdt",
      "type": "FONT_CLOTURER",
      "source": "7d2ce016-f502-4f3b-bd96-349c5e9aabdb",
      "target": "2c3c7470-4bc7-46e7-a21f-e7861f19579f",
      "properties": {
        "prop_1": "Recours utile quand rien n'a été paramétré du vivant."
      }
    },
    {
      "id": "e_56_kg2t",
      "type": "DONNENT_ACCES_A",
      "source": "7d2ce016-f502-4f3b-bd96-349c5e9aabdb",
      "target": "978c3ec9-a102-4aa6-b4c8-074dda3c6751",
      "properties": {
        "Uniquement ce qui est utile au règlement de la succession": "pas de tri des souvenirs."
      }
    },
    {
      "id": "e_57_r7r5",
      "type": "REINITIALISE",
      "source": "8ec75168-427b-4efd-ba73-2d62f9ad1d5c",
      "target": "2c3c7470-4bc7-46e7-a21f-e7861f19579f",
      "properties": {
        "prop_1": "Qui contrôle la boîte mail contrôle la réinitialisation de presque tout le reste."
      }
    },
    {
      "id": "e_58_0fz3",
      "type": "REVELENT",
      "source": "b1409ee8-b57a-41d5-bae1-1e6033059ae2",
      "target": "125dfac5-860e-4f74-8888-9e941229e8b7",
      "properties": {
        "prop_1": "Les relevés sont le moyen le plus fiable de recenser les abonnements oubliés."
      }
    },
    {
      "id": "e_59_cnzf",
      "type": "NE_CONDITIONNE_PAS",
      "source": "8f1426bc-cf84-4771-9ffc-ee7095399f26",
      "target": "b1409ee8-b57a-41d5-bae1-1e6033059ae2",
      "properties": {
        "prop_1": "Les comptes reviennent aux héritiers par la dévolution légale",
        "prop_2": "testament ou non."
      }
    },
    {
      "id": "e_60_szbs",
      "type": "NE_TRANSMET_PAS",
      "source": "8f1426bc-cf84-4771-9ffc-ee7095399f26",
      "target": "3be0ec8e-287f-44dc-a03d-86c01e864f4a",
      "properties": {
        "prop_1": "Un testament transmet un droit",
        "prop_2": "pas un secret cryptographique."
      }
    },
    {
      "id": "e_61_rt7j",
      "type": "NOMME",
      "source": "8f1426bc-cf84-4771-9ffc-ee7095399f26",
      "target": "169a012e-c4bc-4f66-a41b-2e781b8b6d68",
      "properties": {
        "prop_1": "Compétence patrimoniale",
        "prop_2": "distincte du contact légataire des plateformes."
      }
    },
    {
      "id": "e_62_mnug",
      "type": "PRESERVE_L'ACCES_A",
      "source": "550f84b7-ed74-4694-b5e4-06d579c2494a",
      "target": "3be0ec8e-287f-44dc-a03d-86c01e864f4a",
      "properties": {
        "prop_1": "Sans la clé privée",
        "prop_2": "la perte est définitive et sans recours possible."
      }
    },
    {
      "id": "e_63_j5pk",
      "type": "PROPOSE",
      "source": "550f84b7-ed74-4694-b5e4-06d579c2494a",
      "target": "570d2494-2fc8-43d5-8ba1-23ca6f8ec0fd",
      "properties": {
        "À activer explicitement": "la fonction existe mais reste inactive par défaut."
      }
    },
    {
      "id": "e_64_g0c1",
      "type": "BENEFICIE_A",
      "source": "570d2494-2fc8-43d5-8ba1-23ca6f8ec0fd",
      "target": "df4750f8-80f6-4af2-b63c-af8aa21421f9",
      "properties": {
        "prop_1": "Transmission après un délai de carence",
        "prop_2": "sans divulgation préalable des codes."
      }
    },
    {
      "id": "e_65_6hmq",
      "type": "EXCLUT",
      "source": "0c08de9f-3c29-4f6f-9050-ecece94dafbb",
      "target": "9145a426-e1b7-4111-8319-bf1cdb40ef48",
      "properties": {
        "prop_1": "Un document contenant des codes est périmé au premier changement de mot de passe."
      }
    },
    {
      "id": "e_66_dipe",
      "type": "CONTREVIENT_A",
      "source": "9145a426-e1b7-4111-8319-bf1cdb40ef48",
      "target": "d75afc60-16d8-4e84-bd2d-fab0a4c07bcd",
      "properties": {
        "prop_1": "Un accès effectué avec les codes du défunt n'est pas un accès légitime."
      }
    },
    {
      "id": "e_67_95wm",
      "type": "SONT_CONFIEES_A",
      "source": "ad062329-0f2b-4abc-a3a8-4e634cd15a35",
      "target": "0728f797-4140-4f61-a838-bba1dc56bdb7",
      "properties": {
        "Rôle médical uniquement": "aucun pouvoir sur les comptes et les données en ligne."
      }
    }
  ]
},

{
  "id": "assurances",
  "title": "Assurances",
  "category": "Finances et Patrimoine",
  "description": "Les assurances et leur couverture",
  "longDescription": "Les assurances sont des contrats qui permettent de se protéger contre certains risques financiers ou matériels. Elles peuvent être liées à des cartes bancaires, des contrats d'habitation, ou d'autres types de polices d'assurance.",
  "nodes": [
    {
      "id": "9d414934-3d1d-48b3-ae6f-e104f3b3603a",
      "label": "Carte Bancaire Gold",
      "category": "Assurance",
      "properties": {
        "Type": "Visa Premier",
        "prop_2": "Garanties automatiques"
      }
    },
    {
      "id": "d6875154-b319-4e9e-b208-502b91241069",
      "label": "Assurance Voyage",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus automatiquement",
        "prop_2": "Si payé par carte Gold"
      }
    },
    {
      "id": "0fca31f2-fbe9-4bfd-8b02-cbd6294fec8a",
      "label": "Location Voiture",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus automatiquement",
        "prop_2": "Si couverte par carte Gold"
      }
    },
    {
      "id": "cd0b1174-cf9b-44b8-8cc2-77f62ed2e50a",
      "label": "Casse & Achat",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus automatiquement",
        "prop_2": "Si couverte par carte ou MRH"
      }
    },
    {
      "id": "b9a5372c-6877-4e40-ac5c-d937cdafedf8",
      "label": "Téléphone Mobile",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus automatiquement",
        "prop_2": "Option souvent activée",
        "prop_3": "Si couverte par carte ou MRH"
      }
    },
    {
      "id": "1a68940d-4703-4fb4-ba03-2fe9197998f0",
      "label": "Assurance Habitation",
      "category": "Assurance",
      "properties": {
        "Type": "MRH",
        "prop_2": "Garanties déjà incluses"
      }
    },
    {
      "id": "542d40f4-c65b-44d7-93ba-07702a2b2a9b",
      "label": "RC Vie Privée Famille",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus de base",
        "prop_2": "RC famille incluse MRH"
      }
    },
    {
      "id": "da89c88b-ad30-416f-b2e0-f590b62682b2",
      "label": "Protection Juridique",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus de base",
        "prop_2": "Si incluse dans MRH"
      }
    },
    {
      "id": "6dc8ae12-6517-4b09-800b-0f1997e6a057",
      "label": "Appareils Électroménager",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Option souvent activée"
      }
    },
    {
      "id": "d12a1422-f142-4ef6-bf89-e03b90391c5b",
      "label": "Mutuelle Employeur",
      "category": "Assurance",
      "properties": {
        "prop_1": "Obligatoire depuis 2016"
      }
    },
    {
      "id": "e0abaa57-1119-4865-be16-60c843783a09",
      "label": "Soins de Santé",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Prise en charge partielle",
        "prop_2": "Mutuelle collective obligatoire"
      }
    },
    {
      "id": "ce20ef39-3b12-4c49-8642-636f8f6ca260",
      "label": "Rapatriement Sanitaire",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Inclus selon contrat"
      }
    },
    {
      "id": "eff62cb2-11e5-4571-9664-ff374368fbbe",
      "label": "Prévoyance Collective",
      "category": "Assurance",
      "properties": {
        "prop_1": "Contrat employeur",
        "prop_2": "Avant toute souscription"
      }
    },
    {
      "id": "e0d57603-d50c-4cc6-867c-18f7492df9ae",
      "label": "Arrêt Maladie",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Selon convention collective",
        "prop_2": "Si prévoyance employeur suffisante"
      }
    },
    {
      "id": "ac1eeba5-3c08-4945-ab99-96ac12188248",
      "label": "Invalidité",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Selon convention collective",
        "prop_2": "Obligatoire crédit immo",
        "prop_3": "Si prévoyance employeur suffisante"
      }
    },
    {
      "id": "3e1e27ca-cf87-4658-8ada-bc5e1f04c081",
      "label": "Décès",
      "category": "Unassigned",
      "properties": {
        "prop_1": "Capital versé aux proches",
        "prop_2": "Obligatoire crédit immo"
      }
    },
    {
      "id": "927dd001-6853-471c-a994-bc63df61dd29",
      "label": "Assurance Emprunteur Banque",
      "category": "Assurance",
      "properties": {
        "prop_1": "Souscrite à la signature",
        "prop_2": "Résiliation possible à tout moment"
      }
    },
    {
      "id": "b0ce9433-cd80-4251-bf22-f6e7317d50a2",
      "label": "Délégation Assurance",
      "category": "Action",
      "properties": {
        "prop_1": "Loi Lemoine 2022",
        "prop_2": "2 à 3x moins cher"
      }
    },
    {
      "id": "d1c97dc3-87bf-41b5-8fed-b73187a26d6d",
      "label": "Assurance Voyage Séparée",
      "category": "Doublon",
      "properties": {
        "prop_1": "Souscrite à chaque départ"
      }
    },
    {
      "id": "2e077d57-c658-4f4e-b621-325f1ec153a6",
      "label": "Assurance Scolaire",
      "category": "Doublon",
      "properties": {
        "prop_1": "Souscrite chaque rentrée"
      }
    },
    {
      "id": "840c82a8-ba38-41bd-ad26-213131972a48",
      "label": "Protection Juridique Séparée",
      "category": "Doublon",
      "properties": {
        "prop_1": "Contrat individuel"
      }
    },
    {
      "id": "d62c2d4b-e151-45b8-83bb-4daaafe1712e",
      "label": "Mutuelle Individuelle",
      "category": "Doublon",
      "properties": {
        "prop_1": "Ancienne mutuelle maintenue"
      }
    },
    {
      "id": "bf610ed0-158f-4e6c-a8ab-2d64b6a85482",
      "label": "Prévoyance Individuelle",
      "category": "Doublon",
      "properties": {
        "prop_1": "Contrat personnel"
      }
    },
    {
      "id": "dc703d5f-3ca5-4912-aaca-44f8064085af",
      "label": "Garantie Étendue Magasin",
      "category": "Doublon",
      "properties": {
        "prop_1": "Souscrite à l'achat"
      }
    },
    {
      "id": "fa74b04d-8029-4ea4-af55-c738d8bed74f",
      "label": "Option Zéro Franchise Loueur",
      "category": "Doublon",
      "properties": {
        "prop_1": "Payée au comptoir"
      }
    },
    {
      "id": "9f8956c1-5b47-46a0-8b5c-f229d088c630",
      "label": "Assurance Téléphone Opérateur",
      "category": "Doublon",
      "properties": {
        "prop_1": "Mensualité opérateur"
      }
    },
    {
      "id": "ee9e0a64-e121-48c2-b80b-2f9aa309e36e",
      "label": "Mail RH",
      "category": "Action",
      "properties": {
        "prop_1": "Demande détail prévoyance"
      }
    },
    {
      "id": "420c664f-2397-429e-befc-ac7f58ec3d4f",
      "label": "Relecture Contrat MRH",
      "category": "Action",
      "properties": {
        "prop_1": "1 heure suffisante"
      }
    },
    {
      "id": "2c8c742c-ad8f-4bbb-933b-743619ab905c",
      "label": "Relecture CGU Carte Bancaire",
      "category": "Action",
      "properties": {
        "prop_1": "Conditions générales"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_1_nzip",
      "type": "COUVRE",
      "source": "9d414934-3d1d-48b3-ae6f-e104f3b3603a",
      "target": "d6875154-b319-4e9e-b208-502b91241069",
      "properties": {
        "prop_1": "Inclus automatiquement"
      }
    },
    {
      "id": "e_2_xgw8",
      "type": "COUVRE",
      "source": "9d414934-3d1d-48b3-ae6f-e104f3b3603a",
      "target": "0fca31f2-fbe9-4bfd-8b02-cbd6294fec8a",
      "properties": {
        "prop_1": "Inclus automatiquement"
      }
    },
    {
      "id": "e_3_oo44",
      "type": "COUVRE",
      "source": "9d414934-3d1d-48b3-ae6f-e104f3b3603a",
      "target": "cd0b1174-cf9b-44b8-8cc2-77f62ed2e50a",
      "properties": {
        "prop_1": "Inclus automatiquement"
      }
    },
    {
      "id": "e_4_huny",
      "type": "COUVRE",
      "source": "9d414934-3d1d-48b3-ae6f-e104f3b3603a",
      "target": "b9a5372c-6877-4e40-ac5c-d937cdafedf8",
      "properties": {
        "prop_1": "Inclus automatiquement"
      }
    },
    {
      "id": "e_5_586j",
      "type": "COUVRE",
      "source": "1a68940d-4703-4fb4-ba03-2fe9197998f0",
      "target": "542d40f4-c65b-44d7-93ba-07702a2b2a9b",
      "properties": {
        "prop_1": "Inclus de base"
      }
    },
    {
      "id": "e_6_nss8",
      "type": "COUVRE",
      "source": "1a68940d-4703-4fb4-ba03-2fe9197998f0",
      "target": "da89c88b-ad30-416f-b2e0-f590b62682b2",
      "properties": {
        "prop_1": "Inclus de base"
      }
    },
    {
      "id": "e_7_nbco",
      "type": "COUVRE",
      "source": "1a68940d-4703-4fb4-ba03-2fe9197998f0",
      "target": "b9a5372c-6877-4e40-ac5c-d937cdafedf8",
      "properties": {
        "prop_1": "Option souvent activée"
      }
    },
    {
      "id": "e_8_jraz",
      "type": "COUVRE",
      "source": "1a68940d-4703-4fb4-ba03-2fe9197998f0",
      "target": "6dc8ae12-6517-4b09-800b-0f1997e6a057",
      "properties": {
        "prop_1": "Option souvent activée"
      }
    },
    {
      "id": "e_9_nkjp",
      "type": "COUVRE",
      "source": "d12a1422-f142-4ef6-bf89-e03b90391c5b",
      "target": "e0abaa57-1119-4865-be16-60c843783a09",
      "properties": {
        "prop_1": "Prise en charge partielle"
      }
    },
    {
      "id": "e_10_g9di",
      "type": "COUVRE",
      "source": "d12a1422-f142-4ef6-bf89-e03b90391c5b",
      "target": "ce20ef39-3b12-4c49-8642-636f8f6ca260",
      "properties": {
        "prop_1": "Inclus selon contrat"
      }
    },
    {
      "id": "e_11_a4vx",
      "type": "COUVRE",
      "source": "eff62cb2-11e5-4571-9664-ff374368fbbe",
      "target": "e0d57603-d50c-4cc6-867c-18f7492df9ae",
      "properties": {
        "prop_1": "Selon convention collective"
      }
    },
    {
      "id": "e_12_kbu8",
      "type": "COUVRE",
      "source": "eff62cb2-11e5-4571-9664-ff374368fbbe",
      "target": "ac1eeba5-3c08-4945-ab99-96ac12188248",
      "properties": {
        "prop_1": "Selon convention collective"
      }
    },
    {
      "id": "e_13_48hx",
      "type": "COUVRE",
      "source": "eff62cb2-11e5-4571-9664-ff374368fbbe",
      "target": "3e1e27ca-cf87-4658-8ada-bc5e1f04c081",
      "properties": {
        "prop_1": "Capital versé aux proches"
      }
    },
    {
      "id": "e_14_hfop",
      "type": "COUVRE",
      "source": "927dd001-6853-471c-a994-bc63df61dd29",
      "target": "3e1e27ca-cf87-4658-8ada-bc5e1f04c081",
      "properties": {
        "prop_1": "Obligatoire crédit immo"
      }
    },
    {
      "id": "e_15_40fa",
      "type": "COUVRE",
      "source": "927dd001-6853-471c-a994-bc63df61dd29",
      "target": "ac1eeba5-3c08-4945-ab99-96ac12188248",
      "properties": {
        "prop_1": "Obligatoire crédit immo"
      }
    },
    {
      "id": "e_16_7c7t",
      "type": "PEUT_ETRE_REMPLACEE_PAR",
      "source": "927dd001-6853-471c-a994-bc63df61dd29",
      "target": "b0ce9433-cd80-4251-bf22-f6e7317d50a2",
      "properties": {
        "prop_1": "Loi Lemoine 2022"
      }
    },
    {
      "id": "e_17_dutp",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "d1c97dc3-87bf-41b5-8fed-b73187a26d6d",
      "target": "d6875154-b319-4e9e-b208-502b91241069",
      "properties": {
        "prop_1": "Si payé par carte Gold"
      }
    },
    {
      "id": "e_18_6j9w",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "2e077d57-c658-4f4e-b621-325f1ec153a6",
      "target": "542d40f4-c65b-44d7-93ba-07702a2b2a9b",
      "properties": {
        "prop_1": "RC famille incluse MRH"
      }
    },
    {
      "id": "e_19_qcsn",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "840c82a8-ba38-41bd-ad26-213131972a48",
      "target": "da89c88b-ad30-416f-b2e0-f590b62682b2",
      "properties": {
        "prop_1": "Si incluse dans MRH"
      }
    },
    {
      "id": "e_20_4iv2",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "d62c2d4b-e151-45b8-83bb-4daaafe1712e",
      "target": "e0abaa57-1119-4865-be16-60c843783a09",
      "properties": {
        "prop_1": "Mutuelle collective obligatoire"
      }
    },
    {
      "id": "e_21_aj04",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "bf610ed0-158f-4e6c-a8ab-2d64b6a85482",
      "target": "e0d57603-d50c-4cc6-867c-18f7492df9ae",
      "properties": {
        "prop_1": "Si prévoyance employeur suffisante"
      }
    },
    {
      "id": "e_22_7pwt",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "bf610ed0-158f-4e6c-a8ab-2d64b6a85482",
      "target": "ac1eeba5-3c08-4945-ab99-96ac12188248",
      "properties": {
        "prop_1": "Si prévoyance employeur suffisante"
      }
    },
    {
      "id": "e_23_fiuu",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "dc703d5f-3ca5-4912-aaca-44f8064085af",
      "target": "cd0b1174-cf9b-44b8-8cc2-77f62ed2e50a",
      "properties": {
        "prop_1": "Si couverte par carte ou MRH"
      }
    },
    {
      "id": "e_24_0h54",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "fa74b04d-8029-4ea4-af55-c738d8bed74f",
      "target": "0fca31f2-fbe9-4bfd-8b02-cbd6294fec8a",
      "properties": {
        "prop_1": "Si couverte par carte Gold"
      }
    },
    {
      "id": "e_25_le5x",
      "type": "FAIT_DOUBLON_AVEC",
      "source": "9f8956c1-5b47-46a0-8b5c-f229d088c630",
      "target": "b9a5372c-6877-4e40-ac5c-d937cdafedf8",
      "properties": {
        "prop_1": "Si couverte par carte ou MRH"
      }
    },
    {
      "id": "e_26_jlrp",
      "type": "REMPLACE",
      "source": "b0ce9433-cd80-4251-bf22-f6e7317d50a2",
      "target": "927dd001-6853-471c-a994-bc63df61dd29",
      "properties": {
        "prop_1": "Résiliation possible à tout moment"
      }
    },
    {
      "id": "e_27_tt2q",
      "type": "PERMET_DE_VERIFIER",
      "source": "ee9e0a64-e121-48c2-b80b-2f9aa309e36e",
      "target": "eff62cb2-11e5-4571-9664-ff374368fbbe",
      "properties": {
        "prop_1": "Avant toute souscription"
      }
    },
    {
      "id": "e_28_yl5p",
      "type": "PERMET_D'IDENTIFIER",
      "source": "420c664f-2397-429e-befc-ac7f58ec3d4f",
      "target": "1a68940d-4703-4fb4-ba03-2fe9197998f0",
      "properties": {
        "prop_1": "Garanties déjà incluses"
      }
    },
    {
      "id": "e_29_4kv5",
      "type": "PERMET_D'IDENTIFIER",
      "source": "2c8c742c-ad8f-4bbb-933b-743619ab905c",
      "target": "9d414934-3d1d-48b3-ae6f-e104f3b3603a",
      "properties": {
        "prop_1": "Garanties automatiques"
      }
    }
  ]
},

{
  "id": "inventaire-personnel",
  "title": "Inventaire personnel : cartographier tout ce que vous possédez",
  "category": "Développement personnel",
  "description": "Vos biens de valeur, leurs factures et leurs garanties, réunis en un seul endroit — utile en cas de sinistre.",
  "longDescription": "Un inventaire clair (électroménager, mobilier, objets de valeur) avec factures, garanties et photos, pensé pour accélérer une déclaration d'assurance et ne rien oublier lors d'un sinistre ou d'un déménagement.",
  "nodes": [
    {
      "id": "7f6b64a7-0dd7-44d3-90f3-a7ad709a2d85",
      "label": "Inventaire du domicile",
      "category": "Inventaire",
      "properties": {
        "Où est-il tenu à jour": "fichier, carnet, appli ?",
        "prop_1": "Utile en cas de sinistre (vol, incendie, dégât des eaux) pour l'assurance",
        "Photo de chaque bien de valeur": "recommandé"
      }
    },
    {
      "id": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "label": "Ordinateur portable",
      "category": "Bien",
      "properties": {
        "Marque et modèle": "à renseigner",
        "N° de série": "à renseigner",
        "Date et lieu d'achat": "à renseigner"
      }
    },
    {
      "id": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "label": "Vélo électrique",
      "category": "Bien",
      "properties": {
        "Marque et modèle": "à renseigner",
        "N° de cadre": "à renseigner",
        "Antivol et gravage": "à préciser"
      }
    },
    {
      "id": "08444e6a-184c-4f05-af85-1a424949736e",
      "label": "Réfrigérateur",
      "category": "Bien",
      "properties": {
        "Marque et modèle": "à renseigner",
        "Date d'achat": "à renseigner",
        "Classe énergétique": "à renseigner"
      }
    },
    {
      "id": "b76d417a-41ce-4b0b-9e85-9585d9f61a6d",
      "label": "Machine à laver",
      "category": "Bien",
      "properties": {
        "Marque et modèle": "à renseigner",
        "Date d'achat": "à renseigner",
        "Dernier entretien": "à renseigner"
      }
    },
    {
      "id": "c9e303c7-55c3-4d43-846e-1a46a20419e7",
      "label": "Console de jeux",
      "category": "Bien",
      "properties": {
        "Marque et modèle": "à renseigner",
        "N° de série": "à renseigner",
        "Accessoires inclus": "à lister"
      }
    },
    {
      "id": "aed42728-4fc6-45fe-aab7-d8e58121aa1e",
      "label": "Bureau",
      "category": "Piece",
      "properties": {
        "Pièce": "à préciser",
        "Autres biens qui s'y trouvent": "à lister"
      }
    },
    {
      "id": "fd8b914e-40f9-46b7-86d4-12f9a066031d",
      "label": "Magasin d'informatique",
      "category": "Fournisseur",
      "properties": {
        "Enseigne": "à renseigner",
        "prop_1": "Facture rangée où ?",
        "Moyen de paiement utilisé": "à renseigner"
      }
    },
    {
      "id": "0c7fc5e6-ec13-48b5-91e8-a55cff7e08db",
      "label": "Garantie constructeur",
      "category": "Garantie",
      "properties": {
        "Durée": "à préciser",
        "Date d'échéance": "à renseigner",
        "Extension souscrite": "oui / non"
      }
    },
    {
      "id": "33db39b9-1a31-41db-8f3e-b8cd6dddf66d",
      "label": "Assurance habitation",
      "category": "Assurance",
      "properties": {
        "Assureur": "à renseigner",
        "N° de contrat": "à renseigner",
        "Plafond par objet et franchise": "à vérifier"
      }
    },
    {
      "id": "c302429c-1ad9-4170-bccc-47e30057794c",
      "label": "Nettoyage et mise à jour",
      "category": "Entretien",
      "properties": {
        "Dernière intervention": "à renseigner",
        "Sauvegarde effectuée avant intervention": "oui / non"
      }
    },
    {
      "id": "6ef6787f-7a83-4145-9c57-079386ce5216",
      "label": "Garage",
      "category": "Piece",
      "properties": {
        "Pièce": "à préciser",
        "Autres biens qui s'y trouvent": "à lister"
      }
    },
    {
      "id": "86fa2892-e345-4e97-9e7c-29dd8bd47a9d",
      "label": "Magasin de cycles",
      "category": "Fournisseur",
      "properties": {
        "Enseigne": "à renseigner",
        "prop_1": "Facture rangée où ?",
        "Moyen de paiement utilisé": "à renseigner"
      }
    },
    {
      "id": "382bc738-03b1-4856-99d6-c4e297df9998",
      "label": "Assurance vélo",
      "category": "Assurance",
      "properties": {
        "Assureur": "à renseigner",
        "N° de contrat": "à renseigner",
        "Vol et casse couverts": "à vérifier"
      }
    },
    {
      "id": "fba74c11-c1ee-421d-a0ab-5575116d16fb",
      "label": "Révision batterie et freins",
      "category": "Entretien",
      "properties": {
        "Dernière révision": "à renseigner",
        "Prochaine échéance recommandée": "à renseigner"
      }
    },
    {
      "id": "79998030-9d73-4bf8-b052-dcc8231ac736",
      "label": "Cuisine",
      "category": "Piece",
      "properties": {
        "Pièce": "à préciser",
        "Autres biens qui s'y trouvent": "à lister"
      }
    },
    {
      "id": "7ff7bc56-1fd6-4272-ac58-7a619fa0ce6e",
      "label": "Buanderie",
      "category": "Piece",
      "properties": {
        "Pièce": "à préciser",
        "Autres biens qui s'y trouvent": "à lister"
      }
    },
    {
      "id": "d68cd1c5-7ce6-4391-8c8d-e6deff5c3da2",
      "label": "Détartrage annuel",
      "category": "Entretien",
      "properties": {
        "Dernière intervention": "à renseigner",
        "Prochaine échéance recommandée": "à renseigner"
      }
    },
    {
      "id": "a20fcae3-6fa5-4de8-b8e0-8f122d95d2ec",
      "label": "Extension de garantie",
      "category": "Garantie",
      "properties": {
        "Organisme": "à renseigner",
        "Durée et échéance": "à renseigner",
        "Ce qui est couvert": "à préciser"
      }
    },
    {
      "id": "f069f795-32e7-4c5b-aed9-376c9b3888c7",
      "label": "Salon",
      "category": "Piece",
      "properties": {
        "Pièce": "à préciser",
        "Autres biens qui s'y trouvent": "à lister"
      }
    },
    {
      "id": "c88a4490-13e3-439a-b10f-da91cf860d85",
      "label": "Compte constructeur en ligne",
      "category": "Compte",
      "properties": {
        "Identifiant": "à renseigner",
        "Moyen de paiement enregistré": "à vérifier",
        "Double authentification activée": "oui / non"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_e76c",
      "type": "RECENSE",
      "source": "7f6b64a7-0dd7-44d3-90f3-a7ad709a2d85",
      "target": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "properties": {
        "prop_1": "Une fiche par bien de valeur ou par pièce"
      }
    },
    {
      "id": "e_1_8d5b",
      "type": "RECENSE",
      "source": "7f6b64a7-0dd7-44d3-90f3-a7ad709a2d85",
      "target": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "properties": {
        "prop_1": "Une fiche par bien de valeur ou par pièce"
      }
    },
    {
      "id": "e_2_2c79",
      "type": "RECENSE",
      "source": "7f6b64a7-0dd7-44d3-90f3-a7ad709a2d85",
      "target": "08444e6a-184c-4f05-af85-1a424949736e",
      "properties": {
        "prop_1": "Une fiche par bien de valeur ou par pièce"
      }
    },
    {
      "id": "e_3_7f7e",
      "type": "RECENSE",
      "source": "7f6b64a7-0dd7-44d3-90f3-a7ad709a2d85",
      "target": "b76d417a-41ce-4b0b-9e85-9585d9f61a6d",
      "properties": {
        "prop_1": "Une fiche par bien de valeur ou par pièce"
      }
    },
    {
      "id": "e_4_4fe1",
      "type": "RECENSE",
      "source": "7f6b64a7-0dd7-44d3-90f3-a7ad709a2d85",
      "target": "c9e303c7-55c3-4d43-846e-1a46a20419e7",
      "properties": {
        "prop_1": "Une fiche par bien de valeur ou par pièce"
      }
    },
    {
      "id": "e_5_4726",
      "type": "SE_TROUVE_DANS",
      "source": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "target": "aed42728-4fc6-45fe-aab7-d8e58121aa1e",
      "properties": {
        "prop_1": "Emplacement habituel"
      }
    },
    {
      "id": "e_6_423f",
      "type": "ACHETÉ_CHEZ",
      "source": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "target": "fd8b914e-40f9-46b7-86d4-12f9a066031d",
      "properties": {
        "prop_1": "Conserver la facture pour la garantie"
      }
    },
    {
      "id": "e_7_40ba",
      "type": "COUVERT_PAR",
      "source": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "target": "0c7fc5e6-ec13-48b5-91e8-a55cff7e08db",
      "properties": {
        "prop_1": "Vérifier la date d'échéance avant tout achat de garantie complémentaire"
      }
    },
    {
      "id": "e_8_4786",
      "type": "COUVERT_PAR",
      "source": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "target": "33db39b9-1a31-41db-8f3e-b8cd6dddf66d",
      "properties": {
        "prop_1": "Vérifier le plafond d'indemnisation par objet de l'assurance habitation"
      }
    },
    {
      "id": "e_9_fcf4",
      "type": "NÉCESSITE",
      "source": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "target": "c302429c-1ad9-4170-bccc-47e30057794c",
      "properties": {
        "Fréquence recommandée": "à renseigner"
      }
    },
    {
      "id": "e_10_445e",
      "type": "SE_TROUVE_DANS",
      "source": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "target": "6ef6787f-7a83-4145-9c57-079386ce5216",
      "properties": {
        "prop_1": "Emplacement habituel"
      }
    },
    {
      "id": "e_11_6f20",
      "type": "ACHETÉ_CHEZ",
      "source": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "target": "86fa2892-e345-4e97-9e7c-29dd8bd47a9d",
      "properties": {
        "prop_1": "Conserver la facture pour la garantie"
      }
    },
    {
      "id": "e_12_14f1",
      "type": "COUVERT_PAR",
      "source": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "target": "382bc738-03b1-4856-99d6-c4e297df9998",
      "properties": {
        "prop_1": "Souvent en option, à vérifier séparément"
      }
    },
    {
      "id": "e_13_3291",
      "type": "NÉCESSITE",
      "source": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "target": "fba74c11-c1ee-421d-a0ab-5575116d16fb",
      "properties": {
        "prop_1": "La batterie perd en capacité avec le temps : surveiller son état"
      }
    },
    {
      "id": "e_14_4429",
      "type": "SE_TROUVE_DANS",
      "source": "08444e6a-184c-4f05-af85-1a424949736e",
      "target": "79998030-9d73-4bf8-b052-dcc8231ac736",
      "properties": {
        "prop_1": "Emplacement habituel"
      }
    },
    {
      "id": "e_15_f715",
      "type": "COUVERT_PAR",
      "source": "08444e6a-184c-4f05-af85-1a424949736e",
      "target": "0c7fc5e6-ec13-48b5-91e8-a55cff7e08db",
      "properties": {
        "prop_1": "Vérifier la durée légale de garantie (2 ans) et l'extension éventuelle"
      }
    },
    {
      "id": "e_16_1837",
      "type": "SE_TROUVE_DANS",
      "source": "b76d417a-41ce-4b0b-9e85-9585d9f61a6d",
      "target": "7ff7bc56-1fd6-4272-ac58-7a619fa0ce6e",
      "properties": {
        "prop_1": "Emplacement habituel"
      }
    },
    {
      "id": "e_17_d070",
      "type": "NÉCESSITE",
      "source": "b76d417a-41ce-4b0b-9e85-9585d9f61a6d",
      "target": "d68cd1c5-7ce6-4391-8c8d-e6deff5c3da2",
      "properties": {
        "prop_1": "Prévient les pannes liées au calcaire"
      }
    },
    {
      "id": "e_18_2b69",
      "type": "COUVERT_PAR",
      "source": "b76d417a-41ce-4b0b-9e85-9585d9f61a6d",
      "target": "a20fcae3-6fa5-4de8-b8e0-8f122d95d2ec",
      "properties": {
        "prop_1": "Souscrite en plus de la garantie légale"
      }
    },
    {
      "id": "e_19_4695",
      "type": "SE_TROUVE_DANS",
      "source": "c9e303c7-55c3-4d43-846e-1a46a20419e7",
      "target": "f069f795-32e7-4c5b-aed9-376c9b3888c7",
      "properties": {
        "prop_1": "Emplacement habituel"
      }
    },
    {
      "id": "e_20_b7ad",
      "type": "COUVERT_PAR",
      "source": "c9e303c7-55c3-4d43-846e-1a46a20419e7",
      "target": "0c7fc5e6-ec13-48b5-91e8-a55cff7e08db",
      "properties": {
        "prop_1": "Vérifier la date d'échéance avant tout achat de garantie complémentaire"
      }
    },
    {
      "id": "e_21_0495",
      "type": "LIÉ_À",
      "source": "c9e303c7-55c3-4d43-846e-1a46a20419e7",
      "target": "c88a4490-13e3-439a-b10f-da91cf860d85",
      "properties": {
        "prop_1": "Compte à sécuriser (double authentification recommandée)"
      }
    },
    {
      "id": "e_22_3336",
      "type": "COUVRE",
      "source": "33db39b9-1a31-41db-8f3e-b8cd6dddf66d",
      "target": "c9e303c7-55c3-4d43-846e-1a46a20419e7",
      "properties": {
        "prop_1": "Vérifier le plafond global et les exclusions"
      }
    },
    {
      "id": "e_23_167f",
      "type": "COUVRE",
      "source": "33db39b9-1a31-41db-8f3e-b8cd6dddf66d",
      "target": "08444e6a-184c-4f05-af85-1a424949736e",
      "properties": {
        "prop_1": "Vérifier le plafond global et les exclusions"
      }
    },
    {
      "id": "e_24_ebf1",
      "type": "CONTIENT",
      "source": "aed42728-4fc6-45fe-aab7-d8e58121aa1e",
      "target": "0cd86d85-dcb6-4a3e-a13b-3cc5acf547b2",
      "properties": {
        "prop_1": "Vue par pièce, utile pour circuler dans l'inventaire"
      }
    },
    {
      "id": "e_25_58cf",
      "type": "CONTIENT",
      "source": "6ef6787f-7a83-4145-9c57-079386ce5216",
      "target": "ce2083ca-4d65-4e61-93b5-7d935217a8d3",
      "properties": {
        "prop_1": "Vue par pièce, utile pour circuler dans l'inventaire"
      }
    }
  ]
},

{
  "id": "comptes-en-ligne",
  "title": "Comptes en ligne : garder la main sur son identité numérique",
  "category": "Technologie & Sécurité",
  "description": "Tous vos comptes, leurs emails de récupération et leur double authentification, cartographiés pour ne plus jamais être bloqué.",
  "longDescription": "Emails, banques, réseaux sociaux, administrations : chaque compte en ligne dépend d'un email de récupération et d'une méthode de double authentification. Ce graphe rend visibles ces dépendances, souvent découvertes trop tard, le jour où l'on perd l'accès à un compte.",
  "nodes": [
    {
      "id": "4fa4d582-31f4-4ca9-b427-a4a715b350b8",
      "label": "Suivi des comptes en ligne",
      "category": "Suivi",
      "properties": {
        "Où est-il tenu": "gestionnaire de mots de passe, carnet, tableur ?",
        "prop_1": "Ne jamais y noter les mots de passe en clair si ce n'est pas un outil chiffré",
        "prop_2": "Revue recommandée une fois par an"
      }
    },
    {
      "id": "d8440d2c-49e6-45b5-912d-8824d73592bf",
      "label": "Messagerie principale",
      "category": "Compte",
      "properties": {
        "Fournisseur": "à renseigner",
        "Adresse": "à renseigner",
        "prop_1": "Compte de récupération pour les autres services"
      }
    },
    {
      "id": "a78cfaa9-d18c-4937-9fc4-8860577d456a",
      "label": "Banque en ligne",
      "category": "Compte",
      "properties": {
        "Établissement": "à renseigner",
        "Identifiant": "à renseigner",
        "Authentification forte": "application ou SMS ?"
      }
    },
    {
      "id": "f7fade70-64fa-4e44-a114-6c120c6f9187",
      "label": "Fournisseur d'énergie",
      "category": "Compte",
      "properties": {
        "Fournisseur": "à renseigner",
        "N° client": "à renseigner",
        "Mode de paiement": "à préciser"
      }
    },
    {
      "id": "5b7acdaf-2538-4947-bd8e-cd60a776618f",
      "label": "Plateforme de streaming",
      "category": "Compte",
      "properties": {
        "Service": "à renseigner",
        "Formule et prix": "à renseigner",
        "Partagé avec qui ?": "à préciser"
      }
    },
    {
      "id": "5e0ae4ba-ec20-4ba3-ad67-13d56def5a84",
      "label": "Double authentification",
      "category": "Securite",
      "properties": {
        "Méthode": "application, SMS ou clé physique",
        "prop_1": "Codes de secours imprimés et rangés où ?",
        "Activée depuis": "à renseigner"
      }
    },
    {
      "id": "a35ade7b-f467-48c8-8243-ba882a694af6",
      "label": "Gestionnaire de mots de passe",
      "category": "Securite",
      "properties": {
        "Application utilisée": "à renseigner",
        "prop_1": "Coffre-fort protégé par un mot de passe maître unique",
        "Sauvegarde du coffre": "où ?"
      }
    },
    {
      "id": "89c4d849-b940-4046-afa9-2223cac95638",
      "label": "Prélèvement automatique",
      "category": "Paiement",
      "properties": {
        "Compte débité": "à renseigner",
        "Montant et fréquence": "à renseigner",
        "Dernière vérification": "à renseigner"
      }
    },
    {
      "id": "ae2d306c-4e0c-49ec-843f-dfcb7cf1eacc",
      "label": "Piratage de compte",
      "category": "Procedure",
      "properties": {
        "Signe d'alerte": "notification de connexion inconnue, mot de passe changé sans action de votre part",
        "Procédure": "à préparer avant l'incident"
      }
    },
    {
      "id": "41ea5082-3df4-4dff-ab37-427b5fbb8f7f",
      "label": "Réinitialisation d'urgence",
      "category": "Procedure",
      "properties": {
        "prop_1": "Changer le mot de passe depuis un appareil de confiance",
        "prop_2": "Déconnecter les autres sessions actives",
        "prop_3": "Vérifier les règles de transfert de messagerie ajoutées à votre insu"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_c0d8",
      "type": "RECENSE",
      "source": "4fa4d582-31f4-4ca9-b427-a4a715b350b8",
      "target": "d8440d2c-49e6-45b5-912d-8824d73592bf",
      "properties": {
        "prop_1": "Un compte par service utilisé"
      }
    },
    {
      "id": "e_1_08a9",
      "type": "RECENSE",
      "source": "4fa4d582-31f4-4ca9-b427-a4a715b350b8",
      "target": "a78cfaa9-d18c-4937-9fc4-8860577d456a",
      "properties": {
        "prop_1": "Un compte par service utilisé"
      }
    },
    {
      "id": "e_2_7eb9",
      "type": "RECENSE",
      "source": "4fa4d582-31f4-4ca9-b427-a4a715b350b8",
      "target": "f7fade70-64fa-4e44-a114-6c120c6f9187",
      "properties": {
        "prop_1": "Un compte par service utilisé"
      }
    },
    {
      "id": "e_3_de50",
      "type": "RECENSE",
      "source": "4fa4d582-31f4-4ca9-b427-a4a715b350b8",
      "target": "5b7acdaf-2538-4947-bd8e-cd60a776618f",
      "properties": {
        "prop_1": "Un compte par service utilisé"
      }
    },
    {
      "id": "e_4_34b4",
      "type": "PROTÉGÉ_PAR",
      "source": "d8440d2c-49e6-45b5-912d-8824d73592bf",
      "target": "5e0ae4ba-ec20-4ba3-ad67-13d56def5a84",
      "properties": {
        "prop_1": "La messagerie principale est la porte d'entrée de tous les autres comptes : la sécuriser en priorité"
      }
    },
    {
      "id": "e_5_fbc4",
      "type": "PERMET_DE_RÉCUPÉRER",
      "source": "d8440d2c-49e6-45b5-912d-8824d73592bf",
      "target": "a78cfaa9-d18c-4937-9fc4-8860577d456a",
      "properties": {
        "prop_1": "Sert de compte de secours pour les autres services"
      }
    },
    {
      "id": "e_6_02d4",
      "type": "GÉRÉ_AVEC",
      "source": "d8440d2c-49e6-45b5-912d-8824d73592bf",
      "target": "a35ade7b-f467-48c8-8243-ba882a694af6",
      "properties": {
        "prop_1": "Un seul gestionnaire, pas de mot de passe réutilisé"
      }
    },
    {
      "id": "e_7_cff5",
      "type": "PROTÉGÉ_PAR",
      "source": "a78cfaa9-d18c-4937-9fc4-8860577d456a",
      "target": "5e0ae4ba-ec20-4ba3-ad67-13d56def5a84",
      "properties": {
        "prop_1": "Ne jamais communiquer un code reçu par SMS, même à un « conseiller »"
      }
    },
    {
      "id": "e_8_50ec",
      "type": "GÉRÉ_AVEC",
      "source": "a78cfaa9-d18c-4937-9fc4-8860577d456a",
      "target": "a35ade7b-f467-48c8-8243-ba882a694af6",
      "properties": {
        "prop_1": "Un seul gestionnaire, pas de mot de passe réutilisé"
      }
    },
    {
      "id": "e_9_cee9",
      "type": "PRÉLÈVE_VIA",
      "source": "f7fade70-64fa-4e44-a114-6c120c6f9187",
      "target": "89c4d849-b940-4046-afa9-2223cac95638",
      "properties": {
        "prop_1": "Vérifier le RIB enregistré à chaque changement de banque"
      }
    },
    {
      "id": "e_10_41b2",
      "type": "PRÉLÈVE_VIA",
      "source": "5b7acdaf-2538-4947-bd8e-cd60a776618f",
      "target": "89c4d849-b940-4046-afa9-2223cac95638",
      "properties": {
        "prop_1": "Vérifier le RIB enregistré à chaque changement de banque"
      }
    },
    {
      "id": "e_11_f126",
      "type": "GÉRÉ_AVEC",
      "source": "5b7acdaf-2538-4947-bd8e-cd60a776618f",
      "target": "a35ade7b-f467-48c8-8243-ba882a694af6",
      "properties": {
        "prop_1": "Un seul gestionnaire, pas de mot de passe réutilisé"
      }
    },
    {
      "id": "e_12_8897",
      "type": "CONTIENT",
      "source": "a35ade7b-f467-48c8-8243-ba882a694af6",
      "target": "f7fade70-64fa-4e44-a114-6c120c6f9187",
      "properties": {
        "prop_1": "Génère un mot de passe unique et robuste par service"
      }
    },
    {
      "id": "e_13_c8c6",
      "type": "PROTÈGE_CONTRE",
      "source": "5e0ae4ba-ec20-4ba3-ad67-13d56def5a84",
      "target": "ae2d306c-4e0c-49ec-843f-dfcb7cf1eacc",
      "properties": {
        "prop_1": "Rend un mot de passe volé insuffisant pour se connecter"
      }
    },
    {
      "id": "e_14_da3d",
      "type": "SE_TRAITE_PAR",
      "source": "ae2d306c-4e0c-49ec-843f-dfcb7cf1eacc",
      "target": "41ea5082-3df4-4dff-ab37-427b5fbb8f7f",
      "properties": {
        "prop_1": "Agir vite limite les dégâts"
      }
    },
    {
      "id": "e_15_cb9f",
      "type": "CONCERNE",
      "source": "41ea5082-3df4-4dff-ab37-427b5fbb8f7f",
      "target": "d8440d2c-49e6-45b5-912d-8824d73592bf",
      "properties": {
        "prop_1": "Toute la chaîne de comptes liés à la messagerie compromise"
      }
    }
  ]
},

{
  "id": "applications-abonnements",
  "title": "Applications et abonnements : où va vraiment votre argent (et vos données)",
  "category": "Technologie & Sécurité",
  "description": "Cartographie de vos applications, abonnements et permissions accordées — pour repérer les doublons et les oublis qui coûtent cher.",
  "longDescription": "Streaming, cloud, logiciels, permissions d'accès aux données : la plupart des foyers paient pour des abonnements oubliés et accordent des permissions dont ils ont perdu la trace. Une cartographie pour faire le tri, une bonne fois pour toutes.",
  "nodes": [
    {
      "id": "194b6665-b64b-42a9-815a-8fcfcf6b3cf9",
      "label": "Suivi des applications",
      "category": "Suivi",
      "properties": {
        "prop_1": "Revue recommandée tous les 6 mois",
        "Objectif": "repérer ce qui n'est plus utilisé ou plus nécessaire",
        "prop_2": "Une ligne par application installée"
      }
    },
    {
      "id": "919e0b40-9f42-4cf8-a2bc-b072c6e17686",
      "label": "Application bancaire",
      "category": "Application",
      "properties": {
        "Éditeur": "à renseigner",
        "Utilisée depuis": "à renseigner",
        "Fréquence d'utilisation": "quotidienne, hebdomadaire, rare ?"
      }
    },
    {
      "id": "b811ff9d-271e-4e7a-befb-9b28bfbf2e1c",
      "label": "Application de messagerie instantanée",
      "category": "Application",
      "properties": {
        "Éditeur": "à renseigner",
        "Utilisée depuis": "à renseigner",
        "Fréquence d'utilisation": "quotidienne, hebdomadaire, rare ?"
      }
    },
    {
      "id": "fedc247a-b8f7-4a32-a142-9f107e8d7e41",
      "label": "Application de sport",
      "category": "Application",
      "properties": {
        "Éditeur": "à renseigner",
        "Utilisée depuis": "à renseigner",
        "Fréquence d'utilisation": "quotidienne, hebdomadaire, rare ?"
      }
    },
    {
      "id": "0b39aafa-4b22-4c1a-a5d6-6642e551ed46",
      "label": "Application de retouche photo",
      "category": "Application",
      "properties": {
        "Éditeur": "à renseigner",
        "Utilisée depuis": "à renseigner",
        "Fréquence d'utilisation": "quotidienne, hebdomadaire, rare ?"
      }
    },
    {
      "id": "daa14799-3ea1-4da6-8ffd-2e38f8f0de54",
      "label": "Catégorie Finance",
      "category": "Categorie",
      "properties": {
        "Applications comparables installées": "à lister",
        "Une seule vraiment nécessaire ?": "à évaluer"
      }
    },
    {
      "id": "1fd6ba6b-a9d4-408b-b023-7299bda4e10f",
      "label": "Compte bancaire",
      "category": "Compte",
      "properties": {
        "Établissement": "à renseigner",
        "Double authentification activée": "oui / non"
      }
    },
    {
      "id": "0a15547a-35a8-4dd4-808e-b8557790f953",
      "label": "Téléphone personnel",
      "category": "Appareil",
      "properties": {
        "Modèle": "à renseigner",
        "Verrouillage biométrique activé": "oui / non"
      }
    },
    {
      "id": "fe4d7d12-fb7e-44e3-93dd-b12ea61e915f",
      "label": "Catégorie Communication",
      "category": "Categorie",
      "properties": {
        "Applications comparables installées": "à lister",
        "Une seule vraiment nécessaire ?": "à évaluer"
      }
    },
    {
      "id": "52b77af7-0f0a-4b29-af18-924d55d9a64d",
      "label": "Répertoire de contacts",
      "category": "Donnees",
      "properties": {
        "Accès accordé": "oui / non",
        "Raison de l'accès": "à évaluer"
      }
    },
    {
      "id": "354da1cc-332a-476e-86be-c79df4ac493b",
      "label": "Catégorie Santé et sport",
      "category": "Categorie",
      "properties": {
        "Applications comparables installées": "à lister",
        "Une seule vraiment nécessaire ?": "à évaluer"
      }
    },
    {
      "id": "72824c0d-0697-4751-9e1f-31f94f1e4148",
      "label": "Données de localisation",
      "category": "Donnees",
      "properties": {
        "Accès accordé": "toujours, pendant l'utilisation, jamais ?",
        "Historique des trajets conservé": "à vérifier"
      }
    },
    {
      "id": "178c994e-1dbd-4487-8cf8-20922f0099dd",
      "label": "Montre connectée",
      "category": "Appareil",
      "properties": {
        "Marque et modèle": "à renseigner",
        "Données synchronisées": "à préciser"
      }
    },
    {
      "id": "be07920c-d0c1-4bba-8052-3baa7251e6ca",
      "label": "Catégorie Photo et créativité",
      "category": "Categorie",
      "properties": {
        "Applications comparables installées": "à lister",
        "Une seule vraiment nécessaire ?": "à évaluer"
      }
    },
    {
      "id": "6b57feee-1032-42bd-aacb-1da3a7b0ab0d",
      "label": "Photothèque",
      "category": "Donnees",
      "properties": {
        "Accès accordé": "toutes les photos ou sélection ?",
        "Dernière utilisation réelle": "à renseigner"
      }
    },
    {
      "id": "9bfaf577-570d-4190-9f39-83825cc5ec7e",
      "label": "Désinstallation",
      "category": "Action",
      "properties": {
        "prop_1": "Vérifier d'abord si un abonnement y est lié",
        "prop_2": "Exporter les fichiers créés avant de désinstaller"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_4eef",
      "type": "RECENSE",
      "source": "194b6665-b64b-42a9-815a-8fcfcf6b3cf9",
      "target": "919e0b40-9f42-4cf8-a2bc-b072c6e17686",
      "properties": {
        "prop_1": "Une fiche par application"
      }
    },
    {
      "id": "e_1_7ee1",
      "type": "RECENSE",
      "source": "194b6665-b64b-42a9-815a-8fcfcf6b3cf9",
      "target": "b811ff9d-271e-4e7a-befb-9b28bfbf2e1c",
      "properties": {
        "prop_1": "Une fiche par application"
      }
    },
    {
      "id": "e_2_025c",
      "type": "RECENSE",
      "source": "194b6665-b64b-42a9-815a-8fcfcf6b3cf9",
      "target": "fedc247a-b8f7-4a32-a142-9f107e8d7e41",
      "properties": {
        "prop_1": "Une fiche par application"
      }
    },
    {
      "id": "e_3_0ced",
      "type": "RECENSE",
      "source": "194b6665-b64b-42a9-815a-8fcfcf6b3cf9",
      "target": "0b39aafa-4b22-4c1a-a5d6-6642e551ed46",
      "properties": {
        "prop_1": "Une fiche par application"
      }
    },
    {
      "id": "e_4_3a36",
      "type": "APPARTIENT_À",
      "source": "919e0b40-9f42-4cf8-a2bc-b072c6e17686",
      "target": "daa14799-3ea1-4da6-8ffd-2e38f8f0de54",
      "properties": {
        "prop_1": "Regrouper par usage aide à repérer les doublons"
      }
    },
    {
      "id": "e_5_1e23",
      "type": "LIÉE_À",
      "source": "919e0b40-9f42-4cf8-a2bc-b072c6e17686",
      "target": "1fd6ba6b-a9d4-408b-b023-7299bda4e10f",
      "properties": {
        "prop_1": "Vérifier les autorisations accordées à l'application"
      }
    },
    {
      "id": "e_6_239e",
      "type": "INSTALLÉE_SUR",
      "source": "919e0b40-9f42-4cf8-a2bc-b072c6e17686",
      "target": "0a15547a-35a8-4dd4-808e-b8557790f953",
      "properties": {
        "prop_1": "Vérifier la liste sur chaque appareil"
      }
    },
    {
      "id": "e_7_a960",
      "type": "APPARTIENT_À",
      "source": "b811ff9d-271e-4e7a-befb-9b28bfbf2e1c",
      "target": "fe4d7d12-fb7e-44e3-93dd-b12ea61e915f",
      "properties": {
        "prop_1": "Regrouper par usage aide à repérer les doublons"
      }
    },
    {
      "id": "e_8_36b6",
      "type": "DEMANDE_L'ACCÈS_À",
      "source": "b811ff9d-271e-4e7a-befb-9b28bfbf2e1c",
      "target": "52b77af7-0f0a-4b29-af18-924d55d9a64d",
      "properties": {
        "prop_1": "Autorisations à revoir régulièrement dans les paramètres du téléphone"
      }
    },
    {
      "id": "e_9_5845",
      "type": "INSTALLÉE_SUR",
      "source": "b811ff9d-271e-4e7a-befb-9b28bfbf2e1c",
      "target": "0a15547a-35a8-4dd4-808e-b8557790f953",
      "properties": {
        "prop_1": "Vérifier la liste sur chaque appareil"
      }
    },
    {
      "id": "e_10_57ff",
      "type": "APPARTIENT_À",
      "source": "fedc247a-b8f7-4a32-a142-9f107e8d7e41",
      "target": "354da1cc-332a-476e-86be-c79df4ac493b",
      "properties": {
        "prop_1": "Regrouper par usage aide à repérer les doublons"
      }
    },
    {
      "id": "e_11_3231",
      "type": "DEMANDE_L'ACCÈS_À",
      "source": "fedc247a-b8f7-4a32-a142-9f107e8d7e41",
      "target": "72824c0d-0697-4751-9e1f-31f94f1e4148",
      "properties": {
        "Les données de santé sont sensibles": "lire la politique de confidentialité"
      }
    },
    {
      "id": "e_12_8ff9",
      "type": "LIÉE_À",
      "source": "fedc247a-b8f7-4a32-a142-9f107e8d7e41",
      "target": "178c994e-1dbd-4487-8cf8-20922f0099dd",
      "properties": {
        "prop_1": "Objet connecté associé, le cas échéant"
      }
    },
    {
      "id": "e_13_7f45",
      "type": "APPARTIENT_À",
      "source": "0b39aafa-4b22-4c1a-a5d6-6642e551ed46",
      "target": "be07920c-d0c1-4bba-8052-3baa7251e6ca",
      "properties": {
        "prop_1": "Regrouper par usage aide à repérer les doublons"
      }
    },
    {
      "id": "e_14_5b33",
      "type": "DEMANDE_L'ACCÈS_À",
      "source": "0b39aafa-4b22-4c1a-a5d6-6642e551ed46",
      "target": "6b57feee-1032-42bd-aacb-1da3a7b0ab0d",
      "properties": {
        "prop_1": "Autorisations à revoir régulièrement dans les paramètres du téléphone"
      }
    },
    {
      "id": "e_15_74a0",
      "type": "CANDIDATE_À",
      "source": "0b39aafa-4b22-4c1a-a5d6-6642e551ed46",
      "target": "9bfaf577-570d-4190-9f39-83825cc5ec7e",
      "properties": {
        "Non utilisée depuis plusieurs mois": "à réévaluer"
      }
    },
    {
      "id": "e_16_20b0",
      "type": "HÉBERGE",
      "source": "0a15547a-35a8-4dd4-808e-b8557790f953",
      "target": "fedc247a-b8f7-4a32-a142-9f107e8d7e41",
      "properties": {
        "prop_1": "Vue d'ensemble par appareil"
      }
    }
  ]
},

{
  "id": "boite-mail",
  "title": "Boîte mail : cartographier ce qui s'accumule vraiment dans votre inbox",
  "category": "Technologie & Sécurité",
  "description": "Les catégories d'emails qui saturent votre boîte de réception, et les comptes auxquels elles sont liées.",
  "longDescription": "Newsletters, notifications, factures, échanges importants : une boîte mail mélange tout. Cartographier les grandes catégories d'emails et les comptes qui les génèrent aide à faire le tri, à se désabonner de ce qui encombre, et à retrouver ce qui compte vraiment.",
  "nodes": [
    {
      "id": "d830f795-5c0a-4542-8257-128a58baaac0",
      "label": "Cartographie des adresses email",
      "category": "Suivi",
      "properties": {
        "Objectif": "savoir quelle adresse sert à quoi, pour limiter les risques",
        "prop_1": "Revue recommandée une fois par an",
        "prop_2": "Une adresse par grand usage limite l'impact d'une fuite"
      }
    },
    {
      "id": "e0bd109d-8530-4c40-88e6-ed8ac7826dcf",
      "label": "Adresse principale",
      "category": "CompteEmail",
      "properties": {
        "Fournisseur": "à renseigner",
        "Usage": "identité numérique, banque, administratif",
        "Créée en": "à renseigner"
      }
    },
    {
      "id": "f54b7c54-e07f-4b45-9cea-97339921d035",
      "label": "Adresse professionnelle",
      "category": "CompteEmail",
      "properties": {
        "Fournisseur": "à renseigner",
        "Usage": "travail uniquement",
        "Créée en": "à renseigner"
      }
    },
    {
      "id": "077742a3-2a16-4032-b852-1e5e77f6bf79",
      "label": "Adresse pour inscriptions diverses",
      "category": "CompteEmail",
      "properties": {
        "Fournisseur": "à renseigner",
        "Usage": "newsletters, essais gratuits, forums",
        "Créée en": "à renseigner"
      }
    },
    {
      "id": "23ea7e74-3419-4b7e-94d3-494fc1d68a92",
      "label": "Double authentification",
      "category": "Securite",
      "properties": {
        "Méthode": "application, SMS ou clé physique",
        "prop_1": "Codes de secours imprimés et rangés où ?",
        "Activée depuis": "à renseigner"
      }
    },
    {
      "id": "67883770-1f05-43ee-9831-c565a7bbbd5c",
      "label": "Comptes administratifs et bancaires",
      "category": "Compte",
      "properties": {
        "Services liés": "à lister",
        "Revue de sécurité": "à renseigner"
      }
    },
    {
      "id": "47a9def7-03b1-4f3d-8609-a14aa3e08871",
      "label": "Service informatique de l'employeur",
      "category": "Organisme",
      "properties": {
        "Contact": "à renseigner",
        "Politique de mot de passe imposée": "à préciser"
      }
    },
    {
      "id": "d73dd503-a0a5-424f-8841-8adde7ef95c0",
      "label": "Charte informatique interne",
      "category": "Document",
      "properties": {
        "Usage personnel toléré": "à préciser",
        "Suppression à l'issue du contrat": "à vérifier"
      }
    },
    {
      "id": "1d798249-4e5e-483e-a8b7-d06858da8f5c",
      "label": "Spam et hameçonnage",
      "category": "Securite",
      "properties": {
        "Volume reçu": "à renseigner",
        "Filtre anti-spam actif": "oui / non"
      }
    },
    {
      "id": "14905972-9a68-41c9-9046-082fbfc8bb1f",
      "label": "Nettoyage des abonnements",
      "category": "Action",
      "properties": {
        "Dernière revue": "à renseigner",
        "Newsletters désinscrites": "à renseigner"
      }
    },
    {
      "id": "7b8be873-0a98-4f6b-bdba-505f6de0ac9c",
      "label": "Piratage de compte",
      "category": "Securite",
      "properties": {
        "Signe d'alerte": "notification de connexion inconnue, mot de passe changé sans action de votre part",
        "Procédure": "à préparer avant l'incident"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_29fb",
      "type": "RECENSE",
      "source": "d830f795-5c0a-4542-8257-128a58baaac0",
      "target": "e0bd109d-8530-4c40-88e6-ed8ac7826dcf",
      "properties": {
        "prop_1": "Une fiche par adresse utilisée"
      }
    },
    {
      "id": "e_1_0396",
      "type": "RECENSE",
      "source": "d830f795-5c0a-4542-8257-128a58baaac0",
      "target": "f54b7c54-e07f-4b45-9cea-97339921d035",
      "properties": {
        "prop_1": "Une fiche par adresse utilisée"
      }
    },
    {
      "id": "e_2_211a",
      "type": "RECENSE",
      "source": "d830f795-5c0a-4542-8257-128a58baaac0",
      "target": "077742a3-2a16-4032-b852-1e5e77f6bf79",
      "properties": {
        "prop_1": "Une fiche par adresse utilisée"
      }
    },
    {
      "id": "e_3_73e0",
      "type": "PROTÉGÉE_PAR",
      "source": "e0bd109d-8530-4c40-88e6-ed8ac7826dcf",
      "target": "23ea7e74-3419-4b7e-94d3-494fc1d68a92",
      "properties": {
        "La plus sensible des adresses": "à sécuriser en priorité"
      }
    },
    {
      "id": "e_4_4cd0",
      "type": "SERT_DE_RÉCUPÉRATION_POUR",
      "source": "e0bd109d-8530-4c40-88e6-ed8ac7826dcf",
      "target": "f54b7c54-e07f-4b45-9cea-97339921d035",
      "properties": {
        "prop_1": "Vérifier régulièrement que la liste est à jour"
      }
    },
    {
      "id": "e_5_eecf",
      "type": "DONNE_ACCÈS_À",
      "source": "e0bd109d-8530-4c40-88e6-ed8ac7826dcf",
      "target": "67883770-1f05-43ee-9831-c565a7bbbd5c",
      "properties": {
        "prop_1": "Toute compromission de cette adresse expose ces services"
      }
    },
    {
      "id": "e_6_0db9",
      "type": "GÉRÉE_PAR",
      "source": "f54b7c54-e07f-4b45-9cea-97339921d035",
      "target": "47a9def7-03b1-4f3d-8609-a14aa3e08871",
      "properties": {
        "prop_1": "Compte administré par l'employeur, pas totalement personnel"
      }
    },
    {
      "id": "e_7_2f9e",
      "type": "SOUMISE_À",
      "source": "f54b7c54-e07f-4b45-9cea-97339921d035",
      "target": "d73dd503-a0a5-424f-8841-8adde7ef95c0",
      "properties": {
        "prop_1": "Vérifier la politique de rétention et de sauvegarde de l'employeur"
      }
    },
    {
      "id": "e_8_3ae3",
      "type": "EXPOSÉE_À",
      "source": "077742a3-2a16-4032-b852-1e5e77f6bf79",
      "target": "1d798249-4e5e-483e-a8b7-d06858da8f5c",
      "properties": {
        "prop_1": "La plus exposée aux fuites de données de sites tiers"
      }
    },
    {
      "id": "e_9_b551",
      "type": "GÉRÉE_AVEC",
      "source": "077742a3-2a16-4032-b852-1e5e77f6bf79",
      "target": "14905972-9a68-41c9-9046-082fbfc8bb1f",
      "properties": {
        "prop_1": "Utile pour repérer les abonnements oubliés"
      }
    },
    {
      "id": "e_10_5b5a",
      "type": "PROTÈGE_CONTRE",
      "source": "23ea7e74-3419-4b7e-94d3-494fc1d68a92",
      "target": "7b8be873-0a98-4f6b-bdba-505f6de0ac9c",
      "properties": {
        "prop_1": "Rend un mot de passe volé insuffisant pour se connecter"
      }
    },
    {
      "id": "e_11_6b5d",
      "type": "MENACE",
      "source": "7b8be873-0a98-4f6b-bdba-505f6de0ac9c",
      "target": "67883770-1f05-43ee-9831-c565a7bbbd5c",
      "properties": {
        "prop_1": "Une adresse compromise met en péril tout ce qui en dépend"
      }
    },
    {
      "id": "e_12_00d2",
      "type": "PEUT_MENER_À",
      "source": "1d798249-4e5e-483e-a8b7-d06858da8f5c",
      "target": "7b8be873-0a98-4f6b-bdba-505f6de0ac9c",
      "properties": {
        "prop_1": "Vigilance sur les liens et pièces jointes inattendus"
      }
    }
  ]
},

{
  "id": "reseaux-sociaux-personnels",
  "title": "Réseaux sociaux : cartographier sa présence en ligne",
  "category": "Technologie & Sécurité",
  "description": "Vos comptes sur les réseaux sociaux, leur usage réel et les données qu'ils exposent.",
  "longDescription": "Chaque réseau social a son usage, son public et ses paramètres de confidentialité propres. Cartographier ses comptes permet de repérer les profils abandonnés, les données exposées publiquement, et de reprendre la main sur son empreinte numérique.",
  "nodes": [
    {
      "id": "03e25077-cfda-4298-ad4d-6072b6539e3a",
      "label": "Comptes et centres d'intérêt suivis",
      "category": "Suivi",
      "properties": {
        "Objectif": "garder une vue d'ensemble de ce qu'on suit, et pourquoi",
        "prop_1": "Revue recommandée tous les 6 mois pour désencombrer le fil",
        "prop_2": "Un abonnement qui n'apporte plus rien peut être retiré"
      }
    },
    {
      "id": "b71b0b53-855a-4ef8-b646-c839ebe45d6d",
      "label": "Créateur cuisine végétarienne",
      "category": "CompteSuivi",
      "properties": {
        "Plateforme": "à renseigner",
        "Depuis quand suivi ?": "à renseigner",
        "Ce que cela apporte": "à préciser"
      }
    },
    {
      "id": "6c06da2c-7a11-4941-9a73-80d6c6b75317",
      "label": "Compte d'actualité tech",
      "category": "CompteSuivi",
      "properties": {
        "Plateforme": "à renseigner",
        "Depuis quand suivi ?": "à renseigner",
        "Ce que cela apporte": "à préciser"
      }
    },
    {
      "id": "e2edf8a5-0ec7-4d78-91f5-723189643d91",
      "label": "Ami photographe",
      "category": "CompteSuivi",
      "properties": {
        "Plateforme": "à renseigner",
        "Depuis quand suivi ?": "à renseigner",
        "Ce que cela apporte": "à préciser"
      }
    },
    {
      "id": "c065776a-d028-4701-ad33-0df1265efd89",
      "label": "Réseau principal",
      "category": "Reseau",
      "properties": {
        "Nom de la plateforme": "à renseigner",
        "Compte personnel actif dessus depuis": "à renseigner"
      }
    },
    {
      "id": "11fdb783-d528-4ba0-9e32-b00ab46a1ea4",
      "label": "Cuisine du monde",
      "category": "Interet",
      "properties": {
        "Intérêt lié": "à préciser"
      }
    },
    {
      "id": "0cbec17f-6875-4bd7-b405-713e518be199",
      "label": "Liste Recettes à essayer",
      "category": "Liste",
      "properties": {
        "Nombre de comptes dans la liste": "à renseigner",
        "Dernière recette testée": "à renseigner"
      }
    },
    {
      "id": "fc46b4bf-08cc-44c5-b701-4e0a9ee67b23",
      "label": "Désabonnement",
      "category": "Action",
      "properties": {
        "Raison": "contenu répétitif, plus d'intérêt, trop fréquent",
        "Décision": "à prendre"
      }
    },
    {
      "id": "e6f69b6b-d560-4cd7-8e42-1c62a0aaff19",
      "label": "Réseau secondaire",
      "category": "Reseau",
      "properties": {
        "Nom de la plateforme": "à renseigner",
        "Compte personnel actif dessus depuis": "à renseigner"
      }
    },
    {
      "id": "28084721-5a7a-4387-b9a9-98178afdaec6",
      "label": "Photographie",
      "category": "Interet",
      "properties": {
        "Intérêt lié": "à préciser"
      }
    },
    {
      "id": "c3f316a4-e091-4898-9188-ad7f88a9ab8b",
      "label": "Camille Martin",
      "category": "Contact",
      "properties": {
        "Lien avec le répertoire de contacts": "à préciser"
      }
    },
    {
      "id": "a8544989-bbad-4a21-afaf-0ab43dc8e987",
      "label": "Paramètres de confidentialité",
      "category": "Securite",
      "properties": {
        "Profil public ou privé": "à préciser",
        "Localisation partagée": "oui / non",
        "Dernière revue": "à renseigner"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_686e",
      "type": "RECENSE",
      "source": "03e25077-cfda-4298-ad4d-6072b6539e3a",
      "target": "b71b0b53-855a-4ef8-b646-c839ebe45d6d",
      "properties": {
        "prop_1": "Un compte suivi parmi d'autres"
      }
    },
    {
      "id": "e_1_eccc",
      "type": "RECENSE",
      "source": "03e25077-cfda-4298-ad4d-6072b6539e3a",
      "target": "6c06da2c-7a11-4941-9a73-80d6c6b75317",
      "properties": {
        "prop_1": "Un compte suivi parmi d'autres"
      }
    },
    {
      "id": "e_2_132b",
      "type": "RECENSE",
      "source": "03e25077-cfda-4298-ad4d-6072b6539e3a",
      "target": "e2edf8a5-0ec7-4d78-91f5-723189643d91",
      "properties": {
        "prop_1": "Un compte suivi parmi d'autres"
      }
    },
    {
      "id": "e_3_db20",
      "type": "PUBLIE_SUR",
      "source": "b71b0b53-855a-4ef8-b646-c839ebe45d6d",
      "target": "c065776a-d028-4701-ad33-0df1265efd89",
      "properties": {
        "prop_1": "Un même créateur peut être suivi sur plusieurs plateformes"
      }
    },
    {
      "id": "e_4_bec4",
      "type": "NOURRIT",
      "source": "b71b0b53-855a-4ef8-b646-c839ebe45d6d",
      "target": "11fdb783-d528-4ba0-9e32-b00ab46a1ea4",
      "properties": {
        "prop_1": "Un compte suivi qui rejoint un centre d'intérêt réel"
      }
    },
    {
      "id": "e_5_87ef",
      "type": "RANGÉ_DANS",
      "source": "b71b0b53-855a-4ef8-b646-c839ebe45d6d",
      "target": "0cbec17f-6875-4bd7-b405-713e518be199",
      "properties": {
        "prop_1": "Liste ou favoris pour retrouver le contenu plus tard"
      }
    },
    {
      "id": "e_6_9b3b",
      "type": "PUBLIE_SUR",
      "source": "6c06da2c-7a11-4941-9a73-80d6c6b75317",
      "target": "c065776a-d028-4701-ad33-0df1265efd89",
      "properties": {
        "prop_1": "Un même créateur peut être suivi sur plusieurs plateformes"
      }
    },
    {
      "id": "e_7_148a",
      "type": "CANDIDAT_À",
      "source": "6c06da2c-7a11-4941-9a73-80d6c6b75317",
      "target": "fc46b4bf-08cc-44c5-b701-4e0a9ee67b23",
      "properties": {
        "prop_1": "Repéré lors de la revue comme peu utile désormais"
      }
    },
    {
      "id": "e_8_9d67",
      "type": "PUBLIE_SUR",
      "source": "e2edf8a5-0ec7-4d78-91f5-723189643d91",
      "target": "e6f69b6b-d560-4cd7-8e42-1c62a0aaff19",
      "properties": {
        "prop_1": "Un même créateur peut être suivi sur plusieurs plateformes"
      }
    },
    {
      "id": "e_9_0fb1",
      "type": "NOURRIT",
      "source": "e2edf8a5-0ec7-4d78-91f5-723189643d91",
      "target": "28084721-5a7a-4387-b9a9-98178afdaec6",
      "properties": {
        "prop_1": "Un compte suivi qui rejoint un centre d'intérêt réel"
      }
    },
    {
      "id": "e_10_02b4",
      "type": "CORRESPOND_À",
      "source": "e2edf8a5-0ec7-4d78-91f5-723189643d91",
      "target": "c3f316a4-e091-4898-9188-ad7f88a9ab8b",
      "properties": {
        "prop_1": "Retrouver le lien entre le compte suivi et la personne réelle"
      }
    },
    {
      "id": "e_11_4b09",
      "type": "PARAMÉTRÉ_AVEC",
      "source": "c065776a-d028-4701-ad33-0df1265efd89",
      "target": "a8544989-bbad-4a21-afaf-0ab43dc8e987",
      "properties": {
        "prop_1": "Revue recommandée après chaque mise à jour de l'application"
      }
    },
    {
      "id": "e_12_3760",
      "type": "PARAMÉTRÉ_AVEC",
      "source": "e6f69b6b-d560-4cd7-8e42-1c62a0aaff19",
      "target": "a8544989-bbad-4a21-afaf-0ab43dc8e987",
      "properties": {
        "prop_1": "Revue recommandée après chaque mise à jour de l'application"
      }
    }
  ]
},

{
  "id": "documents-administratifs",
  "title": "Documents administratifs : ne plus jamais chercher un papier important",
  "category": "Droits & Démarches",
  "description": "Où sont rangés vos documents essentiels, leurs dates de validité et les démarches qui en dépendent.",
  "longDescription": "Carte d'identité, passeport, contrats, diplômes : chaque document a une date de validité, un lieu de conservation, et parfois une démarche à renouveler à temps. Cette cartographie relie les documents aux échéances et aux organismes qui les délivrent.",
  "nodes": [
    {
      "id": "a08b4c82-2a9f-4ed0-9629-18c24f848115",
      "label": "Classeur de documents personnels",
      "category": "Archivage",
      "properties": {
        "Support": "classeur papier, coffre numérique, les deux ?",
        "Copies numériques faites": "oui / non",
        "prop_1": "Revue recommandée une fois par an"
      }
    },
    {
      "id": "af8a3839-e510-48dd-89e7-2c3260d36378",
      "label": "Carte d'identité",
      "category": "Document",
      "properties": {
        "Date d'expiration": "à renseigner",
        "Numéro": "à renseigner",
        "Emplacement de l'original": "à renseigner"
      }
    },
    {
      "id": "de0c179e-4bb1-4047-9e83-b9805343f32d",
      "label": "Contrat de bail",
      "category": "Document",
      "properties": {
        "Date de signature": "à renseigner",
        "Durée": "à renseigner",
        "Emplacement de l'original": "à renseigner"
      }
    },
    {
      "id": "80f25ee7-6235-40ee-a213-dec65269108a",
      "label": "Diplôme",
      "category": "Document",
      "properties": {
        "Établissement": "à renseigner",
        "Année d'obtention": "à renseigner",
        "Emplacement de l'original": "à renseigner"
      }
    },
    {
      "id": "22315938-e6c7-4483-9d1f-5d38a0bafdff",
      "label": "Carnet de santé",
      "category": "Document",
      "properties": {
        "Dernière mise à jour": "à renseigner",
        "Emplacement de l'original": "à renseigner"
      }
    },
    {
      "id": "c0acd746-f952-4297-8935-06efe74c46af",
      "label": "Demande de passeport",
      "category": "Demarche",
      "properties": {
        "Statut de la démarche": "à renseigner",
        "Justificatifs requis": "à lister"
      }
    },
    {
      "id": "d2321ca4-e406-4467-8cf5-9441106ad55b",
      "label": "Échéance à surveiller",
      "category": "Echeance",
      "properties": {
        "Date": "à renseigner",
        "Rappel programmé": "oui / non",
        "Délai habituel de renouvellement": "à renseigner"
      }
    },
    {
      "id": "ba47c1c8-3c3f-4d4f-a8a9-8ae255354468",
      "label": "Mairie",
      "category": "Organisme",
      "properties": {
        "Commune": "à renseigner",
        "Prise de rendez-vous nécessaire": "oui / non"
      }
    },
    {
      "id": "28ea1460-7a93-40c9-af6a-e50d0c01511e",
      "label": "État des lieux d'entrée",
      "category": "Document",
      "properties": {
        "Date": "à renseigner",
        "Photos jointes": "oui / non",
        "Emplacement": "à renseigner"
      }
    },
    {
      "id": "96596dca-c94d-4da7-a30f-00c4ae8710f5",
      "label": "Justificatif de domicile",
      "category": "Document",
      "properties": {
        "Documents acceptés": "facture récente, quittance, attestation",
        "Dernier utilisé": "à renseigner"
      }
    },
    {
      "id": "84e4a4e3-67c1-4571-86d1-68c82a0e438f",
      "label": "Bailleur",
      "category": "Organisme",
      "properties": {
        "Nom": "à renseigner",
        "Coordonnées": "à renseigner"
      }
    },
    {
      "id": "29263200-0f06-4c6f-a3fb-368115059ade",
      "label": "Demande d'aide au logement",
      "category": "Demarche",
      "properties": {
        "Statut de la démarche": "à renseigner",
        "Organisme": "CAF ou MSA"
      }
    },
    {
      "id": "8abb126e-5493-4bdd-9917-c7e7316746a1",
      "label": "Candidature à un emploi",
      "category": "Demarche",
      "properties": {
        "Copie certifiée nécessaire": "oui / non",
        "Traduction nécessaire": "oui / non"
      }
    },
    {
      "id": "60523c09-4ff5-4d14-ba2b-178b020366e5",
      "label": "Établissement d'enseignement",
      "category": "Organisme",
      "properties": {
        "Nom": "à renseigner",
        "prop_1": "Service des diplômes, contact en cas de perte : à renseigner"
      }
    },
    {
      "id": "dfe1a6e5-5ea2-449a-a233-afab65ee8476",
      "label": "Carnet de vaccination",
      "category": "Document",
      "properties": {
        "Dernière vaccination": "à renseigner",
        "Prochain rappel": "à renseigner",
        "Emplacement": "à renseigner"
      }
    },
    {
      "id": "1a38a28f-5b2e-4828-822b-31e401580881",
      "label": "Suivi médical",
      "category": "Demarche",
      "properties": {
        "Médecin traitant": "à renseigner",
        "Prochain rendez-vous": "à renseigner"
      }
    },
    {
      "id": "28ccd118-16a4-47e4-bf4a-ec35d234ff33",
      "label": "Coffre numérique chiffré",
      "category": "Emplacement",
      "properties": {
        "Application ou service utilisé": "à renseigner",
        "prop_1": "Mot de passe géré via le gestionnaire de mots de passe",
        "Sauvegarde hors ligne": "oui / non"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_02b6",
      "type": "RASSEMBLE",
      "source": "a08b4c82-2a9f-4ed0-9629-18c24f848115",
      "target": "af8a3839-e510-48dd-89e7-2c3260d36378",
      "properties": {
        "prop_1": "Un document essentiel parmi d'autres"
      }
    },
    {
      "id": "e_1_8862",
      "type": "RASSEMBLE",
      "source": "a08b4c82-2a9f-4ed0-9629-18c24f848115",
      "target": "de0c179e-4bb1-4047-9e83-b9805343f32d",
      "properties": {
        "prop_1": "Un document essentiel parmi d'autres"
      }
    },
    {
      "id": "e_2_0333",
      "type": "RASSEMBLE",
      "source": "a08b4c82-2a9f-4ed0-9629-18c24f848115",
      "target": "80f25ee7-6235-40ee-a213-dec65269108a",
      "properties": {
        "prop_1": "Un document essentiel parmi d'autres"
      }
    },
    {
      "id": "e_3_99c5",
      "type": "RASSEMBLE",
      "source": "a08b4c82-2a9f-4ed0-9629-18c24f848115",
      "target": "22315938-e6c7-4483-9d1f-5d38a0bafdff",
      "properties": {
        "prop_1": "Un document essentiel parmi d'autres"
      }
    },
    {
      "id": "e_4_e800",
      "type": "NÉCESSAIRE_POUR",
      "source": "af8a3839-e510-48dd-89e7-2c3260d36378",
      "target": "c0acd746-f952-4297-8935-06efe74c46af",
      "properties": {
        "prop_1": "Toute demande liée à un déplacement à l'étranger"
      }
    },
    {
      "id": "e_5_9330",
      "type": "EXPIRE_LE",
      "source": "af8a3839-e510-48dd-89e7-2c3260d36378",
      "target": "d2321ca4-e406-4467-8cf5-9441106ad55b",
      "properties": {
        "prop_1": "Anticiper le renouvellement plusieurs mois avant l'échéance"
      }
    },
    {
      "id": "e_6_c3f8",
      "type": "DÉLIVRÉE_PAR",
      "source": "af8a3839-e510-48dd-89e7-2c3260d36378",
      "target": "ba47c1c8-3c3f-4d4f-a8a9-8ae255354468",
      "properties": {
        "prop_1": "Service émetteur du document"
      }
    },
    {
      "id": "e_7_705e",
      "type": "DÉPEND_DE",
      "source": "de0c179e-4bb1-4047-9e83-b9805343f32d",
      "target": "28ea1460-7a93-40c9-af6a-e50d0c01511e",
      "properties": {
        "prop_1": "Document qui conditionne la validité du bail"
      }
    },
    {
      "id": "e_8_2b52",
      "type": "NÉCESSAIRE_POUR",
      "source": "de0c179e-4bb1-4047-9e83-b9805343f32d",
      "target": "96596dca-c94d-4da7-a30f-00c4ae8710f5",
      "properties": {
        "prop_1": "Demandé par la plupart des organismes comme justificatif de domicile"
      }
    },
    {
      "id": "e_9_a81c",
      "type": "CONCERNE",
      "source": "de0c179e-4bb1-4047-9e83-b9805343f32d",
      "target": "84e4a4e3-67c1-4571-86d1-68c82a0e438f",
      "properties": {
        "prop_1": "Partie prenante du contrat"
      }
    },
    {
      "id": "e_10_867c",
      "type": "UTILE_POUR",
      "source": "de0c179e-4bb1-4047-9e83-b9805343f32d",
      "target": "29263200-0f06-4c6f-a3fb-368115059ade",
      "properties": {
        "prop_1": "Un même document sert souvent plusieurs démarches"
      }
    },
    {
      "id": "e_11_f506",
      "type": "NÉCESSAIRE_POUR",
      "source": "80f25ee7-6235-40ee-a213-dec65269108a",
      "target": "8abb126e-5493-4bdd-9917-c7e7316746a1",
      "properties": {
        "prop_1": "Souvent demandé sous forme de copie certifiée"
      }
    },
    {
      "id": "e_12_6e63",
      "type": "DÉLIVRÉ_PAR",
      "source": "80f25ee7-6235-40ee-a213-dec65269108a",
      "target": "60523c09-4ff5-4d14-ba2b-178b020366e5",
      "properties": {
        "prop_1": "Service émetteur du document"
      }
    },
    {
      "id": "e_13_06a4",
      "type": "DÉPEND_DE",
      "source": "22315938-e6c7-4483-9d1f-5d38a0bafdff",
      "target": "dfe1a6e5-5ea2-449a-a233-afab65ee8476",
      "properties": {
        "prop_1": "Document qui alimente le carnet de santé"
      }
    },
    {
      "id": "e_14_aace",
      "type": "UTILE_POUR",
      "source": "22315938-e6c7-4483-9d1f-5d38a0bafdff",
      "target": "1a38a28f-5b2e-4828-822b-31e401580881",
      "properties": {
        "prop_1": "Un même document sert souvent plusieurs démarches"
      }
    },
    {
      "id": "e_15_aa19",
      "type": "CONCERNE_ÉGALEMENT",
      "source": "d2321ca4-e406-4467-8cf5-9441106ad55b",
      "target": "80f25ee7-6235-40ee-a213-dec65269108a",
      "properties": {
        "prop_1": "Plusieurs documents partagent le même type d'échéance"
      }
    },
    {
      "id": "e_16_d007",
      "type": "CONTIENT_UNE_COPIE_DE",
      "source": "28ccd118-16a4-47e4-bf4a-ec35d234ff33",
      "target": "af8a3839-e510-48dd-89e7-2c3260d36378",
      "properties": {
        "prop_1": "Copie numérique, l'original reste physique"
      }
    },
    {
      "id": "e_17_5149",
      "type": "CONTIENT_UNE_COPIE_DE",
      "source": "28ccd118-16a4-47e4-bf4a-ec35d234ff33",
      "target": "80f25ee7-6235-40ee-a213-dec65269108a",
      "properties": {
        "prop_1": "Copie numérique, l'original reste physique"
      }
    }
  ]
},

{
  "id": "bibliotheque-personnelle",
  "title": "Bibliothèque personnelle : ce que vous lisez, et ce que ça révèle",
  "category": "Culture & Société",
  "description": "Vos lectures reliées par auteurs, genres et recommandations — pour redécouvrir votre propre bibliothèque.",
  "longDescription": "Une cartographie des livres lus, prêtés ou à lire, reliés entre eux par leurs auteurs, leurs genres et les personnes qui vous les ont conseillés. Utile pour retrouver un titre prêté, ou simplement observer ses propres goûts de lecture dans le temps.",
  "nodes": [
    {
      "id": "4a5a3fcc-4bb1-461b-8b26-c25f666d30e2",
      "label": "Bibliothèque personnelle",
      "category": "Bibliotheque",
      "properties": {
        "Où est-elle recensée": "appli, tableur, carnet ?",
        "Nombre approximatif de livres": "à renseigner",
        "Classement": "par auteur, par genre, par étagère ?"
      }
    },
    {
      "id": "c826e2fd-cf85-4121-b39a-ebc1b52c2431",
      "label": "1984",
      "category": "Livre",
      "properties": {
        "Auteur": "George Orwell",
        "Année de publication": "1949",
        "Format": "papier, numérique ou audio ?"
      }
    },
    {
      "id": "971e6458-99ab-4404-9013-89bfe0abb174",
      "label": "Sapiens",
      "category": "Livre",
      "properties": {
        "Auteur": "Yuval Noah Harari",
        "Année de publication": "2011",
        "Format": "papier, numérique ou audio ?"
      }
    },
    {
      "id": "cbd219a0-7a95-4787-a2db-7d1c5463d52c",
      "label": "Le Petit Prince",
      "category": "Livre",
      "properties": {
        "Auteur": "Antoine de Saint-Exupéry",
        "Année de publication": "1943",
        "Format": "papier, numérique ou audio ?"
      }
    },
    {
      "id": "f815d6bf-4631-4254-85fb-5f4dc44f2377",
      "label": "Dystopie",
      "category": "Genre",
      "properties": {
        "prop_1": "Autres livres du même genre dans la bibliothèque : à lister"
      }
    },
    {
      "id": "f22a5874-6d22-4c36-9663-4e11ce9039d2",
      "label": "George Orwell",
      "category": "Auteur",
      "properties": {
        "Autres œuvres possédées": "à lister",
        "Note personnelle sur l'auteur": "à renseigner"
      }
    },
    {
      "id": "4a0bbfea-9d5b-4735-b793-4b423156ca66",
      "label": "Étagère salon",
      "category": "Emplacement",
      "properties": {
        "Contenu approximatif": "à préciser",
        "Rangement": "par genre ou par auteur ?"
      }
    },
    {
      "id": "505d0c8d-20fe-4719-b9d4-a2b94b96acf8",
      "label": "Résumé et impressions : 1984",
      "category": "NoteLecture",
      "properties": {
        "prop_1": "Ce qui a marqué à la lecture : à renseigner",
        "Note sur 5": "à renseigner",
        "Relu en": "à renseigner"
      }
    },
    {
      "id": "47bd3a5c-81f9-4822-8da5-257acdab047e",
      "label": "Essai",
      "category": "Genre",
      "properties": {
        "prop_1": "Autres livres du même genre dans la bibliothèque : à lister"
      }
    },
    {
      "id": "53c6b12e-bc2b-4852-921b-82b73e984b87",
      "label": "Yuval Noah Harari",
      "category": "Auteur",
      "properties": {
        "Autres œuvres possédées": "à lister",
        "Note personnelle sur l'auteur": "à renseigner"
      }
    },
    {
      "id": "fbe6b77c-1b8b-4dc5-96dd-41290b1a1566",
      "label": "Prêt en cours",
      "category": "Pret",
      "properties": {
        "Emprunteur": "à renseigner",
        "Date de prêt": "à renseigner",
        "Relance prévue le": "à renseigner"
      }
    },
    {
      "id": "66343bb9-e7a8-44b2-829b-ddd7fa035a6c",
      "label": "Résumé et impressions : Sapiens",
      "category": "NoteLecture",
      "properties": {
        "prop_1": "Ce qui a marqué à la lecture : à renseigner",
        "Note sur 5": "à renseigner",
        "Relu en": "à renseigner"
      }
    },
    {
      "id": "02ce8ba4-dab3-45ff-b1cf-386961b25eb5",
      "label": "Conte",
      "category": "Genre",
      "properties": {
        "prop_1": "Autres livres du même genre dans la bibliothèque : à lister"
      }
    },
    {
      "id": "31f42c60-89f6-4455-be5e-a99b07041462",
      "label": "Antoine de Saint-Exupéry",
      "category": "Auteur",
      "properties": {
        "Autres œuvres possédées": "à lister",
        "Note personnelle sur l'auteur": "à renseigner"
      }
    },
    {
      "id": "16837e71-cad5-4985-ac09-07ea64b05ae5",
      "label": "Étagère chambre",
      "category": "Emplacement",
      "properties": {
        "Contenu approximatif": "à préciser",
        "Rangement": "par genre ou par auteur ?"
      }
    },
    {
      "id": "3edb7bc0-26b2-4bf2-b00a-6c432b8b831d",
      "label": "Souvenir de cadeau",
      "category": "Souvenir",
      "properties": {
        "Offert par": "à renseigner",
        "Occasion": "à préciser",
        "Dédicace": "oui / non"
      }
    },
    {
      "id": "de6d18ba-82ad-4930-9aaa-8c70b69d0643",
      "label": "Liste des envies de lecture",
      "category": "Envie",
      "properties": {
        "prop_1": "Alimentée par les recommandations, critiques lues, files d'attente en librairie",
        "prop_2": "Revue avant chaque achat pour éviter les doublons"
      }
    },
    {
      "id": "1259cf13-41c0-45d0-9fb5-7c4b97482528",
      "label": "Le Nom de la rose",
      "category": "Livre",
      "properties": {
        "Auteur": "Umberto Eco",
        "Recommandé par": "à renseigner",
        "Disponible en médiathèque": "à vérifier"
      }
    },
    {
      "id": "88633840-0b7a-4bba-9904-cc467679dcec",
      "label": "Médiathèque de quartier",
      "category": "Organisme",
      "properties": {
        "Adresse": "à renseigner",
        "N° d'abonné": "à renseigner",
        "Date de retour la plus proche": "à renseigner"
      }
    },
    {
      "id": "e3949f10-b2d8-4727-bbed-1039ca06a176",
      "label": "Librairie de quartier",
      "category": "Organisme",
      "properties": {
        "Enseigne": "à renseigner",
        "Carte de fidélité": "oui / non"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_0fa0",
      "type": "CONTIENT",
      "source": "4a5a3fcc-4bb1-461b-8b26-c25f666d30e2",
      "target": "c826e2fd-cf85-4121-b39a-ebc1b52c2431",
      "properties": {
        "prop_1": "Une fiche par livre marquant"
      }
    },
    {
      "id": "e_1_3f4e",
      "type": "CONTIENT",
      "source": "4a5a3fcc-4bb1-461b-8b26-c25f666d30e2",
      "target": "971e6458-99ab-4404-9013-89bfe0abb174",
      "properties": {
        "prop_1": "Une fiche par livre marquant"
      }
    },
    {
      "id": "e_2_69da",
      "type": "CONTIENT",
      "source": "4a5a3fcc-4bb1-461b-8b26-c25f666d30e2",
      "target": "cbd219a0-7a95-4787-a2db-7d1c5463d52c",
      "properties": {
        "prop_1": "Une fiche par livre marquant"
      }
    },
    {
      "id": "e_3_bac8",
      "type": "APPARTIENT_AU_GENRE",
      "source": "c826e2fd-cf85-4121-b39a-ebc1b52c2431",
      "target": "f815d6bf-4631-4254-85fb-5f4dc44f2377",
      "properties": {
        "prop_1": "Un livre peut relever de plusieurs genres"
      }
    },
    {
      "id": "e_4_e701",
      "type": "ÉCRIT_PAR",
      "source": "c826e2fd-cf85-4121-b39a-ebc1b52c2431",
      "target": "f22a5874-6d22-4c36-9663-4e11ce9039d2",
      "properties": {
        "prop_1": "Fiche auteur commune à tous ses livres possédés"
      }
    },
    {
      "id": "e_5_a893",
      "type": "SE_TROUVE",
      "source": "c826e2fd-cf85-4121-b39a-ebc1b52c2431",
      "target": "4a0bbfea-9d5b-4735-b793-4b423156ca66",
      "properties": {
        "prop_1": "Utile en cas de prêt à retrouver"
      }
    },
    {
      "id": "e_6_313a",
      "type": "RÉSUMÉ",
      "source": "c826e2fd-cf85-4121-b39a-ebc1b52c2431",
      "target": "505d0c8d-20fe-4719-b9d4-a2b94b96acf8",
      "properties": {
        "prop_1": "Note de lecture personnelle, pas un résumé officiel"
      }
    },
    {
      "id": "e_7_014c",
      "type": "APPARTIENT_AU_GENRE",
      "source": "971e6458-99ab-4404-9013-89bfe0abb174",
      "target": "47bd3a5c-81f9-4822-8da5-257acdab047e",
      "properties": {
        "prop_1": "Un livre peut relever de plusieurs genres"
      }
    },
    {
      "id": "e_8_b055",
      "type": "ÉCRIT_PAR",
      "source": "971e6458-99ab-4404-9013-89bfe0abb174",
      "target": "53c6b12e-bc2b-4852-921b-82b73e984b87",
      "properties": {
        "prop_1": "Fiche auteur commune à tous ses livres possédés"
      }
    },
    {
      "id": "e_9_69e9",
      "type": "PRÊTÉ_À",
      "source": "971e6458-99ab-4404-9013-89bfe0abb174",
      "target": "fbe6b77c-1b8b-4dc5-96dd-41290b1a1566",
      "properties": {
        "prop_1": "Penser à noter la date pour ne pas oublier de le réclamer"
      }
    },
    {
      "id": "e_10_b2ae",
      "type": "RÉSUMÉ",
      "source": "971e6458-99ab-4404-9013-89bfe0abb174",
      "target": "66343bb9-e7a8-44b2-829b-ddd7fa035a6c",
      "properties": {
        "prop_1": "Note de lecture personnelle, pas un résumé officiel"
      }
    },
    {
      "id": "e_11_ab5c",
      "type": "APPARTIENT_AU_GENRE",
      "source": "cbd219a0-7a95-4787-a2db-7d1c5463d52c",
      "target": "02ce8ba4-dab3-45ff-b1cf-386961b25eb5",
      "properties": {
        "prop_1": "Un livre peut relever de plusieurs genres"
      }
    },
    {
      "id": "e_12_c787",
      "type": "ÉCRIT_PAR",
      "source": "cbd219a0-7a95-4787-a2db-7d1c5463d52c",
      "target": "31f42c60-89f6-4455-be5e-a99b07041462",
      "properties": {
        "prop_1": "Fiche auteur commune à tous ses livres possédés"
      }
    },
    {
      "id": "e_13_7e3e",
      "type": "SE_TROUVE",
      "source": "cbd219a0-7a95-4787-a2db-7d1c5463d52c",
      "target": "16837e71-cad5-4985-ac09-07ea64b05ae5",
      "properties": {
        "prop_1": "Utile en cas de prêt à retrouver"
      }
    },
    {
      "id": "e_14_e07f",
      "type": "OFFERT_PAR",
      "source": "cbd219a0-7a95-4787-a2db-7d1c5463d52c",
      "target": "3edb7bc0-26b2-4bf2-b00a-6c432b8b831d",
      "properties": {
        "prop_1": "Petite mémoire des cadeaux littéraires reçus"
      }
    },
    {
      "id": "e_15_0b30",
      "type": "CONTIENT",
      "source": "de6d18ba-82ad-4930-9aaa-8c70b69d0643",
      "target": "1259cf13-41c0-45d0-9fb5-7c4b97482528",
      "properties": {
        "prop_1": "Prochain achat envisagé"
      }
    },
    {
      "id": "e_16_f8e9",
      "type": "S'APPROVISIONNE_VIA",
      "source": "de6d18ba-82ad-4930-9aaa-8c70b69d0643",
      "target": "88633840-0b7a-4bba-9904-cc467679dcec",
      "properties": {
        "prop_1": "Comparer avant d'acheter neuf"
      }
    },
    {
      "id": "e_17_746d",
      "type": "S'APPROVISIONNE_VIA",
      "source": "de6d18ba-82ad-4930-9aaa-8c70b69d0643",
      "target": "e3949f10-b2d8-4727-bbed-1039ca06a176",
      "properties": {
        "prop_1": "Éviter les doublons avec la médiathèque"
      }
    }
  ]
},

{
  "id": "centres-interet",
  "title": "Centres d'intérêt : ce que vos loisirs révèlent de vos valeurs",
  "category": "Développement personnel",
  "description": "Vos passe-temps reliés aux valeurs qu'ils expriment — une autre façon de savoir ce qui compte vraiment.",
  "longDescription": "Photographie, cuisine, course à pied... chaque centre d'intérêt cache une valeur plus profonde (créer, partager, se dépasser). Cartographier ses loisirs et leurs liens permet de mieux prioriser son temps libre, et de repérer ce qui, sous des formes différentes, revient toujours.",
  "nodes": [
    {
      "id": "04ed72a4-e048-431d-b789-3db6315ab17d",
      "label": "Mes centres d'intérêt",
      "category": "Reflexion",
      "properties": {
        "Vue d'ensemble": "ce qui occupe le temps libre, et ce que cela révèle des priorités",
        "prop_1": "À revisiter une fois par an, les intérêts évoluent",
        "prop_2": "Utile pour prioriser le temps disponible"
      }
    },
    {
      "id": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "label": "Photographie",
      "category": "Interet",
      "properties": {
        "Depuis quand ?": "à renseigner",
        "Ce que cet intérêt apporte": "à préciser",
        "Temps hebdomadaire consacré": "à renseigner"
      }
    },
    {
      "id": "d9673a03-9de6-456e-92de-d9f378da52f6",
      "label": "Cuisine du monde",
      "category": "Interet",
      "properties": {
        "Depuis quand ?": "à renseigner",
        "Ce que cet intérêt apporte": "à préciser",
        "Temps hebdomadaire consacré": "à renseigner"
      }
    },
    {
      "id": "c3805b14-2c88-4229-a892-1c7dc72e08ca",
      "label": "Course à pied",
      "category": "Interet",
      "properties": {
        "Depuis quand ?": "à renseigner",
        "Ce que cet intérêt apporte": "à préciser",
        "Temps hebdomadaire consacré": "à renseigner"
      }
    },
    {
      "id": "f0cd8dd9-638e-4376-b608-3157c7bce059",
      "label": "Besoin de créer",
      "category": "Valeur",
      "properties": {
        "prop_1": "Autres intérêts qui expriment cette même valeur : à lister"
      }
    },
    {
      "id": "08d58926-4343-4d52-985e-3bb5ffec255a",
      "label": "Sorties photo du dimanche",
      "category": "Activite",
      "properties": {
        "Fréquence": "à renseigner",
        "Avec qui ?": "à préciser",
        "Lieux favoris": "à lister"
      }
    },
    {
      "id": "4df5dbc3-b86a-4604-a74e-a6f832cbaa93",
      "label": "Chaîne vidéo de techniques photo",
      "category": "Ressource",
      "properties": {
        "Nom": "à renseigner",
        "Ce qu'elle apporte": "à préciser"
      }
    },
    {
      "id": "0180c210-c8a7-4437-a08d-4bb8d48d1e0e",
      "label": "Club photo local",
      "category": "Communaute",
      "properties": {
        "Fréquence des rencontres": "à renseigner",
        "prop_1": "Ce que cela apporte en plus de la pratique solo : à préciser"
      }
    },
    {
      "id": "ecb9a4b1-2d89-4709-ae9b-99b6f0577998",
      "label": "Exposer une série de photos",
      "category": "Objectif",
      "properties": {
        "Échéance visée": "à renseigner",
        "Prochaine étape concrète": "à renseigner"
      }
    },
    {
      "id": "dd8c9880-e5fa-483e-bac5-dcd8680d10d6",
      "label": "Goût du partage",
      "category": "Valeur",
      "properties": {
        "prop_1": "Autres intérêts qui expriment cette même valeur : à lister"
      }
    },
    {
      "id": "f3aa0b3c-a38b-4a3e-af7b-532daffe1816",
      "label": "Dîner à thème mensuel",
      "category": "Activite",
      "properties": {
        "Fréquence": "à renseigner",
        "Avec qui ?": "à préciser",
        "Dernier thème essayé": "à renseigner"
      }
    },
    {
      "id": "20e85095-84df-458a-9775-ed0730732329",
      "label": "Livre de recettes voyageuses",
      "category": "Ressource",
      "properties": {
        "Titre": "à renseigner",
        "Recette favorite testée": "à renseigner"
      }
    },
    {
      "id": "65b6ad6b-86b9-4aca-843a-2ea4c1ca2023",
      "label": "Discipline personnelle",
      "category": "Valeur",
      "properties": {
        "prop_1": "Autres intérêts qui expriment cette même valeur : à lister"
      }
    },
    {
      "id": "8e13818c-a2c7-4f69-a9bb-d4ff48980bac",
      "label": "Sortie du mardi soir",
      "category": "Activite",
      "properties": {
        "Fréquence": "à renseigner",
        "Avec qui ?": "à préciser",
        "Distance habituelle": "à renseigner"
      }
    },
    {
      "id": "143478b1-de48-4f05-bd1c-0921ca343137",
      "label": "Club de course",
      "category": "Communaute",
      "properties": {
        "Fréquence des rencontres": "à renseigner",
        "prop_1": "Ce que cela apporte en plus de la pratique solo : à préciser"
      }
    },
    {
      "id": "e03eeb09-49c8-4988-8b05-f0a9bda2d7b2",
      "label": "Courir un semi-marathon",
      "category": "Objectif",
      "properties": {
        "Échéance visée": "à renseigner",
        "Prochaine étape concrète": "à renseigner"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_4afb",
      "type": "RASSEMBLE",
      "source": "04ed72a4-e048-431d-b789-3db6315ab17d",
      "target": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "properties": {
        "prop_1": "Un intérêt suivi dans la durée"
      }
    },
    {
      "id": "e_1_e3a1",
      "type": "RASSEMBLE",
      "source": "04ed72a4-e048-431d-b789-3db6315ab17d",
      "target": "d9673a03-9de6-456e-92de-d9f378da52f6",
      "properties": {
        "prop_1": "Un intérêt suivi dans la durée"
      }
    },
    {
      "id": "e_2_a24f",
      "type": "RASSEMBLE",
      "source": "04ed72a4-e048-431d-b789-3db6315ab17d",
      "target": "c3805b14-2c88-4229-a892-1c7dc72e08ca",
      "properties": {
        "prop_1": "Un intérêt suivi dans la durée"
      }
    },
    {
      "id": "e_3_4102",
      "type": "RÉVÈLE",
      "source": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "target": "f0cd8dd9-638e-4376-b608-3157c7bce059",
      "properties": {
        "prop_1": "L'intérêt pratiqué éclaire ce qui compte vraiment"
      }
    },
    {
      "id": "e_4_4b53",
      "type": "SE_PRATIQUE_VIA",
      "source": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "target": "08d58926-4343-4d52-985e-3bb5ffec255a",
      "properties": {
        "prop_1": "Activité concrète, régulière ou occasionnelle"
      }
    },
    {
      "id": "e_5_3b64",
      "type": "NOURRI_PAR",
      "source": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "target": "4df5dbc3-b86a-4604-a74e-a6f832cbaa93",
      "properties": {
        "prop_1": "Ressource qui approfondit l'intérêt"
      }
    },
    {
      "id": "e_6_d5bb",
      "type": "PARTAGÉ_AVEC",
      "source": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "target": "0180c210-c8a7-4437-a08d-4bb8d48d1e0e",
      "properties": {
        "prop_1": "Les intérêts pratiqués seul ou à plusieurs n'ont pas le même rôle"
      }
    },
    {
      "id": "e_7_e320",
      "type": "VISE",
      "source": "e89336a3-a87e-4daa-84d9-2c53990a0dbe",
      "target": "ecb9a4b1-2d89-4709-ae9b-99b6f0577998",
      "properties": {
        "prop_1": "Un objectif rend l'intérêt plus qu'un passe-temps"
      }
    },
    {
      "id": "e_8_582e",
      "type": "RÉVÈLE",
      "source": "d9673a03-9de6-456e-92de-d9f378da52f6",
      "target": "dd8c9880-e5fa-483e-bac5-dcd8680d10d6",
      "properties": {
        "prop_1": "L'intérêt pratiqué éclaire ce qui compte vraiment"
      }
    },
    {
      "id": "e_9_82e0",
      "type": "SE_PRATIQUE_VIA",
      "source": "d9673a03-9de6-456e-92de-d9f378da52f6",
      "target": "f3aa0b3c-a38b-4a3e-af7b-532daffe1816",
      "properties": {
        "prop_1": "Activité concrète, régulière ou occasionnelle"
      }
    },
    {
      "id": "e_10_15aa",
      "type": "NOURRI_PAR",
      "source": "d9673a03-9de6-456e-92de-d9f378da52f6",
      "target": "20e85095-84df-458a-9775-ed0730732329",
      "properties": {
        "prop_1": "Ressource qui approfondit l'intérêt"
      }
    },
    {
      "id": "e_11_9333",
      "type": "RÉVÈLE",
      "source": "c3805b14-2c88-4229-a892-1c7dc72e08ca",
      "target": "65b6ad6b-86b9-4aca-843a-2ea4c1ca2023",
      "properties": {
        "prop_1": "L'intérêt pratiqué éclaire ce qui compte vraiment"
      }
    },
    {
      "id": "e_12_736f",
      "type": "SE_PRATIQUE_VIA",
      "source": "c3805b14-2c88-4229-a892-1c7dc72e08ca",
      "target": "8e13818c-a2c7-4f69-a9bb-d4ff48980bac",
      "properties": {
        "prop_1": "Activité concrète, régulière ou occasionnelle"
      }
    },
    {
      "id": "e_13_8bd8",
      "type": "PARTAGÉ_AVEC",
      "source": "c3805b14-2c88-4229-a892-1c7dc72e08ca",
      "target": "143478b1-de48-4f05-bd1c-0921ca343137",
      "properties": {
        "prop_1": "Les intérêts pratiqués seul ou à plusieurs n'ont pas le même rôle"
      }
    },
    {
      "id": "e_14_2035",
      "type": "VISE",
      "source": "c3805b14-2c88-4229-a892-1c7dc72e08ca",
      "target": "e03eeb09-49c8-4988-8b05-f0a9bda2d7b2",
      "properties": {
        "prop_1": "Un objectif rend l'intérêt plus qu'un passe-temps"
      }
    },
    {
      "id": "e_15_dcee",
      "type": "S'EXPRIME_AUSSI_DANS",
      "source": "f0cd8dd9-638e-4376-b608-3157c7bce059",
      "target": "d9673a03-9de6-456e-92de-d9f378da52f6",
      "properties": {
        "prop_1": "Une même valeur nourrit souvent plusieurs intérêts"
      }
    }
  ]
},

{
  "id": "reseau-de-contacts",
  "title": "Réseau de contacts : qui compte vraiment dans votre vie",
  "category": "Développement personnel",
  "description": "Famille, amis, professionnels : une cartographie de votre entourage et de ce qui vous relie à chacun.",
  "longDescription": "Un carnet d'adresses classe les gens par ordre alphabétique. Un graphe les relie par ce qui compte : la nature du lien, la fréquence des échanges, ce que chaque personne apporte. De quoi mieux entretenir son réseau, personnel comme professionnel.",
  "nodes": [
    {
      "id": "b0ffcc6e-7364-4a4e-bc7e-0b6f0d546a9c",
      "label": "Mon répertoire",
      "category": "Repertoire",
      "properties": {
        "Où est-il tenu": "téléphone, carnet papier, gestionnaire de contacts ?",
        "prop_1": "Sauvegardé où en cas de perte du téléphone ?",
        "Doublons à fusionner": "à vérifier de temps en temps"
      }
    },
    {
      "id": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "label": "Camille Martin",
      "category": "Contact",
      "properties": {
        "Comment on s'est connus": "à renseigner",
        "Depuis quand": "à renseigner",
        "Moyen de contact préféré": "à renseigner"
      }
    },
    {
      "id": "e4746525-72b1-4b84-8cfd-d54428643a60",
      "label": "Nadia Benali",
      "category": "Contact",
      "properties": {
        "Comment on s'est connus": "à renseigner",
        "Depuis quand": "à renseigner",
        "Moyen de contact préféré": "à renseigner"
      }
    },
    {
      "id": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "label": "Thomas Leroy",
      "category": "Contact",
      "properties": {
        "Comment on s'est connus": "à renseigner",
        "Depuis quand": "à renseigner",
        "Moyen de contact préféré": "à renseigner"
      }
    },
    {
      "id": "16b5c27d-cd0e-4997-bb5c-e3b336aafbdc",
      "label": "Amis d'école",
      "category": "Groupe",
      "properties": {
        "Autres membres du groupe": "à lister",
        "Occasion de se retrouver": "à préciser"
      }
    },
    {
      "id": "e9b706e1-3daa-431e-8723-0cc29f93784b",
      "label": "12 mars",
      "category": "DateImportante",
      "properties": {
        "Rappel programmé": "oui / non",
        "Idée cadeau notée": "à renseigner"
      }
    },
    {
      "id": "aa7a60e0-a186-43d3-b802-57f8e3f8777f",
      "label": "Voyage en Grèce 2019",
      "category": "Souvenir",
      "properties": {
        "Date": "à renseigner",
        "Ce qui rend ce souvenir marquant": "à préciser",
        "Photos rangées où ?": "à renseigner"
      }
    },
    {
      "id": "037d7d65-6bf7-4123-bf5c-01dec911131d",
      "label": "Lyon",
      "category": "Lieu",
      "properties": {
        "Adresse complète": "à renseigner",
        "Distance depuis chez moi": "à préciser"
      }
    },
    {
      "id": "5df264bb-8622-4c1e-b513-b89dc6fb1846",
      "label": "Collègues actuels",
      "category": "Groupe",
      "properties": {
        "Autres membres du groupe": "à lister",
        "Occasion de se retrouver": "à préciser"
      }
    },
    {
      "id": "e1383312-704d-4231-a345-ee07d6534b36",
      "label": "Déjeuner du premier vendredi du mois",
      "category": "Evenement",
      "properties": {
        "Lieu habituel": "à renseigner",
        "Prochaine date": "à renseigner"
      }
    },
    {
      "id": "2942b7d4-4de6-46f7-8c3d-7f65fa03b697",
      "label": "27 septembre",
      "category": "DateImportante",
      "properties": {
        "Rappel programmé": "oui / non",
        "Idée cadeau notée": "à renseigner"
      }
    },
    {
      "id": "a5b38423-32c6-46be-9464-1ffdf58e0992",
      "label": "Bordeaux",
      "category": "Lieu",
      "properties": {
        "Adresse complète": "à renseigner",
        "Distance depuis chez moi": "à préciser"
      }
    },
    {
      "id": "cc71af60-86da-4ce0-85ad-59c1e60a2e71",
      "label": "Week-end annuel entre amis",
      "category": "Evenement",
      "properties": {
        "Lieu habituel": "à renseigner",
        "Prochaine édition": "à renseigner",
        "Organisateur cette année": "à renseigner"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_bf1c",
      "type": "RASSEMBLE",
      "source": "b0ffcc6e-7364-4a4e-bc7e-0b6f0d546a9c",
      "target": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "properties": {
        "prop_1": "Une fiche par relation importante"
      }
    },
    {
      "id": "e_1_2cc5",
      "type": "RASSEMBLE",
      "source": "b0ffcc6e-7364-4a4e-bc7e-0b6f0d546a9c",
      "target": "e4746525-72b1-4b84-8cfd-d54428643a60",
      "properties": {
        "prop_1": "Une fiche par relation importante"
      }
    },
    {
      "id": "e_2_24a4",
      "type": "RASSEMBLE",
      "source": "b0ffcc6e-7364-4a4e-bc7e-0b6f0d546a9c",
      "target": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "properties": {
        "prop_1": "Une fiche par relation importante"
      }
    },
    {
      "id": "e_3_0988",
      "type": "FAIT_PARTIE_DE",
      "source": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "target": "16b5c27d-cd0e-4997-bb5c-e3b336aafbdc",
      "properties": {
        "prop_1": "Un contact peut appartenir à plusieurs cercles"
      }
    },
    {
      "id": "e_4_beb8",
      "type": "FÊTE_SON_ANNIVERSAIRE_LE",
      "source": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "target": "e9b706e1-3daa-431e-8723-0cc29f93784b",
      "properties": {
        "prop_1": "Rappel à programmer chaque année"
      }
    },
    {
      "id": "e_5_7d31",
      "type": "A_PARTAGÉ",
      "source": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "target": "aa7a60e0-a186-43d3-b802-57f8e3f8777f",
      "properties": {
        "prop_1": "Un souvenir marquant vaut la peine d'être noté"
      }
    },
    {
      "id": "e_6_e91e",
      "type": "HABITE",
      "source": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "target": "037d7d65-6bf7-4123-bf5c-01dec911131d",
      "properties": {
        "prop_1": "Utile pour organiser une visite"
      }
    },
    {
      "id": "e_7_7d62",
      "type": "FAIT_PARTIE_DE",
      "source": "e4746525-72b1-4b84-8cfd-d54428643a60",
      "target": "5df264bb-8622-4c1e-b513-b89dc6fb1846",
      "properties": {
        "prop_1": "Un contact peut appartenir à plusieurs cercles"
      }
    },
    {
      "id": "e_8_ba51",
      "type": "M'A_PRÉSENTÉ",
      "source": "e4746525-72b1-4b84-8cfd-d54428643a60",
      "target": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "properties": {
        "prop_1": "Utile pour se souvenir de qui connaît qui"
      }
    },
    {
      "id": "e_9_e691",
      "type": "PRÉSENTE_AU",
      "source": "e4746525-72b1-4b84-8cfd-d54428643a60",
      "target": "e1383312-704d-4231-a345-ee07d6534b36",
      "properties": {
        "prop_1": "Un rendez-vous récurrent, pas juste une date passée"
      }
    },
    {
      "id": "e_10_b515",
      "type": "FAIT_PARTIE_DE",
      "source": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "target": "5df264bb-8622-4c1e-b513-b89dc6fb1846",
      "properties": {
        "prop_1": "Un contact peut appartenir à plusieurs cercles"
      }
    },
    {
      "id": "e_11_55c1",
      "type": "FÊTE_SON_ANNIVERSAIRE_LE",
      "source": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "target": "2942b7d4-4de6-46f7-8c3d-7f65fa03b697",
      "properties": {
        "prop_1": "Rappel à programmer chaque année"
      }
    },
    {
      "id": "e_12_08ab",
      "type": "HABITE",
      "source": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "target": "a5b38423-32c6-46be-9464-1ffdf58e0992",
      "properties": {
        "prop_1": "Utile pour organiser une visite"
      }
    },
    {
      "id": "e_13_eb25",
      "type": "SE_RETROUVE_À",
      "source": "16b5c27d-cd0e-4997-bb5c-e3b336aafbdc",
      "target": "cc71af60-86da-4ce0-85ad-59c1e60a2e71",
      "properties": {
        "prop_1": "Événement récurrent du groupe"
      }
    },
    {
      "id": "e_14_a0b8",
      "type": "SE_RETROUVE_À",
      "source": "5df264bb-8622-4c1e-b513-b89dc6fb1846",
      "target": "e1383312-704d-4231-a345-ee07d6534b36",
      "properties": {
        "prop_1": "Événement récurrent du groupe"
      }
    },
    {
      "id": "e_15_dc80",
      "type": "PARTAGÉ_AVEC",
      "source": "aa7a60e0-a186-43d3-b802-57f8e3f8777f",
      "target": "16b5c27d-cd0e-4997-bb5c-e3b336aafbdc",
      "properties": {
        "prop_1": "Un souvenir se relie souvent à plusieurs personnes"
      }
    },
    {
      "id": "e_16_5a99",
      "type": "CONCERNE",
      "source": "e9b706e1-3daa-431e-8723-0cc29f93784b",
      "target": "9074619b-e3b6-4b19-b725-12c6cf28d9ba",
      "properties": {
        "prop_1": "Une date par personne, regroupées pour une vue d'ensemble annuelle"
      }
    },
    {
      "id": "e_17_18c3",
      "type": "CONCERNE",
      "source": "2942b7d4-4de6-46f7-8c3d-7f65fa03b697",
      "target": "3a10ff21-4582-4e1c-b870-f8836ffec571",
      "properties": {
        "prop_1": "Une date par personne, regroupées pour une vue d'ensemble annuelle"
      }
    }
  ]
},

{
  "id": "projets-personnels",
  "title": "Projets personnels : donner une structure à ce que vous voulez accomplir",
  "category": "Développement personnel",
  "description": "Vos projets, leurs étapes et les ressources nécessaires, reliés pour ne plus les perdre de vue.",
  "longDescription": "Un projet personnel avance rarement de façon linéaire : il dépend de ressources, de personnes, d'étapes parfois interdépendantes. Cette cartographie aide à visualiser où en est chaque projet, ce qui le bloque, et ce qu'il reste à faire.",
  "nodes": [
    {
      "id": "de93c4c8-f812-4dec-95c1-04f59bea2650",
      "label": "Suivi de mes projets",
      "category": "Suivi",
      "properties": {
        "Où est-il tenu": "outil dédié, tableur, ce graphe ?",
        "prop_1": "Revue recommandée chaque semaine",
        "prop_2": "Un projet = un objectif avec une échéance"
      }
    },
    {
      "id": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "label": "Refonte du site personnel",
      "category": "Projet",
      "properties": {
        "Objectif": "à formuler en une phrase",
        "Échéance visée": "à renseigner",
        "Statut": "en cours, en pause, terminé"
      }
    },
    {
      "id": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "label": "Organisation du déménagement",
      "category": "Projet",
      "properties": {
        "Objectif": "à formuler en une phrase",
        "Échéance visée": "à renseigner",
        "Statut": "en cours, en pause, terminé"
      }
    },
    {
      "id": "b7e975d6-bb87-4bce-b669-94bca60c94e0",
      "label": "Rédiger le contenu des pages",
      "category": "Tache",
      "properties": {
        "Responsable": "à renseigner",
        "Échéance": "à renseigner",
        "Avancement": "à préciser en %"
      }
    },
    {
      "id": "684813a1-e953-4bfa-9dff-429ea65e067c",
      "label": "Choisir et configurer l'hébergement",
      "category": "Tache",
      "properties": {
        "Responsable": "à renseigner",
        "Échéance": "à renseigner",
        "Avancement": "à préciser en %"
      }
    },
    {
      "id": "7d043cdb-8b5f-4f13-bbaf-56ddb8098bdf",
      "label": "Créer les maquettes visuelles",
      "category": "Tache",
      "properties": {
        "Responsable": "à renseigner",
        "Échéance": "à renseigner",
        "Avancement": "à préciser en %"
      }
    },
    {
      "id": "74ef0ecf-1a5a-4f42-a67a-da7fd09ea0a5",
      "label": "Maquette validée",
      "category": "Jalon",
      "properties": {
        "Date visée": "à renseigner",
        "Critère de validation": "à préciser"
      }
    },
    {
      "id": "3c633b7a-06c7-4f3b-a499-52e210258e8e",
      "label": "Site mis en ligne",
      "category": "Livrable",
      "properties": {
        "Date de mise en ligne visée": "à renseigner",
        "Critère de succès": "à préciser"
      }
    },
    {
      "id": "def2731f-6f10-4021-b16c-39431f044194",
      "label": "Retard sur la rédaction des contenus",
      "category": "Risque",
      "properties": {
        "Probabilité": "faible, moyenne, élevée",
        "Impact si le risque se réalise": "à préciser",
        "Action de mitigation": "à renseigner"
      }
    },
    {
      "id": "fd4b2d00-3c01-4822-a682-37112ab5e0bf",
      "label": "Ami graphiste",
      "category": "Personne",
      "properties": {
        "Rôle sur le projet": "à préciser",
        "Disponibilité": "à renseigner",
        "Moyen de contact": "à renseigner"
      }
    },
    {
      "id": "7d7ea4bd-88de-4be5-b808-5673434e5977",
      "label": "Éditeur de site",
      "category": "Outil",
      "properties": {
        "Nom": "à renseigner",
        "Coût": "gratuit ou abonnement",
        "Alternative envisagée": "à préciser"
      }
    },
    {
      "id": "57488e66-b361-4510-b3a6-5f98d0321cfd",
      "label": "Point hebdomadaire du lundi",
      "category": "Reunion",
      "properties": {
        "Jour et heure": "à renseigner",
        "Format": "seul ou avec l'ami graphiste ?"
      }
    },
    {
      "id": "5aeff922-207a-4053-8196-fa23a35d2e2b",
      "label": "Résilier et transférer les abonnements",
      "category": "Tache",
      "properties": {
        "Responsable": "à renseigner",
        "Échéance": "à renseigner",
        "Avancement": "à préciser en %"
      }
    },
    {
      "id": "28002f64-cfa9-4077-9fc4-744ff5f43dec",
      "label": "Réserver le camion de déménagement",
      "category": "Tache",
      "properties": {
        "Responsable": "à renseigner",
        "Échéance": "à renseigner",
        "Avancement": "à préciser en %"
      }
    },
    {
      "id": "70ae1393-1222-49b1-b70b-7a38d5736923",
      "label": "Faire les cartons",
      "category": "Tache",
      "properties": {
        "Responsable": "à renseigner",
        "Échéance": "à renseigner",
        "Avancement": "à préciser en %"
      }
    },
    {
      "id": "a36ee275-6b50-4fa5-a818-cff5eb797e94",
      "label": "Nouveau logement disponible",
      "category": "Jalon",
      "properties": {
        "Date de remise des clés": "à renseigner",
        "Critère de validation": "à préciser"
      }
    },
    {
      "id": "7ce2701b-af7c-47b7-a439-2dbd846c95ee",
      "label": "Installation terminée",
      "category": "Livrable",
      "properties": {
        "Date visée": "à renseigner",
        "Critère de succès": "à préciser"
      }
    },
    {
      "id": "ffe21488-d3f1-4f81-a0a7-efa4b208a522",
      "label": "Chevauchement des deux loyers",
      "category": "Risque",
      "properties": {
        "Probabilité": "faible, moyenne, élevée",
        "Impact si le risque se réalise": "à préciser",
        "Action de mitigation": "à renseigner"
      }
    },
    {
      "id": "13e09636-3ffe-44d1-b016-6324459bff62",
      "label": "Frère",
      "category": "Personne",
      "properties": {
        "Rôle sur le projet": "à préciser",
        "Disponibilité": "à renseigner",
        "Moyen de contact": "à renseigner"
      }
    },
    {
      "id": "a5e9083b-16ee-4e7f-be48-ded0437bdcce",
      "label": "Liste de contrôle du déménagement",
      "category": "Outil",
      "properties": {
        "Application ou papier": "à préciser",
        "Modèle repris de": "à renseigner"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_c0a4",
      "type": "RECENSE",
      "source": "de93c4c8-f812-4dec-95c1-04f59bea2650",
      "target": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "properties": {
        "prop_1": "Un projet actif parmi d'autres"
      }
    },
    {
      "id": "e_1_1faa",
      "type": "RECENSE",
      "source": "de93c4c8-f812-4dec-95c1-04f59bea2650",
      "target": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "properties": {
        "prop_1": "Un projet actif parmi d'autres"
      }
    },
    {
      "id": "e_2_89e4",
      "type": "SE_DÉCOMPOSE_EN",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "b7e975d6-bb87-4bce-b669-94bca60c94e0",
      "properties": {
        "prop_1": "Une tâche = une action concrète et bornée"
      }
    },
    {
      "id": "e_3_e3f5",
      "type": "SE_DÉCOMPOSE_EN",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "684813a1-e953-4bfa-9dff-429ea65e067c",
      "properties": {
        "prop_1": "Une tâche = une action concrète et bornée"
      }
    },
    {
      "id": "e_4_0d85",
      "type": "SE_DÉCOMPOSE_EN",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "7d043cdb-8b5f-4f13-bbaf-56ddb8098bdf",
      "properties": {
        "prop_1": "Une tâche = une action concrète et bornée"
      }
    },
    {
      "id": "e_5_19fc",
      "type": "ATTEINT",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "74ef0ecf-1a5a-4f42-a67a-da7fd09ea0a5",
      "properties": {
        "prop_1": "Étape intermédiaire qui marque un vrai progrès"
      }
    },
    {
      "id": "e_6_9bad",
      "type": "PRODUIT",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "3c633b7a-06c7-4f3b-a499-52e210258e8e",
      "properties": {
        "prop_1": "Ce que le projet doit livrer concrètement à la fin"
      }
    },
    {
      "id": "e_7_334d",
      "type": "EXPOSÉ_À",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "def2731f-6f10-4021-b16c-39431f044194",
      "properties": {
        "prop_1": "Identifié tôt, un risque se traite plus facilement"
      }
    },
    {
      "id": "e_8_7d5f",
      "type": "IMPLIQUE",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "fd4b2d00-3c01-4822-a682-37112ab5e0bf",
      "properties": {
        "prop_1": "Qui contribue à ce projet"
      }
    },
    {
      "id": "e_9_d466",
      "type": "UTILISE",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "7d7ea4bd-88de-4be5-b808-5673434e5977",
      "properties": {
        "prop_1": "Outil support du projet"
      }
    },
    {
      "id": "e_10_c8e6",
      "type": "SUIVI_EN",
      "source": "181a49ee-7a41-4952-a57f-4d2dc1505631",
      "target": "57488e66-b361-4510-b3a6-5f98d0321cfd",
      "properties": {
        "prop_1": "Point d'avancement régulier"
      }
    },
    {
      "id": "e_11_1d86",
      "type": "MÈNE_À",
      "source": "b7e975d6-bb87-4bce-b669-94bca60c94e0",
      "target": "74ef0ecf-1a5a-4f42-a67a-da7fd09ea0a5",
      "properties": {
        "prop_1": "Cette tâche est un prérequis du jalon"
      }
    },
    {
      "id": "e_12_7227",
      "type": "DÉPEND_DE",
      "source": "684813a1-e953-4bfa-9dff-429ea65e067c",
      "target": "7d043cdb-8b5f-4f13-bbaf-56ddb8098bdf",
      "properties": {
        "prop_1": "Ordre logique entre les tâches"
      }
    },
    {
      "id": "e_13_a730",
      "type": "MÈNE_À",
      "source": "7d043cdb-8b5f-4f13-bbaf-56ddb8098bdf",
      "target": "74ef0ecf-1a5a-4f42-a67a-da7fd09ea0a5",
      "properties": {
        "prop_1": "Cette tâche est un prérequis du jalon"
      }
    },
    {
      "id": "e_14_aa56",
      "type": "ASSIGNÉE_À",
      "source": "7d043cdb-8b5f-4f13-bbaf-56ddb8098bdf",
      "target": "fd4b2d00-3c01-4822-a682-37112ab5e0bf",
      "properties": {
        "prop_1": "Qui exécute concrètement la tâche"
      }
    },
    {
      "id": "e_15_ea6b",
      "type": "SE_DÉCOMPOSE_EN",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "5aeff922-207a-4053-8196-fa23a35d2e2b",
      "properties": {
        "prop_1": "Une tâche = une action concrète et bornée"
      }
    },
    {
      "id": "e_16_b770",
      "type": "SE_DÉCOMPOSE_EN",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "28002f64-cfa9-4077-9fc4-744ff5f43dec",
      "properties": {
        "prop_1": "Une tâche = une action concrète et bornée"
      }
    },
    {
      "id": "e_17_1bfe",
      "type": "SE_DÉCOMPOSE_EN",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "70ae1393-1222-49b1-b70b-7a38d5736923",
      "properties": {
        "prop_1": "Une tâche = une action concrète et bornée"
      }
    },
    {
      "id": "e_18_89b2",
      "type": "ATTEINT",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "a36ee275-6b50-4fa5-a818-cff5eb797e94",
      "properties": {
        "prop_1": "Étape intermédiaire qui marque un vrai progrès"
      }
    },
    {
      "id": "e_19_91cf",
      "type": "PRODUIT",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "7ce2701b-af7c-47b7-a439-2dbd846c95ee",
      "properties": {
        "prop_1": "Ce que le projet doit livrer concrètement à la fin"
      }
    },
    {
      "id": "e_20_5fbf",
      "type": "EXPOSÉ_À",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "ffe21488-d3f1-4f81-a0a7-efa4b208a522",
      "properties": {
        "prop_1": "Identifié tôt, un risque se traite plus facilement"
      }
    },
    {
      "id": "e_21_f2d5",
      "type": "IMPLIQUE",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "13e09636-3ffe-44d1-b016-6324459bff62",
      "properties": {
        "prop_1": "Qui contribue à ce projet"
      }
    },
    {
      "id": "e_22_f938",
      "type": "UTILISE",
      "source": "9f261819-1c43-485b-b3f9-e22994f080bf",
      "target": "a5e9083b-16ee-4e7f-be48-ded0437bdcce",
      "properties": {
        "prop_1": "Outil support du projet"
      }
    },
    {
      "id": "e_23_e07d",
      "type": "MÈNE_À",
      "source": "5aeff922-207a-4053-8196-fa23a35d2e2b",
      "target": "7ce2701b-af7c-47b7-a439-2dbd846c95ee",
      "properties": {
        "prop_1": "Cette tâche est un prérequis du jalon"
      }
    },
    {
      "id": "e_24_3aa1",
      "type": "DÉPEND_DE",
      "source": "28002f64-cfa9-4077-9fc4-744ff5f43dec",
      "target": "a36ee275-6b50-4fa5-a818-cff5eb797e94",
      "properties": {
        "prop_1": "Ordre logique entre les tâches"
      }
    },
    {
      "id": "e_25_f7e5",
      "type": "ASSIGNÉE_À",
      "source": "70ae1393-1222-49b1-b70b-7a38d5736923",
      "target": "13e09636-3ffe-44d1-b016-6324459bff62",
      "properties": {
        "prop_1": "Qui exécute concrètement la tâche"
      }
    }
  ]
},

{
  "id": "garde-robe",
  "title": "Garde-robe : cartographier son dressing pour éviter les achats inutiles",
  "category": "Style de vie",
  "description": "Vos vêtements reliés par usage, saison et associations — pour redécouvrir ce que vous possédez déjà.",
  "longDescription": "La plupart des dressings contiennent plus de vêtements que ce que l'on porte réellement. Une cartographie par pièce, usage et association permet de redécouvrir des combinaisons oubliées, et d'acheter plus juste.",
  "nodes": [
    {
      "id": "91b73cd8-4f4b-43d0-a8db-e627c8ff47a1",
      "label": "Ma garde-robe",
      "category": "GardeRobe",
      "properties": {
        "Où est-elle recensée": "appli, tableur, simplement en tête ?",
        "prop_1": "Utile avant un achat pour éviter les doublons",
        "prop_2": "Revue de saison recommandée avant chaque changement de saison"
      }
    },
    {
      "id": "6c10b9b2-cba7-471d-959b-5139deeead4c",
      "label": "Manteau d'hiver",
      "category": "Vetement",
      "properties": {
        "Marque": "à renseigner",
        "Taille": "à renseigner",
        "Acheté en": "à renseigner"
      }
    },
    {
      "id": "48d48738-97e7-4a22-a5d8-b2d464be191a",
      "label": "Costume",
      "category": "Vetement",
      "properties": {
        "Marque": "à renseigner",
        "Taille": "à renseigner",
        "Acheté en": "à renseigner"
      }
    },
    {
      "id": "e14e4d5d-f467-4a80-8512-8682ca74ae7f",
      "label": "Paire de chaussures en cuir",
      "category": "Vetement",
      "properties": {
        "Marque": "à renseigner",
        "Taille": "à renseigner",
        "Acheté en": "à renseigner"
      }
    },
    {
      "id": "b365f980-6b0b-448c-8875-6df47af5824c",
      "label": "Automne / Hiver",
      "category": "Saison",
      "properties": {
        "Autres pièces de la même saison": "à lister"
      }
    },
    {
      "id": "2bd085c3-42ec-4583-905b-62351db11039",
      "label": "Nettoyage à sec",
      "category": "Entretien",
      "properties": {
        "Fréquence": "à renseigner",
        "Pressing habituel": "à renseigner",
        "Dernier entretien": "à renseigner"
      }
    },
    {
      "id": "f7e4e16d-58c0-46b1-8cd9-efd2daf24ac8",
      "label": "Boutique de vêtements",
      "category": "Fournisseur",
      "properties": {
        "Enseigne": "à renseigner",
        "Facture rangée où ?": "à renseigner"
      }
    },
    {
      "id": "85b39dbc-257b-4bb2-a587-bbd0298aabee",
      "label": "Penderie entrée",
      "category": "Emplacement",
      "properties": {
        "Pièces qui s'y trouvent": "à lister",
        "Housse de protection": "oui / non"
      }
    },
    {
      "id": "105f901b-ad97-45ac-abec-9398bd1e41d5",
      "label": "Occasions formelles",
      "category": "Occasion",
      "properties": {
        "Dernière occasion portée": "à renseigner",
        "Prochaine occasion prévue": "à renseigner"
      }
    },
    {
      "id": "1192b9ba-bbde-4720-b681-a22cfcece751",
      "label": "Couturier de quartier",
      "category": "Artisan",
      "properties": {
        "Adresse": "à renseigner",
        "Dernière retouche": "à renseigner"
      }
    },
    {
      "id": "5f6ee25e-1ffe-4f93-80ec-5ee1ef0ce78a",
      "label": "Cirage et entretien du cuir",
      "category": "Entretien",
      "properties": {
        "Fréquence recommandée": "à renseigner",
        "Dernier entretien": "à renseigner",
        "Produit utilisé": "à renseigner"
      }
    },
    {
      "id": "f6ef5afa-fdc5-4a18-b620-8a777fae6352",
      "label": "Cordonnier de quartier",
      "category": "Artisan",
      "properties": {
        "Adresse": "à renseigner",
        "Dernière réparation": "à renseigner"
      }
    },
    {
      "id": "f9ff8634-0a26-45e8-9f4f-21d540f86491",
      "label": "Printemps / Été",
      "category": "Saison",
      "properties": {
        "Autres pièces de la même saison": "à lister"
      }
    }
  ],
  "relationships": [
    {
      "id": "e_0_db70",
      "type": "CONTIENT",
      "source": "91b73cd8-4f4b-43d0-a8db-e627c8ff47a1",
      "target": "6c10b9b2-cba7-471d-959b-5139deeead4c",
      "properties": {
        "prop_1": "Une fiche par pièce à entretien particulier ou de valeur"
      }
    },
    {
      "id": "e_1_989f",
      "type": "CONTIENT",
      "source": "91b73cd8-4f4b-43d0-a8db-e627c8ff47a1",
      "target": "48d48738-97e7-4a22-a5d8-b2d464be191a",
      "properties": {
        "prop_1": "Une fiche par pièce à entretien particulier ou de valeur"
      }
    },
    {
      "id": "e_2_f29a",
      "type": "CONTIENT",
      "source": "91b73cd8-4f4b-43d0-a8db-e627c8ff47a1",
      "target": "e14e4d5d-f467-4a80-8512-8682ca74ae7f",
      "properties": {
        "prop_1": "Une fiche par pièce à entretien particulier ou de valeur"
      }
    },
    {
      "id": "e_3_01f5",
      "type": "SE_PORTE_EN",
      "source": "6c10b9b2-cba7-471d-959b-5139deeead4c",
      "target": "b365f980-6b0b-448c-8875-6df47af5824c",
      "properties": {
        "prop_1": "Aide à repérer les pièces sous-utilisées hors saison"
      }
    },
    {
      "id": "e_4_fad6",
      "type": "NÉCESSITE",
      "source": "6c10b9b2-cba7-471d-959b-5139deeead4c",
      "target": "2bd085c3-42ec-4583-905b-62351db11039",
      "properties": {
        "prop_1": "Consignes du fabricant, souvent sur l'étiquette"
      }
    },
    {
      "id": "e_5_8cc6",
      "type": "ACHETÉ_CHEZ",
      "source": "6c10b9b2-cba7-471d-959b-5139deeead4c",
      "target": "f7e4e16d-58c0-46b1-8cd9-efd2daf24ac8",
      "properties": {
        "prop_1": "Utile pour un éventuel retour ou une réparation sous garantie"
      }
    },
    {
      "id": "e_6_3b59",
      "type": "RANGÉ_DANS",
      "source": "6c10b9b2-cba7-471d-959b-5139deeead4c",
      "target": "85b39dbc-257b-4bb2-a587-bbd0298aabee",
      "properties": {
        "prop_1": "Emplacement de stockage, notamment hors saison"
      }
    },
    {
      "id": "e_7_cbef",
      "type": "SE_PORTE_POUR",
      "source": "48d48738-97e7-4a22-a5d8-b2d464be191a",
      "target": "105f901b-ad97-45ac-abec-9398bd1e41d5",
      "properties": {
        "prop_1": "Occasions plutôt que saisons pour les pièces formelles"
      }
    },
    {
      "id": "e_8_0c53",
      "type": "NÉCESSITE",
      "source": "48d48738-97e7-4a22-a5d8-b2d464be191a",
      "target": "2bd085c3-42ec-4583-905b-62351db11039",
      "properties": {
        "prop_1": "Consignes du fabricant, souvent sur l'étiquette"
      }
    },
    {
      "id": "e_9_ea80",
      "type": "RETOUCHÉ_PAR",
      "source": "48d48738-97e7-4a22-a5d8-b2d464be191a",
      "target": "1192b9ba-bbde-4720-b681-a22cfcece751",
      "properties": {
        "prop_1": "Coordonnées utiles à conserver pour un futur ajustement"
      }
    },
    {
      "id": "e_10_238c",
      "type": "SE_PORTE_POUR",
      "source": "e14e4d5d-f467-4a80-8512-8682ca74ae7f",
      "target": "105f901b-ad97-45ac-abec-9398bd1e41d5",
      "properties": {
        "prop_1": "Occasions plutôt que saisons pour les pièces formelles"
      }
    },
    {
      "id": "e_11_0bca",
      "type": "NÉCESSITE",
      "source": "e14e4d5d-f467-4a80-8512-8682ca74ae7f",
      "target": "5f6ee25e-1ffe-4f93-80ec-5ee1ef0ce78a",
      "properties": {
        "prop_1": "Entretien qui prolonge la durée de vie du cuir"
      }
    },
    {
      "id": "e_12_f905",
      "type": "RÉPARÉE_PAR",
      "source": "e14e4d5d-f467-4a80-8512-8682ca74ae7f",
      "target": "f6ef5afa-fdc5-4a18-b620-8a777fae6352",
      "properties": {
        "prop_1": "Coordonnées utiles en cas de ressemelage"
      }
    },
    {
      "id": "e_13_5fe4",
      "type": "RANGÉE_DANS",
      "source": "e14e4d5d-f467-4a80-8512-8682ca74ae7f",
      "target": "85b39dbc-257b-4bb2-a587-bbd0298aabee",
      "properties": {
        "prop_1": "Emplacement de stockage, notamment hors saison"
      }
    },
    {
      "id": "e_14_3691",
      "type": "PRÉCÈDE",
      "source": "b365f980-6b0b-448c-8875-6df47af5824c",
      "target": "f9ff8634-0a26-45e8-9f4f-21d540f86491",
      "properties": {
        "prop_1": "Aide à planifier le rangement de saison"
      }
    },
    {
      "id": "e_15_4769",
      "type": "REGROUPE",
      "source": "105f901b-ad97-45ac-abec-9398bd1e41d5",
      "target": "48d48738-97e7-4a22-a5d8-b2d464be191a",
      "properties": {
        "prop_1": "Vue d'ensemble des pièces réservées aux occasions formelles"
      }
    }
  ]
}


//   {
//     "id": "reconversion-professionnelle",
//     "title": "La Reconversion Professionnelle en France",
//     "category": "Travail",
//     "description": "Cartographie des étapes, dispositifs, financements et acteurs de la reconversion professionnelle.",
//     "longDescription": "CPF, CEP, PTP, ARE… La reconversion est un labyrinthe d'acronymes où l'ordre des démarches compte plus que les démarches elles-mêmes. Une carte pour ne pas se tromper de porte d'entrée.",
//   "nodes": [
//     { "id": "reconversion", "label": "Reconversion Professionnelle", "category": "racine", "size": 30, "properties": { "definition": "Changer de métier ou de secteur d'activité", "public": "Salariés, demandeurs d'emploi, indépendants", "duree_moyenne": "6 mois à 2 ans selon le projet" } },

//     { "id": "phase_reflexion", "label": "1. Phase de Réflexion", "category": "etape", "size": 24, "properties": { "objectif": "Clarifier le projet avant tout engagement", "erreur_frequente": "Se former avant d'avoir validé le projet" } },
//     { "id": "phase_validation", "label": "2. Validation du Projet", "category": "etape", "size": 24, "properties": { "objectif": "Confronter le projet à la réalité du marché", "conseil": "Rencontrer des professionnels du métier visé" } },
//     { "id": "phase_formation", "label": "3. Formation & Certification", "category": "etape", "size": 24, "properties": { "objectif": "Acquérir les compétences du nouveau métier", "point_cle": "Choisir une formation certifiante (RNCP)" } },
//     { "id": "phase_transition", "label": "4. Transition & Lancement", "category": "etape", "size": 24, "properties": { "objectif": "Quitter l'ancien poste et démarrer le nouveau", "risque_principal": "La sécurisation financière de la période" } },

//     { "id": "cep", "label": "Conseil en Évolution Professionnelle (CEP)", "category": "dispositif", "size": 20, "properties": { "cout": "Gratuit", "operateurs": "France Travail, APEC, Cap Emploi, opérateurs régionaux", "role_cle": "Obligatoire AVANT une démission-reconversion" } },
//     { "id": "bilan_competences", "label": "Bilan de Compétences", "category": "dispositif", "size": 20, "properties": { "duree": "24 heures maximum, réparties sur plusieurs semaines", "financement": "Mobilisable via le CPF", "livrable": "Document de synthèse confidentiel" } },
//     { "id": "pmsmp", "label": "Immersion Professionnelle (PMSMP)", "category": "dispositif", "size": 17, "properties": { "principe": "Stage d'observation en entreprise, non rémunéré", "duree": "Quelques jours à 1 mois", "interet": "Tester le métier avant de s'engager" } },
//     { "id": "vae", "label": "Validation des Acquis de l'Expérience (VAE)", "category": "dispositif", "size": 19, "properties": { "condition": "1 an d'expérience en lien avec la certification visée", "portail": "France VAE", "avantage": "Obtenir un diplôme sans repasser par la formation complète" } },
//     { "id": "ptp", "label": "Projet de Transition Professionnelle (PTP)", "category": "dispositif", "size": 20, "properties": { "ex_nom": "Ancien CIF", "avantage": "Congé avec maintien de rémunération pendant la formation", "condition": "24 mois d'ancienneté salariée dont 12 dans l'entreprise" } },

//     { "id": "statut_salarie", "label": "Salarié en CDI", "category": "statut", "size": 18, "properties": { "atout": "Revenu stable pendant la préparation du projet", "options_depart": "Démission-reconversion, rupture conventionnelle, PTP" } },
//     { "id": "statut_demandeur", "label": "Demandeur d'Emploi", "category": "statut", "size": 18, "properties": { "atout": "Accès facilité aux financements France Travail", "reste_a_charge_cpf": "Exonéré de la participation forfaitaire CPF" } },
//     { "id": "statut_independant", "label": "Indépendant / Micro-entrepreneur", "category": "statut", "size": 18, "properties": { "cpf": "Alimenté via la contribution à la formation professionnelle (CFP)", "particularite": "Fonds d'assurance formation selon l'activité (FAF)" } },

//     { "id": "cpf", "label": "Compte Personnel de Formation (CPF)", "category": "financement", "size": 22, "properties": { "alimentation": "500 €/an (800 €/an pour les moins qualifiés)", "plafond": "5 000 € (8 000 € pour les moins qualifiés)", "reste_a_charge": "Participation forfaitaire d'environ 100 €, sauf demandeurs d'emploi ou abondement employeur", "acces": "moncompteformation.gouv.fr" } },
//     { "id": "transitions_pro", "label": "Transitions Pro (ATpro)", "category": "acteur", "size": 20, "properties": { "role": "Valide et finance les PTP et les projets de démission-reconversion", "organisation": "Une association paritaire par région" } },
//     { "id": "aif", "label": "Aide Individuelle à la Formation (AIF)", "category": "financement", "size": 17, "properties": { "financeur": "France Travail", "condition": "Formation validée dans le cadre du projet de retour à l'emploi", "cumul": "Peut compléter le CPF" } },
//     { "id": "region", "label": "Financements Régionaux", "category": "financement", "size": 16, "properties": { "cible": "Prioritairement les demandeurs d'emploi et métiers en tension", "exemple": "Programmes régionaux de formation" } },
//     { "id": "abondement_employeur", "label": "Abondement Employeur", "category": "financement", "size": 15, "properties": { "principe": "L'employeur complète les droits CPF du salarié", "effet": "Peut couvrir le reste à charge CPF" } },

//     { "id": "demission_reconversion", "label": "Démission-Reconversion", "category": "securisation", "size": 21, "properties": { "cadre": "Dispositif démissionnaire (loi Avenir professionnel, 2018)", "condition_1": "5 ans d'activité salariée continue", "condition_2": "CEP engagé AVANT la démission", "condition_3": "Projet validé « réel et sérieux » par Transitions Pro", "avantage": "Ouvre droit au chômage (ARE) malgré la démission" } },
//     { "id": "rupture_conventionnelle", "label": "Rupture Conventionnelle", "category": "securisation", "size": 19, "properties": { "principe": "Départ négocié d'un commun accord avec l'employeur", "avantages": "Indemnité de rupture + droit à l'ARE", "limite": "L'employeur peut refuser" } },
//     { "id": "are", "label": "Allocation Chômage (ARE)", "category": "securisation", "size": 20, "properties": { "role": "Revenu de remplacement pendant la reconversion", "versement": "France Travail", "compatibilite": "Maintien partiel possible en cas de création d'entreprise" } },
//     { "id": "temps_partiel", "label": "Reconversion en Parallèle du Poste", "category": "securisation", "size": 16, "properties": { "formes": "Formation le soir/week-end, congé sans solde, temps partiel", "avantage": "Aucune perte de revenu", "limite": "Charge mentale et durée allongée" } },

//     { "id": "france_travail", "label": "France Travail", "category": "acteur", "size": 20, "properties": { "ex_nom": "Ancien Pôle Emploi", "roles": "Indemnisation ARE, financement AIF, accompagnement CEP" } },
//     { "id": "organisme_formation", "label": "Organisme de Formation", "category": "acteur", "size": 18, "properties": { "certification_requise": "Qualiopi (obligatoire pour les financements publics)", "verification": "Vérifier le taux d'insertion et les avis" } },
//     { "id": "rncp", "label": "Certification RNCP", "category": "acteur", "size": 16, "properties": { "definition": "Répertoire National des Certifications Professionnelles", "interet": "Garantit la reconnaissance du titre par l'État et les employeurs" } },

//     { "id": "salariat_nouveau", "label": "Salariat dans le Nouveau Métier", "category": "debouche", "size": 19, "properties": { "levier": "Valoriser les compétences transférables", "outil": "Réseau professionnel et immersions réalisées" } },
//     { "id": "creation_entreprise", "label": "Création d'Entreprise", "category": "debouche", "size": 19, "properties": { "statuts_frequents": "Micro-entreprise, EURL, SASU", "accompagnement": "CCI, CMA, BGE, incubateurs" } },
//     { "id": "acre", "label": "ACRE", "category": "aide", "size": 16, "properties": { "principe": "Exonération partielle de cotisations sociales la 1re année", "public": "Créateurs et repreneurs d'entreprise" } },
//     { "id": "arce", "label": "ARCE", "category": "aide", "size": 16, "properties": { "principe": "Versement de 60 % des droits ARE restants en capital", "condition": "Avoir obtenu l'ACRE", "alternative": "Maintien mensuel partiel de l'ARE" } },
//     { "id": "portage_salarial", "label": "Portage Salarial", "category": "debouche", "size": 16, "properties": { "principe": "Indépendance commerciale avec statut de salarié", "interet": "Tester une activité sans créer de structure" } }
//   ],
//   "relationships": [
//     { "id": "r1", "type": "COMMENCE_PAR", "source": "reconversion", "target": "phase_reflexion" },
//     { "id": "r2", "type": "SE_POURSUIT_PAR", "source": "phase_reflexion", "target": "phase_validation" },
//     { "id": "r3", "type": "DEBOUCHE_SUR", "source": "phase_validation", "target": "phase_formation" },
//     { "id": "r4", "type": "ABOUTIT_A", "source": "phase_formation", "target": "phase_transition" },

//     { "id": "r5", "type": "S_APPUIE_SUR", "source": "phase_reflexion", "target": "cep" },
//     { "id": "r6", "type": "S_APPUIE_SUR", "source": "phase_reflexion", "target": "bilan_competences" },
//     { "id": "r7", "type": "SE_TESTE_AVEC", "source": "phase_validation", "target": "pmsmp" },
//     { "id": "r8", "type": "PEUT_EVITER_LA_FORMATION_VIA", "source": "phase_formation", "target": "vae" },
//     { "id": "r9", "type": "PEUT_SE_FAIRE_VIA", "source": "phase_formation", "target": "ptp" },

//     { "id": "r10", "type": "CONCERNE", "source": "reconversion", "target": "statut_salarie" },
//     { "id": "r11", "type": "CONCERNE", "source": "reconversion", "target": "statut_demandeur" },
//     { "id": "r12", "type": "CONCERNE", "source": "reconversion", "target": "statut_independant" },

//     { "id": "r13", "type": "FINANCE", "source": "cpf", "target": "bilan_competences" },
//     { "id": "r14", "type": "FINANCE", "source": "cpf", "target": "phase_formation" },
//     { "id": "r15", "type": "FINANCE", "source": "cpf", "target": "vae" },
//     { "id": "r16", "type": "FINANCE_ET_VALIDE", "source": "transitions_pro", "target": "ptp" },
//     { "id": "r17", "type": "COMPLETE_LE_CPF_VIA", "source": "france_travail", "target": "aif" },
//     { "id": "r18", "type": "FINANCE", "source": "aif", "target": "phase_formation" },
//     { "id": "r19", "type": "FINANCE", "source": "region", "target": "phase_formation" },
//     { "id": "r20", "type": "PEUT_COUVRIR_LE_RESTE_A_CHARGE", "source": "abondement_employeur", "target": "cpf" },

//     { "id": "r21", "type": "PEUT_QUITTER_SON_POSTE_VIA", "source": "statut_salarie", "target": "demission_reconversion" },
//     { "id": "r22", "type": "PEUT_QUITTER_SON_POSTE_VIA", "source": "statut_salarie", "target": "rupture_conventionnelle" },
//     { "id": "r23", "type": "PEUT_SE_FORMER_SANS_DEMISSIONNER_VIA", "source": "statut_salarie", "target": "temps_partiel" },
//     { "id": "r24", "type": "PEUT_SE_FORMER_SANS_DEMISSIONNER_VIA", "source": "statut_salarie", "target": "ptp" },
//     { "id": "r25", "type": "EXIGE_AU_PREALABLE", "source": "demission_reconversion", "target": "cep" },
//     { "id": "r26", "type": "EST_VALIDEE_PAR", "source": "demission_reconversion", "target": "transitions_pro" },
//     { "id": "r27", "type": "OUVRE_DROIT_A", "source": "demission_reconversion", "target": "are" },
//     { "id": "r28", "type": "OUVRE_DROIT_A", "source": "rupture_conventionnelle", "target": "are" },
//     { "id": "r29", "type": "EST_VERSEE_PAR", "source": "are", "target": "france_travail" },
//     { "id": "r30", "type": "SECURISE", "source": "are", "target": "phase_transition" },

//     { "id": "r31", "type": "MOBILISE_SES_DROITS_VIA", "source": "statut_demandeur", "target": "aif" },
//     { "id": "r32", "type": "EST_ACCOMPAGNE_PAR", "source": "statut_demandeur", "target": "france_travail" },
//     { "id": "r33", "type": "COTISE_AU_CPF_VIA_LA_CFP", "source": "statut_independant", "target": "cpf" },

//     { "id": "r34", "type": "DOIT_ETRE_CERTIFIE", "source": "organisme_formation", "target": "rncp" },
//     { "id": "r35", "type": "EST_DISPENSEE_PAR", "source": "phase_formation", "target": "organisme_formation" },

//     { "id": "r36", "type": "PEUT_MENER_AU", "source": "phase_transition", "target": "salariat_nouveau" },
//     { "id": "r37", "type": "PEUT_MENER_A_LA", "source": "phase_transition", "target": "creation_entreprise" },
//     { "id": "r38", "type": "PEUT_MENER_AU", "source": "phase_transition", "target": "portage_salarial" },
//     { "id": "r39", "type": "BENEFICIE_DE_L", "source": "creation_entreprise", "target": "acre" },
//     { "id": "r40", "type": "PEUT_ACTIVER_L", "source": "creation_entreprise", "target": "arce" },
//     { "id": "r41", "type": "CONVERTIT_UNE_PARTIE_DE_L", "source": "arce", "target": "are" },
//     { "id": "r42", "type": "FACILITE_L_ACCES_AU", "source": "pmsmp", "target": "salariat_nouveau" }
//   ]
// },

];
