import styled from "styled-components";

export const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 2em;

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s ease-in-out;

  &.visible {
    top: 0;
  }

  &.hidden {
    top: -100px;
  }

  img {
    height: 3em; 
    margin: 0;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1em; 
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1em;
    img {
        margin-bottom: 1em;
    }
    nav {
        flex-wrap: wrap; 
        justify-content: center;
    }
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  font-size: 1em; 
  padding: 0.5em 1em;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;

  font-family: ${(props) => props.theme["font-family-botton"]};

  &:hover {
    color: ${(props) => props.theme["dark-blue"]};
  }

  &.active {
    color: ${(props) => props.theme["dark-blue"]};
    position: relative;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -5px; 
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme["dark-blue"]};
  }

  @media screen and (max-width: 650px) {
  }
`;

export const AgendaButton = styled(ButtonMenu)`
  background-color: ${(props) => props.theme["dark-blue"]};
  color: white;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  display: flex;
  align-items: center;
  gap: 0.5em; 

  &:hover {
    background-color: #315a99;
    color: white;
  }

  &.active {
    background-color: #315a99; 
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &.active::after {
    display: none;
  }
`;