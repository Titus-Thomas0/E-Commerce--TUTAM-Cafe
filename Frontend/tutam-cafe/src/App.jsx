import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Pages from './components/pages/Pages'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Pages />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
