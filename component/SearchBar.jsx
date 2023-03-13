import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input 
        className='searchbar w-full rounded-full py-4 px-6 overflow-hidden'
        type="search" 
        name="searchbar" 
        id="searchbar" 
        placeholder='Enter search'/>
      </div>
  )
}

export default SearchBar