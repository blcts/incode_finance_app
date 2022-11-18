import { FormikProps, useFormik } from 'formik'
import GirlPNG from '../../images/auth/girl.png'
import * as yup from 'yup'
import { SignInType } from '../../types/SignIn'
import { AdditionalMessage } from './AdditionalMessage'
import { Container } from '@mui/system'
import { InputComponent } from '../InputComponent'

import { AuthLayout } from './AuthLayout'
import { AuthButton } from '../../styles/AuthButton'
import { useState } from 'react'
import { login } from '../../api/auth'
import { handleLogin } from '../../api/login'

export const SignIn: React.FC = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const formik: FormikProps<SignInType> = useFormik<SignInType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required('User Name is required'),
      password: yup
        .string()
        .min(4, 'Password is too short')
        .required('Password is required'),

    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  })

  return (
    <AuthLayout
      title={'Sign In'}
      alt={'girl'}
      mainImg={GirlPNG}
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
            name="username"
            type="text"
            placeholder="Example123"
            label='User Name'
            error={Boolean(formik.errors.username && formik.touched.username)}
            helperText={Boolean(formik.touched.username) && formik.errors.username}
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

          <AuthButton
            type='submit'
            disabled={Boolean(formik.errors.password)}
          >
            Login
          </AuthButton>
        </Container>
      </form>

      <AdditionalMessage
        message={'Don’t have account yet?'}
        button={'New Account'}
        path={'authorization'}
      />

      <AdditionalMessage
        message={'Forgot your password?'}
        button={'Reset Password?'}
        path={'authorization'}
      /> 
    </AuthLayout>
  )
}
