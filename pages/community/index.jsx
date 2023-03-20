import Link from 'next/link'
import { groupList } from '@/Data/groupList'
import ImageCard from '@/component/cards/ImageCard'

const index = () => {
  return (
    <>
    <div className='section-container py-24  text-4xl font-bold text-zinc-400 bg-zinc-300 justify-center  items-center'>
      Our Community
    </div>

    <div className="flex overflow-auto">
        {
          groupList?.map(({id, title}) => {
            return (
              <Link href={`./community/#${id}`} key={id}>
                <p  className='bg-zinc-400 p-6 hover:bg-zinc-500 duration-500 border-r'>{title}</p>
              </Link>
            )
          })
        }
    </div>

    <div className="w-full px-6 sm:px-16 lg:px-36 py-24 flex flex-col gap-24">
      {
        groupList?.map(({id, title, image, content}) => {
            return (
              <div key={id} id={id} className=''>
                <h2 className='text-3xl font-bold'>
                  {title}
                </h2>
                <div className='flex flex-col md:flex-row gap-6 w-full h-full items-center pt-3'>
                  <div className="img w-full sm:w-80 md:pr-6 md:border-r-2 border-zinc-500 h-full overflow-hidden ">
                    
                      <ImageCard
                      cardImage={image}/>
                    
                  </div>
                  <div className='flex-1'>
                    {content}
                  </div>
                </div>
                
              </div>
            )
          })
      }
    </div>
    </>
    

    
  )
}

export default index