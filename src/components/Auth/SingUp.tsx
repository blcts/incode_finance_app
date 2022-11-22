import { FormikProps, useFormik } from 'formik'
import DuckPNG from '../../images/auth/duck.png'
import * as yup from 'yup'
import { SignUpType } from '../../types/SignUp'
import { AdditionalMessage } from './AdditionalMessage'
import { Container } from '@mui/system'
import { InputComponent } from '../InputComponent'
import { AuthLayout } from './AuthLayout'
import { AuthButton } from '../../styles/AuthButton'
import { useState } from 'react'
import { handleRegister } from '../../functions/auth/register'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Typography } from '@mui/material'
import { theme } from '../../styles/Theme'
import { TermsCheckbox } from '../../styles/TermsCheckbox'

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleConfirmPass, setIsVisibleConfirmPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const formik: FormikProps<SignUpType> = useFormik<SignUpType>({
    initialValues: {
      fullName: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(5, 'Password is too short. Example Jhon Smith')
        .matches(/^[A-Za-z\s\- ]*$/, 'Please enter valid name. Example Jhon Smith')
        .required('Full Name is required'),
      username: yup
        .string()
        .matches(/^[a-z0-9]*$/, 'Please enter valid username. Example username123')
        .required('User Name is required'),
      password: yup
        .string()
        .min(4, 'Password is too short')
        .max(16, 'Password is too long')
        .required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Full Name is required'),
    }),
    onSubmit: (values) => {
      handleRegister(values, navigate, setErrMessage);
    },
  })

  return (
    <AuthLayout
      title={'Sign Up'}
      alt={'duck'}
      mainImg={DuckPNG}
    >
      <form onSubmit={formik.handleSubmit}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '330px',
          }}
        >
          <InputComponent
            name="fullName"
            type="text"
            placeholder="Example148"
            label='Full Name'
            error={Boolean(formik.errors.fullName && formik.touched.fullName)}
            helperText={Boolean(formik.touched.fullName) && formik.errors.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />

          <InputComponent
            name="username"
            type="text"
            placeholder="Example148"
            label='User Name'
            error={(Boolean(formik.errors.username && formik.touched.username)) || Boolean(errMessage)}
            helperText={(Boolean(formik.touched.username) && formik.errors.username) || errMessage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />

          <InputComponent
            name="password"
            type="password"
            placeholder="***************"
            label='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={Boolean(formik.touched.password) && formik.errors.password}
            value={formik.values.password}
            isVisiblePass={isVisiblePass}
            setIsVisiblePass={setIsVisiblePass}
          />

          <InputComponent
            name="confirmPassword"
            type="password"
            placeholder="***************"
            label='Confirm Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
            helperText={Boolean(formik.touched.confirmPassword) && formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            isVisiblePass={isVisibleConfirmPass}
            setIsVisiblePass={setIsVisibleConfirmPass}
          />

          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 !important',
            marginTop: '-13px',
            marginBottom: '32px'
          }}>
            <TermsCheckbox
              onChange={() => setIsChecked(prev => !prev)}
            />
            
            <Typography sx={{
              paddingLeft: '4px',
              typography: theme.typography.p4,
              opacity: '0.8',
              textAlign: 'start'
            }} color='primary' >
              By creating an account you agree to the
              <Button sx={{
                padding: 0,
                typography: theme.typography.p4,
                textTransform: 'lowercase',
                verticalAlign: 0,
                background: 'none !important'
              }} color='info'>
                &nbsp;terms of use&nbsp;
              </Button>
               and our
              <Button sx={{
                padding: 0,
                typography: theme.typography.p4,
                textTransform: 'lowercase',
                verticalAlign: 0,
                background: 'none !important'
              }} color='info'>
                &nbsp;privacy policy.
              </Button>
            </Typography>
          </Container>

          <AuthButton
            type='submit'
            disabled={Boolean(
              formik.errors.fullName
              || formik.errors.username
              || formik.errors.password
              || formik.errors.confirmPassword
              || !isChecked
            )}
          >
            Sing Up
          </AuthButton>
        </Container>
      </form>

      <AdditionalMessage
        message={'I have an account.'}
        button={'Go to Sign in'}
        path={'/'}
      />
    </AuthLayout>
  )
}
