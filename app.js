require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require('express'); //express import
const app = express(); //express server

const http = require('http'); //http import
const server = http.createServer(app); //http server
server.listen(PORT) // http server/ main server init

const socket = require('socket.io'); //socket io import
const io = io.socket(server); //io server

io.on('connection', (socket) => {
    console.log(socket.id, "connection established");
})

