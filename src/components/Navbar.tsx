import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import des icônes

const Navbar = () => {
  // État pour gérer le thème
  const [theme, setTheme] = useState("light");

  // Au chargement, on vérifie si l'utilisateur avait déjà choisi un thème
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Ajout de dark:bg-gray-900 et dark:border-gray-700
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            {/* Le texte change de couleur en mode sombre */}
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              Mon<span className="text-blue-600">Portfolio</span>.
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Liens avec gestion du hover en dark mode */}
              <a href="#home" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition">Accueil</a>
              <a href="#about" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition">À propos</a>
              <a href="#projects" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition">Projets</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">Contact</a>

              {/* BOUTON DARK MODE */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-yellow-400"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;