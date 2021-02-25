import React from 'react'
import Link from 'next/link'

import { Container } from './styles'
import LogoVercel from '../../assets/vercelWhite.svg'
import Img from '../../assets/wallp2.jpg'

export default function header() {
  return (
    <>
      <>
        <Container
          style={{
            background: `url(${Img}) no-repeat center fixed`
          }}
        >
          <div className="owner">
            <Link href="#">
              <a>
                <LogoVercel className="logo-vercel" alt="Vercel" />
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
