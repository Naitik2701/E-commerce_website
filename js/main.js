// Dummy product list
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "./images/airb2.jpeg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "./images/smart2.jpeg"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1599,
    image: "./images/blue3.jpeg"
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 799,
    image: "./images/lapstand.jpeg"
  },
   {
    id: 5,
    name: "Wireless Earbuds",
    price: 1999,
    image: "./images/wp.jpeg"
  },
   {
    id: 6,
    name: "Wireless Airpods",
    price: 1999,
    image: "./images/hard.jpeg"
  },
   {
    id: 7,
    name: "Bluetooth",
    price: 1999,
    image: "./images/blue2.jpeg"
  },
   {
    id: 8,
    name: "Female Cloths",
    price: 1999,
    image: "./images/shop.webp"
  },
   {
    id: 9,
    name: "Male choths",
    price: 1999,
    image: "./images/clo1.jpeg"
  },
   {
    id: 10,
    name: "Girl cloths",
    price: 1999,
    image: "./images/shop2.webp"
  },
   {
    id: 11,
    name: "Boys Cloths",
    price: 4500,
    image: "./images/cloth2.jpeg"
  },
   {
    id: 12,
    name: "Girl Shoes",
    price: 1999,
    image: "./images/girlsh.jpeg"
  },
   {
    id: 13,
    name: "Laptop",
    price: 39000,
    image: "./images/lap.jpeg"
  },
   {
    id: 14,
    name: "Laptop stand",
    price: 990,
    image: "./images/lapstand.jpeg"
  },
   {
    id: 15,
    name: "iphone Macbook",
    price: 100000,
    image: "./images/macbook.jpeg"
  },
   {
    id: 16,
    name: "girl shoes",
    price: 2100,
    image: "./images/girlsh.jpeg"
  },
   {
    id: 17,
    name: "Boys shoes",
    price: 1999,
    image: "./images/show2.jpeg"
  },
   {
    id: 18,
    name: "smartwatch",
    price: 2300,
    image: "./images/smart.jpeg"
  },
     {
    id: 19,
    name: "smart watch",
    price: 1999,
    image: "./images/smart2.jpeg"
  },
     {
    id: 20,
    name: "Waterproof Airbuds",
    price: 3900,
    image: "./images/airbu.jpeg"
  },
];

const productGrid = document.getElementById("productGrid");

if (productGrid) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const selectedProduct = products.find(p => p.id === productId);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(selectedProduct);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${selectedProduct.name} added to cart!`);
}

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const name = card.querySelector("h4").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert("Signup successful! You can now login.");
    window.location.href = "login.html";
  });
}

const cartItemsDiv = document.getElementById("cartItems");
const cartTotalSpan = document.getElementById("cartTotal");

if (cartItemsDiv && cartTotalSpan) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
      cartItemsDiv.appendChild(itemDiv);
    });
    cartTotalSpan.textContent = total;
  }
}

function checkout() {
  localStorage.removeItem("cart");
  alert("🎉 Order placed successfully!");
  window.location.href = "index.html";
}

const themeBtn = document.getElementById("toggleTheme");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}
