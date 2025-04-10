import styled from "styled-components";

export const BoxGeral = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
`;

export const Box = styled.main`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;

    flex-grow: 8;
    color: ${(props) => props.theme["black"]};

    font-family: ${(props) => props.theme["font-family-botton"]};
    align-items: center;

    margin-top: 120px;
    @media screen and (max-width: 650px) {
        margin-top: 0;
    }
    iframe{
        @media screen and (max-width: 650px){
            width: 380px;
        }
    }
    h1{
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        @media screen and (max-width: 650px) {
            font-size: ${(props) => props.theme["size-mobile-heading"]};
    }
    }
`;

export const OnlineSection = styled.section`
    padding: 90px;
    background-color: rgb(255, 255, 255);
    text-align: center; /* Alterado para center */

    h2 {
        color: #000;
        font-size: 24px;
        font-weight: bold;
        text-align: left; /* Mantém o título alinhado à esquerda */
        padding-left: 20px; /* Adicionado para consistência */
    }

    span {
        color: #3663AC;
        font-weight: bold;
    }

    p {
        color: #333;
        font-size: 16px;
        margin-top: 10px;
        text-align: left; /* Mantém o parágrafo alinhado à esquerda */
        padding-left: 20px;
    }

    .events-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr)); /* Limita a 3 colunas */
        gap: 20px;
        margin: 20px auto; /* Centraliza o grid */
        max-width: 1200px; /* Limita a largura máxima */
        padding: 0 20px;
        
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 2 colunas em telas médias */
        }
        
        @media (max-width: 600px) {
            grid-template-columns: 1fr; /* 1 coluna em telas pequenas */
        }
    }

    .view-more {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
`;

export const EventCard = styled.div`
    background: #E6F0FF;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    width: 100%; /* Garante que o card ocupe todo o espaço da célula do grid */

    h3 {
        color: #000;
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }

    .date {
        background: #3663AC;
        color: #fff;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        margin-top: 5px;
    }

    .watch-button {
        margin-top: 10px;
        background-color: #3663AC;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        
        &:hover {
            background-color: #2a4f8a;
        }
    }
`;