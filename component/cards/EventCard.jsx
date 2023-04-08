import React from 'react'
import Link from 'next/link'
import SmallBtnOutlineBlack from '../buttons/SmallBtnOutlineBlack'
import {FaMapMarkerAlt, FaRegClock} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'



const EventCard = ({image, title, eventDate, eventTime, address, theme, emphasis, link}) => {
  return (
    <div className='h-[22rem] relative w-[16rem] rounded'>
      
      {/* image container */}
      <div className="relative bg-zinc-200 h-[90%]  image-container rounded">
        <div className="img h-full w-full overflow-hidden rounded">
          <img src={image} alt="event-image" className="object-cover w-full h-full" />
        </div>

        <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black"></div>

        <div className="absolute bottom-[28%] px-4 font-bold text-white leading-4">
          <h1 className="theme text-3xl">
            {theme}
          </h1>
          <h5 className="emphasis text-md">
            {emphasis}
          </h5>
        </div>
        
      </div>
        
      {/* yellow box */}
        <div className="empty-box bg-yellow-500 h-[30%] py-4 w-[95%] absolute bottom-0  right-0 rounded-l-full flex items-center">
        <div className='grid gap-1 pl-10 pr-6 w-full'>
          <div className='font-bold leading-4'>
          {title}
          </div>

          <div className="flex w-full justify-between text-[.7em]">
            <div className='w-full'>
              <div className="calender w-full flex justify-between items-center">
                <div className="time flex items-center">
                  <div className="icon "><MdDateRange/></div>
                  <p>{eventDate}</p>
                  </div>
                  <div className="date flex leading-4 items-center">
                  <div className="icon "><FaRegClock/></div>
                  <p>{eventTime}</p>
                </div>
              </div>

              <div className="flex w-full justify-between items-center">
                <div className="address flex  leading-4 items-center">
                <div className="icon "><FaMapMarkerAlt/></div>
                <p>{address}</p>
              </div>
              <SmallBtnOutlineBlack>
                <Link href={link}>
                  VIEW
                </Link>
              </SmallBtnOutlineBlack>
              </div>
            </div>
          </div>
        </div>
          </div>

      
    </div>
  )
}

export default EventCard

