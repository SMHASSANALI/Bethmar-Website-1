import React from 'react'
import Button from '../Button/Button'
import CTA from '../CTA/CTA'

const Benefits = () => {
    return (
        <div className='my-12'>
            <div className='max-w-[1400px] px-4 mx-auto'>
                <div className='flex flex-col md:flex-row h-full py-12'>
                    <div className='w-full md:w-6/12 flex md:flex-col flex-row justify-between md:mb-0 mb-4'>
                        <div className='w-8/12 lg:w-10/12'>
                            <h4 className='text-xl md:text-3xl font-medium text-start font-poppins md:pt-0 pt-[6px] bg-clip-text text-transparent bg-gradient-to-t from-accentRed to-accentRed-dark'>
                                Benefits
                            </h4>
                            <h2 className='text-white font-semibold text-base lg:text-2xl font-montserrat py-2 '>
                                Choose Bethmar for your infrastructure projects and experience the benefits of expertise
                            </h2>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:justify-start justify-center pt-4'>
                            <Button text={'Learn More'} color={'accentRed-dark'} to={'About'} />
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 h-full'>
                        <p className='text-xs lg:text-base text-white font-medium font-poppins'>
                            Telecom turnkey solutions, civil infrastructure
                            solutions, traffic management diversions, hi-speed solutions, construction
                            of spill tanks, replacing water mains, EV chargers installation,
                            DNO liaison and meter installation, solar park data center solutions,
                            and more. With over 8 years of experience in the industry,
                            Bethmar is a trusted company based in the UK that delivers reliable and
                            efficient infrastructure construction services.
                        </p>
                    </div>
                </div>
            </div>
            <CTA />
        </div>
    )
}

export default Benefits