import styled from "styled-components";

import Slider from "../../../assets/Slider/Space1.png";

export const SpaceOuter = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 740px;
    /* background: url(${Slider}) lightgray 50% / cover no-repeat; */

    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    color: ${(props) => props.theme.color.white};
    font-family: "Syne", sans-serif;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
`;

export const Block = styled.div`
    position: absolute;
    color: black;
    z-index: -1;
    width: 100%;
`;

export const Img = styled.img`
    width: 100%;
    max-height: 780px;
`;

export const TopText = styled.div`
    padding-left: 75px;
    font-size: 48px;
    margin-bottom: -45px;
`;

export const BottomText = styled.div`
    padding-left: 75px;

    font-size: 310px;
`;

export const BulletsBlock = styled.div`
    font-size: 48px;
    position: absolute;
`;

export const ExploreOuter = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
`;

export const Explore = styled.a`
    all: unset;
    font-family: "Lato", sans-serif;
    text-transform: none;
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    cursor: pointer;
`;
