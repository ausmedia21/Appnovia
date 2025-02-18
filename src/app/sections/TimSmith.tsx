import React from 'react'
import Image from 'next/image'

const TimSmith = () => {
  return (
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:m-20 lg:p-8 mt-20'>
            <div className='mb-4'>
                <Image src="/images/image-9.png" width={326} height={326} alt="icons" title='Image' className='W-64 h-auto' />
            </div>
            <div className='ms-8  space-y-4 md:mt-10'>
                <p className='text-sm text-neutral3'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className='text-primary text-xl font-semibold'>Tim Smith</p>
                <p className='text-neutral5'>British Dragon Boat Racing Association</p>
                <Image src="/images/frame-14.svg" alt="icon" width={600} height={400} className='w-full md:w-[500px] lg:w-[600px] h-auto'
                 />
            </div>
        </div>
  )
}

export default TimSmith