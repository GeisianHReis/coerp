import styled from "styled-components";

export const Box = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 12%;
    margin-right: 5%;
    margin-top: 120px;
    img{
        width: 100%;
    }
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        @media screen and (max-width: 650px) {
            font-size: ${(props) => props.theme["size-mobile-heading"]};
    }
    }
    p{
        color: black;
        font-weight: ${(props) => props.theme["font-family-paragraph"]};
        font-size: ${(props) => props.theme["size-paragraph"]};
        a{
            font-weight: ${(props) => props.theme["font-family-paragraph"]};
            cursor: pointer;
        }
    }
    
    @media screen and (max-width: 650px) {
        margin-left: 2%;
        margin-top: 0;
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

    font-family: ${(props) => props.theme["font-family-heading"]};

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
