import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='mt-10 text-center justify-between items-center gap-4 bg-neutral4'>
        <div className='space-y-2'>
            <h2 className='text-4xl text-accent font-semibold md:text-5xl lg:6xl'>Manage your entire community</h2> 
            <h2 className='text-4xl text-accent font-semibold md:text-5xl lg:6xl'>in a single system</h2> 
            <p className='text-neutral3 space-x-2 mx-12 text-base text-center'>Who is Nextcent suitable for?
            </p>
        </div>
        <div className='container mx-auto px-10 md:px-18 sm:px-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-8 gap-6 '>
            <div className='rounded-lg shadow-md md:items-center md:justify-center w-72  px-8 py-6 space-y-2 overflow-hidden bg-white text-center'>
                <Image src="/images/icon-one.svg" width={65} height={56} className='mx-auto w-16' alt="Feature" title='icon'/>
                <h3 className='text-3xl text-accent font-bold'>Membership Organizations</h3>
                <p className='text-sm text-neutral3 leading-normal'>Our membership management software provides full automation of membership renewals and payments.</p>
            </div>
            <div className='rounded-lg shadow-md w-72 px-8 py-6 space-y-2 overflow-hidden bg-white text-center'>
                <Image src="/images/icon-two.svg" width={65} height={56} className='mx-auto w-16' alt='icon' title='icon'/>
                <h3 className='text-3xl text-accent font-bold'>National Associations</h3>
                <p className='text-sm text-neutral3 leading-normal'>Our membership management software provides full automation of membership renewals and payments.</p>
            </div>
            <div className='rounded-lg shadow-md px-8 w-72 py-6 space-y-2 overflow-hidden bg-white text-center'>
                <Image src="/images/icon-three.svg" width={65} height={56} className='mx-auto w-16' alt='icon' title='icon'/>
                <h3 className='text-3xl text-accent font-bold'>Clubs And Groups</h3>
                <p className='text-sm text-neutral3 leading-normal'>Our membership management software provides full automation of membership renewals and payments.</p>

            </div>

        </div>

    </div>
  )
}

export default Features