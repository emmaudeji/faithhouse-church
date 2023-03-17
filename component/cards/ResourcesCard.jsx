import React from 'react'
import Link from 'next/link'

const ResourcesCard = ({cardImage, link, title, emphasis, }) => {
  return (
    <div className="h-[22rem] relative w-full rounded overflow-hidden">  
      <div className='relative bg-zinc-200 h-[90%]  image-container rounded'>
        <div className="img absolute top-0 h-full w-full rounded overflow-hidden">
          <img src={cardImage} alt="men in worship" 
          className='h-full w-full object-cover hover:scale-105 duration-500 '/>
          {/* <div className="bg-gradient-to-t from-black absolute top-0 h-full w-full"></div> */}
        </div>

        <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black"></div>

        <div className="absolute bottom-[28%] px-4 font-bold text-white leading-4">
          <h1 className="theme text-3xl">
            {title}
          </h1>
          <h5 className="emphasis text-md">
            {emphasis}
          </h5>
        </div>
      </div>

        <Link href={link} className="smallbox absolute bottom-0 w-[75%] h-16 right-0 bg-yellow-500 rounded-l-full flex justify-center items-center hover:scale-105 duration-500">
          VIEW
        </Link>
      </div>
  )
}

export default ResourcesCard