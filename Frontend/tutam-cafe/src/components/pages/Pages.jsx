import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Order from './order/Order'
import Pay from './pay/Pay'

function Pages() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Order" element={ <Order /> } />
            <Route path="/Pay" element={ <Pay /> } />
            <Route path="/Order" element={ <Order /> } />
            <Route path="/Pay" element={ <Pay /> } />
        </Routes>
    </>
  )
}

export default Pages