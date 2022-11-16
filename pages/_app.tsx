import {Provider} from 'react-redux'
import Head from 'next/head'
import type {AppProps} from 'next/app'

import 'setUpTests'
import 'react-loading-skeleton/dist/skeleton.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {Toast, useToast} from 'common/toast'
import {Header} from 'components/header'
import {Footer} from 'components/footer'

import {usePageLoading} from 'hooks'
import {store} from 'store'
import {GlobalStyle} from 'theme'
import {SkeletonLoader} from 'components/skeletonLoader'

function MyApp({Component, pageProps}: AppProps) {
  const {toast, handler} = useToast()
  const {isPageLoading} = usePageLoading()

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
        <Header />
        {isPageLoading ? (
          <SkeletonLoader />
        ) : (
          <Component {...pageProps} toast={toast} />
        )}
        <Footer />
        <Toast {...handler} />
      </Provider>
    </>
  )
}

export default MyApp
