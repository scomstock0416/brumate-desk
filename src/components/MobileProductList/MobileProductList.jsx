import React, {useState, useEffect} from 'react'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
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
  TypesContainer,
  ProductsContainer,
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

const MobileProductList = ({className, products}) => {
  const breakpoints = useBreakpoint()
  const [shownProducts, setShownProducts] = useState([])
  const [activeType, setActiveType] = useState([])
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
    setActiveType(filteredTypes[0])

    const organizedProducts = products.sort(compare)
    setShownProducts(organizedProducts)
  }, [])

  const handleActive = type => {
    type !== activeType && setActiveType(type)
  }

  return (
    <Container className={className}>
      <BannerImage src={BannerURL} alt="BannerURL" />
      <Header>
        <ProductsContainer>
          <TypesContainer>
            {productTypes.map((type, index) => (
              <Title
                active={type === activeType}
                onClick={() => {
                  setActiveType(type)
                }}
              >
                {type}
              </Title>
            ))}
          </TypesContainer>
          {productTypes.map((type, index) => (
            <ProductsWrapper>
              {shownProducts
                .filter(
                  ({type: typeProduct}) =>
                    type === typeProduct[0] && activeType === typeProduct[0],
                )
                .map(({name, banner, questiontype}) => {
                  const questionType = questiontype ? questiontype[0].title : ''
                  return (
                    <Product
                      onClick={() => {
                        navigate('/productInner/', {
                          state: {title: questionType},
                        })
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
        </ProductsContainer>
      </Header>
    </Container>
  )
}

export default MobileProductList
