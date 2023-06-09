import React from 'react'

const Services = ({removePadding}) => {
  return (
    <div className={`w-full pt-14 ${removePadding ? 'pb-0' : 'pb-24'} flex  md:flex-row flex-col items-center capitalize gap-0`}> 
      
      <div className="h-44 py-4 flex items-center   flex-1 w-full min-h-36 pl-6 sm:pl-16 lg:pl-36 pr-6 bg-yellow-500 ">
        <h1 className='text-xl '>
          Encounter God in our life transforming Services
        </h1>
      </div>

      <div className="h-44 py-4 flex items-center sunday flex-1 w-full min-h-36 bg-yellow-400  px-6 ">
       <div className='flex gap-4'>
        <div className="icon pr-3 border-r-2 border-black" >
        </div>
        <div className='text-xl'>
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
        </div>
      </div>

      <div className="h-44 py-4 flex items-center  thursday flex-1 w-full min-h-36 sm:pr-16 lg:pr-36 pl-6  bg-yellow-500 ">
         <div className='flex gap-4'>
        <div className="icon pr-3 border-r-2 border-black" >
        </div>
        <div className='text-xl'>
          <h2 className="title font-bold">
            Prayer Quake and Communion Service
          </h2>
          <h2 className="title">
            Service: 5.00pm - 7.00pm
          </h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services