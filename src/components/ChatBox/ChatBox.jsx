import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {
    Button,
    H2,
    Container,
} from './StyledComponents';
import chat from '../../images/chat.png';
import chatMobile from '../../images/chatMobile.png';


const Chat = ({
    className,
}) => {
    const breakpoints = useBreakpoint();
    return (
        <Container className={className}>
            <H2>Don’t see your question or answer here? Contact us</H2>
            {breakpoints.md ? <Button src={chat} /> : <Button src={chatMobile} />}
        </Container>
    );
};

export default Chat;
