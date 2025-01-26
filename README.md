# Full Stack Food Ordering App

A feature-rich food ordering application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js), featuring secure online payments with Stripe.
Project Structure

This project is divided into three main parts:
1.	Frontend: The user-facing food ordering website.
2.	Backend: The server-side API to handle data, authentication, and business logic.
3.	Admin: The admin panel for managing food items and tracking user orders.

## Features
- **Responsive Frontend:** Browse and add food items to the cart.
- **User Authentication:** Secure login & registration using JWT.
- **Shopping Cart:** Add/remove/update items with real-time total.
- **Stripe Integration:** Secure online payments.
- **Order Management:** Real-time updates for users and admins.
- **Admin Panel:** Manage food items and view orders.

##  Tech Stack
- Frontend: React.js, HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (hosted on MongoDB Atlas)
- Payment Gateway: Stripe
- Authentication: JWT, Bcrypt
- CORS: Enabled for cross-origin requests


# ⚙️ Quick Setup Guide
1. Clone the Repository
   git clone https://github.com/yourusername/food-ordering-app.git
   cd food-ordering-app

2. Backend Setup
   * Navigate to backend folder:
   cd backend
   * Install dependencies:
   npm install
   *  Add .env file:

      MONGO_URI=your-mongo-uri,
       JWT_SECRET=your-secret,
       STRIPE_SECRET_KEY=your-stripe-key
   *  Start the server
     * npm run server
       
 3. Frontend Setup(vite)
    * Navigate to frontend folder:cd ../frontend
    * Install dependencies:npm install
    * Start the app:npm run dev
 4. Admin Panel Setup
    * Navigate to admin folder:cd ../admin
    * Install dependencies:npm install
    
* start the panel: npm run dev
  
   ![Screenshot 2025-01-25 220210](https://github.com/user-attachments/assets/cf4a61ae-2364-4a9e-bcea-ed745a1c1f9d)

  ![Screenshot 2025-01-25 220445](https://github.com/user-attachments/assets/fdb0f870-3ceb-499e-b084-28577df34e95)
  
  ![Screenshot 2025-01-25 220742](https://github.com/user-attachments/assets/328d0d84-77fd-4855-94d0-9a05b35ee90e)

  ![Screenshot 2025-01-25 220225](https://github.com/user-attachments/assets/8ec0fcef-f767-4030-aad6-f552339f3237)

