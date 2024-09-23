// "use client";

import {motion} from 'framer-motion';

const stairAnim = {
    intial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculation for reverse index for staggered delay anim.
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
        {/* rendering 6 motion divs --> representing step of the stairs */}
        {[...Array(6)].map((_, index) => {
            <motion.div
                key={index}
                className='w-full h-full bg-pink-200 relative'
                variants={stairAnim}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 * reverseIndex(index) }}
            />
        })}
    </>
  )
}

export default Stairs