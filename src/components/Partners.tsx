import React from 'react';

const partners = [
  {
    name: "Novabell",
    logo: "https://www.fliesenverkauf.eu/media/image/c5/84/db/logo_brand_novabell.png"
  },
  {
    name: "Coimpre",
    logo: "https://www.coimpresrl.com/uploads/ge_marcaprodotti/20180921170940-2018-09-21ge_marcaprodotti170938.png"
  },
  {
    name: "Emil Ceramica",
    logo: "https://www.uni1969.com/archive/images/editor/product/EMIL/EM-02.png"
  },
  {
    name: "Raimondi",
    logo: "https://solutionsws.fr/wp-content/uploads/2023/06/Logo-Raimondi-1024x630.png"
  },
  {
    name: "Aubade",
    logo: "https://le-de.cdn-website.com/62b92f0889f643f999610d0693d50cb7/dms3rep/multi/opt/686bb59c-e025-4bac-a6c1-ee8c0a1b1ebe-640w.png"
  },
  {
    name: "Rubi",
    logo: "https://wallboulevard.com.au/wp-content/uploads/2024/01/Rubi1.webp"
  },
  {
    name: "Cermix",
    logo: "https://www.nlhabitat.ch/wp-content/uploads/2023/09/Logo-de-marque.png"
  },
  {
    name: "Geberit",
    logo: "https://trafiko.ch/cms/wp-content/uploads/geberit-logo-trafiko.gif"
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-khaki/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-paynes-gray mb-4 font-heading">
            Nos Partenaires
          </h2>
          <p className="text-custom-gray max-w-2xl mx-auto">
            Nous collaborons avec les meilleures marques pour vous garantir des produits de qualité supérieure.
          </p>
        </div>

        {/* Infinite Scroll Animation Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Partners */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale-0 hover:grayscale transition-all duration-300 transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;