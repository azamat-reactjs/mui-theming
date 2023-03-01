import { createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
])
