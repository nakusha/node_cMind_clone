import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
//clients에서는 import 를 할 수 없기 때문에 서버에서 보내줘야한다.
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () => {
  console.log(`Server Start : http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

// http://localhost:4000/socket.io/socket.io.js
//socket말고 ws라는 라이브러리도있다.
const io = socketIO.listen(server);

io.on("connection", socket => socketController(socket));
