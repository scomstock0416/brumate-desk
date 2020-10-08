/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../../images/menulogo.svg'
import search from '../../images/search.png'
import shop from '../../images/shop.png'
import user from '../../images/user.svg'
import menu from '../../images/menu.svg'

const Container = styled.nav`
  max-width: 100%;
  margin: 0 auto;
`

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
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 27px;
    position: relative;
  }
  @media (min-width: 1140px) {
    max-width: 100%;
  }
`

const Ul = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    margin-right: ${({isAccount}) => (isAccount ? '45px' : '0')};
  }
`

const IconsWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    margin-left: 1rem;
    display: flex;
    align-items: CENTER;
  }
`

const Icon = styled.img`
  max-width: 11px;
  display: ${({displayInfo}) => (displayInfo === 'mobile' ? 'flex' : 'none')};
  margin-right: 1.5rem;
  @media (min-width: 1024px) {
    display: ${({displayInfo}) => (displayInfo !== 'mobile' ? 'flex' : 'none')};
    margin-right: ${({isSearch}) => (isSearch ? '45px' : '0')};
    max-width: 14px;
  }
`

const Li = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-right: 3rem;

  @media (min-width: 1024px) {
    padding-right: 27px;
  }

  @media (min-width: 1200px) {
    padding-right: 3rem;
  }
`

const Image = styled.img`
  margin: 0 auto;
  max-width: 130px;
  @media (min-width: 375px) {
    max-width: auto;
  }
  @media (min-width: 1024px) {
    max-width: 160px;
  }
`

const A = styled.a`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 75px;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 1.4px;
  font-family: 'sharp_sans';
`

const Select = styled.select`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 34px !important;
  padding: 0 15px;
  width: 120px;
  background: url(//cdn.shopify.com/s/files/1/1114/2308/t/137/assets/icon-arrow-down.svg?v=9870916817716269726)
    no-repeat;
  background-position: 100% 50%;
  background-size: 1.2rem;
  color: #000;
  background-clip: padding-box;
  border: 1px solid #e1e1e1;
  border-radius: 30px;
  font-size: 14px;

  border: none;
  border-radius: 0;
  width: auto;
  margin-right: 1rem;
`

const Currency = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuContainer = styled.div`
  max-width: calc(100% / 8);
  display: inline-block;
  padding-left: 3rem;
`

const MenuContainerTitle = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% / 8);
  height: 247px;
`

const MenuTitle = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 20px;
`

const Heading = styled.div`
  position: absolute;
  background: white;
  width: 100%;
`

const ImageMenu = styled.img`
  max-height: 220px;
  max-width: 220px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const ImageLegend = styled.p`
  text-transform: uppercase;
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
  font-family: 'sharp_sans';
  padding: 0;
  margin: 0;
`

const SVG = styled.svg`
  width: 14px;
  @media (min-width: 1024px) {
    display: none;
  }
`

const SVGaccount = styled.svg`
  margin-left: 16px;
  @media (min-width: 1024px) {
    display: none;
  }
`

const Menu = ({className}) => {
  const [active, setActive] = useState('')

  const showInnerMenu = exp => {
    setActive(exp)
  }
  return (
    <Container>
      <Nav className={className}>
        <SVG viewBox="0 0 14.2 12.9" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <path
                d="m0.6 0.925h13"
                fill-opacity="0"
                fill-rule="evenodd"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              />
            </g>
            <g>
              <path
                d="m0.6 6.125 9.5477 1e-15"
                fill-opacity="0"
                fill-rule="evenodd"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              />
            </g>
            <g>
              <path
                d="m0.6 11.975h6.2977"
                fill-opacity="0"
                fill-rule="evenodd"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              />
            </g>
          </g>
        </SVG>

        <SVGaccount
          width="16px"
          height="16px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m512 256c0-141.49-114.5-256-256-256-141.49 0-256 114.5-256 256 0 140.23 113.54 256 256 256 141.88 0 256-115.12 256-256zm-256-226c124.62 0 226 101.38 226 226 0 45.586-13.559 89.402-38.703 126.52-100.97-108.61-273.44-108.8-374.59 0-25.145-37.113-38.703-80.93-38.703-126.52 0-124.62 101.38-226 226-226zm-168.59 376.5c89.773-100.7 247.42-100.67 337.17 0-90.074 100.77-247.05 100.8-337.17 0z" />
          <path d="m256 271c49.625 0 90-40.375 90-90v-30c0-49.625-40.375-90-90-90s-90 40.375-90 90v30c0 49.625 40.375 90 90 90zm-60-120c0-33.086 26.914-60 60-60s60 26.914 60 60v30c0 33.086-26.914 60-60 60s-60-26.914-60-60z" />
        </SVGaccount>
        <Ul>
          <Li>
            <A
              onMouseOver={() => showInnerMenu('wine')}
              onMouseOut={() => showInnerMenu('')}
              href="#"
            >
              SHOP
            </A>
          </Li>
          <Li>
            <A
              onMouseOver={() => showInnerMenu('beer')}
              onMouseOut={() => showInnerMenu('')}
              href="#"
            >
              Create Gift Set
            </A>
          </Li>
          <Li>
            <A
              onMouseOver={() => showInnerMenu('spirits')}
              onMouseOut={() => showInnerMenu('')}
              href="#"
            >
              OUR STORY
            </A>
          </Li>
        </Ul>
        <Image src={logo} />
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
          <Ul isAccount>
            <Li>
              <A href="#">ACCOUNT</A>
            </Li>
          </Ul>
          <Icon displayInfo="desktop" isSearch src={search} />
          <Icon displayInfo="desktop" src={shop} />
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
  )
}

export default Menu
