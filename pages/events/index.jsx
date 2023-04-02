import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'
import { client } from '@/lib/client';

const events = ({eventData}) => {
  console.log('eventData', eventData);

  return (
    <>
    <PageHeroBanner
      pageTitle='Events >'
      heading='Events designed for your total success'
      image={'/executive-lady.jpg'}
      />
      <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
        Updating...
      </div>
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "eventSchema"]';
  const eventData = await client.fetch(query);

  // const bannerQuery = '*[_type == "banner"]';
  // const bannerData = await client.fetch(bannerQuery);

  return {
    props: { eventData },
  };
};

export default events