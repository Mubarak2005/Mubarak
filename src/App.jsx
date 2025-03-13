import React, { useEffect } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import ProjectSection from './Components/ProjectSection';
import BeforeAbout from './Components/BeforeAbout';
import Contact from './Components/Contact';
import InfiniteScroller from './Components/InfiniteScroller';
import Footer from './Components/Footer';
import Lenis from "@studio-freight/lenis";
import Navbar from './Components/Navbar';

const App = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Smoother scrolling experience
      smooth: true,
      smoothTouch: true, // Enables smooth scrolling on touch devices
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for a natural feel
    });

    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className='main h-full w-full text-[#fff] mix-blend-difference'>
        <Home />
        <BeforeAbout />
        <InfiniteScroller />
        <About />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
