import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Project from '../components/Project'

// Images
import iPadCover from '../assets/ipad-mockup.png'
import iPhoneCover from '../assets/iphone-mockup.png'

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
      <Marquee pauseOnHover style={{ marginRight: '-100px' }}>
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
  padding: 5.5rem 10rem;
`

const ProjectSection = styled.section`
  margin: 9.5rem 0;
`

export default Home
