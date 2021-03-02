import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useBreakpoint} from 'gatsby-plugin-breakpoints'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import BaseChatBox from '../components/ChatBox/ChatBox'
import BannerURL from '../images/contactUs.png'
import {
  Formik,
  Form,
  Field as UnBlockField,
  ErrorMessage as RawErrorMessage,
} from 'formik'

const ErrorMessage = styled(RawErrorMessage)`
  color: #dc3545;
`

const FormContainer = styled.div`
  padding: 30px;
`

const ShadowContainer = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
`

const BannerImage = styled.img`
  max-width: 100%;
`

const ChatBox = styled(BaseChatBox)`
  margin-top: 28px;
`

const RawField = styled(UnBlockField)`
  display: block;
  box-sizing: content-box;
  border: 1px solid #cccccc;
`

const RadioField = styled(RawField)`
  display: inline;
  height: 14px;
  width: 50px;
  border: 1px solid #707070;
  background-color: #ffffff;
  color: #000;
  padding-left: 10px;

  ::placeholder {
    color: #707070;
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
  border: 1px solid #cccccc;
  background-color: #fff;
  color: #000;

  @media (min-width: 768px) {
  }
`

const Field = styled(RawField)`
  height: ${({height}) => (height ? '120px' : '40px')};
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  color: ##000;
  padding-left: 10px;

  ::placeholder {
    color: #000;
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

const H2 = styled.h2`
  font-family: 'sharp_sans';
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 0;
  text-align: center;
`

const Label = styled.label`
  font-family: 'sharp_sans';
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  margin-top: 0;
  font-weight: 300;
`

const SubTitle = styled.p`
  font-family: 'sharp_sans';
  display: block;
  font-size: 12px;
  font-weight: 300;
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
  background-color: #000;
  border: 1px solid #cccccc;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid transparent;
  border-radius: 28px;
  max-width: 30%;
`

const Title = styled.p`
  color: #000000;
  font-family: 'sharp_sans';
  font-size: 23px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: normal;
  line-height: 26px;
  text-align: left;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
`

const LabelType = styled.label`
  display: block;
  padding: 10px;
  border: 1px solid #cccccc;
  background: #fff;
  color: #000;
  border-radius: 5px;
  font-size: 1em;
  transition: all 0.4s;
  cursor: pointer;
  width: 50%;
`

const FieldImage = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  padding: 14px 0;
  cursor: pointer;
`

const FileContainer = styled.div`
  position: relative;
  width: 100%;
`

function IndexPage() {
  const [files, setFiles] = useState('')
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
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

    if (values.selectType === 'damage') {
      if (!values.file) {
        errors.imageDamage = 'Required'
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

    console.log(errors)
    return errors
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (
    values,
    {setSubmitting, setErrors, setStatus, resetForm},
  ) => {
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', ...values}),
    })
      .then(() => {
        resetForm({
          picked: '',
          description: '',
        })
        setStatus({success: true})
        setDisplayFormStatus(true)
      })
      .catch(error => {
        setStatus({success: false})
        setSubmitting(false)
        setErrors({submit: error.message})
      })
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
          <ShadowContainer>
            <BannerImage src={BannerURL} alt="BannerURL" />
            <FormContainer>
              <Title>Report your Problem</Title>
              <Formik
                initialValues={{
                  picked: '',
                  description: '',
                  selectType: '',
                  order: '',
                }}
                validate={validate}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  isValid,
                  setFieldValue,
                  errors,
                  handleSubmit,
                  handleChange,
                  isSubmitting,
                  status,
                }) => (
                  <Form
                    loading={isSubmitting}
                    success={!!status && !!status.success}
                    error={!!errors.submit}
                    name="contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <Label>Do you have your order number? </Label>
                    <SpacingDivColumn
                      role="group"
                      aria-labelledby="my-radio-group"
                    >
                      <Label>
                        <RadioField type="radio" name="picked" value="yes" />
                        Yes
                      </Label>
                      <Label>
                        <RadioField type="radio" name="picked" value="no" />
                        No
                      </Label>
                    </SpacingDivColumn>
                    <ErrorMessage component="span" name="picked" />
                    {values.picked && values.picked === 'no' && (
                      <SpacingDivColumn>
                        <DivCol>
                          <Label htmlFor="nameClient">Name </Label>
                          <Field name="nameClient" />
                          <ErrorMessage component="span" name="nameClient" />
                        </DivCol>
                        <DivCol>
                          <Label htmlFor="emailClient">Email </Label>
                          <Field name="emailClient" />
                          <ErrorMessage component="span" name="emailClient" />
                        </DivCol>
                      </SpacingDivColumn>
                    )}
                    {values.picked && values.picked === 'yes' && (
                      <SpacingDiv>
                        <Label htmlFor="order">Order Number </Label>
                        <Field name="order" />
                        <ErrorMessage component="span" name="order" />
                      </SpacingDiv>
                    )}

                    <SpacingDiv>
                      <Label>How can we help you today?</Label>
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
                        <ErrorMessage component="span" name="address" />
                      </SpacingDiv>
                    )}

                    {values.selectType && values.selectType === 'add' && (
                      <SpacingDiv>
                        <Label htmlFor="item">
                          Provide item that needs to be changed or removed:
                        </Label>
                        <Field name="item" />
                        <ErrorMessage component="span" name="item" />
                      </SpacingDiv>
                    )}

                    {values.selectType && values.selectType === 'damage' && (
                      <SpacingDiv>
                        <FileContainer>
                          <FieldImage
                            name="imageDamage"
                            multiple
                            type="file"
                            onChange={event => {
                              setFiles('')
                              const filesEvent = event.currentTarget.files
                              for (var i = 0; i < filesEvent.length; i++) {
                                setFiles(files + ' ' + filesEvent[i].name)
                              }

                              setFieldValue('file', event.currentTarget.files)
                            }}
                          />
                          <LabelType htmlFor="imageDamage">
                            {files ? files : 'Choose files...'}
                          </LabelType>
                          <ErrorMessage component="span" name="imageDamage" />
                        </FileContainer>
                      </SpacingDiv>
                    )}
                    {values.selectType !== 'selecting' && (
                      <>
                        <SpacingDiv>
                          <Label htmlFor="Description">
                            Provide description
                          </Label>
                          <Field
                            height={3}
                            component="textarea"
                            name="description"
                          />
                          <ErrorMessage component="span" name="description" />
                        </SpacingDiv>
                        <SpacingDiv>
                          <Button value="Send" type="submit"></Button>
                        </SpacingDiv>
                        {displayFormStatus && (
                          <SubTitle>
                            Thanks for contacting us and report your problem.
                          </SubTitle>
                        )}
                      </>
                    )}
                  </Form>
                )}
              </Formik>
            </FormContainer>
          </ShadowContainer>
        </Column>
      </Container>
    </Layout>
  )
}

export default IndexPage
