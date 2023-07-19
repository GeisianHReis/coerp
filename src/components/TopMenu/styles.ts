import styled from "styled-components";


export const TopMenuStyle = styled.div`
    height: 30px;
    width: 100%;
    top: 0;
    background-color: black;
    position: fixed;
    z-index: 9999;
    color: white;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 10px;
    font-family: ${(props) => props.theme["font-family-heading"]};
    @media screen and (max-width: 650px) {
        display: none;
    }
`;