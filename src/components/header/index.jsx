import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from './styles'

export default function header() {
  return (
    <>
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
          <Link href="/contato">
            <a id="button-header">Contate-nos</a>
          </Link>
        </div>

        <h1>
          <span>Sistemas de Gestão para sua empresa</span>
          <p>Um passo a frente para o seu negocio evoluir</p>
        </h1>
        <div className="mouse"></div>
      </Container>
    </>
  )
}
