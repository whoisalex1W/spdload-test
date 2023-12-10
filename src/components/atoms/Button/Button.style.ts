import styled from "styled-components";

import { ButtonPropsTypes } from "./Button";

export const ButtonStyles = {
    SButton: styled.button<ButtonPropsTypes>`
        color: ${(props) => props.theme.color.black};
        font-family: ${(props) => props.theme.fonts.secondary};
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;

        align-items: center;
        justify-content: center;
        border-width: 1px;
        height: 53px;

        ${({ variant, width, height, isActive }) => {
            if (variant === "icon") {
                return {
                    transition: "all .2s ease-in-out",
                    backgroundColor: isActive ? "#DD377D" : "#ECECEC",
                    width: width ? width : "53px",
                    height: height ? height : "53px",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    "&:hover": {
                        backgroundColor: "#DD377D",
                    },
                };
            }

            if (variant === "primary") {
                return {
                    transition: "all .2s ease-in-out",

                    backgroundColor: "#D3EAFF",
                    border: "none",
                    padding: "12px 0",
                    width: `${width}px`,
                    "&:hover": {
                        backgroundColor: "#3282ab",
                    },
                };
            }
        }};
    `,
};
