import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`Server Start : http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

// http://localhost:4000/socket.io/socket.io.js
//socket말고 ws라는 라이브러리도있다.
const io = socketIO.listen(server);

io.on("connection", socket => {
  // broadcast 는 접속한 사람을 제외한 모든 사람에게 이벤트를 보낸다.
  //socket.broadcast.emit("hello");
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname
    });
  });

  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
