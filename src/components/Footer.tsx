import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-[#043873] ">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
             
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                     <Image
                     className='mx-7'
                     src={"/Logo.png"}
                     height={34}
                     width={191}
                     alt='logo'/>
                        <nav className="list-none mb-10 font-extralight my-8 mx-7 text-white">
                       <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-3">
                        <h2 className="title-font font-extrabold text-white tracking-widest text-sm mb-3">Product</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Overview</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Pricing</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Coustomer</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Stories</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-3 ">
                        <h2 className="title-font font-extrabold text-white tracking-widest text-sm mb-3">Resources</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Blog</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Guides</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Tutorials</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Help Center</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-3 ">
                        <h2 className="title-font font-extrabold text-white tracking-widest text-sm mb-3">Company</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">About us</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Carrer</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight hover:text-[#FFE492]">Media Kit</a>
                            </li>
                            <li>
                                <a className="text-white font-extralight  hover:text-[#FFE492]">Helps</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-[#043873]">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center  font-bold sm:text-center">© 2024 _ All Rights Reserved 
                        <a href="https://www.linkedin.com/in/abdullah-abdulrehman-39ab86340" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@Abdullah</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer