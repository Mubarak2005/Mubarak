import React, { useEffect } from 'react';
import ProjectText from './ProjectText';
import { MdOutlineArrowOutward } from "react-icons/md";

import gsap from 'gsap';

const ProjectSection = () => {
  const projects = [
    {
      title: "Redesigned Amul",
      color: "#8e44ad",
      imgSrc: "/images/amul.gif",
      liveLink: "https://mubarak2005.github.io/Amul/",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive"]
    },
    {
      title: "Redesigned Asian Paints",
      color: "#f39c12",
      imgSrc: "/images/asian-paints.gif",
      liveLink: "https://mubarak2005.github.io/AsianPaints/",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive", "Shery JS"]
    },
    {
      title: "E Commerce",
      color: "#2ecc71",
      imgSrc: "/images/e-commerce.gif",
      liveLink: "https://mubarak2005.github.io/Ecommerce/",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"]
    }
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-in",
        start: "top bottom",
        end: "bottom top",
        scroller: "body",
        scrub: .2,
      },
    });
    timeline.to(".project-img1", {
      rotation: -360,
      ease: "power1.inOut" 
    },'a');
    timeline.to(".project-img2", {
      y:-50,
      rotation: 360,
      ease: "power1.inOut" 
    },'a');
  }, []);

  return (
    <div id='projects' className="projects w-full relative">
      <ProjectText />
          <div className='project-in mt-20 h-full w-full flex flex-col z-10 overflow-hidden relative font-[Hanson]'>
            <div className="project-img1 h-fit w-fit drop-shadow-2xl absolute top-[30%] left-14 ">
              <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src="/images/CS_Triangle_4.webp" alt="Before About Element" />
            </div>
            <div className="project-img2 h-fit w-fit drop-shadow-2xl absolute top-[60%] right-14 ">
              <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src="/images/CS_Flower_7.webp" alt="Before About Element" />
            </div>
            {projects.map((project, index) => (
              <div key={index} className={`flex flex-col gap-10 justify-center items-center flex-shrink-0 w-screen p-3 md:p-10 relative mb-28 `}>
                
                <h1 className={`title text-[7vw] md:text-[3vw] leading-none w-full ${index % 2 === 0 ? "text-start" : "lg:text-end"} drop-shadow-[0_0_30px_rgba(0,0,0,1)]`}>
                  {project.title}
                </h1>
                <div className={`w-full flex flex-col justify-center items-center gap-10 lg:gap-5 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  <div className='w-full relative'>
                    <img className='rounded-2xl w-full' src={project.imgSrc} alt={project.title} />
                    <span className='absolute text-3xl md:text-4xl mix-blend-difference bottom-2 md:bottom-5 right-2 md:right-5'>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <MdOutlineArrowOutward />
                      </a>
                    </span>
                  </div>
                  <div className='w-full h-full flex flex-col justify-center gap-40 items-center '>
                    <div className='w-full flex flex-col justify-between items-start gap-10 md:gap-32 '>
                      <div className='flex justify-start gap-3 items-center flex-wrap'>
                      {project.technologies.map((skill, id) => (
                        <span key={id} className='px-5 py-3 text-xs md:text-lg border-[.5px] border-[#9d9dea5e] rounded-full'>
                          {skill}
                        </span>
                      ))}
                      </div>
                      {/* <div className='w-full text-xl md:text-3xl'>
                        <a className='flex justify-end md:justify-start items-center gap-2' href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          live site <FaArrowUpRightFromSquare />
                        </a>
                      </div> */}
                    </div>
                      

                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}

export default ProjectSection;
