import React from "react";

const BeforeAbout = () => {
  return (
    <div className="before-about h-[60vh] sm:h-[70vh] md:h-[110vh] w-full flex justify-center items-center relative">
      <div className="h-fit w-fit text-[9vw] font-[Brigends] uppercase leading-[7vw] tracking-tight flex flex-col justify-center items-center relative">
        <h1 className="about-h font-[Abuget] gradient-anim text-[15vw] md:text-[10vw] capitalize leading-none text-[#5ef23c] absolute top-[-30%]  md:top-[-20%] z-[1]">
          Crafting
        </h1>
        <h1 className="expr">Interactive </h1>
        <h1 className="expr">and</h1>
        <h1 className="font-[Abuget] gradient-anim2 p-3 text-[15vw] md:text-[10vw] capitalize leading-none text-[#22a800] absolute z-[1]">
          Modern
        </h1>
        <h1 className="expr mt-7 md:mt-12 ">Web</h1>
        <h1 className="expr">Experiences</h1>
      </div>
      
      <div className="h-fit w-fit absolute left-2 md:left-10 bottom-20 md:top-1/2 rotate-img ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src={require("./src/assets/Mask group-9.webp")} alt="Before About Element" />
      </div>
      {/* <div className="h-fit w-fit absolute left-2 md:left-10 bottom-20 md:top-1/2 rotate-img ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] blur-sm drop-shadow-2xl " src="./src/assets/Mask group-9.webp" alt="Before About Element" />
      </div> */}
      <div className="h-fit w-fit drop-shadow-2xl absolute top-32 right-14 rotate-img ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] drop-shadow-2xl " src={require("./src/assets/Mask group-6.webp")} alt="Before About Element" />
      </div>
      {/* <div className="h-fit w-fit drop-shadow-2xl absolute top-32 right-14 rotate-img ">
        <img loading="lazy" className="w-[15vw] lg:w-[10vw] blur-md drop-shadow-2xl " src="./src/assets/Mask group-6.webp" alt="Before About Element" />
      </div> */}
    </div>
  );
};

export default BeforeAbout;
