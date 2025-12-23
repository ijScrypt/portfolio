
const Hero = () => {
  return (
    // Ajout de dark:bg-gray-800
    <section id="home" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 pt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          {/* Titre change en blanc */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bonjour, je suis <br />
            <span className="text-blue-600">Un Développeur Web</span>
          </h1>
          {/* Paragraphe change en gris clair */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Je transforme des idées complexes en interfaces simples, modernes et intuitives. Bienvenue dans mon univers créatif.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg">
              Voir mes projets
            </a>
            <a href="#contact" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium hover:border-gray-800 dark:hover:border-white hover:text-gray-800 dark:hover:text-white transition">
              Me contacter
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full shadow-2xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;