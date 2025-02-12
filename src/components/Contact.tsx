import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-white via-white to-khaki/10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-goldenrod/10 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-charcoal/10 to-transparent rounded-full transform -translate-x-24 translate-y-24" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading bg-gradient-to-r from-paynes-gray to-charcoal bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <p className="text-custom-gray max-w-2xl mx-auto">
              À votre écoute pour un accompagnement sur-mesure et des finitions irréprochables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-khaki/10 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-goldenrod/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-goldenrod" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-1">Téléphone</h3>
                  <a href="tel:+3370151468" className="text-custom-gray hover:text-goldenrod transition-colors">
                    +33 70 15 14 68
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-charcoal" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-1">Zone d'intervention</h3>
                  <p className="text-custom-gray">
                    Canton de Genève, Annemasse et alentours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-paynes-gray/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-paynes-gray" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-1">Horaires</h3>
                  <p className="text-custom-gray">
                    Lundi - Vendredi : 7h - 19h
                    <br />
                    Samedi : 9h - 17h
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-khaki/10 hover:shadow-2xl transition-all duration-300">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-paynes-gray mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-khaki/20 focus:border-goldenrod focus:ring-1 focus:ring-goldenrod outline-none transition-all duration-300 bg-white/70 hover:bg-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-paynes-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-khaki/20 focus:border-goldenrod focus:ring-1 focus:ring-goldenrod outline-none transition-all duration-300 resize-none bg-white/70 hover:bg-white"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-goldenrod to-goldenrod/90 text-white py-4 rounded-lg hover:from-goldenrod/90 hover:to-goldenrod transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;