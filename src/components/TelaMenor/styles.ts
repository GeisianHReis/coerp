
import styled from "styled-components";

export const MenuMobile = styled.div`
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 650px) {
        display: none;
    }
`;