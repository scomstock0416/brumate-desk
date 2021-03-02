import React from 'react'
import contactIcon from '../../images/contact-ico-mail.svg'
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
        >
          <ImageIcon src={icon} alt="arrow" />
          <P>{text}</P>
        </InformationField>
      ))}
    </>
  </Container>
)

export default ContactUs
