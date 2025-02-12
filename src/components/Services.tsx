import React from 'react';
import {
  Hammer,
  Paintbrush,
  Ruler,
  Palette,
  Home,
} from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Pose de carrelage',
    description:
      'Une installation soignée pour un rendu impeccable et une durabilité optimale.',
  },
  {
    icon: Paintbrush,
    title: 'Rénovation de carrelage',
    description:
      'Redonnez une seconde vie à vos surfaces avec des finitions modernes et raffinées.',
  },
  {
    icon: Ruler,
    title: 'Carrelage sur mesure',
    description:
      'Des solutions personnalisées pour s\'adapter parfaitement à vos envies et contraintes techniques.',
  },
  {
    icon: Palette,
    title: 'Carrelage design',
    description:
      'Jouez avec les textures, motifs et formats pour un intérieur unique et tendance.',
  },
  {
    icon: Home,
    title: 'Carrelage pour terrasses, cuisines & salles de bain',
    description:
      'Une expertise spécifique pour chaque espace, intérieur comme extérieur.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white-smoke">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-khaki/20"
            >
              <service.icon
                size={32}
                className="text-charcoal mb-3 md:mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3 text-paynes-gray">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-custom-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;