import styled from "styled-components";
import bannerImage from "../../../assets/IMG_1457 1.svg";
import { Button } from "@mui/material";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }
`;

export const Section = styled.section`
    padding: 40px 20px;
    text-align: center;
    background-color: #E6F0FF;
    h2 {
        color: #3663AC;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .events {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`;

export const EventCardEvent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: left;
    h3 {
        color: #3663AC;
        font-size: 20px;
    }
    p {
        color: #333;
        font-size: 16px;
        margin: 10px 0;
    }
`;

export const OnlineProgram = styled.section`
    padding: 40px 20px;
    text-align: center;
    background-color: #FFFFFF;
    h2 {
        color: #3663AC;
        font-size: 24px;
        margin-bottom: 20px;
    }
    p {
        color: #333;
        font-size: 16px;
    }
`;

export const Footer = styled.footer`
    background-color: #E6F0FF;
    color: #3663AC;
    text-align: center;
    padding: 20px;
    font-size: 14px;
`;

export const NavLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #3663AC;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled.a`
  color: #333;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #3663AC;
  }
`;

export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  height: 70vh; /* Reduzi a altura para não ocupar tela inteira */
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(248,248,248,0.9), rgba(255,255,255,0.9)), 
              url(${bannerImage});
  background-size: cover;
  background-position: center;
  margin-top: 0; /* Removi a margem superior */
  padding-top: 80px; /* Espaço para o header fixo */
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainLogo = styled.h1`
  font-size: 5rem; /* 80px */
  font-weight: bold;
  color: #3663AC;
  margin: 0;
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const DateBox = styled.div`
  background: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  border: 1px solid #e0e0e0;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 20px;
  }
`;

export const UnitName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-top: 40px;
  letter-spacing: 3px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 30px;
  }
`;

export const OnlineSection = styled.section`
    padding: 40px 20px;
    background-color: rgb(255, 255, 255);
    text-align: center; /* Alterado para center */

    h2 {
        color: #000;
        font-size: 24px;
        font-weight: bold;
        text-align: left; /* Mantém o título alinhado à esquerda */
        padding-left: 20px; /* Adicionado para consistência */
    }

    span {
        color: #3663AC;
        font-weight: bold;
    }

    p {
        color: #333;
        font-size: 16px;
        margin-top: 10px;
        text-align: left; /* Mantém o parágrafo alinhado à esquerda */
        padding-left: 20px;
    }

    .events-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr)); /* Limita a 3 colunas */
        gap: 20px;
        margin: 20px auto; /* Centraliza o grid */
        max-width: 1200px; /* Limita a largura máxima */
        padding: 0 20px;
        
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 2 colunas em telas médias */
        }
        
        @media (max-width: 600px) {
            grid-template-columns: 1fr; /* 1 coluna em telas pequenas */
        }
    }

    .view-more {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
`;

export const EventCard = styled.div`
    background: #E6F0FF;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    width: 100%; /* Garante que o card ocupe todo o espaço da célula do grid */

    h3 {
        color: #000;
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }

    .date {
        background: #3663AC;
        color: #fff;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        margin-top: 5px;
    }

    .watch-button {
        margin-top: 10px;
        background-color: #3663AC;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        
        &:hover {
            background-color: #2a4f8a;
        }
    }
`;

