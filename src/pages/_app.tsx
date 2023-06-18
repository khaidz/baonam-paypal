import React, { FC } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@/utils'
import { MUIProvider } from '@/providers'
import 'slick-carousel/slick/slick.css'
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import { NextPageWithLayout } from '@/interfaces/layout'
// import 'slick-carousel/slick/slick-theme.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Dịch vụ mua bán Paypal uy tín số 1 tại Việt Nam</title>
        <meta
          name="description"
          content="Chuyên mua bán tiền $ Paypal VN rate tốt nhất, giao dịch online 24/24. Thu mua paypal số lượng lớn uy tín, không lừa đảo.."
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dịch Vụ Mua Bán Paypal Uy Tín Số #1 Việt Nam Tỉ Giá Tốt" />
        <meta
          property="og:description"
          content="Chuyên mua bán tiền $ Paypal VN rate tốt nhất, giao dịch online 24/24. Thu mua paypal số lượng lớn uy tín, không lừa đảo.."
        />
        <meta property="og:url" content="http://muabandola.com/" />
        <meta property="og:site_name" content="Mua bán Paypal online uy tín nhất tại MuaBanDoLa.Com" />
        <meta name="google-site-verification" content="1FaNhAHGkpXTULP_5kKfD51aRsGA-9R75V92I5mdtzs" />
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </CacheProvider>
  )
}

export default App
