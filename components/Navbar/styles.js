import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.5rem 10rem 0;
  flex-basis: 20%;
`

export const NavHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .designation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;

    h4 {
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }

    h5 {
      font-weight: 500;
      font-size: 12px;
      color: #bcbcbc;
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
