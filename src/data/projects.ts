// src/data/projects.ts
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Undrive",
    description: "Application mobile permettant de centraliser et exploiter des données de trajets afin d’analyser les déplacements et encourager l’usage des transports en commun. Travail en équipe avec une organisation de type “projet entreprise” (sprints, suivi des tâches, revue de code).",
    details: "UnDrive est un projet de développement visant à créer une plateforme capable de collecter, stocker et exploiter des données de trajets (déplacements urbains) pour produire des analyses et visualisations utiles. L’objectif est de proposer un outil qui aide à mieux comprendre les habitudes de mobilité et à favoriser des choix plus durables, notamment l’usage des transports en commun.",
    tags: ["Python", "Django", "PostgreSQL", "PostGIS", "Dart", "Flutter", "API REST", "Git"],
    image: "https://plus.unsplash.com/premium_vector-1731053808402-d7edd7bf759d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: [
      { icon: FaGithub, href: "https://github.com", label: "Code" },
      { icon: FaExternalLinkAlt, href: "https://google.com", label: "Demo" }
    ]
  },
  {
    id: 2,
    title: "Pizzeia",
    description: "Projet de groupe consistant à développer une simulation complète de gestion de pizzeria : commandes, stock, finances, recettes et stratégies de décision. Architecture orientée objet avec patterns (Strategy, Observer), séparation claire Modèle/Vue/Contrôleur et intégration d’un client API.",
    details: "Le projet Pizzeria Simulation System a pour objectif de concevoir une application en Java simulant le fonctionnement d’une pizzeria. L’application doit gérer les composants clés d’un système “réaliste” : stock d’ingrédients, recettes, finances, prise de décision, et une interface d’utilisation permettant de piloter et visualiser la simulation.",
    tags: ["Java", "OOP", "Design Patterns", "Git"],
    image: "https://plus.unsplash.com/premium_vector-1730466396924-0f2282b62c95?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: [
      { icon: FaGithub, href: "https://github.com", label: "Code" },
    ]
  },
  {
    id: 3,
    title: "Portail d'inscription",
    description: "Projet de groupe visant à développer un portail web d’inscription avec une interface moderne, des formulaires structurés et une navigation fluide. Travail centré sur le front-end (Quasar, composants, pages, gestion d’état), avec une architecture prête à être connectée à un back-end.",
    details: "Le projet Portail d’inscription consiste à développer une application web permettant de gérer un parcours d’inscription en ligne : collecte d’informations, progression par étapes et affichage clair des données saisies. L’objectif est de fournir une interface simple, cohérente et responsive, pensée pour un usage réel (étudiants/candidats) et facilement intégrable avec une API back-end.",
    tags: ["Vue.js", "Quasar", "Supabase", "Git"],
    image: "https://plus.unsplash.com/premium_vector-1720939039468-8e71e7e80fd6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: [
      { icon: FaGithub, href: "https://github.com", label: "Code" },
      { icon: FaExternalLinkAlt, href: "https://google.com", label: "Demo" }
    ]
  }
];