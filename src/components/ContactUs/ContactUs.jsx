import React from 'react';
import facebookIcon from '../../images/contact-ico-fb.svg';
import instagramIcon from '../../images/contact-ico-instagram.svg';
import contactIcon from '../../images/contact-ico-mail.svg';
import locationIcon from '../../images/location-ico.svg';
import {
    Container,
    InformationField,
    ImageIcon,
    P,
} from './StyledComponents';


const infoContact = [
    {
        icon: locationIcon,
        text: '201 NW 22ND AVE, FORT LAUDERDALE, FL 33311',
        url: 'https://goo.gl/maps/HALdwB7seSoXR7Cg9',
        hyperlink: false,
    },
    {
        icon: contactIcon,
        text: 'sales@brumate.com',
        url: 'mailto:SALES@BRUMATE.COM?Subject=BrumateDesk',
        hyperlink: true,
    },
    {
        icon: facebookIcon,
        text: 'Facebook',
        url: 'https://www.facebook.com/MyBruMate/',
        hyperlink: true,
    },
    {
        icon: instagramIcon,
        text: 'Instagram',
        url: 'https://www.instagram.com/bru.mate/',
        hyperlink: true,
    },
];

const ContactUs = ({
    className,
}) => (
    <Container className={className}>
        <>
            {infoContact.map(
                ({
                    icon, text, url, hyperlink,
                }, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <InformationField key={index + 1} href={hyperlink ? url : ''} hyperlink={hyperlink} target="_blank">
                        <ImageIcon src={icon} alt="arrow" />
                        <P>{text}</P>
                    </InformationField>
                ),
            )}
        </>
    </Container>
);

export default ContactUs;
