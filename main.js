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
      constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = 0;
        this.velocity = {"xv":0, "yv":0};
        this.gravity = null;
        this.collider = null;
      };
    };
    // TODO: Add Softbodies
    class Collider {
      constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.state = null;
        game.Colliders.push(this);
      };
    };
    class BoxCollider extends Collider {
      constructor() {
        game.Colliders.forEach((collider) => {
          
        });
      };
    };
    // TODO: Add Circlar Colliders
  };
};
