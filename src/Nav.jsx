import React, { useState } from 'react'
import ShinyText from './components/ShinyText';
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

function Nav() {
const [nav,setNav] = useState(false);
  return (
   <nav className='md:flex justify-between bg-purple-200 p-3'>
     <div className='flex justify-between'>
          <h1 className='text-xl md:text-2xl font-bold text-purple-600 mt-1'>Nikhil Maheswar.</h1>

    { nav?     <TfiMenu onClick={()=>setNav(!nav)} className='md:hidden' size={30}/>
    :
          <TfiClose  onClick={()=>setNav(!nav)} className='md:hidden ' size={30} />}


     </div>
     <div>
<ul className='hidden md:flex gap-5 md:gap-10'>
  <li  className='font-medium text-gray-800 hover:text-purple-600 transition-colors mt-2'>Home</li>
  <li className='font-medium text-gray-800 hover:text-purple-600 transition-colors mt-2' >project</li>
  <li  className='font-medium text-gray-800 hover:text-purple-600 transition-colors mt-2'>Timeline</li>
  <li className='font-medium text-gray-800 hover:text-purple-600 transition-colors mt-2' >About</li>
  <li className='flex items-center justify-center' > <button className=' bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'>Contact</button> </li>
</ul>
     </div>
 

     
    {
     <div className={nav? 'hidden bg-white flex-col p-4 rounded-2xl transform-100 duration-300': ' md:hidden bg-white flex-col p-4 rounded-2xl mt-6 transform-100 duration-300 '}>
      <ul className='flex-col  '>
        <li className='mt-2'>Home</li>
        <li className='mt-3'>Projects</li>
        <li className='mt-3'>Timeline</li>
        <li className='mt-3'>About</li>
      </ul>
      <button className='mt-3 w-[100%] bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'>Contact</button>
     </div>}
   </nav>
  )
}

export default Nav