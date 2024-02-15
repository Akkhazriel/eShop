import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div className="logo">House Staff</div>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <IoMdCart
          onClick={() => setCartOpen(cartOpen = !cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className="shop-cart"></div>
        )}

        <div className="presentation"></div>
    </header>
  )
}
