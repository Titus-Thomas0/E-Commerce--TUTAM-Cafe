import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Order from './order/Order'
import Pay from './pay/Pay'
import Gift from './gift/Gift'
import Store from './store/Store'
import Search from './search/Search'
import Account from './account/Account'
import Rewards from './rewards/Rewards'


function Pages() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Order" element={ <Order /> } />
            <Route path="/Pay" element={ <Pay /> } />
            <Route path="/Gift" element={ <Gift /> } />
            <Route path="/Store" element={ <Store /> } />
            <Route path="/Search" element={ <Search /> } />
            <Route path="/Account" element={ <Account /> } />
            <Route path="/Rewards" element={ <Rewards />} />
        </Routes>
    </>
  )
}

export default Pages