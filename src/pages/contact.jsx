import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import BaseChatBox from '../components/ChatBox/ChatBox'
import {Formik, Form, Field as UnBlockField, ErrorMessage} from 'formik'

const ChatBox = styled(BaseChatBox)`
  margin-top: 28px;
`

const RawField = styled(UnBlockField)`
  display: block;
  box-sizing: content-box;
`

const RadioField = styled(RawField)`
  display: inline;
  height: 14px;
  width: 50px;
  border: 1px solid #707070;
  background-color: #ffffff;
  color: #a6a6a6;
  padding-left: 10px;

  ::placeholder {
    color: #a6a6a6;
    font-family: 'sharp_sans';
    font-size: 10px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    background-color: #ffffff;
  }
`

const TextField = styled(RawField)`
  display: inline;
  width: 50%;
  border: 1px solid #707070;
  background-color: #ffffff;
  color: #a6a6a6;
  padding: 10px;

  @media (min-width: 768px) {
    background-color: #ffffff;
  }
`

const Field = styled(RawField)`
  height: 39px;
  width: 50%;
  border: 1px solid #707070;
  background-color: #ffffff;
  color: #a6a6a6;
  padding-left: 10px;

  ::placeholder {
    color: #a6a6a6;
    font-family: 'sharp_sans';
    font-size: 10px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    background-color: #ffffff;
    width: 50%;
  }
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
    width: 100%;
    :first-of-type {
      flex-shrink: 0;
      margin-right: 50px;
      width: 217px;
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    :first-of-type {
      flex-shrink: 0;
      margin-right: 50px;
      width: 407px;
    }
  }
`

const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 0;
`

const Label = styled.label`
  font-family: 'sharp_sans';
  display: block;
  font-size: 14ox;
  line-height: 30px;
  margin-top: 0;
`

const SpacingDiv = styled.div`
  padding-bottom: 16px;
`

const Button = styled.button`
  color: white;
  padding: 10px;
  background-color: black;
`

function IndexPage() {
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

  const validate = (
    values,
    props /* only available when using withFormik */,
  ) => {
    const errors = {}

    if (values.picked === 'no') {
      if (!values.name) {
        errors.name = 'Required'
      }

      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
    }

    if (values.picked === 'yes') {
      if (!values.order) {
        errors.order = 'Required'
      }
    }

    if (values.selectType === 'change') {
      if (!values.address) {
        errors.address = 'Required'
      }
    }

    if (values.selectType === 'add') {
      if (!values.item) {
        errors.item = 'Required'
      }
    }

    if (!values.description) {
      errors.description = 'Required'
    }

    return errors
  }

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
        <Column isSecond>
          <H2>Contact Form</H2>
          <Formik
            initialValues={{
              picked: '',
            }}
            validate={validate}
          >
            {({values, isValid}) => (
              <FormikForm
                name="contact-demo"
                data-netlify-recaptcha="true"
                data-netlify={true}
              >
                <SpacingDiv role="group" aria-labelledby="my-radio-group">
                  <Label>Do you have your order number? </Label>
                  <Label>
                    <RadioField type="radio" name="picked" value="yes" />
                    Yes
                  </Label>
                  <Label>
                    <RadioField type="radio" name="picked" value="no" />
                    No
                  </Label>
                </SpacingDiv>
                {values.picked && values.picked === 'no' && (
                  <SpacingDiv>
                    <Label htmlFor="name">Name: </Label>
                    <Field name="name" />
                    <ErrorMessage name="name" />

                    <Label htmlFor="email">Email: </Label>
                    <Field name="email" />
                    <ErrorMessage name="email" />
                  </SpacingDiv>
                )}
                {values.picked && values.picked === 'yes' && (
                  <SpacingDiv>
                    <Label htmlFor="order">Order number: </Label>
                    <Field name="order" />
                    <ErrorMessage name="order" />
                  </SpacingDiv>
                )}

                <SpacingDiv>
                  <Label>What’s the problem? </Label>
                  <UnBlockField as="select" name="selectType">
                    <option value="selecting">--Select--</option>
                    <option value="cancel">Cancel</option>
                    <option value="change">Change address</option>
                    <option value="add">Add/remove item</option>
                    <option value="damage">Damage</option>
                    <option value="other">Other</option>
                  </UnBlockField>
                </SpacingDiv>

                {values.selectType && values.selectType === 'change' && (
                  <SpacingDiv>
                    <Label htmlFor="address">
                      Provide new/updated address:{' '}
                    </Label>
                    <Field name="address" />
                    <ErrorMessage name="address" />
                  </SpacingDiv>
                )}

                {values.selectType && values.selectType === 'add' && (
                  <SpacingDiv>
                    <label htmlFor="item">
                      Provide item that needs to be changed or removed:
                    </label>
                    <Field name="item" />
                    <ErrorMessage name="item" />
                  </SpacingDiv>
                )}

                {values.selectType && values.selectType === 'damage' && (
                  <SpacingDiv>
                    <label htmlFor="imageDamage">
                      Provide image of damage:{' '}
                    </label>
                    <Field
                      name="image"
                      type="file"
                      placeholder="Please upload an image"
                    />
                  </SpacingDiv>
                )}
                {values.selectType !== 'selecting' && (
                  <>
                    <SpacingDiv>
                      <TextField
                        name="description"
                        as="textarea"
                        placeholder="Description"
                      />
                      <ErrorMessage name="description" />
                    </SpacingDiv>
                    <SpacingDiv>
                      <Button disabled={!isValid} type="submit">
                        Send
                      </Button>
                    </SpacingDiv>
                  </>
                )}
              </FormikForm>
            )}
          </Formik>
        </Column>
      </Container>
    </Layout>
  )
}

export default IndexPage
