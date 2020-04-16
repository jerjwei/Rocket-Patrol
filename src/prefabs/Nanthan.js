// Nanthan prefab
class Nanthan extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add object to existing scene, displayList, updateList
    }

    update() {
        // left/right movement
        if(this.x >= 47 || this.y >= 0){
            this.x -= 1;
            this.y -= 1;
        }else if(this.x <= 578 || this.y <= game.config.width){
            this.x += 1;
            this.y += 1;
        }
    }
}