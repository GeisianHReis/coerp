import styled from "styled-components";

export const Box = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 5%;
    margin-right: 5%;
    margin-top: 120px;
    img{
        width: 68%;
        margin: 43px 37px 62px;
    }
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        @media screen and (max-width: 650px) {
            font-size: ${(props) => props.theme["size-mobile-heading"]};
        }
        @media screen and (max-width: 650px) {
        font-size: ${(props) => props.theme["size-mobile-minimal-heading"]};
        }
    }
    p{
        color: black;
        font-weight: ${(props) => props.theme["font-family-paragraph"]};
        font-size: ${(props) => props.theme["size-paragraph"]};
        a{
            font-weight: ${(props) => props.theme["font-family-paragraph"]};
            cursor: pointer;
        }
    }
    @media screen and (max-width: 770px) {
      margin-left: 2%;
      margin-top: 25%;
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
export const BotaoSaibaMais = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 12em;
    height: 3em;


    background-color: white;

    border-radius: 1em;
    border: solid 1px black;
    color: black;
    text-decoration: none;
    margin: 3em 0.5em 0.5em 0.5em;

    font-family: ${(props) => props.theme["font-family-heading"]};

    transition: background 0.5s ease;
`;

export const Liderança = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 8px;
    padding: 0.5em;
    width: 150px;   
    img{
        border-radius: 8px;
    }
`;


export const MinisterioUm = styled.div`
  box-shadow: 4px 4px 4px #00000057;
  background-color: rgb(54 99 173);
  max-width: 261.72px;
  height: 375.67px; 
  border-radius: 11.57px;
  padding: 18px;
  margin: 22px;
  flex-shrink: 0;

  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center; 

  img {
    max-width: 100%;
    max-height: 150px;
    width: auto;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;

export const BotaoUm = styled.div`
  background-color: white;
  padding: 11px;
  border-radius: 10px;
  flex-shrink: 0;
  width: 100%; 
  text-align: center;

  h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    font-size: 13.8px;
    margin-bottom: 10px;
  }
`;


export const CardScrool = styled.section`
width: auto;
display: flex;
overflow-x: scroll;
margin:25px;

  &::-webkit-scrollbar {
    height: 6px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #737984;
    border-radius:50px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;


export const MinisterioMidia = styled.div`
box-shadow:4px 4px 4px #00000057;
background-color:rgb(54 99 173);
max-width:261.72px;
height:375.67px;
border-radius:11.57px;
padding:18px;
margin: 22px;
flex-shrink: 0; 

img{
    width: 84%;
    margin: 39px 18px 45px;
}
`;

export const MinisterioJovens = styled.div`
box-shadow:4px 4px 4px #00000057;
background-color:rgb(54 99 173);
max-width:261.72px;
height:375.67px;
border-radius:11.57px;
padding:18px;
margin: 22px;
flex-shrink: 0; 

img{
    width: 79%;
    margin: 43px 24px 47px;
}
`;

export const MinisterioMissoes = styled.div`
box-shadow:4px 4px 4px #00000057;
background-color:rgb(54 99 173);
max-width:261.72px;
height:375.67px;
border-radius:11.57px;
padding:18px;
margin: 22px;
flex-shrink: 0; 

img{
    width: 94%;
    margin: 32px 8px 37px;
}
`;

export const MinisterioLouvor = styled.div`
box-shadow:4px 4px 4px #00000057;
background-color:rgb(54 99 173);
max-width:261.72px;
height:375.67px;
border-radius:11.57px;
padding:18px;
margin: 22px;
flex-shrink: 0; 

img{
    width: 84%;
    margin: 50px 18px 33px;
}
`;


export const MinisterioInter = styled.div`
box-shadow:4px 4px 4px #00000057;
background-color:rgb(54 99 173);
max-width:261.72px;
height:375.67px;
border-radius:11.57px;
padding:18px;
margin: 22px;
flex-shrink: 0; 

img{
    width: 98%;
    margin: 41px 2px 21px;
}
`;


export const MinisterioCasais = styled.div`
box-shadow:4px 4px 4px #00000057;
background-color:rgb(54 99 173);
max-width:261.72px;
height:375.67px;
border-radius:11.57px;
padding:18px;
margin: 22px;
flex-shrink: 0; 

img{
    width: 78%;
    margin: 51px 25px 39px;
}
`;