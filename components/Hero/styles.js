import styled from 'styled-components'

export const HeroContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
  min-height: 90vh;
  padding: 0 20rem;
  width: 100vw;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }

  p {
    word-break: break-word;
    overflow-wrap: anywhere;
  }

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
    white-space: nowrap;

    @media only screen and (max-width: 700px) {
      font-size: 4.8rem;
      line-height: 5.9rem;
    }

    @media only screen and (max-width: 500px) {
      margin: 0 2rem;
      font-size: 3.6rem;
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
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

    @media only screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  .button {
    margin-top: 2.1rem;
  }
`
