import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-white">
      {/* Decorative Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-paynes-gray mb-4 font-heading">
              Contactez-nous
            </h2>
            <p className="text-custom-gray max-w-2xl mx-auto">
              À votre écoute pour un accompagnement sur-mesure et des finitions irréprochables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
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
                    Du lundi au vendredi : 8h - 18h
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-khaki/10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-paynes-gray mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-khaki/20 focus:border-goldenrod focus:ring-1 focus:ring-goldenrod outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-paynes-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-khaki/20 focus:border-goldenrod focus:ring-1 focus:ring-goldenrod outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-paynes-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-khaki/20 focus:border-goldenrod focus:ring-1 focus:ring-goldenrod outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-goldenrod text-white py-4 rounded-lg hover:bg-goldenrod/90 transition-colors font-medium"
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