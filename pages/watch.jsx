import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'

const watch = () => {
  return (
    <>
    <PageHeroBanner
      pageTitle='Watch >'
      heading='Join our services online'
      image={'/executive-lady.jpg'}
      />
      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Updating Video resources
      </div>
    </>
  )
}

export default watch