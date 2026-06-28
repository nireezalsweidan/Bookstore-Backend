📚 Bookstore API

A backend RESTful API for managing a bookstore system, built using Node.js, Express, TypeScript, and MongoDB (Mongoose).
The system handles customers, books, and orders with full CRUD operations and request validation.

🚀 Features
📖 CRUD for Books
👤 CRUD for Customers
🧾 CRUD for Orders
🔗 MongoDB relationships (ObjectId references)
✅ Request validation using Zod
🧠 Mongoose schema modeling
📦 Modular architecture (controllers, routes, middleware)
⚙️ TypeScript support
🧪 Ready for Postman testing
🏗️ Tech Stack
Node.js
Express.js
TypeScript
MongoDB
Mongoose
Zod
Nodemon
📁 Project Structure
src/
│
├── config/
│   └── database.ts
│
├── controllers/
│   ├── book.controller.ts
│   ├── customer.controller.ts
│   └── order.controller.ts
│
├── models/
│   ├── book.model.ts
│   ├── customer.model.ts
│   └── order.model.ts
│
├── routes/
│   ├── book.routes.ts
│   ├── customer.routes.ts
│   └── order.routes.ts
│
├── validators/
│   ├── book.validator.ts
│   ├── customer.validator.ts
│   └── order.validator.ts
│
├── middleware/
│   └── validate.ts
│
├── app.ts
└── server.ts
⚙️ Installation
1. Clone the repository
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api
2. Install dependencies
npm install
3. Setup environment variables

Create a .env file:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/bookstore
4. Run the project (development)
npm run dev
5. Build project
npm run build
6. Run production
npm start
📮 API Endpoints
👤 Customers
Method	Endpoint
POST	/api/customers
GET	/api/customers
GET	/api/customers/:id
PUT	/api/customers/:id
DELETE	/api/customers/:id
📖 Books
Method	Endpoint
POST	/api/books
GET	/api/books
GET	/api/books/:id
PUT	/api/books/:id
DELETE	/api/books/:id
🧾 Orders
Method	Endpoint
POST	/api/orders
GET	/api/orders
GET	/api/orders/:id
PUT	/api/orders/:id
DELETE	/api/orders/:id
📦 Example Order Request
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
🔐 Validation

All incoming requests are validated using Zod schemas to ensure data integrity and prevent invalid input.

📌 Future Improvements
Authentication (JWT)
Role-based access (Admin / Customer)
Inventory stock auto-update
Order total auto-calculation
Pagination & filtering
Logging system
Unit tests
