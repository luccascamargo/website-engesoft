import styled from 'styled-components'

export const Container = styled.div`
  background: #222222;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    text-align: center;

    max-width: 60vw;

    > span {
      font-family: 'Roboto';
      font-weight: 500;
      color: #e1e1e6;
    }

    > p {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 20px;
      padding-top: 20px;
      color: #e1e1e6;
    }
  }

  #link {
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 5rem 1rem;
    width: 13rem;
    color: #e1e1e6;
    text-align: center;
    text-decoration: none;
    border: 1px solid #e1e1e6;
    transition: 0.5s;

    :hover {
      background-color: #0093e9;
      background-image: linear-gradient(45deg, #0093e9 0%, #80d0c7 100%);
      color: #222222;
      border: 1px solid #e1e1e6;
    }
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 40px;
      > span {
      }
    }
  }

  @media (max-width: 618px) {
    h1 {
      max-width: 500px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      max-width: 300px;

      p {
        font-size: 15px;
      }
    }
  }
`
