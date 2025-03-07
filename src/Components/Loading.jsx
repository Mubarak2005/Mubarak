import gsap, { Expo } from 'gsap';
import React, { useEffect, useRef } from 'react';

const Loading = () => {
    const textRef = useRef(null);

    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden";
        if (!textRef.current) return;
        
        const textContainer = textRef.current;
        const letters = textContainer.innerText.split("");
        textContainer.innerHTML = "";

        letters.forEach((letter) => {
            const span = document.createElement("span");
            span.innerHTML = letter;
            textContainer.appendChild(span);
        });

        const tl = gsap.timeline();
        tl.from(".loading-m2 span", { y: "100%", stagger: 0.02, delay: 0.4, ease: Expo.easeOut });

        const loadingAnimation = window.innerWidth <= 751 ? {
            scale: 150,
            y: -800,
            x: -400,
        } : {
            scale: 100,
            y: -1000,
            x: -400,
            background: "#0b0b14",
        };

        tl.to(".loading-m1", {
            delay: 3,
            ...loadingAnimation,
            onComplete: () => {
                document.querySelector(".loading-section").style.display = "none";
                document.querySelector("body").style.overflow = "visible"
            }
        });

        let grow = 0;
        const h5timer = document.querySelector(".loading-per");
        const interval = setInterval(() => {
            if (grow <= 100) {
                h5timer.innerHTML = grow++;
            }
            gsap.to(".loading-per-all", { left: "0%", duration: 3 });
        }, 25);

        return () => clearInterval(interval); // Cleanup interval on unmount

    }, []);

    return (
        <div className='loading-section h-screen w-full p-10 text-[#07070d] fixed top-0 left-0 z-[999] flex justify-center items-center bg-[#e2e2e2] overflow-hidden'>
            <div className='loading-m1 font-[Brigends] text-3xl md:text-6xl overflow-hidden'>
                <h1 className='loading-m2 flex' ref={textRef}>Mubarak</h1>
            </div>
            <div className="loading-per-all ease-linear font-[Hanson] text-5xl md:text-9xl flex justify-between items-center absolute bottom-10 right-0">
                <div className='flex'>
                    <h1 className="loading-per">0</h1>
                    <span>%</span>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <h1 className='h-[1px] w-full bg-[#07070d]'></h1>
                </div>
            </div>
        </div>
    );
};

export default Loading;
