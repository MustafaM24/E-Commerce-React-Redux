// src/Cart.js
import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";


const Cart = ({ cartItems }) => {

  return (
  <div>
    <h2>Cart</h2>
    {cartItems.map(item => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(Cart);


// // olddd

// // src/Cart.js
// import React from "react";
// import { connect } from "react-redux";
// import CartItem from "./CartItem";

// const Cart = ({ cartItems }) => (
//   <div>
//     <h2>Cart</h2>
//     {cartItems.map(item => (
//       <CartItem key={item.id} item={item} />
//     ))}
//   </div>
// );

// const mapStateToProps = state => ({
//   cartItems: state.cartItems,
// });

// export default connect(mapStateToProps)(Cart);