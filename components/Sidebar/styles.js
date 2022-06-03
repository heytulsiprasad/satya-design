import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 45vw;
  background: #0019ff;
  color: #fff;
  position: fixed;
  z-index: 100;
  top: 0;
  left: ${(props) => (!props.open ? '100vw' : '55vw')};
  display: flex;
  flex-direction: column;
  padding: 4.6rem 9.6rem;
  overflow: hidden;
  transition: left 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895),
    box-shadow 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  box-shadow: ${(props) =>
    props.open ? '0 0 0 10000px rgba(0, 0, 0, 0.5)' : '0'};

  @media only screen and (max-width: 900px) {
    width: 60vw;
    left: ${(props) => (!props.open ? '100vw' : '40vw')};
  }
`

export const Close = styled.div`
  background: #ffc800;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  align-self: flex-end;

  button {
    background: none;
    border: none;
    padding: 1.2rem;
    cursor: pointer;
  }
`

export const Content = styled.div`
  margin-top: 2.6rem;

  ul {
    list-style-type: none;
  }

  .start {
    h2 {
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 4rem;
    }
  }

  .end {
    h4 {
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
      color: #9c9c9c;
      margin-bottom: 1.2rem;
    }

    h2 {
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      color: #9c9c9c;
      margin-bottom: 1.2rem;
    }
  }
`
