import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../assets/Logo/bethmar.png'
import Fiber from '../../assets/footer/Footer.jpeg'

const Footer = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)) , url(${Fiber})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'relative',
    }

    return (
        <div id='Footer' style={divStyle} className="py-6 md:py-6 text-white">
            <div className="max-w-[1400px] flex flex-col md:flex-row justify-between mx-auto border-b border-gray-700 px-4 md:px-0">
                <div className="text-sm md:text-base px-4 w-full lg:w-8/12 md:mb-2 mb-6 flex flex-col lg:flex-row gap-x-12 ">
                    <img src={logo} alt="Company Logo" className="w-auto h-[60px] mb-3 lg:mx-0 mx-auto " />
                    <div className='self-center'>
                        <p className='pb-2 flex font-light'><span className='mr-2 text-nowrap font-montserrat font-medium'>Location :</span> Suite 2,Wentworth Lodge, Great North Road, Welwyn Garden City, AL8 7SR</p>
                        <p className='pb-2 flex font-light'><span className='mr-2 text-nowrap font-montserrat font-medium'>Email :</span> contact@bethmar.co.uk</p>
                    </div>
                </div>
                <div className='flex lg:justify-around w-full md:w-4/12 md:mb-2 mb-6'>
                    <div className="px-4 w-full">
                        <h4 className="mb-2 text-base lg:text-lg font-oswald font-medium text-white">Find Us At</h4>
                        <div className="flex flex-row gap-2">
                            <a className='flex items-center lg:text-sm text-xs' href='#'><FaSquareFacebook className='h-8 w-8 hover:scale-110 hover:-rotate-45 ease-in-out duration-300 transition-all mr-[2px]' />Facebook</a>
                            <a className='flex items-center lg:text-sm text-xs' href='#'><FaLinkedin className='h-8 w-8 hover:scale-110 hover:-rotate-45 ease-in-out duration-300 transition-all mr-[2px]' />Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 text-center text-xs md:text-sm max-w-[1400px] mx-auto px-4 md:px-0 ">
                <div className="flex justify-between items-center">
                    <div className='self-center'>
                        <span>© 2024 Bethmar Ltd. All rights reserved.</span>
                    </div>
                    <div className=''>
                        <a href='https://www.saskasolutions.com/' target='_blank' className='border-b border-gray-400 text-xs font-extralight font-mono text-gray-400'>Designed and Developed by SASKA Solutions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
