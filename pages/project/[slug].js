/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import Project from '../../components/Project'

import behance from '../../assets/behance_black.svg'
import mail from '../../assets/mail_black.svg'
import linkedin from '../../assets/linkedin_black.svg'
import { footerData, persona, links, projects } from '../../data/data'
import {
  FooterSection,
  MoreProjects,
  Container,
} from '../../styles/Project.styles'
import { ProjectSection } from '../../styles/Home.styles'

const ProjectComponent = () => {
  const router = useRouter()
  const projectSlug = router.query.slug
  const [image, setImage] = useState(null)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../../assets/project/${
            isTabletOrMobile ? `${projectSlug}-phone` : projectSlug
          }.png`
        )

        setImage(response.default)
      } catch (e) {
        console.log({ e })
      }
    }

    fetchImage()
  }, [projectSlug, isTabletOrMobile])

  return (
    <>
      <SEO />
      <Container>
        <Navbar />
        <div style={{ marginTop: 32 }}>
          {image && (
            <div style={{ width: '100vw' }}>
              <img
                alt="Project Presentation"
                src={image.src}
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
            </div>
          )}
        </div>
        <ProjectSection>
          <MoreProjects>More projects to explore</MoreProjects>
          {projects &&
            projects.map((project, idx) => {
              if (project.slug !== projectSlug) {
                return (
                  <Project
                    key={idx}
                    onTap={() => router.push(`/project/${project.slug}`)}
                    subtitle={project.subtitle}
                    title={project.title}
                    photo={project.photo}
                    color={project.color}
                    categories={project.categories}
                    background={project.background}
                  />
                )
              }
            })}
        </ProjectSection>
        <FooterSection>
          <div className="footer">
            <div className="footer__designation">
              <h4>{persona.name}</h4>
              <h6>{persona.role}</h6>
            </div>
            <div className="footer__media">
              <ul className="footer__socials">
                <li>
                  <a href={links.behance} target="_blank" rel="noreferrer">
                    <Image src={behance} alt="Behance Logo" />
                  </a>
                </li>
                <li>
                  <a href={links.linkedin} target="_blank" rel="noreferrer">
                    <Image src={linkedin} alt="LinkedIn Logo" />
                  </a>
                </li>
                <li>
                  <a href={links.mail} target="_blank" rel="noreferrer">
                    <Image src={mail} alt="Mail Icon" />
                  </a>
                </li>
              </ul>
              <div className="footer__time">
                <p>&copy; {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </FooterSection>
      </Container>
    </>
  )
}

export default ProjectComponent
