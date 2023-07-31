import React from 'react'
import indCare1 from '../img/indCare1.png'
import indCare2 from '../img/indCare2.png'
import indCare3 from '../img/indCare3.png'


function Indcare() {
  return (
    <div className='bg-[#F8F8F6] py-20 md:py-36 relative'>
        <div className='sm:ml-11 lg:ml-24 bg-[#F4F1ED] ml-4 mr-4  md:mr-11 lg:mr-0 lg:w-[583px]'>
            <div className='px-8 pt-14 pb-28 md:p-11 xl:p-24 md:pr-0 xl:pr-0 md:w-[339px] lg:w-[310px] xl:w-[339px] text-center md:text-start md:text-lg '>
                <h2 className='text-2xl md:text-3xl mb-11 md:mb-10'>Individual care</h2>
                <p className=' hidden md:block'>It is not always obvious what elements and minerals the skin needs, and numerous experiments with different products only worsen its quality.</p> 
                <p className='mb-8 md:mb-11'>Fill out the questionnaire and we will select the care that is right for you, taking into account your lifestyle, place of residence and other factors.</p>
                <button className='border border-[#B3BAC1] px-6 py-3 min-w-[155px] hover:bg-slate-200 duration-700'>Fill out the form</button>
            </div>

        </div>
        <img className='hidden lg:block absolute -right-24 xl:right-24 top-1/2  transform -translate-y-1/2 ' src={indCare1} alt="" />
        <img className='hidden md:block lg:hidden absolute right-0 top-1/2  transform -translate-y-1/2 ' src={indCare2} alt="" />
        <div className='md:hidden mx-9 -mt-20 '><img className='mx-auto' src={indCare3} alt="" /></div>
        
    </div>
  )
}

export default Indcare