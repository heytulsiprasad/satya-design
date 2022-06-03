import React from 'react'

import { StyledBtn } from './styles'

const Button = ({ text, onClick }) => {
  return (
    <StyledBtn onClick={onClick}>
      <span>{text}</span>
    </StyledBtn>
  )
}

export default Button
