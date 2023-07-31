import React from 'react'
import Navbar from './Navbar'
import main1 from "../img/main1.png"
import main2 from "../img/main2.png"
const rightPointer =  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
                        <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                      </svg>

function Main() {
  
  return (

    <div className=' bg-hero-pattern w-full h-[550px] lg:h-[650px] bg-no-repeat bg-cover bg-center relative'>
      <Navbar/>
      <div className='max-w-[280px] mx-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 text-center'>
        <h2 className='text-4xl md:text-6xl font-medium'>MAROON</h2>
        <p className='md:text-lg mt-5 md:mt-8 mb-7 md:mb-10' >Natural cosmetics for gentle skin care</p>
        <button className='border border-[#B3BAC1] px-8 py-3.5 min-w-[141px] mx-auto hover:bg-slate-200 duration-700'>More</button>
      </div>
      <div className='flex justify-between mx-4  sm:mx-11 lg:mx-32 xl:mx-44 mt-8'>
        <div>
          <img className='w-[130px] h-[170px]  sm:w-[245px] sm:h-[322px] xl:w-full xl:h-full' src={main1} alt="" />
          <div className='flex justify-between items-center pt-4'>
            <p>Facial care</p>
            <a href="https://www.example.com/">{rightPointer}</a>
          </div>
        </div>
        <div>
          <img className='w-[130px] h-[170px]  sm:w-[245px] sm:h-[322px] xl:w-full xl:h-full' src={main2} alt="" />
          <div className='flex justify-between items-center pt-4'>
            <p>Facial care</p>
            <a href="https://www.example.com/">{rightPointer}</a>
          </div>
        </div>
      </div>
      

    </div>

  )
}

export default Main