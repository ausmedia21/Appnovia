"use client"
import React from 'react'
import { useState } from "react"; 
import Image from 'next/image' 
import Link from 'next/link'
import { Menu, X } from "lucide-react"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <nav className='fixed top-0 left-0 w-full gap-28 z-50 bg-neutral4 px-6 py-4 flex justify-between items-center'>
            {/* LOGO */}
          <Image src="/images/logo.svg" alt="logo" className="min-w-[10vw] py-6 h-auto" width={154.49} height={24} />
            {/* Nav-Links */}
          <ul className='hidden space-x-10 md:flex font-inter'>
            <li>
              <Link href='/' className="text-neutral2 font-medium relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </li>
            <li>
              <Link href='/' className='text-neutral2 font-normal relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>
                Service
              </Link>
            </li>
            <li>
              <Link href='/feature' className='text-neutral2 font-normal relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>
                Feature
              </Link>
            </li>
            <li>
              <Link href='/product' className='text-neutral2 font-normal relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>
                Product
              </Link>
            </li>
            <li>
              <Link href='/testimonial' className='text-neutral2 font-normal relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>
                Testimonial
              </Link>
            </li>
            <li>
              <Link href='/faq' className='text-neutral2 font-medium relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>
                FAQ
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className='hidden md:flex px-4 py-2 font-inter p-2 text-sm'>
            <button className='text-primary me-4 font-medium relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Login</button>
            <button className='bg-primary pt-2 pb-2 px-5 rounded-md font-medium text-white'>Sign up</button>
          </div>


          {/* Burger start */}
          <button onClick={ () => setIsOpen(true)} className="md:hidden">
              <Menu className="w-6 h-6 text-secondary" />
          </button>

          {/* SideBar for Mobile */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-neutral4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
            {/* Close Btn */}
            <button onClick={ () => setIsOpen(false)} className="absolute top-4 right-4">
              <X className="w-6 h-6 text-secondary"/>
            </button>

            {/* SideBar Links for Mobile */}
              <ul className="flex flex-col items-start mt-16 space-y-6 px-6">
                <li>
                  <Link href='/' className='text-neutral2 font-medium ' onClick={ () => setIsOpen(false) }>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/' className='text-neutral2 font-normal' onClick={ () => setIsOpen(false)}>
                    Service
                  </Link>
                </li>
                <li>
                  <Link href='/feature' className='text-neutral2 font-normal' onClick={ () => setIsOpen(false)}>
                    Feature
                  </Link>
                </li>
                <li>
                  <Link href='/product' className='text-neutral2 font-normal' onClick={ () => setIsOpen(false)}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link href='/testimonial' className='text-neutral2 font-normal' onClick={ () => setIsOpen(false)}>
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link href='/faq' className='text-neutral2 font-medium relative pb-2 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full' onClick={ () => setIsOpen(false) }>
                    FAQ
                  </Link>
                </li>
              </ul>
              <div className='md:hidden flex flex-col gap-4 items-start ms-6  py-4 font-inter text-sm'>
                    <button className='text-primary text-lg font-medium'>Login</button>
                    <button className='bg-primary pt-2 pb-2 px-5 rounded-md font-medium text-white w-full max-w-[200px]'>Sign up</button>
              </div>
          </div>

          {/* Overlay; Close Outside */}
          {isOpen && (
            <div className="fixed inset-0 bg-neutral4 bg-opacity-20 shadow-sm" onClick={() => setIsOpen(false)}>

            </div>
          )}
      </nav>
    </div>
  )
}

export default Navbar