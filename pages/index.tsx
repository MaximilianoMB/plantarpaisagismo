import Head from 'next/head'
import Contato from '../components/contato'
import Cover from '../components/cover'
import Footer from '../components/footer'
import Portfolio from '../components/portfolio'
import Services from '../components/services'
import Sobre from '../components/sobre'
import Time from '../components/time'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Plantar Paisagismo</title>
        <meta name="description" content="Site Plantar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <Sobre />
      <Services />
      <Portfolio />
      <Time />
      <Contato />

    
    </div>
  )
}