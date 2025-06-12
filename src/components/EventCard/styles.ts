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
};

export const EventCardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  &:first-child {
  }
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
  flex-grow: 1; /* Allows description to take available space */
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