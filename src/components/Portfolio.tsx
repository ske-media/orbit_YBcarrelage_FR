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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-paynes-gray font-heading">
          Nos Réalisations
        </h2>
        <p className="text-custom-gray text-center max-w-2xl mx-auto mb-12 md:mb-16 font-body text-lg">
          Découvrez nos plus belles réalisations en carrelage, marbre et pierre naturelle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-khaki/20 hover:border-charcoal/30"
            >
              <div className="relative pt-[75%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 font-subheading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 font-body transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.description}
                  </p>
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