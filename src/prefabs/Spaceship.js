//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // add object to existing scene, displayList, updateList
        this.points = pointValue;
        this.ran = Phaser.Math.Between(-1, 1);
    }

    

    update() {
        // move spaceship left
        if(ran>0){
            this.x -= game.settings.spaceshipSpeed;
        }else{
            this.x -= game.settings.spaceshipSpeed;
        }
        
        // wraparound screen bounds
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }else if(this.x >= this.width - 0){
            this.x = 0;
        }
    }

    reset(){
        this.x = game.config.width;
    }
}