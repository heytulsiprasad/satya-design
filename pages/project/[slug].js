import { useRouter } from 'next/router'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import fasal from '../../assets/project/organic-farming-made-easy-phone.png'
import fasal2 from '../../assets/project/virtual-wardrobe.png'

const Container = styled.main`
  display: flex;
  flex-direction: column;
`

const Project = () => {
  const router = useRouter()
  const project = router.query.slug
  const [image, setImage] = useState(null)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../../assets/project/${
            isTabletOrMobile ? `${project}-phone` : project
          }.png`
        )

        setImage(response.default)
      } catch (e) {
        console.log({ e })
      }
    }

    fetchImage()
  }, [project, isTabletOrMobile])

  return (
    <Container>
      <Navbar />
      <div style={{ marginTop: 32 }}>
        {image && <Image src={image} alt="Project Presentation" quality={90} />}
      </div>
      <Footer />
    </Container>
  )
}

export default Project
