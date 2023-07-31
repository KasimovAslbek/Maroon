import React from 'react';
import bs1 from '../img/bs1.png';
import bs2 from "../img/bs2.png";
import bs3 from "../img/bs3.png";
import bs4 from "../img/bs4.png";
import bs5 from "../img/bs5.png";
import bs6 from "../img/bs6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([ Navigation]);

const data = [
    { id: 1, source: bs1, title: "High", desc : "face cream" }, 
    { id: 2, source: bs2, title: "Rest", desc : "face cream" }, 
    { id: 3, source: bs3, title: "Milk", desc : "Body Oil" }, 
    { id: 4, source: bs4, title: "Honey", desc : "mineral powder" }, 
    { id: 5, source: bs5, title: "Rose", desc : "face cream" }, 
    { id: 6, source: bs6, title: "Rest", desc : "Body Oil" },
    { id: 7, source: bs1, title: "High", desc : "mineral powder" }, 
    { id: 8, source: bs2, title: "Milk", desc : "face cream" }, 
  ];


function Bestsellers() {
  return (
    <div className='bg-[#F8F8F6] py-20 md:py-36'>    
        <div className="ml-4 sm:ml-11 lg:ml-24  md:flex items-center gap-10"  >
            <div className='text-center md:w-[214px] mb-12 md:mb-0'>
                <h2 className='text-2xl md:text-3xl font-medium'>Bestsellers</h2>
                <p className='md:text-lg mt-5 md:mt-8 mb-7 md:mb-10' >Natural cosmetics for gentle skin care</p>
                <button className='border border-[#B3BAC1] px-6 py-3 min-w-[155px]  mx-auto hidden md:block hover:bg-slate-200 duration-700'>See all</button>
            </div>
            <div className='overflow-x-hidden'>
                <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

                breakpoints={{
                    150: {

                    slidesPerView: 1.4,
                    spaceBetween: 16,
                    },
                    640: {

                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesOffsetBefore: 0,
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className=""
        
            >

                {data.map((card, index) => (
                <SwiperSlide key={index} className='!w-[220px] !h-[297px]  md:!w-[230px] md:!h-[312px] relative'>
                    <img className='w-full h-full z-0'  src={card.source} alt="" />
                    <div className='absolute bottom-3 text-center w-full mx-auto z-20'>
                        <p className='font-medium'>{card.title}</p>
                        <p className='text-[#9A9DA0] text-sm'>{card.desc}</p>
                        <p><a href='https://www.example.com/' className='text-sm underline underline-offset-8'>More</a></p>

                    </div>
                </SwiperSlide>))}


            </Swiper>

            </div>
            
        </div>
            <div className=' md:flex justify-end mr-11 lg:mr-24  gap-8 mt-6 hidden '>
                <svg className='swiper-button-prev cursor-pointer ' xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
                    <path d="M27 7H0.999999M0.999999 7L7.30303 1M0.999999 7L7.30303 13" stroke="#122947"/>
                </svg>
                <svg className='swiper-button-next cursor-pointer ' xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none">
                    <path d="M0 7H26M26 7L19.697 1M26 7L19.697 13" stroke="#122947"/>
                </svg>
            </div>
            <button className='border border-[#B3BAC1] px-6 py-3 min-w-[155px]  mx-auto  md:hidden flex justify-start mt-10 hover:bg-slate-200 duration-700'><p className='mx-auto'>See all</p></button>

    </div>
  )
}

export default Bestsellers