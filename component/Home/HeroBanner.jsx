import React from 'react'
import Link from 'next/link'
import ConnectButton from '../buttons/ConnectButton'
import WatchButton from '../buttons/WatchButton'
import SuccessThought from '../SuccessThought'

const HeroBanner = () => {
  return (
    <div className=' h-[100vh] capitalize relative'>
      
      {/* background image */}
      <div className='pt-20 w-full h-[93vh] overflow-hidden'>
        <img src="image1.jpg" alt="church service" 
        className='object-cover w-full h-full'/>
      </div>
      
      <div className='section-container absolute top-0 h-[93vh] w-full flex items-center justify-center bg-gradient-to-t from-black text-center text-white'>

        <div>
          <h1 className='text-3xl md:text-5xl font-bold px-6 md:px-40 lg:px-56'>Experience God's presence and personal transformation</h1>
          
          <div className="pt-6 flex place-content-center gap-4">
            <Link href='./connect' className="px-6 py-3 rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white  duration-500 cursor-pointer"><ConnectButton/></Link>
            <Link href='./watch' className="px-6 py-3 border-2 rounded-full border-white hover:bg-white hover:text-black cursor-pointer duration-500"><WatchButton/></Link>
          </div>
        </div>

      </div>

      <div className='right-0 bottom-0 h-24  bg-yellow-500 w-[90vw] md:w-[60vw] absolute pr-6 sm:pr-16 md:pr-36 pl-10 flex items-center rounded-l-full overflow-hidden cursor-pointer hover:scale-105 duration-300'>
        <SuccessThought/>
      </div>
       
   
    </div>
  )
}

export default HeroBanner