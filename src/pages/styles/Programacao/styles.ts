import styled from "styled-components";


export const ListaProgramacao = styled.section`
    display: flex;
    flex-direction: row;
    
    padding: 20px;

    font-size: ${(props) => props.theme["size-paragraph"]};
    font-family: ${(props) => props.theme["font-family-paragraph"]};
    justify-content: space-between;
    color: ${(props) => props.theme["black"]};

    @media screen and (max-width: 650px) {
        margin-left: 2%;
        margin-right: 5%;
        padding: 7px;
        font-size: ${(props) => props.theme["size-paragraph"]};
    }  
    
    &.destaque{
        font-weight: bolder;
    }

`;

export const Box = styled.main`
    display: flex;
    flex-direction: row;
    margin-left: 15%;
    @media screen and (max-width: 650px) {
        flex-direction: column;
        margin-top: 0;
        margin-left: 2%;
        }
`;
export const BoxGeral = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 120px;
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        @media screen and (max-width: 650px) {
            margin-bottom: 10px;
            font-size: ${(props) => props.theme["size-mobile-heading"]};
        }
    }
    @media screen and (max-width: 650px) {
        margin-top: 0;
    }
    img{
        width: 85%;

    }
    &:last-child{
        align-items: center;
    }

`;