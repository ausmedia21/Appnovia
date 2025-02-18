import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <div className='text-center mt-20 space-y-4  font-inter gap-4'>
        <h2 className='text-5xl text-accent font-semibold'>Our Clients</h2>  
        <p className='text-neutral3 space-x-2 mx-12 text-base text-center'>We have been working with some Fortune 500+ clients</p>
        <div className='flex justify-center p-2 items-center w-full filter brightness-110 contrast-50 md:px-12 py-8 '>
            <Image src="/images/clients-logos.svg" alt="logo" width={1152} height={98} className='w-full px-12 py-8 h-auto' />
        </div>    
    </div>
  )
}

export default Clients