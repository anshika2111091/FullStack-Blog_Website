import React,{useState} from 'react'

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-4 text-2xl font-bold'>
            <img src="./logo.png" className='w-8 h-8' alt="logo" />
            <span>lamalog</span>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
            <div className='cursor-pointer text-4xl' onClick={()=>setOpen((prev)=>!prev)}>
                {open ? "X":"☰"}
            </div>
{/* Mobile link list */}
      <div className={`w-full h-screen absolute gap-8 font-medium text-lg top-16 flex flex-col items-center justify-center transition-all ease-in-out ${open ? "-right-0":"-right-[100%]"}`}>

            <a href='/'>Home</a>
            <a href='/'>Trending</a>
            <a href='/'>Most Popular</a>
            <a href='/'>About</a>
            <a href='/'>
            <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
            </a>
       
            </div>
        </div>
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <a href='/'>Home</a>
            <a href='/'>Trending</a>
            <a href='/'>Most Popular</a>
            <a href='/'>About</a>
            <a href='/'>
            <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar