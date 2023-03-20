import Link from 'next/link';
import { newDate } from '@/hooks/newDate'


const SuccessThought = () => {
  return (
    <Link href='/success-thought' className='text-[12px] sm:text-[16px] w-full'>
          <div className='flex justify-between sm:justify-start'>
            <p className='text-yellow-900 pb-2' >
          Sucess thoughts today - {newDate()} 
          </p>
          <button className='px-3 py-1 ml-4   rounded-full border border-yellow-900 hover:border-black duration-300 '>READ</button>
          </div>
          <p>
            The Millitary keeping fit. The Prowess Mindset 11 ...
          </p>
        </Link>
  )
}

export default SuccessThought;