import React from 'react'
import Link from 'next/link'
import ConnectButton from '../buttons/ConnectButton'
import WatchButton from '../buttons/WatchButton'
import { newDate } from '@/hooks/newDate'

const HeroBanner = () => {
  return (
    <div className='bg-blue-900 h-[100vh] capitalize relative'>
      
      {/* background image */}
      <div className='w-full h-[93vh] overflow-hidden'>
        <img src="image1.jpg" alt="church service" 
        className='object-cover w-full h-full'/>
      </div>
      
      <div className='section-container absolute top-0 h-[93vh] w-full flex items-center justify-center bg-gradient-to-t from-black text-center text-white'>

        <div>
          <h1 className='text-4xl md:5xl font-bold px-6'>Experience God's presesence </h1>
          <h1 className='text-4xl md:5xl font-bold px-6'>and personal development</h1>
          <div className="pt-6 flex place-content-center gap-4">
            <button className="px-6 py-3 rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white  duration-500 cursor-pointer"><ConnectButton/></button>
            <button className="px-6 py-3 border-2 rounded-full border-white hover:bg-white hover:text-black cursor-pointer duration-500"><WatchButton/></button>
          </div>
        </div>

      </div>

      <div className='right-0 bottom-0 h-24  bg-yellow-500 w-[90vw] md:w-[60vw] absolute pr-6 sm:pr-16 md:pr-36 pl-10 flex items-center rounded-l-full overflow-hidden cursor-pointer hover:scale-105 duration-300'>
        <Link href='/source-thought'>
          <p className='text-yellow-900'>
          Sucess thoughts today - {newDate()}
          </p>
          <p>
            The Millitary keeping fit. The Prowess Mindset 11 ...
          </p>
        </Link>
      </div>
       
   
    </div>
  )
}

export default HeroBanner