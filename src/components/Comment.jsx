import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl '>
        <div className='flex items-center gap-4'>
            <Image src="userImg.jpeg" classname="w-10 h-10 rounded-full object-cover" w="40"/>
            <span className='font-medium'>John Doe</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
        <div className='mt-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laudantium rem! Veniam ab vero pariatur nisi dignissimos quae sit unde non dolore dicta? Natus sapiente, unde asperiores architecto cumque quisquam!</p>
        </div>
    </div>
  )
}

export default Comment