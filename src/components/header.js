import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import CartContext from "../context/cart/CartContext"
import { MenuItem, StyledHeader, StyledNavbar } from "../styles/components"

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <StyledHeader>
      <Link to="/">
        <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="logo-store" />
      </Link>
        <StyledNavbar>
          <MenuItem>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart-logo" />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </StyledNavbar>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
