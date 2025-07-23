export default class Fish {
  constructor(environment, type) {
    this.gameWidth = environment.gameWidth;
    this.gameHeight = environment.gameHeight;
    this.game = environment;
    this.type = type;
    this.image = document.getElementById(`img-fish${type}`);
    this.size = { width: 128, height: 128 };
    this.position = { x: 0, y: 400 };
    this.direction = "right";
    this.speed = 2;
  }

  draw(context) {
    context.save();

    if (this.direction === "left") {
      context.translate(this.position.x + this.size.width, this.position.y);
      context.scale(-1, 1);
      context.drawImage(this.image, 0, 0, this.size.width, this.size.height);
    } else {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
    }

    context.restore();
  }

  update(deltaTime) {
    this.position.x += this.speed;

    if (
      this.position.x + this.size.width > this.gameWidth ||
      this.position.x < 0
    ) {
      this.speed *= -1;
      this.direction = this.direction === "right" ? "left" : "right";
    }
  }
}
