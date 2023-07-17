import styled from "styled-components";


export const Lateral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    position: fixed;
    height: 100%;
    width: 10%;

    background-color: black;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 3em;

    transform: scale(-1, -1);
    writing-mode: vertical-lr;

    color: white;
    
   @media screen and (max-width: 650px) {
        display: none;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        overflow: hidden;
        width: 100%;
        transform: none;
        writing-mode: horizontal-tb;
        height: 10%;
        width: 100%;

        font-size: large;
    }
`;