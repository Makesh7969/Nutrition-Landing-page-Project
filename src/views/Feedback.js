import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../components/TextField';
import * as Yup from 'yup';
import { Header } from './Header';

export const Feedback = () => {
   const validate = Yup.object({  
    firstName: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Name is Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    message: Yup.string()
    .required('Message is Required')
    })
  
  return (
      <><Header /><div className='container'>
          <Formik
              initialValues={{
                  firstName: '',
                  message: '',
                  email: '',
              }}
              validationSchema={validate}
              onSubmit={values => {
                  console.log(values);
              } }
          >
              {formik => (
                  <div>
                      <h1 className="my-4 font-weight-bold .display-4 text-center">Feedback</h1>
                      <Form>
                          <TextField label="Your Name" name="firstName" type="text" placeholder="Enter your Name" />
                          <TextField label="Email" name="email" type="email" placeholder="Enter your valid email" />
                          <TextField label="Message" name="message" type="text" placeholder="Type Something..." />
                          <button className="btn btn-dark mt-3" type="submit">Send</button>
                      </Form>
                  </div>
              )}
          </Formik>
      </div></>
  )
}