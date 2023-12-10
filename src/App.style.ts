import styled from "styled-components";

export const Header = styled.header`
    background: rgba(30, 30, 30, 0.48);
    min-height: 80px;
`;

export const Container = styled.div`
    max-width: 1280px;
    padding: 0 10px;
    margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 32px;
    padding: 0;
`;

export const ListItem = styled.li`
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.fontSizes.small};
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    padding-bottom: 4px;
    position: relative;

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.color.white};
        transform: scaleX(0);
        transform-origin: bottom left;
        transition: transform 0.2s ease-in-out;
    }
`;

export const SignIn = styled.div`
    display: flex;
    gap: 12px;
`;
