
import TransitionLayout from '@/layouts/animations/transition-layout';
import { Link } from 'react-router-dom';
import HorizontalScroll from '../tests/horizontal-scroll';

const Characters = () => {

    return (
        <>
            <div className='mt-16 mx-3'>
                <h1 className='text-white text-5xl font-extralight'>Personajes</h1>
                <Link to='/characters/catholicism'>Catolicismo</Link>
            </div>

            <HorizontalScroll />
        </>
    );
}

export default TransitionLayout(Characters);