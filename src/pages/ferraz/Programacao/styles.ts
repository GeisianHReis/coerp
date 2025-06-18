import styled from 'styled-components';

const theme = {
  "background-light-gray": "#F8F8F8", 
  "text-dark-blue": "#3363B5",       
  "text-gray": "#555",               
  "border-gray": "#ccc",             
  "button-blue": "#3363B5",          
  "button-text-white": "#fff",       
  "font-family-body": "Arial, sans-serif",
  "font-family-heading": "Georgia, serif", 
  "background-blue-light": "#8DACDB",
};

export const AgendaContainer = styled.div`
  background-color: ${theme["background-blue-light"]};
  padding: 3em 5%; 
  width: 100%;
  box-sizing: border-box; 
  flex-direction: column;
  align-items: center;

  padding-top: calc(50px + 20px);

  @media (max-width: 768px) {
    padding: 15px;
    padding-top: calc(60px + 90px);
  }

  @media (max-width: 520px) {
  padding: 12px;
  padding-top: calc(60px + 140px);
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-top: calc(70px + 130px);
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; 
  margin-bottom: 2em;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start; 
    gap: 1em;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  color: ${theme["text-dark-blue"]};
  margin: 0;
  font-family: ${theme["font-family-heading"]};
  position: relative;
  padding-left: 30px; 

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px; 
    height: 100%;
    background-color: ${theme["text-dark-blue"]};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.3em;
    padding-left: 25px;
  }
`;

export const MonthNavigator = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 1.1em;
  font-weight: bold;
  color: ${theme["text-dark-blue"]};
  font-family: ${theme["font-family-body"]};

  @media (max-width: 768px) {
    align-self: flex-end; 
    font-size: 1em;
  }
`;

export const MonthButton = styled.button`
  background: none;
  border: none;
  color: ${theme["text-dark-blue"]};
  cursor: pointer;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const MonthDisplay = styled.span`
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
`;