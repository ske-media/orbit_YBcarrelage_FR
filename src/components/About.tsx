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
                src="https://i.imgur.com/b4ToPS1.jpeg"
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
              Boughlam Yanis
              <span className="block text-xl sm:text-2xl text-goldenrod mt-2">
                Fondateur de YB Carrelage
              </span>
            </h2>
            
            <p className="text-custom-gray mb-8 leading-relaxed">
              Artisan carreleur diplômé, passionné par son métier et attaché à l'excellence 
              du savoir-faire traditionnel. Spécialisé dans la pose de carrelage grand format, 
              haut de gamme, marbre et pierres naturelles.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-charcoal" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-2">CAP Carreleur-Mosaïste</h3>
                  <p className="text-custom-gray text-sm">
                    Formation de base en pose de carrelage et mosaïque, maîtrise des techniques et des matériaux
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-paynes-gray/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-paynes-gray" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-2">Création de YB Carrelage</h3>
                  <p className="text-custom-gray text-sm">
                    Fondée en janvier 2023, intervient dans le canton de Genève, à Annemasse et ses alentours
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