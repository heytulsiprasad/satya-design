import styled from 'styled-components'

export const HeroContainer = styled.header`
  padding: 26.4rem 41.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 950px) {
    padding: 26.4rem 30rem;
  }

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
