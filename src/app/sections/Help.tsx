import React from 'react'

const Help = () => {
  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 p-20 font-inter space-y-8'>
        <div className='ms-8 p-6 w-full mx-auto items-center justify-center'>
            <h3 className='text-accent text-start items-start justify-start md:text-start text-5xl font-semibold'>Helping a local <br /> <span className='text-primary'>business reinvent itself</span></h3>
            <p className='text-lg  text-neutral2 mt-5 '>We reached here with our hard work and dedication</p>
        </div>
        <div className='grid grid-col-2 gap-6 md:grid-cols-2'>
            <div className="flex flex-col items-center text-center">
                <img src="/images/icon (4).svg" alt="Members" className="w-8 h-8 text-green-500" />
                <p className="text-2xl font-bold text-neutral2">2,245,341</p>
                <span className="text-neutral3">Members</span>
            </div> 
            <div className="flex flex-col items-center text-center">
                <img src="/images/icon (3).svg" alt="Clubs" className="w-32 h-16 text-green-500" />
                <p className="text-2xl font-bold text-neutral2">46,328</p>
                <span className="text-neutral3 text-sm">Clubs</span>
            </div>
            <div className="flex flex-col items-center text-center">
                <img src="/images/icon (6).svg" alt="Clubs" className="w-32 h-16 text-green-500" />
                <p className="text-2xl font-bold text-neutral2">828,867</p>
                <span className="text-neutral3 text-sm">Event Bookings</span>
            </div>

            <div className="flex flex-col items-center text-center">
                <img src="/images/icon (7).svg" alt="Clubs" className="w-32 h-16 text-green-500" />
                <p className="text-2xl font-bold text-gray-800">1,926,436</p>
                <span className="text-gray-500 text-sm">Payments</span>
            </div>
            
        </div>

    </div>
  )
}

export default Help