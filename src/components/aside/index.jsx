import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

import FinancialLogo from '../../assets/svg/013-financial.svg'

export default function Aside() {
  return (
    <Container>
      <main>
        <h2>Conheça apenas algumas de nossas funcionalidades</h2>
        <aside>
          <div>
            <FinancialLogo width="100" height="100" />
            <span>Faturamento</span>
          </div>
          <div>
            <FinancialLogo width="100" height="100" />
            <span>Faturamento</span>
          </div>
          <div>
            <FinancialLogo width="100" height="100" />
            <span>Faturamento</span>
          </div>
          <div>
            <FinancialLogo width="100" height="100" />
            <span>Faturamento</span>
          </div>
          <div>
            <FinancialLogo width="100" height="100" />
            <span>Faturamento</span>
          </div>
        </aside>
      </main>
      <Link href="/">
        <a className="link-cases">Saiba mais</a>
      </Link>
    </Container>
  )
}
