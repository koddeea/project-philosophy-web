function Image() {

    return (
        <div
            className="flex flex-col items-center snap-center"
        >
            <h2 className="text-2xl">Lorem</h2>
            <img
                className="w-[500px]"
                src="src/assets/images/characters/1.png" />
        </div>
    );
}

export default function Slider() {
    return (
        <>
            <div className="snap-y-mandatory">
                <div className="bg-primary h-[200vh] snap-end"
                >
                    <h2 className="text-6xl text-secondary">Lorem</h2>
                </div>

                <div className="flex flex-col gap-y-52">

                    <Image />
                    <Image />
                    <Image />
                    <Image />
                    <Image />
                    <Image />
                    <Image />
                    <Image />
                </div>
            </div>
        </>
    );
}