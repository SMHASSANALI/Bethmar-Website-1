import React, { useRef } from 'react';
import civil from '../../assets/svg/Civil.svg';
import fibre from '../../assets/svg/Fibre.svg';
import water from '../../assets/svg/Water.svg';
import power from '../../assets/svg/Power.svg';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Button from '../Button/Button';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const FeatureCard = ({ image, title, description }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / width - HALF_ROTATION_RANGE) * -1;
        const rY = (mouseX / height - HALF_ROTATION_RANGE);

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                transformStyle: "preserve-3d"
            }}
            className='w-full lg:w-3/12 p-10 flex flex-col items-center bg-white rounded hover:shadow-2xl'
        >
            <div className='flex flex-row items-center justify-between h-3/5'>
                <div className='h-auto w-4/12 border-2 border-primary rounded-full p-4 flex items-center justify-center'>
                    <img src={image} alt={title} />
                </div>
                <h2 className='w-6/12 text-xl bg-clip-text text-transparent bg-gradient-to-t from-accentRed-dark to-accentRed-light py-4 font-oswald text-left'>{title}</h2>
            </div>
            <p className='text-sm text-primaryhite font-montserrat text-pretty h-2/5'>{description}</p>
        </motion.div >
    );
};



const Features = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div id='About' className='flex max-w-[1400px] mx-auto rounded h-auto lg:min-h-[120vh] items-center'>
            <div ref={ref} className='px-4 mx-auto py-12'>
                <div className='w-full xl:w-6/12 mx-auto'>
                    <h4 className='text-base lg:text-xl text-center font-semibold font-poppins bg-clip-text text-transparent bg-gradient-to-b from-accentRed-dark to-accentRed-light'>
                        Innovative
                    </h4>
                    <motion.h2
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1, ease: "backIn" }}
                        className='text-primary mx-auto font-semibold text-2xl xl:text-4xl text-center font-oswald pt-12 pb-4 '>Providing Comprehensive Solutions for Your Infrastructure Needs</motion.h2>
                    <p className='text-primary text-sm lg:text-base font-poppins text-center pb-6'>At Bethmar, we specialize in offering a wide range of infrastructure construction services to meet your unique requirements. With our expertise and dedication, we deliver top-quality solutions that exceed expectations.</p>
                </div>
                <div className='max-w-[1400px] mx-auto gap-x-3 flex flex-col lg:flex-row pt-12 pb-6'>
                    <FeatureCard
                        image={civil}
                        title="Civil Infrastructure Solutions"
                        description="Our civil infrastructure services encompass a wide range of construction projects, from roads and bridges to buildings and utilities."
                    />
                    <FeatureCard
                        image={fibre}
                        title="Telecom Turnkey Solutions"
                        description="We provide end-to-end telecom solutions, ensuring seamless connectivity and efficient communication."
                    />
                    <FeatureCard
                        image={water}
                        title="Water Management Services"
                        description="Our expertise includes constructing water spill tanks and replacing water mains to maintain reliable water supply systems."
                    />
                    <FeatureCard
                        image={power}
                        title="Power Management Solutions"
                        description="We offer EV charger installations, DNO liaison, and comprehensive solar park solutions to support sustainable energy infrastructure."
                    />
                </div>
                <div className='flex mx-auto items-center justify-center'>
                    <ScrollLink
                        to='Services'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer'
                    >
                        <Button text={'Our Services'} color={'black'} />
                    </ScrollLink>
                </div>
            </div>
        </div>
    );
};

export default Features;
