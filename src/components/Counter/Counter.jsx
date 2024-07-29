import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, label }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const count = useMotionValue(0);
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        if (inView) {
            controls.start({
                count: end,
                transition: { duration: 2, ease: "easeInOut" },
            });
        }
    }, [controls, inView, end]);

    useEffect(() => {
        count.onChange((v) => {
            setDisplayCount(Math.round(v));
        });
    }, [count]);

    return (
        <div className="text-center md:pt-6">
            <motion.div
                ref={ref}
                className="text-3xl md:text-4xl font-bold text-center font-poppins bg-clip-text text-transparent bg-gradient-to-t from-accentRed-dark to-accentRed-light"
                initial={{ count: 0 }}
                animate={controls}
                style={{ count }}
            >
                {displayCount}
            </motion.div>
            <p className="text-sm md:text-lg font-medium text-white">{label}</p>
        </div>
    );
};

const CounterSection = () => {
    const counters = [
        { end: 120, label: 'Projects Done' },
        { end: 200, label: 'Satisfied Customers' },
        { end: 50, label: 'Awards Won' },
        { end: 30, label: 'Years of Experience' },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="py-12"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="w-full mx-auto bg-primary p-8">
                <h2 className="mx-auto font-semibold text-3xl lg:text-4xl xl:text-4xl text-center text-white font-montserrat pb-4">Delivering Exceptional Results with Our Expert Infrastructure Construction Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-poppins">
                    {counters.map((counter, index) => (
                        <Counter key={index} end={counter.end} label={counter.label} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CounterSection;
