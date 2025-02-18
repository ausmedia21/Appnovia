import React from 'react'

const Hero = () => {
  return (
    <div className='mt-20 grid grid-cols-1 justify-around space-y-6 py-6 px-6 items-center md:justify-evenly md:grid-cols-2 lg:grid-cols-2 gap-6 bg-neutral4 font-inter'>
        <div className='px-6 mb-14 space-y-2 max-w-full text-center lg:w-3/4 md:text-nowrap md:text-left'>
            <h2 className='text-accent text-4xl  md:text-5xl lg:text-6xl font-semibold '>Lessons and Insights</h2>
            <h2 className='text-primary text-4xl  md:text-5xl lg:text-6xl font-semibold'>from 8 years</h2>
            <p className='text-neutral3 md:text-wrap py-6'>Where to grow your business as a photographer: site or social media?</p>
            <button className='bg-primary text-white px-8 py-4 rounded-md'>
                Register
            </button>
        </div>
        <div className='px-10 py-4 '>
            <img src="/images/illustration.png" alt="pix" className='w-full md:w-[300px] lg:w-[400px] h-auto' />
        </div>
    </div>
  )
}

export default Hero