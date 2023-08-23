// // CartItem.js
// import React from "react";

// const CartItem = ({ item }) => {

//   return (
//   <div>
//     <p>{item.name}</p>
//     <p>Price: ${item.price}</p>
//   </div>
//   )
// }

// export default CartItem;

// src/CartItem.js
import React from "react";
import { connect } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/actions";
import "../CartItem.css"; // Import your cart item styles

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {

  return (
  <div className="cart-item">
    <div className="Title">
    <h3>{item.name}</h3>
    <div className="product-box">
    <p>Quantity: {item.quantity}</p>
    </div>
    <button onClick={() => decreaseQuantity(item)}> - </button>
    <button onClick={() => increaseQuantity(item)}> + </button>
    <button onClick={() => removeFromCart(item)}> Remove </button>
    </div>
    <p>Price: ${item.price}</p>
  </div>
  )
}

const mapDispatchToProps = {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
};

export default connect(null, mapDispatchToProps)(CartItem);
