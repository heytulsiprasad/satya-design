import React, { forwardRef } from 'react'
import Image from 'next/image'

import { SidebarContainer, Close, Content } from './styles'
import cross from '../../assets/cross.svg'

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
              <h2>Behance</h2>
            </li>
            <li>
              <h2>LinkedIn</h2>
            </li>
            <li>
              <h2>Mail</h2>
            </li>
            <li>
              <h2>About Me</h2>
            </li>
            <li>
              <h2>My Resume</h2>
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
