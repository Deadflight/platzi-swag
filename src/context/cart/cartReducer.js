export const TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART',
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      // TO DO: See if the item is already in the cart
      return [...state, action.payload]
    case TYPES.REMOVE_TO_CART:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }

}
