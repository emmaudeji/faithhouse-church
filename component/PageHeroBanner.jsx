import React from 'react'
import Link from 'next/link'
import { newDate } from '@/hooks/newDate'
import SuccessThought from './SuccessThought'

const PageHeroBanner = ({heading, pageTitle, image}) => {
  return (
    <div className=' h-[65vh] capitalize relative '>
      
      {/* background image */}
      <div className='w-full h-[60vh] overflow-hidden'>
        <img src={image ? image : "image1.jpg"} alt="church service" 
        className='object-cover w-full h-full'/>
      </div>
      
      <div className='section-container absolute top-0 h-[60vh] w-full flex items-center justify-center bg-gradient-to-t from-black text-left text-white '>

        <div className='px-6 sm:px-16 md:px-36 absolute bottom-22 sm:pr-[30vw] lg:pr-[45vw]'>
          <h4 className='text-xl'>{pageTitle}</h4>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold '>{heading} </h1>
        </div>
      </div>

      <div className='right-0 bottom-0 py-6  bg-yellow-500  w-[95%] md:w-[60vw] absolute pr-6 sm:pr-16 md:pr-36 pl-10 md:pl-14 flex items-center rounded-l-full overflow-hidden cursor-pointer hover:scale-105 duration-300'>
        <SuccessThought/>
      </div>
    </div>
  )
}

export default PageHeroBanner