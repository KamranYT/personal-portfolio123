import { animate, motion } from "framer-motion";

//varionts
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top:"100%",
    },
    exit: {
        top: ["100%", "0%" ],
    },
};


// calculate the reverse index for staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs.
    Each div will have the same animation defind  by the stairsAniamtion objects.
    The delay for each div is calculated dinamically based on it's reversed index,
    creating a sraggered effect with decresing delay for each suvsequent step.
     */}
    {[...Array(6)].map((_, index) => {
        return (
        <motion.div
        key={index}
        variants={stairAnimation} 
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-white relative"
        />
    );
    })}
    </>
);
};
export default Stairs;