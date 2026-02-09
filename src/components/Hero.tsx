const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 pt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          
          {/* Titre Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Bonjour, je suis <br />
            <span className="text-blue-600">Ismail JAGHAR</span>
          </h1>

          {/* Sous-titre : Futur Ingénieur */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Futur Ingénieur Informatique
          </h2>

          {/* Paragraphe de présentation */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Actuellement étudiant en 2ème année du cycle Ingénieur (Bac+4), je recherche un stage de <strong>4 à 5 mois</strong> à partir d'<strong>Avril 2026</strong>.
            <br/>
            Prêt à relever des défis techniques au sein de votre équipe !
          </p>

          {/* Boutons d'action */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg">
              Voir mes projets
            </a>
            <a href="#contact" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium hover:border-gray-800 dark:hover:border-white hover:text-gray-800 dark:hover:text-white transition">
              Me contacter
            </a>
          </div>
        </div>

        {/* Partie Droite : Image ou Animation */}
        <div className="md:w-1/2 flex justify-center">
          {/* Cercle animé (Si tu veux mettre ta photo plus tard, remplace ce div par une balise <img src={taPhoto} ... />) */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full shadow-2xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;