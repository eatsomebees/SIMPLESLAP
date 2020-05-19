class How extends Phaser.Scene {

    constructor() {
        super("howScene")
    }

    preload() {
            
    }

        create() {
        let centerX = game.config.width/2;
        
        
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
            this.add.text(20,100, 'Each player chooses one of three options, rock paper scissors style ei., both pick at the same time without knowing the other \nplayer’s choice. The three options are reload, block, and slap. Slap the opponent when they are reloading to get a point! You \ncan only block twice in a row and carry a maximum of 2 slaps. You must have at least one slap loaded to slap. Reload to gain \na slap and reset your blocks. Successfully block a slap to reset your blocks. Slapping an opponent who can’t block yields 2 \npoints. First to 3 points wins. The first button you push is your final choice for the round. You can’t swap options, even \nif your opponent has not yet decided. There’s no in game timer right now, so counting down from 3 out loud like plebs in the \nolden days is recommended.', {fontSize: '12px', fill: '#ffffff'});
            //back to main menu button
            this.add.text(centerX, 400, ' Press \'M\' to return to menu ', menuConfig).setOrigin(0.5);

            keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }
    }
    }