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

function handleMessageNotif(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}

socket.on("messageNotif", handleMessageNotif);
