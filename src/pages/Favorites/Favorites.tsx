import { useRecoilState } from "recoil";
import { Container } from "src/App.style";
import { Card } from "src/components/molecules/Card/Card";

import { favoriteRocketsDataState, Rocket } from "../../recoil";
import {
    Clear,
    FavoritesBlock,
    Liked,
    Rockets,
    Space,
} from "./Favorites.style";

export const Favorites = () => {
    const [rockets, setRockets] = useRecoilState<Rocket[]>(
        favoriteRocketsDataState
    );

    const handleClearAll = () => {
        setRockets([]);
        localStorage.removeItem("favorites");
    };

    return (
        <FavoritesBlock>
            <Space>favorites</Space>
            <Container>
                <Liked>
                    <Clear onClick={handleClearAll}>Clear all</Clear>
                    <Rockets>
                        {rockets.map((el) => {
                            return (
                                <Card
                                    key={el.id}
                                    img={el.img}
                                    idCard={el.id}
                                    head={el.name}
                                    text={el.description}
                                    isLiked={true}
                                ></Card>
                            );
                        })}
                    </Rockets>
                </Liked>
            </Container>
        </FavoritesBlock>
    );
};
