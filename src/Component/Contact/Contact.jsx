import React from 'react'

const Contect = () => {
  return (
    <div>
      <div>
          <div className='rounded-b-3xl bg-cyan-400'>
            <h1 className='font-semibold text-3xl text-center'>CONTACT US</h1>
          </div>
          <div className='bg-amber-300 m-20 mt-8 flex rounded-2xl'>
             <div className='bg-cyan-900 text-white h-150 w-120 m-4 rounded-2xl'>
               <div className='ml-6'>
                <h2 className='font-semibold text-3xl text-left mt-3 ml-3'> Contect With Founder <br /> Of Jobforge </h2>
                <p className='text-left mt-3 ml-3'>already a customer or need help with the biliing issues?</p>
                <p className='text-left mt-3 ml-3'>Name:</p>
                <input type="text" className='mt-2 ml-3 p-2 w-100 border rounded-md' placeholder='Enter your name' />
                <p className='text-left mt-3 ml-3'>Email:</p>
                <input type="email" className='mt-2 ml-3 p-2 w-100 border rounded-md' placeholder='Enter your email' />
                <p className='text-left mt-3 ml-3'>Address:</p>
                <input type="text" className='mt-2 ml-3 p-2 w-100 border rounded-md' placeholder='Enter your address' />
                <p className='text-left mt-3 ml-3'>Message:</p>
                <textarea className='mt-2 ml-3 p-2 w-100 border rounded-md' placeholder='Enter your message' />
                <br />
                <button className='bg-cyan-400 text-white font-semibold p-2 mt-4 mb-4 ml-3 rounded-md hover:bg-cyan-600'>Submit</button>
               </div>
             </div>
             <img className='rounded-md h-150 w-200 pt-8' src="https://jobforge.ca/cdn/shop/files/Untitled_design__2_-removebg-preview.png?height=628&pad_color=ffffff&v=1736040971&width=1200" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Contect;
