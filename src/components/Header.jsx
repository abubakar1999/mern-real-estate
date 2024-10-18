import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
const Header = () => {
  return (
    <header className='bg-slate-200'>
        <div className='flex justify-between p-4 items-center'>
            <div className='font-bold flex text-sm sm:text-xl flex-wrap'>
                <Link to='/'>
                <span className='text-slate-500'>Sahand</span>
                <span className='text-slate-700'>Estate</span>
                </Link>
            </div>
            <form className='flex bg-slate-100 p-2 items-center rounded-lg'>
            
                <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='search' />
                <IoMdSearch />
            </form>
            <ul className='flex gap-3'>
            <Link to='/'>
            <li className='hidden sm:block text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:block text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-slate-700 hover:underline'>Sign in</li>
            </Link>  
            </ul>
        </div>
    </header>
  )
}

export default Header