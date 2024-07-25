import React from 'react';
import { motion } from 'framer-motion';

const HoverCard = ({ title, list, imgSrc, desc }) => {
    return (
        <div className='relative h-[400px] w-[100%] group'>
            <div className=' h-[50%] flex flex-col bg-primary text-white justify-center border-b border-black'>
                <h2 className={`ml-auto w-6/12 text-xl md:text-2xl text-left font-extrabold font-serif rotate-90 transition-colors duration-[400ms]`}>{title}</h2>
            </div>
            <div className='h-[50%] flex flex-row'>
                <div className='w-12/12 px-4 py-2'>
                    <p className='text-sm font-semibold'>{desc}</p>
                    <ul className='flex flex-col py-2'>
                        {list.map((item, index) => (
                            <li key={index} className='text-base text-slate-800 '>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <motion.div
                className='absolute top-0 left-0'
                initial={{ width: '100%', height: '100%' }}
                whileHover={{ width: '50%', height: '50%' }}
                transition={{ duration: 0.3 }}
            >
                <img src={imgSrc} className='h-full w-full object-cover' alt="" />
                <span className='z-20 absolute left-5 top-5 bg-black text-white bg-opacity-30 backdrop-blur-sm rounded px-2 py-1 cursor-default'><p className='text-sm'>Hover Here</p></span>
            </motion.div>
            {/* Border animation */}
            <span className={`absolute left-0 top-0 h-[2px] w-0 bg-black transition-all duration-100 group-hover:w-full`} />
            <span className={`absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full`} />
            <span className={`absolute bottom-0 right-0 h-[2px] w-0 bg-black transition-all delay-200 duration-100 group-hover:w-full`} />
            <span className={`absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full`} />
        </div>
    );
};

export default HoverCard;
