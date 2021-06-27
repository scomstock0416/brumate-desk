/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../../images/menulogo.svg'
import search from '../../images/search.png'
import shop from '../../images/shop.png'

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
    margin-right: ${({ isAccount }) => (isAccount ? '45px' : '0')};
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
  display: ${({ displayInfo }) => (displayInfo === 'mobile' ? 'flex' : 'none')};
  margin-right: 1.5rem;
  @media (min-width: 1024px) {
    display: ${({ displayInfo }) => (displayInfo !== 'mobile' ? 'flex' : 'none')};
    margin-right: ${({ isSearch }) => (isSearch ? '45px' : '0')};
    max-width: 14px;
  }
`

const Li = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-right: 3rem;
  cursor: pointer;

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

const LogoLink = styled.a`
  margin: 0 auto;
  max-width: 130px;
  @media (min-width: 375px) {
    max-width: auto;
  }
  @media (min-width: 1024px) {
    max-width: 160px;
  }
`

const ImageMenuMobile = styled.img`
  margin: 0 auto;
  max-width: 130px;
  margin-top: 16px;
  display: flex;
`

const A = styled.a`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 75px;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 1.4px;
  font-family: 'arquitecta';
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

const MenuContainer = styled.a`
  max-width: calc(100% / 8);
  display: inline-block;
  padding-left: 3rem;
  text-decoration: none;
`

const MenuContainerCollection = styled.a`
  max-width: calc(100% / 4);
  display: inline-block;
  padding-left: 3rem;
  text-decoration: none;
`

const MenuContainerTitle = styled.div`
  display: flex;
  width: calc(100% / 8);
  align-items: center;
  min-width: 290px;
`

const MenuContainerTitleGift = styled.div`
  display: flex;
  width: calc(100% / 8);
`

const MenuTitle = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
`

const Heading = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  display: flex;
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
  font-family: 'arquitecta';
  padding: 0;
  margin: 0;
  text-align: center;
  color: black;
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

const CloseSVG = styled.svg`
  width: 20px;
`

const CloseContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin-top: 3px;
`

const ScrollableMenu = styled.div`
  height: 90vh;
  overflow-x: hidden;
  padding-bottom: 8rem;
  margin-top: 5rem;
  overflow-y: scroll;
`

const MenuMobile = styled.nav`
  top: 0;
  left: 0;
  z-index: 100;
  visibility: hidden;
  width: 275px;
  height: 100%;
  background: #ffffff;
  transition: all 0.5s;
  visibility: visible;
  transform: translate3d(0, 0, 0);
  position: fixed !important;
`

const H3 = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.6rem;
`

const H3BYTYPE = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
`

const ULScrolleable = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  font-weight: 400;
  font-style: normal;
  font-size: 1.6rem;
`

const LIScrolleable = styled.li`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
`

const AScrolleable = styled.a`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  font-family: 'arquitecta';
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Product = styled.div`
  width: 50%;
`

const ProductImg = styled.img`
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}
`

const Productitle = styled.h4`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
`

const ProductLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`

const H3Product = styled.h3`
  text-decoration: none;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.25rem;
  margin-top: 2rem;
`

const AProduct = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`

const ButtonBottom = styled.a`
  width: 210px;
  --text-opacity: 1;
  color: #000;
  color: rgba(0, 0, 0, var(--text-opacity));
  border: 1px solid black;
  padding: 0 20px;
  font-size: 13px;
  line-height: 48px;
  display: inline-block;
  width: auto;
  width: 210px;
  height: auto;
  margin: 0;
  padding: 0 20px;
  font-weight: 400;
  font-size: 13px;
  line-height: 48px;
  color: black;
  text-decoration: none;
  letter-spacing: 1.2px;
  background-image: none;
  background-color: #fff;
  cursor: pointer;
  vertical-align: middle;
  transition: all 0.5s ease-in-out;
  outline: none;
  /* border: none; */
  text-align: center;
  margin: 0 auto;
`

const LastContainer = styled.div`
  margin-bottom: 8rem;
`

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
`

const SubLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  font-weight: 400;
  font-style: normal;
  font-size: 1.6rem;
`

const SubLinksLi = styled.li`
  background: ${({ isActive }) => (isActive ? 'black' : 'white')};
`

const ShopContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  max-width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 10px;
    max-height: 140px;
}
`

const SubLinksA = styled.a`
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  font-weight: 700;
  display: block;
  padding: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`

const ImageColor = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 auto;
`

const ColorContainer = styled.div`
  width: 25%;
  height: 36px;
`

const Menu = ({ className, closeMenuFxn }) => {
  const [active, setActive] = useState('')
  const [menu, setMenu] = useState('')
  const [subinnermenu, setSubInnerMenu] = useState('')
  const [isMenuActive, setIsMenuActive] = useState(false)

  const showMenu = exp => {
    setMenu(exp)
  }

  const closeMenu = () => {
    setMenu('')
  }

  const showSubInnerMenu = exp => {
    setSubInnerMenu(exp)
  }

  const showInnerMenu = exp => {
    setActive(exp)
  }

  useEffect(() => {
    closeMenu('')
    setIsMenuActive(false)
    setActive('')
  }, [closeMenuFxn])
  return (
    <Container>
      <Nav className={className}>
        <SVG
          onMouseEnter={() => setIsMenuActive(true)}
          viewBox="0 0 14.2 12.9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path
                d="m0.6 0.925h13"
                fillOpacity="0"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
              />
            </g>
            <g>
              <path
                d="m0.6 6.125 9.5477 1e-15"
                fillOpacity="0"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
              />
            </g>
            <g>
              <path
                d="m0.6 11.975h6.2977"
                fillOpacity="0"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
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
              onMouseEnter={() => {
                if (menu === '') {
                  showMenu('shop')
                  showInnerMenu('beer')
                  return
                }
                closeMenu('')
              }}
            >
              SHOP
            </A>
          </Li>
          <Li>
            <A
              onMouseEnter={() => {
                if (menu === '') {
                  showMenu('gift')
                  return
                }
                closeMenu('')
              }}
            >
              Create Gift Set
            </A>
          </Li>
          <Li>
            <A
              onMouseEnter={() => {
                if (menu === '') {
                  showMenu('story')
                  return
                }
                closeMenu('')
              }}
            >
              OUR STORY
            </A>
          </Li>
        </Ul>
        <LogoLink href="https://brumate.com/">
          <Image src={logo} />
        </LogoLink>
        <Icon displayInfo="mobile" src={search} />
        <Icon displayInfo="mobile" src={shop} />
        <IconsWrapper>
          <Currency className="currency-picker mb-8 lg:mb-0 text-center lg:text-left">
            <Select
              defaultValue={'USD'}
              className="w-full lg:w-auto"
              name="currency"
            >
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="NZD">NZD</option>
              <option value="USD">USD</option>
            </Select>
          </Currency>
          <Ul isAccount>
            <Li>
              <A href="www.brumate.com#">ACCOUNT</A>
            </Li>
          </Ul>
          <Icon displayInfo="desktop" isSearch src={search} />
          <Icon displayInfo="desktop" src={shop} />
        </IconsWrapper>
      </Nav>
      {menu === 'shop' && (
        <Heading>
          <MenuContainerTitle>
            <SubLinks>
              <SubLinksLi isActive={active === 'beer'}>
                <SubLinksA
                  href="https://brumate.com/collections/beer"
                  isActive={active === 'beer'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'beer') {
                      showInnerMenu('beer')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="beer"
                >
                  Beer & Can Coolers
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'wine'}>
                <SubLinksA
                  href="https://brumate.com/collections/wine"
                  isActive={active === 'wine'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'wine') {
                      showInnerMenu('wine')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="wine"
                >
                  Wine & Tumblers
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'spirits'}>
                <SubLinksA
                  href="https://brumate.com/collections/spirits"
                  isActive={active === 'spirits'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'spirits') {
                      showInnerMenu('spirits')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="spirits"
                >
                  Spirits & Barware
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'coffee'}>
                <SubLinksA
                  href="https://brumate.com/collections/toddy"
                  isActive={active === 'coffee'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'coffee') {
                      showInnerMenu('coffee')
                      return
                    }
                    showInnerMenu('')
                  }}
                >
                  Coffee & Mugs
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'rehydration'}>
                <SubLinksA
                  href="https://brumate.com/collections/brumate-rehydration-bottle"
                  isActive={active === 'rehydration'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'rehydration') {
                      showInnerMenu('rehydration')
                      return
                    }
                    showInnerMenu('')
                  }}
                >
                  Rehydration & Water Bottles
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'coolers'}>
                <SubLinksA
                  href="https://brumate.com/products/meet-backtap"
                  isActive={active === 'coolers'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'coolers') {
                      showInnerMenu('coolers')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="coolers"
                >
                  Coolers
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'collections'}>
                <SubLinksA
                  href="#"
                  isActive={active === 'collections'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'collections') {
                      showInnerMenu('collections')
                      return
                    }
                    showInnerMenu('')
                  }}
                >
                  Collections
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'accesories'}>
                <SubLinksA
                  href="https://brumate.com/collections/accessories"
                  isActive={active === 'accesories'}
                  onMouseEnter={() => {
                    if (active === '' || active !== 'accesories') {
                      showInnerMenu('accesories')
                      return
                    }
                    showInnerMenu('')
                  }}
                >
                  Accessories
                </SubLinksA>
              </SubLinksLi>
            </SubLinks>
          </MenuContainerTitle>
          {active === 'wine' && (
            <>
              <MenuContainer href="https://brumate.com/collections/winesulator">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Winesulator_360x.jpg?v=1618160092" />
                <ImageLegend>WINESULATOR</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/gift-sets">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-WineGiftSet_96580fd7-fd4c-4367-bdf7-ade174a8a894_360x.jpg?v=1618163997" />
                <ImageLegend>GIFT SET</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/infinity-collection">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/infinity_360x.jpg?v=1618941934" />
                <ImageLegend>Winesulator Infinity</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/uncorkd-xl">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Uncorkd_360x.jpg?v=1618160183" />
                <ImageLegend>UNCORK&#39;D</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/champagne-flute">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Flute_360x.jpg?v=1618160218" />
                <ImageLegend>CHAMPAGNE FLUTE</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'beer' && (
            <>
              <MenuContainer href="https://brumate.com/collections/hopsulator-slim">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Slim_8f220a25-2318-4b76-aa61-e96deaf4eb78_360x.jpg?v=1618159502" />
                <ImageLegend>HOPSULATOR SLIM</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/hopsulator-trio">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/trio-nav_360x.jpg?v=1621445181" />
                <ImageLegend>HOPSULATOR TRIO</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/hopsulator-duo">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/DUO_Nav_360x.jpg?v=1605250711" />
                <ImageLegend>HOPSULATOR DUO</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/hopsulator-bott-l">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Bottl_360x.jpg?v=1618159399" />
                <ImageLegend>HOPSULATOR BOTT&#39;L</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/juggernaut">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Juggernaut_360x.jpg?v=1618159582" />
                <ImageLegend>HOPSULATOR JUGGERNAUT</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/hopsulator-twist">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/TwistLedge_360x.jpg?v=1594848706" />
                <ImageLegend>TWIST</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/growl-r">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Growlr_246392ca-cd3a-4b61-8718-c2f7a39ac8ec_360x.jpg?v=1618159659" />
                <ImageLegend>GROWL&#39;R</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/imperial-pint">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/pint_5cff0065-c635-4beb-898d-a711c91a534b_360x.jpg?v=1618942122" />
                <ImageLegend>IMPERIAL PINT</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/growlr-gift-sets">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-GrowlrGiftSet_360x.jpg?v=1618164050" />
                <ImageLegend>GROWL&#39;R GIFT SET</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'spirits' && (
            <>
              <MenuContainer href="https://brumate.com/collections/margtini-10oz-tumbler">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Margtini_4d1abca1-5fe3-4e3a-9fb4-43ac9bc89406_360x.jpg?v=1618163476" />
                <ImageLegend>MARGTINI</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/shaker-pint">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-ShakerPint_360x.jpg?v=1618163339" />
                <ImageLegend>SHAKER PINT</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/nosr-the-unbreakable-whiskey-glass">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Nosr_360x.jpg?v=1618163402" />
                <ImageLegend>NOS&#39;R</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/imperial-pint-spirit">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/5_nav-slim_2x_5_360x_94c983b5-173f-48b8-ad2b-613c46b3efa9_360x.png?v=1608711784" />
                <ImageLegend>IMPERIAL PINT</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/glitter-flask">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/13_nav-glitterflask_2x_da9a96fc-b1b8-4a6d-a459-c85976639a3d_360x.png?v=1570798838" />
                <ImageLegend>GLITTER FLASK</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/high-ball">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Highball_360x.jpg?v=1618163665" />
                <ImageLegend>Highball</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/rocks">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Rocks_360x.jpg?v=1618163697" />
                <ImageLegend>Rocks</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/fifth">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Fifth_360x.jpg?v=1618163733" />
                <ImageLegend>Fifth</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/brumate-rehydration-bottle">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-ReHydration_360x.jpg?v=1618163959" />
                <ImageLegend>REHYDRATION & WATER BOTTLES</ImageLegend>
              </MenuContainer>
              <MenuContainer href="https://brumate.com/collections/liquor-canteen">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-LiquorCanteen_360x.jpg?v=1618163773" />
                <ImageLegend>Liquor Canteen</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'coffee' && (
            <>
              <MenuContainer href="https://brumate.com/collections/toddy">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Toddy_360x.jpg?v=1619738418" />
                <ImageLegend>Toddy</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'rehydration' && (
            <>
              <MenuContainer href="https://brumate.com/collections/brumate-rehydration-bottle">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-ReHydration_360x.jpg?v=1618163959" />
                <ImageLegend>Rehydration & Water Bottles</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'coolers' && (
            <>
              <MenuContainer href="https://brumate.com/collections/backtap">
                <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-Coolers_360x.jpg?v=1618875509" />
                <ImageLegend>BackTap</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'collections' && (
            <MenuContainerCollection>
              <SubLinks>
                <SubLinksLi isActive={subinnermenu === 'newReleases'}>
                  <SubLinksA
                    href="https://brumate.com/collections/new-releases"
                    isActive={subinnermenu === 'newReleases'}
                    noBold
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('newReleases')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    New Releases
                  </SubLinksA>
                </SubLinksLi>

                <SubLinksLi isActive={subinnermenu === 'muv'}>
                  <SubLinksA
                    href="https://brumate.com/pages/muv-collection"
                    noBold
                    isActive={subinnermenu === 'muv'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('muv')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Müv Collection
                  </SubLinksA>
                </SubLinksLi>
                <SubLinksLi isActive={subinnermenu === 'bestSellers'}>
                  <SubLinksA
                    href="https://brumate.com/collections/best-sellers"
                    noBold
                    isActive={subinnermenu === 'bestSellers'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('bestSellers')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Best Sellers
                  </SubLinksA>
                </SubLinksLi>
                <SubLinksLi isActive={subinnermenu === 'deals'}>
                  <SubLinksA
                    href="https://brumate.com/collections/deals-and-steals"
                    noBold
                    isActive={subinnermenu === 'deals'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('deals')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Deals & Steals
                  </SubLinksA>
                </SubLinksLi>
                <SubLinksLi isActive={subinnermenu === 'botanicals'}>
                  <SubLinksA
                    href="https://brumate.com/collections/botanicals"
                    noBold
                    isActive={subinnermenu === 'botanicals'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('botanicals')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Botanicals Collection
                  </SubLinksA>
                </SubLinksLi>
                <SubLinksLi isActive={subinnermenu === 'tailgate'}>
                  <SubLinksA
                    href="https://brumate.com/collections/tailgate"
                    noBold
                    isActive={subinnermenu === 'tailgate'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('tailgate')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Tailgate Collection
                  </SubLinksA>
                </SubLinksLi>
                <SubLinksLi isActive={subinnermenu === 'wedding'}>
                  <SubLinksA
                    href="https://brumate.com/pages/wedding-gift-guide"
                    noBold
                    isActive={subinnermenu === 'wedding'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('wedding')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Wedding Gift Guide
                  </SubLinksA>
                </SubLinksLi>
                <SubLinksLi isActive={subinnermenu === 'glitter'}>
                  <SubLinksA
                    href="https://brumate.com/collections/glitter-rainbow"
                    noBold
                    isActive={subinnermenu === 'glitter'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('glitter')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    Glitter Rainbow
                  </SubLinksA>
                </SubLinksLi>
              </SubLinks>

            </MenuContainerCollection>
          )}

          {active === 'accesories' && (
            <MenuContainer>
              <SubLinks>
                <SubLinksLi isActive={subinnermenu === 'accesories'}>
                  <SubLinksA
                    href="https://brumate.com/collections/accessories"
                    isActive={subinnermenu === 'accesories'}
                    noBold
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('accesories')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    accesories
                  </SubLinksA>
                </SubLinksLi>

                <SubLinksLi isActive={subinnermenu === 'parts'}>
                  <SubLinksA
                    href="https://brumate.com/collections/replacement-parts"
                    noBold
                    isActive={subinnermenu === 'parts'}
                    onMouseEnter={() => {
                      if (subinnermenu === '') {
                        showSubInnerMenu('parts')
                        return
                      }
                      showSubInnerMenu('')
                    }}
                  >
                    replacement parts
                  </SubLinksA>
                </SubLinksLi>
              </SubLinks>
            </MenuContainer>
          )}
        </Heading>
      )}

      {menu === 'gift' && (
        <Heading>
          <MenuContainerTitleGift>
            <MenuTitle>GIFT SETS</MenuTitle>
          </MenuContainerTitleGift>
          <>
            <MenuContainer href="https://brumate.com/pages/custom-gift-set">
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-WineGiftSet_96580fd7-fd4c-4367-bdf7-ade174a8a894_360x.jpg?v=1618163997" />
              <ImageLegend>WINE GIFT SETS</ImageLegend>
            </MenuContainer>
            <MenuContainer href="https://brumate.com/pages/growler-custom-gift-set">
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-GrowlrGiftSet_360x.jpg?v=1618164050" />
              <ImageLegend>GROWL'R GIFT SET</ImageLegend>
            </MenuContainer>
            <MenuContainer href="https://brumate.com/pages/margtini-gift-set">
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-Web-Q1-Nav-MargtiniSet_360x.jpg?v=1618160444" />
              <ImageLegend>MARGTINI GIFT SET</ImageLegend>
            </MenuContainer>
            <MenuContainer href="https://www.brumate.com/pages/create-your-own">
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/BruMate-CreateYourOwn-FifthRocks-Nav-1000x1000_360x.jpg?v=1611673012" />
              <ImageLegend>Rocks Gift Set</ImageLegend>
            </MenuContainer>
          </>
        </Heading>
      )}

      {isMenuActive && (
        <MenuMobile>
          <CloseContainer
            id="cartClose2"
            class="absolute"
            aria-label="Close Menu"
            aria-hidden="true"
          >
            <span onMouseEnter={() => setIsMenuActive(false)} class="relative">
              CLOSE
            </span>{' '}
            <CloseSVG
              class="icon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.89 14.696l-4.734-4.734 4.717-4.717c.4-.4.37-1.085-.03-1.485s-1.085-.43-1.485-.03L9.641 8.447 4.97 3.776c-.4-.4-1.085-.37-1.485.03s-.43 1.085-.03 1.485l4.671 4.671-4.688 4.688c-.4.4-.37 1.085.03 1.485s1.085.43 1.485.03l4.688-4.687 4.734 4.734c.4.4 1.085.37 1.485-.03s.43-1.085.03-1.485z" />
            </CloseSVG>
          </CloseContainer>
          <ImageMenuMobile src={logo} />
          <ScrollableMenu>
            <H3>Shop By Beverage </H3>
            <ULScrolleable class="text-center mb-12">
              <LIScrolleable class="uppercase text-4xl font-bold mb-2">
                <AScrolleable href="www.brumate.com/collections/beer">
                  Beer
                </AScrolleable>
              </LIScrolleable>

              <LIScrolleable class="uppercase text-4xl font-bold mb-2">
                <AScrolleable href="www.brumate.com/collections/wine">
                  Wine
                </AScrolleable>
              </LIScrolleable>

              <LIScrolleable class="uppercase text-4xl font-bold mb-2">
                <AScrolleable href="www.brumate.com/collections/spirits">
                  Spirits
                </AScrolleable>
              </LIScrolleable>

              <LIScrolleable class="uppercase text-4xl font-bold mb-2">
                <AScrolleable href="www.brumate.com/collections/accessories">
                  Accessories
                </AScrolleable>
              </LIScrolleable>
            </ULScrolleable>
            <H3BYTYPE>Shop By Product Type </H3BYTYPE>
            <ProductContainer>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
            </ProductContainer>

            <ProductContainer class="flex flex-wrap">
              <Product class="w-1/2 text-center">
                <ProductLink href="www.brumate.com/collections/beer" class="">
                  <ProductImg
                    class="mx-auto"
                    src="//cdn.shopify.com/s/files/1/1114/2308/files/2_765a51f6-dfa9-4dec-92bf-bec535c9edaa_640x.jpg?v=1593637015"
                  />
                  <Productitle class="text-2xl font-bold py-6 uppercase">
                    Can Holders
                  </Productitle>
                </ProductLink>
              </Product>

              <Product class="w-1/2 text-center">
                <ProductLink href="www.brumate.com/collections/wine" class="">
                  <ProductImg
                    class="mx-auto"
                    src="//cdn.shopify.com/s/files/1/1114/2308/files/ww_640x.png?v=1594328100"
                  />

                  <Productitle class="text-2xl font-bold py-6 uppercase">
                    Wine / Champagne
                  </Productitle>
                </ProductLink>
              </Product>

              <Product class="w-1/2 text-center">
                <ProductLink
                  href="www.brumate.com/collections/spirits"
                  class=""
                >
                  <ProductImg
                    class="mx-auto"
                    src="//cdn.shopify.com/s/files/1/1114/2308/files/10-Hero1_720x_d9a34b05-4b1e-4963-91d2-1f568a12c277_640x.png?v=1594328342"
                  />

                  <Productitle class="text-2xl font-bold py-6 uppercase">
                    Cocktail / Barware
                  </Productitle>
                </ProductLink>
              </Product>

              <Product class="w-1/2 text-center">
                <ProductLink
                  href="www.brumate.com/collections/gift-sets"
                  class=""
                >
                  <ProductImg
                    class="mx-auto"
                    src="//cdn.shopify.com/s/files/1/1114/2308/files/5_b6c4df0e-de20-41cd-a1b5-6d7a0fbdd87d_640x.jpg?v=1593637124"
                  />

                  <Productitle class="text-2xl font-bold py-6 uppercase">
                    Travel Sets
                  </Productitle>
                </ProductLink>
              </Product>

              <Product class="w-1/2 text-center">
                <ProductLink
                  href="www.brumate.com/products/meet-backtap"
                  class=""
                >
                  <ProductImg
                    class="mx-auto"
                    src="//cdn.shopify.com/s/files/1/1114/2308/files/BT_640x.png?v=1594327623"
                  />

                  <Productitle class="text-2xl font-bold py-6 uppercase">
                    Coolers
                  </Productitle>
                </ProductLink>
              </Product>

              <Product class="w-1/2 text-center">
                <ProductLink href="www.brumate.com/collections/flasks" class="">
                  <ProductImg
                    class="mx-auto"
                    src="//cdn.shopify.com/s/files/1/1114/2308/files/Canteen_640x.png?v=1594327292"
                  />

                  <Productitle class="text-2xl font-bold py-6 uppercase">
                    Flasks
                  </Productitle>
                </ProductLink>
              </Product>
            </ProductContainer>
            <H3Product class="text-center text-4xl font-bold uppercase mt-8 mb-12">
              <AProduct href="www.brumate.com/collections/all">
                All Products
              </AProduct>
            </H3Product>
            <ButtonContainer class="text-center uppercase text-2xl mb-2">
              <ButtonBottom
                href="/pages/brumate-vip"
                class="btn bg-transparent text-black font-black border border-solid border-black hover:text-white hover:bg-black"
              >
                Become BrüMate VIP
              </ButtonBottom>
            </ButtonContainer>
            <LastContainer>
              <ButtonContainer class="text-center uppercase text-2xl">
                <ButtonBottom
                  href="/pages/custom-gift-set"
                  class="btn bg-transparent text-black font-black border border-solid border-black hover:text-white hover:bg-black"
                >
                  Create a Gift Set
                </ButtonBottom>
              </ButtonContainer>
            </LastContainer>
          </ScrollableMenu>
        </MenuMobile>
      )}
    </Container>
  )
}

export default Menu
