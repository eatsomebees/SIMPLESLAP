class Credits extends Phaser.Scene {

    constructor() {
        super("CreditsScene")
    }

    preload() {
            
    }

    create() {
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let spacerY = 45;
        
        
        
        //Credits display
        let creditsConfig = {
            fontFamily: 'URW Chancery L, cursive',
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

            this.add.text(centerX, centerY-spacerY*5.5, ' Brought into being by: ', creditsConfig).setOrigin(0.5);
            this.add.text(centerX, centerY-spacerY*4, ' William Gadd: (Internal Logic and Sound) ', creditsConfig).setOrigin(0.5);
            this.add.text(centerX, centerY-spacerY*3, ' & ', creditsConfig).setOrigin(0.5);
            this.add.text(centerX, centerY-spacerY*2, ' Kenice Washington: (Art and Animation) ', creditsConfig).setOrigin(0.5);

            this.add.text(centerX, centerY+spacerY*5, ' Press \'M\' to return to menu ', creditsConfig).setOrigin(0.5);

            keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }
    }
    }