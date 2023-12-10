import styled from "styled-components";

import { BulletsPropsTypes } from "./Bullets";

export const BulletsStyles = {
    SBullets: styled.div<BulletsPropsTypes>`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    `,
};
