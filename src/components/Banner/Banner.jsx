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
        <div id='Banner' className="mx-auto w-full min-h-[300px] xl:min-h-[600px] lg:min-h-[450px] overflow-hidden">
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
                        className="flex items-start justify-start p-4 lg:p-8 min-h-[250px] xl:min-h-[600px] lg:min-h-[450px]"
                        key={slide.id}
                        style={{
                            backgroundImage: `url(${slide.background})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'right',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#000000',
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












// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import banner1 from '../../assets/Banner/usefulBethmar/banner1.jpg'
// import banner2 from '../../assets/Banner/usefulBethmar/banner2.jpg'
// import banner3 from '../../assets/Banner/usefulBethmar/banner3.jpg'
// import banner4 from '../../assets/Banner/usefulBethmar/banner4.jpg'
// import banner5 from '../../assets/Banner/usefulBethmar/banner5.jpg'
// import banner6 from '../../assets/Banner/usefulBethmar/banner6.jpg'
// import banner7 from '../../assets/Banner/usefulBethmar/banner6.jpg'
// import banner8 from '../../assets/Banner/usefulBethmar/banner8.jpg'
// import banner9 from '../../assets/Banner/usefulBethmar/banner7.jpg'

// const ShuffleHero = () => {
//     return (
//         <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
//             <div>
//                 <span className="block mb-4 text-xs md:text-sm text-primary-light font-medium">
//                     Endless Possibilities
//                 </span>
//                 <h3 className="text-4xl md:text-6xl font-semibold">
//                     Transforming Infrastructure, Enhancing Lives.
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
//                     Connecting the Dots, Between People & Possibilities.
//                 </p>
//                 <button className="bg-primary text-white font-medium py-2 px-4 rounded transition-all hover:bg-primary-dark active:scale-95">
//                     Contact Now
//                 </button>
//             </div>
//             <ShuffleGrid />
//         </section>
//     );
// };

// const shuffle = (array) => {
//     let currentIndex = array.length,
//         randomIndex;

//     while (currentIndex != 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex],
//             array[currentIndex],
//         ];
//     }

//     return array;
// };

// const squareData = [
//     {
//         id: 1,
//         src: { banner1 }
//     },
//     {
//         id: 2,
//         src: { banner2 }
//     },
//     {
//         id: 3,
//         src: { banner3 }
//     },
//     {
//         id: 4,
//         src: { banner4 }
//     },
//     {
//         id: 5,
//         src: { banner5 }
//     },
//     {
//         id: 6,
//         src: { banner6 }
//     },
//     {
//         id: 7,
//         src: { banner7 }
//     },
//     {
//         id: 8,
//         src: { banner8 }
//     },
//     {
//         id: 9,
//         src: { banner9 },
//     },
// ];

// const generateSquares = () => {
//     return shuffle(squareData).map((sq) => (
//         <motion.div
//             key={sq.id}
//             layout
//             transition={{ duration: 1.5, type: "spring" }}
//             className="w-full h-full"
//             style={{
//                 backgroundImage: `url(${sq.src})`,
//                 backgroundSize: "cover",
//             }}
//         ></motion.div>
//     ));
// };

// const ShuffleGrid = () => {
//     const timeoutRef = useRef(null);
//     const [squares, setSquares] = useState(generateSquares());

//     useEffect(() => {
//         shuffleSquares();

//         return () => clearTimeout(timeoutRef.current);
//     }, []);

//     const shuffleSquares = () => {
//         setSquares(generateSquares());

//         timeoutRef.current = setTimeout(shuffleSquares, 3000);
//     };

//     return (
//         <div className="grid grid-cols-4 grid-rows-2 h-[450px] gap-1">
//             {squares.map((sq) => sq)}
//         </div>
//     );
// };

// export default ShuffleHero;