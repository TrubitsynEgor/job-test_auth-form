import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { FC } from 'react'
import { DetailsDivProps } from '../../../types'
import { IMenuItems } from '../../../Layout'

interface MenuProps extends DetailsDivProps {
  menuItems: IMenuItems[]
}

export const Menu: FC<MenuProps> = ({ menuItems }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {menuItems.map((el) => (
          <Link key={el.id} to={el.href}>
            {el.icon} {el.title}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
