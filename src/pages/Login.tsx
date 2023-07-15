import { Typography } from 'antd'
import { MainLayout } from '../Layout'

import { LoginForm } from '../features'
import { UserInfo } from '../shared'

const { Title } = Typography

export const Login = () => {
  return (
    <MainLayout>
      <Title>Login</Title>
      <LoginForm />
      <UserInfo />
    </MainLayout>
  )
}
