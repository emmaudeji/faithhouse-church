import React from 'react'
import ResourcesCard from '../cards/ResourcesCard'
import { resoucesLabel } from '@/Data/resourcesLabel'

const Resources = () => {
  
  return (
    <div className='w-full  px-6 sm:px-16 lg:px-36 py-24 bg-zinc-100 '>
      
      {/* section-heading */}
      <div className="mb-8 w-full">
        <div className="border-b-4 border-zinc-300 text-zinc-300 text-2xl mb-2">
        <h3 className="font-bold">Our Resources </h3>
      </div>
        <p>Get inspired and lead a triumphant life</p>
      </div>
      
      <div className="slider-container w-full grid sm:grid-cols-2 md:gap-12 lg:gap-2 lg:grid-cols-4 items-center gap-4">
        {
          resoucesLabel?.map(({id, advertImage, link, title, emphasis}) => {
            
            return (
              <div key={id}>
                
                <ResourcesCard
                cardImage={advertImage} 
                link={link}
                title={title}
                emphasis={emphasis}
              />
              </div>
            )
          })
        }
        
      </div>

    </div>
  )
}

export default Resources