import React from 'react';
import { Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paynes-gray relative">
      {/* Decorative Top Border */}
      <div className="h-1 md:h-2 bg-gradient-to-r from-premium-base via-charcoal to-paynes-gray opacity-90" />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://i.imgur.com/RmvgGXO.png"
              alt="YB Carrelage"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 text-center md:text-left">
              Artisan carreleur spécialisé dans la pose de carrelage grand format et les chantiers haut de gamme.
            </p>
            <div className="inline-flex items-center bg-white/10 px-4 py-2 hover:bg-white/20 transition-all duration-300">
              <a
                href="https://www.instagram.com/ybcarrelage/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-premium-base transition-colors inline-flex items-center gap-2"
              >
                <Instagram className="w-6 h-6" />
                <span>@ybcarrelage</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-xl mb-6">Horaires</h3>
            <ul className="space-y-4 text-gray-300 text-center md:text-left">
              <li className="bg-white/5 px-6 py-3 w-full">
                <span className="font-semibold">Lundi - Vendredi</span>
                <br />
                7h - 19h
              </li>
              <li className="bg-white/5 px-6 py-3 w-full">
                <span className="font-semibold">Samedi</span>
                <br />
                9h - 17h
              </li>
              <li className="bg-white/5 px-6 py-3 w-full">
                <span className="font-semibold">Dimanche</span>
                <br />
                Fermé
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-xl mb-6">Contact</h3>
            <ul className="space-y-4 w-full">
              <li className="flex items-center justify-center md:justify-start text-gray-300 bg-white/5 px-6 py-3">
                <Phone className="w-5 h-5 mr-3 text-premium-base" />
                <div className="flex flex-col">
                  <div>
                    <span className="text-sm text-gray-400">Suisse :</span>
                    <a href="tel:+41765480001" className="block hover:text-premium-base transition-colors">
                      +41 76 548 00 01
                    </a>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">France :</span>
                    <a href="tel:+33770151468" className="block hover:text-premium-base transition-colors">
                      +33 7 70 15 14 68
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start justify-center md:justify-start text-gray-300 bg-white/5 px-6 py-3">
                <MapPin className="w-5 h-5 mr-3 text-premium-base flex-shrink-0 mt-1" />
                <span>Canton de Genève, Annemasse et alentours</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4 w-full text-center md:text-left">
              <li className="bg-white/5 px-6 py-3">
                <a href="#services" className="text-gray-300 hover:text-premium-base transition-colors block">
                  Services
                </a>
              </li>
              <li className="bg-white/5 px-6 py-3">
                <a href="#portfolio" className="text-gray-300 hover:text-premium-base transition-colors block">
                  Réalisations
                </a>
              </li>
              <li className="bg-white/5 px-6 py-3">
                <a href="#testimonials" className="text-gray-300 hover:text-premium-base transition-colors block">
                  Témoignages
                </a>
              </li>
              <li className="bg-white/5 px-6 py-3">
                <a href="#contact" className="text-gray-300 hover:text-premium-base transition-colors block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} YB Carrelage. Tous droits réservés.
              <span className="mx-2">|</span>
              <a
                href="https://agence-orbit.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-premium-base transition-colors inline-flex items-center gap-1"
              >
                Développé par Steven C. K. ELDRING - Agence ORBIT
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-premium-base transition-colors bg-white/10 px-6 py-3 hover:bg-white/20"
            >
              <span>Retour en haut</span>
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;