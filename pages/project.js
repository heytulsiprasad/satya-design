import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import fasalsetu from '../assets/fasalsetu.png'
import fasalsetu_phone from '../assets/fasalsetu_phone.png'

import Navbar from '../components/Navbar'

const Project = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

  console.log({ isTabletOrMobile })

  return (
    <Container>
      <Navbar />
      <Image
        src={isTabletOrMobile ? fasalsetu_phone : fasalsetu}
        alt="Project Presentation"
      />
    </Container>
  )
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export default Project
