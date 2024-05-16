import { useScrollIndex } from '@/features/intro/hooks/use-scroll-index';
import { useScrollControlledVideo } from '@/features/intro/hooks/use-video-scroll-control';
import { useDisableScroll } from '@/hooks/use-disable-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SequentialText from '../../features/intro/components/sequential-text';

import depth_map from '/src/features/intro/assets/images/depth_map.webp';
import image_start from '/src/features/intro/assets/images/image_start.webp';
import image_end from '/src/features/intro/assets/images/image_end.webp';
import fog_animation4 from '/src/assets/videos/fog_animation4.mp4';

function Intro3() {
    const imageTransitionDuration: number = 2;

    const images = [
        depth_map,
        image_start,
        image_end,
    ];

    const texts: string[] = [
        "Hace dos mil quinientos años, en la región que es ahora el sur de Irán, se alzaba una antigua ciudad de una belleza imponente.",
        "Levantada por reyes poderosos, encarnaba la capital ceremoniosa de la Persia aqueménida, el imperio más grande de su tiempo.",
        "Hoy, esta ciudad se conoce por el nombre de Persépolis",
        "EQUIPO <br/> presenta"
    ];

    const fogVideoRef = useRef<HTMLVideoElement>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [indexImage, setIndexImage] = useState(0);
    const [indexText, setIndexText] = useState(0);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
    const fogOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0]);

    useDisableScroll(imageTransitionDuration);
    useScrollControlledVideo(fogVideoRef, scrollRef);

    useScrollIndex(scrollYProgress, setIndexImage, images.length);
    useScrollIndex(scrollYProgress, setIndexText, texts.length);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

    }, []);

    return (

        <div className="w-full h-[900vh]" ref={scrollRef}>
            <motion.div
                className="fixed w-full h-full bg-cover bg-center"
                initial={{ y: "10", scale: 1.2 }}
                animate={{ y: 0.6, scale: 1.12 }}
                transition={{
                    duration: imageTransitionDuration,
                    ease: [0, 0.16, 0.34, 1]
                }}
                style={
                    {
                        scale: imageScale,
                        backgroundImage: `url(${images[indexImage % images.length]})`,
                    }
                }
            />

            <motion.video
                ref={fogVideoRef}
                style={{ opacity: fogOpacity }}
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover"
                src={fog_animation4}

            >
                Tu navegador no soporta vídeos HTML5.
            </motion.video>

            <div className="fixed w-full h-full bg-[#31363D] bg-opacity-50" />

            <div className="text-center2">
                <h1 className="text-white text-title">
                    <SequentialText text={texts[indexText]} />
                </h1>
            </div>
        </div >
    );
}

export default Intro3;

