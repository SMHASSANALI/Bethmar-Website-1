import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HoverCard = ({ title, list, imgSrc, desc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='relative h-[400px] w-[300px] mx-auto lg:h-[400px] lg:w-[100%] group shadow-primary-light shadow-md hover:shadow-2xl hover:scale-110 transition-all duration-300'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)

            }
        >
            <div className=' h-[50%] flex flex-col bg-primary-light text-white justify-center'>
                <h2 className={`ml-auto w-6/12 text-xl lg:text-2xl text-left font-extrabold font-oswald rotate-90 transition-all duration-[400ms]`}>{title}</h2>
            </div>
            <div className='h-[50%] flex flex-row bg-white'>
                <div className='w-12/12 px-4 py-2'>
                    <p className='text-xs font-poppins text-primary-light'>{desc}</p>
                    <ul className='flex flex-col py-1'>
                        {list.map((item, index) => (
                            <li key={index} className='text-sm'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <motion.div
                className='absolute top-0 left-0'
                initial={{ width: '100%', height: '100%' }}
                animate={{ width: isHovered ? '50%' : '100%', height: isHovered ? '50%' : '100%' }}
                transition={{ duration: 0.3 }}
            >
                <img src={imgSrc} className='h-full w-full object-cover' alt="" />
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






// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const HoverCard = ({ title, list, imgSrc, desc }) => {
//     // State to track mouse presence in the container
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className='relative h-[400px] w-[100%] group'
//             onMouseEnter={() => setIsHovered(true)}  // Set state to true on mouse enter
//             onMouseLeave={() => setIsHovered(false)} // Set state to false on mouse leave
//         >
//             <div className='h-[50%] flex flex-col bg-primary text-white justify-center border-b border-black'>
//                 <h2 className={`ml-auto w-6/12 text-xl md:text-2xl text-left font-extrabold font-serif rotate-90 transition-colors duration-[400ms]`}>
//                     {title}
//                 </h2>
//             </div>
//             <div className='h-[50%] flex flex-row'>
//                 <div className='w-12/12 px-4 py-2'>
//                     <p className='text-sm font-semibold'>{desc}</p>
//                     <ul className='flex flex-col py-2'>
//                         {list.map((item, index) => (
//                             <li key={index} className='text-base text-slate-800'>{item}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <motion.div
//                 className='absolute top-0 left-0'
//                 initial={{ scale: 1 }}
//                 animate={{ scale: isHovered ? 0.5 : 1 }} // Scale based on state
//                 transition={{ duration: 0.3 }}
//             >
//                 <img src={imgSrc} className='h-full w-full object-cover' alt="" />
//                 <span className='z-20 absolute left-5 top-5 bg-black text-white bg-opacity-30 backdrop-blur-sm rounded px-2 py-1 cursor-default'>
//                     <p className='text-sm'>Hover Here</p>
//                 </span>
//             </motion.div>
//             {/* Border animation */}
//             <span className={`absolute left-0 top-0 h-[2px] w-0 bg-black transition-all duration-100 group-hover:w-full`} />
//             <span className={`absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full`} />
//             <span className={`absolute bottom-0 right-0 h-[2px] w-0 bg-black transition-all delay-200 duration-100 group-hover:w-full`} />
//             <span className={`absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full`} />
//         </div>
//     );
// };

// export default HoverCard;
