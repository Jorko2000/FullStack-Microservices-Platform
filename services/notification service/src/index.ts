import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
const app = express();
const server = http.createServer(app);
const io = new Server(server);
io.on('connection', socket => {
    console.log('Client connected');
    socket.on('message', msg => io.emit('message', msg));
});
app.get('/', (req,res)=> res.send('Notification Service running'));
server.listen(3001, ()=> console.log('Notification service on 3001'));
