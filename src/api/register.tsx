import { NavigateFunction } from 'react-router-dom'
import { SignUpType } from '../types/SignUp';
import { NewUser } from '../types/User'
import { register } from './auth'



export const handleRegister = async (value: SignUpType, navigate: NavigateFunction ) => {

  try {
    const newUser: NewUser = {
      password: value.password,
      username: value.username,
      displayName: value.fullName,
    }

    await register(newUser)
    navigate('/accountCreated');
  } catch (err) {

  }
}
