import styled from 'styled-components'

export const ProjectContainer = styled.div`
  background: ${(props) => (props.background ? props.background : '#edffeb')};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 0 6rem;

  .left {
    margin: 13.4rem 0;
    flex-basis: 40%;
  }

  .right {
    padding: 0;
    margin-bottom: 0;
    height: 100%;
    flex-basis: 60%;
  }
`

const SubHead = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => (props.color ? props.color : '#3ea536')};
  margin-bottom: 0.8rem;
`

const Head = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 0.8rem;
  color: #101223;
`

const HeadCaption = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #a8a8a8;
`

export const Font = { SubHead, Head, HeadCaption }
