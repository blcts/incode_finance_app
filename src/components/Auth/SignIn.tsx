import { 
  Button,
  Input,
  Typography,
} from '@mui/material';

import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import { SignInType } from '../../types/SignIn';
import { AdditionalMessage } from './AdditionalMessage';

export const SignIn: React.FC = () => {
  const formik: FormikProps<SignInType> = useFormik<SignInType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup.string()
        .required('Required'),
      password: yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  });

  return (
    <>
      <Typography variant='h1' color='primary.light'>
         Sign In 
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Input 
          name='username'
          type='text'
          placeholder='Example123'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && (
          <Typography variant='p4'>
            {formik.errors.username}
          </Typography>
        )}

        <Input 
          name='password'
          type='password'
          placeholder='***************'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <Typography variant='p4'>
            {formik.errors.password}
          </Typography>
        )}

        <Button color='success'>
          Login
        </Button>
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

      <
    </>
  )
}