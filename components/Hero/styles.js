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
    line-height: 7.9rem;
    text-align: center;
    color: #101223;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    margin-top: -15rem;

    @media only screen and (max-width: 700px) {
      font-size: 4.8rem;
      line-height: 5.9rem;
    }
  }

  .subtitle {
    margin-top: 0.8rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    color: #101223;
    line-height: 2.2rem;
    white-space: nowrap;

    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }

  .button {
    margin-top: 2.1rem;
  }
`
