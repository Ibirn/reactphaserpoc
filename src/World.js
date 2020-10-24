//function to pass xy?

class World {
  preload() {
    // this.load.image("background", "assets/world.png");
    this.load.tilemapTiledJSON("world", "assets/sapphire.json");
    this.load.image("overworld_proper", "assets/overworld_proper.png");
    // 112, 16
    this.load.spritesheet("hulk", "assets/sumoHulk_spriteSheet.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // this.background = this.add.image(0, 0, "background").setOrigin(0, 0);

    // MAP :
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

    console.log(this);
    // PLAYER :
    this.player = this.physics.add.sprite(32, 656, "hulk").setScale(2);
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
export default World;
