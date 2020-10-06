import React, {useState, useEffect} from 'react'
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {navigate} from 'gatsby'
import BannerURL from '../../images/productFAQ.png'
import {
  ProductsWrapper,
  Container,
  Header,
  Title,
  Icon,
  Product,
  ProductName,
  BannerImage,
  // ProductNameNoLink,
} from './StyledComponents'

function compare(a, b) {
  if (a.type[0] < b.type[0]) {
    return -1
  }
  if (a.type[0] > b.type[0]) {
    return 1
  }
  return 0
}

const ProductList = ({className, products}) => {
  const [shownProducts, setShownProducts] = useState([])
  const [productTypes, setProductTypes] = useState([])

  useEffect(() => {
    const newTypes = products.reduce(
      (acc, product) =>
        Array.isArray(product.type) ? acc.concat(product.type) : acc,
      [],
    )

    const setTypes = new Set(newTypes)
    const typesArr = [...setTypes]
    const filteredTypes = typesArr.filter(type => type !== 'Cooler')
    const coolers = [...filteredTypes, 'Cooler']
    setProductTypes([...coolers])

    const organizedProducts = products.sort(compare)
    setShownProducts(organizedProducts)
  }, [])

  return (
    <Container className={className}>
      <BannerImage src={BannerURL} alt="BannerURL" />
      <Header>
        {productTypes.map((type, index) => (
          <ProductsWrapper moreWidth={index === 1}>
            <Title>{type}</Title>
            {shownProducts
              .filter(({type: typeProduct}) => type === typeProduct[0])
              .map(({name, banner, questiontype}) => {
                const questionType = questiontype ? questiontype[0].title : ''
                return (
                  <Product
                    onClick={() => {
                      navigate('/productInner/', {state: {title: questionType}})
                    }}
                  >
                    {banner && banner.file && (
                      <Icon
                        onClick={() => {
                          navigate('/productInner/', {
                            state: {title: questionType},
                          })
                        }}
                        alt={name}
                        src={banner.file.url}
                      />
                    )}
                    <ProductName
                      to="/productInner/"
                      state={{
                        title: questionType,
                      }}
                    >
                      {name}
                    </ProductName>
                  </Product>
                )
              })}
          </ProductsWrapper>
        ))}
      </Header>
    </Container>
  )
}

export default ProductList
