import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import LeftArrow from "src/assets/ArrowLeft.svg";
import RightArrow from "src/assets/ArrowRight.svg";
import Card1 from "src/assets/Cards/Card1.png";
import Card2 from "src/assets/Cards/Card2.png";
import Card3 from "src/assets/Cards/Card3.png";
import { GET_ROCKETS } from "src/graphql/queries";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "../../../App.style";
import {
    favoriteRocketsDataState,
    Rocket,
    rocketsDataState,
} from "../../../recoil/atom";
import { Button } from "../../atoms/Button/Button";
import { Bullets } from "../../molecules/Bullets/Bullets";
import { Card } from "../../molecules/Card/Card";
import { Buttons, Cards, ToursBlock, ToursTop } from "./Tours.style";

export const Tours = () => {
    const [rockets, setRockets] = useRecoilState<Rocket[]>(rocketsDataState);
    const [favorites] = useRecoilState<Rocket[]>(favoriteRocketsDataState);
    const [currentBullet, setCurrentBullet] = useState(0);
    const sliderRef = useRef(null);
    const images = [Card1, Card2, Card3];

    const { loading, error, data } = useQuery(GET_ROCKETS);

    useEffect(() => {
        if (!loading && !error) {
            setRockets(data?.rockets || []);
        }
    }, [loading, error, data, setRockets]);

    const handlePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
        setCurrentBullet(
            currentBullet > 0 ? (prev) => prev - 1 : rockets.length - 1
        );
    };

    const handleNext = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
        setCurrentBullet(
            currentBullet < rockets.length - 1 ? (prev) => prev + 1 : 0
        );
    };

    const handleNumber = (number: number) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideTo(number, 1000);
        setCurrentBullet(number);
    };

    function getImageForIndex(index: number) {
        return images[index < 3 ? index : (index - 3) % 4];
    }

    return (
        <Container id="tours">
            <ToursBlock>
                <ToursTop>
                    <div>popular tours</div>
                    <Buttons>
                        <Button
                            variant="icon"
                            height={43}
                            width={43}
                            onClick={handlePrev}
                        >
                            <img src={LeftArrow} />
                        </Button>
                        <Button
                            variant="icon"
                            height={43}
                            width={43}
                            onClick={handleNext}
                        >
                            <img src={RightArrow} />
                        </Button>
                    </Buttons>
                </ToursTop>
                <Cards>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        onSlideChange={(swiper) => {
                            if (isNaN(swiper.activeIndex)) {
                                swiper.activeIndex = 0;
                            }
                        }}
                        ref={sliderRef}
                    >
                        {loading ? (
                            <div>Loading</div>
                        ) : (
                            rockets?.map((el, index) => (
                                <SwiperSlide key={el.id}>
                                    <Card
                                        idCard={el.id}
                                        head={el.name}
                                        text={el.description}
                                        img={getImageForIndex(index)}
                                        isLiked={Boolean(
                                            favorites.find((fav) => {
                                                return fav.id === el.id;
                                            })
                                        )}
                                    />
                                </SwiperSlide>
                            ))
                        )}
                    </Swiper>
                </Cards>
                <Bullets
                    currentBullet={currentBullet}
                    numberBullets={rockets.length}
                    setCurrentBullet={handleNumber}
                    color={"black"}
                />
            </ToursBlock>
        </Container>
    );
};
