import React, { useEffect } from 'react';
import ProjectText from './ProjectText';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import gsap from 'gsap';

const ProjectSection = () => {
  const projects = [
    {
      title: "Redesigned Amul",
      color: "#8e44ad",
      imgSrc: "/images/amul.gif",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive"]
    },
    {
      title: "Redesigned Asian Paints",
      color: "#f39c12",
      imgSrc: "/images/asian-paints.gif",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive", "Shery JS"]
    },
    {
      title: "E Commerce",
      color: "#2ecc71",
      imgSrc: "/images/e-commerce.gif",
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
    <div className="project w-full relative">
      <ProjectText />
          <div className='project-in mt-20 h-full w-full flex flex-col z-10 overflow-hidden relative font-[Hanson]'>
            <div className="project-img1 h-fit w-fit drop-shadow-2xl absolute top-[30%] left-14 ">
              <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src="/images/CS_Triangle_4.webp" alt="Before About Element" />
            </div>
            <div className="project-img1 h-fit w-fit drop-shadow-2xl absolute top-[60%] right-14 ">
              <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src="/images/CS_Flower_7.webp" alt="Before About Element" />
            </div>
            {projects.map((project, index) => (
              <div key={index} className={`lg:h-screen flex flex-col gap-10 justify-center items-center flex-shrink-0 w-screen p-3 md:p-10 relative mb-28 `}>
                
                <h1 className={`title text-[7vw] md:text-[3vw] leading-none w-full ${index % 2 === 0 ? "text-start" : "md:text-end"} drop-shadow-[0_0_30px_rgba(0,0,0,1)]`}>
                  {project.title}
                </h1>
                <div className={`w-full flex flex-col justify-center items-center gap-10 md:gap-5 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <img className='rounded-2xl w-full md:w-1/2' src={project.imgSrc} alt={project.title} />
                  <div className='w-full h-full flex flex-col justify-center gap-40 items-center '>
                    <div className='w-full flex flex-col justify-between items-start gap-10 md:gap-32 '>
                      <div className='flex justify-start gap-3 items-center flex-wrap'>
                      {project.technologies.map((skill, id) => (
                        <span key={id} className='px-5 py-3 text-xs md:text-lg border-[.5px] border-[#9d9dea5e] rounded-full'>
                          {skill}
                        </span>
                      ))}
                      </div>
                      <div className='w-full flex justify-end md:justify-start items-center gap-2 text-xl md:text-3xl'>
                        live site <FaArrowUpRightFromSquare />
                        {/* <IoMdInformationCircleOutline /> */}
                      </div>
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
