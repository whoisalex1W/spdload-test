import { Tours } from "src/components/organisms/Tours/Tours";

import { Space } from "../../components/organisms/Space/Space";
import { HomeBlock } from "./Home.style";

export const Home = () => {
    return (
        <HomeBlock>
            <Space></Space>
            <Tours></Tours>
        </HomeBlock>
    );
};
