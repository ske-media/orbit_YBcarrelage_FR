import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    image: 'https://i.imgur.com/girAp50.png',
    title: 'Salle de Bain Moderne',
    description: 'Rénovation complète avec carrelage grand format',
  },
  {
    image: 'https://i.imgur.com/b4ToPS1.jpeg',
    title: 'Carrelage Intérieur',
    description: 'Pose de carrelage sol et mur',
  },
  {
    image: 'https://i.imgur.com/xD5MxUZ.jpeg',
    title: 'Carrelage Extérieur',
    description: 'Terrasse avec finition antidérapante',
  },
  {
    image: 'https://i.imgur.com/STfczfD.jpeg',
    title: 'Cuisine Contemporaine',
    description: 'Pose de carrelage mural et sol',
  },
  {
    image: 'https://i.imgur.com/t7foSr4.png',
    title: 'Salle de Bain Design',
    description: 'Carrelage grand format et mosaïque',
  },
  {
    image: 'https://i.imgur.com/Lewcjf0.jpeg',
    title: 'Salle de Bain Luxueuse',
    description: 'Finitions haut de gamme',
  },
  {
    image: 'https://i.imgur.com/cOOVc8C.png',
    title: 'Espace Douche',
    description: 'Douche à l\'italienne sur mesure',
  },
  {
    image: 'https://i.imgur.com/hOKXDwI.png',
    title: 'Salle d\'Eau',
    description: 'Rénovation complète',
  },
  {
    image: 'https://i.imgur.com/tGW6hEJ.jpeg',
    title: 'Espace de Vie',
    description: 'Carrelage design pour salon',
  },
  {
    image: 'https://i.imgur.com/eezXtOS.png',
    title: 'Salle de Bain Moderne',
    description: 'Style contemporain et élégant',
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }
  };

  const showPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getVisibleProjects = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const projectsToShow = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      projectsToShow.push(projects[index]);
    }
    return projectsToShow;
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
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-khaki/10 relative overflow-hidden select-none">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-goldenrod/10 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-charcoal/10 to-transparent rounded-full transform -translate-x-24 translate-y-24" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-paynes-gray font-heading">
            Nos Réalisations
          </h2>
          <p className="text-custom-gray max-w-2xl mx-auto">
            Découvrez nos plus belles réalisations en carrelage, marbre et pierre naturelle.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 shadow-lg hover:bg-goldenrod hover:text-white transition-all duration-300 group backdrop-blur-sm"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 shadow-lg hover:bg-goldenrod hover:text-white transition-all duration-300 group backdrop-blur-sm"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {getVisibleProjects().map((project, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  {/* Project Card */}
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-semibold text-white mb-2 font-subheading">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-goldenrod'
                    : 'bg-gray-300 hover:bg-goldenrod/50'
                }`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;