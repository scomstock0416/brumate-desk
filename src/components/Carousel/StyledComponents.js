import styled from 'styled-components'
import {Link} from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
  overflow-y: scroll;
  text-align: center;
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`

const Title = styled.p`
  font-family: 'sharp_sans';
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: 600;
  margin-top: 28px;

  @media (min-width: 768px) {
    line-height: 28px;
    font-size: 20px;
    width: 100%;
    padding-bottom: 4px;  
  }

  @media (max-width: 767px) {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 6px;
  }
`

const ProductName = styled(Link)`
  font-family: 'sharp_sans';
  color: #000000;
  font-size: 10px;
  font-weight: 600;
  margin: 0 0 12px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  width: 100%;
  font-size: 15px;
  padding: 0 5px;
  display: inline-block;
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-weight: 700;
  }
`

const ProductNameNoLink = styled.p`
  font-family: 'sharp_sans';
  color: #000000;
  font-size: 10px;
  font-weight: 600;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 15px;
    font-weight: 700;
  }
`

const Icon = styled.img`
  max-height: 120px;
  margin: 15px auto 12px;

  @media (max-width: 1024px) {
    max-width: 12vw;
    padding: 0 8px;
  }

  @media (max-width: 767px) {
    max-width: 20vw;
    padding: 0 8px;
  }
  @media (min-width: 1024px) and (max-width: 1340px) {
    max-height: 110px;
  }
`

const BannerImage = styled.img`
  max-width: 100%;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  height: 178px;
  border: 1px solid #dadada;
  align-items: center;
  background-color: #ffffff;
  max-width: 190px;
  margin: 0 12px;

  @media (max-width: 1024px) {
    max-width: 16vw;
    min-height: 165px;
    height: auto;
  }

  @media (max-width: 767px) {
    max-width: 24vw;
    min-height: 155px;
  }
`

export {
  BannerImage,
  Product,
  ProductName,
  ProductNameNoLink,
  ProductsWrapper,
  Header,
  Container,
  Title,
  Icon,
}
