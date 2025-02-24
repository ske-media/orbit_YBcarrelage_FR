import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 overflow-hidden"
      > 
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/agence-orbit/video/upload/v1740127394/carreau-das-hero_bg_kgcxv4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 text-center md:text-left font-heading leading-tight animate-fade-up">
              L'excellence du carrelage au service de vos espaces
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-10 text-center md:text-left font-body leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              Spécialisés dans la pose de carrelage grand format et les chantiers haut de gamme, nous vous accompagnons dans la conception et la réalisation de vos sols et murs avec précision et esthétisme.
            </p>
            <div className="flex justify-center md:justify-start animate-fade-up" style={{ animationDelay: '400ms' }}>
              <a
                href="#contact"
                className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-goldenrod text-white rounded-lg text-lg sm:text-xl font-heading hover:bg-goldenrod/90 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <span className="relative z-10 tracking-wide">Obtenir un devis gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;