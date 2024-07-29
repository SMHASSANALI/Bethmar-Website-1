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

const Home = () => {
    return (
        <div className='bg-slate-200'>
            <Navbar />
            <Banner />
            <Hero />
            <Features />
            <Services />
            <Seprator color={'bg-accentGreen-dark'} />
            <Benefits />
            <Slider />
            <CounterSection />
            <Seprator color={'bg-accentRed-dark'} />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home