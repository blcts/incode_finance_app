import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'

export const TermsCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
  width: '16px',
  height: '16px',
  padding: '4px !important',
  opacity: '0.8',
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.success.light,
  },
  '&.Mui-checked': {
    color: theme.palette.success.main,
    backgroundColor: theme.palette.primary.light,
    opacity: '1',
  },
}))
