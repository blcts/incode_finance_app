import Container, { ContainerProps } from '@mui/material/Container'
import { styled } from '@mui/material/styles'
export const AvatarContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '132px',
    paddingTop: '16px',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    borderTop: '1px solid rgba(245, 245, 245, 0.3)',
  })
)
