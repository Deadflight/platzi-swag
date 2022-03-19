import React from 'react'
import { ProductDetails } from '../components'

const Product = ({pageContext}) => {
  return (
    <ProductDetails {...pageContext} />
  )
}

export default Product