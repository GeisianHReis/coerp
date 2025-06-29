import styled from "styled-components";

// Geral will now be the main flex container for the whole screen
export const Geral = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme["blue"]};

    display: flex; /* Use flexbox for overall layout */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    padding: 20px; /* Add some padding around the whole page */
    box-sizing: border-box; /* Include padding in element's total width and height */
`;

export const Logo = styled.div`
    /* Logo should be a flex item of Geral, so remove vertical margins */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px; /* Space below the logo */

    img {
        height: 170px; /* Standard height */
        /* Removed margin-top as Geral handles vertical centering */
    }

    @media screen and (max-width: 650px) {
        margin-bottom: 25px; /* Adjust margin for smaller screens */
        img {
            height: 120px; /* Smaller height on mobile */
        }
    }
`;

export const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Removed background-color here as Geral has it */
    color: white;
    text-align: center; /* Ensure text inside is centered */
    margin-bottom: 20px; /* Space below the title */

    h2 {
        display: flex;
        align-items: center; /* Align items for "SEJA BEM VINDO" */
        /* Removed margin-top as Geral handles vertical centering */
        font-size: 80px;
        font-family: ${(props) => props.theme["font-family-heading"]};
        line-height: 1; /* Adjust line height for better vertical alignment */
    }
    h2 p {
        margin: 0; /* Remove default paragraph margin */
    }

    @media screen and (max-width: 650px) {
        margin-bottom: 15px; /* Adjust margin for smaller screens */
        h2 {
            font-size: 35px;
            flex-direction: column; /* Stack "SEJA" and "BEM VINDO" */
            align-items: center;
        }
    }
`;

export const Subtitulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* Removed background-color here as Geral has it */
    color: white;
    text-align: center; /* Ensure text inside is centered */
    margin-bottom: 40px; /* Space below the subtitle */

    p {
        /* Removed margin-top as Geral handles vertical centering */
        font-size: 30px;
        font-family: ${(props) => props.theme["font-family-heading"]};
        margin: 0; /* Remove default paragraph margin */
    }

    @media screen and (max-width: 650px) {
        margin-bottom: 30px; /* Adjust margin for smaller screens */
        p {
            font-size: 20px;
            /* Removed margin-top for mobile as well */
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    /* Removed background-color here as Geral has it */
    align-items: center;
    justify-content: center;
    gap: 30px; /* Use gap for spacing between buttons */
    /* Removed margin-top as Geral handles overall layout */

    @media screen and (max-width: 650px) {
        flex-direction: column; /* Stack buttons vertically on mobile */
        gap: 10px; /* Smaller gap on mobile */
    }
`;

export const ButtonMenu = styled.button`
    display: flex;
    flex-direction: column; /* Kept for potential internal alignment if content changes */
    align-items: center;
    justify-content: center;

    width: 14em;
    height: 3.5em;
    color: #3063B0;
    font-size: 17px;
    background-color: ${(props) => props.theme["white"]};

    border-radius: 1em;
    border: solid 1px black;
    text-decoration: none;

    font-family: ${(props) => props.theme["font-family-botton"]};
    font-weight: bold;
    transition: transform .2s;

    /* Removed &:first-child margin-right, replaced by gap on Menu */

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    @media screen and (max-width: 650px) {
        width: 12em; /* Slightly smaller button on mobile if needed */
        height: 3em; /* Slightly smaller button on mobile if needed */
        /* &:first-child margin-bottom is handled by gap on Menu */
    }
`;