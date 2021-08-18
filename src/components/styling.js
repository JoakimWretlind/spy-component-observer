import styled from 'styled-components';

/** Main */
export const Container = styled.div`
    display: grid;
`;

export const PaneContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .4rem;
`;

/** Tile */
export const Placeholder = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: .4rem;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: tomato;
    text-transform: uppercase;
`;

export const Ratio = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: slategray;
    height: 100%;
    font-size: 8rem;
`;

/** RightPane */
export const RightContainer = styled.div`
    position: sticky;
    height: 100vh;
    right: 0;
    top: 0;
    background: slateblue;
`;

/** LeftPane */
export const LeftContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: .2rem;
`;

