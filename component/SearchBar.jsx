import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [input, setInput] = useState('')
  return (
    <div className='flex gap-2 h-12 items-center rounded-full bg-white overflow-hidden'>
      <div className='text-2xl h-full pl-4 pr-2 border-r border-zinc-300 text-zinc-300 flex items-center'>
        <AiOutlineSearch/>
      </div>
        <input 
        onChange={e => setInput(e)}
        className='searchbar w-full px-4 overflow-hidden text-black '
        type="search" 
        name="searchbar" 
        id="searchbar" 
        placeholder='Enter search'/>

      </div>
  )
}

export default SearchBar