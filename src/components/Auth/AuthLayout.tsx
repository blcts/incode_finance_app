import { CardContent, Typography} from "@mui/material"
import { PropsWithChildren } from "react"
import { AuthCard } from "../../styles/AuthCard"
import LogoSVG from '../../images/auth/Logo.svg'
import { Logo } from "../../styles/Logo"
import React from "react"

interface Props extends PropsWithChildren { 
  title?: string,
  alt?: string,
  mainImg: string,
};

export const AuthLayout: React.FC<Props> = (props) => {
  const {
    title,
    alt,
    mainImg,
  } = props;
  return (
    <AuthCard>
      <CardContent sx={{ minWidth: '50%' }}>
        <Logo alt="logo" image={LogoSVG} />

        <Typography variant="h1" color="primary.light" sx={{ mb: '32px' }}>
          {title}
        </Typography>

        {props.children}
      </CardContent>

      <img
        alt={alt}
        src={mainImg}
        style={{
          objectFit: 'cover', objectPosition: 'center'
        }}
      />
    </AuthCard>
  )
}
