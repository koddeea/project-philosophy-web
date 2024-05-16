// import React, { useState, useEffect } from 'react';
// import { motion, useMotionValueEvent, useScroll, useViewportScroll } from 'framer-motion';

// function TestScrollText() {
//     const { scrollYProgress } = useScroll();
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const texts = ["Texto 1", "Texto 2", "Texto 3", "Texto 4"];

//     let firstRender = true;

//     useEffect(() => {
//         firstRender = false;
//     }, []);

//     useMotionValueEvent(scrollYProgress, "change", (latest) => {
//         const newIndex = Math.floor(latest * texts.length);
//         console.log(`"newIndex": ${newIndex}, "latest": ${latest}`);
//         setCurrentIndex(newIndex < texts.length ? newIndex : texts.length - 1);
//     })

//     return (
//         <div style={{ height: '400vh' }}> {/* Ajusta la altura para más scroll */}
//             <motion.div
//                 style={{
//                     position: 'fixed',
//                     top: '50%', // Centrado vertical
//                     left: '50%', // Centrado horizontal
//                     transform: 'translate(-50%, -50%)',
//                     fontSize: '2rem',
//                     opacity: scrollYProgress
//                 }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//             >
//                 {texts[currentIndex]}
//             </motion.div>
//         </div>
//     );
// }

// export default TestScrollText;

// // ScrollingText.tsx
// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useViewportScroll } from 'framer-motion';

// interface ScrollingTextProps {
//     texts: string[];
// }

