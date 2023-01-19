import '../public/fonts/inter.css'
import 'styles/globals.css'
import '../styles/progressbar.css'
import Router from 'next/router'
import Head from 'next/head'
import nprogress from 'nprogress'
import { SessionProvider } from 'next-auth/react'

Router.events.on('routeChangeStart', nprogress.start)
Router.events.on('routeChangeError', nprogress.done)
Router.events.on('routeChangeComplete', nprogress.done)

function MyApp({ Component, pageProps, session }) {

  return (
    <SessionProvider session={session}>
    <div>
    <Head>
      <title>Reportex</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <script src='https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js'></script>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.css' rel='stylesheet' />
    </Head>
    <Component {...pageProps} />
    </div>
    </SessionProvider>
  )
}

export default MyApp
