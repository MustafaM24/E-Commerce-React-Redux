// src/ProductList.js
import React from "react";
import { connect } from "react-redux";  // Import connect
import Product from "./Product";
import { addToCart } from "../redux/actions";  // Import the addToCart action
import products from "./data";

const ProductList = ({ addToCart }) => {

  return (
  <div>
    <h2>Products</h2>
    {products.map(product => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
  )
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductList);  // Connect the component

// //oldddd
// // src/ProductList.js
// import React from "react";
// import Product from "../components/Product";
// import { connect } from "react-redux";
// import products from "../components/data";
// import  addToCart from "../redux/actions";  // Import the addToCart action


// const ProductList = ({ addToCart }) => (
//   <div>
//     <h2>Products</h2>
//     {products.map(product => (
//       <Product key={product.id} product={product} addToCart={addToCart} />
//     ))}
//   </div>
// );

// const mapDispatchToProps = {
//   addToCart,
// };

// export default connect(null, mapDispatchToProps)(ProductList);