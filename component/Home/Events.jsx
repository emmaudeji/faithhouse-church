import { useState } from "react";
import EventCard from "../cards/EventCard"
import { eventList } from "@/Data/eventList"
import OutlineButtonBlack from "../buttons/OutlineButtonBlack";
import Link from "next/link";
import { urlFor } from '@/lib/client'


const Events = ({eventData}) => {
  console.log('eventData--', eventData)

  const [events, setEvents] = useState(eventData ? eventData : eventList)

  return (
    <div className="w-full flex px-6 sm:px-16 lg:px-36 flex-col pt- 14 pb-24 ">

    {/* section-heading */}
      <div className="mb-8">
        <div className="border-b-4 border-zinc-300 text-zinc-300 text-2xl mb-2">
        <h3>Upcoming <span className="font-bold">Events</span></h3>
      </div>
      <p>Become a part of something great</p>
      </div>

    {/* Event Slider  */}
      <div className="overflow-auto mx-1 pb-2 scrollbar-hidden">
        <div className="flex gap-6 ">
          {
            events?.map(({_id, eventImage, image, title, eventDate, time, venue, theme, emphasis}) => {
              
              return (
                <div key={_id}>
                  <EventCard
                    image={eventImage ? urlFor(eventImage) : image}
                    title={title}
                    eventDate={eventDate}
                    eventTime={time}
                    address={venue}
                    theme={theme}
                    emphasis={emphasis}
                    link={`/events/${title}`}
                  />
                </div>
              )
            })
          }
          
        </div>
      </div>

      {/* Action buttons */}
      <div className="btn flex justify-center pt-14">
        <div className="flex gap-4 text-sm">
          <div>
            <OutlineButtonBlack>
              <Link href='/events'>
                View Events
              </Link>
            </OutlineButtonBlack>
          </div>
          <div className="">
             <OutlineButtonBlack>
              <Link href='/events'>
                Register for Event
              </Link>
            </OutlineButtonBlack>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Events