import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa6";

const Contact = () => {
  const contactTextRef = useRef(null);

  useEffect(() => {
    const textElement = contactTextRef.current;
    if (!textElement) return;

    const text = textElement.innerText.split("");
    textElement.innerHTML = ""; 

    text.forEach(letter => {
      const span = document.createElement('span');
      span.innerHTML = letter === " " ? "&nbsp;" : letter;
      textElement.appendChild(span);
    });

    gsap.fromTo(textElement.children, {
      y: "100%"
    }, {
      y: "0%",
      duration: 0.5,
      stagger: 0.03,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".contact-me",
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
    <div id='contact-me' className='contact-me h-[50vh] xl:h-[90vh] leading-[1] w-full flex flex-col gap-10 justify-center items-center relative'>
      <div className='relative text-[10vw] pointer-events-none'>
        <h1 ref={contactTextRef} className='contact-text font-[Hanson] flex overflow-hidden'>Let's talk!</h1>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-[5vw] md:text-2xl font-extralight'>
          Contact at <span className='text-blue-500 font-medium'><a href="mailto:mubarak54862@gmail.com">mubarak54862@gmail.com</a></span>
        </h1>
        <h1 className='text-[5vw] md:text-2xl font-extralight mt-2'>
           <span className='text-blue-500 font-medium'><a href="tel:+919725569168">+91 9725569168</a></span>
        </h1>
      </div>

      <div className='flex justify-between pb-5 text-[4vw] md:text-[2vw] w-[50%] md:w-[20%] '>
          <a className='p-4 border-[.5px] border-[#ffffff48] rounded-full '  href="https://www.linkedin.com/in/mubarak-ansari-4a6312264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='cursor-pointer' />
          </a>
          <a className='p-4 border-[.5px] border-[#ffffff48] rounded-full '  href="https://github.com/Mubarak2005" target="_blank" rel="noopener noreferrer">
            <FaGithub className='cursor-pointer' />
          </a>
          <a className='p-4 border-[.5px] border-[#ffffff48] rounded-full '  href="https://discord.com/channels/mubarak0653" target="_blank" rel="noopener noreferrer">
            <FaDiscord className='cursor-pointer' />
          </a>
      </div>

      <div className="contact-img blur-[10px] scale-[.7] opacity-[0] h-fit w-fit drop-shadow-2xl absolute top-10 sm:top-0 xl:top-24 right-10 md:right-36 rotate-img">
        <img className="w-[15vw] md:w-[10vw] " src="/images/Mask group-4.webp" alt="Contact Element" />
      </div>
    </div>
  );
};

export default Contact;
