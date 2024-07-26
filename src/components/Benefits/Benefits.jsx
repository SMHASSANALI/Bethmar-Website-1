import React from 'react'
import Button from '../Button/Button'

const Benefits = () => {
    return (
        <div className=' border my-12'>
            <div className='max-w-[1400px] px-4 mx-auto py-12'>
                <div className='flex flex-col md:flex-row h-full py-12'>
                    <div className='w-full md:w-6/12 flex md:flex-col flex-row justify-between md:mb-0 mb-4'>
                        <h4 className='text-xl md:text-3xl font-medium text-start font-poppins md:pt-0 pt-[6px] bg-clip-text text-transparent bg-gradient-to-b from-accentRed-dark to-accentRed-light'>
                            Benefits
                        </h4>
                        <div className='flex'>
                            <Button text={'Learn More'} color={'black'} to={'About'} />
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 h-full'>
                        <p className='text-base md:text-lg font-light font-poppins'>
                            Choose Bethmar for your infrastructure projects and experience the
                            benefits of expertise in telecom turnkey solutions, civil infrastructure
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
        </div>
    )
}

export default Benefits