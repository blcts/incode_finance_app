import Tab, { TabProps } from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
export const SidebarTab = styled(Tab)<TabProps>(({ theme }) => ({
  ...theme.typography.h5,
  minHeight: '30px',
  borderBottom: '1px solid',
  borderColor: 'transparent',
  textTransform: 'none',
  padding: '32px 0 4px',
  justifyContent: 'start',

  '&:hover': {
    ...theme.typography.p2,
    opacity: 0.9,
    borderColor: theme.palette.primary.light,
  },

  '&:active': {
    ...theme.typography.p2,
    opacity: 0.9,
    borderColor: theme.palette.success.main,
    transition: 'none',
  },

  '&.Mui-selected': {
    borderColor: theme.palette.success.main,
  },

  '&:not(.Mui-selected)': {
    color: theme.palette.primary.main,
    opacity: 0.6,
  },
  '&:hover.Mui-selected': {
    ...theme.typography.h5,
  },
}))
