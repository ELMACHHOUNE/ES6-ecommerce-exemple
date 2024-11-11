// app.js

import products from "./data.js"; // Import product data
import { createProductCard } from "./product.js"; // Import function to create product card

const productContainer = document.getElementById("product-container");

// Render products to the DOM
products.forEach(product => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);
});
