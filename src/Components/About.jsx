import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

const About = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const textContainer = document.querySelector(".about-text");
    if (!textContainer) return; 
  
    const words = textContainer.innerText.split(' ');
    textContainer.innerHTML = '';
  
    words.forEach(word => {
      let span = document.createElement('span');
      span.textContent = word + ' ';
      
      // Add appropriate class based on the word
      if (['MUBARAK', 'FRONT-END', 'SMOOTH', 'ENGAGING'].includes(word)) {
        span.classList.add('text-[#0980ff]','font-bold', 'font-[Abuget]');
      } else if (word === 'INTERACTIONS.') {
        span.classList.add('underline');
      }
      
      textContainer.appendChild(span);
    });
  
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      ".about-text span",
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".about2",
          start: "top top",
          end: "bottom top", 
          scrub: true,
          toggleActions: "play none none reset",
        }
      });
      gsap.to(".about-i",
        {rotation: 380,
          scrollTrigger: {
            trigger: ".about2",
            start: "top top",
            end: "bottom top", 
            scrub: true,
            toggleActions: "play none none reset",
          }
        });
  }, []);
  
  return (
    <div id='about' className='about h-[200vh] w-full relative md:mt-20 '>
      <div className='about2 h-screen w-full sticky top-0 left-0 p-3 md:p-10 flex justify-center items-center '>
        <div className='w-[100vw] h-full font-[Brigends] flex flex-col md:flex-row justify-end gap-5 overflow-hidden relative text-[#dedede] '>
          <div className='h-[30%] w-full md:h-full md:w-[30%] flex flex-col gap-5 justify-start items-center '>
            <div className='h-full w-full md:h-[30%] md:w-full border-[.5px] border-[#9d9dea5e] rounded-2xl flex justify-center items-center relative '>
              <h1 className='text-[12vw] md:text-[4.5vw] xl:text-[5vw] font-[Brigends] '>About</h1>
              <span className='about-h p-4 text-[20vw] md:text-[10vw] font-[Abuget] absolute text-[#ef3750] '>Me</span>
            </div>
            <div className='h-[70%] border-[.5px] border-[#9d9dea5e] rounded-2xl w-full hidden md:flex justify-center items-center relative z-[1] '>
              {/* <img className='w-[90%] absolute blur-md' src="/images/CS_Star_13.webp" alt="About Element" /> */}
              <img className='about-i w-[90%] rotate-12 absolute backdrop-contrast-200 backdrop-brightness-200 ' src="/images/CS_Star_13.webp" alt="About Element" />
            </div>
          </div>

          <div className='h-[60%] w-full md:w-[70%] md:h-full relative flex justify-center items-center border-[.5px] border-[#9d9dea5e] rounded-2xl overflow-hidden text-center px-2 md:px-10'>
            <h1 className='about-text font-[Hanson] uppercase text-[6vw] sm:text-[4vw] md:text-[3vw] leading-none'>
              I'm Mubarak Ansari 🌐 from India, a front-end developer 💎 passionate about crafting websites that prioritize smooth animations and engaging user interactions.
            </h1>
            {['top-2 right-2', 'top-2 left-2', 'bottom-2 right-2', 'bottom-2 left-2'].map(position => (
              <div key={position} className={`h-fit w-fit drop-shadow-2xl absolute ${position} rotate-img`}>
                <img className="w-8" src="/images/Mask group-8.webp" alt="About Element" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
