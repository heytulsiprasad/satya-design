import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.5rem 10rem 0;
  flex-basis: 20%;

  @media only screen and (max-width: 900px) {
    padding: 5.5rem 3.2rem 0;
  }
`

export const NavHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    img {
      margin-top: -10px !important;
      height: 30px !important;
    }
  }

  .designation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 2rem;

    h4 {
      font-weight: 600;
      font-size: 16px;
      color: #000000;
      margin-bottom: 0.2rem;
      line-height: 20px;

      @media only screen and (max-width: 700px) {
        font-size: 1.4rem;
        line-height: 1.7rem;
      }
    }

    h5 {
      font-weight: 500;
      font-size: 12px;
      color: #bcbcbc;
      line-height: 15px;

      @media only screen and (max-width: 900px) {
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.05em;
      }
    }
  }
`

export const NavList = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    > * + * {
      margin-left: 8rem;
    }

    button {
      border: none;
      background: none;
      cursor: pointer;

      p {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #101223;
      }
    }

    li span {
      display: block !important;
    }
  }
`
