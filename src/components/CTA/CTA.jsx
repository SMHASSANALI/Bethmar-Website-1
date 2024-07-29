import React from 'react'
import contact from '../../assets/contact/fiberRoll.jpg'
import Button from '../Button/Button'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const CTA = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '70vh',

    }
    return (
        <div style={divStyle} className='bg-fixed relative flex items-center top-[-15vh] left-0'>
            <div className='max-w-[1400px] px-4 mx-auto text-white'>
                <h2 className='mx-auto font-semibold text-2xl lg:text-4xl text-center font-oswald text-accentGreen'>Transforming Infrastructure with Innovative Solutions</h2>
                <p className='text-sm lg:text-base font-poppins text-center pt-9 pb-2'>Contact Bethmar today for a consultation or quote on our comprehensive range of services.</p>
                <div className='flex justify-center'>
                    <ScrollLink
                        to='Contact'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <Button text={'Contact Us'} color={'accentGreen-dark'} />
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default CTA