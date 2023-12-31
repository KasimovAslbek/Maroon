import React, { useState } from 'react';
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
import './style.css'

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
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterFaceOpen, setFilterFaceOpen] = useState(false);
    const [filterBodyOpen, setFilterBodyOpen] = useState(false);
    const [filterSkinOpen, setFilterSkinOpen] = useState(false);
  return (
    <div className='bg-[#F8F8F6] '>
        <div className='w-full h-0.5 bg-[#DBDCE0]'></div>
        <div className="mx-4 sm:mx-11 lg:mx-24 relative">
            <div className='w-full flex justify-between items-center mt-10 pb-14'>
                <h2 className='text-2xl sm:text-4xl font-medium'>Catalog</h2>
                <button className='border border-[#B3BAC1] px-7 sm:px-10 py-3.5 min-w-[141px] text-sm sm:text-base hover:bg-slate-200 duration-700'   onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
            </div>
            <div className={` pb-20 z-40 bg-[#F8F8F6] w-full absolute top-20 left-0 sm:pb-32  ${filterOpen ? 'block' : 'hidden'}`}>
                <form className=' sm:flex lg:justify-center gap-20'>
                    <div >
                        <div className='flex justify-between items-center mb-5 pb-5 border-b-2 sm:mb-5 sm:pb-0 sm:border-b-0'>
                            <h2 className=' text-lg font-medium '>Facial care</h2>
                            <div onClick={() => setFilterFaceOpen(!filterFaceOpen)} className={` cursor-pointer sm:hidden px-2  ${filterFaceOpen ? 'hidden' : ''}`} >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M0 5.85294H12M5.85294 12V0" stroke="#122947"/>
                                </svg>
                            </div>
                            <div onClick={() => setFilterFaceOpen(!filterFaceOpen)} className={` cursor-pointer sm:hidden py-2 px-2  ${filterFaceOpen ? '' : 'hidden'}`} >
                                <svg onClick={() => setFilterFaceOpen(!filterFaceOpen)} xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M0 1H12" stroke="#122947"/>
                                </svg>
                            </div>

                        </div>
                        
                        <div onClick={() => setFilterFaceOpen(!filterFaceOpen)} className={`space-y-5 text-[#9A9DA0] sm:block mb-10 sm:mb-0 ${filterFaceOpen ? '' : 'hidden'}`} >
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="cream" id="cream" className="rounded-checkbox" />
                                <span className="text-base">Cream</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="Serums" id="Serums" className="rounded-checkbox" />    
                                <span className="text-base">Serums</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="masks" id="masks" className="rounded-checkbox" />    
                                <span className="text-base">Masks</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="Penki" id="Penki" className="rounded-checkbox" />   
                                <span className="text-base">Penki</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="Tonics" id="Tonics" className="rounded-checkbox" /> 
                                <span className="text-base">Tonics</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="Powders" id="Powders" className="rounded-checkbox" /> 
                                <span className="text-base">Powders</span>
                            </label>
                        </div>
                    </div>


                    <div >
                        <div className='flex justify-between items-center mb-5 pb-5 border-b-2 sm:mb-5 sm:pb-0 sm:border-b-0'>
                            <h2 className=' text-lg font-medium '>Body care</h2>
                            <div onClick={() => setFilterBodyOpen(!filterBodyOpen)} className={` cursor-pointer sm:hidden px-2  ${filterBodyOpen ? 'hidden' : ''}`} >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M0 5.85294H12M5.85294 12V0" stroke="#122947"/>
                                </svg>
                            </div>
                            <div onClick={() => setFilterBodyOpen(!filterBodyOpen)} className={` cursor-pointer sm:hidden py-2 px-2  ${filterBodyOpen ? '' : 'hidden'}`} >
                                <svg onClick={() => setFilterFaceOpen(!filterBodyOpen)} xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M0 1H12" stroke="#122947"/>
                                </svg>
                            </div>

                        </div>
                        
                        <div onClick={() => setFilterFaceOpen(!filterBodyOpen)} className={`space-y-5 text-[#9A9DA0] mb-10 sm:mb-0 sm:block  ${filterBodyOpen ? '' : 'hidden'}`} >
                            <label className='flex items-center space-x-2'>
                                <input type="checkbox" name="cream1" id="cream1" className="rounded-checkbox" /> 
                                <span className="text-base">Cream</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                            <input className="rounded-checkbox" type="checkbox" name="Oils" id="Oils" /> 
                                <span className="text-base">Oils</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="Scrubs" id="Scrubs" /> 
                                <span className="text-base">Scrubs</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="Soap" id="Soap" /> 
                                <span className="text-base">Soap</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="bathBombs" id="bathBombs" /> 
                                <span className="text-base">Bath bombs</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="BathSalt" id="BathSalt" /> 
                                <span className="text-base">Bath salt</span>
                            </label>
                        </div>
                    </div>

                    <div >
                        <div className='flex justify-between items-center mb-5 pb-5 border-b-2 sm:mb-5 sm:pb-0 sm:border-b-0'>
                            <h2 className=' text-lg font-medium '>Skin type</h2>
                            <div onClick={() => setFilterSkinOpen(!filterSkinOpen)} className={` cursor-pointer sm:hidden px-2  ${filterSkinOpen ? 'hidden' : ''}`} >
                                <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M0 5.85294H12M5.85294 12V0" stroke="#122947"/>
                                </svg>
                            </div>
                            <div onClick={() => setFilterSkinOpen(!filterSkinOpen)} className={` cursor-pointer sm:hidden py-2 px-2  ${filterSkinOpen ? '' : 'hidden'}`} >
                                <svg onClick={() => setFilterFaceOpen(!filterSkinOpen)} xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M0 1H12" stroke="#122947"/>
                                </svg>
                            </div>

                        </div>
                        
                        <div onClick={() => setFilterFaceOpen(!filterSkinOpen)} className={`space-y-5 text-[#9A9DA0] sm:block mb-10 sm:mb-0  ${filterSkinOpen ? '' : 'hidden'}`} >
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="Normal" id="Normal" /> 
                                <span className="text-base">Normal</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="Dry" id="Dry" /> 
                                <span className="text-base">Dry</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input className="rounded-checkbox" type="checkbox" name="oily" id="oily" /> 
                                <span className="text-base">Oily</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                            <input className="rounded-checkbox" type="checkbox" name="Combined" id="Combined" /> 
                                <span className="text-base">Combined</span>
                            </label>

                            <div className='hidden lg:flex gap-5 text-[#122947]'>
                                <button className='border border-[#B3BAC1] px-10 py-3.5 min-w-[141px]  hover:bg-slate-200 duration-700'>Apply</button>
                                <button className='border border-[#B3BAC1] px-10 py-3.5 min-w-[141px]  hover:bg-slate-200 duration-700'>Reset</button>
                            </div>
                        </div>
                    </div>

                </form>
                
                <div className='flex mx-4 justify-center lg:hidden mt-12 gap-5 text-[#122947]'>
                    <button className='border border-[#B3BAC1] px-7 sm:px-10 py-3.5 sm:min-w-[141px] text-sm sm:text-base hover:bg-slate-200 duration-700'>Apply</button>
                    <button className='border border-[#B3BAC1] px-7 sm:px-10 py-3.5 sm:min-w-[141px] text-sm sm:text-base hover:bg-slate-200 duration-700'>Reset</button>
                </div>
            </div> 
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
                {data.map((card , index) =>(
                  <div key={index} className='relative'>
                    <img  className='w-full h-full' src={card.source} alt="" />  
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
            <div className='mt-12 relative flex justify-between items-center'>
                <div className='flex items-start gap-2 justify-center text-lg'>
                    <p>1</p>
                    <div className='h-[1px] w-12 bg-[#122947] my-auto'></div>
                    <p className='text-[#9A9DA0]' >8</p>
                </div>
                <div className='sm:absolute right-0 top-2 flex justify-end  gap-8 '>
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