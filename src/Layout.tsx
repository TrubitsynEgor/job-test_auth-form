import { FC } from 'react'
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

import { Layout, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { DetailsDivProps } from './types'
import { Menu } from './shared'
import { IUser } from './types/user'

const { Title } = Typography
const { Header, Content, Footer, Sider } = Layout

export interface IMenuItems {
  id: number
  title: string
  icon: JSX.Element
  href: string
}

export const MainLayout: FC<DetailsDivProps> = ({ children }) => {
  const user = JSON.parse(window.localStorage.getItem('user')!) as IUser
  const menuItems: IMenuItems[] = [
    {
      id: 1,
      title: user ? user.username : 'Login',
      icon: <UserOutlined />,
      href: '/login',
    },
    { id: 2, title: 'Favorite', icon: <HeartOutlined />, href: '/favorite' },
    { id: 3, title: 'Cart', icon: <ShoppingCartOutlined />, href: '/cart' },
  ]
  return (
    <div className="wrapper">
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Link to={`/`}>
            <Title className="logo">JobTest</Title>
          </Link>
          <Menu menuItems={menuItems} />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}
