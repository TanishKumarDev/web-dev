# Postman Dummy Data for Book Store AP

* Authorization: restrict access to resources based on user roles
* Authentication: validate user credentials and provide secure access to resources
* Password protection: hash and salt passwords to prevent unauthorized access
* Role-based access control (RBAC): assign specific roles to users and restrict access to resources based on those roles

## 1️⃣ Auth Routes: `/api/auth`

### **Signup – Create Users**

**POST** `http://localhost:3000/api/auth/signup`

#### **Admin User**

```json
{
  "username": "adminUser",
  "email": "admin@example.com",
  "password": "Admin123!",
  "role": "admin"
}
```

#### **Regular User**

```json
{
  "username": "normalUser",
  "email": "user@example.com",
  "password": "User123!",
  "role": "user"
}
```

> **Tip:** Admin can manage books; user can only read books.

---

### **Login – Get Token**

**POST** `http://localhost:3000/api/auth/login`

#### **Example Login JSON**

```json
{
  "email": "admin@example.com",
  "password": "Admin123!"
}
```

**Response Example:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

> Use this token in **Authorization Header**:
> `Authorization: Bearer <token>`

---

## 2️⃣ Book Routes: `/api/books`

### **Create a Book (Admin Only)**

**POST** `http://localhost:3000/api/books`

```json
{
  "title": "Learning Node.js",
  "author": "John Doe",
  "price": 299,
  "isbn": "978-1-23456-789-0"
}
```

---

### **Get All Books (Any Authenticated User)**

**GET** `http://localhost:3000/api/books`

**Header:**

```
Authorization: Bearer <token>
```

---

### **Get Book by ID (Any Authenticated User)**

**GET** `http://localhost:3000/api/books/1`

---

### **Update a Book (Admin Only)**

**PUT** `http://localhost:3000/api/books/1`

```json
{
  "title": "Learning Node.js - Updated",
  "author": "John Doe",
  "price": 349,
  "isbn": "978-1-23456-789-0"
}
```

---

### **Delete a Book (Admin Only)**

**DELETE** `http://localhost:3000/api/books/1`

---

## ✅ Summary Table for Postman

| Route            | Method | Body                             | Auth Required | Role  |
| ---------------- | ------ | -------------------------------- | ------------- | ----- |
| /api/auth/signup | POST   | `{username,email,password,role}` | No            | Any   |
| /api/auth/login  | POST   | `{email,password}`               | No            | Any   |
| /api/books       | GET    | None                             | Yes           | Any   |
| /api/books/:id   | GET    | None                             | Yes           | Any   |
| /api/books       | POST   | `{title,author,price,isbn}`      | Yes           | Admin |
| /api/books/:id   | PUT    | `{title,author,price,isbn}`      | Yes           | Admin |
| /api/books/:id   | DELETE | None                             | Yes           | Admin |
