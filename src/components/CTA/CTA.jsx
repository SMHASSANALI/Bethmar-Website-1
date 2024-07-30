import React from 'react'
import contact from '../../assets/contact/fiberRoll.jpg'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';


const CTA = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    return (
        <div style={divStyle} className='bg-fixed relative flex items-center top-[-15vh] left-0'>
            <div className='max-w-[1400px] px-4 mx-auto text-white'>
                <h2 className='mx-auto font-semibold text-2xl lg:text-4xl text-center font-oswald text-accentGreen'>Transforming Infrastructure with Innovative Solutions</h2>
                <p className='text-sm lg:text-base font-poppins text-center pt-9 pb-2'>Contact Bethmar today for a consultation or quote on our comprehensive range of services.</p>
                <div className='flex justify-center'>
                    <ScrollLink
                        to='Contact'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <motion.button
                            className="text-xs lg:text-base group relative px-4 py-2 font-medium transition-colors duration-[400ms] font-montserrat bg-accentGreen-dark  text-white shadow-md hover:bg-accentGreen hover:border-accentGreen transform hover:scale-105"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={buttonVariants}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Contact Now
                        </motion.button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default CTA