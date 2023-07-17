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

    align-items: center;
    h1{
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-weight: ${(props) => props.theme["weigth-titulo"]};
        font-size: ${(props) => props.theme["size-heading"]};
        
    }
`;
