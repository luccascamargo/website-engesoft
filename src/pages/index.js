import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/header'
import Main from '../components/main'
import Section from '../components/section'
import Footer from '../components/footer'
import Aside from '../components/aside'

export default function Home() {
  return (
    <>
      <Container>
        <Head>
          <title>Engesoft | Desenvolvimento de Sistemas</title>
        </Head>

        <Header />
        <Main />
        <Aside />
        <Section />
        <Footer />
      </Container>
    </>
  )
}
