import React from 'react'

import { Container } from './styles'

import LogoVercel from '../../assets/vercel.svg'

export default function Section() {
  return (
    <Container>
      <div className="container">
        <div className="text">
          <h2>
            <span>Quem utiliza, recomenda !!!</span>
            <p>Seja um de nossos clientes</p>
          </h2>
        </div>

        <div className="clients">
          <ul>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
          </ul>
          <ul>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
            <li>
              <LogoVercel width="150" alt="Vercel" />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
