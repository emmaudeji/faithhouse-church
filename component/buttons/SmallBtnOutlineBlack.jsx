import React from 'react'

const SmallBtnOutlineBlack = ({children}) => {
  return (
    <button className="flex px-2  border rounded-full border-black hover:bg-black  hover:text-white cursor-pointer duration-300">
      {children}
    </button>
  )
}

export default SmallBtnOutlineBlack