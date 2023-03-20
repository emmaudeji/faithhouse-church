import React from 'react'

const SectionHeading = ({heading1, heading2, text}) => {
  return (
    <div className="mb-6 w-full">
        <div className="border-b-4 border-zinc-400 text-zinc-400 text-xl sm:text-2xl  mb-2 ">
        <h3 className="pr-2">{heading1} <span className='font-bold'>{heading2}</span> </h3>
        </div>
        <p className='md:pr-[30%]'>
          {text}
        </p>
      </div>
  )
}

export default SectionHeading