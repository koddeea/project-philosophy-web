import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import hero from '/src/features/characters/assets/images/hero.jpg';
import hero2 from '/src/features/characters/assets/images/hero2.png';



export default function Test3() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const [currentImage, setCurrentImage] = useState(hero2);

    const position = "static";/*useTransform(scrollYProgress, (pos) =>
        "static"
    );*/

    const rotateY = useTransform(scrollYProgress, [0.15, 0.5], [0, -180]);
    const rotateX = useTransform(scrollYProgress, [0.15, 0.3, 0.5], [0, -30, 0])

    useMotionValueEvent(rotateY, "change", (latest) => {
        if (latest < -90) {
            setCurrentImage(hero);
        } else {
            setCurrentImage(hero2);
        }
    })


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
    })


    return (
        <>
            <div className="relative">
                {/* <div className="h-[200vh] w-full bg-slate-400"></div> */}
                <div
                    ref={containerRef}
                    className="relative w-full h-[500vh] text-white font-maghfirea"
                >
                    <div
                        //className="sticky top-1/2 -translate-y-1/2 m-auto w-min"
                        className={`${position} top-10`}
                    >
                        <div className="flex justify-center">
                            <motion.img
                                className="h-[150vh]"
                                //className="sticky mt-[1000px] top-[0vh] left-1/2"
                                src={currentImage}
                                style={{
                                    top: useTransform(scrollYProgress, [0, 0.15], [0, 10]),
                                    rotateX: rotateX,
                                    rotateY: rotateY,
                                    //scale: useTransform(scrollYProgress, [0, 0.15], [2, 1]),

                                    objectFit: 'cover', // ensures the image covers the area without distorting aspect ratio
                                    cursor: "pointer"
                                }}
                            >
                            </motion.img>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
