import styled from 'styled-components'

export const StyledBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.2rem 4rem;
  background: #0019ff;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  min-width: 19rem;

  :hover {
    background: #ffc800;

    span {
      color: #101223;
    }
  }

  span {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
`
