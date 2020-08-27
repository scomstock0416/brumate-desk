/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../images/menulogo.svg';
import search from '../../images/search.png';
import shop from '../../images/shop.png';
import user from '../../images/user.svg';
import menu from '../../images/menu.svg';


const Container = styled.nav`
    max-width: 100%;
    margin: 0 auto;
`;


const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 0 15px;
    padding-top: 0.5rem;
    height: 57.19px;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
    @media (min-width: 769px) {
        height: 75px;
        max-width: 768px;
    }
    @media (min-width: 1024px){
        max-width: 1024px;
        position: relative;
    }
    @media (min-width: 1140px){
        max-width: 100%;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1450px){
        max-width: 1400px;
    }

`;

const Ul = styled.ul`
    display: none;
    @media (min-width: 1024px) {
        flex: 1;
        display: flex;
        flex-direction: row;
        list-style-type:none;
        padding:0px;
        margin:0px;
        padding-left: 45px;
    }
`;

const IconsWrapper = styled.div`
    display: none;
    @media (min-width: 1024px) {
        margin-left: 1rem;
        display: flex;
    }
`;

const Icon = styled.img`
    max-width: 25px;
    height: 25px;
    display: ${({ displayInfo }) => (displayInfo === 'mobile' ? 'flex' : 'none')};
    margin-right: 1.5rem;
    @media (min-width: 1024px) {
        display: ${({ displayInfo }) => (displayInfo !== 'mobile' ? 'flex' : 'none')};
    }
`;

const Li = styled.li`
    display: flex;
    flex-direction: row;
    list-style-type:none;
    padding-right: 3rem;
    
    @media (min-width: 1024px){
        padding-right: 0.5rem;
    }

     @media (min-width: 1200px){
        padding-right: 3rem;
    }
`;

const Image = styled.img`
    margin: 0 auto;
    max-width: 130px;
    @media (min-width: 375px) {
        max-width: auto;
    }
     @media (min-width: 1024px) {
        max-width: 160px;
    }
`;

const A = styled.a`
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 75px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    font-family: 'sharp_sans';
`;

const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 34px !important;
    padding: 0 15px;
    width: 120px;
    background-image: url(//cdn.shopify.com/s/files/1/1114/2308/t/118/assets/icon-arrow-down.svg?v=1768537…);
    background-repeat: no-repeat;
    background-position: 96% 50%;
    background-size: 2rem;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e1e1e1;
    border-radius: 30px;
    font-size: 12px;
`;

const Currency = styled.div`
    margin-right: 2rem;
`;

const MenuContainer = styled.div`
    max-width: calc(100% / 8);
    display: inline-block;
    padding-left: 3rem;
`;

const MenuContainerTitle = styled.div`
    display: inline-block;
    position: relative;
    width: calc(100% / 8);
    height: 247px;
`;

const MenuTitle = styled.p`
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 20px;
`;

const Heading = styled.div`
    position: absolute;
    background: white;
    width: 100%;
`;

const ImageMenu = styled.img`
    max-height: 220px;
    max-width: 220px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

const ImageLegend = styled.p`
    text-transform: uppercase;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    font-family: 'sharp_sans';
    padding: 0;
    margin: 0;
