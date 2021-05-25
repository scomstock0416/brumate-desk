import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import Footer from '../Footer/Footer'
import TopMenu from '../Header/Header'
import Menu from '../Menu/Menu'
import Banner from '../Banner/Banner'
import GlobalStyle, { theme } from '../../theme/theme'
import QuestionList from '../QuestionList/QuestionList'
import OutsideAlerter from './OutsideAlerter'
import 'normalize.css'

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

const Main = styled.main`
  background-color: #fafafa;
  padding: 20px 0;
  @media (min-width: 768px) {
    padding: 100px 0;
  }
`

const Layout = ({ children }) => {
  const [questionList, setQuestionsList] = useState([])
  const [menu, setMenu] = useState('opened')

  useEffect(() => {
    // eslint-disable
    (function (_) {
      _.GORGIAS_CHAT_APP_ID = "338";
      _.GORGIAS_CHAT_BASE_URL = "us-east1-898b.production.gorgias.chat";
      _.GORGIAS_API_BASE_URL = "config.gorgias.chat";
      var e = new XMLHttpRequest;
      e.open("GET", "https://config.gorgias.chat/applications/338", !0);
      e.onload = function (t) {
        if (4 === e.readyState)
          if (200 === e.status) {
            var n = JSON.parse(e.responseText);
            if (!n.application || !n.bundleVersion)
              throw new Error("Missing fields in the response body - https://config.gorgias.chat/applications/338");
            if (_.GORGIAS_CHAT_APP = n.application, _.GORGIAS_CHAT_BUNDLE_VERSION = n.bundleVersion, n && n.texts && (_.GORGIAS_CHAT_TEXTS = n.texts), !document.getElementById("gorgias-chat-container")) {
              var o = document.createElement("div");
              o.id = "gorgias-chat-container";
              document.body.appendChild(o);
              const _ = document.createElement("script");
              _.setAttribute("defer", !0);
              _.src = "https://storage.googleapis.com/gorgias-chat-production-client-builds/{bundleVersion}/static/js/main.js".replace("{bundleVersion}", n.bundleVersion);
              document.body.appendChild(_)
            }
          } else
            console.error("Failed request GET - https://config.gorgias.chat/applications/338")
      };
      e.onerror = function (_) { console.error(_) };
      e.send();
    })(window || {});
  }, [])

  const closeMenu = () => {
    setMenu('')
  }

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
      allContentfulQuestions(sort: {fields: order}) {
        nodes {
          answer {
            answer
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
          order
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <OutsideAlerter fxn={closeMenu}>
        <header>
          <TopMenu />
          <Menu closeMenuFxn={menu} />
          {data && (
            <Banner
              setQuestionsList={setQuestionsList}
              questions={data.allContentfulQuestions.nodes}
              title="Help Center"
            />
          )}
        </header>
      </OutsideAlerter>
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
  )
}

export default Layout
