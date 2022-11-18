import TextField, { TextFieldProps } from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

export const AuthInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root': {
    ...theme.typography.h5,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      '&:not(.Mui-disabled)': {
        '&:before': {
          borderColor: theme.palette.success.light,
          borderBottomWidth: '1px',
        },
      },
    },

    '&:before': {
      borderColor: theme.palette.primary.main,
    },

    '&:after': {
      borderColor: theme.palette.primary.main,
    },

    '&.Mui-focused:after': {
      borderColor: theme.palette.success.main,
    },

    '&.Mui-error': {
      color: theme.palette.error.main,
      '&:after': {
        borderColor: theme.palette.error.main,
      },
    },
    '& .MuiInput-input ': {
      ...theme.typography.p2,
    },
  },
}))
