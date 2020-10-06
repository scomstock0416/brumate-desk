import styled from 'styled-components'
import {Link} from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
  overflow-y: scroll;
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: ${({moreWidth}) => (moreWidth ? 'row' : ' column')};
  flex: ${({moreWidth}) => moreWidth && '2'};
  flex-flow: ${({moreWidth}) => moreWidth && 'wrap'};
  align-content: ${({moreWidth}) => moreWidth && 'baseline'};
  max-width: ${({moreWidth}) => moreWidth && '40%'};
  justify-content: ${({moreWidth}) => moreWidth && 'center'};
  flex-flow: wrap;
  justify-content: space-between;
}
`

const Title = styled.p`
  font-family: 'sharp_sans';
  color: ;
  color: ${({active}) => (active ? '#000000' : '#D9D9D9')};
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  @media (min-width: 768px) {
    line-height: 28px;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
  }
`

const ProductName = styled(Link)`
  font-family: 'sharp_sans';
  color: #000000;
  font-size: 10px;
  font-weight: 600;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 9px;
    font-weight: 700;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
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
  max-height: 40px;

  @media (min-width: 768px) {
    max-width: 70px;
    max-height: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 120px;
    max-height: 100%;
  }
`

const BannerImage = styled.img`
  max-width: 100%;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 89px;
  height: 90px;
  border: 1px solid #dadada;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 89px;
    height: 90px;
    margin: 0px 10px 28px;
  }

  @media (min-width: 1024px) {
    width: 155px;
    height: 147px;
    margin: 0px 10px 28px;
  }
`

const TypesContainer = styled.div`
  display: flex;
  width: 88vw;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
`

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  TypesContainer,
  ProductsContainer,
}
