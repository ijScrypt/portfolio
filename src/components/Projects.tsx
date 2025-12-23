// src/components/Projects.tsx
import { useState } from 'react';
import { projects } from '../data/projects';
import { FaTimes } from 'react-icons/fa'; // Icône pour fermer

const Projects = () => {
  // État pour savoir quel projet est sélectionné (null = aucun)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Mes <span className="text-blue-600">Projets</span>
        </h2>

        {/* GRILLE DES CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (

            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-bold bg-black/50 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all">
                    Voir détails
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black transition"
            >
              <FaTimes className="text-gray-900 dark:text-white" />
            </button>

            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 md:h-80 object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {selectedProject.details || selectedProject.description}
              </p>

              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, i) => (
                   <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                     {tag}
                   </span>
                ))}
              </div>

              
              <div className="flex gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                {selectedProject.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Empêche de fermer la modale quand on clique sur le lien
                    className={`
                      flex items-center px-6 py-3 rounded-lg text-sm font-bold transition-all hover:-translate-y-1
                      ${link.label.includes("Code") 
                        ? "bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900" 
                        : "bg-blue-600 text-white hover:bg-blue-700"
                      }
                    `}
                  >
                    <link.icon className="mr-2 text-lg" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;