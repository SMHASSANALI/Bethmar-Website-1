// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence, delay } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import bannerImage1 from '../../assets/Banner/bannerimage1.png'
// import bannerImage2 from '../../assets/Banner/bannerimage2.png'
// import bannerImage3 from '../../assets/Banner/bannerimage3.png'

// const Banner = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const handleSlideChange = (index) => {
//         setCurrentSlide(index);
//     };

//     const slideVariants = {
//         initial: { opacity: 0, x: 400 },
//         animate: { opacity: 1, x: 0 },
//         exit: { opacity: 0, x: 100 },
//         transition: { duration: 1500 }
//     };

//     const buttonVariants = {
//         initial: { opacity: 0, y: 100 },
//         animate: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: 100 },
//     };

//     const slides = [
//         {
//             id: 0,
//             text: "Empowering Connections, Endless Possibilities.",
//             buttonText: "Learn More",
//             background: bannerImage2
//         },
//         {
//             id: 1,
//             text: "Transforming Infrastructure, Enhancing Lives.",
//             buttonText: "Learn More",
//             background: bannerImage3
//         },
//         {
//             id: 2,
//             text: "Connecting the Dots, Between People & Possibilities.",
//             buttonText: "Learn More",
//             background: bannerImage1
//         },
//     ];

//     return (
//         <div id='Banner' className="mx-auto w-full min-h-[150px] lg:h-[300px] xl:min-h-[600px] lg:min-h-[450px] overflow-hidden">
//             <Carousel
//                 showThumbs={false}
//                 autoPlay={true}
//                 infiniteLoop
//                 interval={6000}
//                 transitionTime={500}
//                 onChange={handleSlideChange}
//                 selectedItem={currentSlide}
//                 stopOnHover={false}
//                 showArrows={true}
//                 showStatus={false}
//                 showIndicators={false}
//             >
//                 {slides.map((slide, index) => (
//                     <div
//                         className="flex items-start justify-start p-4 lg:p-8 min-h-[250px] xl:min-h-[600px] lg:min-h-[450px]"
//                         key={slide.id}
//                         style={{
//                             backgroundImage: `url(${slide.background})`,
//                             backgroundSize: 'contain',
//                             backgroundPosition: 'right',
//                             backgroundRepeat: 'no-repeat',
//                             backgroundColor: '#000000',
//                         }}
//                     >
//                         <AnimatePresence initial={false}>
//                             {currentSlide === index && (
//                                 <motion.div
//                                     key={slide.id}
//                                     initial="initial"
//                                     animate="animate"
//                                     exit="exit"
//                                     variants={slideVariants}
//                                     transition={{ duration: 0.5 }}
//                                     className="flex flex-col items-start justify-center self-center w-6/12"
//                                 >
//                                     <motion.h2
//                                         key={`h2-${slide.id}`}
//                                         className="leading-loose text-start font-oswald text-white text-xl md:text-6xl md:p-4 font-bold mt-4"
//                                         initial="initial"
//                                         animate="animate"
//                                         exit="exit"
//                                         variants={slideVariants}
//                                         transition={{ duration: 0.5 }}
//                                     >
//                                         {slide.text}
//                                     </motion.h2>
//                                     <ScrollLink
//                                         to='About'
//                                         smooth={true}
//                                         duration={500}
//                                         className='cursor-pointer'
//                                     >
//                                         <motion.button
//                                             key={`button-${slide.id}`}
//                                             className="font-montserrat my-3 lg:m-6 px-6 py-2 bg-none border-white border-2 text-white text-sm lg:text-lg font-semibold shadow-md hover:bg-white hover:border-white hover:text-black transition-all transform hover:scale-105"
//                                             initial="initial"
//                                             animate="animate"
//                                             exit="exit"
//                                             variants={buttonVariants}
//                                             transition={{ duration: 0.5 }}
//                                         >
//                                             {slide.buttonText}
//                                         </motion.button>
//                                     </ScrollLink>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default Banner;


import React from 'react'
import img1 from '../../assets/Banner/1.jpg'
import img2 from '../../assets/Banner/2.jpg'
import img3 from '../../assets/Banner/3.jpg'
import img4 from '../../assets/Banner/4.jpg'
import img5 from '../../assets/Banner/5.jpg'
import img6 from '../../assets/Banner/6.jpg'
import BG from '../../assets/Banner/bannerBG.jpg'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Button from '../Button/Button'

const Banner = () => {

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${img3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div id='Banner' className="flex lg:flex-row flex-col mx-auto max-w-[1500px] min-h-[300px] lg:min-h-[500px] py-4 gap-4 bg-[#f6f6f6]">
            <div style={divStyle} className='w-full lg:w-6/12 flex flex-col items-start justify-center p-4'>
                <div className='py-8 px-12 bg-primary bg-opacity-50 backdrop-blur-sm'>
                    <h1 className='text-5xl font-semibold text-white leading-tight font-oswald'>Transforming Infrastructure,<br /> Enhancing Lives.</h1>
                    <p className='text-lg font-regular font-montserrat my-3 px-1 text-slate-300'>Connecting the Dots, Between People & Possibilities.</p>
                    <ScrollLink
                        to='About'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <Button text={'Build Better'} color={'white'} />
                    </ScrollLink>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-2 lg:gap-4 mx-auto w-full lg:px-0 px-4 lg:w-6/12">
                <div className='col-span-2 h-[150px] lg:h-[300px] overflow-hidden'>
                    <img src={img1} alt="" className='w-full h-full object-cover object-center' />
                </div>
                <div className='col-span-2 h-[150px] lg:h-[300px] overflow-hidden border'>
                    <img src={img2} alt="" className='w-auto h-full object-cover object-center' />
                </div>
                {/* <div className='col-span-2 mb-2 h-[75px] lg:h-[150px] overflow-hidden'>
                    </div> */}
                <div className='col-span-2 h-[150px] lg:h-[300px] overflow-hidden'>
                    <img src={img4} alt="" className='w-auto h-auto object-cover object-center' />
                </div>
                <div className='col-span-4 lg:h-[150px] h-[100px] overflow-hidden'>
                    <img src={img5} alt="" className='w-auto h-auto' />
                </div>
                <div className='col-span-2 lg:h-[150px] h-[100px] overflow-hidden'>
                    <img src={img6} alt="" className='w-auto h-auto object-cover object-center' />
                </div>
            </div>
        </div>
    )
}

export default Banner