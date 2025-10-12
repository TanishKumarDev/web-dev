# Real-Time MERN Features with TypeScript + Socket.io

### **Objective**

* Combine **TypeScript** for type safety and **Socket.io** for real-time events.
* Extend our Book Store API to **notify clients when a new book is added**.
* Ensure **typed events and models** for reliability.

---

## 1️⃣ Setup TypeScript + Socket.io in Node

**Install dependencies:**

```bash
npm install express socket.io mongoose
npm install typescript ts-node nodemon @types/node @types/express @types/socket.io --save-dev
```

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Package.json scripts:**

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
}
```

---

## 2️⃣ Define Typed Book Model (src/models/book.ts)

```typescript
import { Schema, model, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  price: number;
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true }
});

export const Book = model<IBook>('Book', bookSchema);
```

---

## 3️⃣ Setup Server with Socket.io (src/index.ts)

```typescript
import express, { Express, Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import { Book, IBook } from './models/book';

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

// Socket.io connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookstore');

// Routes
app.get('/books', async (req: Request, res: Response<IBook[]>) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/books', async (req: Request<{}, {}, IBook>, res: Response) => {
  try {
    const book = new Book(req.body);
    await book.save();

    // Emit event to all clients
    io.emit('newBook', book);

    res.status(201).json(book);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 4️⃣ Frontend (public/index.html) – React or Plain JS

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io('http://localhost:3000');

  // Listen for new books
  socket.on('newBook', (book) => {
    console.log('New book added:', book);
    alert(`New Book: ${book.title} by ${book.author}`);
  });
</script>
```

**Logic:**

* When a book is added via POST `/books`, the server emits `newBook`.
* All connected clients instantly receive this notification.
* Fully **typed** via TypeScript → ensures `book` has `title`, `author`, `price`.

---

## 5️⃣ Key Takeaways

1. **Type Safety + Real-Time** = Reliable, interactive MERN backend
2. **Socket.io Events** → `io.emit` for global, `socket.to(room)` for rooms
3. **TypeScript Integration** → typed models, typed request/responses, safer code
4. **MERN Ready** → React can safely consume typed API & events

---

✅ **Next Step Suggestion:**
We can **upgrade this setup to a full MERN app**:

* React front-end with TypeScript
* Connect to `/books` API
* Live book notifications via Socket.io
* Rooms for different genres (optional)
