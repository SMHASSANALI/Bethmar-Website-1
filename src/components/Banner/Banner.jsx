import React, { useState } from 'react'
import bannerImg from '../../assets/Banner/BannerImage.jpg'
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion'
import { FaCheckDouble } from 'react-icons/fa6';
import ContactForm from '../ContactForm/ContactForm';

const Banner = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const [formVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    const textAnimationVariants = {
        initial: { color: 'transparent' }, // Start with white text
        animate: { color: '#ffffff' }, // Transition to black text
    };

    const divAnimationVariants = {
        initial: { x: '-100%' },
        animate: { x: '0%' },
    };

    return (
        <section style={divStyle} className='flex items-center h-[70vh] w-full'>
            <div id='Banner' className='max-w-[1500px] ml-auto flex-row  px-4 lg:w-6/12'>
                <div className='py-6 px-4 xl:py-8 xl:px-12 bg-gradient-to-tr from-primary to-primary-dark rounded-lg'>
                    <h1 className='text-3xl xl:text-5xl lg:text-4xl font-semibold text-white tracking-wide leading-tight font-oswald max-w-2xl'>
                        Transforming{' '}
                        <motion.span
                            className="relative inline-block"
                            style={{ overflow: 'hidden', position: 'relative' }}
                        >
                            <motion.span
                                initial="initial"
                                animate="animate"
                                variants={textAnimationVariants}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                style={{ mixBlendMode: 'difference' }}
                                className="relative z-20"
                            >
                                infrastructure,
                            </motion.span>
                            <motion.div
                                className="absolute inset-0 bg-white z-10 rounded"
                                initial="initial"
                                animate="animate"
                                variants={divAnimationVariants}
                                transition={{ duration: 1.5, delay: 1.5 }}
                            />
                        </motion.span>
                        Enhancing Lives.
                    </h1>
                    <p className='text-base lg:text-lg font-light font-Poppins my-4 px-1 text-slate-100'>Providing comprehensive turnkey telecom services, civil infrastructure solutions, traffic management, and high-speed solutions.</p>
                    <ul className='text-sm font-light font-Poppins mt-8 mb-4 px-1 text-slate-100 space-y-2'>
                        <li className='flex flex-row items-center gap-x-2' ><FaCheckDouble size={18} className='text-accentRed' /> Full Turnkey Telecom</li>
                        <li className='flex flex-row items-center gap-x-2' ><FaCheckDouble size={18} className='text-accentRed' /> Over 25 years of industry experience</li>
                        <li className='flex flex-row items-center gap-x-2' ><FaCheckDouble size={18} className='text-accentRed' /> EUSR CERTIFIED</li>
                    </ul>
                    <div className=''>
                        <ScrollLink
                            to='Footer'
                            onClick={handleClick}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                        >
                            <motion.button
                                className="text-base group relative py-2 px-4 font-medium transition-all duration-[400ms] font-montserrat bg-accentRed-dark text-white shadow-md hover:bg-accentRed transform hover:scale-105"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={buttonVariants}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Get a Quote
                            </motion.button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            {formVisible && (
                <ContactForm onClose={handleClick} />
            )}
        </section>
    )
}

export default Banner;
