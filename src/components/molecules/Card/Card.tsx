export type Variants = "primary" | "icon";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { favoriteRocketsDataState } from "../../../recoil";
import { Rocket } from "../../../recoil/atom";
import { Button } from "../../atoms/Button/Button";
import { FavorotesIcon } from "../../icons";
import { DeleteIcon } from "../../icons/Delete.icon";
import {
    BottomText,
    Buttons,
    CardBlock,
    CardStyles as Styled,
    TopText,
} from "./Card.style";
const { SCard } = Styled;

export type CardPropsTypes = {
    /** - `img` Card img
     *  - `head` Main text of card
     *  - `text` Description of card
     *  - `idCard` Id of the card
     *  - `isLiked` Used for catching liked or unliked state
     */
    img?: string;
    head?: string;
    text?: string;
    idCard?: number;
    isLiked?: boolean;
};

export type CardProps = CardPropsTypes & JSX.IntrinsicElements["div"];

export const Card = ({
    idCard,
    img,
    head,
    text,
    isLiked = false,
    children,
    ...props
}: CardProps) => {
    const [liked, setLiked] = useState(isLiked);
    const [favorites, setFavorites] = useRecoilState<Rocket[]>(
        favoriteRocketsDataState
    );

    const handleAddFavorites = () => {
        setFavorites((prev) => {
            if (!favorites.find((el) => el.id === idCard)) {
                return [
                    ...prev,
                    {
                        id: idCard,
                        description: text,
                        name: head,
                        img: img,
                        isLiked: liked,
                    },
                ];
            } else {
                return [...prev];
            }
        });
    };

    const handleDelete = () => {
        if (liked) {
            if (favorites.length === 1) {
                setFavorites([]);
                localStorage.setItem("favorites", JSON.stringify([]));
            } else {
                setFavorites((prev) => {
                    return prev.filter((el) => el.id !== idCard);
                });
            }
        }

        setLiked(!liked);
    };

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites, setFavorites]);

    return (
        <SCard {...props} idCard={idCard} img={img} head={head} text={text}>
            <CardBlock>
                <img src={img} width="100%" />
                <TopText>{head}</TopText>
                <BottomText>{text}</BottomText>
                <Buttons>
                    <Button variant="primary" width={278}>
                        BUY
                    </Button>
                    <Button variant="icon" onClick={handleDelete}>
                        {liked ? (
                            <DeleteIcon />
                        ) : (
                            <FavorotesIcon onClick={handleAddFavorites} />
                        )}
                    </Button>
                </Buttons>
                {children}
            </CardBlock>
        </SCard>
    );
};
