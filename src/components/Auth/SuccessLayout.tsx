import React from 'react'
import GirlPNG from '../../images/auth/girl.png'
import { AuthLayout } from './AuthLayout'
import { ReactComponent as SuccessSVG } from '../../images/auth/Success.svg';
import { AuthButton } from '../../styles/AuthButton';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
  button: string;
  path: string;
}

export const SuccessLayout: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const { text, button,path } = props;

  const handleOnSubmit = () => {
    navigate(path);
  }

  return (
    <AuthLayout
      mainImg={GirlPNG}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SuccessSVG
          style={{marginBottom: '24px'}}
        />

        <Typography sx={{
          typography: 'h5',
          width: '208px',
          marginBottom:'32px',
        }} color='primary'>
          {text}
        </Typography>

        <AuthButton
          type='submit'
          sx={{ width: '330px' }}
          onSubmit={handleOnSubmit}
        >
          {button}
        </AuthButton>
      </Container>
    </AuthLayout>
  )
}
