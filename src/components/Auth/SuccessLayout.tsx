import React from 'react'
import GirlPNG from '../../images/auth/girl.png'
import { AuthLayout } from './AuthLayout'
import { ReactComponent as SuccessSVG } from '../../images/auth/Success.svg';
import { AuthButton } from '../../styles/AuthButton';
import { Typography } from '@mui/material';

interface Props {
  text: string;
  button: string;
}

export const SuccessLayout: React.FC<Props> = (props) => {
  const { text, button } = props;
  
  return (
    <AuthLayout
      mainImg={GirlPNG}
    >
      <SuccessSVG />

      <Typography sx={{ typography: 'h5' }} color='primary'>
         {text}
      </Typography>

      <AuthButton
        type='button'

      >
        {button}
      </AuthButton>
    </AuthLayout>
  )
}
