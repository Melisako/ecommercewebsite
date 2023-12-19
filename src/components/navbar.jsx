import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
<div className='links'>
<Link to="/" className="custom-link">Shop</Link>
<Link to="/cart"></Link>
<div className="custom-shopping-cart-container">
  <ShoppingCart size={32}></ShoppingCart>
</div>

</div>
    </div>
  )
}
