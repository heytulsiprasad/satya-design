import Image from 'next/image'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

import profile from '../assets/cover.png'

import { Container } from '../styles/Project.styles'
import { ProfileSection } from '../styles/Home.styles'
import { AboutSection } from '../styles/About.styles'

import { profileData, about } from '../data/data'

const About = () => {
  return (
    <>
      <SEO />
      <Container>
        <Navbar />
        <ProfileSection style={{ marginBottom: 0 }}>
          <div className="left">
            <Image src={profile} alt="User profile image" />
          </div>
          <div className="right">
            <h1 className="heading">{profileData.heading}</h1>
            <h4 className="subheading">{profileData.subheading}</h4>
          </div>
        </ProfileSection>
        <AboutSection>
          {about.map((para, id) => (
            <p key={id}>{para}</p>
          ))}
        </AboutSection>
        <Footer />
      </Container>
    </>
  )
}

export default About
