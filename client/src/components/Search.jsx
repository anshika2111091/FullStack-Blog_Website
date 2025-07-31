import React from 'react'

const Search = () => {
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
        <img src="/search_icon.svg" alt="search icon"  width="20" height="20"/>
        <input type="text" placeholder='Search a post....' className='outline-none text-sm placeholder:text-sm bg-transparent '/>
    </div>
  )
}

export default Search