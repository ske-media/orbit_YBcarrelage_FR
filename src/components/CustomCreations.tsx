import React from 'react';
import { Palette, Ruler, Lightbulb, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Design Unique',
    description: 'Chaque projet est une création exclusive, adaptée à votre style et à vos envies.'
  },
  {
    icon: Ruler,
    title: 'Sur Mesure',
    description: 'Solutions personnalisées pour s\'adapter parfaitement à votre espace et vos contraintes.'
  },
  {
    icon: Lightbulb,
    title: 'Conseil Expert',
    description: 'Accompagnement professionnel pour concrétiser vos idées et optimiser votre projet.'
  },
  {
    icon: Sparkles,
    title: 'Finitions Premium',
    description: 'Attention particulière aux détails pour un résultat haut de gamme.'
  }
];

const CustomCreations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-khaki/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-paynes-gray to-charcoal bg-clip-text text-transparent leading-[1.2]">
            Créations Personnalisées
          </h2>
          <p className="text-lg text-custom-gray leading-relaxed font-light">
            Parce que chaque projet est unique, nous réalisons des créations sur mesure pour apporter une finition soignée et nous adapter parfaitement à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative aspect-[3/4] overflow-hidden group">
            <img
              src="https://i.imgur.com/OR5Hmf0.jpeg"
              alt="Création personnalisée"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden group">
            <img
              src="https://i.imgur.com/ViAABfJ.jpeg"
              alt="Création personnalisée"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden group">
            <img
              src="https://i.imgur.com/DWrqjVT.png"
              alt="Création personnalisée"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 premium-gradient text-white text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomCreations;