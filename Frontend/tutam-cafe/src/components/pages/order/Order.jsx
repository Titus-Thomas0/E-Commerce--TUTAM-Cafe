import React from 'react'
import BreadCrumbs from '../BreadCrumbs'
import StoreLocation from './StoreLocation'
import ProductPage from './ProductPage'

function Order() {
  return (
    <div>
      <BreadCrumbs />
      <StoreLocation />
      <ProductPage />
    </div>
  )
}

export default Order