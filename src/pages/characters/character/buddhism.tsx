import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { NavTrail } from '@/components/nav-trail';
import { useScrollTop } from '@/hooks/use-scroll-top';
import TransitionLayout from '@/layouts/animations/transition-layout';
import { RoutesPaths } from '@/routes/routes-paths';

import Picture from '/src/features/characters/buddhism/assets/images/buddhism.webp';

import MarkdownRenderer from '@/components/markdown-renderer';
import { BuddhismText } from '@/features/characters/buddhism/assets/texts/buddhism-text';

const Buddhism = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
    });

    useScrollTop();

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

    const pictures =
        [
            {
                src: Picture,
                scale: scale4,
                imgClasses: "rounded-full w-[50vw] h-[25vh] object-top"
            },
            {
                src: Picture,
                scale: scale6,
                imgClasses: "rounded-xl bottom-[65vh] left-0 w-[70vw] h-[30vh] object-top"
            },
            {
                src: Picture,
                scale: scale8,
                imgClasses: "rounded-xl top-[65vh] left-0 w-[100vw] h-[15vh] object-bottom"
            },
            {
                src: Picture,
                scale: scale5,
                imgClasses: "rounded-xl top-[37.5vh] left-0 w-[20vw] h-[20.5vh] object-left"
            },
            {
                src: Picture,
                scale: scale6,
                imgClasses: "rounded-xl bottom-[37.5vh] right-0 w-[20vw] h-[37.5vh] object-right"
            }
        ]

    const elements = [
        {
            name: "Personajes",
            path: RoutesPaths.CHARACTERS.CHARACTERS.path
        },
        {
            name: "Budismo",
            path: RoutesPaths.CHARACTERS.BUDDHISM.path
        }
    ]

    return (
        <>
            <div className='mt-16 mx-3'>
                <NavTrail elements={elements} />

                <h1 className='text-white text-4xl font-bold'>BUDISMO</h1>

                <div ref={container} className="-mt-8 h-[300vh]">
                    <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                        {pictures.map(({ src, scale, imgClasses }, index) => (
                            <motion.div key={index} style={{ scale }} className="absolute top-0 h-full w-full flex items-center justify-center">
                                <img src={src} alt={`image ${index + 1}`} className={`absolute object-cover ${imgClasses}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className='text-white mt-[10vh] container characters-text'>
                    <MarkdownRenderer texts={BuddhismText} />
                </div>
            </div >
        </>
    );
}

export default TransitionLayout(Buddhism);