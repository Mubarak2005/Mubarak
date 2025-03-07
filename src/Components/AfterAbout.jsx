import gsap from 'gsap';
import React, { useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";

const AfterAbout = () => {
  useEffect(() => {
    document.querySelector(".circle-a").addEventListener("mouseenter",()=>{
      gsap.to(".circle-a",{
        scale: ".93",
      },)
      
      gsap.to(".arrow",{
        scale: 1.4,
      })
    })
    document.querySelector(".circle-a").addEventListener("mouseleave",()=>{
      gsap.to(".circle-a",{
        scale: "1"
      })
      gsap.to(".arrow",{
        scale: 1,
      })
    })
    
  }, []);

  return (
    <div className='h-screen w-full overflow-hidden flex flex-col justify-center relative bg-[#555] '>
      <div className='font-[Hanson] text-[#0b0b14] w-[1400vw] leading-none uppercase text-9xl py-5 flex flex-col gap-2'>
        {/* {Array(3).fill().map((_, index) => (
          <h1 key={index} className={`${index % 2 === 0 ? "after-about-text" : "after-about-text2"} w-fit flex-shrink-0`}>
            Mubarak Mubarak Mubarak Mubarak Mubarak Mubarak
          </h1>
        ))} */}
        <h1></h1>
      </div>
      <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className='circle-a bg-[#0b0b14] rounded-full p-5 w-[20rem] relative ease-linear transition-all duration-[5] '>
          <img className='' src="./src/assets/round.png" alt="Round Image" />
          <FaArrowDown className='arrow scale-[1] text-6xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ' />
        </div>
      </div>
    </div>
  )
}

export default AfterAbout