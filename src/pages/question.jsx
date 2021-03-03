import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
import withLocation from '../hoc/withLocation'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import BaseQuestionList from '../components/QuestionList/QuestionList'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import BaseCategoriesMobile from '../components/CategoriesList/CategoriesMobile'

const QuestionList = styled(BaseQuestionList)`
  margin-right: 0;
`

const CategoriesMobile = styled(BaseCategoriesMobile)`
  margin-bottom: 28px;
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
      max-width: 407px;
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

const Question = ({location}) => {
  const {title = '', opened} = location.state || {}
  console.log(opened)
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
                childMarkdownRemark {
                  html
                }
              }
            }
            title
            icon {
              file {
                url
              }
            }
            banner {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid_withWebp
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
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
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
            childMarkdownRemark {
              html
            }
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
          {!breakpoints.sm && (
            <>
              <H2>Categories</H2>
              <CategoriesList categories={newCategoriesData} />
            </>
          )}
        </Column>
        <Column style={{flex: 1}}>
          {breakpoints.sm && (
            <CategoriesMobile categories={newCategoriesData} />
          )}
          {filteredNode && (
            <QuestionList
              opened={opened}
              banner={filteredNode.banner && filteredNode.banner.fluid}
              questions={filteredNode && filteredNode.questions}
            />
          )}
        </Column>
      </Container>
    </Layout>
  )
}
export default withLocation(Question)
