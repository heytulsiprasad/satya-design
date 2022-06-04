import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Footer from '../components/Footer'

// Styles
import {
  FunkyText,
  Container,
  ProjectSection,
  ToolSection,
  ProfileSection,
  FooterSection,
  LandingContainer,
} from '../styles/Home.styles'

// Images
import figma from '../assets/figma.svg'
import adobeXd from '../assets/adobe-xd.svg'
import illustrator from '../assets/illustrator.svg'
import invision from '../assets/invision.svg'
import miro from '../assets/miro.svg'
import photoshop from '../assets/photoshop.svg'
import slack from '../assets/slack.svg'
import teams from '../assets/teams.svg'
import profile from '../assets/man-looking-to-sky.png'

// Data
import { projects, persona, profileData, footerData, links } from '../data/data'

const Home = () => {
  const router = useRouter()
  console.log(router)

  return (
    <Container>
      <LandingContainer>
        <Navbar />
        <Hero />
      </LandingContainer>
      <Marquee pauseOnHover style={{ marginRight: '-100px' }} speed={200}>
        <FunkyText dark>Featured Projects</FunkyText>
        <FunkyText>Featured Projects</FunkyText>
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
              onTap={() => router.push('/project')}
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
            <Image src={figma} width={51} height={50} alt="Figma Logo" />
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
      <ProfileSection id="about">
        <div className="left">
          <Image src={profile} alt="User profile image" />
        </div>
        <div className="right">
          <h1 className="heading">{profileData.heading}</h1>
          <h4 className="subheading">{profileData.subheading}</h4>
        </div>
      </ProfileSection>
      <Footer />
    </Container>
  )
}

export default Home
