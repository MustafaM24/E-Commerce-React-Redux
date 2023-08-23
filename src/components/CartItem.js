// CartItem.js
import React from "react";

const CartItem = ({ item }) => {

  return (
  <div>
    <p>{item.name}</p>
    <p>Price: ${item.price}</p>
  </div>
  )
}

export default CartItem;
