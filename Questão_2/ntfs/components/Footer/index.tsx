/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Button } from '../Button'
import { Newsletter } from '../Newsletter'
import styles from './styles.module.css'

type Props = {

}

export const Footer = ({ }: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLeftIcon}>
                    <img src="/images/Logo.png" alt="Logo" />
                </div>
                <div className={styles.containerLeftLinks}>
                    <Link legacyBehavior href="/"><a>Support</a></Link>
                    <Link legacyBehavior href="/"><a>Term of service</a></Link>
                    <Link legacyBehavior href="/"><a>License</a></Link>
                </div>
            </div>
            <div className={styles.containerCenter}>
                <div className={styles.footerMenu}>
                    <Link href="/" legacyBehavior><a>Auctions</a></Link>
                    <Link href="/" legacyBehavior><a>Roadmap</a></Link>
                    <Link href="/" legacyBehavior><a>Discover</a></Link>
                    <Link href="/" legacyBehavior><a>Community</a></Link>
                </div>
                <div className={styles.containerCenterButton}>
                    <Button
                        label="My account"
                        onClick={() => { }}
                        fill
                    />
                </div>
                <div className={styles.social}>
                    <Link href="/" legacyBehavior><a><img src="/images/Vector.png" alt="Facebook" /></a></Link>
                    <Link href="/" legacyBehavior><a><img src="/images/LinkedIn Icon.png" alt="LinkedIn" /></a></Link>
                    <Link href="/" legacyBehavior><a><img src="/images/Github Icon.png" alt="Github" /></a></Link>
                    <Link href="/" legacyBehavior><a><img src="/images/Twitter Icon.png" alt="Twitter" /></a></Link>
                    <Link href="/" legacyBehavior><a><img src="/images/Instagram Icon.png" alt="Instagram" /></a></Link>
                </div>
            </div>
            <div className={styles.containerRight}>
                <p className={styles.p}>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                <div className={styles.containerRightNewsletter}>
                    <Newsletter
                        label="Sign in"
                        color="#262840"
                        onClick={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}