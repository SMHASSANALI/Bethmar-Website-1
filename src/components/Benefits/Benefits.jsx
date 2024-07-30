import React, { useRef } from 'react'
import Button from '../Button/Button'
import CTA from '../CTA/CTA'
import { motion, } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const Benefits = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div className=' lg:h-[100vh] items-center'>
            <motion.div
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }}
                transition={{ duration: 0.5, ease: "linear" }}
                ref={ref}
                className='relative max-w-[1400px] px-8 mx-auto bg-primary-light bg-opacity-50 backdrop-blur-sm shadow-lg z-10 rounded'
            >
                <div className='flex flex-col md:flex-row h-full py-12'>
                    <div className='w-full md:w-6/12 flex md:flex-col flex-row justify-between md:mb-0 mb-4'>
                        <div className='w-8/12 lg:w-10/12'>
                            <h4 className='text-xl md:text-3xl font-medium text-start font-poppins md:pt-0 pt-[6px] bg-clip-text text-transparent bg-gradient-to-t from-accentRed to-accentRed-dark'>
                                Benefits
                            </h4>
                            <h2 className='font-semibold text-2xl lg:text-4xl font-oswald pt-4 text-white'>
                                Choose Bethmar for your infrastructure projects and experience the benefits of expertise
                            </h2>
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 h-full'>
                        <p className='text-xs lg:text-base font-poppins text-white'>
                            Telecom turnkey solutions, civil infrastructure
                            solutions, traffic management diversions, hi-speed solutions, construction
                            of spill tanks, replacing water mains, EV chargers installation,
                            DNO liaison and meter installation, solar park data center solutions,
                            and more. With over 8 years of experience in the industry,
                            Bethmar is a trusted company based in the UK that delivers reliable and
                            efficient infrastructure construction services.
                        </p>
                    </div>
                </div>
            </motion.div>
            <CTA />
        </div>
    )
}

export default Benefits