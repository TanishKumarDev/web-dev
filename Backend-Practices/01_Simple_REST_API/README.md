# 🧩 Mini Users REST API (Built with Express.js)

This is a beginner-friendly REST API built using **Node.js** and **Express.js**.  
It simulates a simple user management system with basic routes to:

- Get all users
- Get a user by ID
- Add a new user
- See basic info pages like `/` and `/about`

This project is **file-based only** (no database yet) and stores users in a simple JavaScript array.

---

## 📁 Project Structure

```

01\_Simple\_REST\_API/
├── package.json
├── package-lock.json
├── server.js        <-- main app logic
└── .gitignore       <-- files to ignore in git

````

---

## 🚀 How to Run This Project

### 1️⃣ Clone or Download

```bash
git clone https://github.com/yourusername/01_Simple_REST_API.git
cd 01_Simple_REST_API
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
node server.js
```

By default, the server runs on:
📍 `http://localhost:3000`

---

## 🧪 Available Routes

### ✅ 1. Home

```http
GET /
```

**Response:**

```
Welcome to the Mini Users API 🚀
```

---

### ✅ 2. About

```http
GET /about
```

**Response:**

```
This is a simple Express API to manage users.
```

---

### ✅ 3. Get All Users

```http
GET /users
```

**Returns:**

```json
[
  { "id": 1, "name": "Tanish", "email": "tanish@example.com" },
  { "id": 2, "name": "Tanmay", "email": "tanmay@example.com" },
  { "id": 3, "name": "Harsh", "email": "harsh@example.com" }
]
```

---

### ✅ 4. Get User by ID

```http
GET /users/:id
```

Example:

```http
GET /users/2
```

**Success:**

```json
{
  "id": 2,
  "name": "Tanmay",
  "email": "tanmay@example.com"
}
```

**Not Found:**

```json
{
  "error": "User not found"
}
```

---

### ✅ 5. Create New User

```http
POST /users/create
```

**Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

**Success Response (201 Created):**

```json
{
  "id": 4,
  "name": "Alice",
  "email": "alice@example.com"
}
```

**Validation Error (400 Bad Request):**

```json
{
  "error": "Name and email are required"
}
```

---

## 🧠 Learning Concepts

This project helps you understand:

* Express.js basics
* REST API structure
* Routing in Express
* Handling dynamic routes using `:id`
* Validating incoming data from request body
* Sending proper HTTP responses
* Using Postman to test routes
* JSON middleware with `express.json()`

---

## 🧰 Future Ideas

Want to upgrade this? Try:

* Connecting it to MongoDB
* Adding update & delete routes
* Creating a frontend using React or HTML
* Splitting routes into separate files
* Using UUIDs instead of `id = array.length + 1`

---

## 👨‍💻 Author

Built by [Tanish](https://github.com/TanishKumarDev) — learning in public!
You’re welcome to contribute, learn, or fork this project.

---

## 📜 License

This project is for learning purposes. Feel free to use and modify it.
