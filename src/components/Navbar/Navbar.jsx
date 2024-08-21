// import React, { useState } from 'react'
// import bethmarLogo from '../../assets/Logo/bethmar.png'
// import { Link as ScrollLink } from 'react-scroll';
// import ContactForm from '../ContactForm/ContactForm';
// import { IoMdClose, IoMdMenu } from 'react-icons/io';

// const Navbar = () => {
//     const [formVisible, setFormVisible] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleClick = () => {
//         setFormVisible(!formVisible);
//     };

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div className='z-[9999] w-full text-white bg-neutral-900 py-2 md:px-0 px-4 sticky top-0'>
//             <div className='flex flex-row items-center justify-between mx-auto max-w-[1500px]'>
//                 <ScrollLink
//                     to='Banner'
//                     smooth={true}
//                     duration={500}
//                     className='cursor-pointer'
//                 >
//                     <div className='h-8 w-20 md:w-36 md:h-14 flex justify-center items-center'>
//                         <img src={bethmarLogo} alt="Bethmar Logo" className='w-full h-auto' />
//                     </div>
//                 </ScrollLink>
//                 <div className='hidden md:flex items-center gap-6 md:gap-10 font-poppins text-sm md:text-lg'>
//                     <ScrollLink
//                         to='About'
//                         smooth={true}
//                         duration={500}
//                         className='cursor-pointer'
//                     >
//                         About Us
//                     </ScrollLink>
//                     <ScrollLink
//                         to='Services'
//                         smooth={true}
//                         duration={500}
//                         className='cursor-pointer'
//                     >
//                         Services
//                     </ScrollLink>
//                     <ScrollLink
//                         onClick={handleClick}
//                         to='Footer'
//                         smooth={true}
//                         duration={500}
//                         className='cursor-pointer'
//                     >
//                         <button
//                             className="font-montserrat py-2 px-4 bg-slate-200 text-primary text-base font-medium shadow-md hover:bg-white hover:border-white transition-all transform">
//                             Contact
//                         </button>
//                     </ScrollLink>
//                 </div>
//                 <div className="md:hidden">
//                     <button
//                         onClick={toggleMenu}
//                         className="text-3xl text-white focus:outline-none"
//                     >
//                         {menuOpen ? (
//                             <IoMdClose className="transition-transform transform rotate-180 duration-300" />
//                         ) : (
//                             <IoMdMenu className="transition-transform transform rotate-0 duration-300" />
//                         )}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="md:hidden flex flex-col items-start gap-6 mt-4 font-poppins text-lg rounded-lg py-4">
//                     <ScrollLink
//                         to='About'
//                         smooth={true}
//                         duration={500}
//                         className='cursor-pointer border-b border-slate-500 w-full'
//                         onClick={toggleMenu}
//                     >
//                         About Us
//                     </ScrollLink>
//                     <ScrollLink
//                         to='Services'
//                         smooth={true}
//                         duration={500}
//                         className='cursor-pointer border-b border-slate-500 w-full'
//                         onClick={toggleMenu}
//                     >
//                         Services
//                     </ScrollLink>
//                     <ScrollLink
//                         onClick={() => { toggleMenu(); handleClick(); }}
//                         to='Footer'
//                         smooth={true}
//                         duration={500}
//                         className='cursor-pointer'
//                     >
//                         <button
//                             className="font-montserrat px-6 py-2 bg-white text-primary text-sm lg:text-lg font-semibold shadow-md hover:bg-slate-100 hover:border-slate-100 transition-all transform">
//                             Contact
//                         </button>
//                     </ScrollLink>
//                 </div>
//             )}

//             {formVisible && (
//                 <ContactForm onClose={handleClick} />
//             )}
//         </div>
//     )
// }

// export default Navbar;

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
            <div className='hidden md:flex justify-start items-center bg-neutral-800 py-1 px-4 text-xs'>
                <div className='flex items-center gap-4'>
                    <a href="https://www.facebook.com" className='flex items-end gap-1 group text-white hover:text-blue-600 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={20} className='text-blue-500' />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/in/bethmar-limited-47a762244/?trk=public_post_reshare_feed-actor-name&originalSubdomain=uk" className='flex items-end gap-1 group text-white hover:text-blue-500 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={20} className='text-blue-500' />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.jcoffey.com" className='flex items-end gap-1 group text-white hover:text-green-500 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                        <img src={jCoffey} className='size-5' />
                        <span>J Coffey</span>
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className='flex flex-row items-center justify-between mx-auto max-w-[1500px] py-2 md:py-1'>
                <ScrollLink
                    to='Banner'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <div className='h-6 w-16 md:w-28 md:h-12 flex justify-center items-center'>
                        <img src={bethmarLogo} alt="Bethmar Logo" className='w-full h-auto' />
                    </div>
                </ScrollLink>
                <div className='hidden md:flex items-center gap-4 md:gap-8 font-poppins text-xs md:text-sm'>
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
                            className="font-montserrat py-1 px-4 bg-accentRed text-white text-xs md:text-sm font-medium hover:bg-accentRed-dark transition-all transform">
                            Let's Talk
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
            {menuOpen && (
                <div className="md:hidden flex flex-col items-start gap-4 mt-4 font-poppins text-sm rounded-lg py-2">
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
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className='text-white text-xl hover:text-blue-600 transition-colors duration-300' />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='text-white text-xl hover:text-blue-500 transition-colors duration-300' />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-white text-xl hover:text-red-600 transition-colors duration-300' />
                        </a>
                        <a href="mailto:info@parentcompany.com" target="_blank" rel="noopener noreferrer">
                            <MdEmail className='text-white text-xl hover:text-gray-400 transition-colors duration-300' />
                        </a>
                    </div>
                </div>
            )}

            {formVisible && (
                <ContactForm onClose={handleClick} />
            )}
        </div>
    )
}

export default Navbar;
