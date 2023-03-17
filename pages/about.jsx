import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'

const about = () => {
  return (
    <>
    <PageHeroBanner
      pageTitle='About Us >'
      heading='We are believers that are passionate about national transformation'
      image={'/executive-lady.jpg'}
      />
      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Updating content
      </div>
    </>
  )
}

export default about