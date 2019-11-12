// 동일한 서버에 접속
const socket = io("/")

socket.on("hello", () => console.log("Somebody joined"))