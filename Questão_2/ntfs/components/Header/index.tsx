/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import 'swiper/css'
import Link from 'next/link';


type Props = {
    label: string;
    color?: string;
    onClick: (key: string) => void;
    fill?: boolean;
}

export const Header = ({ label, color, onClick, fill }: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div className={styles.topBarLogo}>
                    <img src="images/Sygnet.png" alt="logo" />
                    <img src="images/NFT Market.png" alt="logo" />
                </div>
                <div className={styles.topBarMenu}>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Auctions</a></Link>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Roadmap</a></Link>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Discover</a></Link>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Community</a></Link>

                </div>
                <div className={styles.topBarButtonRight}></div>
            </div>
        </div>
    )
}