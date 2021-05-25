import React from 'react'
import contactIcon from '../../images/contact-ico-mail.svg'
import { Container, InformationField, ImageIcon, P } from './StyledComponents'
const infoContact = [
  {
    icon: contactIcon,
    text: 'Contact Us',
    url: '/contact',
    hyperlink: true,
  },
]

const ContactUs = ({ className }) => (
  <Container className={className}>
    <>
      {infoContact.map(({ icon, text, url, hyperlink }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <form action="mailto:sales@brumate.com" method="post" encType="text/plain">
          <InformationField
            key={index + 1}
            type="submit"
          >
            <ImageIcon src={icon} alt="arrow" />
            <P>{text}</P>
          </InformationField>
        </form>
      ))}
    </>
  </Container>
)

export default ContactUs
