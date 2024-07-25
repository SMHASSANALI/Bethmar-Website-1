import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Features from '../components/Features/Features.jsx'
import Services from '../components/Services/Services.jsx'
import Slider from '../components/Slider/Slider.jsx'
import CounterSection from '../components/Counter/Counter.jsx'
import CTA from '../components/CTA/CTA.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <CTA />
            <Slider />
            <CounterSection />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home