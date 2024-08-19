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
        <div style={divStyle} className='bg-fixed relative flex items-center top-[-10vh] w-[99.3vw] left-0 lg:h-[80vh] h-[60vh]'>
            <div className='mx-auto text-white'>
                <h2 className='mx-auto font-semibold text-2xl lg:text-4xl text-center font-oswald text-white mb-4 lg:mb-8'>Transforming Infrastructure with Innovative Solutions</h2>
                <p className='text-sm lg:text-base font-poppins text-center pb-2 lg:pb-4'>Contact Bethmar today for a consultation or quote on our comprehensive range of services.</p>
                <div className='flex justify-center'>
                    <motion.button
                        className="text-base group relative py-2 px-4 font-medium transition-all duration-[400ms] font-montserrat bg-slate-200 text-primary shadow-md hover:bg-white hover:border-white transform hover:scale-105"
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