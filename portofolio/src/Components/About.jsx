import React from 'react'

function About() {
  return (
    
    <div className='flex flex-col justify-center  ml-0 md:ml-20  mt-20 px-10 py-10 space-y-10'>
   <div className='mx-auto md:mx-0 sm:mx-0 md:w-[1000px] space-y-10'>
    <div>
        <h1 className='h1 text-3xl sm:text-4xl md:text-5xl'>About Us</h1>
    </div>
    <div>
    <p className='p w-64 sm:w-[500px] md:w-[768px]  text-sm md:text-xl' >
    I am a dedicated web developer who completed a comprehensive web development course at Saylani Mass IT Training. During my time there, I was given the opportunity to do an internship, which helped me refine my skills even further. I participated in Saylani’s hackathon, where I developed a certificate generation project using the MERN stack, a project that enhanced my practical skills and strengthened my ability to tackle real-world challenges.......
    </p>
    </div>
    </div>
{/* modal */}


<div className='w-64 mx-auto sm:mx-0 md:mx-0'>
<button className="btn btn-outline btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Read more</button>
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box  bg-bgcolor">
    <form method="dialog ">
      <button className="p btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="h1 font-bold text-lg">About Us</h3>
    <p className="p py-4">
        
        I am a dedicated web developer who completed a comprehensive web development course at Saylani Mass IT Training. During my time there, I was given the opportunity to do an internship, which helped me refine my skills even further. I participated in Saylani’s hackathon, where I developed a certificate generation project using the MERN stack, a project that enhanced my practical skills and strengthened my ability to tackle real-world challenges
        <br />
          <br />
        I am currently working on a large, advanced quiz app project using the MERN stack, which includes several unique features. This project is designed to be not only informative but also engaging and interactive, making the user experience both challenging and motivating. Through this project, I am further enhancing my full-stack development skills and gaining valuable experience in creating interactive web applications.
<br />
<br />
       In addition, I am enrolled in the AI, Web 3.0, and Metaverse program under the GIAIC initiative. This program is providing me with knowledge in the latest technologies like artificial intelligence, blockchain, and the Metaverse, skills that I believe will play a crucial role in shaping the future of the digital world.
</p>
  </div>
</dialog>
    </div>
    </div>
  )
}

export default About

