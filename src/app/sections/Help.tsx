import React from 'react'
import Image from 'next/image'

const Help = () => {
  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 p-20 font-inter space-y-8'>
        <div className='ms-8 p-6 w-full mx-auto items-center justify-center'>
            <h3 className='text-accent text-start items-start justify-start md:text-start text-5xl font-semibold'>Helping a local <br /> <span className='text-primary'>business reinvent itself</span></h3>
            <p className='text-lg  text-neutral2 mt-5 '>We reached here with our hard work and dedication</p>
        </div>
        <div className='grid grid-col-2 gap-6 md:grid-cols-2'>
            <div className="flex flex-col items-center text-center">
                <Image src="/images/icon-four.svg" width={48} height={48} alt="Members" className="w-8 h-8 text-green-500" />
                <p className="text-2xl font-bold text-neutral2">2,245,341</p>
                <span className="text-neutral3">Members</span>
            </div> 
            <div className="flex flex-col items-center text-center">
                <Image src="/images/icon-three.svg" width={48} height={48} alt="Clubs" className="w-32 h-16 text-green-500" />
                <p className="text-2xl font-bold text-neutral2">46,328</p>
                <span className="text-neutral3 text-sm">Clubs</span>
            </div>
            <div className="flex flex-col items-center text-center">
                <Image src="/images/icon-six.svg" width={48} height={48} alt="Clubs" className="w-32 h-16 text-green-500" />
                <p className="text-2xl font-bold text-neutral2">828,867</p>
                <span className="text-neutral3 text-sm">Event Bookings</span>
            </div>

            <div className="flex flex-col items-center text-center">
                <Image src="/images/icon-seven.svg" width={48} height={48} alt="Clubs" className="w-32 h-16 text-green-500" />
                <p className="text-2xl font-bold text-gray-800">1,926,436</p>
                <span className="text-gray-500 text-sm">Payments</span>
            </div>
            
        </div>

    </div>
  )
}

export default Help