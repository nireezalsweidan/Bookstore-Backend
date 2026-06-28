# 📚 Bookstore Backend API

A RESTful Bookstore API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**.  
This project demonstrates CRUD operations, schema modeling, validation, and a modular backend architecture.

---

## 🚀 Features

- 👤 Customers CRUD
- 📖 Books CRUD
- 🧾 Orders CRUD
- 🔗 MongoDB relationships (ObjectId references)
- ✅ Request validation using Zod
- ⚙️ TypeScript support
- 📦 Clean architecture (controllers, routes, middleware)
- 🧠 Mongoose schema modeling
- 🧪 Postman-ready API

---

## 🏗️ Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Zod
- Nodemon

---

## 📁 Project Structure
src/
│
├── config/
├── controllers/
├── models/
├── routes/
├── validators/
├── middleware/
├── app.ts
└── server.ts


---

## ⚙️ Installation

### 1. Clone the repository
git clone https://github.com/your-username/bookstore-backend.git
cd bookstore-backend

### 2. Install dependencies
npm install

### 3. Create environment variables
Create a .env file:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/bookstore

### 4. Run the project (development)
npm run dev

### 5. Build project
npm run build

### 6. Run production
npm start

## 📮 API Endpoints
### 👤 Customers
| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/customers`     |
| GET    | `/api/customers`     |
| GET    | `/api/customers/:id` |
| PUT    | `/api/customers/:id` |
| DELETE | `/api/customers/:id` |


### 📖 Books
| Method | Endpoint         |
| ------ | ---------------- |
| POST   | `/api/books`     |
| GET    | `/api/books`     |
| GET    | `/api/books/:id` |
| PUT    | `/api/books/:id` |
| DELETE | `/api/books/:id` |


### 🧾 Orders
| Method | Endpoint          |
| ------ | ----------------- |
| POST   | `/api/orders`     |
| GET    | `/api/orders`     |
| GET    | `/api/orders/:id` |
| PUT    | `/api/orders/:id` |
| DELETE | `/api/orders/:id` |

## 📦 Example Order Request
{
  "customer": "customerIdHere",
  "books": [
    {
      "book": "bookIdHere",
      "quantity": 2,
      "unitPrice": 30
    }
  ],
  "totalAmount": 60,
  "address": "Beirut, Lebanon",
  "paymentMethod": "Cash on Delivery"
}

## 🔐 Validation
All requests are validated using Zod schemas to ensure data integrity and prevent invalid input.

## 👨‍💻 Author
Developed by Nireez Al Sweidan





