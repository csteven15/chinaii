import { AppProps } from 'next/app'
import Head from 'next/head'

import Navigation from './../components/navigation'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css" rel="stylesheet" integrity="sha384-pLgJ8jZ4aoPja/9zBSujjzs7QbkTKvKw1+zfKuumQF9U+TH3xv09UUsRI52fS+A6" crossOrigin="anonymous" />
      </Head>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  )
}

export default App
