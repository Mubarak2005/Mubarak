import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);
    
    useEffect(() => {
        if (navBar) {
            gsap.to(".b1", { rotate: 45, position: "absolute" });
            gsap.to(".b2", { rotate: -45, position: "absolute" });
            gsap.to(".nav-section", {
                onStart:function(){
                    document.querySelector("body").style.overflow = "hidden"
                    document.querySelector(".main").style.filter = "blur(5px)"
                    document.querySelector(".main").style.pointerEvents = "none";
                    document.querySelector(".main").style.opacity = ".5"

                        if(window.innerWidth <= 700){
                        gsap.to(".nav-section",{
                            width: "100vw"
                        })
                    }else if(window.innerWidth <= 1200){
                        gsap.to(".nav-section",{
                            width: "65vw"
                        })
                    }else{
                        gsap.to(".nav-section",{
                            width: "45vw"
                        })
                    }
                },
                duration: 1,
                borderTopLeftRadius: "0%",
                borderBottomLeftRadius: "0%",
                ease: "expo.out",
            });
            gsap.from(".nav-h1", {
                delay: .3,
                y: 100,
                ease: "expo",
                stagger: 0.1,
                filter: "blur(10px)",
                onComplete:function(){
                    gsap.to(".nav-el",{
                        scale: 1,
                        opacity: 1
                    })
                }
            });

            // document.querySelectorAll(".nav-h1").forEach((el) => {
            //     el.addEventListener("mouseenter", () => {
            //         console.log(el)
            //     });
            // });

        } else {
            document.querySelector("body").style.overflow = "visible";
            document.querySelector(".main").style.filter = "blur(0px)";
            document.querySelector(".main").style.pointerEvents = "all";
            document.querySelector(".main").style.opacity = "1"
            gsap.to(".b1", { rotate: 0, position: "relative" });
            gsap.to(".b2", { rotate: 0, position: "relative" });
            gsap.to(".nav-section", {
                width: "0vw",
                duration: 1,
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
                ease: "expo.out",
                onStart:function(){
                    gsap.to(".nav-el",{
                        scale: 0,
                        opacity: 0
                    })
                }
            });
        }
        gsap.to(".navbar-l", {
            delay: 5,
            opacity: 1,
            filter: "blur(0px)"
        });
    }, [navBar]);

    const clickBurger = () => {
        setNavBar(!navBar);
    };

    return (
        <>
            <div className={`navbar-l opacity-0 blur-[10px] fixed font-[Azonix] text-[#fff] z-[991] top-5 w-full flex justify-between items-center px-3 md:px-10 mix-blend-difference`}>
                <div className="">
                    <img className='w-[10vw] md:w-[7vw] lg:w-[6vw] xl:w-[5vw] 2xl:w-[4vw] ' src="./src/assets/mk_logo.webp" alt="" />
                </div>
                <div onClick={clickBurger} className="burger pointer-events-auto h-5 w-12 flex flex-col justify-center items-center gap-2 cursor-pointer relative">
                    <div className={`b1 w-10 md:w-12 h-[.1rem] bg-[#fff] relative`}></div>
                    <div className={`b2 w-10 md:w-12 h-[.1rem] bg-[#fff] relative`}></div>
                </div>
            </div>
            
            <div className={`nav-section h-full text-[#000] bg-[#dedede] font-[Brigends] flex justify-start items-center fixed right-0 top-0 z-[990] ${navBar ? 'p-5' : 'p-0'}  `}>
                <div className='nav-el h-fit w-fit rotate-img  opacity-[0] scale-[.5] absolute right-40 top-40 z-[992] '>
                        <img loading="lazy" className='w-[10rem] absolute z-[1] ' src="./src/assets/CS_Star_4.webp" alt="Navbar Element" />
                        <img loading="lazy" className='w-[10rem] blur-lg ' src="./src/assets/CS_Star_4.webp" alt="Navbar Element" />
                    </div>
                <div className={`h-full ${navBar ? 'visible' : 'hidden'} w-full flex flex-col justify-center items-start`}>
                    {/* <h1 className='w-full h-full font-[Abuget] gradient-anim text-[10vw] px-5 text-center'>Menu</h1> */}
                    <h1 className='w-fit h-full px-5 text-[12vw] sm:text-[10vw] md:text-[5vw] relative group hover:cursor-pointer flex justify-center items-center'>Menu
                        <span className='absolute left-1/2 -translate-x-1/2 font-[Abuget] gradient-anim text-[20vw] sm:text-[15vw] md:text-[7vw] px-5 text-center'>Menu</span>
                    </h1>
                    
                
                    <div className='w-full h-full text-[8vw] sm:text-[6vw] md:text-[3.5vw] xl:text-[2.5vw] flex justify-center items-start flex-col'>
                        {['Home', 'About', 'Projects', 'Contact Me'].map((item, index) => (
                            <div key={index} className='w-full border-b-[1px] border-[#000] relative overflow-hidden'>
                                <h1 className='nav-h1 w-fit md:px-5 relative group hover:cursor-pointer flex items-center md:gap-2'>
                                    <MdArrowOutward className='hidden xl:block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300' />
                                    {item}
                                    <span className='text-[10vw] md:text-[4vw] opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Abuget] gradient-anim2 duration-500 group-hover:opacity-100'>{item}</span>
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className='w-full h-full text-[10vw] md:text-[3vw] flex justify-center gap-20'>
                        <div className='flex justify-center items-center'>
                            <FaLinkedin className='cursor-pointer hover:text-[#0073B1] duration-200 transition-all' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <FaGithub className='cursor-pointer duration-200 transition-all' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <FaDiscord className='cursor-pointer hover:text-[#5562EA] duration-200 transition-all' />
                        </div>
                    </div>
                </div>

                {/* <div className={`nav-section-in ${navBar ? 'visible' : 'hidden'} w-[100%] h-full flex flex-col md:flex-row justify-between items-center relative`}>
                    <div className='w-full h-full flex flex-col py-20 gap-5'>
                        <div className="top h-1/2 w-full flex gap-5">
                            <div className='home-txt h-full w-full border-[2px] border-[#000] rounded-[50px] text-[3vw] uppercase flex justify-center items-center'>Home</div>
                            <div className='home-txt h-full w-full border-[2px] border-[#000] rounded-[50px] text-[3vw] uppercase flex justify-center items-center'>About</div>
                            <div className='home-txt h-full w-full border-[2px] border-[#000] rounded-[50px] text-[3vw] uppercase flex justify-center items-center'>Contact</div>
                        </div>
                        <div className="top h-1/2 w-full flex gap-5">
                            <div className='home-txt h-full w-full border-[2px] border-[#000] rounded-[50px] text-[3vw] uppercase flex justify-center items-center'>Projects</div>
                            <div className='home-txt h-full w-full border-[2px] border-[#000] rounded-[50px] text-[3vw] uppercase flex justify-center gap-20 items-center'>
                                <FaLinkedin className='cursor-pointer' />
                                <FaGithub className='cursor-pointer' />
                                <FaDiscord className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Navbar;