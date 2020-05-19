class Menu extends Phaser.Scene {

    constructor() {
        super("menuScene")
    }

    preload() {

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

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let spacerY = 45;

        //start button
        this.add.text(centerX, centerY-spacerY, ' Press \'P\' to Start ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, ' Press \'Q\' for simp mode ', menuConfig).setOrigin(0.5);

        //define keys
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyQ)) {
            //simp mode
            game.settings = {
                firstTo: 1,
                maxSlaps: 1,
                maxBlocks:1,
            }
            this.scene.start("playScene");
        }

        //IMPLEMENT COMPLEXITTY CHANGE HERE (if we get that far)

    }
}