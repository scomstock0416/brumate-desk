
import React, { useState } from 'react';
import styled from 'styled-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Container = styled.div`
    background: black;
    padding-bottom: 50px;
    padding-top: 50px;
`;

const Image = styled.img`
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
`;

const ContainerSpacing = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    @media (min-width: 640px){
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        position: relative;
        padding: 10px 6px;
        flex: 1 0 0px;
        margin: 0;
    }
`;


const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
    flex-grow: 1;
    padding: 10px 6px;
`;

const SuscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6px 10px;
    justify-content: center;
    @media (min-width: 640px){
        flex-direction: row;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 38px;
    text-align: left;
    color: rgb(0, 0, 0);
    font-family: 'sharp_sans';
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: rgb(208, 51, 31);
    height: 50px !important;
    border-radius: 0 !important;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-direction: column;
    align-self: flex-end;
`;

const Button = styled.button`
    color: rgb(255, 255, 255);
    height: 50px !important;
    border-radius: 100px !important;
    padding: 0 !important;
    background-color: #3b3b3b !important;
    width: 160px !important;
    text-transform: uppercase !important;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0px;
    cursor: pointer;
    background: rgb(48, 59, 67);
    border-color: rgb(0, 0, 0);
`;

const InnerContainer = styled.div`
    background: black;
    margin: 0 auto;
    width: 100%;
     @media (min-width: 640px){
        max-width: 640px;
    }
    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 1024px){
        max-width: 1024px;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1450px){
        max-width: 1370px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: start;
        margin-bottom: 3rem;
    }
`;

const UL = styled.ul`
    color: white;
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const LI = styled.li`
    color: white;
    text-decoration: none;
    display: block;
    /* display: none; */
    @media (min-width: 1024px) {
        /* display: block; */
    }
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.48px;
    line-height: 29px;
    text-transform: uppercase;
    font-family: 'sharp_sans';
`;

const CopyRight = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0 auto;
    letter-spacing: 0.1em;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.25rem;
`;

const FollowText = styled.p`
    font-family: 'sharp_sans';
    font-size: 15px;
    color: white;
    text-align:center;
    margin: 0;
`;

const LogoContainer = styled.div`
    text-align: center;
    width: 100%;
    @media (min-width: 1024px) {
        width: 33.33%;
    }
`;

const H4 = styled.h4`
    margin: 0 0 2rem 0;
    font-family: "sharp_sans";
    font-size: 14.6px;
    text-decoration: underline;
    color: white;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 1024px) {
        margin-bottom: 0.5rem;
    }
`;

const ContainerMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 1024px) {
        text-align: left;
        flex-direction: row;
        align-items: flex-start;
        width: 66.7%;
    }
`;

const SVG = styled.svg`
    display: inline;
    width: 16px;
    margin-left: 10px;
    display: none;
     @media (min-width: 768px) {
        display: none;
     }
}
`;

const InnerMenu = styled.div`
    width: 100%;

    @media (min-width: 1024px) {
        width: calc( 100% / 4);
    }
`;

const Footer = () => {
    const breakpoints = useBreakpoint();
    const [isActiveShop, setisActiveShop] = useState(false);
    const [isActiveHelp, setisActiveHelp] = useState(false);
    const [isActiveBrand, setisActiveBrand] = useState(false);

    const handleClick = (term) => {
        switch (term) {
        case 'shop':
            setisActiveShop(!isActiveShop);
            break;
        case 'help':
            setisActiveHelp(!isActiveHelp);
            break;
        case 'brand':
            setisActiveBrand(!isActiveBrand);
            break;
        default: break;
        }
    };

    return (
        <Container>
            <InnerContainer>
                <Wrapper>
                    <ContainerMenu>
                        <InnerMenu>
                            <H4 onClick={() => handleClick('shop')}>
                                Shop
                                <SVG height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white" d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z" />
                                </SVG>
                            </H4>

                            {(!breakpoints.md || isActiveShop) && (
                                <UL className="uppercase ">
                                    <LI>
                                        <A href="/collections">
                                            Collections
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/collections/wine">
                                            Wine
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/collections/beer">
                                            Beer
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/collections/spirits">
                                            Spirits
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pAges/custom-gift-set">
                                            Gift Sets
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/products/brumate-e-gift-card">
                                            GIFT CARDS
                                        </A>
                                    </LI>
                                </UL>
                            )}
                        </InnerMenu>

                        <InnerMenu>
                            <H4 onClick={() => handleClick('help')}>HELP</H4>
                            {(!breakpoints.md || isActiveHelp) && (
                                <UL>
                                    <LI>
                                        <A href="/pages/faq">
                                            FAQ
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/apps/store-locator/">
                                            STORE LOCATOR
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/media-inquiries">
                                            MEDIA INQUIRIES
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/contact">
                                            Contact Us
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="https://returns.brumate.com/">
                                            RETURNS
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/miLItary-discount">
                                            MILITARY DISCOUNT
                                        </A>
                                    </LI>

                                </UL>
                            )}
                        </InnerMenu>
                        <InnerMenu>
                            <H4 onClick={() => handleClick('brand')}>BRAND</H4>
                            {(!breakpoints.md || isActiveBrand) && (
                                <UL>
                                    <LI>
                                        <A href="/pages/our-story">
                                            About Us
                                        </A>
                                    </LI>
                                    <LI>
                                        <A href="/pages/brumate-vip">
                                            VIP
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/become-a-dealer">
                                            become a dealer
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/blogs/articles">
                                            Blog
                                        </A>
                                    </LI>

                                    <LI>
                                        <A href="/pages/warranty">
                                            Warranty
                                        </A>
                                    </LI>

                                </UL>
                            )}
                        </InnerMenu>
                    </ContainerMenu>
                    <LogoContainer>
                        <Image
                            src="https://cdn.shopify.com/s/files/1/1114/2308/files/footer_logo_13aa35e3-8cfb-4449-8410-efef14fd967a_500x.png?v=1570360817"
                            alt="info"
                        />
                        <FollowText>
                            Keep the buzz going with our newsletter to get the
                            inside scoop on new products, discounts, drink recipes and more.
                        </FollowText>
                        <SuscribeContainer>
                            <InputContainer>
                                <Input type="email" name="email" tabIndex="0" placeholder="Enter your email" />
                            </InputContainer>
                            <ContainerSpacing>
                                <Button type="button" tabIndex="0">Subscribe</Button>
                            </ContainerSpacing>
                        </SuscribeContainer>
                    </LogoContainer>
                </Wrapper>

                <CopyRight>
                    Copyright © 2020 BRUMATE LLC
                </CopyRight>
            </InnerContainer>
        </Container>
    );
};

export default Footer;
