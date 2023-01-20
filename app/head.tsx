import Script from 'next/script'

export default function Head() {
  return (
    <>
      <title>Jorge Barrón</title>
      <meta
        content='width=device-width, initial-scale=1'
        name='viewport'
      />
      <meta
        name='description'
        content='Jorge Barrón'
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />

      <Script
        id='getTheme
      '>{`document.documentElement.dataset.theme = JSON.parse(window.localStorage.getItem('theme') || "")`}</Script>
    </>
  )
}
