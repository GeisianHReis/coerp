import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #E6F0FF;
    color: #3663AC;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    bottom: 0;
    justify-content: center;
    
    @media screen and (max-width: 650px) {
        display: none;
    }
`;

export const FooterSection = styled.div`
    justify-content: space-between;
    width: 20%;
    max-width: 1200px;
    margin-top: 20px;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;

    a {
        color: #3663AC;
        text-decoration: none;
        margin-bottom: 8px;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20%;

    select {
        background: white;
        border: 1px solid #3663AC;
        padding: 5px;
        margin-bottom: 10px;
        color: #3663AC;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const Contribution = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }

    p {
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
`;
