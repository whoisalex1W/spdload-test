import styled from "styled-components";

import { CardPropsTypes } from "./Card";

export const CardStyles = {
    SCard: styled.div<CardPropsTypes>`
        height: 572px;
        width: 411px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: flex-start;

        border: 1px solid #d3eaff;
    `,
};

export const CardBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TopText = styled.div`
    font-family: ${(props) => props.theme.fonts.secondary};
    text-transform: uppercase;
    padding-top: 28px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const BottomText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.color.gray};
    padding-top: 16px;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    max-width: 80%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Buttons = styled.div`
    padding-top: 64px;
    display: flex;
    flex-direction: row;
    gap: 16px;
`;
