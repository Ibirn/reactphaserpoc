//function to pass xy?

class World2 {
  preload() {
    this.load.tilemapTiledJSON("world", "assets/sapphire.json");
    this.load.image("overworld_proper", "assets/overworld_proper.png");
    this.load.spritesheet("hulk", "assets/sumoHulk_spriteSheet.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // MAP:
    const map = this.add.tilemap("world");
    const tileset = map.addTilesetImage("overworld_proper", "overworld_proper");
    const collision = map
      .createStaticLayer("Collision", tileset, 0, 0)
      .setScale(2);
    const grass = map.createStaticLayer("Grass", tileset, 0, 0).setScale(2);
    const path = map.createStaticLayer("Path", tileset, 0, 0).setScale(2);
    const buildings = map
      .createStaticLayer("Building", tileset, 0, 0)
      .setScale(2);
    collision.setCollisionBetween(0, 2);
    buildings.setDepth(0);
    grass.setDepth(0);
    path.setDepth(0);
    collision.setDepth(0);
    // PLAYER :
    this.player = this.physics.add.sprite(400, 496, "hulk").setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.body.collideWorldBounds = true;
    this.physics.add.collider(this.player, collision);
  }

  update() {
    // CONTROLS :
    if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(300);
    } else if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-300);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(300);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-300);
    } else {
      this.player.body.setVelocity(0);
    }
  }
}

export default World2;
