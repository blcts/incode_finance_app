import { InputAdornment, SvgIcon, TextField, StandardTextFieldProps } from "@mui/material"
import { ReactComponent as EyeOn } from '../images/auth/eye-on.svg';
import { ReactComponent as EyeOff } from '../images/auth/eye-off.svg';
import { theme } from "../styles/Theme";

interface Props extends StandardTextFieldProps {
  isVisiblePass?: boolean,
  type: string,
};

export const InputComponent:React.FC <Props>= (props) => {
  const { isVisiblePass, type } = props;
  return (
    <TextField
        {...props}
        InputProps={{
          endAdornment: (
            (type === 'password') 
            && <InputAdornment position="end">
              {
                isVisiblePass 
                    ? <EyeOn style={{color: theme.palette.primary.light}} />
                : <EyeOff style={{color: theme.palette.primary.light}} />
              }
            </InputAdornment>
          ),
        }}
      variant="standard"
      sx={{mb: '21px'}}
      />
  )
}