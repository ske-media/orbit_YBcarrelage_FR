import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paynes-gray relative">
      {/* Decorative Top Border */}
      <div className="h-2 bg-gradient-to-r from-goldenrod via-charcoal to-paynes-gray" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img
              src="https://i.imgur.com/vILcN94.png"
              alt="Carreau D'As"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6">
              Artisan carreleur spécialisé dans la pose de carrelage grand format et les chantiers haut de gamme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-goldenrod transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-goldenrod transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-goldenrod transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-300 hover:text-goldenrod transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-goldenrod transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-goldenrod transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-goldenrod transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-goldenrod" />
                <a href="tel:+3370151468" className="hover:text-goldenrod transition-colors">
                  +33 70 15 14 68
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-goldenrod" />
                <a href="mailto:contact@carreaudas.fr" className="hover:text-goldenrod transition-colors">
                  contact@carreaudas.fr
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-goldenrod flex-shrink-0 mt-1" />
                <span>Canton de Genève, Annemasse et alentours</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Horaires</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold">Lundi - Vendredi</span>
                <br />
                8h - 18h
              </li>
              <li>
                <span className="font-semibold">Samedi - Dimanche</span>
                <br />
                Fermé
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Carreau D'As. Tous droits réservés.
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-400 hover:text-goldenrod transition-colors"
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