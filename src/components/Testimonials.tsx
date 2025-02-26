import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Johannes G.",
    text: "Yanis a effectué un travail de grande qualité dans notre maison, à savoir la rénovation complète des deux salles de bains et le remplacement de l'intégralité du carrelage du reste de la maison. Il a su travailler en milieu occupé en limitant au maximum l'impact des travaux sur notre vie quotidienne. Il a exécuté des tâches très complexes avec un niveau de finition excellent. Yanis s'attache au résultat ainsi qu'à la satisfaction de son client, il a également une personnalité très agréable. Je le félicite pour le travail effectué chez nous et lui souhaite beaucoup de réussite sur ses futurs chantiers."
  },
  {
    name: "Carine G.",
    text: "Yanis est plus qu'un carreleur, c'est un passionné avec le souci du détail et bien faire. Une perle, un artisan comme on en voit plus. Il nous a suivi dans notre aventure et a fait l'intégralité de notre 110m2 du sol à la crédence du salon, à la salle de bain, en passant par les toilettes. Les photos valent plus que les mots … bravo l'artiste !"
  },
  {
    name: "Deborah G.",
    text: "Yanis a carrelé l'extérieur de ma maison (terrasse 50m2) il a su me conseiller de A à Z sur le type de carreaux, le rattrapage de la dalle existante pour l'évacuation des eaux. Travail soigné, le chantier était nettoyé tous les soirs. J'ai rarement vu un artisan aussi soigné et minutieux du moindre détail. La facture est à la hauteur de l'accompagnement et du travail réalisé. Merci Yanis pour votre professionnalisme je vous souhaite beaucoup de réussite !"
  },
  {
    name: "Jerome M.",
    text: "Très professionnel, il réalise le travail avec soin. Très ponctuel, à l'écoute du client. Il aime le travail bien fait. Il a effectué la pose du carrelage sur 80m2, tout est parfait. Je le recommande."
  },
  {
    name: "Christine",
    text: "Artisan très sérieux, travail bien fait, rapide et soigné. Personne sympathique. Je recommande vivement. Je dois poser du carrelage autour de ma piscine, je referai appel à ses services sans problème."
  },
  {
    name: "Haddoud",
    text: "Je recommande très vivement et sincèrement cette entreprise carreau d'as. Ils sont soucieux du travail parfait, travaillent avec passion de ce qu'ils font !! C'est malheureusement très rare de trouver une entreprise de ce niveau !! Merci à eux."
  },
  {
    name: "Maillard",
    text: "Je lui ai confié tout le carrelage de ma maison ainsi que ma douche à l'italienne mais aussi l'extérieur !! C'est une personne très professionnelle et compétente. Le résultat est parfait ! Je recommande vivement"
  },
  {
    name: "Giacomo B.",
    text: "Devis très correct. Rapide. Propreté et finitions au rendez-vous. Une salle de bain incroyable !!!! ma femme et moi sommes ravis. Un grand merci à Yanis pour votre professionnalisme et votre bonne humeur."
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
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-paynes-gray mb-4 font-heading">
            La satisfaction de nos clients
          </h2>
          <p className="text-custom-gray max-w-2xl mx-auto">
            Des témoignages authentiques qui reflètent notre engagement pour l'excellence et la satisfaction client.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 lg:-translate-x-24 z-10 p-3 bg-white shadow-lg hover:bg-premium-base hover:text-white transition-all duration-300 group"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-12 lg:translate-x-24 z-10 p-3 bg-white shadow-lg hover:bg-premium-base hover:text-white transition-all duration-300 group"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 shadow-xl relative overflow-hidden transform transition-all duration-500 border border-khaki/20 hover:border-charcoal/30 mx-12 md:mx-0">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-premium-base via-charcoal to-paynes-gray" />
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-12 h-12 text-premium-base/20 transform -scale-x-100" />
                
              <div className="px-8 py-4 max-h-[400px] overflow-y-auto">
                <p className="text-custom-gray text-lg md:text-xl leading-relaxed mb-8 italic text-center">
                  {testimonials[activeIndex].text}
                </p>
                  
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-paynes-gray text-xl mb-2 font-heading">
                    {testimonials[activeIndex].name}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-premium-base fill-current"
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
                    ? 'bg-premium-base w-6'
                    : 'bg-gray-300 hover:bg-premium-base/50'
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