// const TestScrollText = ({ texts }: ScrollingTextProps) => {
//     const { scrollYProgress } = useScroll();
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const unsubscribe = scrollYProgress.onChange(v => {
//             const newIndex = Math.floor(v * texts.length);
//             setCurrentIndex(newIndex < texts.length ? newIndex : texts.length - 1);
//         });

//         return () => unsubscribe();
//     }, [scrollYProgress, texts.length]);

//     return (
//         <div className='h-[600vh]'> {/* Asegura suficiente espacio para scroll */}
//             <motion.div
//                 className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl'
//                 style={{
//                     opacity: scrollYProgress
//                 }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//             >
//                 {texts[currentIndex]}
//             </motion.div>
//         </div>
//     );
// };

// export default TestScrollText;

// // ScrollingText.tsx
// import React, { useState, useEffect } from 'react';
// import { motion, useViewportScroll, AnimatePresence } from 'framer-motion';

// interface ScrollingTextProps {
//     texts: string[];
//     images: string[];
// }

// const TestScrollText: React.FunctionComponent<ScrollingTextProps> = ({ texts, images }) => {
//     const { scrollYProgress } = useViewportScroll();
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const unsubscribe = scrollYProgress.onChange(v => {
//             const newIndex = Math.floor(v * texts.length);
//             setCurrentIndex(newIndex < texts.length ? newIndex : texts.length - 1);
//         });

//         return () => unsubscribe();
//     }, [scrollYProgress, texts.length]);

//     return (
//         <div style={{ height: '400vh', width: '100vw', overflow: 'hidden' }}>
//             <AnimatePresence>
//                 <motion.div
//                     key={currentIndex}
//                     style={{
//                         position: 'fixed',
//                         top: '0',
//                         left: '0',
//                         width: '100%',
//                         height: '100vh',
//                         backgroundImage: `url(${images[currentIndex]})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ opacity: { duration: 0.5 } }}
//                 >
//                     <motion.span
//                         style={{
//                             fontSize: '2rem',
//                             color: 'white',
//                             textShadow: '0 2px 4px rgba(0,0,0,0.5)'
//                         }}
//                         initial={{ y: 50, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: -50, opacity: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         {texts[currentIndex]}
//                     </motion.span>
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     );
// };

// export default TestScrollText;


// // // ScrollingText.tsx
// // import React, { useState, useEffect } from 'react';
// // import { motion, useViewportScroll, AnimatePresence } from 'framer-motion';

// // interface ScrollingTextProps {
// //     texts: string[];
// //     images: string[];
// // }

// // const TestScrollText: React.FC<ScrollingTextProps> = ({ texts, images }) => {
// //     const { scrollYProgress } = useViewportScroll();
// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     useEffect(() => {
// //         const unsubscribe = scrollYProgress.onChange(v => {
// //             // Asegurarse de que el índice siempre se ajuste al menor tamaño del array entre textos e imágenes
// //             const maxIndex = Math.min(texts.length, images.length) - 1;
// //             const newIndex = Math.floor(v * (maxIndex + 1));
// //             setCurrentIndex(newIndex <= maxIndex ? newIndex : maxIndex);
// //         });

// //         return () => unsubscribe();
// //     }, [scrollYProgress, texts.length, images.length]);

// //     return (
// //         <div style={{ height: '400vh', width: '100vw', overflow: 'hidden' }}>

// //             <motion.div
// //                 key={currentIndex}
// //                 style={{
// //                     position: 'fixed',
// //                     top: '0',
// //                     left: '0',
// //                     width: '100%',
// //                     height: '100vh',
// //                     backgroundImage: `url(${images[currentIndex % images.length]})`,
// //                     backgroundSize: 'cover',
// //                     backgroundPosition: 'center',
// //                     display: 'flex',
// //                     justifyContent: 'center',
// //                     alignItems: 'center',
// //                 }}
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 //exit={{ opacity: 0 }}
// //                 transition={{ opacity: { duration: 0.5 } }}
// //             >
// //                 <motion.span
// //                     style={{
// //                         fontSize: '2rem',
// //                         color: 'white',
// //                         textShadow: '0 2px 4px rgba(0,0,0,0.5)'
// //                     }}
// //                     initial={{ y: 50, opacity: 0 }}
// //                     animate={{ y: 0, opacity: 1 }}
// //                     //exit={{ y: -50, opacity: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                 >
// //                     {texts[currentIndex % texts.length]}
// //                 </motion.span>
// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default TestScrollText;




// ScrollingText.tsx
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState } from 'react';


interface ScrollingTextProps {
    texts: string[];
    images: string[];
    videoUrl: string;
}

const TestScrollText: React.FunctionComponent<ScrollingTextProps> = ({ texts, images }) => {
    const { scrollYProgress } = useScroll();
    const [currentIndex, setCurrentIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const maxIndex = Math.min(texts.length, images.length) - 1;
        const newIndex = Math.floor(latest * (maxIndex + 1));
        setCurrentIndex(newIndex <= maxIndex ? newIndex : maxIndex);
    });

    return (
        <div style={{ height: '400vh' }}>
            <motion.div
                className=""
                key={currentIndex}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    backgroundImage: `url(${images[currentIndex % images.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.5 } }}
            >
                {/* <video autoPlay loop muted
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6
                    }}>

                    <source src={videoUrl} type="video/mp4" />
                </video>
                <motion.span
                    style={{
                        fontSize: '2rem',
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {texts[currentIndex % texts.length]}
                </motion.span> */}
            </motion.div>

        </div >
    );
};

export default TestScrollText;


// src/components/ScrollingMedia.tsx
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';


// interface MediaProps {
//     texts: string[];
//     images: string[];
//     videoSrc: string;
// }

// const ScrollingMedia: React.FC<MediaProps> = ({ texts, images, videoSrc }) => {
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const textInterval = Math.floor(texts.length / images.length);

//     const handleScroll = () => {
//         const position = window.scrollY;
//         const newTextIndex = Math.floor(position / (window.innerHeight / texts.length));
//         setCurrentTextIndex(newTextIndex);
//         setCurrentImageIndex(Math.floor(newTextIndex / textInterval));
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="w-full h-[800vh]">

//             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <img src={images[currentImageIndex]} className="object-cover" />
//                 <video autoPlay loop muted className="inset-0 w-full h-full object-cover">
//                     <source src={videoSrc} type="video/mp4" />
//                 </video>
//                 <motion.div

//                     className="text-center text-xl z-10"
//                 >
//                     <p>{texts[currentTextIndex]}</p>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };


// const TestScrollText: React.FC = () => {
//     const texts = ["Texto 1", "Texto 2", "Texto 3", "Texto 4", "Texto 5"];
//     const images = [
//         "src/features/intro/assets/images/depth_map.webp",
//         "src/features/intro/assets/images/image_end.webp",
//         "src/features/intro/assets/images/image_start.webp"
//     ];

//     return (
//         <div className="App">
//             <ScrollingMedia texts={texts} images={images} videoSrc="video.mp4" />
//         </div>
//     );
// }

// export default TestScrollText;

