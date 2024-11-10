import React from 'react'
import Image from 'next/image'
import html from "@/assests/html.png"
import css from "@/assests/css.png"
import js from "@/assests/js.png"
import ts from "@/assests/ts.png"
import react from "@/assests/react.png"
import mern from "@/assests/mern.jpg"
function Skill() {
  return (
    <div>
<div className="flex flex-wrap  w-[100%]  justify-center gap-10">
      <div className="w-64 h-80 bg-bgcolor rounded-xl shadow-5xl border-2 border-blue-600 p-3 mt-2 sm:w-72 md:w-[400px] md:h-96">
        <div className="mx-auto w-52 h-64 sm:w-64 sm:ml-0 md:w-72 ">
          <Image 
            src={html} 
            alt="Blog Image" 
            objectFit="cover" 
            className="mt-5 mx-auto w-44 h-32" 
          />
        </div>
        <h1 className="h1 text-lg font-bold mt-20 sm:mt-8 md:mt-12">HTML</h1>
        <p className="p text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div>
      
            <div className="border-2 w-64 h-80 bg-bgcolor rounded-xl shadow-5xl border-blue-600 p-3 text-white mt-2 sm:w-72 md:w-[400px] md:h-96">
        <div className="mx-auto w-52 h-64 sm:w-64 sm:ml-0 md:w-72 ">
          <Image 
            src={css} 
            alt="Blog Image" 
            objectFit="cover" 
            className="mt-5 mx-auto w-44 h-32" 
          />
        </div>
        <h1 className="h1 text-lg font-bold mt-20 sm:mt-8 md:mt-12">CSS</h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div>

      <div className="border-2 w-64 h-80 bg-bgcolor rounded-xl shadow-5xl border-blue-600 p-3 text-white mt-2 sm:w-72 md:w-[400px] md:h-96">
        <div className="mx-auto w-52 h-40 sm:w-64 sm:ml-0 md:w-72 ">
          <Image 
            src={js} 
            alt="Blog Image" 
            objectFit="cover" 
            className="mt-5 mx-auto w-44 h-32" 
          />
        </div>
        <h1 className="h1 text-lg font-bold mt-20 sm:mt-8 md:mt-12">JS</h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div>
      
      
      <div className="border-2 w-64 h-80 bg-bgcolor rounded-xl shadow-5xl border-blue-600 p-3 text-white mt-2 sm:w-72 md:w-[400px] md:h-96">
        <div className="mx-auto w-52 h-40 sm:w-64 sm:ml-0 md:w-72 ">
          <Image 
            src={ts} 
            alt="Blog Image" 
            objectFit="cover" 
            className="mt-5 mx-auto w-44 h-32" 
          />
        </div>
        <h1 className="h1 text-lg font-bold mt-20 sm:mt-8 md:mt-12">TS</h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div>
      
            <div className="border-2 w-64 h-80 bg-bgcolor rounded-xl shadow-5xl border-blue-600 p-3 text-white mt-2 sm:w-72 md:w-[400px] md:h-96">
        <div className="mx-auto w-52 h-40 sm:w-64 sm:ml-0 md:w-72 ">
          <Image 
            src={react} 
            alt="Blog Image" 
            objectFit="cover" 
            className="mt-5 mx-auto w-44 h-32" 
          />
        </div>
        <h1 className="h1 text-lg font-bold mt-20 sm:mt-8 md:mt-12">React</h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div> 
      
      
      <div className="border-2 w-64 h-80 bg-bgcolor rounded-xl shadow-5xl border-blue-600 p-3 text-white mt-2 sm:w-72 md:w-[400px] md:h-96">
        <div className="mx-auto w-52 h-40 sm:w-64 sm:ml-0 md:w-[300px] ">
          <Image 
            src={mern} 
            alt="Blog Image" 
            objectFit="cover" 
            className="mt-5 mx-auto w-44 h-32 md:[250px]"
          />
        </div>
        <h1 className="h1 text-lg font-bold mt-20 sm:mt-8 md:mt-12">MERN</h1>
        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div>
          </div>

    </div>
  )
}

export default Skill