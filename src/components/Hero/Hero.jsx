import React from 'react'
import Button from '../Button/Button'
import hero from '../../assets/Banner/Infrastructure_hero.jpg'
import { motion } from 'framer-motion'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
    return (
        <div
            className='border xl:h-[70vh] max-w-[1400px] px-4 md:gap-x-40 flex xl:flex-row flex-col justify-center items-center mx-auto'>
            <motion.div
                initial={{ x: -250 }}
                animate={{ x: 1 }}
                transition={{ duration: 1.5, ease: 'backInOut' }}
                exit={{ opacity: 0 }}
                className='w-full xl:w-1/2 py-8 xl:py-0'>
                <h1 className='text-3xl xl:text-5xl font-montserrat font-bold pb-4 leading-none'>Building Infrastructure Solutions for a Connected World</h1>
                <p className='text-xs xl:text-base font-poppins pb-6'>Bethmar is a leading infrastructure construction company based in the UK. We specialize in providing telecom turnkey solutions, civil infrastructure solutions, traffic management diversions, and high-speed solutions. With expertise in construction of spill tanks, replacing water mains, EV chargers installation, DNO liaison, meter installation, and solar park data center solutions, we are committed to delivering exceptional services since 2013.</p>
                <ScrollLink
                    to='About'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <Button text={'Learn More'} color={'black'} />
                </ScrollLink>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='xl:w-1/2 h-[75%] pb-12'>
                <img src={hero} alt="" />
            </motion.div>
        </div>
    )
}

export default Hero