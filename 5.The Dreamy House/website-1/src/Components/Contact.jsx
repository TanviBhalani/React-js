import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="flex px-20 py-10 bg-[#f5f5f5] max-sm:w-[1052px]">
        <div className="left w-[43%] h-100 border-1 border-gray-200 rounded-3xl shadow-xl mt-12 max-sm:hidden">
            <img src="/images/logo.png" alt="" className='h-100 w-120 ml-10'/>
        </div>
        <div className="right ml-10 w-[52%] max-sm:w-full max-sm:ml-0">
            <p className='uppercase text-[#f57e16] font- text-xl max-sm:text-4xl'>Contact us</p>
            <p className='text-4xl text-gray-600 mt-2 max-sm:text-6xl'>Let's Connect</p>
            <p className='text-gray-600 ml-1 max-sm:text-4xl'>With Dream House Trading</p>
            <p className='text-gray-500 mt-4 mb-5 max-sm:text-4xl max-sm:my-10 max-sm:leading-10'>Questions or inquiries? Send us a message, and we’ll get back to you shortly.</p>
            <form className='space y-4'>
                <div className="flex flex-col gap-1">
                    <label className='max-sm:text-4xl'>Name</label>
                    <input type="text" placeholder='Your Name' className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-800 text-md outline-none max-sm:text-3xl max-sm:py-6 max-sm:rounded-xl max-sm:mt-3' />
                </div>
                <div className="flex flex-col gap-1 mt-5 max-sm:mt-12">
                    <label className='max-sm:text-4xl'>Email</label>
                    <input type="email" placeholder='Enter your Email' className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-800 text-md outline-none max-sm:text-3xl max-sm:py-6 max-sm:rounded-xl max-sm:mt-3' />
                </div>
                <div className="flex flex-col gap-1 mt-5  max-sm:mt-12">
                    <label className='max-sm:text-4xl'>Message</label>
                    <textarea className="px-3 py-2 rounded border-gray-200 border-1 shadow-sm outline-none  max-sm:text-3xl max-sm:py-10 max-sm:rounded-xl max-sm:mt-3" placeholder='Your Message' required name='message' id=""></textarea>
                </div>
                <div>
                    <input type="submit" className='w-full bg-yellow-500 text-white px-3 py-2 font-semibold cursor-pointer rounded mt-5 max-sm:text-4xl max-sm:py-5 max-sm:rounded-xl' />
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}