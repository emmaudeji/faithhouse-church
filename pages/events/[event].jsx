import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'
import { client } from '@/lib/client';
import { useRouter } from 'next/router';
import OutlineButtonBlack from '@/component/buttons/OutlineButtonBlack';
import Events from '@/component/Home/Events';

const event = ({eventData, fetchError}) => {
 

  const {query} = useRouter()

  console.log('eventData-----', query.keyword, 'fetchError', fetchError);

  return (
    <>
    <PageHeroBanner
      pageTitle='Events >'
      heading='Events designed for your total success'
      image={'/executive-lady.jpg'}
      />

      {/* title bar 1. choose view */}
      <div className="section-pading">

      </div>

      {/* type view */}
      <div className="section-padding">

      </div>

      {/* audience type bar */}
      <div className="section-padding">

      </div>

      <div id="space" className='h-8'>
        {' '}
      </div>

      {/* event view */}
      <div className="">
        {/* evebt section card */}
        <div className="event flex section-container" >
          <div className="image">

          </div>
          <div className="text">
            <div className="title">

            </div>
            <div className="registerbtn">
              <OutlineButtonBlack>
                Register here
              </OutlineButtonBlack>
              <OutlineButtonBlack>
                More details
              </OutlineButtonBlack>
            </div>
          </div>
        </div>
        {/* full content onclick */}
        <div className="content grid gap-2">

        </div>
      </div>

     <Events eventData={eventData} />
      

      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Updating............
      </div>
    </>
  )
}


export const getServerSideProps = async () => {
  let eventData = []
  let fetchError = []

  try {
    const queryEvents = '*[_type == "eventSchema"]';
    eventData = await client.fetch(queryEvents);
  } catch (error) {
    fetchError.push({eventSchema: JSON.stringify(error)})
  }

  return {
    props: { eventData, fetchError },
  };
};


export default event