import React from 'react'

const ImageCard = ({cardImage}) => {
  return (
    <div className="h-[22rem] relative w-full rounded ">
        <div className="relative rounded bg-zinc-400 h-[90%] overflow-hidden">
          <img src={cardImage} alt="men in worship" 
          className='h-full w-full object-cover hover:scale-105 duration-500 '/>
          {/* <div className="bg-gradient-to-t from-black absolute top-0 h-full w-full"></div> */}
        </div>
        <div className="smallbox absolute bottom-0 w-[75%] h-16 right-0 bg-yellow-500 rounded-l-full">
        </div>
      </div>
  )
}

export default ImageCard