import styled from "styled-components";


export const Lateral = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    top: 0;
    position: fixed;
    height: 100%;
    width: 10%;

    background-color: black;

    font-family: ${(props) => props.theme["font-family-heading"]};
    font-size: 2.5em;

    transform: scale(-1, -1);
    writing-mode: vertical-lr;

    color: white;
    img{
        align-items: center;
        justify-content: center;
        cursor: pointer;

        width: 50%;
        margin-top: 35px;
        bottom: 7%;
        position: fixed;

        transform: scale(-1, -1);
        writing-mode: vertical-lr;
    }
    
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