import React from 'react'
import Link from 'next/link'

import { Container } from './styles'
import LogoEngesoft from '../../assets/engesoft.svg'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

export default function Footer() {
  return (
    <>
      <Container>
        <footer>
          <div>
            <Link href="#">
              <a>
                <LogoEngesoft width="150" alt="Engesoft" />
              </a>
            </Link>
          </div>
          <div className="text-center">
            <span>
              Se você estiver interessado em trabalhar conosco ou apenas quer
              dizer um ola, envie-nos um email.
            </span>
            <Link href="mailto:contato@engesoft.com.br">
              <a type="email" className="email">
                contato@engesoft.com.br
              </a>
            </Link>
            <p>
              Rua Pinheiro Machado, 2569 - sala 42 - São Pelegrino, Caxias do
              Sul - RS, 95020-172
            </p>
          </div>
          <div className="iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13935.72256080229!2d-51.1873811!3d-29.1667161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x965c96516cb196c4!2sEngesoft%20Inform%C3%A1tica%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1611872477791!5m2!1spt-BR!2sbr"
              frameBorder="0"
              aria-hidden="false"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </footer>
        <div className="footer_owner">
          <span>
            Made by{' '}
            <Link href="https://www.linkedin.com/in/luccascamargo/">
              <a target="_blank">Lucas Camargo</a>
            </Link>
          </span>
          <Link href="#">
            <a>versao ex</a>
          </Link>
          <Link href="/">
            <a>
              <ArrowUpwardIcon />
            </a>
          </Link>
        </div>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </Container>
    </>
  )
}
