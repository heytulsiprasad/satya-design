import React, { useState, useRef, forwardRef, useEffect } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import logo from '../../assets/logo.svg'
import theme from '../../assets/theme.svg'
import hamburger from '../../assets/hamburger.svg'
import { NavbarContainer, NavList, NavHero, HamburgerMenu } from './styles'
import Sidebar from '../Sidebar'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { persona, links } from '../../data/data'

const MediaQuery = dynamic(
  () => import('../../node_modules/react-responsive'),
  { ssr: false }
)

function disableScroll() {
  // Get the current page scroll position
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

function enableScroll() {
  window.onscroll = function () {}
}

const Navbar = () => {
  const ref = useRef()

  const [open, setOpen] = useState(false)
  useOnClickOutside(ref, () => setOpen(false))

  useEffect(() => {
    if (open) disableScroll()
    else enableScroll()
  }, [open])

  return (
    <>
      <NavbarContainer>
        <NavHero>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo of project"
              width={28}
              height={40}
              style={{ marginBottom: 4, cursor: 'pointer' }}
            />
          </Link>
          <div className="designation">
            <h4>{persona.name}</h4>
            <h5>{persona.role}</h5>
          </div>
        </NavHero>
        <NavList>
          <ul>
            <MediaQuery minWidth={700}>
              <li className="resume">
                <button>
                  <a target="_blank" href={links.resume} rel="noreferrer">
                    Get Resume
                  </a>
                </button>
              </li>
            </MediaQuery>
          </ul>
        </NavList>
      </NavbarContainer>
      <Sidebar setOpen={setOpen} open={open} ref={ref} />
      <HamburgerMenu>
        <button className="hamburger" onClick={() => setOpen((c) => !c)}>
          <Image src={hamburger} alt="Hamburger Menu" />
        </button>
      </HamburgerMenu>
    </>
  )
}

export default Navbar
