import React, { useReducer } from 'react'
import CartContext from './CartContext'
import { cartReducer, TYPES } from './cartReducer';
  
  const CART_INITIAL_STATE = []

  const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    const addToCart = (item) => {
      dispatch({
        type: TYPES.ADD_TO_CART,
        payload: item
      })
    }

    const removeFromCart = (item) => {
      dispatch({
        type: TYPES.REMOVE_TO_CART,
        payload: item
      })
    }

    return (
      <CartContext.Provider value={{
        cart,

        //Methods
        addToCart,
        removeFromCart
      }}>
        {children}
      </CartContext.Provider>
    )
  }
  
  export default CartProvider