import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  flex-direction: column;

  @media (min-width: 767px) {
    display: flex;
    width: calc(100% - 7%);
    max-width: 1440px;
    margin: 0 auto;
  }
`

const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

function IndexPage() {
  return (
    <Layout>
      <Container>
        <h2>Contact Form</h2>
        <Formik
          initialValues={{
            picked: '',
          }}
          onSubmit={(values, actions) => {
            fetch('/', {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            })
              .then(() => {
                alert('Success')
                actions.resetForm()
              })
              .catch(() => {
                alert('Error')
              })
              .finally(() => actions.setSubmitting(false))
          }}
        >
          {({values}) => (
            <FormikForm name="contact-demo" data-netlify={true}>
              <label>Do you have your order number? </label>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="picked" value="no" />
                  No
                </label>
                <div>Picked: {values.picked}</div>
              </div>
              {values.picked && values.picked === 'no' && (
                <>
                  <label htmlFor="name">Name: </label>
                  <Field name="name" />
                  <ErrorMessage name="name" />

                  <label htmlFor="email">Email: </label>
                  <Field name="email" />
                  <ErrorMessage name="email" />
                </>
              )}
              {values.picked && values.picked === 'yes' && (
                <>
                  <label htmlFor="order">Order number: </label>
                  <Field name="order" />
                  <ErrorMessage name="order" />
                </>
              )}

              <label>What’s the problem? </label>
              <Field as="select" name="selectType">
                <option value="cancel">Cancel</option>
                <option value="change">Change address</option>
                <option value="add">Add/remove item</option>
                <option value="damage">Damage</option>
                <option value="other">Other</option>
              </Field>

              {values.selectType && values.selectType === 'change' && (
                <>
                  <label htmlFor="address">Provide new/updated address: </label>
                  <Field name="address" />
                </>
              )}

              {values.selectType && values.selectType === 'add' && (
                <>
                  <label htmlFor="item">
                    Provide item that needs to be changed or removed:
                  </label>
                  <Field name="item" />
                </>
              )}

              {values.selectType && values.selectType === 'damage' && (
                <>
                  <label htmlFor="imageDamage">
                    Provide image of damage - optional
                  </label>
                  <Field
                    name="image"
                    type="file"
                    placeholder="Please upload an image"
                  />
                </>
              )}

              <Field name="description" placeholder="Description box" />

              <button type="submit">Send</button>
            </FormikForm>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default IndexPage
