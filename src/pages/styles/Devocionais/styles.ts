import styled from "styled-components";

export const Box = styled.main`
    display: flex;
    flex-direction: column;

    h1{
        display: flex;
        justify-content: center;
        margin-top: 120px;
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        color: ${(props) => props.theme["black"]};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 15%;
    section{
        width: 250px;
        margin: 10px;
        text-align: start;
        h2{
            font-family: ${(props) => props.theme["font-family-heading"]};
            font-size: 20px;
            color: ${(props) => props.theme["black"]};
        }
        h3{
            font-family: ${(props) => props.theme["font-family-heading"]};
            font-size: 12px;
            color: ${(props) => props.theme["black"]};
        }
        p{
            color: ${(props) => props.theme["black"]};
            font-family: ${(props) => props.theme["font-family-paragraph"]};
            font-size: 14px;
            margin: 0;
        }
    }
`;