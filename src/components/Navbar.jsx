import React from 'react'
import { Link ,NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='flex gap-4 justify-center bg-gray-200 p-4'>
       <NavLink to="/" className={({isActive})=>isActive?"text-red-800 font-bold":"text-black"}>Home</NavLink>
       <NavLink to="/contact" className={({isActive})=>isActive?"text-red-800 font-bold":"text-black"}>Contact</NavLink>
       <NavLink to="/users" className={({isActive})=>isActive?"text-red-800 font-bold":"text-black"}>Manage User</NavLink>
       <NavLink to="/blogs" className={({isActive})=>isActive?"text-red-800 font-bold":"text-black"}>Blogs</NavLink>
       <NavLink to="/names" className={({isActive})=>isActive?"text-red-800 font-bold":"text-black"}>Names</NavLink>
       <NavLink to="/queryParams" className={({isActive})=>isActive?"text-red-800 font-bold":"text-black"}>Query Params</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
