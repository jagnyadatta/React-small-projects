import React from 'react'
import Profile from "../assets/profile.png"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='py-4'>
      <div className="container flex justify-between items-center">
        {/* logo section  */}
        <div>
          <p className='text-lg font-semibold'>
            Food<span className='text-red-500'>Plaza</span>
          </p>
        </div>
        {/* menu section  */}
        <div className='flex justify-center items-center gap-6'>
          <ul className='gap-8 hidden sm:flex'>
            <li className='hover:border-b-4 border-primary cursor-pointer'>Home</li>
            <li className='hover:border-b-4 border-primary cursor-pointer'>Menu</li>
            <li className='hover:border-b-4 border-primary cursor-pointer'>About</li>
          </ul>
          {/* Login section */}
          <div className='flex items-center'>
            <img src={Profile} alt="" className='w-12 rounded-full'/>
            <IoIosArrowDown/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar