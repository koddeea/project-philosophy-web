import { useScrollTop } from '@/hooks/use-scroll-top';
import TransitionLayout from '@/layouts/animations/transition-layout';

const AboutProject = () => {
    useScrollTop();
    return (
        <>
            About proyect
        </>
    )
}

export default TransitionLayout(AboutProject);