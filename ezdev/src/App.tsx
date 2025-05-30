import React from 'react'
import { Label } from './components/ui/label'
import { BrowserRouter, Route, Routes } from 'react-router'
import Regex from './pages/regex'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Label>Welcome to ezdev!</Label>} />
        <Route path="/regex" element={<Regex/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
