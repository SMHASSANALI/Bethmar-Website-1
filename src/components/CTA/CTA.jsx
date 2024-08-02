import React, { useState } from 'react'
import contact from '../../assets/contact/fiberRoll.jpg'
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../ContactForm/ContactForm';


const CTA = () => {
    const [formVisible, setFormVisible] = useState(false);

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div style={divStyle} className='bg-fixed relative flex items-center top-[-10vh] left-0 lg:h-[500px] h-[350px]'>
            <div className='max-w-[1400px] px-4 mx-auto text-white'>
                <h2 className='mx-auto font-semibold text-2xl lg:text-4xl text-center font-oswald text-white mb-4 lg:mb-8'>Transforming Infrastructure with Innovative Solutions</h2>
                <p className='text-sm lg:text-base font-poppins text-center pb-2 lg:pb-4'>Contact Bethmar today for a consultation or quote on our comprehensive range of services.</p>
                <div className='flex justify-center'>
                    <motion.button
                        className="text-xs lg:text-base group relative px-4 py-2 font-medium transition-colors duration-[400ms] font-montserrat bg-accentRed-dark  text-white shadow-md hover:bg-accentRed hover:border-accentRed transform hover:scale-105"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={buttonVariants}
                        transition={{ duration: 1, delay: 0.5 }}
                        onClick={handleClick}
                    >
                        Reach The Experts
                    </motion.button>
                </div>
            </div>
            {formVisible && (
                <ContactForm onClose={handleClick} />
            )}
        </div>
    )
}

export default CTA