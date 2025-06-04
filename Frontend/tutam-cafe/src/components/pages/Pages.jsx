import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'

function Pages() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h2>About Page</h2>} />
            <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
    </>
  )
}

export default Pages