import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5.5rem 10rem;

  p {
    margin-bottom: 4.8rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.2rem;

    @media only screen and (max-width: 900px) {
      font-weight: 400;
      font-size: 2rem;
      line-height: 3.2rem;
    }

    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 5.5rem 4.8rem;
  }

  @media only screen and (max-width: 700px) {
    padding: 5.5rem 2.5rem;
  }
`
