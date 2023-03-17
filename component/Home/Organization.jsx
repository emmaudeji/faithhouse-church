import Link from "next/link"
import { organizations } from "@/Data/organizations"

const Organization = () => {
  return (
    <div className="w-full flex px-6 sm:px-16 lg:px-36 flex-col pb-24 pt-14">

      {/* heading */}
      <div className="mb-8">
        <div className="border-b-4 border-zinc-300 text-zinc-300 text-2xl mb-2 ">
        <h3 className="pr-2">Our <span className='font-bold'>Organization</span> </h3>
        </div>
        <p>As a center for leadership, advocacy and human development we are building  systems for continous transfomation of our society.</p>
      </div>

      {/* slider */}
      <div className="overflow-auto pb-2 scrollbar-hidden">
        <div className="flex gap-6">
          {
            organizations?.map(({id, logo, link}) => {
              return (
                <div key={id} className='h-28 relative'>
                  <div className='w-52 pb-2'>
                    <img src={logo} alt="logo" className='w-full'/>
                  </div>
                  <Link href={link} className='text-zinc-400 hover:text-zinc-400 duration-500 text-center flex w-full justify-center absolute bottom-0'>
                    Visit
                  </Link>
                </div>
              )
            })
          }
          
          
            
           
            
        </div>
      </div>
    </div>
  )
}

export default Organization
