import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../assets/Banner/Banner1.png';
import banner2 from '../../assets/Banner/Banner2.png';
import banner3 from '../../assets/Banner/Banner3.jfif';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const slideVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    const slides = [
        {
            id: 0,
            text: "Empowering Connections, Endless Possibilities.",
            buttonText: "Learn More",
            background: banner1
        },
        {
            id: 1,
            text: "Transforming Infrastructure, Enhancing Lives.",
            buttonText: "Get Started",
            background: banner2
        },
        {
            id: 2,
            text: "Connecting the Dots, Between People & Possibilities.",
            buttonText: "Join Us",
            background: banner3
        },
    ];

    return (
        <div className="mx-auto w-full max-h-[500px] overflow-hidden relative">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={6000}
                transitionTime={500}
                onChange={handleSlideChange}
                selectedItem={currentSlide}
                stopOnHover={false}
                showArrows={true}
                showStatus={false}
                showIndicators={true}
            >
                {slides.map((slide, index) => (
                    <div
                        className="flex items-center min-h-[40vh] lg:min-h-[70vh] justify-center p-8"
                        key={slide.id}
                        style={{
                            backgroundImage: `url(${slide.background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {currentSlide === index && (
                                <motion.div
                                    key={slide.id}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={slideVariants}
                                    transition={{ duration: 0.5 }}
                                    className="text-center space-y-8"
                                >
                                    <motion.h2
                                        key={`h2-${slide.id}`}
                                        className="font-oswald mx-auto text-white text-xl md:text-5xl p-1 md:p-4 font-bold mt-4 bg-gray-900 bg-opacity-30 backdrop-blur-sm shadow-lg"
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={slideVariants}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {slide.text}
                                    </motion.h2>
                                    <ScrollLink
                                        to='About'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer'
                                    >
                                        <motion.button
                                            key={`button-${slide.id}`}
                                            className="font-montserrat mt-4 px-6 py-2 bg-accentRed-dark text-white text-sm lg:text-lg font-semibold shadow-md hover:bg-accentRed hover:border-accentRed transition-transform transform hover:scale-105"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={buttonVariants}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {slide.buttonText}
                                        </motion.button>
                                    </ScrollLink>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
