import styled from "styled-components";

export const Box = styled.div`

`;
export const TopMobileStyle = styled.div`
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: auto auto auto;
    height: 70px;
    width: 100%;
    background-color: white;
    padding-left: 25px;
    position: fixed;
  
    img{
        height: 25px;
    }
    @media screen and (min-width: 650px){
        display: none;
    }
    top: 0;
  width: 100%;
  transition: top 0.3s;

  &.visible {
    top: 0;
  }

  &.hidden {
    top: -100px;
  } 
`;
export const TopMobileStyleB = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 100%;
    background-color: black;
    
    color: white;
    font-size: 28px;
    font-weight: bold;
    @media screen and (min-width: 650px){
        display: none;
    }
    top: 0;
  width: 100%;
  transition: top 0.3s;

  &.visible {
    top: 0;
  }

  &.hidden {
    top: -100px;
  } 
`;