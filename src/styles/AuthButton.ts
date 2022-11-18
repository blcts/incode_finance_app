import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const AuthButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  border: '1px solid transparent',
  marginBottom: '24px',
  marginTop: '11px',
  borderRadius: '2px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.success.main,
    border: '1px solid transparent',
    borderColor: theme.palette.success.light,
  },
  '&:active, &:focus': {
    backgroundColor: theme.palette.success.light,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
  },
  '&:disabled': {
    color: theme.palette.primary.light,
    background: '#A19EAA',
    opacity: 0.5,
  },
}))
