import styled from "styled-components";

export const Box = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 12%;
    margin-right: 5%;
    img{
        width: 100%;
    }
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        
        color: ${(props) => props.theme["color-titulo"]};
        font-family: ${(props) => props.theme["font-family-default"]};
        font-weight: ${(props) => props.theme["weigth-titulo"]};
        font-size: ${(props) => props.theme["size-titulo"]};
        
    }
    p{
        color: black;
        a{
            font-weight: bold;
            cursor: pointer;
        }
    }
    
    @media screen and (max-width: 650px) {
        margin-left: 2%;
    }
    @media screen and (max-width: 450px) {
        margin-left: 2%;
    }
`;
export const BotaoSaibaMais = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 12em;
    height: 3em;


    background-color: white;

    border-radius: 1em;
    border: solid 1px black;
    color: black;
    text-decoration: none;
    margin: 3em 0.5em 0.5em 0.5em;


    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    transition: background 0.5s ease;
`;
    
export const Liderança = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 8px;
    padding: 0.5em;
    width: 150px;   
    img{
        border-radius: 8px;
    }
`;
