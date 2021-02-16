import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export default function Main() {
  return (
    <>
      <Container>
        <h1>
          <span>A Engesoft</span>
          <p>
            A atividade principal da Engesoft é o desenvolvimento de sistemas
            aplicativos para área administrativa, nos diferentes ramos de
            atividades empresariais: indústria, comércio, órgãos públicos,
            escritórios contábeis, associações esportivas entre outros. Mantém
            uma estrutura voltada para atender as reais necessidades
            operacionais e gerenciais de seus clientes, aliada as mais avançadas
            técnicas de programação e suas facilidades de uso.
          </p>
        </h1>
        <Link href="/contato">
          <a id="link">Entre em contato conosco</a>
        </Link>
      </Container>
    </>
  )
}
