import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSkype, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#2a254b] text-white body-font mt-4 px-10">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <h2 className="title-font font-medium xt-gray-900 tracking-widest text-sm mb-3 text-[16px]">Menu</h2>
                            <nav className="list-none mb-10 font-light leading-10">
                                <li><a className="text-[14px]">New arrivals</a></li>
                                <li><a className="text-[14px]">Best sellers</a></li>
                                <li><a className="text-[14px]">Recently viewed</a></li>
                                <li><a className="text-[14px]">Popular this week</a></li>
                                <li><a className="text-[14px]">All products</a></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 w-full ">
                            <h2 className="title-font font-medim tracking-widest text-sm mb-3 text-[16px]">Categories</h2>
                            <nav className="list-none mb-10 font-light leading-10">
                                <li><a className="text-[14px]">Crockery</a></li>
                                <li><a className="text-[14px]">Furniture</a></li>
                                <li><a className="text-[14px]">Homeware</a></li>
                                <li><a className="text-[14px]">Plant pots</a></li>
                                <li><a className="text-[14px]">Chairs</a></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 w-full ">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-[16px]">Our company</h2>
                            <nav className="list-none mb-10 font-light leading-10">
                                <li><a className="text-[14px]">About us</a></li>
                                <li><a className="text-[14px]">Vacancies</a></li>
                                <li><a className="text-[14px]">Contact us</a></li>
                                <li><a className="text-[14px]">Privacy</a></li>
                                <li><a className="text-[14px]">Return policy</a></li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 w-full">
                            <h2 className="title-font font-normal tracking-widest text-sm mb-3">Join our meeting list</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">

                                    <input
                                        type="text"
                                        id="footer-field"
                                        name="footer-field"
                                        placeholder="your@email.com"
                                        className="w-full bg-gray-300 bg-opacity-50 bordertext-gray-700 py-1 px-3 leading-8 relative"
                                    />
                                </div>
                                <button className="w-[110px] py-2 px-2 bg-white text-black border-0 focus:outline-none hover:bg-gray-200 absolute right-36">
                                    Sign up
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="border-t-[0.5px] border-gray-50">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-light items-center md:justify-start justify-center text-white">
                            <span className=" text-[14px]">Copyright 2012 Avion LTD</span>
                        </a>

                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-white hover:text-indigo-500">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-white">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-white">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-white">
                                <FaSkype size={20} />
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-white">
                                <FaPinterestP size={20} />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;