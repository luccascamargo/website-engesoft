import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  background: #383838;
  margin: auto;

  .owner {
    width: 70%;
    height: 115px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      color: #c1c1c1;
      text-decoration: none;
      text-transform: lowercase;
      transition: 0.3s all;

      &:hover {
        color: #fff;
      }
    }
  }
`
