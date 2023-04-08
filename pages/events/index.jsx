import {useState, useEffect, useCallback} from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'
import { client, urlFor } from '@/lib/client';
import { useRouter } from 'next/router';
import OutlineButtonBlack from '@/component/buttons/OutlineButtonBlack';
import Events from '@/component/Home/Events';
import { eventList } from '@/Data/eventList';
import {FaMapMarkerAlt, FaRegClock} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import getEventsData from '../../hooks/getEventsData'
// import { spring } from 'framer-motion';

const events = ({eventData}) => {
  const {query} = useRouter()
  
  const {data, err} = getEventsData(eventData);

  // locate event from data and fill event title
  const eventTitle = data?.filter(item => String(item.title) === query.keyword)

  // locate event from eventList and fill event details
  const eventContent = eventList?.filter(item => String(item.title) === query.keyword)

  // const [content, setContent] = useState(eventTitle.content ? eventTitle : eventContent)


  console.log('eventData-----', eventTitle, eventContent);

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

      <div id="space" className='h-16'>
        {' '}
      </div>

      {/* event view */}
      <div className="">
        {/* evebt section card */}
        {
          eventTitle?.map(({title, _id, theme, emphasis, 
            eventDate, time, venue, eventImage, featuring, content}) => {
            return (
              <>
              <div key={_id} className="pb-8 section-padding grid md:grid-cols-2 gap-8 items-center justify-start" >
                <div className="">
                  <div className='h-60 w-full'>
                    <img src={urlFor(eventImage)} className='h-full w-full object-cover'
                     alt="event_image" /> 
                  </div>
                </div>
                <div className="">
                  <div className=" grid gap-2 pb-2">
                    <p className='font-bold text-2xl'>  {title}</p>
                    <p className='font-bold text-lg'> <span className='text-zinc-500'>Theme: </span>  {theme}</p>
                    <p className='font-bold text-lg text-zinc-500'>{emphasis}</p>
                    <div className="flex gap-3">
                      <p className='font-bold flex gap-1'> <span><MdDateRange/></span> {eventDate}</p>
                      <p className='font-bold flex gap-1'> <span><FaRegClock/></span> {time}</p>
                    </div>
                    <p className='font-bold flex gap-1'> <span><FaMapMarkerAlt/></span> {venue}</p>
                  </div>
                  <div className="flex gap-2">
                    <OutlineButtonBlack>
                      Register here
                    </OutlineButtonBlack>
                    <OutlineButtonBlack>
                      More details
                    </OutlineButtonBlack>
                  </div>
                </div>
              </div>

              {/* featuring */}
              <div className="section-padding pb-8">
             
                  <h3 className="font-bold text-lg text-zinc-500">
                    What to expect
                  </h3>

                  { featuring ?
                    <div className="grid gap-2">
                    {
                      featuring?.map(({children, _key}) => {
                        const {text} = children[0]
                        return (
                          <p key={_key} className='flex gap-2 items-center' > <span className="runded-full h-2 w-2 bg-black">{''}</span> {text}</p>
                        )
                      })
                    }
                    </div> :
                    eventContent?.map(({_id, featuring})=>{
                      return (
                        <div key={_id}>{
                          featuring?.map((item, i)=> {
                            return (
                              <p key={i} className='flex gap-2 items-center' > <span className="runded-full h-2 w-2 bg-black">{''}</span> {item}</p>
                              )
                          })
                        }</div>
                      )
                    })
                  }
              </div>

              {/* content */}
              <div className="section-padding  border border-zinc-300 py-6">
                <h3 className='text-lg font-bold text-zinc-500'>More Details about this event</h3>
                  { content ?
                    <div className="grid gap-2">
                    {
                      content?.map(({children, _key}) => {
                        const {text} = children[0]
                        return (
                          <p key={_key} className='flex gap-2 items-center' > {text}</p>
                        )
                      })
                    }
                    </div> :
                    eventContent?.map(({_id, content})=>{
                      return (
                        <div key={_id} className="grid grid-2">
                          <p>{content}</p>
                        </div>
                      )
                    })
                  }
              </div>
              </>
            )
          })
        }

      </div>

     {/* Events component */}
      <div className='pt-24'>
      <Events eventData={eventData} />
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