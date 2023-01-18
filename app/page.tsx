import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold">
        Jorge Barrón
      </h1>
      <p>I'm working on it!</p>
    </main>
  )
}
