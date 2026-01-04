const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });
});

io.on("connection", (socket) => {
  socket.broadcast.emit("herkese_mesaj", {
    user: "Sistem",
    text: "Yeni bir kullanıcı sohbete katıldı!",
  });

  socket.on("chat_message", (data) => {
    io.emit("chat_message", data);
  });
});

server.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor");
});
