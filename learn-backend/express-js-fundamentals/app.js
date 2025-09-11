const express = require('express');  // Purpose: Import Express
const app = express();  // Purpose: Create Express app instance

app.use(express.json());  // Purpose: Middleware to parse JSON request bodies

// Basic Route
app.get('/', (req, res) => {  // Purpose: Handle GET request to root
  res.send('Hello Express');  // Purpose: Send plain text response
});

// Route with Parameters
app.get('/users/:id', (req, res) => {  // Purpose: Dynamic route with :id
  res.json({ id: req.params.id });  // Purpose: Return JSON with URL param
});

// Custom Middleware (Logger)
app.use((req, res, next) => {  // Purpose: Log every request
  console.log(`${req.method} ${req.url}`);
  next();  // Purpose: Pass control to next middleware/route
});

const port = 3000;
app.listen(port, () => {  // Purpose: Start server
  console.log(`Server running on http://localhost:${port}`);
});
