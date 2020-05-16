class Play extends Phaser.Scene {

    constructor() {
        super("playScene")
    }

    preload() {
        //background
        this.load.image('background', './assets/background.png');
        //player sprites 
        this.load.image('player1', './assets/player1.png');
        this.load.image('player2', './assets/player2.png');

        //players


        //load spritesheets(if needed)
    }

    create() {

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        //background music

        //animations

        //background
        this.add.image(centerX, centerY, 'background');

        //spawn prefabs
        this.p1 = new Player(this, centerX - 480, centerY - 240, 'player1').setOrigin(0,0);
        this.p1 = new Player(this, centerX, centerY - 240, 'player2').setOrigin(0,0);

        //score display
        

        //define keys
        //player 1
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //player 2
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

    }

    update() {

    }

}