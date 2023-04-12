import React, {useState, useEffect, useRef, useCallback} from 'react'
import Link from 'next/link'
import WatchButton from '../buttons/WatchButton'
import SuccessThought from '../SuccessThought'
import { headingList } from '@/Data/headingList'



const HeroBanner = ({heroBannerData}) => {

  const [index, setIndex] = useState(0);
  

  let herolist = heroBannerData?.map(({heading}) => {
    return heading
  })

  console.log('heroBannerData',   heroBannerData, herolist)
  const handleClick = (sign) => {
  if (sign === 1) {
    if (index === 0) {
      setIndex(headingList.length - 1)
    } else {
      setIndex(index => index - 1)
    }
  } else if (sign === 2) {
    if (headingList.length - 1 === index) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }
  }


  return (
    <div className=' h-[100vh] capitalize relative'>
      
      {/* background image */}
      <div className='pt-20 w-full h-[93vh] overflow-hidden'>
        <img src="image1.jpg" alt="church service" 
        className='object-cover w-full h-full'/>
      </div>
      
      <div className='section-container absolute top-0 h-[93vh] w-full flex items-center justify-center bg-gradient-to-t from-black text-center text-white'>

        <div>
          <h1 className='text-3xl md:text-5xl font-bold px-6 md:px-40 lg:px-56'>{herolist && herolist.length ? herolist[index] : headingList[index] && headingList[index].heading}</h1>
          
          <div className="pt-6 flex place-content-center gap-4">
            <Link href={headingList[index].link} className="px-6 py-3 rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white  duration-500 cursor-pointer">            
            { headingList[index].btnText }
            </Link>

            <Link href='./watch/#view' className="px-6 py-3 border-2 rounded-full border-white hover:bg-white hover:text-black cursor-pointer duration-500"><WatchButton/></Link>

          </div>

          <div className='flex gap-2 justify-center pt-3 '>
            <h1 className="text-2xl cursor-pointer py-21 px-2 rounded-full hover:scale-150" onClick={() => handleClick(1)}>{'<'}</h1>
            <h1 className="text-2xl cursor-pointer py-21 px-2 rounded-full hover:scale-150" onClick={() => handleClick(2)}>{'>'}</h1>
          </div>
          
        </div>

      </div>

      <div className='right-0 bottom-0 py-6  bg-yellow-500  w-[95%] md:w-[60vw] absolute pr-6 sm:pr-16 md:pr-36 pl-10 md:pl-14 flex items-center rounded-l-full overflow-hidden cursor-pointer hover:scale-105 duration-300'>
        <SuccessThought/>
      </div>
       
   
    </div>
  )
}

export default HeroBanner