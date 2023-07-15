import { Typography } from 'antd'
import { MainLayout } from '../Layout'
import { RegistrationForm } from '../features'

const { Title } = Typography

export const Registration = () => {
  return (
    <MainLayout>
      <Title>Registration</Title>
      <RegistrationForm />
    </MainLayout>
  )
}
