class Menu extends Phaser.Scene {

    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.image('title1', './assets/title1.png');
        this.load.image('title2', './assets/title2.png');
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
        this.anims.create({
            key: 'title',
            frames: [
                { key: 'title1' },
                { key: 'title2' },
                { key: 'title1', duration:50 }
                
            ],
            frameRate: 8,
            repeat: -1
        });
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
        let spacerY = 175;

        //title
        this.add.sprite(centerX, centerY, 'title1').play('title');

        //start button
        this.add.text(centerX, centerY-85, ' Press \'Q\' to Start ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY-30, ' Press \'P\' for simple mode ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+spacerY, ' Press \'H\' to Learn How to Play ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+spacerY+80, ' Press \'W\' to see who would do something like this ', menuConfig).setOrigin(0.5);

        //define keys
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

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
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.scene.start("CreditsScene");
        }

        //IMPLEMENT COMPLEXITTY CHANGE HERE (if we get that far)

    }
}