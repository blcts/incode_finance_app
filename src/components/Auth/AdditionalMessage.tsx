import { Button, Typography } from "@mui/material"
import { Link, Route } from "react-router-dom";
import {  AdditionalMessageType } from "../../types/AdditionalMessage"

export const AdditionalMessage: React.FC<AdditionalMessageType> = (props) => {
  const { message, button, path } = props;
  return (
    <>
      <Typography variant='p4' color='primary'>
        {message}
      </Typography>

      <Link to={path}>
        <Button variant='text' color='info'>
          {button}
        </Button>
      </Link>
    </>
  )
}