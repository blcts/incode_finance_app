import Tabs, { TabsProps } from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'
export const SidebarTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  justifyContent: 'start',
  padding: 0,
  minWidth: '123px',

  '& .MuiTabs-indicator': {
    display: 'none',
  },
}))
