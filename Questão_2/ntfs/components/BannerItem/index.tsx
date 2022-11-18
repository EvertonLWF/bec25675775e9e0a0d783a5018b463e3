/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.css';

type Props = {
    image: string;
    people: string[];
    description: string;
    price: number;
    timeLeft: string;
    bidding: number;
    likes: number;
    isLiked: boolean;
    onClick: (key: string) => void;
}

export const BannerItem = ({
    image,
    people,
    description,
    price,
    timeLeft,
    bidding,
    likes,
    isLiked }: Props) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="ntf1" />
            <div className={styles.info}>
                <div className={styles.infoTop}>
                    <h6 className={styles.infoTopH6}>
                        {description}
                    </h6>
                    <div className={styles.price}>
                        <h6>{price} ETH</h6>
                    </div>
                </div>
                <div className={styles.infoBottom}>
                    <div className={styles.infoBottomIcon}>
                        <img src="images/Timer Icon.png" alt="icon" />
                    </div>
                    <div className={styles.infoBottomTimeLeft}>{timeLeft}</div>
                </div>
                <div className={styles.line} />
            </div>
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    {people.map((item, index) => (
                        <img src={item} alt="icon" key={index} style={{
                            zIndex: index,
                            marginLeft: index > 0 ? '-0.45vw' : 0,
                        }}/>
                    ))}
                </div>
                <div className={styles.footerCenter}>{bidding} people are bidding</div>
                <div className={styles.footerRight}>
                    {isLiked ? (
                        <img src="images/Heart Icon.png" alt="icon" />
                    ) : (
                        <img src="images/Heart Icon2.png" alt="icon" />
                    )}
                    
                    <div className={styles.footerRightText}>{likes}</div>
                </div>
            </div>

        </div>
    );
};

