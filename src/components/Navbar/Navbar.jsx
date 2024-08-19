import React, { useState } from 'react'
import bethmarLogo from '../../assets/Logo/bethmar.png'
import { Link as ScrollLink } from 'react-scroll';
import ContactForm from '../ContactForm/ContactForm';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

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
        <div className='z-[9999] w-full text-white bg-neutral-900 py-2 md:px-0 px-4 sticky top-0'>
            <div className='flex flex-row items-center justify-between mx-auto max-w-[1500px]'>
                <ScrollLink
                    to='Banner'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <div className='h-8 w-20 md:w-36 md:h-14 flex justify-center items-center'>
                        <img src={bethmarLogo} alt="Bethmar Logo" className='w-full h-auto' />
                    </div>
                </ScrollLink>
                <div className='hidden md:flex items-center gap-6 md:gap-10 font-poppins text-sm md:text-lg'>
                    <ScrollLink
                        to='About'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        About Us
                    </ScrollLink>
                    <ScrollLink
                        to='Services'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        Services
                    </ScrollLink>
                    <ScrollLink
                        onClick={handleClick}
                        to='Footer'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <button
                            className="font-montserrat py-2 px-4 bg-slate-200 text-primary text-base font-medium shadow-md hover:bg-white hover:border-white transition-all transform">
                            Contact
                        </button>
                    </ScrollLink>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl text-white focus:outline-none"
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
            {menuOpen && (
                <div className="md:hidden flex flex-col items-start gap-6 mt-4 font-poppins text-lg rounded-lg py-4">
                    <ScrollLink
                        to='About'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer border-b border-slate-500 w-full'
                        onClick={toggleMenu}
                    >
                        About Us
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
                        onClick={() => { toggleMenu(); handleClick(); }}
                        to='Footer'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <button
                            className="font-montserrat px-6 py-2 bg-white text-primary text-sm lg:text-lg font-semibold shadow-md hover:bg-slate-100 hover:border-slate-100 transition-all transform">
                            Contact
                        </button>
                    </ScrollLink>
                </div>
            )}

            {formVisible && (
                <ContactForm onClose={handleClick} />
            )}
        </div>
    )
}

export default Navbar;
