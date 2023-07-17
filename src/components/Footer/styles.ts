import styled from "styled-components";

export const FooterStyle = styled.div`
        display: flex;
        flex-direction: row;

        background-color: #3363B5;
        width: 100%;
        height: 10%;
        bottom: 0;
        @media screen and (max-width: 650px){
                display: none;
        }
`;

export const Secao = styled.section`
        @media screen and (min-width: 650px) {
                &:first-child{
                margin-left: 10%;
                }
        }
        @media screen and (max-width: 650px) {
                img{
                        display: none;
                }       
                font-size: 12px; 
                width: 90%;

        }
        

        display: flex;
        flex-grow: 1;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        color: white;
`;