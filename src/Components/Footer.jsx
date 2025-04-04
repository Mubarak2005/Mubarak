import React from 'react'


const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "auto", block: "start" }); // "auto" makes it instant
    }
  };
  return (
    <div className='w-full relative px-5 md:px-10 '>
      <div className='w-full font-[Hanson] flex flex-col md:flex-row gap-10 '>
        <div className='w-full md:w-1/2 h-1/2 md:h-full relative'>
          <div className="h-fit w-fit drop-shadow-2xl absolute -top-10 md:top-20 left-0 md:left-20 rotate-img ">
            <img className="w-20" src="/images/Mask group-12.webp" alt="Footer Element" />
          </div>
          {/* <h1 className='text-[5vw] leading-none gradient-anim2 font-[Abuget] px-4'>Mubarak Ansari</h1> */}
          <h1 className='text-[10vw] md:text-[5vw] leading-[1vw] font-[Brigends] text-center '><span className='font-[Abuget] px-3 text-[15vw] md:text-[10vw] text-[#ef3750] leading-none relative z-[1] '>Mubarak</span> Ansari</h1>
        </div>
        <div className='w-full md:w-1/2 h-1/2 md:h-full text-[5vw] md:text-[2vw] flex flex-row md:flex-col justify-between md:justify-start items-center md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0px] border-[#9d9dea5e] '>
          <h1 className='w-full text-[7vw] md:text-[2.6vw] mt-5 leading-none text-center'>Quick Links</h1>
          <div className='w-full flex flex-col justify-center items-center mt-5'>
            <h2 className='cursor-pointer hover:underline'>
              <span onClick={() => scrollToSection("home")} className='flex items-center'>Home</span>
            </h2>
            <h2 className='cursor-pointer hover:underline'>
              <span onClick={() => scrollToSection("about")} className='flex items-center'>About</span>
            </h2>
            <h2 className='cursor-pointer hover:underline'>
              <span onClick={() => scrollToSection("projects")} className='flex items-center'>Projects</span>
            </h2>
          </div>
        </div>
      </div>
      <div className='w-full py-5 mt-10 border-t-[1px] border-[#9d9dea5e] '>
        <h1 className='text-center text-[3vw] md:text-[1vw] '>&copy; {new Date().getFullYear()} Mubarak Ansari. All rights reserved.</h1>
      </div>
    </div>
  )
  
}

export default Footer
