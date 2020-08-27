import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import RectangleMenu from '../components/RectangleMenu/RectangleMenu';
import QuestionList from '../components/QuestionList/QuestionList';
import ContactUs from '../components/ContactUs/ContactUs';


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
`;

const LineContainer = styled.div`
    @media (min-width: 769px) {
      :first-of-type{
        flex: 1;
        margin-right: 36px;
      }
      
    }
`;

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
`;

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;  
`;


const IndexPage = () => {
    const data = useStaticQuery(graphql`{
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
                  product {
                    id
                  }
                  icon {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }                  
      `);

    const { questions: popularFAQ } = data.allContentfulQuestionType.edges
      && data.allContentfulQuestionType.edges[3].node;
    return (
        <Layout>
            <Container>
                {data.allContentfulQuestionType.edges.map(({
                    node,
                }) => {
                    if (node.product) {
                        return (<></>);
                    }
                    const {
                        title,
                        id,
                        questions,
                        icon,
                    } = node;
                    const {
                        file: {
                            url = '',
                        } = {},
                    } = icon || {};
                    return (
                        <Item>
                            <RectangleMenu
                                title={title}
                                key={id}
                                questions={questions || []}
                                icon={url}
                            />
                        </Item>
                    );
                })}
            </Container>
            <Container>
                <LineContainer>
                    <H2>Check out the popular FAQ</H2>
                    <QuestionList questions={popularFAQ} />
                </LineContainer>
                <LineContainer>
                    <H2>Contact us</H2>
                    <ContactUs />
                </LineContainer>
            </Container>

        </Layout>
    );
};

export default IndexPage;
