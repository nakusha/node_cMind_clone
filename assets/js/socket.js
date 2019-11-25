import { handleNewUser, handleDisconnedted } from "./notifications";
import { handleNewMsg } from "./chat";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = aSocket => (socket = aSocket);

export const initSocket = aSocket => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnedted);
  aSocket.on(events.newMsg, handleNewMsg);
};
