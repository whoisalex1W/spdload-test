import { useRef, useState } from "react";
import Arrow from "src/assets/Arrow - DownArrow.svg";
import Space1 from "src/assets/Slider/Space1.png";
import Space2 from "src/assets/Slider/Space2.png";
import Space3 from "src/assets/Slider/Space3.png";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Bullets } from "../../molecules/Bullets/Bullets";
import {
    Block,
    BottomText,
    BulletsBlock,
    Explore,
    ExploreOuter,
    Img,
    SpaceOuter,
    TopText,
} from "./Space.style";

export const Space = () => {
    const sliderRef = useRef(null);
    const [currentBullet, setCurrentBullet] = useState(0);

    const handleNumber = (number: number) => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideTo(number, 1000);
        setCurrentBullet(number);
    };

    return (
        <>
            {" "}
            <Block>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    ref={sliderRef}
                >
                    <SwiperSlide>
                        <Img src={Space1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img src={Space2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img src={Space3} />
                    </SwiperSlide>
                </Swiper>
            </Block>
            <SpaceOuter>
                <TopText>the space is waiting for</TopText>
                <BottomText>you</BottomText>
                <BulletsBlock>
                    <Bullets
                        currentBullet={currentBullet}
                        numberBullets={3}
                        setCurrentBullet={handleNumber}
                        color={"white"}
                    />
                </BulletsBlock>
                <ExploreOuter>
                    <Explore href="#tours">Explore tours</Explore>
                    <img src={Arrow} />
                </ExploreOuter>
            </SpaceOuter>
        </>
    );
};
