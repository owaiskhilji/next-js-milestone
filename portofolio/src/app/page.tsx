"use client"
import React,{useState} from 'react'

import "./globals.css"
import Hom from "../Components/Hom"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Navbar from "@/Components/Navbar"
import Skill from "@/Components/Skill"
export default function Home() {
  // const [active , setActive] =useState('home')
  return (
    <div>
   <Navbar/>
      <div className="content">
      </div>
<Hom/> 
<About/>     
{/*  <Contact/> */}
 <Skill/>
 <br /><br />
    </div>
  )
}

{/* <Navbar  setActive={ setActive}/> */}
{/* {
  active === 'home' &&  <Hom/>
}
{
active === 'about' && <About/>
} */}