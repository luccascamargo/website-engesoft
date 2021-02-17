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
    width: 60%;
    height: 60%;
    margin: 0 auto;
    display: flex;

    > h2 {
      color: #fff;
      font-size: 2em;
      font-weight: 400;
      letter-spacing: 0.1em;
    }

    > aside {
      display: flex;
      margin-top: 50px;

      > div {
        background: #e1e1e6;
        width: 9em;
        height: 10em;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 3px;

        > span {
          font-weight: 400;
          margin-top: 15px;
          letter-spacing: 0.1em;
        }
      }
    }
  }
`
