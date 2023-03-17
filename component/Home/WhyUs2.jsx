import React from 'react'
import Link from 'next/link'
import OutlineButtonBlack from '../buttons/OutlineButtonBlack'
import ImageCard from '../cards/ImageCard'
import ConnectButton from '../buttons/ConnectButton'

const WhyUs2 = () => {
  return (
    <div className='section-container-grid'>
      
      <div className="flex-1 grid ">
        <h1 className="text-4xl text-zinc-300 font-bold">
          Complete Transformation
        </h1>
        <h1 className="text-3xl font-bold pb-4">
            You will enjoy the word of faith, learn practical leadership and  success principles, receive prophetic and deliverance prayers, and enjoy praise and worship 
        </h1>
        <Link href='./connect'>
          <OutlineButtonBlack>
            <ConnectButton/> 
          </OutlineButtonBlack>
        </Link>
      </div>


      <div className='flex-1'>
          <ImageCard
        cardImage='hunger-for-god-1.jpg'/>
      </div>
    </div>
  )
}

export default WhyUs2