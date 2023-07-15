import { Typography } from 'antd'
import { MainLayout } from '../Layout'
import { Guide } from '../widgets'

const { Title } = Typography

export const Home = () => {
  return (
    <MainLayout>
      <Title>Home</Title>
      <Guide />
    </MainLayout>
  )
}
