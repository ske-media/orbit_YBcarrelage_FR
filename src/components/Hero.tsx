import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.imgur.com/b4ToPS1.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start">
            <img
              src="https://i.imgur.com/vILcN94.png"
              alt="Carreau D'As"
              className="h-12 md:h-16 w-auto mb-6 md:mb-8"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-center md:text-left">
              Carreau D'As – Sublimez vos espaces avec un carrelage élégant et
              durable
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 md:mb-8 text-center md:text-left">
              Carreau D'As, artisan carreleur passionné et diplômé, met son
              savoir-faire au service de vos projets pour sublimer vos espaces
              avec des revêtements en carrelage élégants et durables.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-goldenrod text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-goldenrod/90 transition-colors"
              >
                Obtenir un devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;