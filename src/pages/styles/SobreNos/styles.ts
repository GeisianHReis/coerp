import styled from "styled-components";

export const ListaProgramacao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-left: 12%;
    margin-right: 8%;
    margin-top: 120px;
    
    font-size: 16pt;
    font-family: ${(props) => props.theme["font-family-paragraph"]};
    color: black;
    @media screen and (max-width: 650px) {
        margin-top: 0;
        margin-left: 5%;
        margin-right: 5%;
    }

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
    }
    p{
        margin-bottom: 1em;
        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-paragraph"]};
        font-size: ${(props) => props.theme["size-paragraph"]};
    }
`;

export const Box = styled.main`
    display: flex;
    flex-direction: row;
`;

export const GaleriaDaliderança = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    @media screen and (max-width: 650px) {
        grid-template-columns: auto auto;
    }
`;
export const Liderança = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 8px;
    padding: 0.5em;
    height: 200px;
    img{
        border-radius: 8px;
        width: 150px;
        height: 80%;
    }
`;
