import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../Footer/Footer';
import TopMenu from '../Header/Header';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import GlobalStyle, { theme } from '../../theme/theme';
import QuestionList from '../QuestionList/QuestionList';
import 'normalize.css';


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

const Main = styled.main`
    background-color: #fafafa;
    padding: 20px 0;
    @media (min-width: 768px) { 
        padding: 100px 0;
    }
`;

const Layout = ({ children }) => {
    const [questionList, setQuestionsList] = useState([]);
    const data = useStaticQuery(graphql`{
            allContentfulQuestionType (sort: {fields: order}){
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
      `);
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet" />
            </Helmet>
            <GlobalStyle />
            <header>
                <TopMenu />
                <Menu />
                {data && <Banner setQuestionsList={setQuestionsList} questions={data.allContentfulQuestions.nodes} title="Help Center" />}
            </header>
            <Main>
                {questionList.length > 0 && (
                    <Container>
                        <QuestionList isSearching questions={questionList} />
                    </Container>
                )}
                {children}
            </Main>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
