import React from 'react'
import Image from 'next/image'

import { ProjectContainer, Font } from './styles'

const Project = ({
  subtitle,
  title,
  categories,
  photo,
  background,
  color,
  onTap,
}) => {
  return (
    <ProjectContainer background={background} onClick={onTap}>
      <div className="left">
        <Font.SubHead color={color}>{subtitle}</Font.SubHead>
        <Font.Head>{title}</Font.Head>
        <Font.HeadCaption>{categories}</Font.HeadCaption>
      </div>
      <div className="right">
        <Image src={photo} alt="Project infomercial" />
      </div>
    </ProjectContainer>
  )
}

export default Project
