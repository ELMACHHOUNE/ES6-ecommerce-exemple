

// Function to create HTML for a product card
export function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("bg-white", "rounded-lg", "shadow-md", "p-6", "hover:shadow-lg", "transition-shadow");
  
    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-40 object-cover rounded">
      <h2 class="text-lg font-bold mt-4">${product.name}</h2>
      <p class="text-gray-600">${product.description}</p>
      <p class="text-blue-700 font-semibold mt-2">${product.price}</p>
      <button class="bg-blue-700 text-white mt-4 p-2 w-full rounded hover:bg-blue-800 transition">Add to Cart</button>
      `;
  
    return productCard;
  }
  