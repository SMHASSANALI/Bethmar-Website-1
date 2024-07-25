import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import connect from '../../assets/customer/connectFibre.png';
import gigaclear from '../../assets/customer/gigaclear.png';
import gNetwork from '../../assets/customer/gNetwork.png';
import Kier from '../../assets/customer/Kier.png';
import Virgin from '../../assets/customer/Virgin.png';
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
    const customers = [
        { img: connect, text: 'Connect Fibre' },
        { img: gigaclear, text: 'Giga Clear' },
        { img: gNetwork, text: 'G-Network' },
        { img: Kier, text: 'Kier' },
        { img: Virgin, text: 'Virgin' }
    ];

    return (
        <div className="bg-primary bg-moving-gradient">
            <div className='text-justify w-full mx-auto content-center py-12 rounded-lg '>
                <div className='max-w-[1400px] mx-auto'>
                    <h2 className='mx-auto font-semibold text-3xl lg:text-4xl xl:text-4xl text-center font-montserrat pb-4  mb-2 md:mb-4 xl:mb-6 bg-clip-text text-transparent bg-gradient-to-t from-accentRed-dark to-accentRed'>Meet Our Clients</h2>

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
                            disableOnInteraction: true
                        }}
                        className='swiper-container'
                    >
                        {customers.map((customer, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className='flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md cursor-pointer'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.img
                                        src={customer.img}
                                        alt={customer.text}
                                        className='w-auto h-20 md:w-auto md:h-24 object-cover object-center mx-auto mb-4'
                                        whileHover={{ rotate: 10 }}
                                    />
                                    <p className='text-center text-lg md:text-md font-medium text-slate-400'>{customer.text}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;
