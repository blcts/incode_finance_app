import { NavigateFunction } from 'react-router-dom'
import { SignUpType } from '../../types/SignUp'
import { NewUser } from '../../types/User'
import { register } from '../../api/auth'

export const handleRegister = async (
  value: SignUpType,
  navigate: NavigateFunction,
  setErrMessage: (v: string) => void
) => {
  try {
    const newUser: NewUser = {
      password: value.password,
      username: value.username,
      displayName: value.fullName,
    }

    await register(newUser)
    navigate('/accountCreated', { state: { username: value.username } })
  } catch (error: any) {
    if (error.response.data.statusCode === 409) {
      setErrMessage('Someone already used this username')
    }
  }
}
