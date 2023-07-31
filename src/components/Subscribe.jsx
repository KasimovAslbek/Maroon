import React from 'react'
import sc1 from '../img/sc1.png'
import sc2 from '../img/sc2.png'
import sc3 from '../img/sc3.png'
import sc4 from '../img/sc4.png'
import sc5 from '../img/sc5.png'
import sc6 from '../img/sc6.png'


function Subscribe() {
  return (
    <div className='bg-[#F8F8F6] py-20 md:py-36 relative flex flex-col-reverse sm:flex-row items-center gap-12 sm:gap-16 '>
        <div className='sm:ml-11 lg:ml-24 grid grid-cols-2 lg:grid-cols-3 sm:w-1/2 lg:w-7/12 mx-4 sm:mx-0'>
            <img className='w-full' src={sc1} alt="" />
            <img className='w-full' src={sc2} alt="" />
            <img className='w-full' src={sc3} alt="" />
            <img className='w-full' src={sc4} alt="" />
            <img className='w-full hidden lg:block' src={sc5} alt="" />
            <img className='w-full hidden lg:block' src={sc6} alt="" />
        </div>
        <div className='sm:w-1/2 lg:w-5/12 sm:mr-11 lg:mr-24 mx-4 sm:mx-0 text-center sm:text-start'>
            <h2 className='text-2xl md:text-3xl font-medium'>Join us</h2>
            <p className='md:text-lg mt-8 mb-12'>Subscribe to our account @marooncare and be the first to know about new products and promotions</p>
            <button className='border border-[#B3BAC1] px-8 py-3.5 min-w-[141px] hover:bg-slate-200 duration-700'>Subscribe</button>
        </div>
        
      
    </div>
  )
}

export default Subscribe