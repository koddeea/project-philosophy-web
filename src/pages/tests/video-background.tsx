import { useScrollControlledVideo } from '@/features/intro/hooks/use-video-scroll-control';
import { useDisableScroll } from '@/hooks/use-disable-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function VideoBackground() {
    const imageTransitionDuration: number = 2;

    const fogVideoRef = useRef<HTMLVideoElement>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
    const fogOpacity = useTransform(scrollYProgress, [0, 0.8], [0.25, 0]);

    useDisableScroll(imageTransitionDuration);
    useScrollControlledVideo(fogVideoRef, scrollRef);

    return (

        <div className="w-full h-[900vh]" ref={scrollRef}>

            <motion.div
                className="fixed w-full h-full bg-cover bg-center
                        bg-[url('src/features/intro/assets/images/depth_map.webp')]"
                initial={{ y: "10", scale: 1.2 }}
                animate={{ y: 0.6, scale: 1.12 }}
                transition={{
                    duration: imageTransitionDuration,
                    ease: [0, 0.16, 0.34, 1]
                }}
                style={
                    {
                        scale: imageScale
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
                src="src/assets/videos/fog-animation4 (video-converter.com).mp4"

            >
                Tu navegador no soporta vídeos HTML5.
            </motion.video>

            <div className="fixed w-full h-full bg-[#31363D] bg-opacity-50" />

            <div className="fixed inset-0 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                </h1>
            </div>
        </div>
    );
}

export default VideoBackground;

