import { motion } from 'framer-motion';

type VideoPlayerProps = {
    src: string; // URL del video
};

export default function SecondVideo({ src }: VideoPlayerProps) {
    return (
        <div>
            <motion.video
                src={src}
                autoPlay
                loop
                muted
                className='fixed w-full h-full object-cover'
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0 }} // Ciclo de opacidad
                transition={{
                    duration: 28,
                    repeat: Infinity,
                }}
            />

        </div>
    );
};

// const Video: React.FC<{ src: string; key: number }> = ({ src }) => {
//     return (

//         <motion.video
//             className='fixed w-full h-full object-cover opacity-60'
//             src={src}
//             autoPlay loop muted
//             transition={{ duration: 10 }}
//         />
//     );
// };


