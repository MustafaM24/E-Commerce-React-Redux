// src/CartDrawer.js
import React from "react";
import CartItem from "../components/CartItem";
import "../CartDrawer.css"; // Add your styles
import { connect } from "react-redux";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {

  return (
  <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
    <div className="cart-header">
      <h2>Cart</h2>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <div className="cart-total">
      Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
    </div>
  </div>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

// export default CartDrawer;
export default connect(mapStateToProps)(CartDrawer);

