import styled from 'styled-components'
import {Link} from 'gatsby'

const Container = styled.div`
  max-width: 100%;
  margin: 20 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-flow: column;
  height: auto;
  background: white;
  @media (min-width: 767px) {
    max-width: 407px;
    padding: 0 16px 0 30px;
  }

  @media (min-width: 1024px) {
    max-width: 407px;
    padding: 0 16px 0 30px;
  }
`

const Ul = styled.div`
  max-width: 100%;
  margin: 20 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-flow: column;
  height: auto;
  background: white;
  @media (min-width: 767px) {
    max-width: 407px;
    padding: 0 16px 0 30px;
  }
`

const Header = styled(Link)`
  max-width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
  }
`

const HeaderMobile = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
  }
`

const IconTitle = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 16px;
  margin-left: 16px;
`

const Inner = styled.div``

const Li = styled.div``

const Title = styled.h2`
  color: #000;
  font-size: 12px;
  padding: 11px 0;
  font-weight: 600;
  flex: 1;
  font-family: 'sharp_sans';

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

const TitleMobile = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  z-index: 10;
  text-decoration: none;
  padding: 15px 0;
  font-family: 'sharp_sans';
`

export {
  Container,
  Header,
  IconTitle,
  Title,
  HeaderMobile,
  TitleMobile,
  Inner,
  Ul,
  Li,
}
