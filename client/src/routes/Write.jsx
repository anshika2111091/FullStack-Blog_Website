import React from 'react'
import { useUser } from '@clerk/clerk-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {

  const {isLoaded,isSignedIn}=useUser();

if(!isLoaded){
 return <div>Loading...</div>
}
if(isLoaded && !isSignedIn){
  return <div>You should login!
  </div>

}

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='w-max shadow-md p-2 rounded-xl text-sm text-gray-500 bg-white'>Add a cover image</button>
        <input className='text-4xl outline-none bg-transparent font-semibold' type="text" placeholder='My Awesome Story' />
        <div className='flex items-center gap-4'>
          <label className='text-sm' htmlFor="">Choose a category:</label>
          <select name="cat" id="" className='p-2 rounded-xl bg-white shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Desing</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea className='p-4 rounded-xl bg-white shadow-md' name='desc' placeholder='A Short Description'/>
        <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white shadow-md'/>
        <button className='text-white bg-blue-800 font-medium w-36 p-2 rounded-xl mt-4'>Send</button>
      </form>
    </div>
  )
}

export default Write