import styled from "styled-components";

interface NavItemProps {
    active?: boolean;
}

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1em 5%;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 2em;
`;

export const NavItem = styled.button<NavItemProps>`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;

  font-size: 1rem;
  color: ${({ active }) => (active ? "#3663AC" : "#000")};
  font-family: ${(props) => props.theme["font-family-botton"]};
  cursor: pointer;

  &:hover {
    color: #3663AC;
  }

  @media screen and (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 14px;
  }
`;

export const AgendaButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #3663AC;
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #2c5299;
  }

  svg {
    margin-left: 0.5em;
  }
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: white;
    border-bottom: 2px solid #E6F0FF;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
`;
