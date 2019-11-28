import {
  disableCanvas,
  hideCanvasControls,
  enableCanvas,
  showCanvasControls,
  resetCanvase
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = players => {
  board.innerHTML = "";
  players.forEach(player => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotis = text => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStart = () => {
  setNotis("");
  disableCanvas();
  hideCanvasControls();
  enableChat();
};

export const handlePainterNotif = ({ word }) => {
  enableCanvas();
  showCanvasControls();
  disableChat();
  setNotis(`You are the lader, paint :${word}`);
};

export const handleGameEnded = () => {
  setNotis("Game ended.");
  disableCanvas();
  hideCanvasControls();
  resetCanvase();
};

export const handleGameStarting = () => {
  setNotis("Game will start soon");
};
