import styled, { keyframes } from 'styled-components'

const opacityText = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }`

const backgroundSize = keyframes`
0% {
  background-size: 100% 100%;
}

100% {
  background-size: 110% 110%;
}`

const wheel = keyframes`
  to {
		opacity: 0;
		top: 40px;
	}
`

export const Container = styled.div`
  animation: ${backgroundSize} 4s 1 ease-out;
  width: 100%;
  height: 100vh;
  background: #375da2;
  -webkit-background-size: 110%;
  -moz-background-size: 110%;
  -o-background-size: 110%;
  background-size: 110% 110%;

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

    :hover {
      background: #375da2;
      color: #e1e1e1;
      border: 1px solid #375da2;
    }
  }

  > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17rem;

    > span {
      animation: ${opacityText} 10s;
      font-size: 5rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: #e1e1e1;
    }

    > p {
      animation: ${opacityText} 15s;
      font-size: 2rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: #e1e1e1;

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
    position: relative;
    margin-top: 15rem;
    animation: ${opacityText} 10s;
    transition: all 1s;
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
      opacity: 1;
      animation: ${wheel} 2s infinite;
      -webkit-animation: ${wheel} 2s infinite;
    }
  }

  @media (max-width: 1550px) {
    .mouse {
      margin-top: 10rem;
    }

    h1 > span {
      font-size: 4rem;
    }
  }

  @media (max-width: 1266px) {
    background-image: linear-gradient(
      to right bottom,
      #051937,
      #09436a,
      #00739e,
      #00a7ce,
      #02def8
    );
    h1 > span {
      font-size: 3rem;
      color: #2d2d2d;
    }

    h1 > p {
      font-size: 1.5rem;
      color: #2d2d2d;
    }

    .mouse {
      border: 3px solid #2d2d2d;

      &::before {
        background-color: #2d2d2d;
      }
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

    .mouse {
      margin-top: 10rem;
    }
  }

  @media (max-width: 450px) {
    div {
      width: 100%;

      #logo {
        padding-left: 15px;
      }

      #button-header {
        margin-right: 15px;
      }
    }
  }
`
