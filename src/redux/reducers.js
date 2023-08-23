// // src/redux/reducers.js
// const initialState = {
//     cartItems: [],
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "ADD_TO_CART":
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload],
//         };
//         case "REMOVE_FROM_CART":
//           return {
//             ...state,
//             cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
//           };
//         case "INCREASE_QUANTITY":
//           return {
//             ...state,
//             cartItems: state.cartItems.map(item =>
//               item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
//             ),
//           };
//         case "DECREASE_QUANTITY":
//           return {
//             ...state,
//             cartItems: state.cartItems.map(item =>
//               item.id === action.payload.id
//                 ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
//                 : item
//             ),
//           };
//         default:
//           return state;
//       }
//     };
  
//   export default rootReducer;
  
// src/redux/reducers.js
const initialState = {
  cartItems: [],
};

const findCartItemIndex = (cartItems, productId) => {
  return cartItems.findIndex(item => item.id === productId);
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = findCartItemIndex(state.cartItems, action.payload.id);
      if (existingIndex !== -1) {
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
      case "DECREASE_QUANTITY":
        const itemIndex = findCartItemIndex(state.cartItems, action.payload.id);
        if (itemIndex !== -1) {
          const updatedCartItems = state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
              : item
          );
          if (updatedCartItems[itemIndex].quantity === 0) {
            updatedCartItems.splice(itemIndex, 1); // Remove the product when quantity reaches 0
          }
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        }
        return state;
    default:
      return state;
  }
};

export default rootReducer;
