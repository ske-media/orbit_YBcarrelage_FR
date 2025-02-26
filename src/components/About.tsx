import React from 'react';
import { Medal, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://i.imgur.com/35ZDyU1.jpeg"
                alt="Yanis Boughlam"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-goldenrod/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-charcoal/10 -z-10" />
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-paynes-gray mb-6 font-heading">
              YB Carrelage
              <span className="block text-xl sm:text-2xl text-goldenrod mt-2">
                L'Excellence du Carrelage Haut de Gamme
              </span>
            </h2>
            
            <p className="text-custom-gray mb-6 leading-relaxed">
              YB Carrelage met son savoir-faire au service de vos projets pour des réalisations sur mesure et haut de gamme. Spécialisée dans la pose de carrelage grand format, de marbre et de pierres naturelles, l'entreprise garantit un travail d'une précision irréprochable, avec des finitions soignées et un souci du détail à chaque étape.
            </p>
            
            <p className="text-custom-gray mb-8 leading-relaxed">
              Que ce soit pour des intérieurs élégants ou des espaces extérieurs raffinés, YB Carrelage transforme chaque projet en un véritable atout esthétique et durable. L'entreprise intervient dans tout le Grand Genève, notamment à Genève, Annemasse et ses environs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal/10 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-charcoal" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-2">Excellence & Précision</h3>
                  <p className="text-custom-gray text-sm">
                    Un travail d'une précision irréprochable avec des finitions soignées
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-paynes-gray/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-paynes-gray" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-2">Service Sur Mesure</h3>
                  <p className="text-custom-gray text-sm">
                    Des réalisations personnalisées pour des espaces intérieurs et extérieurs raffinés
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;