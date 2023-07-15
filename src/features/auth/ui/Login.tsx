import { Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthForm } from '../../../shared'
import { IUser } from '../../../types/user'

export interface OnFinishLogin {
  username: string
  password: string
}

export const LoginForm = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const { pathname } = useLocation()
  const isAuth = !!window.localStorage.getItem('user')
  const pathnameIsLogin = pathname === '/login'

  const onFinish = async (values: OnFinishLogin) => {
    return await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data: IUser) => setUser(data))
  }

  useEffect(() => {
    if (!user?.message && user) {
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  if ((!user?.message && user) || isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <AuthForm
      notFoundError={user?.message}
      onFinishLog={onFinish}
      pathnameIsLogin={pathnameIsLogin}
    />
  )
}
