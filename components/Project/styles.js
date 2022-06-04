import styled from 'styled-components'

export const ProjectContainer = styled.div`
  background: ${(props) => (props.background ? props.background : '#edffeb')};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .left {
    margin: 13.4rem 0;
    flex-basis: 40%;
    padding: 1rem 3rem 0 6rem;

    @media only screen and (max-width: 900px) {
      flex-basis: 60%;
      padding: 1rem 0 0 4.8rem;
    }

    @media only screen and (max-width: 700px) {
      margin: 3.2rem 0;
    }
  }

  .right {
    padding: 0;
    margin-bottom: 0;
    height: 100%;
    flex-basis: 60%;
    padding: 0;
    transition: 0.25s all ease-in-out;

    img {
      max-height: 100%;
      max-width: 100%;
      display: block;
    }

    @media only screen and (max-width: 900px) {
      transform: scale(1.4);
    }

    @media only screen and (max-width: 700px) {
      transform: scale(1.1);
    }

    :hover {
      transform: scale(1.2);

      @media only screen and (max-width: 900px) {
        transform: scale(1.4);
      }

      @media only screen and (max-width: 700px) {
        transform: scale(1.1);
      }
    }
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

  @media only screen and (max-width: 900px) {
    font-size: 40px;
    line-height: 50px;
  }
`

const HeadCaption = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a8a8a8;
`

export const Font = { SubHead, Head, HeadCaption }
