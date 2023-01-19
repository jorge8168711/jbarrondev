import styles from './page.module.css'
import { LogoTwitter, LogoLinkedin, LogoGithub } from '@carbon/icons-react'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <h1 className='text-5xl font-mono text-accent font-medium'>Jorge Barrón</h1>

      <p className='mt-4 text-xl font-light'>
        Hi, thanks for being here 👋. <br />
        I&apos;m working hard on the content of my website 👨🏽‍💻, I hope to surprise you when you come back 🥹.
      </p>

      <div className='flex align-center pt-2 gap-2'>
        <a
          className='text-primary'
          href='https://twitter.com/_JorgeBarron'
          target='__blank'
          rel='nofollow noreferrer noopener'>
          <LogoTwitter size={24} />
        </a>

        <a
          className='text-primary'
          href='https://www.linkedin.com/in/jorgebarrondev/'
          target='__blank'
          rel='nofollow noreferrer noopener'>
          <LogoLinkedin size={24} />
        </a>

        <a
          className='text-primary'
          href='https://github.com/jorge8168711'
          target='__blank'
          rel='nofollow noreferrer noopener'>
          <LogoGithub size={24} />
        </a>
      </div>
    </main>
  )
}
