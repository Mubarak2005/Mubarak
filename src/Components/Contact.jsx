import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa6";

const Contact = () => {
  const contactTextRef = useRef(null); // Ref for the contact text

  useEffect(() => {
    const textElement = contactTextRef.current;
    if (!textElement) return;

    const text = textElement.innerText.split(""); // Split text into letters
    textElement.innerHTML = ""; // Clear existing text

    // Create spans for each letter
    text.forEach(letter => {
      const span = document.createElement('span');
      span.innerHTML = letter === " " ? "&nbsp;" : letter; // Preserve spaces
      textElement.appendChild(span);
    });

    // GSAP Animation
    gsap.fromTo(textElement.children, {
      y: "100%"
    }, {
      y: "0%",
      duration: 0.5,
      stagger: 0.03,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
      },
      onComplete: function(){
        gsap.to(".contact-img",{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1
        })
      }
    });

  }, []);

  return (
    <div className='contact h-[50vh] xl:h-[70vh] 2xl:h-[100vh] leading-[1] w-full flex flex-col gap-10 justify-center items-center relative'>
      {/* Animated Text */}
      <div className='relative text-[10vw] pointer-events-none'>
        <h1 ref={contactTextRef} className='contact-text font-[Hanson] flex overflow-hidden'>Let's talk!</h1>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-[5vw] md:text-2xl font-extralight'>
          Contact at <span className='text-blue-500 font-medium'>mubarak54862@gmail.com</span>
        </h1>
        <h1 className='text-[5vw] md:text-2xl font-extralight'>
           <span className='text-blue-500 font-medium'>+91 9725569168</span>
        </h1>
      </div>

      <div className='flex justify-between pb-5 text-4xl w-[50%] md:w-[20%] '>
        <FaLinkedin className='cursor-pointer duration-200 hover:text-[#0073B1] transition-all' />
        <FaGithub className='cursor-pointer duration-200 transition-all' />
        <FaDiscord className='cursor-pointer duration-200 hover:text-[#5562EA] transition-all' />
      </div>

      {/* Decorative Image */}
      <div className="contact-img blur-[10px] scale-[.7] opacity-[0] h-fit w-fit drop-shadow-2xl absolute top-10 sm:top-0 xl:top-36 right-10 md:right-36 rotate-img">
        <img className="w-[15vw] md:w-[10vw] " src="/images/Mask group-4.webp" alt="Contact Element" />
      </div>
    </div>
  );
};

export default Contact;
