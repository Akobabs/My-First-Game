import Fish from "./fish.js";

export default class Environment {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameObjects = [];

    const fish = new Fish(this, "1");
    this.gameObjects.push(fish);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => {
      object.update(deltaTime);
    });
  }

  draw(context) {
    this.gameObjects.forEach((object) => {
      object.draw(context);
    });
  }
}
