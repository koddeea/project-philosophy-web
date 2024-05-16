import { RoutesPaths } from "@/routes/routes-paths";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import Picture from '/src/features/characters/catholicism/assets/images/catholicism.webp';

interface HorizontalScrollProps {
    className?: string;
}

const HorizontalScroll = ({ className }: HorizontalScrollProps) => {
    return (
        <div className={className}>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0.7%", "-83%"]);

    return (
        <section ref={targetRef} className="h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-5">
                    {cards.map((card, index) => {
                        return <Card card={card} key={index} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <Link to={card.path}>
            <div
                className="group relative w-[90vw] h-[50vh] overflow-hidden "
            >
                <div
                    style={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-52 left-0 right-0 bottom-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-2xl font-bold uppercase text-white backdrop-blur-sm">
                        {card.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default HorizontalScroll;

type CardType = {
    path: string;
    imageUrl: string;
    title: string;
};



const cards: CardType[] = [
    {
        path: RoutesPaths.CHARACTERS.CATHOLICISM.path,
        imageUrl: Picture,
        title: "CATOLICISMO",
    },
    {
        path: RoutesPaths.CHARACTERS.BUDDHISM.path,
        imageUrl: Picture,
        title: "Budismo",
    },
    {
        path: "",
        imageUrl: Picture,
        title: "Title 3",
    },
    {
        path: "",
        imageUrl: Picture,
        title: "Title 4",
    },
    {
        path: "",
        imageUrl: Picture,
        title: "Title 5",
    },
];