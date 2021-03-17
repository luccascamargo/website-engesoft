import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  background: #fff;
  max-width: 1440px;
  margin: auto;

  .container {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .text {
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > span {
        font-size: 3rem;
        font-family: 'Roboto';
        font-weight: 200;
      }

      > p {
        font-size: 1rem;
        font-family: 'Roboto';
        font-weight: 400;
      }
    }
  }

  .clients {
    width: 50%;
    display: flex;
    justify-content: center;

    .logo-vercel {
      width: 150px;
    }
  }

  .clients ul {
    padding: 0;
    margin: auto;
    list-style: none;
  }

  .clients ul li {
    margin: 15px;
  }

  @media (min-width: 1440px) {
    .text {
      width: 30%;
    }
  }

  @media (max-width: 1024px) {
    .container {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;

      > .text {
        width: 80%;
        height: 150px;

        > h2 {
          width: 60%;
          display: flex;
          flex-direction: column;

          > span {
            font-size: 1.5em;
          }

          > p {
            font-size: 1rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      height: 100%;
    }
    .container .text > h2 {
      width: 100%;
    }

    .clients {
      width: 70%;
    }
  }

  @media (max-width: 425px) {
    > .container > .text {
      width: 95%;
      > h2 > span {
        font-size: 1.3em;
      }
    }

    .clients {
      width: 100%;
    }
  }
  @media (max-width: 375px) {
    > .container > .text {
      > h2 > span {
        font-size: 1em;
      }

      > h2 > p {
        font-size: 0.7em;
      }
    }
  }
`
