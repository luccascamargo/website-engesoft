import styled from 'styled-components'
export const Container = styled.div`
  * {
    font-family: 'Roboto';
  }
  width: 100vw;
  height: 90vh;
  background: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .home {
    color: #d6d6d6;
    width: 30px;
    margin-left: 20rem;
    transition: 1s all;

    &:hover {
      color: #0093e9;
    }
  }

  h1 {
    text-align: center;
    padding-top: 100px;
    color: #d6d6d6;
  }

  .container-form {
    width: 70%;
    height: 50vh;
    text-align: center;
    margin-top: 100px;
    margin: 50px auto;

    #input-big {
      width: 50em;
      height: 8em;
    }

    input {
      background: #222222;
      border: 1px solid #d6d6d6;
      border-radius: 15px;
      width: 25em;
      height: 3em;
      margin: 5px 5px;
      text-align: start;
      padding: 15px;
      color: #d6d6d6;
      transition: 1s all;

      &:focus {
        border: 1px solid #0093e9;
      }
    }

    button {
      width: 50%;
      height: 3em;
      border: 1px solid #d6d6d6;
      border-radius: 15px;
      background: #222222;
      margin-top: 5px;
      color: #d6d6d6;
      cursor: pointer;
      transition: 1s all;

      &:hover {
        background-color: #0093e9;
        background-image: linear-gradient(45deg, #0093e9 0%, #80d0c7 100%);
        color: #222222;
        border: none;
      }
    }
  }

  @media (max-width: 1380px) {
    .container-form > input {
      width: 20em;
    }

    .container-form #input-big {
      width: 40em;
    }
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
    .home {
      margin: 50px auto 0 auto;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background: #222222;

  h2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    margin: 0 auto;
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
`
