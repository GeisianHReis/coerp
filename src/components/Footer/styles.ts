import styled from "styled-components";

const theme = {
  "light-blue": "#E0ECF8",
  "dark-blue": "#3363B5",
  "text-link-blue": "#007bff",
  "font-family-body": "Arial, sans-serif",
  "font-family-heading": "Georgia, serif",
};

export const FooterContainer = styled.footer`
  background-color: ${theme["light-blue"]}; 
  color: #333; 
  padding: 2em 0;
  width: 100%;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.5em 1em;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 2em; 
  max-width: 1200px; 
  width: 90%;
  margin-bottom: 1.5em; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  color: #333; 

  h3 {
    color: ${theme["dark-blue"]}; 
    font-size: 1.2em;
    margin-bottom: 1em;
    font-family: ${theme["font-family-heading"]};
  }

  @media (max-width: 768px) {
    align-items: center; 
    text-align: center;
  }
`;

export const LogoSection = styled(Section)`
  img {
    max-width: 150px; 
    margin-bottom: 1em;
  }
  h2 {
    font-size: 1.3em;
    line-height: 1.2;
    margin-bottom: 0.5em;
    color: #333; 
  }
  p {
    font-size: 0.9em;
    color: #555;
    margin-bottom: 1.5em;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.8em;
`;

export const SocialButton = styled.a`
  background-color: ${theme["dark-blue"]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2a528e;
  }
`;

export const LinksSection = styled(Section)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 0.7em;
  }
  a {
    color: ${theme["text-link-blue"]}; /* Blue links */
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s ease;
    &:hover {
      text-decoration: underline;
      color: ${theme["dark-blue"]};
    }
  }
`;

export const LocationSection = styled(Section)`
  h3 {
    margin-bottom: 1em;
  }
`;

export const LocationButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.7em 1em;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.8em;
  font-size: 1em;
  color: #333;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    border-color: ${theme["dark-blue"]};
  }
`;

export const AddressText = styled.p`
  font-size: 0.9em;
  color: #555;
  margin-top: 0.5em;
  margin-bottom: 1em;
  line-height: 1.4;
`;

export const ContributeSection = styled(Section)`
  img {
    width: 120px; 
    height: 120px;
    margin-bottom: 1em;
    border: 1px solid #ddd;
    padding: 5px;
    background-color: white;
  }
`;

export const Separator = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 1.5em;
`;

export const PixKeyContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #333; 
  font-weight: bold;
  margin-bottom: 1em; 
`;

export const PixCopyButton = styled.button`
  background: none;
  border: none;
  color: ${theme["dark-blue"]};
  cursor: pointer;
  margin-left: 0.5em;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #2a528e;
  }
`;