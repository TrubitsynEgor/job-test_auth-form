import { Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthForm } from '../../../shared'

export interface OnFinishReg {
  firstName: string
  lastName: string
  username: string
}

export const RegistrationForm = () => {
  const [user, setUser] = useState<OnFinishReg | null>(null)
  const { pathname } = useLocation()
  const isAuth = !!window.localStorage.getItem('user')
  const pathnameIsLogin = pathname === '/login'

  const onFinish = async (values: OnFinishReg) => {
    return await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
      }),
    })
      .then((res) => res.json())
      .then((data: OnFinishReg) => setUser(data))
  }

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  if (user || isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <AuthForm
      registration
      onFinishReg={onFinish}
      pathnameIsLogin={pathnameIsLogin}
    />
  )
}
