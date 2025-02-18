import React from 'react'

const Design = () => {
  return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:m-20 lg:p-8 mt-20'>
            <div className='mb-4'>
                <img src="/images/pana.png" alt="icons" title='img' width={600} height={400} className='w-full md:w-[500px] lg:w-[600px] h-auto' />
            </div>
            <div className='ms-8  space-y-8'>
                <h3 className='text-3xl mt-10 mb-4 text-accent font-semibold'>How to design your site footer like <br />  we did</h3>
                <p className='text-sm text-neutral3'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className='rounded-md bg-primary px-8 py-3 gap-2 text-white font-medium text-sm'>Learn More</button>
            </div>

        </div>
    )
}

export default Design