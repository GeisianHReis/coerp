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
    }
`;
