/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'
import 'swiper/css'
import Link from 'next/link';
import { Button } from '../Button';


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
                    <img src="images/Logo.png" alt="logo" />
                </div>
                <div className={styles.topBarMenu}>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Auctions</a></Link>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Roadmap</a></Link>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Discover</a></Link>
                    <Link href="/" legacyBehavior><a className={styles.topBarMenuLink}>Community</a></Link>
                </div>
                <div className={styles.topBarButtonRight}>
                    <Button
                        label="Contact"
                        color="#7780A1"
                        onClick={() => { }}
                    />
                    <Button
                        label="My account"
                        onClick={() => { }}
                        marginLeft={18}
                        fill
                    />
                </div>
            </div>
            {/* ok */}
            <div className={styles.text}>
                <div className={styles.textTitleBefore}>Non Fungible Tokens</div>
                <div className={styles.frame}>
                    <div className={styles.frameTop}>
                        <div className={styles.frameTopText}>A new NFT</div>
                        <div className={styles.frameTopIcon}>
                            <img src="images/Frame.png" alt="logo" />
                        </div>
                    </div>
                    <div className={styles.frameBottom}>
                        <div className={styles.frameBottomIcon}>
                            <img src="images/Frame_L.png" alt="logo" />
                        </div>
                        <div className={styles.frameBottomText}>Experience</div>
                    </div>
                </div>
                <div className={styles.textTitleAfter}>Discover, collect and sell</div>
            </div>
            <div className={styles.squares}>
                <img src="images/Squares.png" alt="logo" />
            </div>
            <div className={styles.logotypes}>
                <img src="images/Ritter Sport.png" alt="logo" />
                <img src="images/Nike.png" alt="logo" />
                <img src="images/Adidas.png" alt="logo" />
                <img src="images/New Holland.png" alt="logo" />
            </div>
        </div>
    )
}