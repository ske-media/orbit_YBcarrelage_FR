import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sophie M.",
    text: "Yanis a réalisé un travail impeccable, très professionnel et toujours disponible. Nous vous recommandons vivement Yanis et n'hésiterons pas à refaire appel à lui pour la suite de nos travaux. Merci !"
  },
  {
    name: "Laurent P.",
    text: "The top. Professionnel sérieux et consciencieux. Très bon travail soigné avec des produits de qualité. Avec en plus de bons conseils. Parfait, merci encore."
  },
  {
    name: "Marie C.",
    text: "Super professionnel, toujours disponible et plein de bons conseils! Le travail effectué est parfait, je recommande fortement!"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-paynes-gray mb-4 font-heading">
            Nos clients parlent de nous
          </h2>
          <p className="text-custom-gray max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits sur la qualité de notre travail et notre professionnalisme.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 z-10 p-3 rounded-full bg-white/90 shadow-lg hover:bg-goldenrod hover:text-white transition-all duration-300 group"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 z-10 p-3 rounded-full bg-white/90 shadow-lg hover:bg-goldenrod hover:text-white transition-all duration-300 group"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden transform transition-all duration-500 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-goldenrod via-charcoal to-paynes-gray" />
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-12 h-12 text-goldenrod/20 transform -scale-x-100" />
              <Quote className="absolute -bottom-2 -right-2 w-12 h-12 text-goldenrod/20" />
                
              <div className="px-8 py-4">
                <p className="text-custom-gray text-xl leading-relaxed mb-8 italic text-center">
                  "{testimonials[activeIndex].text}"
                </p>
                  
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-paynes-gray text-xl mb-2">
                    {testimonials[activeIndex].name}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-goldenrod fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-goldenrod w-6'
                    : 'bg-gray-300 hover:bg-goldenrod/50'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials