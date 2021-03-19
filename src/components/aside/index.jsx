import React from 'react'
import { useRouter } from 'next/router'

import { Container } from './styles'

import ClubsLogo from '../../assets/svg/020-loan.svg'
import GestaoLogo from '../../assets/svg/024-payment-method.svg'
import ContabillLogo from '../../assets/svg/005-cash.svg'

export default function Aside() {
  const router = useRouter()

  return (
    <Container>
      <main>
        <h2>Conheça apenas algumas de nossas funcionalidades</h2>
        <aside>
          <div onClick={() => router.push('/gestao')}>
            <GestaoLogo width="120" height="120" />
            <span>Sistema de Gestao</span>
          </div>
          <div onClick={() => router.push('/contabil')}>
            <ContabillLogo width="120" height="120" />
            <span>Sistema Contabil</span>
          </div>
          <div onClick={() => router.push('/clubs')}>
            <ClubsLogo width="120" height="120" />
            <span>Sistema para Clubes</span>
          </div>
        </aside>
      </main>
    </Container>
  )
}
