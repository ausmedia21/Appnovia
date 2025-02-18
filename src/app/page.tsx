import React from 'react'
import "./styles/site.css";
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Clients from './sections/Clients'
import Features from './sections/Features'
import Pixelgrade from './sections/Pixelgrade'
import Help from './sections/Help'
import Design from './sections/Design';
import TimSmith from './sections/TimSmith';
import BlogCards from './sections/BlogCards';
import Finale from './sections/Finale';
import Footer from './components/Footer';

const page = () => {
  return (
    <div className='overflow-x-hidden antialiased bg-neutral4 min-h-screen font-inter'>
        <Navbar/>
        <Hero/>
        <Clients/>
        <Features/>
        <Pixelgrade/>
        <Help/>
        <Design/>
        <TimSmith/>
        <BlogCards/>
        <Finale/>
        <Footer/>
    </div>
  )
}

export default page