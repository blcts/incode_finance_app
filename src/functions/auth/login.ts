import { login } from '../../api/auth'
import { userTokenAPI } from '../../api/users'

interface Props {
  username: string
  password: string
}

export const handleLogin = async (props: Props) => {
  try {
    const token = await login(props.username, props.password)

    if (token) {
      userTokenAPI(token.accessToken)
    }
    return token.accessToken
  } catch (err) {
    throw new Error('You need to register')
  }
}
