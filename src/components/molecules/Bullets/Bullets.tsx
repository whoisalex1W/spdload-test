import { BulletIcon } from "src/components/icons/Bullet.icon";

import { BulletsStyles as Styled } from "./Bullets.style";
const { SBullets } = Styled;

type BulletHandler = (number: number) => void;

export type BulletsPropsTypes = {
    /** - `primary` Default button
     *  - `icon` Icon button
     */
    currentBullet: number;
    numberBullets: number;
    setCurrentBullet: BulletHandler;
    color: string;
};

export type BulletsProps = BulletsPropsTypes & JSX.IntrinsicElements["div"];

export const Bullets = ({
    currentBullet,
    numberBullets,
    setCurrentBullet,
    color,
    children,
    ...props
}: BulletsProps) => {
    const bullets = Array.from({ length: numberBullets }, (_, index) => (
        <BulletIcon
            key={index}
            onClick={() => setCurrentBullet(index)}
            isActive={index === currentBullet}
            color={color}
        />
    ));

    return (
        <SBullets
            currentBullet={currentBullet}
            numberBullets={numberBullets}
            setCurrentBullet={setCurrentBullet}
            color={color}
            {...props}
        >
            {bullets}
            {children}
        </SBullets>
    );
};
