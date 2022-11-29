import '../styles/globals.css'
import Navigation from '../components/navigation'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Navigation />
    <Component {...pageProps} />
  </>
  )
}
