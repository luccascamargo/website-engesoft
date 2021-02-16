import React from 'react'
import Link from 'next/link'

import { Container } from './styles'
import LogoVercel from '../../assets/vercel.svg'

export default function header() {
  return (
    <>
      <>
        <Container>
          <div>
            <Link href="#">
              <a>
                <LogoVercel width="150" alt="Vercel" />
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
    </>
  )
}
