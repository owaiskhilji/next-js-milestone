import React from 'react'
import "../app/globals.css"

function Navbar() {
  return (
<div className="navbar bg-customOrange sm:px-8 md:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow cursor-pointer bg-customOrange text-white">
      <li className="pl-3 hover:bg-blue-600 hove rounded-md">Home</li>
      <li className="pl-3 hover:bg-blue-600 hove rounded-md">About</li>
      <li className="pl-3 hover:bg-blue-600 hove rounded-md">Skill</li>
      <li className="pl-3 hover:bg-blue-600 hove rounded-md">Contact</li>
      </ul>
    </div>
    <a className="logo btn btn-ghost text-xl text-white font-bold">Portfolio</a>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-x-10 cursor-pointer text-white foni-semibold">
      <li><a >Home</a></li>
      <li><a >About</a></li>
      <li><a> Skill</a></li>
      <li><a> Contact</a></li>
    </ul>
  </div>
  
</div>
  )
}

export default Navbar

// onClick={()=>{setActive('home')}} 
// onClick={()=>{setActive('about')}}