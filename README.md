TOMATO - Food Ordering Website
This repository hosts the source code for TOMATO, a dynamic food ordering website built with the MERN Stack. It offers a user-friendly platform for seamless online food ordering.

Demo
User Panel: https://food-delivery-frontend-s2l9.onrender.com/
Admin Panel: https://food-delivery-admin-wrme.onrender.com/
Features
User Panel
Admin Panel
JWT Authentication
Password Hashing with Bcrypt
Stripe Payment Integration
Login/Signup
Logout
Add to Cart
Place Order
Order Management
Products Management
Filter Food Products
Login/Signup
Authenticated APIs
REST APIs
Role-Based Identification
Beautiful Alerts
Screenshots
Hero

Hero Section
Products

Products Section
Cart

Cart Page
Login

Login Popup
Run Locally
Clone the project

    git clone https://github.com/Mshandev/Food-Delivery
Go to the project directory

    cd Food-Delivery
Install dependencies (frontend)

    cd frontend
    npm install
Install dependencies (admin)

    cd admin
    npm install
Install dependencies (backend)

    cd backend
    npm install
Setup Environment Vaiables

  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
Setup the Frontend and Backend URL

App.jsx in Admin folder const url = YOUR_BACKEND_URL

StoreContext.js in Frontend folder const url = YOUR_BACKEND_URL

orderController in Backend folder const frontend_url = YOUR_FRONTEND_URL

Start the Backend server

    nodemon server.js
Start the Frontend server

    npm start
Start the Backend server

    npm start
Tech Stack
React
Node.js
Express.js
Mongodb
Stripe
JWT-Authentication
Multer
Deployment
The application is deployed on Render.

Contributing
Contributions are always welcome! Just raise an issue, and we will discuss it.

Feedback
If you have any feedback, please reach out to me here
