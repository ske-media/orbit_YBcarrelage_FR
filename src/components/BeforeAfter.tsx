import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    title: "Transformation #1 : Rénovation complète d'une salle de bain",
    before: "https://i.imgur.com/r7KvBMe.jpeg",
    after: "https://i.imgur.com/Rn6EDTy.jpeg",
  },
  {
    title: "Transformation #2 : Rénovation d'un espace de vie",
    before: "https://i.imgur.com/dvUpkfP.jpeg",
    after: "https://i.imgur.com/RPBXBLK.jpeg",
  }
];

const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      };

      try {
        await Promise.all([
          loadImage(transformations[activeIndex].before),
          loadImage(transformations[activeIndex].after)
        ]);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    preloadImages();
  }, [activeIndex]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;

    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  const nextTransformation = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevTransformation = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-khaki/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-goldenrod/10 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-charcoal/10 to-transparent rounded-full transform -translate-x-24 translate-y-24" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-paynes-gray font-heading">
            Avant / Après
          </h2>
          <p className="text-custom-gray max-w-2xl mx-auto">
            Faites glisser le curseur pour découvrir nos transformations spectaculaires.
            <span className="block mt-2 text-sm text-premium-base">
              Utilisez les flèches pour naviguer entre les différentes transformations
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Navigation Buttons */}
            <button
              onClick={prevTransformation}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg hover:bg-goldenrod hover:text-white transition-all duration-300 group-hover:opacity-100 opacity-0 backdrop-blur-sm"
              aria-label="Transformation précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTransformation}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg hover:bg-goldenrod hover:text-white transition-all duration-300 group-hover:opacity-100 opacity-0 backdrop-blur-sm"
              aria-label="Transformation suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Container */}
            <div
              ref={containerRef}
              className="relative aspect-[3/4] w-full cursor-col-resize select-none"
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* After Image */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <img
                  src={transformations[activeIndex].after}
                  alt="Après"
                  className="absolute w-full h-full object-cover object-center select-none"
                  draggable="false"
                />
              </div>

              {/* Before Image (Clipped) */}
              <div
                className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <img
                  src={transformations[activeIndex].before}
                  alt="Avant"
                  className="absolute w-full h-full object-cover object-center select-none"
                  draggable="false"
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize group transition-opacity duration-500"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-goldenrod transform transition-transform group-hover:scale-110" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg backdrop-blur-sm select-none"
                  style={{ opacity: sliderPosition > 10 ? 1 : 0 }}
                >
                  Avant
                </div>
                <div
                  className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg backdrop-blur-sm select-none"
                  style={{ opacity: sliderPosition < 90 ? 1 : 0 }}
                >
                  Après
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 select-none">
              <h3 className="text-white text-xl font-semibold text-center mb-2">
                {transformations[activeIndex].title}
              </h3>
              <div className="flex justify-center gap-2">
                <span className="text-white/80 text-sm bg-black/30 px-3 py-1 rounded-full">
                  Glissez pour comparer
                </span>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-custom-gray font-medium">
              {activeIndex + 1} / {transformations.length}
            </p>
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-goldenrod w-6'
                    : 'bg-gray-300 hover:bg-goldenrod/50'
                }`}
                aria-label={`Voir transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;