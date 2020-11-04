import React, {useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
import styled from 'styled-components'
import withLocation from '../hoc/withLocation'
import Layout from '../components/Layout/Layout'
import BaseQuestionList from '../components/QuestionList/QuestionList'
import BaseProducts from '../components/Products/Products'
import BaseCategoriesList from '../components/CategoriesList/CategoriesList'
import BaseCategoriesMobile from '../components/CategoriesList/CategoriesMobile'
import BaseChatBox from '../components/ChatBox/ChatBox'

const QuestionList = styled(BaseQuestionList)`
  margin-right: 0;
`

const CategoriesMobile = styled(BaseCategoriesMobile)`
  margin-bottom: 28px;
`

const Products = styled(BaseProducts)`
  margin-bottom: 28px;
`

const CategoriesList = styled(BaseCategoriesList)`
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

const ProductInner = ({location, search}) => {
  debugger
  const {title = ''} = location.state || search || {}
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

  let filteredNode = {}
  if (data && data.allContentfulQuestionType.edges) {
    try {
      const [
        {node: filteredNodeInfo},
      ] = data.allContentfulQuestionType.edges.filter(
        ({node}) => node.title === title,
      )
      filteredNode = filteredNodeInfo
    } catch (err) {
      filteredNode = {}
    }
  }

  const newCategoriesData = data.allContentfulQuestionType.edges || {}
  return (
    <Layout>
      <Container>
        <Column>
          {data && (
            <>
              <H2>Choose other products</H2>
              <Products products={data.allContentfulProduct.nodes} />
            </>
          )}
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
            <CategoriesMobile isProductFAQ categories={newCategoriesData} />
          )}
          {filteredNode && (
            <QuestionList
              banner={filteredNode.banner && filteredNode.banner.file.url}
              questions={filteredNode && filteredNode.questions}
            />
          )}
        </Column>
      </Container>
    </Layout>
  )
}
export default withLocation(ProductInner)
