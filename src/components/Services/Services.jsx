import React from 'react';
import HoverCard from '../HoverCard/HoverCard';
import civil from '../../assets/Cards/CivilServices.jpg';
import telecom from '../../assets/Cards/FiberServices.jpg';
import trafficManagement from '../../assets/Cards/TrafficManagementServices.jpg';
import power from '../../assets/Cards/transformer.jpg';
import water from '../../assets/Cards/Water.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
};

const Services = () => {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <div className='flex justify-center items-center my-12'>
            <div id='Services' className='lg:py-6 py-12 container max-w-[1400px] rounded shadow-lg lg:mx-auto bg-white mx-4 flex items-center'>
                <div className='px-4 lg:px-12'>
                    <div className='flex flex-col lg:flex-row pb-6'>
                        <motion.div
                            className='w-12/12 lg:w-4/12'
                            ref={ref}
                            initial='hidden'
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                        >
                            {/* <h4 className='text-base md:text-xl font-normal text-center lg:text-start font-poppins mb-3 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-accentRed-dark to-accentRed-light'>
                                Reliable
                            </h4> */}
                            <motion.h1
                                animate={{ opacity: inView ? 1 : 0, }}
                                transition={{ duration: 1, ease: "linear" }}
                                className=' mx-auto font-semibold text-2xl lg:text-4xl font-oswald lg:pb-0 pb-2 lg:text-start text-center text-primary'>
                                Services & Solutions for Your Needs
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            className='w-12/12 lg:w-6/12 ml-auto'
                            ref={ref}
                            initial='hidden'
                            animate={inView ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                        >
                            <p className='text-sm  lg:text-base font-light font-poppins text-primary-light'>
                                At Bethmar, we offer a wide range of infrastructure, telecom, and traffic management services to meet your specific requirements.
                                From telecom turnkey solutions to traffic management solutions, our experienced team is dedicated to delivering high-quality results.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        className='grid md:grid-cols-5 grid-cols-1 gap-x-4 gap-y-8 pt-6 lg:pt-12'
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        variants={container}
                    >
                        <motion.div variants={fadeInUp}>
                            <HoverCard
                                title={'Telecom'}
                                desc={'Turnkey solutions with design validation & built'}
                                list={["MDU's", "RFSI", "Break Fix", "Emergency Work"]}
                                imgSrc={telecom}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <HoverCard
                                title={'Civil'}
                                desc={'Trenching & ducting on all surfaces including highways'}
                                list={["In house reinstatement", "Planning", "Access Cabinet", "Chambers"]}
                                imgSrc={civil}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <HoverCard
                                title={'Traffic Management'}
                                desc={''}
                                list={["In house TM services", "TM Plans", "Diversion", "Manual Control", "High-speed solutions including IPV", "HA permits", "TTRO Applications"]}
                                imgSrc={trafficManagement}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <HoverCard
                                title={'Water'}
                                desc={''}
                                list={["Construction of spill tanks", "Replacing water mains"]}
                                imgSrc={water}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <HoverCard
                                title={'Power'}
                                desc={''}
                                list={["EV chargers installation including feeder pillars", "DNO liaison & meter installation", "Solutions for solar park and data center"]}
                                imgSrc={power}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div >
        </div>
    );
};

export default Services;
