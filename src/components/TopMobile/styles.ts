import styled from "styled-components";

export const TopMobileStyle = styled.div`
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: auto auto auto;
    height: 70px;
    width: 100%;
    background-color: white;
    padding-left: 25px;
    img{
        height: 25px;
    }
    @media screen and (min-width: 650px){
        display: none;
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
`;