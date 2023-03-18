import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'

const Partnership = () => {
  return (
    <>
    <PageHeroBanner
      pageTitle='Partnership >'
      heading='Contribute to the spread of the gosple'
      image={'/executive-lady.jpg'}
      />
      <div id='give' className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Updating payment portal
      </div>
    </>
  )
}

export default Partnership;