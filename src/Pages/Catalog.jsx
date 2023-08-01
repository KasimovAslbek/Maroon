import React from 'react'
import Navbar from '../components/Navbar'
import Subscribe from "../components/Subscribe";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import CatalogItems from '../components/CatalogItems';

function Catalog() {
  return (
    <div className='text-[#122947] max-w-main mx-auto overflow-x-hidden'>
        <Navbar/>
        <CatalogItems/>
        <Subscribe/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Catalog