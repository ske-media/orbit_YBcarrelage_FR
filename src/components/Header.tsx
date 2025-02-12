import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Spécialisation', href: '#specialization' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white-smoke shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/K7HU22M.png"
              alt="Carreau D'As"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-custom-gray hover:text-jet transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Contact Button */}
          <a
            href="tel:+3370151468"
            className="hidden md:flex items-center px-4 py-2 bg-goldenrod text-white rounded-lg hover:bg-goldenrod/90 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            +33 70 15 14 68
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-custom-gray hover:text-jet hover:bg-white-smoke rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+3370151468"
                className="flex items-center px-3 py-2 text-goldenrod"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                +33 70 15 14 68
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;