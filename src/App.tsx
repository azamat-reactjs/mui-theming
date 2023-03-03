import { RouterProvider } from 'react-router-dom'
import { router } from './routes/paths'

export const App = () => {
  return <RouterProvider router={router} />
}
