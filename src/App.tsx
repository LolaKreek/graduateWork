import { useState } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import { store } from './store/store'
import colorTheme from './lib/mui/styleOverRide/colorTheme'
import PrivateRoute from './lib/routes/PrivateRoute'
import Login from './pages/auth'
import MainWrapper from './layouts/MainWrapper'
import Instruction from './pages/instruction'
import Profile from './pages/profile'
import Quiz from './pages/quiz'
import NotFound from './pages/notFound'
import '../src/translation/i18n'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<PrivateRoute><Menu /></PrivateRoute>} /> */}
            <Route path="/" element={<MainWrapper />} >
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/instruction' element={<Instruction />} />
              <Route path='/profile' element={<Profile />} />

              <Route path='/*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
