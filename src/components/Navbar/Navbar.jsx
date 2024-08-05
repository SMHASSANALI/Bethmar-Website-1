import React, { useState } from 'react'
import bethmarLogo from '../../assets/Logo/bethmar.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ContactForm from '../ContactForm/ContactForm';

const Navbar = () => {
    const [formVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className='z-[9999] w-full text-white bg-neutral-900 py-2 md:px-0 px-4 sticky top-0 content-center'>
            <div className='flex flex-row items-center justify-between mx-auto px-4'>
                <div className='h-8 w-20 md:w-36 md:h-14 flex justify-center items-center'>
                    <img src={bethmarLogo} alt="" className='w-full h-auto' />
                </div>
                <div className='flex items-center gap-6 md:gap-10 font-poppins text-sm md:text-lg'>
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
                        Contact
                    </ScrollLink>
                </div>
            </div>
            {formVisible && (
                <ContactForm onClose={handleClick} />
            )}
        </div>
    )
}

export default Navbar