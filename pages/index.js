import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Project from '../components/Project'

// Images
import iPadCover from '../assets/ipad-mockup.png'
import iPhoneCover from '../assets/iphone-mockup.png'
import figma from '../assets/figma.svg'
import adobeXd from '../assets/adobe-xd.svg'
import illustrator from '../assets/illustrator.svg'
import invision from '../assets/invision.svg'
import miro from '../assets/miro.svg'
import photoshop from '../assets/photoshop.svg'
import slack from '../assets/slack.svg'
import teams from '../assets/teams.svg'
import profile from '../assets/man-looking-to-sky.png'

const projects = [
  {
    id: 0,
    title: 'Organic farming made easy',
    subtitle: 'Fasalsetu',
    categories: 'UX, UI',
    photo: iPhoneCover,
    background: '#EDFFEB',
    color: '#3EA536',
  },
  {
    id: 1,
    title: 'Virtual Wardrobe',
    subtitle: 'Wearhouse',
    categories: 'UX, UI',
    photo: iPadCover,
    background: '#E0FAFB',
    color: '#171F28',
  },
]

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Marquee pauseOnHover style={{ marginRight: '-100px' }} speed={200}>
        <FunkyText dark>Featured Projects</FunkyText>
        <FunkyText>Featured Projects</FunkyText>
        <FunkyText dark>Featured Projects</FunkyText>
        <FunkyText>Featured Projects</FunkyText>
      </Marquee>
      <ProjectSection>
        {projects &&
          projects.map((project, idx) => (
            <Project
              key={idx}
              subtitle={project.subtitle}
              title={project.title}
              photo={project.photo}
              color={project.color}
              categories={project.categories}
              background={project.background}
            />
          ))}
      </ProjectSection>
      <ToolSection>
        <h1 className="heading">Tools I Love to Use</h1>
        <ul className="tools">
          <li>
            <Image src={adobeXd} width={51} height={50} alt="Adobe XD Logo" />
          </li>
          <li>
            <Image
              src={illustrator}
              width={50}
              height={50}
              alt="Adobe Illustrator Logo"
            />
          </li>
          <li>
            <Image
              src={photoshop}
              width={50}
              height={50}
              alt="Adobe Photoshop Logo"
            />
          </li>
          <li>
            <Image src={figma} width={33} height={50} alt="Figma Logo" />
          </li>
          <li>
            <Image
              src={teams}
              width={51}
              height={50}
              alt="Microsoft Teams Logo"
            />
          </li>
          <li>
            <Image src={invision} width={50} height={50} alt="Invision Logo" />
          </li>
          <li>
            <Image src={slack} width={50} height={50} alt="Slack Logo" />
          </li>
          <li>
            <Image src={miro} width={50} height={50} alt="Miro Logo" />
          </li>
        </ul>
      </ToolSection>
      <ProfileSection>
        <div className="left">
          <Image src={profile} alt="User profile image" />
        </div>
        <div className="right">
          <h1 className="heading">Design Driven by Passion</h1>
          <h4 className="subheading">
            I am a Passionate Designer exploring the true meaning of design and
            how design is shaping people’s live.
          </h4>
        </div>
      </ProfileSection>
    </Container>
  )
}

const FunkyText = styled.h2`
  color: ${(props) => (props.dark ? '#BBB' : '#E9E9E9')};
  font-size: 4rem;
  margin-right: 3rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectSection = styled.section`
  margin: 9.5rem 0;
  padding: 5.5rem 10rem;

  /* Select only last element */
  > * + * {
    margin-top: 7.2rem;
  }
`

const ToolSection = styled.section`
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

const ProfileSection = styled.section`
  padding: 5.5rem 10rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 18rem;

  .left {
    flex-basis: 50%;
    margin-right: 8rem;
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
    }

    .subheading {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #101223;
    }
  }
`

export default Home
