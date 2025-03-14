import React, { useEffect, useState } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import ProjectSection from './Components/ProjectSection';
import BeforeAbout from './Components/BeforeAbout';
import Contact from './Components/Contact';
import InfiniteScroller from './Components/InfiniteScroller';
import Footer from './Components/Footer';
import Lenis from "@studio-freight/lenis";
import Navbar from './Components/Navbar';
import Loading from './Components/Loading';

const App = () => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      smooth: true,
      smoothTouch: true, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
    });

    setLenis(lenisInstance);

    const update = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div>
      <Loading lenis={lenis} /> {/* Pass Lenis to Loading Component */}
      <Navbar lenis={lenis}  />
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
