import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@root/routes'
import '@root/App.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    </>
  )
}

export default App