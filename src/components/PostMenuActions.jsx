import React from 'react'

const PostMenuAction = () => {
  return (
    <div className=''>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  className="w-6 h-6 text-gray-700"
>
  <path d="M6 2C4.9 2 4 2.9 4 4v18l8-3.5 8 3.5V4c0-1.1-.9-2-2-2H6zm0 2h12v15.11l-6-2.63-6 2.63V4z"/>
</svg>

       <span>Save this post</span>
      </div>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  className="w-6 h-6 text-red-600 hover:text-red-800 transition"
>
  <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
</svg>


       <span>Delete this post</span>
      </div>
    </div>
  )
}

export default PostMenuAction