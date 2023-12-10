import styled from "styled-components";

export const ToursBlock = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 43px;
`;

export const ToursTop = styled.div`
    width: 1280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;
