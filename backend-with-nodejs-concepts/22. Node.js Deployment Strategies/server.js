const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" } // allow all origins for testing
});

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Socket.IO server running');
});

// Socket connection
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Listen for messages from client
    socket.on('chatMessage', (msg) => {
        console.log('Message received:', msg);
        // Broadcast message to all clients
        io.emit('chatMessage', msg);
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
