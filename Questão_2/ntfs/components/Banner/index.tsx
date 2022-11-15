/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay } from 'swiper';
import { BannerItem } from '../BannerItem';


type Props = {
    onClick: (key: string) => void;
    fill?: boolean;
}

export const Banner = ({ onClick, fill }: Props) => {

    const [data, setData] = useState([
        {
            image: 'images/Image.png',
            peoples: ['images/01.png', 'images/02.png', 'images/03.png', 'images/04.png'],
            description: 'Dui accumsan leo vestibulum ornare eu',
            price: 1.11,
            timeLeft: '22:59 min left',
            bidding: 101,
            likes: 570,
            isLiked: true,
        },
        {
            image: 'images/Image1.png',
            peoples: ['images/05.png', 'images/06.png', 'images/07.png', 'images/08.png'],
            description: 'Vulputate felis purus viverra morbi facilisi eget',
            price: 3.19,
            timeLeft: '2:41 min left',
            bidding: 33,
            likes: 120,
            isLiked: false,
        }
    ]);

    return (
        <div className={styles.container}>
            <Swiper className={styles.swiper}
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
            >
                {data.map((item, index) => (
                    <SwiperSlide onClick={() => onClick("index =")} key={index}>

                        <BannerItem
                            image={item.image}
                            people={item.peoples}
                            description={item.description}
                            price={item.price}
                            timeLeft={item.timeLeft}
                            bidding={item.bidding}
                            likes={item.likes}
                            isLiked={item.isLiked}
                            onClick={() => onClick("1")}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}