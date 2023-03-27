import { groupList } from "@/Data/groupList"
import Link from "next/link";

const Community = ({ heading, text, img, list }) => {
  let group = []
  if (!list) {
    group = (groupList.slice(0, 8));
  } else {
    group = list
  }

  return (
    <div className='section-container py-24 justify-center items-center relative'>
      {/* description */}

      <div className={`md:w-[70%] grid md:grid-cols-3 ${img ? 'gap-0' : 'gap-4'} items-center z-20`}>
        <div className="text col-span-1">
          <h1 className="text-3xl font-bold pb-2">
            {heading}
          </h1>
          <p className="md:pl-4">
            {text}
          </p>
        </div>


        {/* community groups or image*/}
        <div className="col-span-2">
          {img ?
            <div>
              <img src={img} alt="experience" />
            </div>
            :
            <div className="h-full grid grid-cols-2 gap-1 justify-center">
              {
                group?.map(({ id, title, link }) => {
                  return (
                    <Link href={`${link}#${id}`} key={id}>
                      <p className='bg-zinc-300 h-full p-6 hover:bg-zinc-400 duration-500'>{
                        // (title.length > 16) ? title.slice(0, 14) + '...' : title
                        title
                      }
                      </p>
                    </Link>)
                })
              }
            </div>
          }

        </div>

        {/* rounded shape design */}

      </div>
      <div className="h-80 w-80 rounded-full bg-yellow-500 absolute left-[20%] md:left-[30%] top-[10%]"></div>

    </div>
  )
}

export default Community

