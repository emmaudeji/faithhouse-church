import SearchBar from './SearchBar'
import { motion, AnimatePresence } from 'framer-motion'
import { dropdownVariants } from './animations/DropdownVariants'

const Searchbox = ({showSearchBox}) => {
  return (
    <AnimatePresence>
     {showSearchBox && <motion.div 
      variants={dropdownVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
    
    className='w-full flex px-6 sm:px-16 lg:px-36 bg-zinc-900 h-[70vh] fixed top-0 flex-col z-40 overflow-auto pt-24'>
      <div>
        <SearchBar/>
        {/* <Loading/> */}
        <div className="flex h-full justify-center items-center text-3xl font-bold text-zinc-700">Data not available</div>
      </div>
    </motion.div> }
  </AnimatePresence>
  )
}

export default Searchbox

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