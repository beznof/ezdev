
import { BrowserRouter, Route, Routes } from 'react-router'
import Regex from './pages/regex'
import Home from './pages/home'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tools">
            <Route path="regex" element={<Regex/>} />
            <Route path="base64" element={<Regex/>} />
            <Route path="hash" element={<Regex/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
