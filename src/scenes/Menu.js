class Menu extends Phaser.Scene {

    constructor() {
        super("menuScene")
    }

    preload() {
        // LOAD AUDIO
        //slap landed
        this.load.audio('cymbal', './assets/cymbal.wav');
        //reload
        this.load.audio('guncock', './assets/guncock.wav');
        //superslap landed
        this.load.audio('inception', './assets/inception.wav');
        //block
        this.load.audio('duck', './assets/rubberduck.wav');
        //the slaps clash
        this.load.audio('clash', './assets/slapclash.wav');


        //p1 locked in
        this.load.audio('select1', './assets/select1.wav');
        //p2 locked in
        this.load.audio('select2', './assets/select2.wav');
        //winner
        this.load.audio('slowclap', './assets/slowclap.wav');
        //taunt laugh
        this.load.audio('haha', './assets/haha.wav');
        

    }

    create() {
        //menu display
        let menuConfig = {
            fontFamily: 'Roboto Condensed',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //title display
        let titleConfig = {
            fontFamily: 'Roboto Condensed',
            fontSize: '35px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let spacerY = 45;

        //title
        this.add.text(centerX, centerY-spacerY*3, ' simple SLAP! ', titleConfig).setOrigin(0.5);

        //start button
        this.add.text(centerX, centerY-spacerY, ' Press \'Q\' to Start ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, ' Press \'P\' for simple mode ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, 370, ' Press \'H\' to Learn How to Play ', menuConfig).setOrigin(0.5);

        //define keys
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyQ)) {
            game.settings = {
                firstTo: 3,
                maxSlaps: 2,
                maxBlocks:2,
            }
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            //simple mode
            game.settings = {
                firstTo: 1,
                maxSlaps: 1,
                maxBlocks:1,
            }
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyH)) {
            this.scene.start("howScene");
        }

        //IMPLEMENT COMPLEXITTY CHANGE HERE (if we get that far)

    }
}