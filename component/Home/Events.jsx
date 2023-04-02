import EventCard from "../cards/EventCard"
import { eventList } from "@/Data/eventList"
import OutlineButtonBlack from "../buttons/OutlineButtonBlack";
import Link from "next/link";


const Events = () => {

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
            eventList?.map(({id, image, title, eventDate, eventTime, address, theme, emphasis}) => {
              return (
                <div key={id}>
                  <EventCard
                    image={image}
                    title={title}
                    eventDate={eventDate.toDateString()}
                    eventTime={eventTime}
                    address={address}
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