import { useState } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import { store } from './store/store'
import colorTheme from './lib/mui/styleOverRide/colorTheme'
import PrivateRoute from './lib/routes/PrivateRoute'
import Menu from './components/Menu'
import Login from './pages/auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />

            {/* <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
