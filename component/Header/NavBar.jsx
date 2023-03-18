import React, {useState} from 'react'
import Link from 'next/link'
import { navlinks } from '@/Data/navLinks'
import GiveButton from '../buttons/GiveButton'

const NavBar = ({post}) => {

  return (
    <div className='section-container text-white h-20  bg-black fixed items-center justify-between'>

      <div className="logo">
        <Link href={'/'}>
          <div className='md:w-40 w-28 sm:36 font-bold cursor-pointer hover:scale-105 duration-300'>
            <img src="./faithhouse-logo.png" alt="faithhouse-logo" />
          </div>
        </Link>
      </div>

      <div className='flex justify-between gap-14 '>
        
              {
                navlinks?.map(({title, link, id}) => {
                  return (
                    <Link key={id} href={link}
                    className='h-16 flex items-center hover:scale-110 duration-300 cursor-pointer '>
                      {
                        title
                      }
                    </Link>
                  )
                })
              }
        
      </div>

      <div className="giveButton h-16 flex items-center px-6 hover:scale-110 duration-300 cursor-pointer">
        <GiveButton/>
      </div>
    </div>
  )
}

export default NavBar


export async function getStaticProps(context) {
  const { params } = context;
  // fetch changes to header.
}