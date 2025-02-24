import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="block">
              <img
                src="https://i.imgur.com/vILcN94.png"
                alt="Carreau D'As"
                className="h-12 lg:h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-goldenrod transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="lg:hidden p-2 text-white/90 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Contact Button */}
          <a
            href="tel:+33770151468"
            className="hidden lg:flex items-center px-6 py-3 bg-goldenrod/90 backdrop-blur-sm text-white rounded-lg hover:bg-goldenrod transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <Phone size={18} className="mr-2" />
            <span className="group-hover:tracking-wider transition-all duration-300">+33 7 70 15 14 68</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed left-0 right-0 mt-2 backdrop-blur-md bg-black/80 border-t border-white/10 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
            <div className="container mx-auto px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-goldenrod/20 rounded-lg transition-all duration-300 hover:pl-6 relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-goldenrod/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </a>
              ))}
              <a
                href="tel:+33770151468"
                className="flex items-center px-4 py-3 text-goldenrod hover:text-white bg-goldenrod/20 hover:bg-goldenrod rounded-lg transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                <span className="group-hover:tracking-wider transition-all duration-300">+33 7 70 15 14 68</span>
              </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;