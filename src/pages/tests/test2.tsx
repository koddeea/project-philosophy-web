import ButtonCircleAnimated from "@/components/ui-animated/button-circle-animated";


export default function Test2() {
    return (
        <div className="fixed h-full w-full bg-zinc-500">
            <ButtonCircleAnimated
                className=""
                size="2xl"
                variant="intro"
                ripple
                onClickAnimation
            >
                Sin hover
            </ButtonCircleAnimated>

            <ButtonCircleAnimated
                className=""
                size="2xl"
                variant="intro"
                ripple
                onHoverAnimation
                onClickAnimation
            >
                Con hover
            </ButtonCircleAnimated>
        </div>
    );
}