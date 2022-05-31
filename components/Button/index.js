import React from 'react'

import { StyledBtn } from './styles'

const Button = ({ text }) => {
  return (
    <StyledBtn>
      <span>{text}</span>
    </StyledBtn>
  )
}

export default Button
