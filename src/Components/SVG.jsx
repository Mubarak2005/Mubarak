import React from 'react'

const SVG = () => {
  return (
    <div>
        <div className='relative h-screen w-full flex justify-center items-center'>
        {/* <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
            <filter id='noiseFilter'>
                <feTurbulence 
                type='frantalNoise' 
                baseFrequency='6.65' 
                numOctaves='.01' 
                stitchTiles='stitch'/>
                </filter>
  
            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg> */}
        <div className="circle rounded-full"></div>
        </div>
    </div>
  )
}

export default SVG