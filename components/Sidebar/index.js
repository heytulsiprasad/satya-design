import React, { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SidebarContainer, Close, Content } from './styles'
import cross from '../../assets/cross.svg'
import { links } from '../../data/data'

// eslint-disable-next-line react/display-name
const Sidebar = forwardRef(({ open, setOpen }, ref) => {
  return (
    <SidebarContainer open={open} ref={ref}>
      <Close>
        <button onClick={() => setOpen((c) => !c)}>
          <Image src={cross} alt="Close button" width={24} height={24} />
        </button>
      </Close>
      <Content>
        <div className="start">
          <ul>
            <li>
              <Link href="/">
                <h2>Home</h2>
              </Link>
            </li>
            <li>
              <h2>
                <a href={links.behance} target="_blank" rel="noreferrer">
                  Behance
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href={links.mail}>Mail</a>
              </h2>
            </li>
            <li>
              <Link href="/#about">
                <h2>About Me</h2>
              </Link>
            </li>
            <li>
              <h2>
                <a href={links.resume} target="_blank" rel="noreferrer">
                  Get Resume
                </a>
              </h2>
            </li>
          </ul>
        </div>
        <div className="end">
          <h4>Coming Soon</h4>
          <ul>
            <li>
              <h2>My Services</h2>
            </li>
            <li>
              <h2>All Projects</h2>
            </li>
          </ul>
        </div>
      </Content>
    </SidebarContainer>
  )
})

export default Sidebar
