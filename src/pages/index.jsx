import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import RectangleMenu from '../components/RectangleMenu/RectangleMenu'
import QuestionList from '../components/QuestionList/QuestionList'
import ContactUs from '../components/ContactUs/ContactUs'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 20px;
  flex-direction: column;

  @media (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: calc(100% - 7%);
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
  }
`

const LineContainer = styled.div`
  @media (min-width: 769px) {
    :first-of-type {
      flex: 1;
      margin-right: 36px;
    }
  }
`

const Item = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding-bottom: 18px;

  @media (min-width: 767px) {
    padding: 0;
    flex-grow: 1;
    width: 100%;
    max-width: 341px;
    padding-bottom: 35px;
  }

  @media (min-width: 1024px) {
    padding: 0;
    flex-grow: 1;
    max-width: 437px;
    max-width: auto;
    padding-bottom: 60px;
  }
`

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulQuestionType(sort: {fields: order}) {
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
                childMarkdownRemark {
                  html
                }
              }
              featured
              popular
            }
            title
            product {
              id
              featured
            }
            icon {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulQuestions(filter: {popular: {eq: true}}) {
        nodes {
          id
          answer {
            childMarkdownRemark {
              html
            }
            answer
            id
          }
          featured
          popular
          question {
            id
            question
          }
          typeQuestion {
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container>
        {data.allContentfulQuestionType.edges.map(({node}) => {
          if (node.product) {
            return <></>
          }

          const {title, id, icon, questions} = node
          let filteredQuestions = []
          if (title === 'Product FAQ') {
            const gettingNodesWithProducts = data.allContentfulQuestionType.edges.filter(
              ({node: nodeProducts}) => nodeProducts.product,
            )
            const questionsFromProducts = gettingNodesWithProducts
              .filter(({node}) => {
                return node.product.featured === true
              })
              .map(({node: nodeProductsFiltered}) => ({
                question: {
                  question: nodeProductsFiltered.title,
                },
              }))
            filteredQuestions = questionsFromProducts
          } else {
            filteredQuestions =
              questions && questions.filter(({featured}) => featured === true)
          }
          const {file: {url = ''} = {}} = icon || {}
          return (
            <Item>
              <RectangleMenu
                title={title}
                key={id}
                questions={filteredQuestions || []}
                icon={url}
              />
            </Item>
          )
        })}
      </Container>
      <Container>
        <LineContainer>
          <H2>Check out the popular FAQ</H2>
          {data.allContentfulQuestions && (
            <QuestionList questions={data.allContentfulQuestions.nodes} />
          )}
        </LineContainer>
        <LineContainer>
          <H2>Contact us</H2>
          <ContactUs />
        </LineContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
