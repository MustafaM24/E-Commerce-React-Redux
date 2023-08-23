// src/App.js
import React, { useState } from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store"; // Import your Redux store
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const openCartDrawer = () => {
    setCartDrawerOpen(true);
  };

  const closeCartDrawer = () => {
    setCartDrawerOpen(false);
  };

  return (
    <div className="app">
      <Header cartItemCount={cartItems.length} openCartDrawer={openCartDrawer} />
      <ProductList addToCart={addToCart} />
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={closeCartDrawer}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;


// // olddd

// // src/App.js
// import React from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";

// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h1>Simple E-Commerce Store with Redux</h1>
//       <ProductList />
//       <Cart />
//     </div>
//   </Provider>
// );

// export default App;