import React from 'react'

import { HeroContainer } from './styles'
import Button from '../Button'
import { heroTitle, heroSubtitle, links } from '../../data/data'

const Hero = () => {
  return (
    <HeroContainer>
      <div className="title">
        <span>{heroTitle[1]}</span>
        <span>{heroTitle[2]}</span>
      </div>
      <div className="subtitle">
        <span>{heroSubtitle[1]}</span>
        <span>{heroSubtitle[2]}</span>
      </div>
      <div className="button">
        <Button
          text="Let&#39;s Talk"
          onClick={() => (location.href = `mailto:${links.mail}`)}
        />
      </div>
    </HeroContainer>
  )
}

export default Hero
