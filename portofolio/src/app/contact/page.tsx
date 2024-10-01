import React from 'react'

function page () {
  return (
    <div>
<div className="contact-details bg-white m-8 p-6 rounded-lg border w-96 shadow-lg mt-8">
 <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
  <p className="mb-2">Email: <a href="mailto:owaiskhilji6@gmail.com" className="text-blue-500 hover:underline">owaiskhilji6@gmail.com</a></p>
  <p className="mb-2">Phone: <a href="tel:03108037950" className="text-blue-500 hover:underline">03108037950</a></p>
  <p className="mb-2">Address: Karachi,sindh,Pakistan</p>
  <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/owais-khilji-8102b221a" target="_blank" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
  <p className="mb-2">GitHub: <a href="https://github.com/owaiskhilji" target="_blank" className="text-blue-500 hover:underline">GitHub Profile</a></p>
</div>


    </div>
  )
}

export default page 