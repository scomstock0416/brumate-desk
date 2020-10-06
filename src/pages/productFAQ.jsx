import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
import Layout from '../components/Layout/Layout'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import BaseCategoriesMobile from '../components/CategoriesList/CategoriesMobile'
import BaseChatBox from '../components/ChatBox/ChatBox'
import BaseProductList from '../components/ProductList/ProductList'
import MobileProductList from '../components/MobileProductList/MobileProductList'

const ProductList = styled(BaseProductList)`
  flex: 1;
`

const CategoriesMobile = styled(BaseCategoriesMobile)`
  margin-bottom: 28px;
`

const ChatBox = styled(BaseChatBox)`
  margin-top: 28px;
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 0;
  flex-direction: column-reverse;

  @media (min-width: 767px) {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Column = styled.div`
  @media (min-width: 768px) {
    :first-of-type {
      flex-shrink: 0;
      margin-right: 50px;
      width: 217px;
    }
  }
  @media (min-width: 1024px) {
    :first-of-type {
      flex-shrink: 0;
      margin-right: 50px;
      width: 407px;
    }
  }
`

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 0;
`

const ProductFQA = () => {
  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    {
      allContentfulQuestionType {
        edges {
          node {
            id
            questions {
              question {
                question
                id
              }
              answer {
                answer
              }
            }
            title
            icon {
              file {
                url
              }
            }
            banner {
              file {
                url
              }
            }
            product {
              id
            }
          }
        }
      }
      allContentfulProduct {
        nodes {
          name
          banner {
            file {
              url
            }
          }
          type
          questiontype {
            title
          }
        }
      }
      allContentfulQuestions {
        nodes {
          answer {
            answer
          }
          question {
            question
            id
          }
          typeQuestion {
            title
          }
        }
      }
    }
  `)

  const newCategoriesData = data.allContentfulQuestionType.edges || {}
  return (
    <Layout>
      <Container>
        <Column>
          {!breakpoints.sm && (
            <>
              <H2>Categories</H2>
              <CategoriesList categories={newCategoriesData} />
            </>
          )}
          <ChatBox />
        </Column>
        <Column>
          {breakpoints.sm && (
            <CategoriesMobile categories={newCategoriesData} isProductFAQ />
          )}
          {data && breakpoints.sm && (
            <MobileProductList
              categories={newCategoriesData}
              products={data.allContentfulProduct.nodes}
            />
          )}
          {data && !breakpoints.sm && (
            <ProductList
              categories={newCategoriesData}
              products={data.allContentfulProduct.nodes}
            />
          )}
        </Column>
      </Container>
    </Layout>
  )
}
export default ProductFQA
