import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import fasalsetu from '../assets/fasalsetu.png'
import fasalsetu_phone from '../assets/fasalsetu_phone.png'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Project = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

  console.log({ isTabletOrMobile })

  return (
    <Container>
      <Navbar />
      <h4>Content Hijacked</h4>
      <Footer />
    </Container>
  )
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export default Project
