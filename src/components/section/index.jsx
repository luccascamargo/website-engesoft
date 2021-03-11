import React from 'react'
import Image from 'next/image'

import { Container } from './styles'

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
              <Image src="/valmasser.png" alt="Visi" width="200" height="50" />
            </li>
            <li>
              <Image
                src="/alfatronic.png"
                alt="Alfatronic"
                width="200"
                height="50"
              />
            </li>
            <li>
              <Image
                src="/artefrio.png"
                alt="Artefrio"
                width="200"
                height="50"
              />
            </li>
            <li>
              <Image
                src="/assistemaq.png"
                alt="Assistemaq"
                width="200"
                height="50"
              />
            </li>
          </ul>
          <ul>
            <li>
              <Image src="/daltec.png" alt="Daltec" width="200" height="50" />
            </li>
            <li>
              <Image
                src="/dicorsul.png"
                alt="Discorsul"
                width="200"
                height="50"
              />
            </li>
            <li>
              <Image
                src="/fundifar.png"
                alt="Fundifar"
                width="200"
                height="50"
              />
            </li>
            <li>
              <Image
                src="/mecanicaElza.png"
                alt="Mecanica Elza"
                width="200"
                height="50"
              />
            </li>
          </ul>
          <ul>
            <li>
              <Image src="/valinox.png" alt="Valinox" width="200" height="50" />
            </li>
            <li>
              <Image src="/venture.png" alt="venture" width="200" height="50" />
            </li>
            <li>
              <Image src="/cambara.png" alt="Cambara" width="200" height="50" />
            </li>
            <li>
              <Image
                src="/diskEmbalagens.png"
                alt="Mecanica Elza"
                width="200"
                height="50"
              />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
