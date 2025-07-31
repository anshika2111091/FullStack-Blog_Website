import React,{useState} from 'react'
import PostList from "../components/PostList";
import SideMenu from '../components/SideMenu';
const PostListPage = () => {
  const [open,setOpen]=useState(false);
  return (
    <div>
      <h1 className='mb-8 text-2xl'>Development Blogs</h1>
      <button className='md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4' onClick={()=>setOpen((prev)=>!prev)}>{open ? "Close":"Filter or Search"}</button>
      <div className='flex gap-8 flex-col-reverse md:flex-row'>
        <div><PostList/></div>
        <div className={`${open ? "block":"hidden"} md:block`}><SideMenu/></div>
      </div>
    </div>
  )
}

export default PostListPage