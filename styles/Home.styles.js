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
`

export const ToolSection = styled.section`
  margin-bottom: 10rem;
  background: #fff8e0;
  padding: 25rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  }
`

export const ProfileSection = styled.section`
  padding: 5.5rem 10rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 12.6rem;

  @media only screen and (max-width: 900px) {
    padding: 5.5rem 4.8rem;
    margin-bottom: 0;
  }

  .left {
    flex-basis: 50%;
    margin-right: 8rem;

    @media only screen and (max-width: 900px) {
      margin-right: 4rem;
    }
  }

  .right {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4.8rem;

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
    }
  }
`

export const FooterSection = styled.footer`
  padding: 10.6rem 10rem;
  background: #191f51;
  color: #fff;

  @media only screen and (max-width: 900px) {
    padding: 6rem 4.8rem;
  }

  /* Top */
  .about {
    width: 60%;

    @media only screen and (max-width: 900px) {
      width: 80%;
    }

    &__subhead {
      margin-bottom: 5.6rem;
    }

    h1 {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 60px;
      margin-bottom: 4rem;

      @media only screen and (max-width: 900px) {
        font-weight: 800;
        font-size: 40px;
        line-height: 50px;
      }
    }

    h4 {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #c5c5c5;

      @media only screen and (max-width: 900px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
      }
    }
  }

  /* Bottom */
  .footer {
    margin-top: 17.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__designation {
      h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 0.8rem;
      }

      h6 {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #868686;
      }
    }

    &__socials {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;

      > * + * {
        margin-left: 9.3rem;
      }
    }

    &__time {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
  }
`

export const LandingContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
