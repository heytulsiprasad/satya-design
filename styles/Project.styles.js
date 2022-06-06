import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const FooterSection = styled.footer`
  padding: 8rem 10rem;
  background: #fff;
  color: #000;

  @media only screen and (max-width: 900px) {
    padding: 6rem 4.8rem;
  }

  /* Top */
  .about {
    width: 60%;

    @media only screen and (max-width: 900px) {
      width: 80%;
    }

    @media only screen and (max-width: 700px) {
      width: 100%;
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
        font-size: 40px;
        line-height: 50px;
      }

      @media only screen and (max-width: 700px) {
        font-size: 32px;
        line-height: 40px;
      }
    }

    h4 {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #c5c5c5;

      @media only screen and (max-width: 900px) {
        font-size: 20px;
        line-height: 32px;
      }

      @media only screen and (max-width: 700px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  /* Bottom */
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
    }

    &__media {
      display: flex;
      justify-content: space-between;
      flex-basis: 60%;

      @media only screen and (max-width: 700px) {
        width: 100%;
        margin-top: 3rem;
      }
    }

    &__designation {
      /* Name */
      h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 0.8rem;

        @media only screen and (max-width: 500px) {
          font-size: 14px;
          line-height: 17px;
        }
      }

      /* Designation */
      h6 {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #868686;

        @media only screen and (max-width: 500px) {
          font-size: 8px;
          line-height: 10px;
        }
      }
    }

    &__socials {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 2rem;

      > * + * {
        margin-left: 9rem;

        @media only screen and (max-width: 900px) {
          margin-left: 5rem;
        }
      }
    }

    &__time {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
  }
`

export const MoreProjects = styled.h2`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.9rem;

  @media only screen and (max-width: 500px) {
    font-size: 2.4rem;
  }
`
