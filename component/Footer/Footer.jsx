import React from 'react'
import Link from 'next/link'
import Newsletter from '../Home/Newsletter'
import OutlineButtonBlack from '../buttons/OutlineButtonBlack'
import ConnectButton from '../buttons/ConnectButton'
import WatchButton from '../buttons/WatchButton'
import { quickLinks } from '@/Data/quickLinks'
import { downloads } from '@/Data/downloads'
import Address from '../Address'
import MediaIcons from '../MediaIcons'

const Footer = () => {
  return (
    <>
      <Newsletter/>
      <div className='w-full px-6 sm:px-16 lg:px-36 py-16 bg-zinc-200'>

      <div className="grid md:grid-cols-3 gap-6 md:gap-10 lg:gap-14 pb-24">

        <div className="first grid gap-4 col-span-1">
          <div onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
            <div className="w-48">
            <img src="/faithhouse-logo-black.png" alt="logo" className="logo" />
          </div>
          </div>
        
          <p>
            Our online  community is designed to provide you with resources to support your personal growth and the ultimate purpose of living a life that is pleasing to God and self fulfilling.
          </p>

          <div className="icons flex flex-col gap-4">
              <div className="btn flex  gap-4">
                <div className="connect">
                  <OutlineButtonBlack>
                    <Link href={'/connect'}>
                      <ConnectButton/>
                    </Link>
                  </OutlineButtonBlack>
                </div>
                <div className="watch">
                  <OutlineButtonBlack>
                    <Link href={'/watch'}>
                      <WatchButton/>
                    </Link>
                  </OutlineButtonBlack>
                </div>
              </div>
                <MediaIcons/>
            </div>
        </div>

      {/* links and service time */}
        <div className='col-span-2 grid sm:grid-cols-3 gap-6  '>

          {/* links and downloads */}
          <div className="col-span-2 grid grid-cols-2">
            <div className="quick-links ">
            <h3 className='font-bold pb-2'>Quick Links</h3>
            <div className=' grid gap-2'>
              {
                quickLinks?.map(({id, link, title}) => {
                  return (
                    <Link key={id} href={link} className='pl-2 cursor-pointer hover:bg-zinc-400 duration-300 '>{title}</Link>
                  )
                })
              }
            </div>
          </div>

          <div className="quick-links ">
            <h3 className='font-bold pb-2'>Downloads</h3>
            <div className=' grid gap-2'>
              {
                downloads?.map(({id, link, title}) => {
                  return (
                    <Link key={id} href={link} className='pl-2 cursor-pointer hover:bg-zinc-400 duration-300 '>{title}</Link>
                  )
                })
              }
            </div>
          </div>
          </div>
          
          
          {/* service time */}
          <div className="col-span-1">
             <div className="service time  ">
            <h3 className='font-bold pb-2'>Service Time</h3>
            
            <div className=''>
              <h2 className="title font-bold">
                Impact Sunday Services
              </h2>
              <h2 className="title">
                1st Service: 7.00am - 9.00am
              </h2>
              <h2 className="title">
                2nd Service: 9.15am - 11.15am
              </h2>
            </div>

            <div className='pb-4'>
              <h2 className="title font-bold">
                Prayer Quake and Communion Service
              </h2>
              <h2 className="title">
                Service: 5.00pm - 7.00pm
              </h2>
            </div>

            <Address/>
          </div>
          </div>
         

        </div>

      </div>

      <div className="privacy flex justify-center pt-8 border-t border-zinc-400 text-zinc-400 items-center text-sm">
        Designed by Gogrene. Copyright Reserved 2023
      </div>
    </div>
    </>
    
  )
}

export default Footer