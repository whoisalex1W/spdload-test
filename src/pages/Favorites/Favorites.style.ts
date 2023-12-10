import styled from "styled-components";

import SpaceFavorites from "../../assets/FavoritesSpace.png";

export const FavoritesBlock = styled.div``;

export const Space = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 440px;
    background: url(${SpaceFavorites}) lightgray 50% / cover no-repeat;

    background-position: top;

    color: ${(props) => props.theme.color.white};
    font-family: "Syne", sans-serif;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
`;

export const Liked = styled.div`
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const Clear = styled.div`
    text-align: end;
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.color.gray};
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const Rockets = styled.div`
    display: flex;
    flex-direction: row;
    gap: 48px;
`;
