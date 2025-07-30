import React from 'react'
import { Link } from 'react-router-dom'


export const MainCategories = () => {
  return (
    <div className='bg-white hidden md:flex rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* links */}
        <div className='flex-1 flex items-center justify-between flex-wrap'>
            <Link to="/posts" className='bg-blue-800 text-white py-2 px-4 rounded-full'>All Posts</Link>
            <Link to="/posts?cat=web-design" className='hover:bg-blue-50  py-2 px-4 rounded-full'>Web Design</Link>
            <Link to="/posts?cat=development" className='hover:bg-blue-50  py-2 px-4 rounded-full'>Development</Link>
            <Link to="/posts?cat=database" className='hover:bg-blue-50  py-2 px-4 rounded-full'>Database</Link>
            <Link to="/posts?cat=seo" className='hover:bg-blue-50  py-2 px-4 rounded-full'>Search Engines</Link>
            <Link to="/posts?cat=marketing" className='hover:bg-blue-50  py-2 px-4 rounded-full'>Marketing</Link>
        </div>
        <span className='font-medium text-xl'>|</span>
        {/* search */}
        <div className='bg-gray-100 rounded-full flex items-center gap-2 p-2'>
<img src="/search_icon.svg" width={24} height={24} alt="" />
<input type="text" placeholder='Search a post......' className='bg-transparent outline-none' />
        </div>
    </div>
  )
}
