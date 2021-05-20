import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import BaseChatBox from '../components/ChatBox/ChatBox'
import BannerURL from '../images/contactUs.jpg'
import {
  Formik,
  Form,
  Field as UnBlockField,
  ErrorMessage as RawErrorMessage,
} from 'formik'

const ErrorMessage = styled(RawErrorMessage)`
  color: #dc3545;
  margin-top: 10px;
`

const FormContainer = styled.div`
  padding: 30px;
  position: relative;
`

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const Loader = styled.div`
  color: #ffffff;
  font-size: 20px;
  margin: 100px auto;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: loader 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
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
  border: 1px solid #707070;
  background-color: #ffffff;
  color: #000;
  padding-left: 8px;

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
  height: ${({ height }) => (height ? '120px' : '40px')};
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
const RadioLabel = styled.label`
  font-family: 'sharp_sans';
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  margin-top: 0;
  margin-left: 6px;
  font-weight: 300;
  width: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SubTitle = styled.p`
  font-family: 'sharp_sans';
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  margin-top: 0;
  font-weight: 300;
`

const SpacingDiv = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: column;
`

const SpacingDivColumn = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const DivCol = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
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
  cursor: pointer;
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
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
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
      allContentfulQuestions(sort: {fields: order}) {
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
      if (!values.selectType) {
        errors.selectType = 'Required'
      }
    }

    if (values.picked === '') {
      errors.picked = 'Required'
    }

    if (values.picked === 'yes') {
      if (!values.order) {
        errors.order = 'Required'
      }

      if (!values.selectType) {
        errors.selectType = 'Required'
      }
    }

    if (values.selectType === 'change') {
      if (!values.address) {
        errors.address = 'Required'
      }
    }

    if (values.selectType === 'damage') {
      if (!values.damagedItem) {
        errors.damagedItem = 'Required'
      }
      if (!selectedFile) {
        errors.imageDamage = 'Required'
      }
    }

    if (values.selectType === 'add') {
      if (!values.item) {
        errors.item = 'Required'
      }
    }

    if (values.description === '' && values.selectType !== 'change') {
      errors.description = 'Required'
    }
    return errors
  }
  const handleSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    const valuesMap = Object.fromEntries(
      Object.entries(values).filter(
        ([k, v]) => {
          if (v !== "")
            return [k, v];
        }
      )
    )
    const formData = new FormData()
    formData.append("form-name", "contact-test")
    Object.keys(valuesMap)
      .map(key => {
        formData.append(key, valuesMap[key])
      })

    if (selectedFile) {
      formData.append("imageDamage", selectedFile, selectedFile.name)
    }

    fetch('/', {
      method: 'POST',
      // headers: { 'Content-Type': 'multipart/form-data' },
      body: formData
    })
      .then(() => {
        resetForm({
          picked: '',
          description: '',
        })
        setStatus({ success: true })
        setDisplayFormStatus(true)
      })
      .catch(error => {
        setStatus({ success: false })
        setSubmitting(false)
        setErrors({ submit: error.message })
      })
  }
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

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
                  picked: 'yes',
                  description: '',
                  selectType: '',
                  order: '',
                  name: '',
                  email: '',
                  damagedItem: '',
                  imageDamage: ''
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
                    // success={!!status && !!status.success}
                    // error={!!errors.submit}
                    id="contact-test"
                    name="contact-test"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {isSubmitting && (
                      <LoaderContainer>
                        <Loader></Loader>
                      </LoaderContainer>
                    )}
                    <input type="hidden" name="form-name" value="contact-test" />

                    <Label>Do you have your order number? </Label>
                    <SpacingDivColumn
                      role="group"
                      aria-labelledby="my-radio-group"
                    >
                      <RadioLabel>
                        <RadioField type="radio" name="picked" value="yes" />
                        Yes
                      </RadioLabel>
                      <RadioLabel>
                        <RadioField type="radio" name="picked" value="no" />
                        No
                      </RadioLabel>
                    </SpacingDivColumn>
                    <ErrorMessage component="span" name="picked" />
                    <SpacingDivColumn
                      hidden={values.picked === 'yes' || values.picked === ''}
                    >
                      <DivCol>
                        <Label htmlFor="name">Name </Label>
                        <Field name="name" />
                        <ErrorMessage component="span" name="name" />
                      </DivCol>
                      <DivCol>
                        <Label htmlFor="email">Email </Label>
                        <Field name="email" />
                        <ErrorMessage component="span" name="email" />
                      </DivCol>
                    </SpacingDivColumn>
                    <SpacingDiv
                      hidden={values.picked === 'no' || values.picked === ''}
                    >
                      <Label htmlFor="order">Order Number </Label>
                      <Field name="order" />
                      <ErrorMessage component="span" name="order" />
                    </SpacingDiv>

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
                      <ErrorMessage component="span" name="selectType" />
                    </SpacingDiv>

                    <SpacingDiv
                      hidden={
                        values.selectType !== 'change'
                      }
                    >
                      <Label htmlFor="address">
                        Provide new/updated address:{' '}
                      </Label>
                      <Field name="address" />
                      <ErrorMessage component="span" name="address" />
                    </SpacingDiv>

                    <SpacingDiv
                      hidden={
                        values.selectType === 'cancel' ||
                        values.selectType === 'change' ||
                        values.selectType === 'damage' ||
                        values.selectType === 'other' ||
                        values.selectType === ''
                      }
                    >
                      <Label htmlFor="item">
                        Provide item that needs to be changed or removed:
                      </Label>
                      <Field name="item" />
                      <ErrorMessage component="span" name="item" />
                    </SpacingDiv>

                    <SpacingDiv
                      hidden={
                        values.selectType !== 'damage'
                      }
                    >
                      <Label htmlFor="damagedItem">
                        What item is damaged?
                      </Label>
                      <Field name="damagedItem" />
                      <ErrorMessage component="span" name="damagedItem" />
                    </SpacingDiv>
                    <>
                      <SpacingDiv hidden={
                        values.selectType === '' ||
                        values.selectType === 'change'
                      }>
                        <Label htmlFor="Description">Provide additional details</Label>
                        <Field
                          height={3}
                          component="textarea"
                          name="description"
                        />
                        <ErrorMessage component="span" name="description" />
                      </SpacingDiv>
                      <SpacingDiv
                        hidden={
                          values.selectType === 'change' ||
                          values.selectType === ''
                        }
                      >
                        <FileContainer>
                          <FieldImage
                            name="imageDamage"
                            accept="image/png, image/jpeg"
                            type="file"
                            onChange={changeHandler}
                          />
                          {isFilePicked ? (
                            <LabelType htmlFor="imageDamage">
                              { selectedFile.name}
                            </LabelType>
                          ) : (
                            <LabelType htmlFor="imageDamage">
                              Choose files...
                            </LabelType>
                          )
                          }
                        </FileContainer>
                        <ErrorMessage component="span" name="imageDamage" />
                      </SpacingDiv>
                      <SpacingDiv>
                        <Button value="Send" type="submit"></Button>
                      </SpacingDiv>
                      {displayFormStatus && (
                        <SubTitle>
                          Thank you for contacting us.
                        </SubTitle>
                      )}
                    </>
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
