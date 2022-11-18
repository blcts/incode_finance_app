import InputLabel, { InputLabelProps } from '@mui/material/InputLabel'
import { styled } from '@mui/material/styles'

export const AuthLabel = styled(InputLabel)<InputLabelProps>(({ theme }) => ({
  color: theme.palette.primary.light,
  textAlign: 'start',
  '&:disabled': {
    color: '#F5F5F5',
    opacity: 0.5,
  },
}))
