import styled from "styled-components";

export const FaixaDeAvisos = styled.section`
    display: flex;
    flex-direction: column;
    padding: 7% 7% 7%;

    div{
        flex-grow: 3;
        align-items: center;
        h1{
            display: flex;
            justify-content: center;

            color: ${(props) => props.theme["color-titulo"]};
            font-family: ${(props) => props.theme["font-family-default"]};
            font-weight: ${(props) => props.theme["weigth-titulo"]};
            font-size: ${(props) => props.theme["size-titulo"]};
        }
        p{
            display: flex;
            color: ${(props) => props.theme["color-paragraph"]};
            font-family: ${(props) => props.theme["font-family-default"]};
            font-size: ${(props) => props.theme["size-paragraph"]};
            width: 500px;
        }
    }
`;

export const Box = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
        width: 50%;
        padding: 10px;
        margin-right: 6%;

    }
    @media screen and (max-width: 650px) {
        flex-direction: column-reverse;
        img{
            width: 100%;
        }
    }
`;

export const FaixaDaHome = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        background-color: #3363B5;
        width: 100%;       
        height: 120px;
        color: white;
        h1{
            font-weight: ${(props) => props.theme["weigth-titulo"]};
            font-size: ${(props) => props.theme["size-titulo"]};
            font-family: ${(props) => props.theme["font-family-default"]};
            @media screen and (max-width: 650px) {
                font-size: 35px;
            }
            @media screen and (max-width: 470px) {
                font-size: 25px;
            }
        }
        
        p{
            font-family: ${(props) => props.theme["font-family-default"]};
            font-size: ${(props) => props.theme["size-paragraph"]};
            a{ 
                color: white;
            }
        }
`;

export const MinCarrossel = styled.section`
    cursor: grab;
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    min-height: 100hv;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        min-height: 200px;
        min-width: 400px;
        padding: 14px      
    }
    img{
        width: 100%;
        height: 90%;
        pointer-events: none;
    }
`;

export const GaleriaPc = styled.div`

`;
export const Galeria = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    img{
        width: 100%;
        padding: 10px;
    }
    @media screen and (max-width: 650px) {
        grid-template-columns: auto auto;
    }
`;


