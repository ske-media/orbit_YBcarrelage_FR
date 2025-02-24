import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 overflow-hidden"
      >
        {/* Mobile Video */}
        <div className="md:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/agence-orbit/video/upload/v1739895332/LAK_-_Vide%CC%81o_Transformez_votre_cuisine_avec_LAK_Re%CC%81novation._lrvhb1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Desktop Video */}
        <div className="hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/agence-orbit/video/upload/v1739895886/LAK_video_desktop_y39bii.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-end pb-24">
        <div className="container mx-auto px-4">
          <div className="w-full flex justify-center">
            <div className="flex justify-center animate-fade-up" style={{ animationDelay: '400ms' }}>
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