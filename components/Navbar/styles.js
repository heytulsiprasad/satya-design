import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

    li span {
      display: block !important;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #101223;
  }
`
