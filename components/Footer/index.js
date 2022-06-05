import React from 'react'
import Image from 'next/image'

import { FooterSection } from './styles'
import { footerData, links, persona } from '../../data/data'
import behance from '../../assets/behance.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/mail.svg'

const Footer = () => {
  return (
    <FooterSection>
      <div className="about">
        <h1>{footerData.title}</h1>
        <h4 className="about__subhead">{footerData.subhead}</h4>
        <h4>{footerData.subhead2}</h4>
      </div>
      <div className="footer">
        <div className="footer__designation">
          <h4>{persona.name}</h4>
          <h6>{persona.role}</h6>
        </div>
        <div className="footer__media">
          <ul className="footer__socials">
            <li>
              <a href={links.behance} target="_blank" rel="noreferrer">
                <Image src={behance} alt="Behance Logo" />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Image src={linkedin} alt="LinkedIn Logo" />
              </a>
            </li>
            <li>
              <a href={links.mail} target="_blank" rel="noreferrer">
                <Image src={mail} alt="Mail Icon" />
              </a>
            </li>
          </ul>
          <div className="footer__time">
            <p>&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
