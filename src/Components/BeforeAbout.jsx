import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const BeforeAbout = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".before-about",
        start: "top bottom",
        end: "bottom top",
        scroller: "body",
        scrub: .2
      },
    });
    timeline.to(".about-img1", {
      rotation: -180,
      ease: "power1.inOut" 
    },'a');
    timeline.to(".about-img2", {
      y:-50,
      rotation: 180,
      ease: "power1.inOut" 
    },'a');
    timeline.to(".about-cur", {
      y:"-10%",
      // rotation: 180,
      ease: "power1.inOut" 
    },'a');
  }, []);
  return (
    <div className="before-about h-[60vh] sm:h-[70vh] md:h-[110vh] w-full flex justify-center items-center relative">
      <div className="h-fit w-fit text-[9vw] font-[Brigends] uppercase leading-[7vw] tracking-tight flex flex-col justify-center items-center relative">
        <h1 className="about-cur about-h font-[Abuget] radient-anim text-[20vw] sm:text-[17vw] md:text-[14vw] xl:text-[11vw] capitalize leading-none text-[#ef3750] absolute top-[-35%]  md:top-[-20%] z-[1]">
          Crafting
        </h1>
        <h1 className="expr">Interactive </h1>
        <h1 className="expr mb-3">and</h1>
        <h1 className="about-cur font-[Abuget] radient-anim2 mt-7 p-3 text-[20vw] sm:text-[17vw] md:text-[14vw] xl:text-[11vw] capitalize leading-none text-[#ef3750] absolute z-[1]">
          Modern
        </h1>
        <h1 className="expr mt-7 md:mt-12 ">Web</h1>
        <h1 className="expr">Experiences</h1>
      </div>
      
      <div className="about-img1 h-fit w-fit absolute left-2 md:left-10 bottom-20 md:top-1/2 ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src="/images/Mask group-9.webp" alt="Before About Element" />
      </div>
      {/* <div className="h-fit w-fit absolute left-2 md:left-10 bottom-20 md:top-1/2 rotate-img ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] blur-sm drop-shadow-2xl " src="/images/Mask group-9.webp" alt="Before About Element" />
      </div> */}
      <div className="about-img2 h-fit w-fit drop-shadow-2xl absolute top-32 right-14 ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src="/images/Mask group-6.webp" alt="Before About Element" />
      </div>
      {/* <div className="h-fit w-fit drop-shadow-2xl absolute top-32 right-14 rotate-img ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] blur-md drop-shadow-2xl " src="/images/Mask group-6.webp" alt="Before About Element" />
      </div> */}
    </div>
  );
};

export default BeforeAbout;
