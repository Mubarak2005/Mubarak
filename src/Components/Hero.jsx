import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import HeroBottom from './HeroBottom';

const Hero = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    const textContainers = document.querySelectorAll(".hero-txt h1");

    textContainers.forEach((textContainer) => {
      const textContent = textContainer.innerText;
      const letters = textContent.split("");
      textContainer.innerHTML = "";

      letters.forEach((letter) => {
        const span = document.createElement("span");
        if (letter === " ") {
          span.innerHTML = "&nbsp;"; 
        } else {
          span.textContent = letter;
        }
        
        textContainer.appendChild(span);
      });
    });

    gsap.from(".hero-txt span", {
      delay: 5,
      y: "100%",
      stagger: .02,
      ease: "expo.out",
      onComplete: function() {
        gsap.set(".hero-txt", { overflow: "visible" });
      }
    });
    gsap.set(".h-bottom", { opacity: 0 });
    gsap.set(".h-bottom h1", { opacity: 0, filter: "blur(20px)" });
    gsap.to(".h-bottom", {
      onStart: function() {
        gsap.set(".h-bottom", { opacity: 1 });
      },
      delay: 5,
      width: "100%",
      ease: "expo.out",
    });
    gsap.to(".h-bottom h1", {
      delay: 5,
      opacity: 1.5,
      filter: "blur(0px)",
      ease: "expo",
    });
    gsap.to(".video-div", {
      delay: 6,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    });
  }, []);

  useEffect(() => {
    const beforeAboutTxtSpans = document.querySelectorAll(".hero-txt span");

    beforeAboutTxtSpans.forEach((span) => {
      span.addEventListener("mouseover", () => {
        gsap.to(span, {
          scale: 1.2,
          marginLeft: "15px",
          marginRight: "15px",
          transformOrigin: "center center",
          duration: 0.2,
          ease: "power2.out",
          onStart: function() {
            span.classList.add("Btxt");
          }
        });
      });

      span.addEventListener("mouseout", () => {
        gsap.to(span, {
          scale: 1,
          marginLeft: "0px",
          marginRight: "0px",
          duration: 0.2,
          ease: "power2.out",
          onStart: function() {
            span.classList.remove("Btxt");
          }
        });
      });
    });
  }, []);

  return (
    <div className="hero w-full h-full relative ">
      <div className='rotate-im video-di opacity-[1] scale-[.9] pointer-events-none blur-[0px] object-cover backdrop-blur-md overflow-hidden absolute right-10 top-10 z-[1] border-[1px] border-[#ffffff51] h-[50vh] w-[50vw] rounded-full'>
        <img loading="lazy" className='absolute inset-0 h-full w-full opacity-[.8]  object-cover z-[1]' src="https://framerusercontent.com/images/mV2zBXGKyt2VhbXmEN44WmZK9nA.jpg" alt="Hero Element" />
      </div>
      {/* <img loading="lazy" className='md:w-[15rem] blur-lg ' src="./src/assets/CS_Flower_7.webp" alt="Hero Element" /> */}
      <div className='tri-el h-fit w-fit video-div opacity-0 scale-[.9] blur-[10px]  absolute left-0 md:left-48 top-10 z-[1] '>
        <img loading="lazy" className='md:w-[5rem] absolute z-[1] ' src="./src/assets/CS_Triangle_4.webp" alt="Hero Element" />
        {/* <img loading="lazy" className='md:w-[5rem] blur-lg ' src="./src/assets/CS_Triangle_4.webp" alt="Hero Element" /> */}
      </div>
      <div className='font-["Brigends"] relative text-[#fff] px-2 sm:px-5 md:px-10 pb-10 text-[10vw] xl:text-[9vw] font-bold h-full w-full overflow-hidden flex flex-col justify-end items-start'>
        <div className='hero-time'>
          <h1 className='text-[4vw] opacity-[1] md:text-[2vw] font-[Hanson] leading-10'>{currentDateTime.toLocaleTimeString()}</h1>
        </div>
        <div className='hero-txt w-fit h-fit overflow-hidden tracking-wide pointer-events-auto leading-none md:leading-[8vw] uppercase pl-1 flex'><h1 className='flex'>Creative</h1></div>
        <div className='hero-txt w-fit h-fit overflow-hidden tracking-wide pointer-events-auto leading-none md:leading-[8vw] uppercase pl-1 flex'><h1 className='flex'>Developer</h1></div>
        
        <HeroBottom />
      </div>
    </div>
  );
};

export default Hero;
