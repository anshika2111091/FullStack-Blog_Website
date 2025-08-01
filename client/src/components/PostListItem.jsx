import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className='md:hidden xl:block xl:w-1/3'>
            <Image src="postImg.jpeg" classname="rounded-2xl object-cover" w="735"/>
        </div>
        {/* details */}
        <div className='flex flex-col gap-4 xl:w-2/3'>
            <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
            <div className='flex items-center gap-2 text-gray-400 text-sm'>
                <span>Written by</span>
                <Link className='text-blue-800'>John Deo</Link>
                <span> on</span>
                <Link className='text-blue-800'>Web Design</Link>
                <span>3 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam odio laborum facere, molestias sit commodi, adipisci dolores voluptatem eaque dolore enim quaerat ex magni. Molestias, fugit neque! Officia, et nemo?</p>
            <Link  to="/test" className='underline text-blue-800 text-sm'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem