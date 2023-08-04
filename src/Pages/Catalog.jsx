import React from 'react'
import Navbar from '../components/Navbar'
import Subscribe from "../components/Subscribe";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import CatalogItems from '../components/CatalogItems';
import RecentlyViewed from '../components/RecentlyViewed';

function Catalog() {
  return (
    <div className='text-[#122947] max-w-main mx-auto overflow-x-hidden'>
        <Navbar/>
        <CatalogItems/>
        <RecentlyViewed/>
        <Subscribe/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Catalog