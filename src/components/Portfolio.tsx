import React from 'react';

const projects = [
  {
    image: 'https://i.imgur.com/b4ToPS1.jpeg',
    title: 'Salle de Bain Moderne',
    description: 'Rénovation complète avec carrelage grand format',
  },
  {
    image: 'https://i.imgur.com/xD5MxUZ.jpeg',
    title: 'Carrelage Extérieur',
    description: 'Terrasse avec finition antidérapante',
  },
  {
    image: 'https://i.imgur.com/STfczfD.jpeg',
    title: 'Cuisine Contemporaine',
    description: 'Pose de carrelage mural et sol',
  },
  {
    image: 'https://i.imgur.com/Lewcjf0.jpeg',
    title: 'Salle de Bain Luxueuse',
    description: 'Carrelage grand format et mosaïque',
  },
  {
    image: 'https://i.imgur.com/tGW6hEJ.jpeg',
    title: 'Espace de Vie',
    description: 'Carrelage design pour salon',
  },
  {
    image: 'https://i.imgur.com/9Xka1nB.jpeg',
    title: 'Douche à l\'Italienne',
    description: 'Installation sur mesure',
  },
  {
    image: 'https://i.imgur.com/5YnZNHJ.jpeg',
    title: 'Salle d\'Eau Moderne',
    description: 'Carrelage mural grand format',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-khaki/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-paynes-gray">
          Nos Réalisations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow border border-khaki/20"
            >
              <div className="relative pt-[75%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;