import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-scroll';

const Navbar = ({lenis}) => {

    const [navBar, setNavBar] = useState(false);
    
    useEffect(() => {
        const main = document.querySelector(".main");
        
        if (navBar) {
            if (lenis) lenis.stop();
            gsap.to(".b1", { rotate: 45, position: "absolute" });
            gsap.to(".b2", { rotate: -45, position: "absolute" });
            gsap.to(".nav-section", {
                onStart: () => {
                    document.body.style.overflow = "hidden";
                    main.style.filter = "blur(5px)";
                    main.style.pointerEvents = "none";
                    main.style.opacity = "0.5";

                    const navWidth = window.innerWidth <= 700 ? "100vw" :
                                     window.innerWidth <= 1200 ? "65vw" : "45vw";
                    gsap.to(".nav-section", { width: navWidth });
                },
                duration: 1,
                borderTopLeftRadius: "0%",
                borderBottomLeftRadius: "0%",
                ease: "expo.out",
            });
            gsap.from(".nav-h1", {
                delay: 0.3,
                y: 100,
                ease: "expo",
                stagger: 0.1,
                filter: "blur(10px)",
                onComplete: () => {
                    gsap.to(".nav-el", { scale: 1, opacity: 1 });
                }
            });
        } else {
            const closeNavbar = ()=>{
                if (lenis) lenis.start();
                document.body.style.overflow = "visible";
                main.style.filter = "blur(0px)";
                main.style.pointerEvents = "all";
                main.style.opacity = "1";
                gsap.to(".b1", { rotate: 0, position: "relative" });
                gsap.to(".b2", { rotate: 0, position: "relative" });
                gsap.to(".nav-section", {
                width: "0vw",
                duration: 1,
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
                ease: "expo.out",
                onStart: () => {
                    gsap.to(".nav-el", { scale: 0, opacity: 0 });
                }
            });
            }
            closeNavbar()
        }
        gsap.to(".navbar-l", {
            delay: 6.4,
            opacity: 1,
            filter: "blur(0px)"
        });
    }, [navBar]);

    const clickBurger = () => {
        setNavBar(prev => !prev);
    };

    return (
        <>
            <div className={`navbar-l opacity-0 blur-[10px] fixed font-[Azonix] text-[#fff] z-[991] top-5 w-full flex justify-between items-center px-3 md:px-10 mix-blend-difference`}>
                <div>
                    <a href="https://mubarak-ansari.vercel.app/"><img className='w-[7vh]' src="/images/mk_logo.webp" alt="Logo" loading="lazy" /></a>
                </div>
                <div onClick={clickBurger} className="burger pointer-events-auto h-5 w-12 flex flex-col hover:flex-col-reverse justify-center items-center gap-2 hover:gap-3 ease-in-out transition-all duration-300 cursor-pointer relative">
                    <div className={`b1 w-10 md:w-12 h-[.1rem] bg-[#f0f0fdb6] relative`}></div>
                    <div className={`b2 w-10 md:w-12 h-[.1rem] bg-[#f0f0fdb6] relative`}></div>
                </div>
            </div>
            
            <div className={`nav-section h-full text-[#000] bg-[#dedede] font-[Brigends] flex justify-start items-center fixed right-0 top-0 z-[990] ${navBar ? 'p-5' : 'p-0'}`}>
                <div className='nav-el h-fit w-fit rotate-img opacity-[0] scale-[.5] absolute right-10 sm:right-20 md:right-40 top-40 z-[992]'>
                    <img loading="lazy" className='w-[10rem] absolute z-[1]' src="/images/CS_Star_4.webp" alt="Navbar Element" />
                    <img loading="lazy" className='w-[10rem] blur-lg' src="/images/CS_Star_4.webp" alt="Navbar Element" />
                </div>
                <div className={`h-full ${navBar ? 'visible' : 'hidden'} w-full flex flex-col justify-center items-start`}>
                    <h1 className='w-fit h-full px-5 text-[12vw] sm:text-[10vw] md:text-[5vw] relative group hover:cursor-pointer flex justify-center items-center'>Menu
                        <span className='absolute left-1/2 -translate-x-1/2 font-[Abuget] gradient-anim text-[20vw] sm:text-[15vw] md:text-[7vw] px-5 text-center'>Menu</span>
                    </h1>
                    
                    <div className='w-full h-full text-[8vw] sm:text-[6vw] md:text-[3.5vw] xl:text-[2.5vw] flex justify-center items-start flex-col'>
                        {['Home', 'About', 'Projects', 'Contact Me'].map((item, index) => {
                            const sectionId = item.toLowerCase().replace(/\s+/g, "-"); // Convert to lowercase & replace spaces
                            return (
                                <div key={index} className='w-full border-b-[1px] border-[#000] relative overflow-hidden'>
                                    <h1 className='nav-h1 w-fit md:px-5 relative group hover:cursor-pointer flex items-center md:gap-2'>
                                        <Link className='flex items-center' to={sectionId} smooth={false} duration={500} spy={true} offset={-70} onClick={() => setNavBar(false)} >
                                        <MdArrowOutward className='hidden xl:block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300' />{item}</Link>
                                        <span className='text-[10vw] md:text-[4vw] pointer-events-none opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Abuget] gradient-anim2 duration-500 group-hover:opacity-100'>{item}</span>
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                    <div className='w-full h-full text-[10vw] md:text-[2vw] flex justify-center items-center gap-20'>
                        <a className='p-4 border-[.5px] border-[#000000b0] rounded-full ' href="https://www.linkedin.com/in/mubarak-ansari-4a6312264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='cursor-pointer' />
                        </a>
                        <a className='p-4 border-[.5px] border-[#000000b0] rounded-full '  href="https://github.com/Mubarak2005" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='cursor-pointer' />
                        </a>
                        <a className='p-4 border-[.5px] border-[#000000b0] rounded-full '  href="https://discord.com/channels/mubarak0653" target="_blank" rel="noopener noreferrer">
                            <FaDiscord className='cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
