/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay, Navigation, Virtual } from 'swiper';
import { BannerItem } from '../BannerItem';
import { Button } from '../Button';

type Props = {
    onClick: (key: string) => void;
    fill?: boolean;
}

export const Banner = ({ onClick, fill }: Props) => {

    const [width, setWidth] = useState(1920);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    useEffect(() => {

        function handleResize() {
            // Set window width/height to state
            setWidth(window.innerWidth);
            console.log(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [data, setData] = useState([
        {
            image: 'images/Image3.png',
            peoples: ['images/09.png', 'images/10.png', 'images/11.png', 'images/12.png'],
            description: 'Tristique diam a, enim, eros tellus. Viverra etiam',
            price: 1.55,
            timeLeft: '57:15 min left',
            bidding: 14,
            likes: 54,
            isLiked: true,
        },
        {
            image: 'images/Image1.png',
            peoples: ['images/05.png', 'images/06.png', 'images/07.png', 'images/08.png'],
            description: 'Vulputate felis purus viverra morbi facilisi eget',
            price: 3.19,
            timeLeft: '2:41 min left',
            bidding: 35,
            likes: 120,
            isLiked: false,
        },
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
            image: 'images/Image2.png',
            peoples: ['images/13.png', 'images/14.png', 'images/15.png'],
            description: 'Senectus adipiscing nascetur accumsan etiam',
            price: 1.63,
            timeLeft: '37:01 min left',
            bidding: 12,
            likes: 98,
            isLiked: true,
        },
        {
            image: 'images/Image4.png',
            peoples: ['images/16.png', 'images/17.png', 'images/18.png', 'images/19.png'],
            description: 'Mattis at diam lorem nisl nam sed sociis',
            price: 3.19,
            timeLeft: '12:15 min left',
            bidding: 19,
            likes: 120,
            isLiked: true,
        }
    ]);

    return (
        <div className={styles.container}>
            <Swiper className={styles.swiper}
                spaceBetween={24}
                slidesPerView={width > 1024 ? 5 : width > 768 ? 4 : 3}
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
            /* autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}*/
            loop={true} 
            >
                {data.map((item, index) => (
                    <SwiperSlide onClick={() => onClick("index =")} key={index} >
                        <Link href=''>
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
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.navigation}>
                <div ref={navigationPrevRef} className={styles.nextButton}>
                    <img src="images/ArrowLeft.png" alt="ArrowLeft" />
                </div>
                <div ref={navigationNextRef} className={styles.previousButton}>
                    <img src="images/ArrowRight.png" alt="ArrowRight" />
                </div>
            </div>
        </div >
    )
}