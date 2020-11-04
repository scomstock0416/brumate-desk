/* eslint-disable max-len */
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
  display: flex;
  width: calc(100% / 8);
  align-items: center;
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
  font-family: 'sharp_sans';
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
  background: ${({isActive}) => (isActive ? 'black' : 'white')};
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
  color: ${({isActive}) => (isActive ? 'white' : 'black')};
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

const Menu = ({className}) => {
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
  return (
    <Container>
      <Nav className={className}>
        <SVG
          onClick={() => setIsMenuActive(true)}
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
              onClick={() => {
                if (menu == '') {
                  showMenu('shop')
                  showInnerMenu('wine')
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
              onClick={() => {
                if (menu == '') {
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
              onClick={() => {
                if (menu == '') {
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
        <Image src={logo} />
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
              <SubLinksLi isActive={active === 'wine'}>
                <SubLinksA
                  isActive={active === 'wine'}
                  onClick={() => {
                    if (active === '' || active !== 'wine') {
                      showInnerMenu('wine')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="wine"
                >
                  Wine
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'beer'}>
                <SubLinksA
                  isActive={active === 'beer'}
                  onClick={() => {
                    if (active === '' || active !== 'beer') {
                      showInnerMenu('beer')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="beer"
                >
                  Beer
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'spirits'}>
                <SubLinksA
                  isActive={active === 'spirits'}
                  onClick={() => {
                    if (active === '' || active !== 'spirits') {
                      showInnerMenu('spirits')
                      return
                    }
                    showInnerMenu('')
                  }}
                  data-target="spirits"
                >
                  Spirits
                </SubLinksA>
              </SubLinksLi>

              <SubLinksLi isActive={active === 'coolers'}>
                <SubLinksA
                  isActive={active === 'coolers'}
                  onClick={() => {
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

              <SubLinksLi isActive={active === 'accesories'}>
                <SubLinksA
                  isActive={active === 'accesories'}
                  onClick={() => {
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

              <SubLinksLi isActive={active === 'shop'}>
                <SubLinksA
                  isActive={active === 'shop'}
                  onClick={() => {
                    if (active === '' || active !== 'shop') {
                      showInnerMenu('shop')
                      return
                    }
                    showInnerMenu('')
                  }}
                >
                  Shop by color
                </SubLinksA>
              </SubLinksLi>
            </SubLinks>
          </MenuContainerTitle>
          {active === 'wine' && (
            <>
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
            </>
          )}

          {active === 'beer' && (
            <>
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
            </>
          )}

          {active === 'spirits' && (
            <>
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
            </>
          )}

          {active === 'coolers' && (
            <>
              <MenuContainer>
                <ImageMenu src="//cdn.shopify.com/s/files/1/1114/2308/files/BackTapImage_e191ad6c-8b68-48d5-a65c-64aaee274a98_360x.jpg?v=1594935448" />
                <ImageLegend>COOLERS</ImageLegend>
              </MenuContainer>
            </>
          )}

          {active === 'accesories' && (
            <MenuContainer>
              <SubLinks>
                <SubLinksLi isActive={subinnermenu === 'accesories'}>
                  <SubLinksA
                    isActive={subinnermenu === 'accesories'}
                    noBold
                    onMouseEnter={() => {
                      if (subinnermenu == '') {
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
                    noBold
                    isActive={subinnermenu === 'parts'}
                    onMouseEnter={() => {
                      if (subinnermenu == '') {
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

          {active === 'shop' && (
            <>
              <ShopContainer id="nav_shop_by_colors">
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=9&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/merdiot_f90e4436-2c4c-4046-8276-8a90d3188954.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=10&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/Rose_Gold_a8a9cf15-cf41-44b5-941f-3eddae46e9b3.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=11&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/Peacock_dec3e425-379b-434d-9e8d-2600cb451d79.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=12&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/Charcoal_9dc00feb-8f65-45de-825f-7a28b17f4265.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=13&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/aqva_d1fb9f6d-dfca-4273-978b-9f813a8e3d49.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=14&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/purple_2abee730-f1e9-47b3-9e07-28752823e1d9.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=16&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/carara-gliter_c4a382ec-de68-43b7-aa00-2cc5f1d7a505.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=17&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/roes-gold_a0b5131b-a4f8-4ed7-bb3d-42e68333dc97.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=18&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/pink_a576d936-6491-434e-b60a-2c0d76006833.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=19&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/gold_cfeba9dd-f42f-43b6-9110-b8e2169b7d93.png" />
                  </a>
                </ColorContainer>
                <ColorContainer class="w-1/4">
                  <a href="/collections/shop-by-color?data-id=48&amp;data-themeid=1">
                    <ImageColor src="https://custom-app.s3.amazonaws.com/uploads/swatch_image/MERLOT_83b3c61a-dca7-4697-8423-e393310bddf3.png" />
                  </a>
                </ColorContainer>
              </ShopContainer>
            </>
          )}
        </Heading>
      )}

      {menu === 'gift' && (
        <Heading>
          <MenuContainerTitleGift>
            <MenuTitle>GIFT SETS</MenuTitle>
          </MenuContainerTitleGift>
          <>
            <MenuContainer>
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/gift-img_360x_e72df0e0-0f53-4857-8c96-b2cfdd6681a4_360x.jpg?v=1572887573" />
              <ImageLegend>WINE GIFT SETS</ImageLegend>
            </MenuContainer>
            <MenuContainer>
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/growl_360x_93465b4b-5d3b-4b11-ad10-842272e8875b_360x.jpg?v=1572887303https://cdn.shopify.com/s/files/1/1114/2308/files/0Y0A54872_360x.jpg?v=1575579975" />
              <ImageLegend>GROWL'R GIFT SET</ImageLegend>
            </MenuContainer>
            <MenuContainer>
              <ImageMenu src="https://cdn.shopify.com/s/files/1/1114/2308/files/MargTini_360x_46ceb45e-56fe-4f12-96c8-ce01ead64b9f_360x.jpg?v=1572887373" />
              <ImageLegend>MARGTINI GIFT SET</ImageLegend>
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
            <span onClick={() => setIsMenuActive(false)} class="relative">
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
