import styled from "styled-components";

export const Titulo = styled.div`
       
    display:flex;
    flex-direction:column;

    align-items: center;
    align-items: center;
    justify-content: center;
         
    background-color: ${(props) => props.theme["blue"]};
  
    color: white;
    h1{
        margin-top: 82px;
        font-size: 80px;
        font-family: ${(props) => props.theme["font-family-heading"]};
        @media screen and (max-width: 650px) {
            font-size: 35px;
        }
        @media screen and (max-width: 470px) {
            font-size: 25px;
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
    margin: 0 0 0 0;

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

    p{
        margin-top: 0;
        margin-bottom: 0;
    }

    @media screen and (max-width: 650px) {
        &:first-child{
            margin-left: 0;
            margin-top: -166px;
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

            @media screen and (max-width: 650px) {
                font-size: 35px;
            
            }
            @media screen and (max-width: 470px) {
                font-size: 18px;
                margin-top:-387px;
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
            flex-direction: column-reverse;
            margin-left:0;
            padding-right: 0;
            margin-top:-77px;

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
            width: 30%;   
        }
    }
`;

export const Geral = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme["blue"]};
`;