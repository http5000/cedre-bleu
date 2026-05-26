"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Locale = "fr" | "en" | "ar";

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------

export const TRANSLATIONS = {
  fr: {
    nav: {
      home: "Accueil",
      carte: "La carte",
      streetfood: "Street Food",
      venir: "Venir au restaurant",
      contact: "Contact",
      reserver: "Réserver une table",
    },

    footer: {
      tagline:
        "Restaurant libanais authentique à Lyon 5. Une cuisine faite maison avec amour et convivialité, par André & Mary Eid.",
      navigation: "Navigation",
      horaires: "Horaires",
      restaurant: "Restaurant",
      streetfood: "Street Food",
      lundi: "Lundi",
      marSam: "Mar — Sam",
      dimanche: "Dimanche",
      ferme: "Fermé",
      nousTraouver: "Nous trouver",
      reserverTable: "Réserver une table",
      droits: "Tous droits réservés",
      realisation: "Réalisation",
    },

    home: {
      tagline: "Libanais · Lebanese · لبناني",
      location: "Lyon 5 · Quai Romain Rolland",
      desc: "Une cuisine libanaise 100% faite maison, avec amour et convivialité.",
      hours: "Mar — Sam · 11h30–14h30 & 19h–22h",
      cta_reserve: "Réserver une table",
      cta_carte: "Découvrir la carte",
      scroll: "Défiler",

      universes_tag: "Deux univers, une passion",
      universes_title: "Choisissez votre expérience",

      resto_tag: "Gastronomique",
      resto_title: "Le Restaurant",
      resto_desc:
        "Mezzés, grillades libanaises et menus généreux dans un cadre chaleureux. Une expérience culinaire complète autour de 10 mezzés, grillades et desserts maison.",
      resto_items: [
        "Formules mezzés",
        "Menus dégustation",
        "Grillades & brochettes",
        "Desserts maison",
      ],
      reserver: "Réserver",
      la_carte: "La carte",

      sf_tag: "Rapide & savoureux",
      sf_title: "Street Food",
      sf_desc:
        "Chawarma, falafel, manakiches et formules rapides. Le meilleur de la rue libanaise, servi sur place ou à emporter avec les mêmes produits frais.",
      sf_items: [
        "Sandwichs chawarma & falafel",
        "Manakiches au thym",
        "Formules casse-croûte",
        "Plats du jour (midi)",
      ],
      voir_sf: "Voir le menu Street Food",

      histoire_tag: "Notre histoire",
      histoire_title: "Bienvenue au Cèdre Bleu",
      histoire_quote:
        "Dans un décor chaleureux, nous vous accueillons sans prétention autour d'une cuisine faite de nos mains avec amour et convivialité.",
      histoire_text:
        "André et Mary Eid vous ouvrent les portes de leur restaurant comme l'on accueille un ami ou les membres de sa famille. Tout est mis en œuvre pour vous faire passer un agréable moment autour des saveurs authentiques du Liban.",
      chef_title: "Chef & fondateur",
      cofondatrice: "Co-fondatrice",

      galerie_tag: "Notre cuisine",
      galerie_title: "Galerie",

      menus_tag: "Nos formules",
      menus_title: "Menus 100% Libanais",

      menu_degustation: {
        name: "Menu Dégustation",
        subtitle: "2 personnes minimum",
        items: [
          "Assortiment de 10 mezzés",
          "Homous, Moutabal, Moussaka, Taboulé",
          "Feuille de vigne, Kebbé boulette...",
          "Dessert : Katayef Achta",
        ],
      },
      menu_cedre: {
        name: "Menu Le Cèdre Bleu",
        subtitle: "Notre signature",
        items: [
          "6 mezzés froids et chauds",
          "2 grillades (viande & poulet)",
          "Riz à la libanaise & légumes",
          "Dessert : Katayef Achta",
        ],
      },
      menu_allerretour: {
        name: "Menu Aller-Retour",
        subtitle: "L'expérience complète",
        items: [
          "Apéritif au choix",
          "6 mezzés froids et chauds",
          "2 grillades (viande & poulet)",
          "Dessert + Café ou infusion",
        ],
      },
      voir_carte: "Voir la carte complète",

      reservation_title: "Réservez votre table",
      reservation_desc:
        "Pour un déjeuner ou un dîner, réservez en ligne ou appelez-nous directement.",
      reserver_ligne: "Réserver en ligne",

      trouver_tag: "Nous trouver",
      trouver_title: "Venir au restaurant",
      adresse_label: "Adresse",
      transports_label: "Transports",
      transports_text:
        "Métro D – Vieux Lyon · Métro A – Cordeliers\nBus 31/40 – arrêt Romain Rolland",
      parking_label: "Parking",
      parking_text:
        "Marché de la création – à partir de 19h\nTarif fixe 3€ (19h–23h45) – prévoir monnaie",
    },

    lacarte: {
      hero_tag: "Restaurant Libanais · Lyon 5",
      hero_title: "Notre Carte",
      hero_desc:
        "Toutes nos préparations sont 100% faites maison, disponibles en version végétarienne, végétalienne, sans gluten et sans lactose à la demande.",

      nav_formules: "Formules",
      nav_menus: "Menus",
      nav_grillades: "Grillades",
      nav_alademande: "À la demande",
      nav_desserts: "Desserts",
      nav_boissons: "Boissons",

      formules_title: "Formules Mezzés",
      formule_2: "2 Mezzés au choix",
      formule_3: "3 Mezzés au choix",

      froids: "Froids",
      chauds: "Chauds",
      complement:
        "En complément : 1 mezzé chaud (+2,50 €/pièce) ou 1 brochette (+9,00 €/pièce)",

      cold_mezze: [
        {
          name: "Homous",
          desc: "Purée de pois chiches, crème de sésame, citron",
        },
        {
          name: "Moutabal",
          desc: "Caviar d'aubergine, crème de sésame, citron",
        },
        {
          name: "Taboulé",
          desc: "Tomates, blé concassé, persil, citron, oignons, huile d'olive",
        },
        {
          name: "Labné",
          desc: "Crème de fromage frais de vache",
        },
        {
          name: "Moussaka",
          desc: "Aubergines à la sauce tomate, pois chiches, poivrons, oignons",
        },
        {
          name: "Feuilles de vigne",
          desc: "Farcies au riz, tomates, oignons, persil, citron, huile d'olive",
        },
      ],

      hot_mezze: [
        {
          name: "Kebbé boulette",
          desc: "Croquette de blé concassé, farcie à la viande de bœuf hachée et frite",
        },
        {
          name: "Falafel ♥",
          desc: "Beignet de légumes secs, pois chiches, fèves, coriandre verte",
        },
        {
          name: "Safiha",
          desc: "Chausson à la viande, tomate, oignons et pignons",
        },
        {
          name: "Manakish zaatar",
          desc: "Mini pizza libanaise au zaatar (mélange au thym)",
        },
        {
          name: "Fatayers",
          desc: "Petits chaussons aux épinards",
        },
        {
          name: "Samboussik viande ou fromage",
          desc: "Chausson garni d'agneau ou de fromage",
        },
        {
          name: "Rikakat",
          desc: "Feuilletés au fromage",
        },
      ],

      menus_title: "Nos Menus",
      menu_degustation: {
        name: "Menu Dégustation",
        sub: "2 personnes minimum",
        items: [
          "Assortiment de 10 mezzés",
          "Homous, Moutabal, Moussaka, Taboulé",
          "Feuille de vigne, Kebbé boulette, Fatayer, Safiha, Manakish, Falafel",
          "Dessert : Katayef Achta",
        ],
      },
      menu_cedre: {
        name: "Menu Le Cèdre Bleu",
        sub: "Notre signature",
        items: [
          "6 mezzés froids et chauds",
          "Houmous, Moutabal, Taboulé + 3 chaussons du moment",
          "2 grillades (porc ou bœuf & poulet)",
          "Riz à la libanaise, légumes de saison",
          "Dessert : Katayef Achta",
        ],
      },
      menu_allerretour: {
        name: "Menu Aller-Retour",
        sub: "L'expérience complète",
        items: [
          "Apéritif au choix",
          "6 mezzés froids et chauds",
          "2 grillades (porc ou bœuf & poulet)",
          "Riz à la libanaise, légumes de saison",
          "Dessert : Katayef Achta",
          "Café ou infusion",
        ],
      },

      grillades_title: "Grillades",
      grillades_note: "Servies avec du riz à la libanaise ou taboulé et houmous",
      grillades: [
        {
          name: "Grillades mixtes",
          desc: "Assortiment de 3 brochettes : Agneau, taouk et kafta",
        },
        {
          name: "Chiche Taouk",
          desc: "Deux brochettes de suprême de volaille marinée, huile d'olive, ail",
        },
        {
          name: "Agneau",
          desc: "Deux brochettes d'agneau grillé, marinées à l'huile d'olive",
        },
        {
          name: "Kafta",
          desc: "Deux brochettes de boulettes de viande hachée d'agneau, tomates, oignons",
        },
      ],

      alademande_title: "À la demande",
      alademande_note:
        "Uniquement à la demande, 24 ou 48h à l'avance — en complément d'un menu, grillade ou formule",
      alademande: [
        {
          name: "Makanek (250g)",
          desc: "Petites saucisses libanaises flambées au citron",
        },
        {
          name: "Sojok (250g)",
          desc: "Tranches de saucisses épicées, flambées au citron",
        },
        {
          name: "Kafta Nayé (250g)",
          desc: "Viande d'agneau crue façon tartare, pilée et agrémentée de persil et d'oignon",
        },
        {
          name: "Bastorma (200g)",
          desc: "Tranche de bœuf fumé & séché aux épices d'Orient faites maison",
        },
        {
          name: "Kebbé Nayé (250g)",
          desc: "Tartare d'agneau au blé concassé, épices",
        },
        {
          name: "Foie de volaille (300g)",
          desc: "Foies de volaille flambés, ail, citron et coriandre",
        },
      ],

      desserts_title: "Desserts",
      desserts: [
        {
          name: "Baklawa ×4",
          desc: "Pâte feuilletée, farcie aux pistaches, noix, noix de cajou et miel",
        },
        {
          name: "Mouhalabieh",
          desc: "Flan libanais, lait, sucre",
        },
        {
          name: "Glace maison",
          desc: "Deux boules bouza achta, parfumée à la gomme d'arabique et à la rose",
        },
        {
          name: "Katayef Achta ×2 ♥",
          desc: "Mini crêpes libanaises moelleuses, garnies de crème de lait, servies avec sirop de sucre",
        },
        {
          name: "Ma'moul",
          desc: "Pâte sablée farcie aux pistaches, noix et dates",
        },
      ],

      boissons_title: "Boissons",
      softs: "Softs",
      chaudes: "Chaudes",
      aperitifs: "Apéritifs",
      bouteilles: "Bouteilles & Digestifs",
      vins_note: "Notre sélection de vins libanais est à retrouver sur place.",
      prix_note: "Prix TTC. Les prix affichés sur place font foi.",

      cta_soiree: "Prêt à passer une belle soirée ?",
      cta_reserve: "Réserver une table",
    },

    streetfood: {
      hero_tag: "Rapide · Savoureux · Libanais",
      hero_title: "Street Food",
      hero_desc:
        "Le meilleur de la cuisine libanaise dans un format rapide. Mêmes produits frais, même amour du fait maison.",

      nav_sandwichs: "Sandwichs",
      nav_formules: "Formules",
      nav_plats: "Plats",
      nav_manakiches: "Manakiches",
      nav_mezze: "Mezzé chauds",

      sandwichs_title: "Sandwichs",
      sandwichs: [
        {
          name: "Chawarma viande",
          desc: "Émincé de bœuf mariné rôti à la broche, persil, menthe, oignons, tomates, sauce tarator (sésame) ou homous",
        },
        {
          name: "Chawarma Poulet",
          desc: "Émincé de poulet mariné rôti à la broche, crème à l'ail, cornichons",
        },
        {
          name: "Falafel",
          desc: "Beignets de légumes secs, d'un mélange de fèves, pois chiches, épices et crème de sésame, persil, menthe, cornichons et sauce tarator (sésame)",
        },
        {
          name: "Sojok",
          desc: "Viande de bœuf épicé, tomates, cornichons",
        },
      ],

      formules_title: "Formules",
      formules: [
        {
          name: "Menu Casse-croûte",
          items: ["1 Sandwich au choix", "+ 1 frite", "+ 1 Soda 33cl ou Eau 50cl"],
        },
        {
          name: "Menu Casse-Croûte",
          items: ["2 Sandwichs au choix", "+ 1 Soda 33cl ou Eau 50cl"],
        },
      ],

      plats_title: "Plats du jour (midi uniquement)",
      plats: [
        {
          name: "Chiche taouk",
          desc: "2 Brochettes de poulet mariné, sauce à l'ail, homous, taboulé ou fatouche",
        },
        {
          name: "Assiette kafta",
          desc: "2 Brochettes de bœuf haché épicé, tomates, homous, taboulé ou fatouche",
        },
        {
          name: "Assiette chawarma bœuf",
          desc: "Émincé de bœuf mariné rôti à la broche, persil, menthe, oignons, tomates, persil, sauce tarator, homous, taboulé ou fatouche",
        },
        {
          name: "Assiette chawarma poulet",
          desc: "Émincé de poulet mariné rôti à la broche, crème à l'ail, cornichons, homous, taboulé ou fatouche",
        },
        {
          name: "Assiette chawarma mixte",
          desc: "Émincé de bœuf et poulet, homous, taboulé ou fatouche",
        },
      ],

      manakiches_title: "Manakiches",
      manakiche: {
        name: "Manakiche au thym",
        desc: "Pizza au thym sauvage, graines de sésame et huile d'olive (à la demande offert : carrée de tomate et menthe)",
      },

      mezze_title: "Mezzé chauds",
      mezze_chauds: [
        {
          name: "Kebbé boulette",
          desc: "Croquette de blé concassé, farcie à la viande de bœuf hachée et frite",
        },
        { name: "Falafel" },
        { name: "Samboussik fromage", desc: "Chausson garni de fromage de vache" },
        { name: "Samboussik viande", desc: "Chausson garni d'agneau" },
      ],

      cta_text: "Vous préférez le restaurant gastronomique ?",
      cta_btn: "Réserver une table au restaurant",
    },

    contact: {
      hero_tag: "Nous rejoindre",
      hero_title: "Contact & Accès",
      hero_subtitle: "10 quai Romain Rolland, 69005 Lyon — Au cœur de Lyon 5",

      coordonnees_title: "Coordonnées",
      adresse_label: "Adresse",
      tel_label: "Téléphone",

      horaires_title: "Horaires",
      horaire_lundi: "Lundi",
      horaire_marSam: "Mardi – Samedi",
      horaire_dimanche: "Dimanche",
      horaire_ferme: "Fermé",

      venir_title: "Venir au restaurant",
      en_voiture: {
        title: "En voiture",
        desc: "Parking marché de la création à partir de 19h. Entrée en face du Pub Danois, après le Palais de Justice. Prévoir 3€ en pièce de monnaie (tarif fixe 19h–23h45).",
      },
      en_transports: {
        title: "En transports",
        desc: "Métro D – arrêt Vieux Lyon · Métro A – arrêt Cordeliers · Bus 31/40 – arrêt Romain Rolland",
      },
      a_pied: {
        title: "À pied",
        desc: "À 20 min de la place Bellecour · À 10 min de l'Hôtel de Ville · À 5 min de la Gare Saint-Paul",
      },

      reservation_title: "Réserver une table",
      reservation_desc:
        "Réservez en ligne ou appelez-nous directement pour votre déjeuner ou dîner.",
      reserver_ligne: "Réserver en ligne",

      avis_title: "Laisser un avis",
      avis_desc:
        "Vous avez aimé votre expérience ? Partagez-la sur Google ou TripAdvisor, cela nous aide beaucoup.",
    },
  },

  // -------------------------------------------------------------------------
  // ENGLISH
  // -------------------------------------------------------------------------
  en: {
    nav: {
      home: "Home",
      carte: "Menu",
      streetfood: "Street Food",
      venir: "Getting here",
      contact: "Contact",
      reserver: "Book a table",
    },

    footer: {
      tagline:
        "Authentic Lebanese restaurant in Lyon 5. Home-cooked food made with love and warmth, by André & Mary Eid.",
      navigation: "Navigation",
      horaires: "Hours",
      restaurant: "Restaurant",
      streetfood: "Street Food",
      lundi: "Monday",
      marSam: "Tue — Sat",
      dimanche: "Sunday",
      ferme: "Closed",
      nousTraouver: "Find us",
      reserverTable: "Book a table",
      droits: "All rights reserved",
      realisation: "Website by",
    },

    home: {
      tagline: "Libanais · Lebanese · لبناني",
      location: "Lyon 5 · Quai Romain Rolland",
      desc: "100% home-cooked Lebanese cuisine, made with love and warmth.",
      hours: "Tue — Sat · 11:30–14:30 & 19:00–22:00",
      cta_reserve: "Book a table",
      cta_carte: "Explore the menu",
      scroll: "Scroll",

      universes_tag: "Two worlds, one passion",
      universes_title: "Choose your experience",

      resto_tag: "Gastronomic",
      resto_title: "The Restaurant",
      resto_desc:
        "Mezze, Lebanese grills and generous set menus in a warm setting. A complete dining experience with 10 mezze, grills and homemade desserts.",
      resto_items: [
        "Mezze platters",
        "Tasting menus",
        "Grills & skewers",
        "Homemade desserts",
      ],
      reserver: "Book",
      la_carte: "View menu",

      sf_tag: "Quick & delicious",
      sf_title: "Street Food",
      sf_desc:
        "Shawarma, falafel, manakish and quick meal deals. The best of Lebanese street food, served in or taken away with the same fresh produce.",
      sf_items: [
        "Shawarma & falafel wraps",
        "Thyme manakish",
        "Snack meal deals",
        "Lunch plates",
      ],
      voir_sf: "View Street Food menu",

      histoire_tag: "Our story",
      histoire_title: "Welcome to Le Cèdre Bleu",
      histoire_quote:
        "In a warm and welcoming setting, we greet you without pretension around food made by our own hands with love and conviviality.",
      histoire_text:
        "André and Mary Eid open the doors of their restaurant the way you welcome a friend or a family member. Everything is done to give you a wonderful moment around the authentic flavours of Lebanon.",
      chef_title: "Head chef & founder",
      cofondatrice: "Co-founder",

      galerie_tag: "Our kitchen",
      galerie_title: "Gallery",

      menus_tag: "Our set menus",
      menus_title: "100% Lebanese Menus",

      menu_degustation: {
        name: "Tasting Menu",
        subtitle: "Minimum 2 people",
        items: [
          "Selection of 10 mezze",
          "Hummus, Mutabbal, Moussaka, Tabbouleh",
          "Stuffed vine leaf, Kibbeh ball...",
          "Dessert: Katayef Ashta",
        ],
      },
      menu_cedre: {
        name: "Le Cèdre Bleu Menu",
        subtitle: "Our signature",
        items: [
          "6 cold and hot mezze",
          "2 grills (meat & chicken)",
          "Lebanese rice & vegetables",
          "Dessert: Katayef Ashta",
        ],
      },
      menu_allerretour: {
        name: "Full Experience Menu",
        subtitle: "The complete experience",
        items: [
          "Aperitif of your choice",
          "6 cold and hot mezze",
          "2 grills (meat & chicken)",
          "Dessert + Coffee or herbal tea",
        ],
      },
      voir_carte: "View full menu",

      reservation_title: "Book your table",
      reservation_desc:
        "For lunch or dinner, book online or call us directly.",
      reserver_ligne: "Book online",

      trouver_tag: "Find us",
      trouver_title: "Getting to the restaurant",
      adresse_label: "Address",
      transports_label: "Public transport",
      transports_text:
        "Metro D – Vieux Lyon · Metro A – Cordeliers\nBus 31/40 – Romain Rolland stop",
      parking_label: "Parking",
      parking_text:
        "Marché de la Création car park – from 7 pm\nFlat rate €3 (19:00–23:45) – bring coins",
    },

    lacarte: {
      hero_tag: "Lebanese Restaurant · Lyon 5",
      hero_title: "Our Menu",
      hero_desc:
        "All our dishes are 100% homemade, available in vegetarian, vegan, gluten-free and lactose-free versions on request.",

      nav_formules: "Platters",
      nav_menus: "Set menus",
      nav_grillades: "Grills",
      nav_alademande: "On request",
      nav_desserts: "Desserts",
      nav_boissons: "Drinks",

      formules_title: "Mezze Platters",
      formule_2: "2 Mezze of your choice",
      formule_3: "3 Mezze of your choice",

      froids: "Cold",
      chauds: "Hot",
      complement:
        "Add-on: 1 hot mezze (+€2.50/piece) or 1 skewer (+€9.00/piece)",

      cold_mezze: [
        {
          name: "Hummus",
          desc: "Chickpea purée, tahini, lemon",
        },
        {
          name: "Mutabbal",
          desc: "Aubergine caviar, tahini, lemon",
        },
        {
          name: "Tabbouleh",
          desc: "Tomatoes, cracked wheat, parsley, lemon, onions, olive oil",
        },
        {
          name: "Labneh",
          desc: "Strained cow's milk yoghurt cheese",
        },
        {
          name: "Moussaka",
          desc: "Aubergines in tomato sauce, chickpeas, peppers, onions",
        },
        {
          name: "Stuffed vine leaves",
          desc: "Filled with rice, tomatoes, onions, parsley, lemon, olive oil",
        },
      ],

      hot_mezze: [
        {
          name: "Kibbeh ball",
          desc: "Cracked wheat croquette stuffed with minced beef and fried",
        },
        {
          name: "Falafel ♥",
          desc: "Fried legume fritter, chickpeas, broad beans, fresh coriander",
        },
        {
          name: "Sfeeha",
          desc: "Pastry filled with meat, tomato, onions and pine nuts",
        },
        {
          name: "Manakish zaatar",
          desc: "Lebanese mini pizza with zaatar (thyme blend)",
        },
        {
          name: "Fatayer",
          desc: "Small spinach pastries",
        },
        {
          name: "Sambousek meat or cheese",
          desc: "Pastry filled with lamb or cheese",
        },
        {
          name: "Rikakat",
          desc: "Cheese filo rolls",
        },
      ],

      menus_title: "Set Menus",
      menu_degustation: {
        name: "Tasting Menu",
        sub: "Minimum 2 people",
        items: [
          "Selection of 10 mezze",
          "Hummus, Mutabbal, Moussaka, Tabbouleh",
          "Vine leaf, Kibbeh ball, Fatayer, Sfeeha, Manakish, Falafel",
          "Dessert: Katayef Ashta",
        ],
      },
      menu_cedre: {
        name: "Le Cèdre Bleu Menu",
        sub: "Our signature",
        items: [
          "6 cold and hot mezze",
          "Hummus, Mutabbal, Tabbouleh + 3 pastries of the day",
          "2 grills (pork or beef & chicken)",
          "Lebanese rice, seasonal vegetables",
          "Dessert: Katayef Ashta",
        ],
      },
      menu_allerretour: {
        name: "Full Experience Menu",
        sub: "The complete experience",
        items: [
          "Aperitif of your choice",
          "6 cold and hot mezze",
          "2 grills (pork or beef & chicken)",
          "Lebanese rice, seasonal vegetables",
          "Dessert: Katayef Ashta",
          "Coffee or herbal tea",
        ],
      },

      grillades_title: "Grills",
      grillades_note: "Served with Lebanese rice or tabbouleh and hummus",
      grillades: [
        {
          name: "Mixed grill",
          desc: "Selection of 3 skewers: Lamb, taouk and kafta",
        },
        {
          name: "Chicken Taouk",
          desc: "Two skewers of marinated chicken supreme, olive oil, garlic",
        },
        {
          name: "Lamb",
          desc: "Two skewers of grilled lamb marinated in olive oil",
        },
        {
          name: "Kafta",
          desc: "Two skewers of minced lamb meatballs, tomatoes, onions",
        },
      ],

      alademande_title: "On request",
      alademande_note:
        "On request only, 24 or 48 h in advance — as a supplement to a menu, grill or platter",
      alademande: [
        {
          name: "Makanek (250g)",
          desc: "Small Lebanese sausages flambéed with lemon",
        },
        {
          name: "Sojok (250g)",
          desc: "Sliced spicy sausage, flambéed with lemon",
        },
        {
          name: "Kafta Nayé (250g)",
          desc: "Raw lamb tartare-style, pounded with parsley and onion",
        },
        {
          name: "Bastorma (200g)",
          desc: "Smoked & dried beef seasoned with homemade oriental spices",
        },
        {
          name: "Kibbeh Nayé (250g)",
          desc: "Raw lamb tartare with cracked wheat and spices",
        },
        {
          name: "Chicken liver (300g)",
          desc: "Sautéed chicken livers, garlic, lemon and coriander",
        },
      ],

      desserts_title: "Desserts",
      desserts: [
        {
          name: "Baklawa ×4",
          desc: "Filo pastry filled with pistachios, walnuts, cashews and honey",
        },
        {
          name: "Muhallabia",
          desc: "Lebanese milk pudding with sugar",
        },
        {
          name: "Homemade ice cream",
          desc: "Two scoops of bouza ashta ice cream, flavoured with Arabic gum and rose water",
        },
        {
          name: "Katayef Ashta ×2 ♥",
          desc: "Soft Lebanese mini pancakes filled with cream, served with sugar syrup",
        },
        {
          name: "Ma'moul",
          desc: "Shortcrust pastry filled with pistachios, walnuts and dates",
        },
      ],

      boissons_title: "Drinks",
      softs: "Soft drinks",
      chaudes: "Hot drinks",
      aperitifs: "Aperitifs",
      bouteilles: "Bottles & Digestifs",
      vins_note: "Our selection of Lebanese wines is available in-house.",
      prix_note: "Prices include VAT. In-house prices prevail.",

      cta_soiree: "Ready for a great evening?",
      cta_reserve: "Book a table",
    },

    streetfood: {
      hero_tag: "Quick · Delicious · Lebanese",
      hero_title: "Street Food",
      hero_desc:
        "The best of Lebanese cuisine in a quick-serve format. Same fresh produce, same love of home cooking.",

      nav_sandwichs: "Sandwiches",
      nav_formules: "Meal deals",
      nav_plats: "Plates",
      nav_manakiches: "Manakish",
      nav_mezze: "Hot mezze",

      sandwichs_title: "Sandwiches",
      sandwichs: [
        {
          name: "Beef Shawarma",
          desc: "Marinated rotisserie beef, parsley, mint, onions, tomatoes, tahini sauce or hummus",
        },
        {
          name: "Chicken Shawarma",
          desc: "Marinated rotisserie chicken, garlic cream, pickles",
        },
        {
          name: "Falafel",
          desc: "Fried legume fritters, broad beans, chickpeas, spices and tahini, parsley, mint, pickles and tahini sauce",
        },
        {
          name: "Sojok",
          desc: "Spiced beef, tomatoes, pickles",
        },
      ],

      formules_title: "Meal Deals",
      formules: [
        {
          name: "Snack Deal",
          items: ["1 Sandwich of your choice", "+ 1 fries", "+ 1 soft drink 33cl or water 50cl"],
        },
        {
          name: "Double Snack Deal",
          items: ["2 Sandwiches of your choice", "+ 1 soft drink 33cl or water 50cl"],
        },
      ],

      plats_title: "Lunch Plates (midday only)",
      plats: [
        {
          name: "Chicken Taouk",
          desc: "2 Marinated chicken skewers, garlic sauce, hummus, tabbouleh or fattoush",
        },
        {
          name: "Kafta plate",
          desc: "2 Spiced minced beef skewers, tomatoes, hummus, tabbouleh or fattoush",
        },
        {
          name: "Beef shawarma plate",
          desc: "Rotisserie marinated beef, parsley, mint, onions, tomatoes, tahini sauce, hummus, tabbouleh or fattoush",
        },
        {
          name: "Chicken shawarma plate",
          desc: "Rotisserie marinated chicken, garlic cream, pickles, hummus, tabbouleh or fattoush",
        },
        {
          name: "Mixed shawarma plate",
          desc: "Beef and chicken shawarma, hummus, tabbouleh or fattoush",
        },
      ],

      manakiches_title: "Manakish",
      manakiche: {
        name: "Thyme Manakish",
        desc: "Wild thyme pizza, sesame seeds and olive oil (on request free of charge: tomato and mint topping)",
      },

      mezze_title: "Hot Mezze",
      mezze_chauds: [
        {
          name: "Kibbeh ball",
          desc: "Cracked wheat croquette stuffed with minced beef and fried",
        },
        { name: "Falafel" },
        { name: "Sambousek cheese", desc: "Pastry filled with cow's milk cheese" },
        { name: "Sambousek meat", desc: "Pastry filled with lamb" },
      ],

      cta_text: "Prefer the gastronomic restaurant?",
      cta_btn: "Book a table at the restaurant",
    },

    contact: {
      hero_tag: "Getting here",
      hero_title: "Contact & Directions",
      hero_subtitle: "10 quai Romain Rolland, 69005 Lyon — In the heart of Lyon 5",

      coordonnees_title: "Contact details",
      adresse_label: "Address",
      tel_label: "Phone",

      horaires_title: "Opening hours",
      horaire_lundi: "Monday",
      horaire_marSam: "Tuesday – Saturday",
      horaire_dimanche: "Sunday",
      horaire_ferme: "Closed",

      venir_title: "Getting to the restaurant",
      en_voiture: {
        title: "By car",
        desc: "Marché de la Création car park from 7 pm. Entrance opposite the Pub Danois, past the Palais de Justice. Bring €3 in coins (flat rate 19:00–23:45).",
      },
      en_transports: {
        title: "By public transport",
        desc: "Metro D – Vieux Lyon stop · Metro A – Cordeliers stop · Bus 31/40 – Romain Rolland stop",
      },
      a_pied: {
        title: "On foot",
        desc: "20 min from Place Bellecour · 10 min from Hôtel de Ville · 5 min from Gare Saint-Paul",
      },

      reservation_title: "Book a table",
      reservation_desc:
        "Book online or call us directly for lunch or dinner.",
      reserver_ligne: "Book online",

      avis_title: "Leave a review",
      avis_desc:
        "Did you enjoy your experience? Share it on Google or TripAdvisor — it really helps us.",
    },
  },

  // -------------------------------------------------------------------------
  // ARABIC (Lebanese dialect)
  // -------------------------------------------------------------------------
  ar: {
    nav: {
      home: "الرئيسية",
      carte: "القائمة",
      streetfood: "ستريت فود",
      venir: "كيف تصلنا",
      contact: "اتصل بنا",
      reserver: "احجز طاولة",
    },

    footer: {
      tagline:
        "مطعم لبناني أصيل في ليون 5. مطبخ بيتي بكل محبة وكرم الضيافة، من أندريه وماري عيد.",
      navigation: "التنقل",
      horaires: "أوقات العمل",
      restaurant: "المطعم",
      streetfood: "ستريت فود",
      lundi: "الاثنين",
      marSam: "الثلاثاء — السبت",
      dimanche: "الأحد",
      ferme: "مغلق",
      nousTraouver: "أين نحن",
      reserverTable: "احجز طاولة",
      droits: "جميع الحقوق محفوظة",
      realisation: "تصميم",
    },

    home: {
      tagline: "Libanais · Lebanese · لبناني",
      location: "ليون 5 · كاي رومان رولان",
      desc: "مطبخ لبناني 100٪ بيتي، مصنوع بمحبة وكرم الضيافة.",
      hours: "الثلاثاء — السبت · 11:30–14:30 و19:00–22:00",
      cta_reserve: "احجز طاولة",
      cta_carte: "اكتشف القائمة",
      scroll: "تمرير",

      universes_tag: "عالمان، شغف واحد",
      universes_title: "اختر تجربتك",

      resto_tag: "غاسترونومي",
      resto_title: "المطعم",
      resto_desc:
        "مزة وكباب لبناني وقوائم سخية في أجواء دافئة. تجربة طعام متكاملة مع 10 أنواع من المزة والكباب والحلويات البيتية.",
      resto_items: [
        "طبق مزة",
        "قوائم التذوق",
        "كباب ومشاوي",
        "حلويات بيتية",
      ],
      reserver: "احجز",
      la_carte: "القائمة",

      sf_tag: "سريع ولذيذ",
      sf_title: "ستريت فود",
      sf_desc:
        "شاورما وفلافل ومناقيش وعروض سريعة. أفضل ما في الشارع اللبناني، يُقدَّم في المكان أو يُسلَّم للخارج بنفس المنتجات الطازجة.",
      sf_items: [
        "ساندويش شاورما وفلافل",
        "مناقيش زعتر",
        "عروض وجبات سريعة",
        "أطباق الغداء",
      ],
      voir_sf: "اعرض قائمة ستريت فود",

      histoire_tag: "قصتنا",
      histoire_title: "أهلاً وسهلاً في لو سيدر بلو",
      histoire_quote:
        "في ديكور دافئ، نرحب بكم بكل بساطة حول مطبخ صنعناه بأيدينا بمحبة وكرم الضيافة.",
      histoire_text:
        "أندريه وماري عيد يفتحان لكم أبواب مطعمهما كما يُستقبل صديق أو فرد من العائلة. كل شيء مُهيَّأ لتمضوا وقتاً جميلاً حول نكهات لبنان الأصيلة.",
      chef_title: "الشيف والمؤسس",
      cofondatrice: "المؤسِسة المشاركة",

      galerie_tag: "مطبخنا",
      galerie_title: "معرض الصور",

      menus_tag: "قوائمنا",
      menus_title: "قوائم 100٪ لبنانية",

      menu_degustation: {
        name: "قائمة التذوق",
        subtitle: "شخصان كحدٍّ أدنى",
        items: [
          "تشكيلة من 10 أنواع مزة",
          "حمص، متبل، مسقعة، تبولة",
          "ورق عنب، كبة مقلية...",
          "حلى: قطايف عشتا",
        ],
      },
      menu_cedre: {
        name: "قائمة لو سيدر بلو",
        subtitle: "توقيعنا المميز",
        items: [
          "6 أنواع مزة باردة وساخنة",
          "2 مشاوي (لحمة ودجاج)",
          "رز لبناني وخضار",
          "حلى: قطايف عشتا",
        ],
      },
      menu_allerretour: {
        name: "قائمة التجربة الكاملة",
        subtitle: "التجربة بالكامل",
        items: [
          "مشروب مفتاحية على اختياركم",
          "6 أنواع مزة باردة وساخنة",
          "2 مشاوي (لحمة ودجاج)",
          "حلى + قهوة أو شاي أعشاب",
        ],
      },
      voir_carte: "اعرض القائمة الكاملة",

      reservation_title: "احجز طاولتك",
      reservation_desc:
        "للغداء أو العشاء، احجز أونلاين أو اتصل بنا مباشرة.",
      reserver_ligne: "احجز أونلاين",

      trouver_tag: "أين نحن",
      trouver_title: "الوصول إلى المطعم",
      adresse_label: "العنوان",
      transports_label: "المواصلات العامة",
      transports_text:
        "مترو D – محطة Vieux Lyon · مترو A – محطة Cordeliers\nحافلة 31/40 – محطة Romain Rolland",
      parking_label: "موقف السيارات",
      parking_text:
        "موقف Marché de la Création – ابتداءً من الساعة 7 مساءً\nسعر ثابت 3€ (19:00–23:45) – أحضر عملات معدنية",
    },

    lacarte: {
      hero_tag: "مطعم لبناني · ليون 5",
      hero_title: "قائمتنا",
      hero_desc:
        "جميع أطباقنا مصنوعة بيتياً 100٪، ومتاحة نباتية وخالية من الغلوتين واللاكتوز عند الطلب.",

      nav_formules: "أطباق المزة",
      nav_menus: "القوائم",
      nav_grillades: "المشاوي",
      nav_alademande: "عند الطلب",
      nav_desserts: "الحلويات",
      nav_boissons: "المشروبات",

      formules_title: "أطباق المزة",
      formule_2: "2 مزة على اختياركم",
      formule_3: "3 مزة على اختياركم",

      froids: "باردة",
      chauds: "ساخنة",
      complement:
        "إضافة: مزة ساخنة واحدة (+2,50€/قطعة) أو سيخ كباب (+9,00€/قطعة)",

      cold_mezze: [
        {
          name: "حمص",
          desc: "كريمة حمص، طحينة، ليمون",
        },
        {
          name: "متبل",
          desc: "بابا غنوج، طحينة، ليمون",
        },
        {
          name: "تبولة",
          desc: "طماطم، برغل، بقدونس، ليمون، بصل، زيت زيتون",
        },
        {
          name: "لبنة",
          desc: "جبنة لبنة كريمية من حليب البقر",
        },
        {
          name: "مسقعة",
          desc: "باذنجان بصلصة الطماطم، حمص، فليفلة، بصل",
        },
        {
          name: "ورق عنب",
          desc: "محشوة بالرز والطماطم والبصل والبقدونس والليمون وزيت الزيتون",
        },
      ],

      hot_mezze: [
        {
          name: "كبة مقلية",
          desc: "كبة برغل محشوة باللحم المفروم ومقلية",
        },
        {
          name: "فلافل ♥",
          desc: "فلافل من الحمص والفول والكزبرة الخضراء",
        },
        {
          name: "صفيحة",
          desc: "عجينة محشوة باللحم والطماطم والبصل والصنوبر",
        },
        {
          name: "مناقيش زعتر",
          desc: "بيتزا لبنانية صغيرة بالزعتر",
        },
        {
          name: "فطاير",
          desc: "فطائر صغيرة بالسبانخ",
        },
        {
          name: "سمبوسك لحم أو جبنة",
          desc: "معجنة محشوة بالغنم أو الجبنة",
        },
        {
          name: "رقاقات",
          desc: "رقاقات جبنة بالعجينة الورقية",
        },
      ],

      menus_title: "القوائم",
      menu_degustation: {
        name: "قائمة التذوق",
        sub: "شخصان كحدٍّ أدنى",
        items: [
          "تشكيلة من 10 أنواع مزة",
          "حمص، متبل، مسقعة، تبولة",
          "ورق عنب، كبة، فطاير، صفيحة، مناقيش، فلافل",
          "حلى: قطايف عشتا",
        ],
      },
      menu_cedre: {
        name: "قائمة لو سيدر بلو",
        sub: "توقيعنا المميز",
        items: [
          "6 أنواع مزة باردة وساخنة",
          "حمص، متبل، تبولة + 3 فطائر اليوم",
          "2 مشاوي (لحمة ودجاج)",
          "رز لبناني وخضار موسمية",
          "حلى: قطايف عشتا",
        ],
      },
      menu_allerretour: {
        name: "قائمة التجربة الكاملة",
        sub: "التجربة بالكامل",
        items: [
          "مشروب مفتاحية على اختياركم",
          "6 أنواع مزة باردة وساخنة",
          "2 مشاوي (لحمة ودجاج)",
          "رز لبناني وخضار موسمية",
          "حلى: قطايف عشتا",
          "قهوة أو شاي أعشاب",
        ],
      },

      grillades_title: "المشاوي",
      grillades_note: "تُقدَّم مع رز لبناني أو تبولة وحمص",
      grillades: [
        {
          name: "مشاوي مشكلة",
          desc: "تشكيلة من 3 أسياخ: غنم وتاووق وكفتة",
        },
        {
          name: "شيش طاووق",
          desc: "سيخان من صدر دجاج متبل، زيت زيتون، ثوم",
        },
        {
          name: "كباب غنم",
          desc: "سيخان من الغنم المشوي المتبل بزيت الزيتون",
        },
        {
          name: "كفتة",
          desc: "سيخان من الكفتة المفرومة من الغنم مع الطماطم والبصل",
        },
      ],

      alademande_title: "عند الطلب",
      alademande_note:
        "عند الطلب فقط، قبل 24 أو 48 ساعة — كإضافة لقائمة أو مشوى أو طبق مزة",
      alademande: [
        {
          name: "مقانق (250غ)",
          desc: "مقانق لبنانية صغيرة مُحرَّقة بالليمون",
        },
        {
          name: "سجق (250غ)",
          desc: "شرائح سجق حار مُحرَّق بالليمون",
        },
        {
          name: "كفتة نيء (250غ)",
          desc: "كفتة غنم نيئة على طريقة التارتار، مع البقدونس والبصل",
        },
        {
          name: "بسطرمة (200غ)",
          desc: "شرائح لحم بقري مدخن ومجفف بالتوابل الشرقية البيتية",
        },
        {
          name: "كبة نيء (250غ)",
          desc: "كبة غنم نيئة مع البرغل والتوابل",
        },
        {
          name: "كبد دجاج (300غ)",
          desc: "كبد دجاج مقلي بالثوم والليمون والكزبرة",
        },
      ],

      desserts_title: "الحلويات",
      desserts: [
        {
          name: "بقلاوة ×4",
          desc: "عجينة ورقية محشوة بالفستق والجوز والكاجو والعسل",
        },
        {
          name: "مهلبية",
          desc: "حلى لبناني بالحليب والسكر",
        },
        {
          name: "آيس كريم بيتي",
          desc: "كرتان من بوظة عشتا بالمصطكى وماء الورد",
        },
        {
          name: "قطايف عشتا ×2 ♥",
          desc: "قطايف لبنانية طرية محشوة بالقشطة مع قطر السكر",
        },
        {
          name: "معمول",
          desc: "عجينة سميد محشوة بالفستق والجوز والتمر",
        },
      ],

      boissons_title: "المشروبات",
      softs: "مشروبات غازية",
      chaudes: "مشروبات ساخنة",
      aperitifs: "مشروبات مفتاحية",
      bouteilles: "زجاجات ومشروبات هضمية",
      vins_note: "تشكيلة النبيذ اللبناني متاحة لدينا في المطعم.",
      prix_note: "الأسعار شاملة الضريبة. الأسعار المعلقة في المطعم هي المرجع.",

      cta_soiree: "مستعد لأمسية جميلة؟",
      cta_reserve: "احجز طاولة",
    },

    streetfood: {
      hero_tag: "سريع · لذيذ · لبناني",
      hero_title: "ستريت فود",
      hero_desc:
        "أفضل ما في المطبخ اللبناني بشكل سريع. نفس المنتجات الطازجة، نفس الحب في الطبخ البيتي.",

      nav_sandwichs: "ساندويشات",
      nav_formules: "عروض الوجبات",
      nav_plats: "أطباق",
      nav_manakiches: "مناقيش",
      nav_mezze: "مزة ساخنة",

      sandwichs_title: "ساندويشات",
      sandwichs: [
        {
          name: "شاورما لحمة",
          desc: "شرائح بقري متبل مشوي على السيخ، بقدونس، نعنع، بصل، طماطم، صلصة طحينة أو حمص",
        },
        {
          name: "شاورما دجاج",
          desc: "شرائح دجاج متبل مشوي على السيخ، كريمة ثوم، مخلل",
        },
        {
          name: "فلافل",
          desc: "فلافل من الفول والحمص والتوابل والطحينة مع البقدونس والنعنع والمخلل وصلصة الطحينة",
        },
        {
          name: "سجق",
          desc: "لحم بقري حار، طماطم، مخلل",
        },
      ],

      formules_title: "عروض الوجبات",
      formules: [
        {
          name: "وجبة سريعة",
          items: ["ساندويش 1 على اختياركم", "+ بطاطس مقلية", "+ مشروب غازي 33سل أو ماء 50سل"],
        },
        {
          name: "وجبة سريعة مضاعفة",
          items: ["2 ساندويش على اختياركم", "+ مشروب غازي 33سل أو ماء 50سل"],
        },
      ],

      plats_title: "أطباق الغداء (وقت الغداء فقط)",
      plats: [
        {
          name: "شيش طاووق",
          desc: "2 سيخ دجاج متبل، صلصة ثوم، حمص، تبولة أو فتوش",
        },
        {
          name: "طبق كفتة",
          desc: "2 سيخ كفتة بقري حار، طماطم، حمص، تبولة أو فتوش",
        },
        {
          name: "طبق شاورما بقري",
          desc: "شرائح بقري متبل مشوي، بقدونس، نعنع، بصل، طماطم، طحينة، حمص، تبولة أو فتوش",
        },
        {
          name: "طبق شاورما دجاج",
          desc: "شرائح دجاج متبل مشوي، كريمة ثوم، مخلل، حمص، تبولة أو فتوش",
        },
        {
          name: "طبق شاورما مشكل",
          desc: "شرائح بقري ودجاج، حمص، تبولة أو فتوش",
        },
      ],

      manakiches_title: "مناقيش",
      manakiche: {
        name: "مناقيش زعتر",
        desc: "بيتزا بالزعتر البري وبزر السمسم وزيت الزيتون (عند الطلب مجاناً: طماطم ونعنع)",
      },

      mezze_title: "مزة ساخنة",
      mezze_chauds: [
        {
          name: "كبة مقلية",
          desc: "كبة برغل محشوة باللحم المفروم ومقلية",
        },
        { name: "فلافل" },
        { name: "سمبوسك جبنة", desc: "معجنة محشوة بجبنة البقر" },
        { name: "سمبوسك لحمة", desc: "معجنة محشوة بالغنم" },
      ],

      cta_text: "تفضّل المطعم الغاسترونومي؟",
      cta_btn: "احجز طاولة في المطعم",
    },

    contact: {
      hero_tag: "كيف تصلنا",
      hero_title: "اتصل بنا والوصول",
      hero_subtitle: "10 كاي رومان رولان، 69005 ليون — في قلب ليون 5",

      coordonnees_title: "معلومات الاتصال",
      adresse_label: "العنوان",
      tel_label: "الهاتف",

      horaires_title: "أوقات العمل",
      horaire_lundi: "الاثنين",
      horaire_marSam: "الثلاثاء – السبت",
      horaire_dimanche: "الأحد",
      horaire_ferme: "مغلق",

      venir_title: "الوصول إلى المطعم",
      en_voiture: {
        title: "بالسيارة",
        desc: "موقف Marché de la Création ابتداءً من الساعة 7 مساءً. المدخل في مواجهة Pub Danois، بعد Palais de Justice. أحضر 3€ عملات معدنية (سعر ثابت 19:00–23:45).",
      },
      en_transports: {
        title: "بالمواصلات العامة",
        desc: "مترو D – محطة Vieux Lyon · مترو A – محطة Cordeliers · حافلة 31/40 – محطة Romain Rolland",
      },
      a_pied: {
        title: "سيراً على الأقدام",
        desc: "20 دقيقة من Place Bellecour · 10 دقائق من Hôtel de Ville · 5 دقائق من Gare Saint-Paul",
      },

      reservation_title: "احجز طاولة",
      reservation_desc:
        "احجز أونلاين أو اتصل بنا مباشرة للغداء أو العشاء.",
      reserver_ligne: "احجز أونلاين",

      avis_title: "اترك تقييماً",
      avis_desc:
        "هل أعجبتك تجربتك؟ شاركها على Google أو TripAdvisor — هذا يساعدنا كثيراً.",
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Context & types
// ---------------------------------------------------------------------------

type Translations = typeof TRANSLATIONS;
type LocaleTranslations = Translations[Locale];

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: LocaleTranslations;
}

export const I18nContext = createContext<I18nContextValue>({
  locale: "fr",
  setLocale: () => {},
  t: TRANSLATIONS.fr,
});

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "fr";
const RTL_LOCALES: Locale[] = ["ar"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Detect locale from URL path — URL is the source of truth
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) setLocaleState("en");
    else if (path.startsWith("/ar")) setLocaleState("ar");
    else setLocaleState("fr");
  }, []);

  // Sync document attributes whenever locale changes
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t: TRANSLATIONS[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}
