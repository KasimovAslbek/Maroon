import React from 'react'

function Spring() {
  return (
    <div className='bg-banner1 bg-no-repeat bg-cover bg-bottom md:bg-center w-full h-[562px] md:h-[432px] lg:h-[400px] md:flex'>
        <div className='w-1/2 h-1/2 md:h-fit'></div>
        <div className=' h-1/2 md:h-fit md:w-1/2 my-auto max-w-[284px] md:ml-4 lg:ml-28 text-center md:text-start mx-auto '>
            <h2 className='text-2xl md:text-3xl font-medium'>Meet the spring with us</h2>
            <p className='md:text-lg mt-8 mb-10'>Try the new collection of face care products with SPF protection</p>
            <button className='border border-[#B3BAC1] px-8 py-3.5 min-w-[141px] '>More</button>
        </div>
        
    </div>
  )
}

export default Spring