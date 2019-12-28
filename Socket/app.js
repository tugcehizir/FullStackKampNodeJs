const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function ({ res }) {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
    console.log(`${socket.id} bağlantı oluştu`);
    socket.on("disconnect", () => console.log(`${socket.id} çıkış yaptı.`))
    socket.on("message", (msg) => {

        io.emit('post-msg', msg);
    })
})
http.listen(4000, () => console.log('sunucu ayakta'));