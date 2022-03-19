import { Link } from 'gatsby'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/cart/CartContext'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import getStripe from '../utils/stripe'

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const getTotal = () => {
    setTotal(cart.reduce((acc, item) => acc + item.unit_amount * item.quantity, 0))
  }

  const handleBuy = async (e) => {
    e.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    console.log(cart.map(({id, quantity}) => ({price: id, quantity: quantity})))
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: cart.map(({id, quantity}) => ({price: id, quantity})),
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getTotal()
  }, [])

  return (
    <StyledCart>
      <h2>Shopping Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {
            cart.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.metadata.img} alt={item.name} /> {item.name}
                </td>
                <td>USD {priceFormat(item.unit_amount)}</td>
                <td>{item.quantity}</td>
                <td>USD {priceFormat(item.unit_amount * item.quantity)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'>
            <Button type='outlined'>Back</Button>
          </Link>
          <Button onClick={handleBuy} disabled={loading}>
            Buy
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart