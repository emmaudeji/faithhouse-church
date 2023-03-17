import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'

const Success = () => {
  return (
     <>
    <PageHeroBanner
      pageTitle='Success thoughts >'
      heading='inspirations to help you succeed'
      image={'/executive-lady.jpg'}
      />
      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Resources are not available
      </div>
    </>
  )
}

export default Success