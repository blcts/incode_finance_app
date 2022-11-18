import { Button, Container, Typography } from "@mui/material"
import { Link} from "react-router-dom";
import {  AdditionalMessageType } from "../../types/AdditionalMessage"

export const AdditionalMessage: React.FC<AdditionalMessageType> = (props) => {
  const { message, button, path } = props;
  return (
    <Container sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
    <Typography sx={{typography: 'p4'}} color='primary'>
        {message}
      </Typography>

      <Link to={path} >
        <Button variant='text' color='info' sx={{typography: 'p4', textTransform: 'none'}}>
          {button}
        </Button>
      </Link>
    </Container>
  )
}