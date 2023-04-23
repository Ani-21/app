import Link from 'next/link'
import styles from './page.module.css'

const Home = () => (
  <main className={styles.main}>
    <h1>Home</h1>
    <Link href="/posts">Go to Posts</Link>
    <Link href="/users">Go to Users</Link>
  </main>
)

export default Home
