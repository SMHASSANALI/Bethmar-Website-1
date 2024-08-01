import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import connect from '../../assets/customer/connect.png';
import gigaclear from '../../assets/customer/gigaclear.png';
import gNetwork from '../../assets/customer/gNetwork.png';
import Kier from '../../assets/customer/Kier.png';
import Virgin from '../../assets/customer/Virgin.png';
import { Autoplay, Pagination } from "swiper/modules";
import { useInView } from "react-intersection-observer";

const Slider = () => {
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

    const customers = [
        { img: connect, text: 'Connect Fibre' },
        { img: gigaclear, text: 'Giga Clear' },
        { img: gNetwork, text: 'G-Network' },
        { img: Kier, text: 'Kier' },
        { img: Virgin, text: 'Virgin' }
    ];

    return (
        <div ref={ref} className="flex items-center justify-center my-12">
            <div className='container text-justify w-full mx-auto content-center'>
                <div className='max-w-[1400px] mx-auto'>
                    <motion.h2
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='mx-auto font-semibold text-2xl lg:text-4xl text-center font-poppins mb-3 lg:mb-6 text-primary'>Meet Our Clients</motion.h2>
                    <motion.div
                        animate={{ y: inView ? 1 : 200, opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false
                            }}
                            className='swiper-container mx-4 lg:mx-0 '
                        >
                            {customers.map((customer, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        className='flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer bg-white'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.img
                                            src={customer.img}
                                            alt={customer.text}
                                            className='w-auto h-20 md:w-auto md:h-24 object-cover object-center mx-auto mb-4'
                                            whileHover={{ rotate: 10 }}
                                        />
                                        <p className='text-center text-lg md:text-md font-medium text-primary'>{customer.text}</p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
