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
                L'excellence artisanale depuis 2023
              </span>
            </h2>
            
            <p className="text-custom-gray mb-8 leading-relaxed">
              Entreprise artisanale spécialisée dans la pose de carrelage haut de gamme, 
              nous nous distinguons par notre expertise technique et notre engagement pour 
              l'excellence. Notre savoir-faire unique en pose de carrelage grand format, 
              marbre et pierres naturelles nous permet de réaliser vos projets les plus ambitieux.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal/10 flex items-center justify-center">
                  <Medal className="w-6 h-6 text-charcoal" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-2">Expertise Technique</h3>
                  <p className="text-custom-gray text-sm">
                    Maîtrise des techniques avancées de pose et des dernières innovations en matière de carrelage
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-paynes-gray/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-paynes-gray" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-2">Service Premium</h3>
                  <p className="text-custom-gray text-sm">
                    Accompagnement personnalisé et finitions irréprochables pour des réalisations haut de gamme
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