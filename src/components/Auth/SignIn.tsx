import {
  Button,
  Typography,
} from '@mui/material'

import { FormikProps, useFormik } from 'formik'
import GirlPNG from '../../images/auth/girl.png'
import * as yup from 'yup'
import { SignInType } from '../../types/SignIn'
import { AdditionalMessage } from './AdditionalMessage'
import { Container } from '@mui/system'
import { InputComponent } from '../InputComponent'

import { AuthLayout } from './AuthLayout'
import { AuthButton } from '../../styles/AuthButton'

export const SignIn: React.FC = () => {
  const formik: FormikProps<SignInType> = useFormik<SignInType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup.string().required('Required'),
      password: yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && (
            <Typography variant="p4">
              {formik.errors.username}
            </Typography>
          )}

          <InputComponent
            name="password"
            type="password"
            placeholder="***************"
            onChange={formik.handleChange}
            value={formik.values.password}
            isVisiblePass={false}
          />
          {formik.errors.password && (
            <Typography variant="p4">
              {formik.errors.password}
            </Typography>
          )}

          <AuthButton>
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
