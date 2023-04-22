import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";


<Head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</Head>

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
