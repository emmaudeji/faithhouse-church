import React from 'react'
import Link from 'next/link'
import OutlineButtonBlack from '../buttons/OutlineButtonBlack'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Team = () => {
  return (
    <div className='section-container items-center py-24 gap-10'>
      <div className="flex-1 flex justify-end ">
        <div className="h-full w-[400px] relative right-0">
          <img src="/rev-kenna-emmanuel-web.png" alt="team-leaders" 
          className='w-full h-full '/>
        </div>
        <div className="img absolute">

        </div>
      </div>

      <div className='flex-1 grid gap-3'>
        <h1 className="text-3xl md:text-4xl text-zinc-300 font-bold">
          Connect with our Team Leaders
        </h1>
        <p>
          Get connected with our team leaders and receive divine instructions and inspirations right in your device. 
        </p>
        <div className="social-icons text-4xl flex gap-4 ">
          <div className='bg-yellow-500 h-16 w-16 rounded-full flex justify-center items-center hover:bg-yellow-400 duration-500'><AiOutlineFacebook/></div>
          <div className='bg-yellow-500 h-16 w-16 rounded-full flex justify-center items-center  hover:bg-yellow-400 duration-500'><AiOutlineInstagram/></div>
          <div className='bg-yellow-500 h-16 w-16 rounded-full flex justify-center items-center  hover:bg-yellow-400 duration-500'><AiOutlineTwitter/></div>
        </div>
        <div className='flex gap-4'>
          <OutlineButtonBlack>
            <Link href='./team'>
              MORE ABOUT OUR PASTORS
            </Link>
            
          </OutlineButtonBlack>
        </div>
      </div>
      
    </div>
  )
}

export default Team