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
            this.add.text(20,100, 'Each player chooses one of three options, (rock paper scissors style ei., both pick at the same time without knowing the other \nplayer\'s choice. COVER YOUR BOTTONS) In simp. slap, The three options are reload, block, and slap. Slap the opponent when they are \nreloading to get a point! You can only block twice in a row and carry a maximum of 2 slaps. You must have at least one slap loaded to \nslap. Reload to gain a slap and reset your blocks. Successfully block a slap to reset your blocks. Slapping an opponent who can’t \nblock yields 2 points. First to 3 points wins. The first button you push is your final choice, you can’t swap options. Whoa, that is \nalot. Take a second, maybe use simp. mode to help lean the rules?  There’s no in game timer right now, so counting down from 3 out \nloud like plebs in the olden days is recommended. \n[for more advanced players... have fun with your own groovy, JUICY rhythms, slow or snappy :o]', {fontSize: '12px', fill: '#ffffff'});
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