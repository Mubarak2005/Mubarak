import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectText from './ProjectText';

const ProjectSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalScroll = document.querySelector(".horizontal-scroll");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalScroll,
        start: "0% 0%",
        end: "bottom 100%",
        scrub: true,
      }
    });

    tl.to(".slide", { x: "-200%" }, 'a')
      .to(".slide h1", { x: "30%" }, 'a')
      .to(".back", { x: "150%" }, 'a');
  }, []);

  const projects = [
    {
      title: "Redesigned Amul",
      back: "./src/assets/Mask group-9.webp",
      color: "#8e44ad",
      imgSrc: "./src/assets/amul.gif",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive"]
    },
    {
      title: "Redesigned Asian Paints",
      back: "./src/assets/Mask group-11.webp",
      color: "#f39c12",
      imgSrc: "./src/assets/asian-paints.gif",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive", "Shery JS"]
    },
    {
      title: "E Commerce",
      back: "./src/assets/Mask group-13.webp",
      color: "#2ecc71",
      imgSrc: "./src/assets/e-commerce.gif",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"]
    }
  ];

  return (
    <div className="project w-full relative">
      <ProjectText />
      <div className='w-full mt-40'>
        <div className='horizontal-scroll h-[300vh] w-full flex font-[Hanson] relative'>
          <div className='horizontal-sticky h-screen w-full flex sticky top-0 left-0 z-10 overflow-hidden'>
            {projects.map((project, index) => (
              <div key={index} className={`slide h-screen flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-5 md:gap-10 justify-center items-center flex-shrink-0 w-screen p-10 relative border-r-[.5px] border-[#9d9dea5e]`}>
                <div className={`w-full h-full font-[Abuget] leading-none text-[${project.color}] blur-xl md:blur-2xl text-[50vw] flex justify-center items-center absolute top-0 left-0 z-[-1]`}>
                  {/* <img className='back w-[70vw] md:w-[35vw]' src={project.back} alt="Project element" /> */}
                  <h1 className='gradient-anim '>{project.color}</h1>
                </div>
                <h1 className={`title text-[7vw] md:text-[5vw] absolute ${index % 2 === 0 ? "top-28" : "bottom-24"} left-5 drop-shadow-[0_0_30px_rgba(0,0,0,1)]`}>{project.title}</h1>
                <img className='md:w-[50vw]' src={project.imgSrc} alt={project.title} />
                <div className='font-[Hanson] w-full md:w-[50vw] flex flex-wrap items-end gap-3'>
                  {project.technologies.map((skill, id) => (
                    <span key={id} className='px-5 py-3 text-xs md:text-lg border-[.5px] border-[#9d9dea5e] rounded-full '>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;