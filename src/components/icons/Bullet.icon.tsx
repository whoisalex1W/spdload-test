import { SVGProps } from "react";

type BulletIconProps = {
    isActive?: boolean;
    color?: string;
};

type BulletProps = BulletIconProps & SVGProps<SVGSVGElement>;

export const BulletIcon = ({
    isActive = false,
    color = "black",
    ...props
}: BulletProps) => {
    return (
        <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {isActive ? <circle cx="12.5" cy="12" r="6" fill={color} /> : ""}
            <circle cx="12.5" cy="12" r="11.5" stroke={color} />
        </svg>
    );
};
