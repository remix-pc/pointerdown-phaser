var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);


function createInput() {
    var input = game.add.dom(400, 550, 'input', null, 'type="text"');
    input.scaleX = 0.5;
    input.scaleY = 0.5;
    input.style.width = '200px';
    input.style.height = '40px';
    input.style.fontSize = '24px';
    input.style.padding = '8px';
    input.style.border = '2px solid #ccc';
    input.style.borderRadius = '8px';
    input.style.background = '#fff';
    input.style.color = '#000';
    input.style.textAlign = 'center';
    input.value = 'Digite algo';
}




function preload() {
    this.load.spritesheet('sprite', 'assets/penguin.png', {
        frameWidth:  600,
        frameHeight: 600
    });

}

var duration;

function create() {
    this.cameras.main.setBackgroundColor('#fff')
    var sprite = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'sprite');
    var walkAnimation = this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('sprite', {
            start: 0,
            end: 7
        }),
        frameRate: 10,
        repeat: -1
    });


    var self = this;


    this.input.on('pointerdown', function (pointer) {
        var duration = Phaser.Math.Distance.Between(sprite.x, sprite.y, pointer.x, pointer.y) * 5;
         //duration = distance / 100;

        self.tweens.add({
            targets: sprite,
            x: pointer.x,
            y: pointer.y,
            duration: duration,
            onStart: function () {
                sprite.anims.play('sprite', true);
            },
            onComplete: function () {
                sprite.anims.stop();
            }
        });
    });
}