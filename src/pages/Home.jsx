// import React from 'react'
// import Navbar from '../components/Navbar/Navbar.jsx'
// import Hero from '../components/Hero/Hero.jsx'
// import Features from '../components/Features/Features.jsx'
// import Services from '../components/Services/Services.jsx'
// import Slider from '../components/Slider/Slider.jsx'
// import CounterSection from '../components/Counter/Counter.jsx'
// import Footer from '../components/Footer/Footer.jsx'
// import ContactForm from '../components/ContactForm/ContactForm.jsx'
// import Benefits from '../components/Benefits/Benefits.jsx'
// import Seprator from '../components/Seprator/Seprator.jsx'
// import Banner from '../components/Banner/Banner.jsx'


// const Home = () => {

//     const handleClick = () => {
//         <ContactForm />
//     }

//     return (
//         <div className=''>
//             <div className='bg-[#fafafa] relative'>
//                 <Navbar />
//                 <Banner />
//                 <Hero />
//                 <Features />
//                 <Services />
//                 <Seprator color={'bg-moving-gradient'} />
//                 <Benefits />
//                 <Slider />
//                 <CounterSection />
//                 <Footer />
//                 <div onClick={() => handleClick()} className='z-50 h-14 w-14 border-2 bg-sky-500 border-red-500 fixed top-[90%] right-2 cursor-pointer'>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home







import React, { useState } from 'react'
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
import LocationMap from '../components/LocationMap/LocationMap.jsx'

const Home = () => {
    const [formVisible, setFormVisible] = useState(false)

    const handleClick = () => {
        setFormVisible(!formVisible)
    }

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
                <div onClick={handleClick} className='z-50 h-14 w-14 border-2 bg-sky-500 border-red-500 fixed top-[90%] right-2 cursor-pointer'>
                    <img src="" alt="" />
                </div>
                {formVisible && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
                        <div className='fixed shadow-2xl top-1/2 left-1/2 md:top-2/3 md:left-[85%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[400px] bg-moving-gradient3'>
                            <h2 className='text-2xl mb-4 font-oswald text-white'>Contact Us</h2>
                            <form className=''>
                                <div className='flex flex-row justify-between'>
                                    <div className='mb-4'>
                                        <label className='block text-sm font-medium text-gray-300'>Full Name</label>
                                        <input type='text' className='text-xs mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-primary-light' placeholder='Enter Full Name' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-sm font-medium text-gray-300'>Email</label>
                                        <input type='email' className='text-xs mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-primary-light' placeholder='Your Email Address' />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-sm font-medium text-gray-300'>Message</label>
                                    <textarea className='text-xs mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-primary-light' placeholder='Any questions ?' />
                                </div>
                                <div className='flex justify-end'>
                                    <button type='button' onClick={handleClick} className='mr-2 py-2 px-4 border-gray-100 border text-white text-sm'>Cancel</button>
                                    <button type='submit' className='py-2 px-4 bg-accentRed-dark hover:bg-accentRed transition-colors duration-300 text-white text-sm'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
