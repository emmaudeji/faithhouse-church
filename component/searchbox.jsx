import React from 'react'
import Devmode from './devmode'
import SearchBar from './SearchBar'

const searchbox = () => {
  return (
    <div className='w-full flex px-6 sm:px-16 lg:px-36 bg-zinc-200 h-[70vh] absolute pt-8 flex-col z-40 overflow-auto'>
      <div>
        <SearchBar/>
        <Loading/>
      </div>
    </div>
  )
}

export default searchbox

export const Loading = () => {
  return (
    
<>
<div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>
    <div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>
    <div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>
    <div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>

</>
    
    
  )
}