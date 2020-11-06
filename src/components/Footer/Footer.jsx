import React, {useState} from 'react'
import styled from 'styled-components'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'

const Container = styled.div`
  background: black;
  padding-bottom: 50px;
  padding-top: 50px;
  padding-left: 15px;
  padding-right: 15px;
`

const Image = styled.img`
  max-width: 250px;
  text-align: center;
  margin: 0 auto;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  flex-grow: 1;
  padding: 0px;
  justify-content: space-between;
  padding: 10px 0px 5px;
  border-bottom: 1px solid white;
`

const SuscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
`

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 0px 0px 0px 16px;
  height: 38px;
  text-align: left;
  color: rgb(0, 0, 0);
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(208, 51, 31);
  height: 50px !important;
  border-radius: 0 !important;
  line-height: 50px !important;
  background-color: transparent !important;
  border: 0 !important;
  padding-left: 0 !important;
  color: #fff !important;
`

const Button = styled.button`
  position: relative;
  padding: 11px 10px;
  background: rgb(48, 59, 67);
  border-radius: 2px;
  border-style: none;
  border-color: rgb(0, 0, 0);
  border-width: 0px;
  color: rgb(255, 255, 255);
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 1;
  white-space: normal;
  text-align: center;
  word-break: break-word;
  align-self: flex-end;
  cursor: pointer;
  height: 50px !important;
  border-radius: 100px !important;
  padding: 0 !important;
  background: transparent !important;
  width: 120px !important;
  text-transform: uppercase !important;
  line-height: 55px !important;
  text-align: right !important;
`

const InnerContainer = styled.div`
  background: black;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1450px) {
    max-width: 1370px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 27px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    margin-bottom: 3rem;
  }
`

const UL = styled.ul`
  color: white;
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
  padding-left: 45px;
  @media (min-width: 1024px) {
    padding-left: 0px;
  }
`

const LI = styled.li`
  color: white;
  text-decoration: none;
  display: block;
  /* display: none; */
  @media (min-width: 1024px) {
    display: block;
  }
`

const A = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.48px;
  line-height: 29px;
  text-transform: uppercase;
  font-family: 'architecta';
`

const CopyRight = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 auto;
  letter-spacing: 0.1em;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 11.25px;
`

const FollowText = styled.p`
  font-family: arial;
  font-size: 13.5px;
  color: white;
  text-align: justify;
  margin: 0;
  letter-spacing: 0.025em;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
`

const LogoContainer = styled.div`
  text-align: center;
  width: 100%;
  @media (min-width: 1025px) {
    width: 33.33%;
  }
`

const H4 = styled.h4`
  font-family: 'architecta';
  font-size: 20.25px;
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
  text-transform: uppercase;
  display: flex;
  @media (min-width: 1025px) {
    margin-bottom: 0.5rem;
  }
`

const ContainerMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 1025px) {
    text-align: left;
    flex-direction: row;
    align-items: flex-start;
    width: 66.7%;
  }
`

const SignUpContainer = styled.div`
  margin-top: 9px;
  border: 1px solid #e2e8f0;
  padding-top: 9px;
  padding-bottom: 9px;
`

const SignUpText = styled.a`
  font-size: 1.6rem;
  line-height: 30px;
  color: white;
  font-family: 'architecta';
  font-weight: 400;
  font-style: normal;
`

const SVG = styled.svg`
    display: inline;
    width: 16px;
    padding-right: 20px;
    margin-left: 10px;
     @media (min-width: 769px) {
        display: none;
     }
}
`

const InnerMenu = styled.div`
  width: 100%;

  @media (min-width: 1025px) {
    width: calc(100% / 4);
  }
