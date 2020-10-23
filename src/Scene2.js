//function to pass xy?

class Startscene {

  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add.sprite(800, 500, 'logo')
    this.player.body.collideWorldBounds = true;
    
    console.log("THIS")
  }

  update () {
    if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(300);
    } else if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-300);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(300);
    } else if(this.cursors.up.isDown) {
      this.player.body.setVelocityY(-300);
    } else {
      this.player.body.setVelocityY(0)
    }
  }
}
export default Startscene