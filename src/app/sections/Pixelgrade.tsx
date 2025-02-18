import React from 'react'

const Pixelgrade = () => {
  return (
    // <div className='container flex justify-around m-6 mt-20 '>
    //     <div className='md:w-1/3'>
    //         <img src="/images/rafiki.png" alt="icons" title='img' className='W-64 h-auto' />
    //     </div>
    //     <div className='md:w-1/2 mt-5'>
    //         <h3 className='text-4xl text-accent font-semibold'>The unseen of spending <br /> three years at Pixelgrade</h3>
    //         <p className='text-sm text-neutral3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
    //     </div>
    // </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:m-20 lg:p-8 mt-20'>
        <div className='mb-4'>
             <img src="/images/rafiki.png" alt="icons" title='img' className='W-64 h-auto' />
        </div>
        <div className='ms-8  space-y-8'>
          <h3 className='text-4xl mb-4 text-accent font-semibold'>The unseen of spending  three <br /> years at Pixelgrade</h3>
          <p className='text-sm text-neutral3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className='rounded-md bg-primary px-8 py-3 gap-2 text-white font-medium text-sm'>Learn More</button>
        </div>

    </div>
  )
}

export default Pixelgrade