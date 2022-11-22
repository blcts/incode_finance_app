import { setFeaturesTokenActionCreator } from '../../redux/features'
import { login } from '../../api/auth'

interface Props {
  username: string
  password: string
}

export const handleLogin = async (props: Props) => {
  try {
    const token = await login(props.username, props.password)
    console.log('my token', token)
    if (token) {
      setFeaturesTokenActionCreator(token.accessToken)
    }
  } catch (err) {
    console.log('my err', err)
  }
}
