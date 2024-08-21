import React from 'react'
import img1 from '../../assets/Banner/1.jpg'
import img2 from '../../assets/Banner/2.jpg'
import img3 from '../../assets/Banner/3.jpg'
import img4 from '../../assets/Banner/4.jpg'
import img5 from '../../assets/Banner/5.jpg'
import img6 from '../../assets/Banner/6.jpg'
import BG from '../../assets/Banner/bannerBG.jpg'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Button from '../Button/Button'

const Banner = () => {

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${img3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <section className='bg-[#f9f9f9] py-12'>
            <div id='Banner' className="flex lg:flex-row mx-auto flex-col max-w-[1500px] min-h-[300px] lg:max-h-[450px] xl:min-h-[500px] py-5 gap-4">
                <div style={divStyle} className='w-full xl:w-6/12 flex flex-col items-center justify-center xl:p-0 p-4 rounded'>
                    <div className='px-4 py-2 md:py-6 md:px-4 xl:py-8 xl:px-12 bg-primary-light bg-opacity-30 backdrop-blur-sm rounded-lg'>
                        <h1 className='text-3xl xl:text-5xl lg:text-4xl font-semibold text-white leading-tight font-oswald'>Transforming Infrastructure,<br /> Enhancing Lives.</h1>
                        <p className='text-base lg:text-lg font-regular font-montserrat my-3 px-1 text-slate-200'>Connecting the Dots, Between People & Possibilities.</p>
                        <ScrollLink
                            to='About'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                        >
                            <Button text={'Build Better'} color={'white'} />
                        </ScrollLink>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-2 lg:gap-2 w-full xl:w-6/12 xl:px-0 px-4">
                    <div className='col-span-2 h-[150px] lg:h-[250px] xl:h-[300px] overflow-hidden rounded'>
                        <img src={img1} alt="" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='col-span-2 h-[150px] lg:h-[250px] xl:h-[300px] overflow-hidden rounded'>
                        <img src={img2} alt="" className='w-auto h-full object-cover object-center' />
                    </div>
                    <div className='col-span-2 h-[150px] lg:h-[250px] xl:h-[300px] overflow-hidden rounded'>
                        <img src={img4} alt="" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='col-span-4 xl:h-[150px] h-[100px] overflow-hidden rounded'>
                        <img src={img5} alt="" className='w-auto h-auto object-cover object-center' />
                    </div>
                    <div className='col-span-2 xl:h-[150px] h-[100px] overflow-hidden rounded'>
                        <img src={img6} alt="" className='w-auto h-auto object-cover object-center' />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner