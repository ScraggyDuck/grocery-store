import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/client/components/SignInOutForm.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as UserServices from '../../services/userServices';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email!.')
    .required('Email is required!.'),
  password: Yup.string()
    .required('Password is required!.')
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!'),
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email!.')
    .required('Email is required!.'),
  password: Yup.string()
    .required('Password is required!.')
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!'),
  name: Yup.string()
    .required('Name is required!.')
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!'),
  phone: Yup.string().required('Phone is required!.').max(11, 'Phone invalid!'),
  address: Yup.string().required('address is required!.'),
});

export default function SignInOutForm() {
  const [isLogin, setLogin] = useState(true);
  const onSubmitForm = async (values) => {
    if (isLogin) {
      const { email, password } = values;
      const { token } = await UserServices.login({ email, password });
      localStorage.setItem('token', token);
    } else {
      const { token } = await UserServices.signup(values);
      localStorage.setItem('token', token);
    }
  };
  return (
    <div className='form text-center'>
      <h3 className='title'>{isLogin ? 'Welcome Back' : 'Sign Up'}</h3>
      <span className='description'>
        {isLogin
          ? 'Login with your email & password'
          : `By signing up, you agree to Pickbazar's`}
      </span>
      <Formik
        initialValues={
          isLogin
            ? {
                email: '',
                password: '',
              }
            : {
                email: '',
                password: '',
                name: '',
                phone: '',
                address: '',
              }
        }
        validationSchema={isLogin ? LoginSchema : SignUpSchema}
        onSubmit={(values) => onSubmitForm(values)}>
        {({ errors, touched, handleChange, values, handleSubmit }) => (
          <Form noValidate onSubmit={(e) => handleSubmit(e)}>
            {!isLogin && (
              <>
                <Form.Group>
                  <Form.Control
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={errors.name && touched.name}
                    isValid={!errors.name && touched.name}
                    placeholder='Your full name...'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* Name */}
                <Form.Group>
                  <Form.Control
                    type='text'
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={errors.phone && touched.phone}
                    isValid={!errors.phone && touched.phone}
                    placeholder='Your phone number...'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* Phone */}
                <Form.Group>
                  <Form.Control
                    type='text'
                    name='address'
                    value={values.address}
                    onChange={handleChange}
                    isInvalid={errors.address && touched.address}
                    isValid={!errors.address && touched.address}
                    placeholder='Your addres...'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* Address */}
              </>
            )}
            <Form.Group>
              <Form.Control
                type='email'
                name='email'
                value={values.email}
                isInvalid={errors.email && touched.email}
                isValid={!errors.email && touched.email}
                onChange={handleChange}
                placeholder={isLogin ? 'demo@demo.com' : 'Your email...'}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Email */}
            <Form.Group>
              <Form.Control
                name='password'
                value={values.password}
                isInvalid={errors.password && touched.password}
                isValid={!errors.password && touched.password}
                onChange={handleChange}
                type='password'
                placeholder={isLogin ? '123456789' : 'Password...'}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Password */}
            {!isLogin && (
              <p className='terms'>
                By signing up, you agree to Pickbazar's
                <a href='#terms'>Terms & Condtion</a>
              </p>
            )}
            <Button
              className='w-100 btn-submit'
              variant='primary'
              type='submit'>
              Continue
            </Button>
          </Form>
        )}
      </Formik>
      {isLogin ? (
        <p>
          Don't have any account?{' '}
          <span onClick={() => setLogin(false)} className='sign-up'>
            Sign Up
          </span>
        </p>
      ) : (
        <p>
          Already have an account?{' '}
          <span onClick={() => setLogin(true)} className='sign-in'>
            Login
          </span>
        </p>
      )}
    </div>
  );
}
