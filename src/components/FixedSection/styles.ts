import styled from 'styled-components';

const theme = {
  "text-white": "#fff",
  "text-blue": "#3363B5",
  "font-family-tagline": "Georgia, serif",
  "font-family-body": "Arial, sans-serif",
};

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px; 
  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden; 

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TopHeaderArea = styled.div`
  background-color: ${theme["text-white"]}; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${theme["text-white"]};
  padding: 2em 5%; 
  padding-bottom: 0; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  overflow: visible;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5em 3%;
    padding-bottom: 0;
    align-items: center;
    text-align: center;
  }
`;

export const Tagline = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  color: ${theme["text-blue"]};
  margin-bottom: 0.5em;
  font-family: ${theme["font-family-tagline"]};
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 1.5em;
    align-self: center; /* Centers on mobile */
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const MainLogoImage = styled.img`
  max-width: 90%;
  height: auto;
  margin-bottom: -40px; 
  margin-top: -10px; 
  align-self: flex-start;
  z-index: 15; 

  @media (max-width: 768px) {
    max-width: 80%;
    margin-bottom: -30px; 
    margin-top: -5px;
    align-self: center;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    margin-bottom: -20px; 
    margin-top: 0px;
  }
`;

export const UnitIndicator = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: ${theme["text-blue"]};
  text-transform: uppercase;
  margin-top: -1em; 
  align-self: flex-end; 
  margin-right: 0;
  position: relative;
  z-index: 11; 


  @media (max-width: 768px) {
    font-size: 1em;
    align-self: center;
    margin-right: 0;
    margin-top: 0.5em;
  }
`;

export const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 5%;
  box-sizing: border-box;

  margin-top: -80px; 
  z-index: 5; 
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 1024px) {
    height: 350px;
    margin-top: -60px; /* Adjusted */
  }

  @media (max-width: 768px) {
    height: 300px;
    margin-top: -50px; /* Adjusted */
    justify-content: center;
    padding: 0 3%;
  }

  @media (max-width: 480px) {
    height: 250px;
    margin-top: -40px; /* Adjusted */
  }
`;

export const BackgroundImageWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
  object-position: center 20%;
`;

export const FoundingDate = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: ${theme["text-white"]};
  position: relative;
  margin-bottom: 2em; 
  margin-left: 0;
  z-index: 5;
  padding: 0.5em 1em;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 1.5em;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;