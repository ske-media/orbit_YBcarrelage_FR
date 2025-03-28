import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-white via-white to-khaki/10 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-premium-base/10 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-charcoal/10 to-transparent rounded-full transform -translate-x-24 translate-y-24" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading bg-gradient-to-r from-paynes-gray to-charcoal bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <p className="text-custom-gray max-w-2xl mx-auto">
              Nous sommes à votre écoute pour un accompagnement sur-mesure et des finitions irréprochables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8 p-8 glass-effect border border-khaki/20 hover-lift">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 premium-gradient flex items-center justify-center transform hover:scale-110 transition-transform duration-700">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-paynes-gray mb-1">Téléphone</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-custom-gray">Suisse :</span>
                      <a
                        href="tel:+41765480001"
                        className="block text-custom-gray hover:text-premium-base transition-colors"
                      >
                        +41 76 548 00 01
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-custom-gray">France :</span>
                      <a
                        href="tel:+33770151468"
                        className="block text-custom-gray hover:text-premium-base transition-colors"
                      >
                        +33 7 70 15 14 68
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal/10 flex items-center justify-center">
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
                <div className="flex-shrink-0 w-12 h-12 bg-paynes-gray/10 flex items-center justify-center">
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
            <div className="glass-effect p-8 border border-khaki/20 hover-lift">
              <form
                name="contact"
                method="POST"
                netlify
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Champs cachés pour Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="redirect" value="/success" />

                {/* Honeypot */}
                <div hidden>
                  <input name="bot-field" />
                </div>

                <p>
                  <label className="block text-sm font-medium text-paynes-gray mb-2">
                    Nom complet
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="w-full px-6 py-4 premium-input"
                      placeholder="Votre nom"
                      required
                    />
                  </label>
                </p>

                <p>
                  <label className="block text-sm font-medium text-paynes-gray mb-2">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-6 py-4 premium-input resize-none"
                      placeholder="Décrivez votre projet..."
                      required
                    />
                  </label>
                </p>

                <p>
                  <button
                    type="submit"
                    className="w-full premium-gradient text-white py-4 sm:py-5 font-medium text-base sm:text-lg tracking-wider relative overflow-hidden group hover-lift"
                  >
                    <span className="relative z-10">Envoyer le message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;