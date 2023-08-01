import React from 'react'
import cat1 from '../img/cat1.png'
import cat2 from '../img/cat2.png'
import cat3 from '../img/cat3.png'
import cat4 from '../img/cat4.png'
import cat5 from '../img/cat5.png'
import cat6 from '../img/cat6.png'
import cat7 from '../img/cat7.png'
import cat8 from '../img/cat8.png'
import cat9 from '../img/cat9.png'
import cat10 from '../img/cat10.png'
import cat11 from '../img/cat11.png'
import cat12 from '../img/cat12.png'

const data = [
    { id: 1, source: cat1, title: "High", desc : "face cream", price : "990", capacity : "50ml" }, 
    { id: 2, source: cat2, title: "Rest", desc : "mineral powder", price : "690", capacity : "20g" }, 
    { id: 3, source: cat3, title: "Rose", desc : "face cream", price : "890", capacity : "50ml" }, 
    { id: 4, source: cat4, title: "Milk", desc : "body oi", price : "790", capacity : "150ml" }, 
    { id: 5, source: cat5, title: "High", desc : "face cream", price : "990", capacity : "50ml" }, 
    { id: 6, source: cat6, title: "Rest", desc : "mineral powder", price : "690", capacity : "20g" }, 
    { id: 7, source: cat7, title: "Rose", desc : "face cream", price : "890", capacity : "50ml" }, 
    { id: 8, source: cat8, title: "Milk", desc : "body oi", price : "790", capacity : "150ml" }, 
    { id: 9, source: cat9, title: "High", desc : "face cream", price : "990", capacity : "50ml" }, 
    { id: 10, source: cat10, title: "Rest", desc : "mineral powder", price : "690", capacity : "20g" }, 
    { id: 11, source: cat11, title: "Rose", desc : "face cream", price : "890", capacity : "50ml" }, 
    { id: 12, source: cat12, title: "Milk", desc : "body oi", price : "790", capacity : "150ml" }, 
]


function CatalogItems() {
  return (
    <div className='bg-[#F8F8F6] '>
        <div className='w-full h-0.5 bg-[#DBDCE0]'></div>
        <div className="mx-4 sm:mx-11 lg:mx-24 ">
            <div className='w-full flex justify-between items-center mt-10 pb-14'>
                <h2 className='text-4xl font-medium'>Catalog</h2>
                <button className='border border-[#B3BAC1] px-10 py-3.5 min-w-[141px]  hover:bg-slate-200 duration-700'>Filter</button>
            </div>
            <div className='grid grid-cols-4 gap-7'>
                {data.map((card) =>(
                  <div className='relative'>
                    <img key={card.id} className='w-full h-full' src={card.source} alt="" />  
                    <div className='absolute bottom-5 text-center w-full ml-5 pr-12 z-20'>
                        <div className='flex justify-between font-medium'>
                            <p>{card.title}</p>
                            <p className='text-sm'>{card.price}$</p>
                        </div>
                        <div className='flex justify-between text-[#9A9DA0] text-sm mt-0.5'>
                            <p>{card.desc}</p>
                            <p>{card.capacity}</p>
                        </div>
                    </div>
                    </div>
                ))}
                
            </div>
            <div className='mt-12 relative'>
                <div className='flex items-start gap-2 justify-center text-lg'>
                    <p>1</p>
                    <div className='h-[1px] w-12 bg-[#122947] my-auto'></div>
                    <p className='text-[#9A9DA0]' >8</p>
                </div>
                <div className='absolute right-0 top-2 flex justify-end  gap-8 '>
                    <svg className='swiper-button-prev cursor-pointer ' xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
                        <path d="M27 7H0.999999M0.999999 7L7.30303 1M0.999999 7L7.30303 13" stroke="#122947"/>
                    </svg>
                    <svg className='swiper-button-next cursor-pointer ' xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
                        <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                </svg>
            </div>
            </div>
        </div>
 
    </div>
    ) 
}

export default CatalogItems