import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Parlons de votre <span className="text-blue-600">Prochain Projet</span>
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou juste envie de dire bonjour, ma boîte de réception est toujours ouverte !
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="mailto:votre.email@ecole.fr" 
            className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:-translate-y-1"
          >
            <FaEnvelope className="mr-2 text-xl" />
            M'envoyer un email
          </a>
          
          <a 
            href="https://linkedin.com/in/votre-profil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition"
          >
            <FaLinkedin className="mr-2 text-xl" />
            LinkedIn
          </a>

          <a 
            href="https://github.com/votre-user" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-bold hover:border-gray-900 hover:text-gray-900 dark:hover:border-white dark:hover:text-white transition"
          >
            <FaGithub className="mr-2 text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;