`;

const Menu = ({ className }) => {
    const [active, setActive] = useState('');

    const showInnerMenu = (exp) => {
        setActive(exp);
    };
    return (
        <Container>
            <Nav className={className}>
                <Icon displayInfo="mobile" src={menu} />
                <Icon displayInfo="mobile" src={user} />
                <Image src={logo} />
                <Ul>
                    <Li>
                        <A
                            onMouseOver={() => showInnerMenu('wine')}
                            onMouseOut={() => showInnerMenu('')}
                            href="#"
                        >
                            WINE
                        </A>
                    </Li>
                    <Li>
                        <A
                            onMouseOver={() => showInnerMenu('beer')}
                            onMouseOut={() => showInnerMenu('')}
                            href="#"
                        >
                            BEER
                        </A>
                    </Li>
                    <Li>
                        <A
                            onMouseOver={() => showInnerMenu('spirits')}
                            onMouseOut={() => showInnerMenu('')}
                            href="#"
                        >
                            SPIRITS
                        </A>
                    </Li>
                    <Li>
                        <A
                            href="#"
                        >
                            ACCESORIES
                        </A>
                    </Li>
                    <Li>
                        <A href="#">CREATE A GIFT SET</A>
                    </Li>
                    <Li>
                        <A href="#">SHOP BY COLOR</A>
                    </Li>
                </Ul>
                <Icon displayInfo="mobile" src={search} />
                <Icon displayInfo="mobile" src={shop} />
                <IconsWrapper>
                    <Currency className="currency-picker mb-8 lg:mb-0 text-center lg:text-left">
                        <Select className="w-full lg:w-auto" name="currency">
                            <option>AUD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>NZD</option>
                            <option selected="true">USD</option>
                        </Select>
                    </Currency>
                    <Icon displayInfo="desktop" src={search} />
                    <Icon displayInfo="desktop" src={shop} />
                    <Icon displayInfo="desktop" src={user} />
                </IconsWrapper>
            </Nav>
            {active === 'wine' && (
                <Heading>
                    <MenuContainerTitle>
                        <MenuTitle>
                            Brümate
                            <br />
                            Wine
                        </MenuTitle>
                    </MenuContainerTitle>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/1_nav-gift_set_2x_1_3cc78cd3-a5f4-4dfc-a878-bb93c9088b5d_360x.png?v=1570796950" />
                        <ImageLegend>WINESULATOR</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/0Y0A54872_360x.jpg?v=1575579975" />
                        <ImageLegend>GIFT SET</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/1_nav-gift_set_2x_2_360x.png?v=1570796845" />
                        <ImageLegend>UNCORK&#39;D</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/1_nav-gift_set_2x_3_360x.png?v=1570796834" />
                        <ImageLegend>CHAMPAGNE FLUTE</ImageLegend>
                    </MenuContainer>
                </Heading>
            )}
            {active === 'beer' && (
                <Heading>
                    <MenuContainerTitle>
                        <MenuTitle>
                            Brümate
                            <br />
                            beer
                        </MenuTitle>
                    </MenuContainerTitle>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/1_nav-gift_set_2x_1_3cc78cd3-a5f4-4dfc-a878-bb93c9088b5d_360x.png?v=1570796950" />
                        <ImageLegend>HOPSULATOR SLIM</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_47d4fde2-bf63-402f-ad92-e8206efce914_360x.png?v=1570797714" />
                        <ImageLegend>HOPSULATOR TRIO</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_2_360x.png?v=1570797850" />
                        <ImageLegend>HOPSULATOR BOTTL</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_3_360x.png?v=1570797872" />
                        <ImageLegend>HOPSULATOR JUGGERNAUT</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_4_360x.png?v=1570797927" />
                        <ImageLegend>GROWL&#39;R</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_5_360x.png?v=1570797953" />
                        <ImageLegend>IMPERIAL PINT</ImageLegend>
                    </MenuContainer>
                </Heading>
            )}
            {active === 'spirits' && (
                <Heading>
                    <MenuContainerTitle>
                        <MenuTitle>
                            Brümate
                            <br />
                            spirits
                        </MenuTitle>
                    </MenuContainerTitle>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/10_nav-margtini_2x_98817161-a458-4abb-9371-05758314d824_360x.png?v=1570798691" />
                        <ImageLegend>MARGTINI</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/Shaker_360x.jpg?v=1571066363" />
                        <ImageLegend>SHAKER PINT</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_2_360x.png?v=1570797850" />
                        <ImageLegend>NOS&#39;R</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/imperial-pint_360x.jpg?v=1561221533" />
                        <ImageLegend>IMPERIAL PINT</ImageLegend>
                    </MenuContainer>
                    <MenuContainer>
                        <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_4_360x.png?v=1570797927" />
                        <ImageLegend>GLITTER FLASK</ImageLegend>
                    </MenuContainer>
                </Heading>
            )}
        </Container>
    );
};

export default Menu;
