import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  background-color: #000;
`

const Wrapper = styled.div`
  position: relative;
  /* width: 100%; */
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
    max-width: 1400px;
  }
  margin: 0 auto;
`

const Rectangle = styled.div`
  display: none;
  width: 150px;
  text-align: center;
  color: #ffffff;
  background-color: #303030;
  padding: 20px 0;
  font-size: 11px;
  font-family: 'architecta';
  box-sizing: border-box;
  @media (min-width: 769px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 150px;
    padding: 0 10px;
    text-align: center;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    color: #ffffff;
    background: #303030;
    margin: auto;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 43px;
  }
`

const P = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 13.5px;
  font-family: 'architecta';
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 16.875px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 0px;
`

const TopMenu = ({className}) => (
  <Container>
    <Wrapper className={className}>
      <P>
        FREE SHIPPING & RETURNS ON US ORDERS OVER $60
        <Rectangle>SHOP NOW</Rectangle>
      </P>
    </Wrapper>
  </Container>
)

export default TopMenu
