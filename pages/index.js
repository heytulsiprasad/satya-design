import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

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

export default Home
