import { GetStaticPropsContext } from 'next'
import { LogoGithub, LogoLinkedin, LogoTwitter } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <>
      <h1 className='text-5xl font-mono text-accent font-medium'>Jorge Barrón</h1>
      <p className='mt-4 text-xl font-light'>
        {t('description1')} <br />
        {t('description2')}
      </p>

      <div className='flex items-center pt-2 gap-2'>
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
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  }
}
