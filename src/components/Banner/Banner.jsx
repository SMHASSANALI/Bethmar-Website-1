import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import bannerImage1 from '../../assets/Banner/bannerimage1.png'
import bannerImage2 from '../../assets/Banner/bannerimage2.png'
import bannerImage3 from '../../assets/Banner/bannerimage3.png'

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
            background: bannerImage2
        },
        {
            id: 1,
            text: "Transforming Infrastructure, Enhancing Lives.",
            buttonText: "Learn More",
            background: bannerImage3
        },
        {
            id: 2,
            text: "Connecting the Dots, Between People & Possibilities.",
            buttonText: "Learn More",
            background: bannerImage1
        },
    ];

    return (
        <div id='Banner' className="mx-auto w-full min-h-[300px] xl:min-h-[600px] lg:min-h-[450px] overflow-hidden relative">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop
                interval={6000}
                transitionTime={500}
                onChange={handleSlideChange}
                selectedItem={currentSlide}
                stopOnHover={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
            >
                {slides.map((slide, index) => (
                    <div
                        className="flex items-start justify-start p-8 min-h-[300px] xl:min-h-[600px] lg:min-h-[450px]"
                        key={slide.id}
                        style={{
                            backgroundImage: `url(${slide.background})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'right',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#a91c1a',
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
                                    className="flex flex-col items-start justify-start lg:max-w-[800px] max-w-[200px]"
                                >
                                    <motion.h2
                                        key={`h2-${slide.id}`}
                                        className="leading-loose text-start font-oswald text-white text-xl md:text-8xl md:p-4 font-bold mt-4"
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
                                            className="font-montserrat my-3 lg:m-6 px-6 py-2 bg-none border-white border-2 text-white text-sm lg:text-lg font-semibold shadow-md hover:bg-white hover:border-white hover:text-black transition-all transform hover:scale-105"
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
