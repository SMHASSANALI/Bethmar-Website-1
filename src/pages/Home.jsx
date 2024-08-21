import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Features from '../components/Features/Features.jsx';
import Services from '../components/Services/Services.jsx';
import Slider from '../components/Slider/Slider.jsx';
import CounterSection from '../components/Counter/Counter.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import Benefits from '../components/Benefits/Benefits.jsx';
import Seprator from '../components/Seprator/Seprator.jsx';
import Banner from '../components/Banner/Banner.jsx';
import LocationMap from '../components/LocationMap/LocationMap.jsx';
import contact from '../assets/contact.png';
import { motion } from 'framer-motion';

const Home = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [bottomReached, setBottomReached] = useState(false);

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Calculate the distance to the bottom
        const distanceFromBottom = documentHeight - (currentPosition + windowHeight);

        setScrollPosition(currentPosition);
        setBottomReached(distanceFromBottom <= 100); // Adjust this value as needed
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculatePosition = () => {
        if (bottomReached) {
            return 'top-[65%]'; // Stop at 65% when the bottom is reached
        }
        return 'top-[85%]'; // Start at 85%
    };


    return (
        <div className='bg-[#f9f9f9]'>
            <div className='relative'>
                <Navbar />
                <Banner />
                <Hero />
                <Features />
                <Services />
                <Seprator color={'bg-moving-gradient'} />
                <Benefits />
                <Slider />
                <CounterSection />
                <div>
                    <h4 className='text-center font-oswald text-4xl font-bold mb-6 text-primary'>
                        We Are Located At
                    </h4>
                    <LocationMap />
                </div>
                <Footer />
                <motion.div
                    initial={{ scale: 2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    onClick={handleClick}
                    className={`z-50 md:h-14 md:w-14 h-14 w-14 fixed ${calculatePosition()} right-1 cursor-pointer`}
                >
                    <img src={contact} alt="Contact" height={100} width={100} className='hover:scale-110 transition-all ease-in-out duration-300' />
                </motion.div>
                {formVisible && (
                    <ContactForm onClose={handleClick} />
                )}
            </div>
        </div>
    );
};

export default Home;