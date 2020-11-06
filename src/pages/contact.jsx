import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import BaseChatBox from '../components/ChatBox/ChatBox'
import {
  Formik,
  Form,
  Field as UnBlockField,
  ErrorMessage as RawErrorMessage,
} from 'formik'

const ErrorMessage = styled(RawErrorMessage)`
  color: #dc3545;
`

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

const SelectField = styled(RawField)`
  height: 40px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #efefef;
  background-color: #ffffff;
  color: #a6a6a6;

  @media (min-width: 768px) {
  }
`

const Field = styled(RawField)`
  height: ${({height}) => (height ? '120px' : '40px')};
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #efefef;
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
    max-width: 98%;
    margin-right: 2%;
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

// const FormikForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
// `

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 0;
  text-align: center;
`

const Label = styled.label`
  font-family: 'architecta';
  display: block;
  font-size: 24px;
  line-height: 30px;
  margin-top: 0;
  font-weight: 300;
`

const SpacingDiv = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
`

const SpacingDivColumn = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Button = styled.input`
  color: white;
  padding: 10px 30px;
  background-color: #343a40;
  border-color: #343a40;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid transparent;
  border-radius: 5px;
  max-width: 50%;
  margin: 0 auto;
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

  const newCategoriesData = data.allContentfulQuestionType.edges || {}

  const validate = (
    values,
    props /* only available when using withFormik */,
  ) => {
    const errors = {}

    if (values.picked === 'no') {
      if (!values.nameClient) {
        errors.nameClient = 'Required'
      }

      if (!values.emailClient) {
        errors.emailClient = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailClient)
      ) {
        errors.emailClient = 'Invalid email address'
      }
    }

    if (values.picked === '') {
      errors.picked = 'Required'
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

    if (values.description === '') {
      errors.description = 'Required'
    }

    return errors
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = values => {
    console.log('values', values)
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', ...values}),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
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
            onSubmit={handleSubmit}
          >
            {({values, isValid}) => (
              <Form
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <SpacingDivColumn role="group" aria-labelledby="my-radio-group">
                  <Label>Do you have your order number? </Label>
                  <Label>
                    <RadioField type="radio" name="picked" value="yes" />
                    yes
                  </Label>
                  <Label>
                    <RadioField type="radio" name="picked" value="no" />
                    no
                  </Label>
                </SpacingDivColumn>
                <ErrorMessage name="picked" />
                {values.picked && values.picked === 'no' && (
                  <SpacingDivColumn>
                    <DivCol>
                      <Label htmlFor="nameClient">Name </Label>
                      <Field name="nameClient" />
                      <ErrorMessage name="nameClient" />
                    </DivCol>
                    <DivCol>
                      <Label htmlFor="emailClient">Email </Label>
                      <Field name="emailClient" />
                      <ErrorMessage name="emailClient" />
                    </DivCol>
                  </SpacingDivColumn>
                )}
                {values.picked && values.picked === 'yes' && (
                  <SpacingDiv>
                    <Label htmlFor="order">Order number </Label>
                    <Field name="order" />
                    <ErrorMessage name="order" />
                  </SpacingDiv>
                )}

                <SpacingDiv>
                  <Label>What’s the problem? </Label>
                  <SelectField component="select" name="selectType">
                    <option value="selecting">--Select--</option>
                    <option value="cancel">Cancel</option>
                    <option value="change">Change address</option>
                    <option value="add">Add/remove item</option>
                    <option value="damage">Damage</option>
                    <option value="other">Other</option>
                  </SelectField>
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
                    <Label htmlFor="item">
                      Provide item that needs to be changed or removed:
                    </Label>
                    <Field name="item" />
                    <ErrorMessage name="item" />
                  </SpacingDiv>
                )}

                {values.selectType && values.selectType === 'damage' && (
                  <SpacingDiv>
                    <Label htmlFor="imageDamage">Provide image of damage</Label>
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
                      <Label htmlFor="Description">Provide description</Label>
                      <Field
                        height={3}
                        component="textarea"
                        name="description"
                      />
                      <ErrorMessage name="description" />
                    </SpacingDiv>
                    <SpacingDiv>
                      <Button value="Send" type="submit"></Button>
                    </SpacingDiv>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </Column>
      </Container>
    </Layout>
  )
}

export default IndexPage
