import Card, { CardProps } from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const AuthCard = styled(Card)<CardProps>(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center', 
  backgroundColor: theme.palette.primary.dark, 
  borderRadius: 0,  
}));
