import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 70vh;

  .container {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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

  @media (min-width: 1594px) {
    .text {
      width: 30%;
    }
  }

  @media (max-width: 1024px) {
    .container {
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
            font-size: 1em;
          }

          > p {
            font-size: 0.8rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container .text > h2 {
      width: 70%;
    }
  }

  @media (max-width: 425px) {
    .container > .text {
      width: 100%;
    }

    .clients {
      display: flex;
      padding: 10px;

      .logo-vercel {
        width: 100px;
      }
    }
  }
`
