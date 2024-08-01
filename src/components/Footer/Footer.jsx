import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/Logo/bethmar.png'
import Fiber from '../../assets/footer/Footer.jpeg'
import { Link } from 'react-router-dom';

const Footer = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)) , url(${Fiber})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'relative',
    }

    return (
        <div style={divStyle} className="py-4 md:py-8 text-white">
            <div className="max-w-[1400px] flex flex-col md:flex-row justify-between items-center mx-auto border-b border-gray-700 py-4 md:py-8 px-4 md:px-0">
                <div className="text-sm md:text-base px-4 w-12/12 lg:w-4/12 lg:mb-2 mb-6">
                    <img src={logo} alt="Company Logo" className="w-auto h-[60px] mb-3 lg:mx-0 mx-auto" />
                    <p className='pb-1 flex font-light'><span className='mr-2 text-nowrap font-montserrat font-medium'>Location :</span> Suite 2,Wentworth Lodge, Great North Road, Welwyn Garden City, AL8 7SR</p>
                    <p className='pb-1 flex font-light'><span className='mr-2 text-nowrap font-montserrat font-medium'>Contact :</span> 01707322748</p>
                    <p className='pb-1 flex font-light'><span className='mr-2 text-nowrap font-montserrat font-medium'>Email :</span> info@bethmar.co.uk</p>
                </div>
                <div className='flex lg:justify-around w-full lg:w-1/2 py-4 md:py-0'>
                    <div className="self-center px-4">
                        <h4 className="mb-4 text-base lg:text-lg font-oswald font-medium text-white ">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <a className='flex items-center lg:text-sm text-xs' href='#'>What They Say About Us</a>
                            <a className='flex items-center lg:text-sm text-xs' href='#'>People We Work With</a>
                            <a className='flex items-center lg:text-sm text-xs' href='#'>Our Numbers</a>
                        </div>
                    </div>
                    <div className="self-center px-4">
                        <h4 className="mb-4 text-base lg:text-lg font-oswald font-medium text-white">Find Us At</h4>
                        <div className="flex flex-col gap-2">
                            <a className='flex items-center lg:text-sm text-xs' href='#'><FaSquareFacebook className='h-8 w-8 hover:scale-110 hover:-rotate-45 ease-in-out duration-300 transition-all mr-2' />Facebook</a>
                            <a className='flex items-center lg:text-sm text-xs' href='#'><FaLinkedin className='h-8 w-8 hover:scale-110 hover:-rotate-45 ease-in-out duration-300 transition-all mr-2' />Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 text-center text-xs md:text-sm max-w-[1400px] mx-auto px-4 md:px-0 ">
                <div className="flex justify-between items-center">
                    <div className='self-center'>
                        <a href="#terms" className="mr-4">Terms & Conditions</a>
                        <span>© 2024 Bethmar Ltd. All rights reserved.</span>
                    </div>
                    <div className=''>
                        <p className='text-xs font-extralight font-mono text-gray-400'>Designed and Developed by SASKA Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
