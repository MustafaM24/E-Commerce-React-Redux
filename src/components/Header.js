// src/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Header.css"; // Import your header styles
import { connect } from "react-redux";

const Header = ({  openCartDrawer, cartItems }) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <header className="header">
      <h1>E-Commerce Store</h1>
      <div className="cart-icon" onClick={openCartDrawer}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-counter">{cartCount}</span>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(Header);
