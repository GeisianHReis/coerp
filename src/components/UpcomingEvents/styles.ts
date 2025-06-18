import styled from 'styled-components';

const theme = {
  "background-light-blue": "#E6F0FF", 
  "text-dark-blue": "#3663AC",       
  "text-gray": "#555",               
  "border-gray": "#ccc",             
  "button-blue": "#3363B5",         
  "button-text-white": "#fff",      
  "font-family-body": "Arial, sans-serif",
  "font-family-heading": "Georgia, serif",
};

export const UpcomingEventsContainer = styled.div`
  background-color: ${theme["background-light-blue"]};
  padding: 3em 2em;
  margin: 2em 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2em 1em;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  color: ${theme["text-dark-blue"]};
  margin-bottom: 2em;
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

export const EventCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  padding: 1.5em;
  flex-direction: column;
  align-items: flex-start;
  text-align: left; 
  width: 100%;
`;

export const EventDate = styled.p`
  font-size: 0.9em;
  color: ${theme["text-gray"]};
  margin-bottom: 0.5em;
  font-family: ${theme["font-family-body"]};
`;

export const EventTitle = styled.h3`
  font-size: 1.4em;
  color: ${theme["text-dark-blue"]};
  margin-bottom: 1em;
  line-height: 1.2;
  font-family: ${theme["font-family-heading"]};
`;

export const EventSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme["border-gray"]};
  margin-bottom: 1em;
`;

export const EventDescription = styled.p`
  font-size: 0.9em;
  color: ${theme["text-gray"]};
  line-height: 1.5;
  margin-bottom: 2em;
  flex-grow: 1; 
  font-family: ${theme["font-family-body"]};
`;

export const MoreInfoButton = styled.button`
  background-color: transparent;
  border: 1px solid ${theme["text-dark-blue"]}; 
  color: ${theme["text-dark-blue"]};
  padding: 0.8em 1.2em;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em; 
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: ${theme["font-family-body"]};

  &:hover {
    background-color: ${theme["button-blue"]};
    color: ${theme["button-text-white"]};
  }

  svg {
    color: ${theme["text-dark-blue"]}; 
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: ${theme["button-text-white"]}; 
  }
`;