import * as React from 'react';
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

interface Props extends CardMediaProps {
  alt: string,
}

export const LogoStyle = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: '48px',
  left: '60px',
  width: '130px',
  height: '49px'
}));

export const Logo: React.FC <Props> = (props) => {
  return <LogoStyle {...props} />
}