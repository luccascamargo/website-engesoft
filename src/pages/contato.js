import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Footer } from '../styles/pages/Contato'
import Back from '../assets/back.svg'

export default function contato() {
  return (
    <>
      <Head>
        <title>Contato - Engesoft</title>
      </Head>
      <Container>
        <Link href="/">
          <a className="home">
            <Back />
          </a>
        </Link>
        <h1>
          <span>Entre em contato conosco</span>
        </h1>
        <form action="/contato">
          <div className="container-form">
            <input type="text" placeholder="Qual seu nome?" />
            <input type="text" placeholder="E o seu melhor e-mail?" />
            <br />
            <input type="text" placeholder="Deixe seu telefone" />
            <input type="text" placeholder="Qual empresa " />
            <br />
            <input
              id="input-big"
              type="text"
              placeholder="Escreva aqui sua mensagem"
            />
            <br />
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Container>
      <Footer>
        <h2>
          <span>Caxias do Sul</span>
          <span>
            Rua Pinheiro Machado, 2569 - sala 42 - São Pelegrino, Caxias do Sul
            - RS, 95020-172
          </span>
          <span className="icon">
            <div>(54) 9999 9999</div>
            <div id="tel"> (54) 9 9149 3829</div>
          </span>
        </h2>
      </Footer>
    </>
  )
}
