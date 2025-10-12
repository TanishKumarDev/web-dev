const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (frontend)
app.use(express.static('public'));

// Listen for connections
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.emit('welcome', 'Hello! You are connected.');

  socket.on('chatMessage', (msg) => {
    console.log('Message received:', msg);
    io.emit('broadcastMessage', msg); // send to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


server.listen(3000, () => console.log('Socket.io server running on port 3000'));
