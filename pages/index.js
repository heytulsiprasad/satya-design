import React from 'react'
import styled from 'styled-components'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.5rem 10rem;
`

export default Home
