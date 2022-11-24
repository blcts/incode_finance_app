import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'
export const SidebarContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    height: '100vh',
    width: '260px',
    overflow: 'hiden',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0,
  })
)
