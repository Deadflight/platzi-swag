import React, { useContext, useState } from 'react'
import CartContext from '../context/cart/CartContext'
import { Button, QtySelect, SizeButton, SizeSelect, StyledProductDetail, Tag } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import SEO from './seo'
import Stars from './Stars'

const ProductDetails = ({unit_amount, name, metadata, id}) => {

  const { addToCart } = useContext(CartContext)

  const INITIAL_SIZE = 2
  const [size, setSize] = useState(INITIAL_SIZE)
  const [quantity, setQuantity] = useState(1)
  const price = priceFormat(unit_amount)

  const handleAddToCart = () => {
    addToCart({
      name,
      unit_amount,
      quantity,
      size,
      metadata,
      id
    })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name}/>
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {price}</b>
        <Stars />
        <small>{metadata.description}</small>
        { 
          metadata.wear && (
            <>
              <h3>Color: Blue</h3>
              <SizeSelect selected={size}>
                <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
                <SizeButton onClick={() => setSize(2)}>S</SizeButton>
                <SizeButton onClick={() => setSize(3)}>M</SizeButton>
                <SizeButton onClick={() => setSize(4)}>L</SizeButton>
              </SizeSelect>
            </>
          )
        }
        <p>Quantity</p>
        <QtySelect>
          <button onClick={() => (quantity > 1 ? setQuantity(quantity-1) : null)}>-</button>
          <input type='text' disabled value={quantity}/>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetails