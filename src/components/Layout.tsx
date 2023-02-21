import MainHeader from './MainHeader/MainHeader'
import styles from '@/styles/Page.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <main className={`${styles.main} container mx-auto p-6`}>{children}</main>
    </>
  )
}
