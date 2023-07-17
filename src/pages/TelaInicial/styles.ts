import styled from "styled-components";

export const Titulo = styled.div`
       
    display:flex;
    flex-direction:column;

    align-items: center;
    align-items: center;
    justify-content: center;
         
    background-color: ${(props) => props.theme["blue"]};
  
    color: white;
    h2{
        display: flex;
        margin-top: 82px;
        font-size: 80px;
        font-family: ${(props) => props.theme["font-family-heading"]};

        @media screen and (max-width: 650px) {
            font-size: 35px;
            flex-direction: column;
            align-items: center;
        }
        p{
            margin: 0;
        }
    }

`;

export const ButtonMenu = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 14em;
    height: 3.5em;
    color: #3063B0;
    font-size: 17px;
    background-color: ${(props) => props.theme["white"]};

    border-radius: 1em;
    border: solid 1px black;
    
    text-decoration: none;

    font-family: ${(props) => props.theme["font-family-botton"]};
    font-weight: bold;
    transition: transform .2s; 
   
    &:first-child{
        margin-right: 128px;
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    @media screen and (max-width: 650px) {
        &:first-child{
        margin-right: 0;
        margin-bottom: 5px;
    }
    }   
`;


export const Subtitulo = styled.div`
    display: flex;
        align-items: center;
        justify-content: center;
         
        background-color: ${(props) => props.theme["blue"]};
        font-size: 35px;

        color: white;
        p{
            margin-top: 100px;
            font-size: 30px;
            font-family: ${(props) => props.theme["font-family-heading"]};
        }
        @media screen and (max-width: 650px) {
            p{
            margin-top: 50px;
            font-size: 20px;
            }
        }  
`;

export const Menu = styled.div`
       
    display: flex;
    background-color: ${(props) => props.theme["blue"]};
    align-items: center;
    justify-content: center;
    margin-top: 23px;

        @media screen and (max-width: 650px) {
            display:flex;
            flex-direction: column;
        }   
`;


export const Logo = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["blue"]};

    img{
        margin-top: 61px;
        height: 170px;
    }
    @media screen and (max-width: 650px) {
        img{
        height: 120px;
    }
    }

`;

export const Geral = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme["blue"]};
`;