import React from 'react'
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import theme from '../../assets/theme.svg'
import { NavbarContainer, NavList, NavHero } from './styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavHero>
        <Image src={logo} alt="Logo of project" width={28} height={40} />
        <div className="designation">
          <h4>Satyaprakash Ray</h4>
          <h5>Product Designer</h5>
        </div>
      </NavHero>
      <NavList>
        <ul>
          <li>
            <Image
              src={theme}
              alt="Theme change button"
              width={16}
              height={16}
            />
          </li>
          <li>
            <p>Get Resume</p>
          </li>
          <li>
            <p>Projects</p>
          </li>
          <li>
            <p>About Me</p>
          </li>
        </ul>
      </NavList>
    </NavbarContainer>
  )
}

export default Navbar
