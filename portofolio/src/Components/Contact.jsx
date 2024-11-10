import React from 'react'

function Contact() {
  return (
    <div>
     <div className="flex flex-col justify-center space-y-0 sm:flex sm:flex-row sm:justify-between sm:px-10 md:flex md:flex-row md:w-[1100px]">
<div className="card order-last sm:order-first md:order-first bg-base-100 mt-20 md:mt-40 sm:mt-14 rounded-xl mx-auto shrink-0 shadow-2xl md:w-[600px] sm:w-[300px] bg-transparent border-2 border-blue-600">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="p md:text-xl">Full Name</span>
            </label>
            <input type="text" placeholder="full name" className="input input-bordered bg-transparent border-1 border-blue-600 text-white" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="p md:text-xl">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered bg-transparent border-1 border-blue-600 text-white" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="p md:text-xl">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered  bg-transparent border-1 border-blue-600 text-white" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="p md:text-xl">Message</span>
            </label>
            <textarea placeholder="message" className="input input-bordered pt-3 bg-transparent border-1 border-blue-600 text-white" required></textarea>
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-primary">contact us</button>
          </div>
        </form>
      </div>
<div className='mt-4 w-64 space-y-6 mx-auto  md:mx-0 sm:mx-0 sm:relative sm:left-5 sm:top-16 md:relative md:top-40'> 
  <h2 className="h1 text-3xl sm:text-4xl md:text-5xl">Contact</h2>
  <p className="p w-64 md:w-[500px] text-sm sm:text-sm md:text-xl">
    Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
  </p>
</div>



</div>



  </div>
  )
}

export default Contact

{/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="full name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="message" className="input input-bordered" required></textarea>
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">contact us</button>
          </div>
        </form>
      </div> */}