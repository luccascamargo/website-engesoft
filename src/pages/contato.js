import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { Container, Footer } from '../styles/pages/Contato'
import Back from '../assets/back.svg'

export default function contato() {
  const { register, handleSubmit, errors, getValues, reset } = useForm()
  const onSubmit = (data) => {
    const name = getValues('name')
    const email = getValues('email')
    const phone = getValues('phone')
    const company = getValues('company')
    const message = getValues('message')

    axios.post('/api/register', { name, email, phone, company, message })
    reset()
  }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-form">
            <input
              type="text"
              placeholder="Qual seu nome?"
              ref={register({ required: true })}
              name="name"
            />
            {errors.name && (
              <span className="error">Este campo é obrigatorio</span>
            )}
            <input
              type="email"
              placeholder="E o seu melhor e-mail?"
              ref={register({ required: true })}
              name="email"
            />
            {errors.email && (
              <span className="error">Este campo é obrigatorio</span>
            )}
            <input
              type="text"
              placeholder="Deixe seu telefone"
              ref={register({ required: true })}
              name="phone"
            />
            {errors.phone && (
              <span className="error">Este campo é obrigatorio</span>
            )}
            <input
              type="text"
              placeholder="Qual empresa "
              ref={register({ required: true })}
              name="company"
            />
            {errors.company && (
              <span className="error">Este campo é obrigatorio</span>
            )}
            <input
              id="input-big"
              type="text"
              placeholder="Escreva aqui sua mensagem"
              ref={register({ required: true })}
              name="message"
            />
            {errors.message && (
              <span className="error">Este campo é obrigatorio</span>
            )}
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
