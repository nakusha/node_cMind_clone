import {
  disableCanvas,
  hideCanvasControls,
  enableCanvas,
  showCanvasControls,
  resetCanvase
} from "./paint";

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
};

export const handlePainterNotif = ({ word }) => {
  enableCanvas();
  showCanvasControls();
  setNotis(`You are the lader, paint :${word}`);
};

export const handleGameEnded = () => {
  setNotis("Game ended.");
  disableCanvas();
  hideCanvasControls();
  resetCanvase();
};
