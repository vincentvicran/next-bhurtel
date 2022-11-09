import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'

import {store} from 'store'
import {GlobalStyle} from 'theme'

import 'setUpTests'
import 'react-loading-skeleton/dist/skeleton.css'
import {Header} from 'components/header'
import {Footer} from 'components/footer'
import {Toast, useToast} from 'common/toast'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  const {toast, handler} = useToast()
  return (
    <>
      <Head>
        <title>
          Queens Personal Injury Lawyer for Vehicle Accidents, Medical
          Malpractice &amp; Product Liability in New York City
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <Header image="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" />
        <Component {...pageProps} toast={toast} />
        <Footer image="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png"></Footer>
        <Toast {...handler} />
      </Provider>
    </>
  )
}

export default MyApp
