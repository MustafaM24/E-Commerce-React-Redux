// // src/redux/actions.js
// const addToCart = product => ({
//     type: "ADD_TO_CART",
//     payload: product,
//   });

// const removeFromCart = product => ({
//   type: "REMOVE_FROM_CART",
//   payload: product,
// });

// const increaseQuantity = product => ({
//   type: "INCREASE_QUANTITY",
//   payload: product,
// });

// const decreaseQuantity = product => ({
//   type: "DECREASE_QUANTITY",
//   payload: product,
// });

// export {addToCart, removeFromCart, increaseQuantity, decreaseQuantity };
// src/redux/actions.js
export const addToCart = product => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = product => ({
  type: "REMOVE_FROM_CART",
  payload: product,
});

export const increaseQuantity = product => ({
  type: "INCREASE_QUANTITY",
  payload: product,
});

export const decreaseQuantity = product => ({
  type: "DECREASE_QUANTITY",
  payload: product,
});
