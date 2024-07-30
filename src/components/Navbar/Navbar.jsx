import React from 'react'
import bethmarLogo from '../../assets/Logo/bethmar.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='z-[9999] w-full text-white bg-neutral-900 md:px-0 px-4 h-[6vh] md:h-[10vh] sticky top-0 content-center'>
            <div className='max-w-[1400px] flex justify-between mx-auto px-4'>
                <div className='h-8 w-16 md:w-28 md:h-14'>
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
                        to='Contact'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar