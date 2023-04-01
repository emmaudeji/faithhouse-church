import {useState, useEffect, useCallback} from 'react'
import { useRouter } from "next/router"
import PageHeroBanner from '@/component/PageHeroBanner'
import {getDataFaithhouse} from '@/hooks/getDataForSuccessThoughts'

export const getServerSideProps = async () => {

  const {data, err, event} = await getDataFaithhouse();

  return {
    props: {
      data: data ?  data : 'no data. check api status', 
      err,
      event
    }
  }  
}

const event = ({data, err, event}) => {
  console.log('data', data, 'err', err, 'event', event)

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

export default event