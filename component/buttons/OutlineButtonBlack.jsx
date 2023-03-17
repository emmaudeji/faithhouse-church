import React from 'react'

const OutlineButtonBlack = ({children}) => {
  return (
    <button className="flex px-6 py-3 border-2 rounded-full border-black hover:bg-black  hover:text-white cursor-pointer duration-300">
      {children}
    </button>
  )
}

export default OutlineButtonBlack