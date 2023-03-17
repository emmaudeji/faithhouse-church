import React from 'react'
import Link from 'next/link'
import OutlineButtonBlack from '../buttons/OutlineButtonBlack'
import ImageCard from '../cards/ImageCard'

const WhyUs1 = () => {
  return (
    <div className='section-container-grid'>
      
      <div className='flex-1'>
          <ImageCard
        cardImage='men-in-worship.jpg'/>
      </div>

      <div className="flex-1 grid ">
        <h1 className="text-4xl text-zinc-400 font-bold">
          We are not just a church
        </h1>
        <h1 className="text-3xl font-bold pb-4">
            We are a community of impact driven people passionate about raising leaders of integrity and excellence for national transformation
        </h1>
        <Link href='./about'>
          <OutlineButtonBlack>
            About us
          </OutlineButtonBlack>
        </Link>
      </div>
    </div>
  )
}

export default WhyUs1