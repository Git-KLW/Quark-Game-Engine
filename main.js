class Game {
  constructor() {
    this.colliders = [];
    class Vector2 {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      };
    };
    class RigidBody2D {
      constructor(x, y, direction, vx, vy, collider) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.velocity = {"xv":vx, "yv":vy};
        this.gravity = true;
        this.collider = collider;
        this.move = function () {
          this.velocity.xv *= 0.8;
          this.velocity.yv *= 0.8;
          this.x += this.velocity.xv;
          if (this.collider.checkCollisions() == true) {
            this.x -= this.velocity.xv;
          };
          this.y += this.velocity.yv;
          if (this.collider.checkCollisions() == true) {
            this.y -= this.velocity.yv;
          };
        };
      };
    };
    // TODO: Add Softbodies
    class Collider {
      constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        game.Colliders.push(this);
      };
    };
    class BoxCollider extends Collider {
      constructor() {
        this.checkCollisions = function () {
          game.Colliders.forEach((collider) => {
            if (collider != this &&
                this.x < collider.x + collider.width &&
                this.x + this.width > collider.x &&
                this.y < collider.y &&
                this.y + this.height > collider.y) {
              return true;
            };
          });
        };
      };
    };
    class CircularCollider extends Collider {
      constructor() {
        this.checkCollisions = function () {
          game.Colliders.forEach((collider) => {
            if (collider != this &&
                Math.sqrt((collider.y-this.y)**2 + (collider.x-this.x)**2) <= this.width {
              return true;
            };
          });
        };
      };
    };
  };
};
