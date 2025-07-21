const canvas = document.getElementById('game-Screen');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let lastTime = 0;
let isClick = true;

canvas.addEventListener('click', () =>{
    isClick = !isClick; // Toggle the game state on click
});


function gameLoop(timestamp) {
    if (!isClick) return; 

    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    const red = getGameColor();
    const green = getGameColor();
    const blue = getGameColor();
    
    // RGB syntax and draw the rectangle
    context.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

function getGameColor() {
    // Generate a random color value between 0 and 255
    return (Math.random() * 256);
}