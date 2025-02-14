# Node.js Backend Boilerplate

A **Node.js** backend boilerplate using **Express.js**, **MongoDB**, and **best practices** for API development.

## 🚀 Features

- **Express.js** for building APIs
- **MongoDB with Mongoose** for database management
- **JWT Authentication** for secure login
- **Helmet & CORS** for security
- **Rate Limiting** to prevent abuse
- **Joi Validation** for request validation
- **Winston & Morgan** for logging
- **Nodemon** for development hot-reloading
- **Jest & Supertest** for testing
- **ESLint & Prettier** for code quality

---

## 📦 Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/nodeboilerplate.git
   cd nodeboilerplate
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create a `.env` file** (see `.env.example` for reference):
   ```sh
   cp .env.example .env
   ```
   Update your `.env` file with required configurations like **MongoDB URI, JWT secret, and other settings**.

4. **Start MongoDB** (if running locally):
   ```sh
   mongod
   ```

---

## 🔥 Usage

### **Run in Development Mode**
```sh
npm run dev
```
This uses **Nodemon** to automatically restart the server on changes.

### **Run in Production Mode**
```sh
npm start
```

### **Lint Code**
```sh
npm run lint
```
To fix lint errors:
```sh
npm run lint:fix
```

### **Run Tests**
```sh
npm test
```
For continuous test watching:
```sh
npm run test:watch
```
To check test coverage:
```sh
npm run test:coverage
```

---

## 🛠 API Endpoints

### **User Routes (`/api/users`)**
| Method | Endpoint       | Description             |
|--------|--------------|-------------------------|
| POST   | `/register`  | Register a new user     |
| POST   | `/login`     | Login user and get token |
| GET    | `/profile`   | Get user profile (Auth) |

**Example cURL Request:**
```sh
curl -X POST http://localhost:5000/api/users/register -H "Content-Type: application/json" -d '{"name": "John", "email": "john@example.com", "password": "password123"}'
```

---

## 📁 Project Structure
```
nodeboilerplate/
│── config.json          # Configuration file
│── jest.config.js       # Jest Testing Config
│── .gitignore           # Git Ignore File
│── package.json         # Project Metadata & Scripts
│── .env                 # Environment Variables
│── curl_commands.txt    # Sample cURL API Calls
│
├── src/
│   ├── app.js           # Express app setup
│   ├── server.js        # Server entry point
│   ├── config/
│   │   ├── database.js  # MongoDB Connection
│   │
│   ├── models/
│   │   ├── userModel.js # User Schema
│   │
│   ├── middleware/
│   │   ├── validateRequest.js # Request Validation Middleware
│   │
│   ├── validations/
│   │   ├── userValidation.js  # User Input Validation
│   │
│   ├── controllers/
│   │   ├── userController.js  # User Controller Logic
│   │
│   ├── routes/
│   │   ├── userRoutes.js      # User Routes
│   │
│   ├── tests/
│       ├── user.test.js  # API Tests for Users
│       ├── setup.js      # Test Setup File
```

---

## 🔐 Security Features
- **Helmet.js** to secure HTTP headers
- **CORS** for cross-origin protection
- **Rate Limiting** to prevent abuse
- **JWT Authentication** for secure access

---

## 🎯 Best Practices Followed
✅ **Environment Variables** – Uses `.env` for sensitive configurations
✅ **Modular Code Structure** – Organized folders for scalability
✅ **Proper Error Handling** – Centralized error handling with `express` middleware
✅ **Logging** – Uses `winston` and `morgan` for structured logs
✅ **Testing** – Unit and integration tests with `Jest` and `Supertest`

---

## 💡 Future Enhancements
- ✅ Role-Based Authentication (RBAC)
- ✅ Swagger API Documentation
- ✅ Docker Support

---

## 🤝 Contributing
1. **Fork the repository**
2. **Create a new feature branch**: `git checkout -b feature-branch`
3. **Commit changes**: `git commit -m "Added new feature"`
4. **Push to branch**: `git push origin feature-branch`
5. **Open a Pull Request**

---

## 📜 License
This project is licensed under the **ISC License**.

---

## ⭐ Show Your Support
If you find this boilerplate useful, consider giving a ⭐ on [GitHub](https://github.com/your-repo/nodeboilerplate)! 🚀

