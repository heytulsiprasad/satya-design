import React from 'react'

import { HeroContainer } from './styles'
import Button from '../Button'

const Hero = () => {
  return (
    <HeroContainer>
      <div className="title">
        <span>Product Strategy </span>
        <span>&#38; Design</span>
      </div>
      <div className="subtitle">
        <span>I help to create User centered </span>
        <span> Delightful Experience.</span>
      </div>
      <div className="button">
        <Button text="Let&#39;s Talk" />
      </div>
    </HeroContainer>
  )
}

export default Hero
