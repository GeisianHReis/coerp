import styled from "styled-components";

export const Box = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    h1{
        padding-left: 141px;
        display: flex;
        justify-content: center;
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        color: ${(props) => props.theme["black"]};
        @media screen and (max-width: 650px) {
            font-size: ${(props) => props.theme["size-mobile-heading"]};
    }
    }
    @media screen and (max-width: 650px) {
        margin-top: 0;
        h1{
            padding:0;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    margin-left: 15%;
    
    button{
            bottom:0;
        }
    section{
        align-items:center;
        width: 250px;
        margin: 26px;
        text-align: start;
        h2{
            font-family: ${(props) => props.theme["font-family-heading"]};
            font-size: 20px;
            color: ${(props) => props.theme["black"]};
        }
        h3{
            font-family: ${(props) => props.theme["font-family-heading"]};
            font-size: 13.3px;
            color: ${(props) => props.theme["black"]};
        }
        p{
            color: ${(props) => props.theme["black"]};
            font-family: ${(props) => props.theme["font-family-paragraph"]};
            font-size: 14px;
            margin: 0;
            padding: 5px 0;
        }

        

    }
`;