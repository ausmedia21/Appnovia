import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
            <div className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 space-x-8 text-start mx-8 my-4 md:text-left">
                        <div className="space-y-4">
                            <Image src="/images/Logo (2).svg" alt="logo" width={191} height={29} className="min-w-[10vw] h-auto mt-8"/>
                            <p className='text-sm text-neutral4'>Copyright &copy; 2020 Nextcent ltd.</p>
                            <p className='text-sm text-neutral4'>All rights reserved</p>
                            <Image src="/images/Social Links.svg" alt="logo" width={32} height={32} className="w-full md:w-3/4 h-auto py-6" />
                            
                        </div>

                        <div>
                            <h5 className='text-white font-semibold text-xl py-7'>Company</h5>
                            <ul className='space-y-4 text-sm font-normal'>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/about" className='text-sm text-neutral4 hover:text-lg'>
                                        About Us
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/blog" className='text-sm text-neutral4 hover:text-lg'>
                                        Blog
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/contact" className='text-sm text-neutral4 hover:text-lg'>
                                        Contact Us
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/pricing" className='text-sm text-neutral4 hover:text-lg'>
                                        Pricing
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/testimonial" className='text-sm text-neutral4 hover:text-lg'>
                                        Testimonial
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold text-xl py-7">Support</h3>
                            <ul className='space-y-4 text-sm font-normal'>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/" className='text-sm text-neutral4 hover:text-lg'>
                                        Help center
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/" className='text-sm text-neutral4 hover:text-lg'>
                                        Terms of service
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/" className='text-sm text-neutral4 hover:text-lg'>
                                        Legal
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/" className='text-sm text-neutral4 hover:text-lg'>
                                        Privacy policy
                                    </Link>
                                </li>
                                <li className='text-sm text-neutral4'>
                                    <Link href="/" className='text-sm text-neutral4 hover:text-lg '>
                                        Status
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold md:text-center text-xl py-7">Stay up to date</h3>
                            <form className="w-full max-w-md text-neutral6">
                                <input placeholder="Your email address" className="bg-secondary w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral4 "/>
                            </form>
                            
                        </div>

                    </div>
            </div>

        </div>
    )
}

export default Footer