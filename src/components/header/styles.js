import styled, { keyframes } from 'styled-components'

import Img from '../../assets/wallp2.jpg'

const opacityText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }`

const wheel = keyframes`
  to {
		opacity: 0;
		top: 40px;
	}
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Img}) no-repeat center fixed;

  .logo-vercel {
    width: 150px;
  }

  #button-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid #c1c1c1;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    color: #c1c1c1;
    transition: 0.5s;
    opacity: 0.7;

    :hover {
      color: #e1e1e1;
      opacity: 1;
    }
  }

  > h1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.7;

    > span {
      animation: ${opacityText} 10s;
      font-size: 5rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: #e2e2e6;
    }

    > p {
      animation: ${opacityText} 15s;
      font-size: 2rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: #e2e2e6;

      margin-top: 15px;
    }
  }

  > div {
    margin: 0 auto;
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
  }

  .mouse {
    width: 30px;
    height: 60px;
    border: 3px solid #e1e1e1;
    border-radius: 60px;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    animation: ${opacityText} 10s;
    transition: all 1s;
    opacity: 0.7;
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #e1e1e1;
      border-radius: 50%;
      opacity: 0.7;
      animation: ${wheel} 2s infinite;
      -webkit-animation: ${wheel} 2s infinite;
    }
  }

  .remove {
    display: none;
  }

  @media (max-width: 1266px) {
    h1 > span {
      font-size: 3rem;
    }

    h1 > p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    h1 > span {
      font-size: 2.5rem;
    }

    h1 > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 820px) {
    h1 > span {
      font-size: 2rem;
    }

    h1 > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 650px) {
    h1 {
      margin: 0 auto;
      max-width: 500px;
      text-align: center;

      > span {
        font-size: 3rem;
      }
    }
  }

  @media (max-width: 650px) {
    h1 {
      margin: 0 auto;
      max-width: 300px;
      text-align: center;

      > span {
        font-size: 2rem;
      }

      > p {
        font-size: 0.9rem;
        max-width: 200px;
      }
    }
  }

  @media (max-width: 450px) {
    background-image: linear-gradient(
      to right top,
      #081229,
      #071f45,
      #042c62,
      #013981,
      #0046a1
    );
    .logo-vercel {
      margin-left: 10px;
      width: 100px;
    }

    #button-header {
      opacity: 1;
      font-weight: 500;
    }
    div {
      width: 100%;

      #logo {
        padding-left: 15px;
      }

      #button-header {
        margin-right: 15px;
        width: 100px;
        font-size: 10px;
      }
    }
  }
`
