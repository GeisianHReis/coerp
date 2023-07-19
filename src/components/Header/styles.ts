import styled from "styled-components";

export const BoxMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 3em;

    background-color: white;
    img{
        width: 15%;
        margin: 3em 0.5em 0.5em 0.5em;
        cursor: pointer;
    }
    @media screen and (max-width: 650px) {
        display: none;
    }
    
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;

  &.visible {
    top: 0;
  }

  &.hidden {
    top: -100px; /* Ajuste esse valor para controlar o quanto o cabeçalho fica oculto */
  }

`;

export const ButtonMenu = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 12em;
    height: 3em;


    background-color: white;

    border-radius: 1em;
    border: solid 1px ${(props) => props.theme["dark-blue"]};;
    color: black;
    text-decoration: none;
    margin: 3em 0.5em 0.5em 0.5em;

    font-family: ${(props) => props.theme["font-family-botton"]};

    transition: background 0.5s ease;

    &:hover{
        cursor: pointer;
        background-color: ${(props) => props.theme["dark-blue"]};
        color: white;
    }
    &.active{
        background-color: ${(props) => props.theme["dark-blue"]};
        color: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    &:first-child{
        margin-left: 10%;
    }
    
    @media screen and (max-width: 650px) {
        display: none;
    }
`;