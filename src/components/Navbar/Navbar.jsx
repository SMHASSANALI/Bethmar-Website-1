import React, { useState } from 'react';
import bethmarLogo from '../../assets/Logo/bethmar.png';
import { Link as ScrollLink } from 'react-scroll';
import ContactForm from '../ContactForm/ContactForm';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import jCoffey from '../../assets/Logo/JCoffeylogo.jpg'

const Navbar = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='z-[9999] w-full text-white bg-neutral-900 sticky top-0'>
            {/* Top bar with social media links and tagline */}
            <section className=' bg-neutral-800'>
                <div className='hidden md:flex justify-start items-center max-w-[1500px] text-xs flex-row  mx-auto py-2 md:py-1'>
                    <div className='flex items-center gap-4 px-4'>
                        <a href="https://www.facebook.com" className='flex items-end gap-1 group text-white hover:text-blue-600 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={20} className='text-blue-500' />
                        </a>
                        <a href="https://www.linkedin.com/in/bethmar-limited-47a762244/?trk=public_post_reshare_feed-actor-name&originalSubdomain=uk" className='flex items-end gap-1 group text-white hover:text-blue-500 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={20} className='text-blue-500' />
                        </a>
                        <a href="https://www.jcoffey.com" className='flex items-end gap-1 group text-white hover:text-green-500 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                            <img src={jCoffey} className='size-5' />
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Navbar */}
            <div className='flex flex-row items-center justify-between mx-auto max-w-[1500px] py-2 md:py-1 px-4'>
                <ScrollLink
                    to='Banner'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <div className='h-auto w-24 md:w-32 flex justify-center items-center py-1'>
                        <img src={bethmarLogo} alt="Bethmar Logo" className='w-full h-auto' />
                    </div>
                </ScrollLink>
                <div className='hidden md:flex ml-auto px-[16px] md:px-[32px] items-center gap-4 md:gap-8 font-poppins text-sm md:text-base'>
                    <ScrollLink
                        to='Banner'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to='About'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        to='Services'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        Services
                    </ScrollLink>
                </div>
                <div className='hidden md:flex'>
                    <ScrollLink
                        onClick={handleClick}
                        to='Footer'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <button
                            className="text-base group relative py-2 px-4 font-medium transition-all duration-[400ms] font-montserrat bg-accentRed-dark text-white shadow-md hover:bg-accentRed transform hover:scale-105">
                            Contact Now
                        </button>
                    </ScrollLink>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <IoMdClose className="transition-transform transform rotate-180 duration-300" />
                        ) : (
                            <IoMdMenu className="transition-transform transform rotate-0 duration-300" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <div className="md:hidden flex flex-col items-start gap-4 mt-4 font-poppins text-sm rounded-lg py-2 px-4">
                        <ScrollLink
                            to='Banner'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b border-slate-500 w-full'
                            onClick={toggleMenu}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to='About'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b border-slate-500 w-full'
                            onClick={toggleMenu}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            to='Services'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b border-slate-500 w-full'
                            onClick={toggleMenu}
                        >
                            Services
                        </ScrollLink>
                        <ScrollLink
                            to='Contact'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                            onClick={toggleMenu}
                        >
                            Contact
                        </ScrollLink>
                        <ScrollLink
                            onClick={() => { toggleMenu(); handleClick(); }}
                            to='Footer'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                        >
                            <button
                                className="font-montserrat py-1 px-4 bg-accentRed text-white text-xs md:text-sm font-medium hover:bg-accentRed-dark transition-all transform">
                                Let's Talk
                            </button>
                        </ScrollLink>
                        <div className='flex flex-row gap-3 w-full justify-start mt-4'>
                            <a href="https://www.facebook.com" className='flex items-end gap-1 group text-white hover:text-blue-600 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={20} className='text-blue-500' />
                            </a>
                            <a href="https://www.linkedin.com/in/bethmar-limited-47a762244/?trk=public_post_reshare_feed-actor-name&originalSubdomain=uk" className='flex items-end gap-1 group text-white hover:text-blue-500 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={20} className='text-blue-500' />
                            </a>
                            <a href="https://www.jcoffey.com" className='flex items-end gap-1 group text-white hover:text-green-500 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                                <img src={jCoffey} className='size-5' />
                            </a>
                        </div>
                    </div>
                )
            }

            {
                formVisible && (
                    <ContactForm onClose={handleClick} />
                )
            }
        </div >
    )
}

export default Navbar;
