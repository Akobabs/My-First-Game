import Environment from "./environment.js";

const canvas = document.getElementById("game-screen");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let lastTime = 0;

let environment = new Environment(GAME_WIDTH, GAME_HEIGHT);

function gameloop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  environment.update(deltaTime);
  environment.draw(context);

  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);

function getRandCol() {
  return Math.floor(Math.random() * 256);
}
