"use client"
import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Menu from './Menu';
import Purchase from './Purchase';
import DownloadCard from './DownloadCard';
import Footer from './Footer';

const HomePage = () => {

  return (
    <div className='relative w-full overflow-x-hidden'>
      <div className='absolute top-0 z-40 max-w-full 2xl:left-[27rem]'>
        <Navbar />
      </div>
      <div className='relative w-full'>
        <HeroSection />
      </div>
      <div className="">
        <Menu />
      </div>
      <div className='h-[44rem] w-96 sm:hidden' />
      <div className='sm:mt-48'>
        <Purchase />
      </div>
      <div className='mt-12'>
        <DownloadCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;