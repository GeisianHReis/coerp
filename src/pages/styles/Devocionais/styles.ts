import styled from "styled-components";

export const Box = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    h1{
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
      margin-left: 2%;
      margin-top: 30%;
    }

    @media screen and (max-width: 550px) {
      margin-left: 2%;
      margin-top: 35%;
    }
    @media screen and (max-width: 520px) {
      margin-left: 2%;
      margin-top: 48%;
    }

    @media screen and (max-width: 460px) {
      margin-left: 2%;
      margin-top: 57%;
    }
    @media screen and (max-width: 380px) {
      margin-left: 2%;
      margin-top: 62%;
    }
    @media screen and (max-width: 350px) {
      margin-left: 2%;
      margin-top: 70%;
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