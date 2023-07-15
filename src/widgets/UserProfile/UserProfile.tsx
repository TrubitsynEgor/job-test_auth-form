import styles from './UserProfile.module.scss'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../types/user'

export const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user')!) as IUser
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className={styles.userProfile}>
      <Button
        type="primary"
        shape="round"
        icon={<LogoutOutlined />}
        onClick={logout}
      >
        Logout
      </Button>

      <ul className={styles.list}>
        <li className={styles.item}>{user?.username}</li>
        <li className={styles.item}>{user?.firstName}</li>
        <li className={styles.item}>{user?.lastName}</li>
      </ul>
    </div>
  )
}
