import gsap from 'gsap';
import React, { useEffect } from 'react';

const Loading = ({ lenis }) => {
    useEffect(() => {
        if (!lenis) return; // Ensure lenis is defined before using it

        const tl = gsap.timeline();
        document.body.style.overflow = "hidden"; // Disable scrolling
        lenis.stop(); // Stop Lenis during loading
        
        tl.fromTo(".load-text span",
            { opacity: 0,filter: "blur(10px)", },
            { opacity: 1,filter: "blur(0px)", stagger: 0.1, delay: 0.3, duration: 0.8, ease: "power2.out",}
        ).to(".load-text",{
            scale:1.1,
            duration:2,
        }).to(".load-text span", {
            filter: "blur(10px)",
            opacity: 0,
            duration: 0.5,
            // delay: 1,
            ease: "power2.out",
            stagger: 0.1,
        }).to(".loading-section", {
            opacity: 0,
            visibility: "hidden", // Use visibility instead of display: none
            duration: 0.3,
            onComplete: () => {
                document.body.style.overflow = "visible"; // Re-enable scrolling
                lenis.start(); // Restart Lenis after animation
            }
        });

        return () => {
            tl.kill(); // Cleanup GSAP animations
        };
    }, [lenis]); // Dependency array includes lenis

    return (
        <div className='loading-section h-screen w-full p-10 text-[#fff] fixed top-0 left-0 z-[999] flex justify-center items-center bg-[#07070d] overflow-hidden'>
            <h1 className='load-text text-[3vw] md:text-[1.2vw] '>
                <span className='text-orange-400'>n</span>
                <span className='text-orange-400'>p</span>
                <span className='text-orange-400'>m</span>
                <span> </span>
                <span>r</span>
                <span>u</span>
                <span>n</span>
                <span> </span>
                <span>d</span>
                <span>e</span>
                <span>v</span>
            </h1>
        </div>
    );
};

export default Loading;
