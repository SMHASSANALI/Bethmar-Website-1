import React from 'react'
import contact from '../../assets/contact/fiberRoll.jpg'
import Button from '../Button/Button'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const CTA = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '50vh',

    }
    return (
        <div style={divStyle} className='bg-fixed flex items-center'>
            <div className='max-w-[1400px] px-4 mx-auto text-white'>
                <h2 className='mx-auto font-semibold text-3xl lg:text-4xl xl:text-4xl text-center font-montserrat pb-4'>Transforming Infrastructure with Innovative Solutions</h2>
                <p className='text-sm md:text-base font-poppins text-center'>Contact Bethmar today for a consultation or quote on our comprehensive range of services.</p>
                <div className='flex justify-center pt-8'>
                    <ScrollLink
                        to='About'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <Button text={'Contact Us'} color={'white'} />
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default CTA