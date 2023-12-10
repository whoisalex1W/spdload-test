import { atom } from "recoil";

export interface Rocket {
    id?: number;
    description?: string;
    name?: string;
    img?: string;
    isLiked?: boolean;
}

export const rocketsDataState = atom<Rocket[]>({
    key: "rocketsDataState",
    default: [],
});

export const favoriteRocketsDataState = atom<Rocket[]>({
    key: "favoriteRocketsDataState",
    default: JSON.parse(localStorage?.getItem("favorites") as string) || [],
});
