import React from 'react';
import {
  Hammer,
  Paintbrush,
  Ruler,
  CheckCircle,
  Home,
  Gem,
  Mountain,
  Waves,
  Construction,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Pose de carrelage',
    description:
      'Une installation soignée pour un rendu impeccable et une durabilité optimale.',
    link: '#contact'
  },
  {
    icon: Paintbrush,
    title: 'Rénovation de carrelage',
    description:
      'Redonnez une seconde vie à vos surfaces avec des finitions modernes et raffinées.',
    link: '#contact'
  },
  {
    icon: Ruler,
    title: 'Carrelage sur mesure',
    description:
      'Des solutions personnalisées pour s\'adapter parfaitement à vos envies et contraintes techniques.',
    link: '#contact'
  },
  {
    icon: Home,
    title: 'Carrelage pour terrasses, cuisines & salles de bain',
    description:
      'Une expertise spécifique pour chaque espace, intérieur comme extérieur.',
    link: '#contact'
  },
  {
    icon: Gem,
    title: 'Pose et rénovation de marbre',
    description: 'Apportez élégance et raffinement à vos sols et murs.',
    link: '#contact'
  },
  {
    icon: Mountain,
    title: 'Pose et rénovation de pierres naturelles',
    description: 'Pour un style authentique et durable.',
    link: '#contact'
  },
  {
    icon: Waves,
    title: 'Dallage & pose de margelles',
    description: 'Parfait pour les abords de piscines et espaces extérieurs.',
    link: '#contact'
  },
  {
    icon: Construction,
    title: 'Sol béton',
    description: 'Une alternative moderne et résistante pour vos surfaces intérieures et extérieures.',
    link: '#contact'
  },
];

const specialization = {
  title: 'Spécialisation en carrelage grand format',
  description: 'Carreaux de dimensions supérieures aux formats classiques, à partir de 75x75 cm jusqu\'à 120x120 cm ou 100x300 cm.',
  benefits: [
    {
      icon: CheckCircle,
      title: 'Un style contemporain et sophistiqué',
      description: 'Avec ses lignes épurées et son esthétisme minimaliste, le carrelage grand format apporte une touche design et haut de gamme à votre intérieur.',
    },
    {
      icon: CheckCircle,
      title: 'Une sensation d\'espace',
      description: 'Idéal pour agrandir visuellement une pièce, ce type de carrelage allonge les perspectives et crée une atmosphère aérée et lumineuse.',
    },
    {
      icon: CheckCircle,
      title: 'Un entretien facilité',
      description: 'Moins de joints, moins de contraintes ! Le carrelage grand format réduit le nombre et la taille des joints, simplifiant le nettoyage.',
    },
    {
      icon: CheckCircle,
      title: 'Un rendu harmonieux et élégant',
      description: 'Offrez-vous un sol ou un mur d\'une incroyable fluidité, avec un fini uniforme et raffiné qui valorise chaque détail.',
    },
  ],
};
const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-white-smoke relative">
      {/* Background Decorative Images */}
      <div className="absolute top-0 right-0 w-1/3 h-64 overflow-hidden opacity-10">
        <img
          src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-48 overflow-hidden opacity-10">
        <img
          src="https://images.unsplash.com/photo-1609644124060-ac26e808b6ea"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-paynes-gray to-charcoal bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-lg text-custom-gray leading-relaxed">
            Des solutions sur mesure pour tous vos projets de carrelage, du sol au mur, de l'intérieur à l'extérieur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {services.map((service) => (
            <a
              href={service.link}
              key={service.title}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-khaki/10 hover:border-goldenrod/30 relative overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-goldenrod/5 via-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-goldenrod/10 to-charcoal/10 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <service.icon
                size={28}
                className="text-charcoal group-hover:text-goldenrod transition-colors duration-500"
              />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-paynes-gray font-subheading relative">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-custom-gray font-body leading-relaxed relative mb-6">
                {service.description}
              </p>
              
              {/* Call to Action */}
              <div className="flex items-center text-charcoal group-hover:text-goldenrod transition-colors duration-500">
                <span className="font-medium mr-2">En savoir plus</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-500" />
              </div>
            </a>
          ))}
        </div>
        
        {/* Specialization Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 sm:p-10 border border-khaki/20 relative overflow-hidden">
          {/* Decorative Image */}
          <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-5">
            <img
              src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-charcoal/5 rounded-full transform translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-goldenrod/5 rounded-full transform -translate-x-24 translate-y-24" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-paynes-gray font-heading flex items-center relative">
            <Gem className="mr-3 text-charcoal" size={32} />
            {specialization.title}
          </h3>
          <p className="text-custom-gray mb-10 font-body text-lg leading-relaxed max-w-3xl relative">{specialization.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {specialization.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start hover:transform hover:translate-x-2 transition-transform duration-300">
                <benefit.icon className="text-charcoal mt-1 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-subheading text-xl font-semibold text-paynes-gray mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-custom-gray font-body leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;