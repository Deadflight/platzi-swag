import React, { useState } from 'react'
import { SelectStars } from '../styles/components'

const Stars = () => {

  const [star, setStar] = useState(1)

  return (
    <SelectStars selected={star}>
      <span onClick={() => setStar(1)}>★</span>
      <span onClick={() => setStar(2)}>★</span>
      <span onClick={() => setStar(3)}>★</span>
      <span onClick={() => setStar(4)}>★</span>
      <span onClick={() => setStar(5)}>★</span>
    </SelectStars>
  )
}

export default Stars