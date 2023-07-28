import React from 'react';
import bs1 from '../img/bs1.png';
import bs2 from "../img/bs2.png";
import bs3 from "../img/bs3.png";
import bs4 from "../img/bs4.png";
import bs5 from "../img/bs5.png";
import bs6 from "../img/bs6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



import { Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Pagination, Navigation]);

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
    <div className="ml-4 sm:ml-11 lg:ml-24 py-36 flex items-center"  >
        <div className='max-w-[214px] text-center w-1/5'>
            <h2 className='text-2xl md:text-3xl font-medium'>Bestsellers</h2>
            <p className='md:text-lg mt-5 md:mt-8 mb-7 md:mb-10' >Natural cosmetics for gentle skin care</p>
            <button className='border border-[#B3BAC1] px-6 py-3 min-w-[155px]  mx-auto'>See all</button>
        </div>
        <div className='w-4/5'>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}

            modules={[Pagination]}
            pagination={{
                clickable: true,
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
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            className=" "
    
        >
             {data.map((card, index) => (
            <SwiperSlide className='!w-[230px] !h-[312px] relative'>
                <img className='w-full h-full'  src={card.source} alt="" />
                <div className='absolute bottom-3 text-center w-full mx-auto'>
                    <p className='font-medium'>{card.title}</p>
                    <p className='text-[#9A9DA0] text-sm'>{card.desc}</p>
                    <a href='https://www.example.com/' className='text-sm underline underline-offset-8'>More</a>

                </div>
            </SwiperSlide>))}


        </Swiper>
        </div>
    </div>
  )
}

export default Bestsellers