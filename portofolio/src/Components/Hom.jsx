import React from 'react'
import Image from "next/image";
import img from "../assests/IMG_5066.png"
function Hom() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:px-10 md:flex md:flex-row md:justify-between border-white md:w-[1500px]">
    <div className="mt-10 ml-0 sm:ml-0 md:ml-48 md:mt-40">
    <div className="space-y-10">
      <h1 className="h1 text-3xl sm:text-4xl md:text-5xl">
      I am Owais Khilji  </h1>
      <p className="p w-64 md:w-[500px] text-sm md:text-xl"> I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. I enjoy creating responsive and user-friendly websites. </p>
  <div className="w-64 space-x-5">
    <a target="blank" href="https://github.com/owaiskhilji">
    <button className="btn btn-outline btn-primary ">Github</button>
    </a>
    <a target="blank"  href="https://www.linkedin.com/in/your-linkedin-profile">
    <button className="btn btn-outline btn-primary ">Linkedn</button>
    </a>
  </div>
  </div>
</div>
<div className="mt-20 md:mt-40 sm:mt-14 rounded-xl mx-auto">
<Image className="img flex w-72 rounded-xl md:w-96"
src={img} 
alt="Owais Khilji"
/>
</div>
</div>
  )
}

export default Hom