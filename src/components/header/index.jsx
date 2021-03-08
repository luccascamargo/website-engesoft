import React from 'react'
import Link from 'next/link'

import { Container } from './styles'
import LogoEngesoft from '../../assets/engesoft.svg'

export default function header() {
  return (
    <>
      <Container>
        <div className="owner">
          <Link href="#">
            <a>
              <LogoEngesoft width="150" alt="Engesoft" />
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
