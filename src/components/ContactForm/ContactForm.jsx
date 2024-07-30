import React from 'react';
import { motion } from 'framer-motion';
import LocationMap from '../LocationMap/LocationMap';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })


    return (
        <div id="Contact" className=" max-w-[1400px] py-8  mx-auto min-h-[100vh]">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                <div
                    ref={ref}
                    className="md:w-1/2 p-4 "
                >
                    <motion.h2
                        animate={{ x: inView ? 0 : -500, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className="mx-auto font-semibold text-xl lg:text-3xl font-montserrat pb-4">Contact Us</motion.h2>
                    <motion.p
                        animate={{ x: inView ? 0 : -500, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className='text-sm lg:text-xl py-2 font-poppins flex font-regular'><span className='font-semibold'></span> Suite 2,Wentworth Lodge, Great North Road, Welwyn Garden City, AL8 7SR</motion.p>
                    <motion.p
                        animate={{ x: inView ? 0 : -500, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className='text-sm lg:text-xl py-2 font-poppins flex font-regular'><span className='font-semibold'></span> 01707322748</motion.p>
                    <motion.p
                        animate={{ x: inView ? 0 : -500, opacity: inView ? 1 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        className='text-sm lg:text-xl py-2 font-poppins flex font-regular pb-6'><span className='font-semibold'></span> info@bethmar.co.uk</motion.p>
                    <LocationMap />
                </div>
                <div
                    className="md:w-1/2"
                >
                    <form className="max-w-xl mx-4 lg:mx-auto bg-white p-8 rounded shadow-lg">
                        <div className="mb-4">
                            <label className="block text-primary mb-2 text-base" htmlFor="name">Name</label>
                            <input autoComplete='name' className="w-full px-4 py-2 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light bg-slate-300" type="text" id="name" name="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-primary mb-2 text-base" htmlFor="email">Email</label>
                            <input autoComplete='email' className="w-full px-4 py-2 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light bg-slate-300" type="email" id="email" name="email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-primary mb-2 text-base" htmlFor="phone">Phone</label>
                            <input autoComplete='Phone' className="w-full px-4 py-2 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light bg-slate-300" type="text" id="phone" name="phone" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-primary mb-2 text-base" htmlFor="subject">Subject</label>
                            <input className="w-full px-4 py-2 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light bg-slate-300" type="text" id="subject" name="subject" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-primary mb-2 text-base" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-2 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accentRed-light bg-slate-300" id="message" name="message" rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="font-montserrat px-6 py-3 bg-accentRed-dark  text-sm md:text-base shadow-md hover:bg-accentRed transition-all duration-300 text-white"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
