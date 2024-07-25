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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div id="Services" className='max-w-[1400px] px-4 mx-auto xl:py-0 py-12 my-12'>
            <div className='flex flex-col lg:flex-row'>
                <motion.div
                    className='w-12/12 lg:w-4/12'
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                >
                    <h4 className='text-base md:text-lg text-start font-poppins mb-2 md:mb-4 xl:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-accentRed-dark to-accentRed-light'>
                        Innovative
                    </h4>
                    <h1 className='mx-auto font-semibold text-3xl lg:text-4xl xl:text-4xl font-montserrat pb-4 lg:text-start text-center'>
                        Services & Solutions for Your Needs
                    </h1>
                </motion.div>
                <motion.div
                    className='w-12/12 lg:w-6/12 ml-auto'
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                >
                    <p className='text-base md:text-lg font-light font-poppins'>
                        At Bethmar, we offer a wide range of infrastructure, telecom, and traffic management services to meet your specific requirements. From telecom turnkey solutions to traffic management diversions, our experienced team is dedicated to delivering high-quality results.
                    </p>
                </motion.div>
            </div>
            <motion.div
                className='grid md:grid-cols-5 grid-cols-2 gap-4 pt-12'
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
                        list={["In house reinstatement", "Planning", "HA permits", "TTRO Applications"]}
                        imgSrc={civil}
                    />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <HoverCard
                        title={'Traffic Management'}
                        desc={''}
                        list={["In house TM services", "TM Plans", "Diversion", "Manual Control", "High-speed solutions including IPV"]}
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
    );
};

export default Services;
