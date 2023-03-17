import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'

const connect = () => {

  return (
     <>
    <PageHeroBanner
      pageTitle='Connect >'
      heading='You deserve the right relationship to grow'
      image={'/girls-playing.jpg'}
      />
      <div id='feedback' className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Connect with us
      </div>
    </>
  )
}

export default connect