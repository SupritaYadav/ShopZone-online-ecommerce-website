# ShopZone 🛍️

ShopZone is a responsive e-commerce web application built using React.js. It allows users to browse products, view product details, add products to the shopping cart, manage quantities, and complete a simple checkout process.

---
## 🚀 Live Demo
You can view the live deployment of this project here:
👉 **[ShopZone Live Website](https://shopzone-lac-kappa.vercel.app/shop)**

---

## 📸 Project Screenshot & Video

### Desktop Preview
![ Desktop Preview](/public/image/shopzone-desktop.png)

👉[Watch Kanban-Task-Board Video Preview](https://drive.google.com/file/d/17Z5jzZ0tVO6uzxiOePeMzsWxJ_8YSA1C/view?usp=sharing)

---


## 🚀 Features

### 🏠 Home Page
- Welcome section for ShopZone
- Short description of the website
- Shop Now button
- Responsive layout

### 🛍️ Shop Page
- Displays available products
- Product cards with:
  - Product image
  - Product title
  - Product price
  - View Details button
- Responsive product grid

### 📦 Product Details
- Displays detailed information about a selected product
- Product image
- Product title
- Price
- Product description
- Add to Cart functionality
- Back to Shop option

### 🛒 Shopping Cart
- Displays products added to the cart
- Shows product quantity
- Increase quantity using `+`
- Decrease quantity using `−`
- Remove products from cart
- Calculates individual product subtotal
- Calculates total cart amount
- Cart data is stored in localStorage

### 💳 Checkout
- Customer information form
- Name
- Email
- Address
- City
- Payment method
- Order summary
- Total order amount
- Place Order button

### 🎉 Order Success
- Displays order confirmation message
- Clears the cart after successful order placement
- Continue Shopping button

### 📩 Contact Page
- Contact information section
- Contact form
- Name, email and message fields

### 📱 Responsive Design
The application is responsive and adapts to different screen sizes including:

- Desktop
- Tablet
- Mobile

CSS media queries are used to improve the layout on smaller screens.

---

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite
- Browser Local Storage
- REST API

---

## 📂 Project Structure

```text
ShopZone/
│
├── public/
│   └── image/
│       └── bc.jpg
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderSuccess.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── prompts.md
└── README.md