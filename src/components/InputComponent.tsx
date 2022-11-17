import { Button, IconButton, InputAdornment, InputLabel, StandardTextFieldProps } from "@mui/material"
import { ReactComponent as EyeOn } from '../images/auth/eye-on.svg';
import { ReactComponent as EyeOff } from '../images/auth/eye-off.svg';
import { theme } from "../styles/Theme";
import { AuthInput } from "../styles/AuthInput";
import { AuthLabel } from "../styles/AuthLabel";

interface Props extends StandardTextFieldProps {
  isVisiblePass?: boolean;
  setIsVisiblePass?: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
};

export const InputComponent: React.FC<Props> = ({
  isVisiblePass,
  setIsVisiblePass,
  label,
  type,
  ...props
}) => {
  

  const handleOnClick = () => {
    if (setIsVisiblePass) {
      setIsVisiblePass(prevState => !prevState)
    }
  };

  return (
    <>
      <AuthLabel sx={{typography: 'p3'}}>
        {label}
      </AuthLabel>
      <AuthInput
        {...props}
        type={type === 'password' ? (isVisiblePass ? 'text' : 'password') : type}
        InputProps={{
          endAdornment: (
            (type === 'password')
            && <InputAdornment position="end">
              <IconButton
                onClick={handleOnClick}
              >
                {isVisiblePass
                  ? <EyeOn style={{ color: theme.palette.primary.light }} />
                  : <EyeOff style={{ color: theme.palette.primary.light }} />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="standard"
        sx={{ mb: '21px' }} />
    </>
  )
}