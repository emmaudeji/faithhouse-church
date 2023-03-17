import PageHeroBanner from '@/component/PageHeroBanner'
import React from 'react'

const index = () => {
  return (
    <>
    <PageHeroBanner
      pageTitle='Downloads >'
      heading='Download Resources for your personl growth'
      image={'/worship.jpg'}
      />
      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Resources are not available for download
      </div>
    </>
  )
}

export default index