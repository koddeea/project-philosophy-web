import { motion } from "framer-motion";

export default function Test1() {
    return (
        <div className='flex relative w-full h-full'>
            <motion.div
                className="flex absolute top-0 bottom-0 h-40 
                    [--width-from: 0px] max-sm:[--width-to:200px] [--width-to:600px]
                    [--bg-intro:red] [--bg-intro-animate:#000]"
                variants={{
                    initial: {
                        backgroundColor: "var(--bg-intro)",
                        width: "var(--width-from)",
                    },
                    animate: {
                        backgroundColor: "var(--bg-intro-animate)",
                        width: "var(--width-to)",
                        transition: {
                            duration: 20,
                        }
                    }
                }}
                initial="initial"
                animate="animate">
            </motion.div>
        </div>
    );
}
