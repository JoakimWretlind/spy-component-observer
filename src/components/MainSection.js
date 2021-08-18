import React from 'react'
import {
    Container,
    PaneContainer
} from './styling'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const Main = () => {
    return (
        <>
            <Container>
                <PaneContainer>
                    <LeftPane />
                    <RightPane />
                </PaneContainer>
            </Container>
        </>
    )
}

export default Main
