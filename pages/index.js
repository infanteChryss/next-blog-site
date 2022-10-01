import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>My Blog Site</title>
      </Head>
      <section className={styles.hero_banner}>
        <h1 className={styles.banner_title}>
            Welcome to my site.
        </h1>
      </section>
    </div>
  )
}
