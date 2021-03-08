import styled from 'styled-components'

export const Container = styled.div`
  * {
    font-family: 'Roboto';
    font-weight: 400;
    color: #e1e1e6;
    list-style: none;
    text-decoration: none;
  }
  width: 100vw;
  background: #081229;

  > footer {
    width: 60%;
    height: 40vh;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    .text-center {
      display: flex;
      flex-direction: column;
      max-width: 14rem;
      font-size: 13px;
      width: 100%;
      height: 150px;

      > p {
        opacity: 0.5;
        margin-top: 10px;
      }
    }

    .email {
      font-weight: bold;
      margin-top: 10px;
      width: 180px;
    }

    .iframe {
      background: red;
      height: 70%;
      > iframe {
        background: #081229;
      }
    }
  }

  .container-icon {
    width: 24px;
    height: 50px;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  .footer_owner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 20px;
    > * {
      font-size: 13px;
    }

    a:hover {
      color: #407ad1;
    }
  }

  @media (max-width: 1024px) {
    > footer {
      display: flex;
      width: 80%;
    }
  }

  @media (max-width: 890px) {
    .iframe {
      display: none;
    }

    footer {
      justify-content: space-between;

      > .container-logo {
        margin-right: 100px;
      }
    }
  }

  @media (max-width: 480px) {
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .footer_owner {
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
