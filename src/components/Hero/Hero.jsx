import React from 'react'
import Button from '../Button/Button'
import hero from '../../assets/Banner/Infrastructure_hero.jpg'
import { motion } from 'framer-motion'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    return (
        <div className='bg-white rounded min-h-[100vh] flex items-center'>
            <div
                ref={ref}
                className='h-[100vh] md:h-[80vh] xl:h-[70vh] px-4 mx-auto max-w-[1400px]   flex xl:flex-row flex-col justify-center items-center overflow-hidden'>
                <motion.div
                    animate={{ x: inView ? 0 : -700 }}
                    transition={{ duration: 2, ease: 'backInOut' }}
                    exit={{ opacity: 0 }}
                    className='w-full xl:w-1/2 px-12 py-8 bg-opacity-50 backdrop-blur-lg bg-primary-light z-10 rounded'>
                    <h1 className='text-2xl xl:text-4xl font-oswald font-bold pb-4 leading-none text-white'>Building Infrastructure Solutions for a Connected World</h1>
                    <p className='text-xs xl:text-base font-light py-8 text-white'>Bethmar is a leading infrastructure construction company based in the UK. We specialize in providing telecom turnkey solutions, civil infrastructure solutions, traffic management diversions, and high-speed solutions. With expertise in construction of spill tanks, replacing water mains, EV chargers installation, DNO liaison, meter installation, and solar park data center solutions, we are committed to delivering exceptional services since 2013.</p>
                    <div className='gap-x-6 flex'>
                        <ScrollLink
                            to='Contact'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                        >
                            <motion.button
                                className="text-xs lg:text-base group relative px-4 py-2 font-medium transition-colors duration-[400ms] font-montserrat bg-accentRed-dark  text-white shadow-md hover:bg-accentRed hover:border-accentRed transform hover:scale-105"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={buttonVariants}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Contact Now
                            </motion.button>
                        </ScrollLink>
                        <ScrollLink
                            to='About'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                        >
                            <Button text={'Learn More'} color={'accentRed-dark'} />
                        </ScrollLink>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1.5 : 0.5 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='xl:w-1/2  lg:h-[75%] mb-12 '>
                    <img src={hero} alt="" className='h-full w-full object-cover' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero