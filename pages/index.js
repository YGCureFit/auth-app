import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href={'/login'}>SignIn <br /></Link>
        <Link href={'/image'}>You can only look at this image if signed in <br /></Link>
      </main>
    </div>
  )
}