`

const Footer = () => {
  const breakpoints = useBreakpoint()
  const [isActiveShop, setisActiveShop] = useState(false)
  const [isActiveHelp, setisActiveHelp] = useState(false)
  const [isActiveBrand, setisActiveBrand] = useState(false)

  const handleClick = term => {
    switch (term) {
      case 'shop':
        setisActiveShop(!isActiveShop)
        break
      case 'help':
        setisActiveHelp(!isActiveHelp)
        break
      case 'brand':
        setisActiveBrand(!isActiveBrand)
        break
      default:
        break
    }
  }

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <ContainerMenu>
            <InnerMenu>
              <H4 onClick={() => handleClick('shop')}>
                <SVG
                  height="30"
                  viewBox="0 0 512 512"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"
                  />
                </SVG>
                Shop
              </H4>

              {(!breakpoints.md || isActiveShop) && (
                <UL isShop className="uppercase ">
                  <LI>
                    <A href="/collections">Collections</A>
                  </LI>

                  <LI>
                    <A href="/collections/wine">Wine</A>
                  </LI>

                  <LI>
                    <A href="/collections/beer">Beer</A>
                  </LI>

                  <LI>
                    <A href="/collections/spirits">Spirits</A>
                  </LI>

                  <LI>
                    <A href="/pAges/custom-gift-set">Gift Sets</A>
                  </LI>

                  <LI>
                    <A href="/products/brumate-e-gift-card">GIFT CARDS</A>
                  </LI>
                </UL>
              )}
            </InnerMenu>
            <InnerMenu>
              <H4 onClick={() => handleClick('help')}>
                <SVG
                  height="30"
                  viewBox="0 0 512 512"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"
                  />
                </SVG>
                HELP
              </H4>
              {(!breakpoints.md || isActiveHelp) && (
                <UL>
                  <LI>
                    <A href="/pages/faq">FAQ</A>
                  </LI>

                  <LI>
                    <A href="/apps/store-locator/">STORE LOCATOR</A>
                  </LI>

                  <LI>
                    <A href="/pages/media-inquiries">MEDIA INQUIRIES</A>
                  </LI>

                  <LI>
                    <A href="/pages/contact">Contact Us</A>
                  </LI>

                  <LI>
                    <A href="https://returns.brumate.com/">RETURNS</A>
                  </LI>

                  <LI>
                    <A href="/pages/miLItary-discount">MILITARY DISCOUNT</A>
                  </LI>
                </UL>
              )}
            </InnerMenu>
            <InnerMenu>
              <H4 onClick={() => handleClick('brand')}>
                <SVG
                  height="30"
                  viewBox="0 0 512 512"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"
                  />
                </SVG>
                BRAND
              </H4>
              {(!breakpoints.md || isActiveBrand) && (
                <UL>
                  <LI>
                    <A href="/pages/our-story">About Us</A>
                  </LI>
                  <LI>
                    <A href="/pages/brumate-vip">VIP</A>
                  </LI>

                  <LI>
                    <A href="/pages/become-a-dealer">become a dealer</A>
                  </LI>

                  <LI>
                    <A href="/blogs/articles">Blog</A>
                  </LI>

                  <LI>
                    <A href="/pages/warranty">Warranty</A>
                  </LI>
                  <LI>
                    <A href="/pages/warranty">PRIVACY POLICY</A>
                  </LI>
                  <LI>
                    <A href="/pages/warranty">TERMS AND CONDITIONS</A>
                  </LI>
                  <LI>
                    <A href="/pages/warranty">INTEREST BASED ADVERTISING</A>
                  </LI>
                  <LI>
                    <A href="/pages/warranty">DO NOT SHARE MY INFORMATION</A>
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
              Keep the buzz going with our newsletter to get the inside scoop on
              new products, discounts, drink recipes and more.
            </FollowText>
            <SuscribeContainer>
              <InputContainer>
                <Input
                  type="email"
                  name="email"
                  tabIndex="0"
                  placeholder="Enter your email"
                />
                <Button type="button" tabIndex="0">
                  Subscribe
                </Button>
              </InputContainer>
            </SuscribeContainer>
            <SignUpContainer>
              <SignUpText>Sign up for VIP text messages</SignUpText>
            </SignUpContainer>
          </LogoContainer>
        </Wrapper>

        <CopyRight>Copyright © 2020 BRUMATE LLC</CopyRight>
      </InnerContainer>
    </Container>
  )
}

export default Footer
