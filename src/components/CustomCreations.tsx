import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    url: 'https://i.imgur.com/3DmwgB8.jpeg',
    alt: 'Création personnalisée - Design moderne'
  },
  {
    url: 'https://i.imgur.com/R6fGIgj.jpeg',
    alt: 'Création personnalisée - Finition élégante'
  },
  {
    url: 'https://i.imgur.com/ySRoW2C.jpeg',
    alt: 'Création personnalisée - Style contemporain'
  },
  {
    url: 'https://i.imgur.com/hEyz2OY.jpeg',
    alt: 'Création personnalisée - Design innovant'
  }
];

const CustomCreations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = () => {
    setSelectedImage(images[currentIndex].url);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const showNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const showPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext();
      } else {
        showPrev();
      }
      setTouchStart(0);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(0);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-khaki/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-paynes-gray to-charcoal bg-clip-text text-transparent leading-[1.2]">
            Créations Personnalisées
          </h2>
          <p className="text-lg text-custom-gray leading-relaxed font-light">
            Parce que chaque projet est unique, nous réalisons des créations sur mesure pour apporter une finition soignée et nous adapter parfaitement à vos besoins.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 shadow-lg hover:bg-premium-base hover:text-white transition-all duration-300 group backdrop-blur-sm"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 shadow-lg hover:bg-premium-base hover:text-white transition-all duration-300 group backdrop-blur-sm"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Carousel */}
          <div 
            className="overflow-hidden rounded-2xl shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="relative aspect-[16/9] overflow-hidden group"
              onClick={handleImageClick}
            >
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-premium-base'
                    : 'bg-gray-300 hover:bg-premium-base/50'
                }`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Fullscreen Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
              onClick={closeModal}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Vue agrandie"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 premium-gradient text-white text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomCreations;