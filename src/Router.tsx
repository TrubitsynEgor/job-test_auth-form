import { createBrowserRouter } from 'react-router-dom'
import {
  Cart,
  Favorite,
  Home,
  Login,
  NotFound,
  Profile,
  Registration,
} from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/favorite',
    element: <Favorite />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
