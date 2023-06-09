export default {
    initial: {
        opacity: 0,
        y: 200,
        transition:{
            duration: 0.8,
            type: "spring",
            delay: 0.8
        },
    },
    animate:{
        opacity: 1,
        y: 0,
        transition:{
            duration: 0.8,
            type: "spring",
            delay: 0.8
        },
    },
    exit:{
        opacity: 0,
        y: -200,
        transition:{
            duration: 0.8,
            type: "spring",
            delay: 0.8
        },
    }
}