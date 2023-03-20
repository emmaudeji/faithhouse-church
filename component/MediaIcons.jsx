import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const MediaIcons = () => {
  return (
    <div>
      <div className="icons flex gap-2 text-4xl">
                <div className="bg-yellow-400 h-16 w-16 flex justify-center items-center hover:text-5xl duration-300 rounded-full">
                  <AiOutlineYoutube/>
                </div>
                <div className="bg-yellow-400 h-16 w-16  rounded-full flex justify-center items-center hover:text-5xl duration-300 ">
                  <AiOutlineFacebook/>
                </div>
                <div className="bg-yellow-400 h-16 w-16  rounded-full flex justify-center items-center hover:text-5xl duration-300 ">
                  <AiOutlineInstagram/>
                </div>
              </div>
    </div>
  )
}

export default MediaIcons