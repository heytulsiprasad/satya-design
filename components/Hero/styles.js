import styled from 'styled-components'

export const HeroContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
  min-height: 90vh;

  .title {
    font-weight: 700;
    font-size: 6.4rem;
    text-align: center;
    color: #101223;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
  }

  .subtitle {
    margin-top: 0.8rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    color: #101223;
    line-height: 2.2rem;
    white-space: nowrap;
  }

  .button {
    margin-top: 2.1rem;
  }
`
