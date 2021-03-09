import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50vh;
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
      max-width: 80%;
      font-family: 'Roboto';
      font-weight: 500;
      color: #222222;
    }

    > p {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 1.1rem;
      padding-top: 20px;
      color: #222222;
    }
  }

  #link {
    border-radius: 10px;
    border: 2px solid #081229;
    padding: 0.5em 0em;
    margin-top: 3.5rem;
    width: 13rem;
    color: #081229;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    :hover {
      background: #081229;
      color: #e2e2e6;
    }
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 40px;
    }
  }

  @media (max-width: 618px) {
    h1 {
      max-width: 500px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      max-width: 300px;

      p {
        font-size: 15px;
      }
    }
  }
`
