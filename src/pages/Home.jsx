import React, { useState } from 'react';
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

const Home = () => {
    const [formVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className=''>
            <div className='bg-[#fafafa] relative'>
                <Navbar />
                <Banner />
                <Hero />
                <Features />
                <Services />
                <Seprator color={'bg-moving-gradient'} />
                <Benefits />
                <Slider />
                <CounterSection />
                <div className='bg-[#fafafa] min-h-[70vh] pt-12'>
                    <h4 className='text-center font-oswald text-4xl font-bold mb-6 text-primary'>
                        We Are Located At
                    </h4>
                    <LocationMap />
                </div>
                <Footer />
                <div onClick={handleClick} className='z-50 md:h-10 md:w-10 h-14 w-14 fixed top-[90%] right-2 cursor-pointer'>
                    <img src={contact} alt="Contact" height={100} width={100} />
                </div>
                {formVisible && (
                    <ContactForm onClose={handleClick} />
                )}
            </div>
        </div>
    );
};

export default Home;
