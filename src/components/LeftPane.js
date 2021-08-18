import React from 'react'
import Tile from './Tile'
import { LeftContainer } from './styling';

const LeftPane = () => {
    return (
        <>
            <LeftContainer>
                <Tile title="tile 1" />
                <Tile title="tile 2" />
                <Tile title="tile 3" />
            </LeftContainer>
        </>
    )
}

export default LeftPane
