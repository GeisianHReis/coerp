import styled from "styled-components";

export const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Distribute items with space between them */
  padding: 0.5em 2em; /* Adjust padding as needed */

  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow like in the image */

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays on top */
  transition: top 0.3s ease-in-out;

  &.visible {
    top: 0;
  }

  &.hidden {
    top: -100px; /* Adjust this value to control how much the header is hidden */
  }

  img {
    height: 3em; /* Adjust height instead of width to maintain aspect ratio, or set a fixed width if preferred */
    margin: 0; /* Remove extra margin */
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1em; /* Space between navigation buttons */
  }

  @media screen and (max-width: 768px) { /* Adjust breakpoint for responsiveness */
    flex-direction: column;
    padding: 1em;
    img {
        margin-bottom: 1em;
    }
    nav {
        flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
        justify-content: center;
    }
    /* You might want to remove 'display: none' for smaller screens and handle it differently */
    /* display: none; */ /* Removed to make it visible on smaller screens, consider a mobile menu */
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent; /* No background for regular buttons */
  border: none; /* No border for regular buttons */
  color: black;
  font-size: 1em; /* Adjust font size */
  padding: 0.5em 1em; /* Adjust padding */
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;

  font-family: ${(props) => props.theme["font-family-botton"]};

  &:hover {
    color: ${(props) => props.theme["dark-blue"]}; /* Color change on hover */
  }

  &.active {
    color: ${(props) => props.theme["dark-blue"]};
    position: relative; /* Needed for the underline effect */
  }

  /* Underline effect for active button */
  &.active::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Adjust position of the underline */
    left: 0;
    width: 100%;
    height: 2px; /* Thickness of the underline */
    background-color: ${(props) => props.theme["dark-blue"]};
  }

  @media screen and (max-width: 650px) {
    /* You might want to make these buttons smaller or adjust their layout for mobile */
  }
`;

export const AgendaButton = styled(ButtonMenu)`
  background-color: ${(props) => props.theme["dark-blue"]}; /* Blue background */
  color: white;
  border-radius: 20px; /* More rounded corners */
  padding: 0.5em 1.5em; /* Adjust padding to make it wider */
  display: flex;
  align-items: center;
  gap: 0.5em; /* Space between text and icon */

  &:hover {
    background-color: #315a99; /* Slightly darker blue on hover */
    color: white;
  }

  &.active {
    background-color: #315a99; /* Maintain active state color */
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for active state */
  }

  &.active::after {
    display: none; /* No underline for the agenda button */
  }
`;