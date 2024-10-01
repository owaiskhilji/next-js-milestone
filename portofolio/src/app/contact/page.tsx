import React from 'react'

function page () {
  return (
    <div>
<div className="contact-details bg-white m-8 p-6 rounded-lg border w-96 shadow-lg mt-8">
 <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
 <div className=''>
 <div className='border w-85 h-10 py-2 pl-2  hover:border-blue-500'>
 <input  className='outline-none w-80' type="text"  placeholder='Name' />
 </div>
 <br />
 <div className='border w-85 h-10 py-2 pl-2  hover:border-blue-500'>
 <input  className='outline-none w-80' type="email"  placeholder='Email' />
 </div>
 <br />
 <div className='border w-85 h-10 py-2 pl-2 hover:border-blue-500'>
 <input  className='outline-none w-80' type="number"  placeholder='Phone Number' />
 </div>
 </div>
 </div>


    </div>
  )
}

export default page 