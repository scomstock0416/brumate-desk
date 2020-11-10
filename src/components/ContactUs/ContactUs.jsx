import React from 'react'
import facebookIcon from '../../images/contact-ico-fb.svg'
import instagramIcon from '../../images/contact-ico-instagram.svg'
import contactIcon from '../../images/contact-ico-mail.svg'
import locationIcon from '../../images/location-ico.svg'
import {Container, InformationField, ImageIcon, P} from './StyledComponents'

const infoContact = [
  {
    icon: contactIcon,
    text: 'Contact US',
    url: '/contact',
    hyperlink: true,
  },
]

const ContactUs = ({className}) => (
  <Container className={className}>
    <>
      {infoContact.map(({icon, text, url, hyperlink}, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <InformationField
          key={index + 1}
          href={hyperlink ? url : ''}
          hyperlink={hyperlink}
          target="_blank"
        >
          <ImageIcon src={icon} alt="arrow" />
          <P>{text}</P>
        </InformationField>
      ))}
    </>
  </Container>
)

export default ContactUs
