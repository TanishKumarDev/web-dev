
# Node.js HTTP Module – Notes

### 1. **Concept**

* `http` module allows Node.js to act as **web server**
* Can **handle requests and send responses**
* Supports **HTTP methods** like GET, POST, PUT, DELETE

---

### 2. **Import HTTP Module**

```js
const http = require('http');
```

---

### 3. **Creating a Server**

```js
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node HTTP Server');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

* `req` → request object
* `res` → response object
* `res.writeHead(statusCode, headers)` → sets response status & headers
* `res.end(data)` → ends the response

---

### 4. **Accessing Request Data**

```js
const server = http.createServer((req, res) => {
    console.log('URL:', req.url);
    console.log('Method:', req.method);
    res.end('Check console for request info');
});
```

---

### 5. **Handling Different Routes**

```js
const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    } else if(req.url === '/about' && req.method === 'GET') {
        res.end('About Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});
```

---

### 6. **Sending JSON Response**

```js
const server = http.createServer((req, res) => {
    if(req.url === '/api/users' && req.method === 'GET') {
        const users = [{id: 1, name: 'Tanish'}, {id: 2, name: 'Alex'}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});
```

---

### 7. **Listening on a Port**

```js
server.listen(3000, () => console.log('Server running on port 3000'));
```

---

### 8. **Key Methods & Properties**

| Method / Property                    | Purpose                       |
| ------------------------------------ | ----------------------------- |
| `http.createServer()`                | Creates HTTP server           |
| `req.url`                            | Requested URL                 |
| `req.method`                         | HTTP method (GET, POST, etc.) |
| `res.write(data)`                    | Write response data           |
| `res.end(data)`                      | End response                  |
| `res.writeHead(statusCode, headers)` | Set status & headers          |
| `server.listen(port, callback)`      | Start server on port          |

---

### 9. **Practical Use Cases**

* Simple API server
* Static file server
* Handling GET/POST requests
* Backend for small apps without Express

---

### 10. **Key Takeaways**

* `http` module is **low-level**, flexible
* Can handle requests and responses manually
* For complex apps, developers usually use **Express** on top of `http`
* Understanding HTTP module helps **learn how Express works under the hood**
