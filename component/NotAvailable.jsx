import React from 'react'

const NotAvailable = ({text}) => {
  return (
   
      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        {text ? text : 'Resources not available'}
      </div>
    
  )
}

export default NotAvailable