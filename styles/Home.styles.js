import styled from 'styled-components'

export const FunkyText = styled.h2`
  color: ${(props) => (props.dark ? '#BBB' : '#E9E9E9')};
  font-size: 4rem;
  margin-right: 3rem;
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const ProjectSection = styled.section`
  margin: 9.5rem 0;
  padding: 5.5rem 10rem;

  /* Select only last element */
  > * + * {
    margin-top: 7.2rem;
  }

  @media only screen and (max-width: 900px) {
    padding: 5.5rem 4.8rem;
  }

  @media only screen and (max-width: 700px) {
    padding: 5.5rem 2.5rem;
  }
`

export const ToolSection = styled.section`
  margin-bottom: 10rem;
  background: #fff8e0;
  padding: 25rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 700px) {
    padding: 14.6rem 4.5rem;
  }

  .heading {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #101223;
    margin-bottom: 5.8rem;
  }

  .tools {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    > * + * {
      margin-left: 4rem;
    }

    @media only screen and (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: center;

      /* Each icon */
      li {
        margin: 4rem;
      }
    }
  }
`

export const ProfileSection = styled.section`
  padding: 5.5rem 10rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 12.6rem;

  @media only screen and (max-width: 900px) {
    padding: 5.5rem 4.8rem;
    margin-bottom: 6rem;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    padding: 5.5rem 2.5rem;
    margin: 0;
  }

  .left {
    flex-basis: 50%;
    margin-right: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
      margin-right: 4rem;
    }

    @media only screen and (max-width: 700px) {
      align-self: center;
      margin: 0 0 4.8rem 0;
    }
  }

  .right {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .heading {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 60px;
      color: #101223;
      margin-bottom: 2.4rem;

      @media only screen and (max-width: 900px) {
        font-weight: 800;
        font-size: 48px;
        line-height: 60px;
      }

      @media only screen and (max-width: 700px) {
        font-size: 3.2rem;
        line-height: 4rem;
        margin-bottom: 4rem;
      }
    }

    .subheading {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #101223;

      @media only screen and (max-width: 900px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
      }

      @media only screen and (max-width: 700px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
`

export const LandingContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
