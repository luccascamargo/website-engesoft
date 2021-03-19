import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '../styles/pages/gestao'

export default function gestao() {
  return (
    <>
      <Head>
        <title>Sistema para Clubes - Engesoft</title>
      </Head>
      <Container>
        <div className="owner">
          <Link href="#">
            <a id="logo">
              <Image
                src="/engesoft.png"
                width="150"
                height="50"
                alt="Engesoft"
              />
            </a>
          </Link>
          <Link href="/">
            <a id="button-header">Voltar para a home</a>
          </Link>
        </div>
      </Container>
    </>
  )
}
