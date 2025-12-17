const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); 
const io = new Server(server); 


app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('⚡ Um usuário conectou! ID:', socket.id);

    socket.on('chat message', (msg) => {
        console.log('Mensagem recebida:', msg);

        io.emit('chat message', msg);
    });

    socket.on('typing', () => {
        socket.broadcast.emit('typing');
    });
    
    socket.on('disconnect', () => {
        console.log('Usuário desconectou.');
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});