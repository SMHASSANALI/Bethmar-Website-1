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
            className='w-full lg:w-3/12 p-4 flex flex-col items-center shadow-sm shadow-white rounded bg-white'
        >
            <div className='h-28 w-28 md:w-1/2'>
                <img src={image} alt={title} />
            </div>
            <h2 className='text-xl py-4 font-poppins text-center font-medium'>{title}</h2>
            <p className='text-sm font-montserrat text-pretty'>{description}</p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <div id='About' className='bg-primary bg-moving-gradient'>
            <div className='max-w-[1400px] px-4 mx-auto py-12'>
                <div className='w-full xl:w-6/12 mx-auto'>
                    <h4 className='text-base md:text-lg text-center font-poppins mb-2 md:mb-4 xl:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-accentRed-dark to-accentRed-light'>
                        Innovative
                    </h4>
                    <h2 className='mx-auto font-semibold text-3xl lg:text-4xl xl:text-4xl text-center font-montserrat pb-4 text-gray-100'>Providing Comprehensive Solutions for Your Infrastructure Needs</h2>
                    <p className='text-xs md:text-sm font-poppins text-center text-gray-100'>At Bethmar, we specialize in offering a wide range of infrastructure construction services to meet your unique requirements. With our expertise and dedication, we deliver top-quality solutions that exceed expectations.</p>
                </div>
                <div className='max-w-[1400px] gap-x-40 lg:gap-x-20 xl:gap-x-20 mx-auto flex flex-col lg:flex-row py-8'>
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
            </div>
        </div>
    );
};

export default Features;
