// src/Product.js
import React from "react";
import { connect } from "react-redux";
import {addToCart} from "../redux/actions";
import "../Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the icon you want to use

const Product = ({ product, addToCart }) => {

  return (
  <div className="product">
    <h3>{product.name}</h3>
    <p className="price">Price: ${product.price}</p>
    <button className="add-to-cart" onClick={() => addToCart(product)}>
      Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
    </button>
  </div>
  )
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(Product);


// //olddd
// // src/Product.js
// import React from "react";
// import { connect } from "react-redux";
// import addToCart from "../redux/actions";
// import "../Product.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Correct import path

// const Product = ({ product, addToCart }) => (
//   <div className="product">
//     <h3>{product.name}</h3>
//     <p className="price">Price: ${product.price}</p>
//     <button className="add-to-cart" onClick={() => addToCart(product)}>
//       Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
//     </button>
//   </div>
// );

// const mapDispatchToProps = {
//   addToCart,
// };

// export default connect(null, mapDispatchToProps)(Product);

