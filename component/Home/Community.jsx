import { groupList } from "@/Data/groupList"
import Link from "next/link";

const Community = () => {
  const group = groupList.slice(0, 8);
  console.log(group)
  return (
    <div className='section-container py-24 justify-center items-center relative'>
      {/* description */}
      
      <div className=" md:w-[70%] grid md:grid-cols-3 gap-4 items-center z-20">
        <div className="text col-span-1">
          <h1 className="text-3xl font-bold pb-2">
            Volunteer Today
          </h1>
          <p className="md:pl-4">
            One of the central ways we grow as disciples of Jesus is by having intentional relationships with people who share the same goal.

            Join any of our community today and let’s grow together.
          </p>
        </div>
        

        {/* community groups */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-1">
            {
              group?.map(({id, title}) => {
                return (<Link href={`./community/#${id}`}>
                <p key={id} className='bg-zinc-300 p-6 hover:bg-zinc-400 duration-500'>{(title.length > 16) ? title.slice(0, 14) + '...' : title}</p>
                </Link>)
              })
            }
            
            
          </div>
        </div>

      {/* rounded shape design */}
        
      </div>
      <div className="h-80 w-80 rounded-full bg-yellow-500 absolute left-[20%] md:left-[30%] top-[10%]"></div>

    </div>
  )
}

export default Community

