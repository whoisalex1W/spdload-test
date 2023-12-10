export type Variants = "primary" | "icon";
import { ButtonStyles as Styled } from "./Button.style";
const { SButton } = Styled;

export type ButtonPropsTypes = {
    /** - `primary` Default button
     *  - `icon` Icon button
     */
    variant?: Variants;
    width?: number;
    height?: number;
    isActive?: boolean;
};

export type ButtonProps = ButtonPropsTypes & JSX.IntrinsicElements["button"];

export const Button = ({
    variant = "primary",
    width,
    height,
    children,
    isActive = false,
    ...props
}: ButtonProps) => {
    return (
        <SButton
            {...props}
            variant={variant}
            width={width}
            height={height}
            isActive={isActive}
        >
            {children}
        </SButton>
    );
};
