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
import SelectStore from './order/SelectStore'
import OrderCustomize from './order/OrderCustomize'
import Settings from './settings/Settings'


function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Order" element={ <Order /> } ></Route>
        <Route path="/Order/SelectStore" element={<SelectStore />} />
        <Route path="/Order/Customize/:productName" element={<OrderCustomize />} />
        <Route path="/Pay" element={ <Pay /> } />
        <Route path="/Gift" element={ <Gift /> } />
        <Route path="/Store" element={ <Store /> } />
        <Route path="/Search" element={ <Search /> } />
        <Route path="/Account" element={ <Account /> } />
        <Route path="/Account/Settings" element={ <Settings /> } />
        <Route path="/Rewards" element={ <Rewards />} />
      </Routes>
    </>
  )
}

export default Pages