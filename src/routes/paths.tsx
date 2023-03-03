import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { RootLayout } from '../components/RootLayout'
import { HomePage } from './HomePage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)
