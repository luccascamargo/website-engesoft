import styled from 'styled-components'

export const Container = styled.div`
  * {
    font-family: 'Roboto';
  }
  width: 100vw;
  height: 90vh;
  background: #081229;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .home {
    color: #d6d6d6;
    width: 30px;
    margin-left: 20rem;
    transition: 1s all;

    &:hover {
      color: #ec5990;
    }
  }

  h1 {
    text-align: center;
    padding-top: 100px;
    color: #d6d6d6;
  }

  .container-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 50vh;
    text-align: center;
    margin-top: 100px;
    margin: 50px auto;

    #input-big {
      width: 40em;
      height: 8em;
    }

    input {
      background: #e2e2e6;
      border: 1px solid #222222;
      border-radius: 15px;
      width: 40em;
      height: 3em;
      margin: 5px 5px;
      text-align: start;
      padding: 15px;
      color: #222222;
      transition: 1s all;

      &:focus {
        border: 1px solid #ec5990;
      }
    }

    button {
      width: 40%;
      height: 3em;
      border: none;
      border-radius: 15px;
      background: #ec5990;
      margin-top: 5px;
      color: #e2e2e6;
      cursor: pointer;
      transition: 1s all;
      text-transform: uppercase;
      letter-spacing: 5px;

      &:hover {
        background: #bf1650;
        color: #fff;
      }
      &:active {
        transition: 0.3s all;
        transform: translateY(3px);
        border: 1px solid transparent;
        opacity: 0.8;
      }
    }

    .error {
      width: 32em;
      color: #bf1650;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 0.9em;
      ::before {
        display: inline;
        content: '⚠';
        margin-right: 2px;
      }
    }
  }

  .opacity {
    opacity: 0.5;
  }

  .container-alert {
    background: #222222;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;
    height: 20rem;
    border-radius: 10px;
    align-items: center;
    color: #d6d6d6;
    display: flex;
    display: none;

    > div {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      > span {
        text-align: center;
      }

      > button {
        width: 5em;
        height: 2em;
        background: #32bea6;
        border: none;
        border-radius: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: #222222;
        cursor: pointer;

        > a {
          text-decoration: none;
          color: #222222;
        }
      }
    }
  }

  .mostrar {
    display: flex;
  }

  @media (max-width: 1116px) {
    h1 {
      font-size: 1.5em;
    }
    justify-content: flex-start;
    .home {
      margin-left: 10rem;
      margin-top: 50px;
    }

    .container-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container-form > input {
      width: 100%;
    }
    .container-form #input-big {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    .container-alert {
      width: 15rem;
      height: 15rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      > div {
        height: 90%;
      }

      > div > span {
        text-align: center;
      }
    }
    .home {
      margin: 50px auto 0 auto;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background: #081229;

  h2 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 10px;
    font-size: 13px;
    font-family: 'Roboto';
    font-weight: 400;
    color: #d6d6d6;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      #tel {
        margin-left: 15px;
      }
    }
  }

  @media (max-width: 500px) {
    > h2 {
      width: 90%;

      .icon {
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
      }
    }
  }
`
