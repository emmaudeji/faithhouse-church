import React from 'react'
import Link from 'next/link'
import OutlineButtonBlack from '../buttons/OutlineButtonBlack'
import ImageCard from '../cards/ImageCard'

const WhyUs1 = ({text, logo, img, heading, showBtn, smallText}) => {
  return (
    <div className='section-container-grid'>
      
      <div className='flex-1'>
          {!logo ? <ImageCard
        cardImage={img}/> : (<img src={logo} alt='international logo' className='w-[80%] sm:w-full flex justify-center'/>)}
      </div>
      
      <div className='flex-1'>
        <div className={smallText ? `grid text-2xl md:text-3xl font-bold` : `grid text-2xl md:text-3xl lg:text-4xl font-bold`}>
          <h1 className="text-zinc-400 ">
            {heading}
          </h1>
          <h1 className="pb-4">
              {text}
          </h1>
        </div>

        {showBtn && <Link href='./about'>
          <OutlineButtonBlack>
            About us
          </OutlineButtonBlack>
        </Link>}
      </div>
      
    </div>
  )
}

export default WhyUs1