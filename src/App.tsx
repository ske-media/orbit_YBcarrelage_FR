import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import CustomCreations from './components/CustomCreations';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';

const App = () => {
  // Observer for fade-up animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    document.querySelectorAll('.animate-fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Render the correct page based on the URL pathname
  const renderPage = () => {
    const path = window.location.pathname;
    if (path === '/legal') {
      return <Legal />;
    } 
    // Route /success commentée - non utilisée depuis le remplacement du formulaire par contact par email
    // else if (path === '/success') {
    //   return (
    //     <div className="min-h-screen bg-white py-32">
    //       <div className="container mx-auto px-4 max-w-4xl text-center">
    //         <h1 className="text-4xl font-bold text-paynes-gray mb-8 font-heading">
    //           Message envoyé avec succès !
    //         </h1>
    //         <p className="text-custom-gray mb-8">
    //           Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
    //         </p>
    //         <a
    //           href="/"
    //           className="inline-flex items-center px-8 py-4 premium-gradient text-white text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    //         >
    //           Retour à l'accueil
    //         </a>
    //       </div>
    //     </div>
    //   );
    // } 
    else {
      return (
        <>
          <Hero />
          <About />
          <Portfolio />
          <BeforeAfter />
          <Services />
          <CustomCreations />
          <Partners />
          <Testimonials />
          <Contact />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;