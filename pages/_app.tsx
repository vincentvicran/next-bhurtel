import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'

import {store} from 'store'
import {GlobalStyle} from 'theme'

import 'setUpTests'
import 'react-loading-skeleton/dist/skeleton.css'
import {Header} from 'components/header'
import {Footer} from 'components/footer'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header image="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" />
      <Component {...pageProps} />
      <Footer image="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png"></Footer>
    </Provider>
  )
}

export default MyApp
