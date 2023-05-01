import { Biographysection } from '@batu/components/Biographysection'
import { DiscographySection } from '@batu/components/DiscographySection'
import { Footer } from '@batu/components/Footer'
import { HomeSection } from '@batu/components/HomeSection'
import NavBar from '@batu/components/NavBar'
import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Batu</title>
        <meta name="description" content="Batu band" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <HomeSection />
        <DiscographySection />
        <Biographysection />
        <Footer />
      </main>
    </>
  )
}
