import React from 'react'
import { Label } from './components/ui/label'
import { BrowserRouter, Route, Routes } from 'react-router'
import Regex from './pages/regex'
import Layout from './layout/layout'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Label>Welcome to ezdev!</Label></Layout>} />
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
