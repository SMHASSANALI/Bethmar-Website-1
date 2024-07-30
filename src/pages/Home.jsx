import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Features from '../components/Features/Features.jsx'
import Services from '../components/Services/Services.jsx'
import Slider from '../components/Slider/Slider.jsx'
import CounterSection from '../components/Counter/Counter.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import Benefits from '../components/Benefits/Benefits.jsx'
import Seprator from '../components/Seprator/Seprator.jsx'
import Banner from '../components/Banner/Banner.jsx'
import BG from '../assets/svg/Background.svg'

const Home = () => {

    const bgStyle = {
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className='bg-[#f0fcfe]'>
            <Navbar />
            <Banner />
            <Hero />
            <div style={bgStyle} className='border'>
                <Features />
            </div>
            <Services />
            <Seprator color={'bg-moving-gradient'} />
            <Benefits />
            <Slider />
            <CounterSection />
            <Seprator color={'bg-moving-gradient1'} />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home