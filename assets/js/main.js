import { handleMessageNotif } from "./chat";

// 동일한 서버에 접속
const socket = io("/");

//socket.on("hello", () => console.log("Somebody joined"))

function sendMessage(message) {
  socket.emit("newMessage", { message: message });
  console.log(`You: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
