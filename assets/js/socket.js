import { handleNewUser, handleDisconnedted } from "./notifications";
import { handleNewMsg } from "./chat";
import { handleBeganPath, handleStrokedPath, handleFilled } from "./paint";

let socket = null;

export const getSocket = () => socket;

export const initSocket = aSocket => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnedted);
  socket.on(events.newMsg, handleNewMsg);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filled, handleFilled);
};
