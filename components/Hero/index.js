import React from 'react'

import { HeroContainer } from './styles'
import Button from '../Button'
import { heroTitle, heroSubtitle, links } from '../../data/data'

const Hero = () => {
  return (
    <HeroContainer>
      <div className="title">
        <p>{heroTitle[1]}</p>
        <p>{heroTitle[2]}</p>
      </div>
      <div className="subtitle">
        <p>{heroSubtitle[1]}</p>
        <p>{heroSubtitle[2]}</p>
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
