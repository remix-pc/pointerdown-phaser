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

function preload() {
    this.load.spritesheet('sprite', 'assets/finx.jpg', {
        frameWidth: 64,
        frameHeight: 64
    });

}

var duration;

function create() {
    var chat = document.getElementById('chat').value   
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