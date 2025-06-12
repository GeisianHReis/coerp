import styled from 'styled-components';

const theme = {
  "background-light-gray": "#F8F8F8", 
  "background-card-blue": "#E0ECF8",   
  "background-card-light": "#F8F8F8",  
  "text-dark": "#333",                 
  "text-dark-blue": "#3363B5",         
  "button-dark-blue": "#3363B5",       
  "button-text-white": "#fff",         
  "border-gray": "#E0E0E0",            
  "font-family-body": "Arial, sans-serif",
  "font-family-heading": "Georgia, serif", 
};

export const OnlineProgrammationContainer = styled.div`
  background-color: ${theme["background-light-gray"]};
  padding: 3em 2em;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  gap: 3em; /* Space between the left section and video grid */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column; /* Stack sections on medium screens */
    align-items: center;
    gap: 2em;
    padding: 2em 1em;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 30%; /* Take about 30% of the width */
  max-width: 300px; /* Max width for this section */
  text-align: left; /* Ensure text is left-aligned */

  @media (max-width: 1024px) {
    align-items: center; /* Center content when stacked */
    text-align: center;
    max-width: 100%;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  position: relative;
  padding-left: 20px; /* Space for the vertical line */
  line-height: 1; /* Adjust line height for closer text */

  h1 {
    font-size: 2.2em;
    color: ${theme["text-dark"]};
    margin: 0;
    font-family: ${theme["font-family-heading"]};
    font-weight: bold;
    text-transform: uppercase;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0; /* Align line to the top of the h1 */
    width: 4px; /* Thickness of the line */
    height: 100%; /* Make the line cover the entire title block height */
    background-color: ${theme["text-dark-blue"]};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8em;
    }
  }
`;

export const OnlineText = styled.span`
  font-size: 1.8em;
  color: ${theme["text-dark-blue"]};
  font-family: ${theme["font-family-heading"]};
  font-weight: bold;
  margin-top: 0.2em; /* Slightly separate from "PROGRAMAÇÃO" */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: 1em;
  color: ${theme["text-dark"]};
  line-height: 1.5;
  margin-bottom: 2em;
  font-family: ${theme["font-family-body"]};
`;

export const ViewMoreButton = styled.button`
  background-color: ${theme["button-dark-blue"]};
  color: ${theme["button-text-white"]};
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-family: ${theme["font-family-body"]};

  &:hover {
    background-color: #2a528e; /* Slightly darker blue on hover */
  }
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for videos */
  gap: 1.5em; /* Space between video cards */
  flex-grow: 1; /* Allow the grid to take remaining space */
  max-width: 900px; /* Max width for the video grid */
  width: 100%;

  @media (max-width: 1200px) { /* Adjust breakpoint for 2 columns */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) { /* Adjust breakpoint for 1 column */
    grid-template-columns: 1fr;
  }
`;

interface VideoCardProps {
  highlighted?: boolean;
}

export const VideoCard = styled.div<VideoCardProps>`
  background-color: ${props => props.highlighted ? theme["background-card-blue"] : theme["background-card-light"]};
  border: 1px solid ${theme["border-gray"]};
  border-radius: 8px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); 

  &:first-child {
    background-color: ${theme["background-card-blue"]};
    border-color: ${theme["button-dark-blue"]};
  }
`;

export const VideoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.9em;
  color: ${theme["text-dark"]};
  margin-bottom: 0.8em;
  font-family: ${theme["font-family-body"]};

  span:first-child {
    font-weight: bold;
    color: ${theme["text-dark-blue"]};
  }
`;

export const VideoDate = styled.span`
  color: ${theme["text-dark"]};
`;

export const VideoTitle = styled.h3`
  font-size: 1.3em;
  color: ${theme["text-dark"]};
  margin-bottom: 1.5em;
  line-height: 1.3;
  font-family: ${theme["font-family-heading"]};
  font-weight: bold;
`;

export const WatchButton = styled.button`
  background-color: ${theme["button-dark-blue"]};
  color: ${theme["button-text-white"]};
  padding: 0.8em 1.2em;
  border: none;
  border-radius: 20px; /* Pill-shaped button */
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: background-color 0.3s ease;
  font-family: ${theme["font-family-body"]};

  &:hover {
    background-color: #2a528e;
  }

  svg {
    /* Styles for the icon */
    color: ${theme["button-text-white"]};
  }
`;