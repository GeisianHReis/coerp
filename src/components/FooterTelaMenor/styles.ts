import styled from "styled-components";

export const FooterStyle = styled.div`
        display: flex;
        flex-direction: column;

        background-color: #3363B5;
        width: 100%;
        height: 312px;
        bottom: 0;
        @media screen and (min-width: 650px){
                display: none;
        }
`;
export const Secao = styled.section`

        display: flex;
        flex-grow: 1;
        flex-direction: column;
        
        align-items: flex-start;
        justify-content: center;
        padding: 10px;
        color: white;
        p{
                margin: 0;
        }
`;
export const FooterEnd = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        height: 180px;
        background-color: darkblue;
        padding: 15px;
        @media screen and (min-width: 650px){
                display: none;
        }
`;
export const ItemFooter = styled.a`
        color: white;
        font-size: 14px;
        text-decoration: none;
        
`;