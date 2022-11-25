import { login } from '../../api/auth'
import { userTokenAPI } from '../../api/users'

interface Props {
  username: string
  password: string
}

export const handleLogin = async (props: Props) => {
  try {
    const tokens = await login(props.username, props.password)

    if (tokens) {
      userTokenAPI(tokens.accessToken)
    }
    return tokens
  } catch (err) {
    throw new Error('You need to register')
  }
}
