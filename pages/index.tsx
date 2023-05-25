import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Vercel Trick By <a href="https://miniechatz.com/">SEYIFUNNY</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://miniechatz.com/" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Here you can find how to earn money from Adsterra .</p>
          </a>

          <a href="https://miniechatz.com/" className={styles.card}>
            <h2>Master In AdSense Approval &rarr;</h2>
            <p>Here you can find the of how you become master in AdSense approval!</p>
          </a>

          <a
            href="https://miniechatz.com/"
            className={styles.card}
          >
            <h2>Blogging &rarr;</h2>
            <p>Here you can find the source to become master in blogging</p>
          </a>

          <a
            href="https://newstick.us"
            className={styles.card}
          >
            <h2>News &rarr;</h2>
            <p>
              Here you can find showviz news and other national and internation news
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
