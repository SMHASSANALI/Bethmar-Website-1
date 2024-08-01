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
        <div className='flex justify-center items-center my-12'>
            <div className='container items-center'>
                <motion.div
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    ref={ref}
                    className='relative max-w-[1400px] mx-4 px-6 lg:px-12 lg:py-6 py-3 lg:mx-auto bg-primary shadow-lg z-10 rounded'
                >
                    <div className='flex flex-col md:flex-row h-full py-6'>
                        <div className='w-full md:w-6/12 flex md:flex-col flex-row justify-between lg:mb-0 mb-2'>
                            <div className='w-12/12 lg:w-10/12'>
                                {/* <h4 className='text-base md:text-xl font-normal text-start font-poppins pb-2 lg:pb-4 bg-clip-text text-transparent bg-gradient-to-t from-accentRed to-accentRed-dark'>
                                    Benefits
                                </h4> */}
                                <h2 className='font-semibold text-2xl lg:text-4xl mb-1 lg:mb-0 font-oswald text-white'>
                                    Choose Bethmar for your infrastructure projects and experience the benefits of expertise
                                </h2>
                            </div>
                        </div>
                        <div className='w-full md:w-6/12 h-full'>
                            <p className='text-xs lg:text-base font-poppins text-white'>
                                Telecom turnkey solutions, civil infrastructure
                                solutions, traffic management, hi-speed solutions, construction
                                of spill tanks & spill tank bases, EV chargers installation,
                                DNO liaison and meter installation, solar park data center solutions,
                                and more. With over 25 years of experience in the industry,
                                Bethmar is a trusted company based in the UK that delivers reliable and
                                efficient infrastructure solution.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <CTA />
            </div>
        </div>
    )
}

export default Benefits