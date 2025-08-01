import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 mb-8 lg:w-3/5'>
        <h1 className='text-xl text-gray-500 underline'>
       Comments
        </h1>
        <div className='flex items-center justify-between gap-8 w-full'>
            <textarea placeholder='Write a comment...' className='flex-1 p-4 rounded-xl'/>
            <button className='px-4 py-3 text-white bg-blue-800 rounded-xl font-medium'>Send</button>
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default Comments