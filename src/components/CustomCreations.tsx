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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-paynes-gray to-charcoal bg-clip-text text-transparent leading-[1.2]">
            Créations Personnalisées
          </h2>
          <p className="text-lg text-custom-gray leading-relaxed font-light">
            Donnez vie à vos projets les plus ambitieux avec nos solutions sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div className="space-y-8">
            <div className="relative h-[300px] overflow-hidden">
              <img
                src="https://i.imgur.com/girAp50.png"
                alt="Création personnalisée 1"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-lg font-medium">Design moderne et épuré</p>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden">
              <img
                src="https://i.imgur.com/t7foSr4.png"
                alt="Création personnalisée 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-lg font-medium">Finitions haut de gamme</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-khaki/10 hover:border-charcoal/30 relative overflow-hidden transform hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 premium-gradient flex items-center justify-center transform hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-paynes-gray mb-2">
                  {feature.title}
                </h3>
                <p className="text-custom-gray">
                  {feature.description}
                </p>
              </div>
            ))}
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