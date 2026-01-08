import { motion } from "framer-motion";

// Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};


// Calculate the reverse index for staggered delay
const reversdeIndex = (index) => {
    const totalSteps = 6; // Number of steps
    return totalSteps - index - 1;
};


const Stairs = () => {
    return (
        <>
            {/* Render 6 motion divs, each representing a step of the stairs.
            Each div will have the same animation defined by the stairsAnimation object.
            The delay for each div is calculated dynamically based on its reversed index,
            creating a staggered effect with decreasing delay for each subsequent step.
            */}
        </>
    );
};

export default Stairs;