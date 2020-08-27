import React from 'react';
import styled from 'styled-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import user from '../../images/Header.png';
import tablet from '../../images/HeaderTablet.png';
import SearchBox from '../SearchBox/SearchBox';

const Image = styled.div`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 137px;
    margin: 0 auto;
    display:flex;
    align-items: center;
    justify-content: center;
    opacity: 1.36;
    background-color: #000;
    flex-direction: column;
    @media (min-width: 768px) {
        height: 200px;
    }
`;

const Title = styled.h1`
    color: #ffffff;
    font-family: 'sharp_sans';
    font-size: 30px;
    font-weight: 700;
`;

const Banner = ({
    className,
    title,
    setQuestionsList,
    questions,
}) => {
    const breakpoints = useBreakpoint();
    return (
        <Image url={breakpoints.md ? tablet : user} className={className}>
            <Title>{title}</Title>
            <SearchBox setQuestionsList={setQuestionsList} questions={questions} />
        </Image>
    );
};

export default Banner;
