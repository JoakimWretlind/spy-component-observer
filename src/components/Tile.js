import { useEffect } from 'react'
import useVisibilitySpy from '../hooks/useVisibilitySpy'
import { Placeholder, Title, Ratio } from './styling'

const Tile = ({ title }) => {
    // Add the hook created in 'useVisibilitySpy'
    const { isVisible, itemRef, ratio } = useVisibilitySpy();

    useEffect(() => {
        if (isVisible) {
            console.log(`${title} is visible`);
        }
    }, [isVisible]);

    return (
        <Placeholder ref={itemRef}>
            <Title>{title}</Title>
            <Ratio>{Math.floor(ratio * 100)}%</Ratio>
        </Placeholder>
    )
}

export default Tile
