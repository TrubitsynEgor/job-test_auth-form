import { Typography } from 'antd'
import { MainLayout } from '../Layout'
import { Navigate } from 'react-router-dom'
import { UserProfile } from '../widgets'
const { Title } = Typography

export const Profile = () => {
  const isAuth = !!window.localStorage.getItem('user')
  if (!isAuth) return <Navigate to={'/login'} />
  return (
    <MainLayout>
      <Title>User Profile</Title>
      <UserProfile />
    </MainLayout>
  )
}
