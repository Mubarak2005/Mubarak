import gsap, { Power4 } from 'gsap';
import React, { useEffect, useState } from 'react';

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
      // delay: 4.5,
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
      delay: .5,
      width: "100%",
      ease: "expo.out",
    });
    gsap.to(".h-bottom h1", {
      delay: .5,
      opacity: 1.5,
      filter: "blur(0px)",
      ease: "expo",
    });
    gsap.to(".video-div", {
      delay: .5,
      opacity: 1,
      scale: .9,
      filter: "blur(0px)",
    });
    gsap.to(".hero-time", {
      delay: .5,
      opacity: 1,
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
    document.addEventListener("mousemove",(dets)=>{
      gsap.to(".video-div",{
        opacity:1,
        x:gsap.utils.mapRange(0,window.innerWidth,-10,10,dets.clientX),
        y:gsap.utils.mapRange(0,window.innerHeight,-10,10,dets.clientY),
        ease:Power4,
        duration:1
    });
      gsap.to(".video-div .bubble",{
          opacity:1,
          x:gsap.utils.mapRange(0,window.innerWidth,-20,20,dets.clientX),
          y:gsap.utils.mapRange(0,window.innerHeight,-20,20,dets.clientY),
          ease:Power4,
          duration:1
      });
  });
  }, []);

  return (
    <div className="hero w-full h-full relative overflow-hidden ">
      <div className='video-div opacity-[0] scale-[.7] pointer-events-none blur-[10px] object-cover backdrop-blur-md overflow-hidden absolute right-[-2.5rem] md:right-10 top-40 md:top-10 z-[1] border-[1px] border-[#ffffff51] p-48 md:p-72 rounded-full'>
        <img loading="lazy" className='absolute inset-0 h-full w-full opacity-[.8]  object-cover z-[1]' src="/images/blur-circle.webp" alt="Hero Element" />
        <img loading="lazy" className='bubble absolute inset-0 h-full w-full opacity-[.8]  object-cover z-[2]' src="/images/hero-el.png" alt="Hero Element" />
      </div>
      {/* <img loading="lazy" className='md:w-[15rem] blur-lg ' src="./src/assets/CS_Flower_7.webp" alt="Hero Element" /> */}
      {/* <div className='tri-el h-fit w-fit video-div opacity-0 scale-[.9] blur-[10px]  absolute left-0 md:left-48 top-10 z-[1] '>
        <img loading="lazy" className='md:w-[5rem] absolute z-[1] ' src="./src/assets/CS_Triangle_4.webp" alt="Hero Element" />
        <img loading="lazy" className='md:w-[5rem] blur-lg ' src="./src/assets/CS_Triangle_4.webp" alt="Hero Element" />
      </div> */}
      <div className='font-[Brigends] relative text-[#fff] px-2 sm:px-5 md:px-10 pb-10 text-[10vw] xl:text-[9vw] h-full w-full overflow-hidden flex flex-col justify-end items-start'>
        <div className='w-full hero-time blur-[10px] opacity-0 '>
          <h1 className='text-[4vw] opacity-[1] md:text-[2vw] font-[Hanson] leading-10'>{currentDateTime.toLocaleTimeString()}</h1>
          {/* <h1 className='w-full text-[4vw] text-[#5F1B8C] opacity-[1] md:text-[8vw] font-[Abuget] leading-none px-5 absolute -top-20 left-0 z-[1] '>Mubarak</h1> */}
        </div>
        <div className='hero-txt font-bold w-fit h-fit overflow-hidden tracking-wide pointer-events-auto leading-none md:leading-[8vw] uppercase pl-1 flex'><h1 className='flex'>Creative</h1></div>
        <div className='hero-txt font-bold w-fit h-fit overflow-hidden tracking-wide pointer-events-auto leading-none md:leading-[8vw] uppercase pl-1 flex'><h1 className='flex'>Developer</h1></div>
        
        <div className='w-full font-[Hanson] leading-none flex justify-center items-center mt-10 '>
        <div className='h-bottom text-[3vw] md:text-[1.2vw] w-[0%] border-y-[1px] border-[#ffffff6b] flex justify-between items-center p-2'>
            <h1 className=''>Think</h1>
            <h1 className=''>Build</h1>
            <h1 className=''>Solve</h1>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Hero;
