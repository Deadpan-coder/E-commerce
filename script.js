const products = [
  {
    name: "Demon Slayer Oversized Hoodie",
    price: 999,
    image: "./imgs/Demon_Slayer_1.jpg"
  },
  {
    name: "Zenistu Thunder Flash Oversized Hoodie",
    price: 999,
    image: "./imgs/zenitsu.jpg"
  },
  {
    name: "Attack Titan Oversized Anime T-shirt",
    price: 899,
    image: "./imgs/titan .jpg"
  },
  {
    name: "Chibi Gojo Oversize Sweatshirt",
    price: 1099,
    image: "./imgs/gojo.jpg"
  }
];

const productContainer = document.getElementById("productContainer");
const cartContainer = document.getElementById("cartContainer"); // For displaying the cart

// Render product cards
products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${index})">Add to cart</button>
  `;
  productContainer.appendChild(card);
});

// Add item to cart
function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
  displayCart(); // Optional: update cart UI if visible
}

// Remove item from cart by index
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Display cart items in a container
function displayCart() {
  if (!cartContainer) return; // If not on cart page, skip

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100px;">
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });
}

// Call this on cart page load to render cart
// displayCart(); <- Uncomment if this script is loaded on cart page
