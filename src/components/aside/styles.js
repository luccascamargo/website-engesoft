import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #081229;
  width: 100%;
  height: 60vh;

  .link-cases {
    width: 10em;
    background: #081229;
    border-radius: 10px;
    padding: 5px;
    text-decoration: none;
    text-align: center;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    color: #743ad5;
    text-transform: lowercase;
    letter-spacing: 0.1em;

    &:active {
      transition: 0.3s all;
      transform: translateY(3px);
      opacity: 0.8;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60%;
    margin: 0 auto;
    display: flex;

    > h2 {
      color: #fff;
      font-size: 2em;
      font-weight: 400;
      letter-spacing: 0.1em;
      text-align: center;
    }

    > aside {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;

      > div {
        background: #e1e1e6;
        width: 9em;
        height: 10em;
        margin: 0 10px 0 10px;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        position: initial;

        > span {
          font-weight: 400;
          margin-top: 15px;
          letter-spacing: 0.1em;
        }
      }
    }
  }

  @media (max-width: 1516px) {
    main > h2 {
      font-size: 1.8em;
    }
  }

  @media (max-width: 825px) {
    > main > aside > div {
      width: 7.5em;
      height: 8.5em;

      > span {
        letter-spacing: 0em;
      }
    }
  }

  @media (max-width: 700px) {
    height: 80vh;

    main > h2 {
      font-size: 1.2em;
    }

    .link-cases {
      margin-top: 1em;
    }

    > main > aside > div {
      width: 6em;
      height: 7.5em;
      margin-bottom: 1em;
    }
  }

  @media (max-width: 347px) {
    height: 85vh;

    .link-cases {
      margin-top: 7em;
    }
  }
`
