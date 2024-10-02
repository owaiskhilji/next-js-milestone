import Image from "next/image";

export default function Home() {
  return (
<div>

<div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
      <div className="space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold">
        I am Owais Khilji  </h1>
        <p className="text-sm md:text-xl">I am a Frontend Developer. I am currently studying AI, WEB3.0 Metaverse under the Governor Initiative IT program.
        </p>
      </div>
      </div>
  </div>
    <div  className='space-y-4 ml-6 p-10'>
    <div className='space-y-3 '>
      <h5 className="text-1xl md:text-2xl font-bold">
Introduction:
      </h5>
      <p className='ml-6 font-bold-800'>
      I am Owais Khilji, a passionate MERN Stack Developer and front-end enthusiast. I have been enhancing my skills in web development for the past 6 months. I have knowledge of modern web technologies and frameworks, which help me develop efficient and effective web solutions. My focus is on creating user-centric and responsive web applications that are not only visually appealing but also offer high performance and usability.
      </p>
    </div>
    <div className='space-y-3 '>
      <h5 className="text-1xl md:text-2xl font-semibold">
      Brief Overview of My Journey and Experiences:
      </h5>
      <p  className='ml-6 font-bold-800'>
      My journey in web development began during my Bachelor's degree when I was introduced to HTML and CSS. As my interest grew, I learned advanced technologies like JavaScript and React JS. Working on professional projects has given me practical experience and exposure to industry standards. After becoming a Certified Web Developer from Saylani Mass IT Training, I successfully completed multiple projects, including a Product Listing, GPT-3, and a To-Do List App.
      </p>
    </div>
    <div className='space-y-3 '>
      <h5 className="text-1xl md:text-2xl font-semibold">
      Education and Certifications:
      </h5>
      <p className='ml-6 font-bold-800'> 
Bachelor's Degree (Current) <br />
AI, WEB3.0, and Metaverse (Currently pursuing under the Governor Initiative IT Program) <br />
Certified Web Developer from Saylani Mass IT Training (2024)

      </p>
    </div>
      <div className='space-y-3 '>
      <h5  className="text-1xl md:text-2xl font-semibold">
      Personal Story:
      </h5>
   <p className='ml-6 font-bold-800'>
I have a passion for web development and always strive to stay updated with new technologies and trends. In my free time, I enjoy exploring AI, WEB3.0, and Metaverse technologies. I believe that continuous learning and innovation are the keys to success. I also love reading books and exploring difficult Urdu words and their pronunciations. My inspiration is my passion for creating impactful web solutions that can make a difference in people's lives. 
    </p> 
    </div>      
  </div>
</div>
  );
}
