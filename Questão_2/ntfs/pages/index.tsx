import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Section } from '../components/Section'
import { SectionWithIcon } from '../components/SectionWithIcon'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NTFs | L2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.4" />
      </Head>

      <Header
        label="NTFs"
        color="#000"
        onClick={() => { }}
        fill={true}
      />
      <div className={styles.latestAuctions}>
        <h4>Latest live auctions</h4>
        <div className={styles.itens}>
          <Banner
            onClick={() => { }}
          />
        </div>
      </div>
      <Section />
      <div className={styles.line} />
      <div className={styles.containerSectionWithIcon}>
        <SectionWithIcon
          onClick={() => { }}
          icon="/images/User Icon.png"
          count="300k"
          label="Users Active"
        />
        <SectionWithIcon
          onClick={() => { }}
          icon="/images/Artworks Icon.png"
          count="52,5K"
          label="Artworks"
        />
        <SectionWithIcon
          onClick={() => { }}
          icon="/images/Artists Icon.png"
          count="17,5k"
          label="Artists"
        />
        <SectionWithIcon
          onClick={() => { }}
          icon="/images/Wallet Icon.png"
          count="35.58"
          label="ETH Spent"
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
