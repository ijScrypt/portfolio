// src/data/projects.ts
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Undrive",
    description: "UnDrive est un projet de développement visant à créer une plateforme capable de collecter, stocker et exploiter des données de trajets (déplacements urbains) pour produire des analyses et visualisations utiles. L’objectif est de proposer un outil qui aide à mieux comprendre les habitudes de mobilité et à favoriser des choix plus durables, notamment l’usage des transports en commun.",
    details: `Application mobile permettant de centraliser et exploiter des données de trajets afin d’analyser les déplacements et encourager l’usage des transports en commun. Travail en équipe avec une organisation de type “projet entreprise” (sprints, suivi des tâches, revue de code).

Sur le plan technique, l’application Flutter consomme une API REST développée avec Django pour gérer les données de trajets et exposer les fonctionnalités côté serveur. L’ensemble est conteneurisé avec Docker pour faciliter le développement, les tests et le déploiement, puis déployé sur Google Cloud Platform (GCP) afin d’assurer l’accessibilité et la scalabilité du service.

Ma contribution (Back-end / API Django) : je travaille sur le développement de l’API REST : définition des modèles et de la structure des données, implémentation des endpoints (création/lecture/mise à jour/suppression), validation des entrées et gestion des règles métier côté serveur, ainsi que l’intégration avec l’application mobile via des réponses JSON cohérentes.`,
    tags: ["Agile", "Python", "Django", "Docker", "PostgreSQL", "PostGIS", "Dart", "Flutter", "API REST", "GCP","Git"],
    image: "https://plus.unsplash.com/premium_vector-1731053808402-d7edd7bf759d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: [
      { icon: FaGithub, href: "https://github.com", label: "Code" },
      { icon: FaExternalLinkAlt, href: "https://google.com", label: "Demo" }
    ]
  },
  {
    id: 2,
    title: "Pizzeia",
    description: "Projet de groupe ayant pour objectif de concevoir une application en Java simulant le fonctionnement d’une pizzeria. L’application doit gérer les composants clés d’un système “réaliste” : stock d’ingrédients, recettes, finances, prise de décision, et une interface d’utilisation permettant de piloter et visualiser la simulation.",
    details: "Le projet Pizzeia est un projet de groupe consistant à développer une simulation complète de gestion de pizzeria : commandes, stock, finances, recettes et stratégies de décision. Application en Java avec Architecture orientée objet avec patterns (Strategy, Observer), séparation claire Modèle/Vue/Contrôleur et intégration d’un client API.",
    tags: ["Java", "OOP", "Design Patterns", "Git"],
    image: "https://plus.unsplash.com/premium_vector-1730466396924-0f2282b62c95?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: [
      { icon: FaGithub, href: "https://github.com", label: "Code" },
    ]
  },
  {
    id: 3,
    title: "Portail d'inscription",
    description: `Application web d’inscription étudiante réalisée en groupe avec Vue.js et Quasar. Le projet prend la forme d’une Single Page Application avec un parcours d’inscription basé sur des formulaires, une navigation via Vue Router et une gestion d’état (Pinia) pour partager et organiser les données d’inscription côté frontend. Une architecture backend basée sur Supabase (PostgreSQL, Auth, API REST) fait partie de la solution.`,
    details: `Nous avons développé une application web d’inscription étudiante sous forme de SPA avec Vue.js + Quasar. L’objectif était de proposer un parcours d’inscription structuré autour de formulaires, avec une interface organisée en composants réutilisables, et une gestion des données via Pinia afin de conserver un état cohérent entre les différentes étapes. La navigation entre les sections de l’application est assurée par Vue Router.

Sur le plan qualité, nous avons réalisé des tests end-to-end avec Cypress pour valider des parcours côté interface. Côté backend, l’architecture reposait sur Supabase (PostgreSQL, Auth, API REST), mise en place par mes collègues pour l’authentification et la persistance des données.

Ma contribution (Front-end) : j’ai pris en charge la première version du frontend, en développant les pages et composants Quasar, les formulaires, ainsi que l’organisation des données dans le store Pinia.`,
    tags: ["Vue.js", "Quasar", "Supabase", "Git"],
    image: "https://plus.unsplash.com/premium_vector-1720939039468-8e71e7e80fd6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: [
      { icon: FaGithub, href: "https://github.com", label: "Code" },
      { icon: FaExternalLinkAlt, href: "https://google.com", label: "Demo" }
    ]
  }
];