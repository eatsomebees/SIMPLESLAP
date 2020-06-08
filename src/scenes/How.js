class How extends Phaser.Scene {

    constructor() {
        super("howScene")
    }

    preload() {

        this.load.image('howPage1', './assets/howPage1.png');
        this.load.image('howPage2', './assets/howPage2.png');
        this.load.image('howPage3', './assets/howPage3.png');
        this.load.image('howPage4', './assets/howPage4.png');
            
    }

    create() {

        this.sceneNum = 0;
        this.newScene = true;

        this.centerX = game.config.width/2;
        this.centerY = game.config.height/2;
        this.spacerY = 50;
        this.spacerX = 45;
        
        this.helpPic1 = this.add.image(this.centerX, this.centerY+this.spacerY+10, 'howPage1').setScale(0.7, 0.7);
        this.helpPic2 = this.add.image(this.centerX, this.centerY+this.spacerY, 'howPage2').setScale(0.7, 0.7);
        this.helpPic3 = this.add.image(this.centerX+this.spacerX, this.centerY+this.spacerY*2+10, 'howPage3').setScale(0.7, 0.7);
        this.helpPic4 = this.add.image(this.centerX, this.centerY+this.spacerY*3, 'howPage4').setScale(0.7, 0.7);

        //How display
        this.HowConfig = {
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


        this.pageNum = this.add.text(this.centerX, this.centerY-this.spacerY*5.5, ' Page: ' + (1 + this.sceneNum) + " ", this.HowConfig).setOrigin(0.5);
        
        this.line1 = this.add.text(this.spacerX, this.centerY-this.spacerY*4, "" , this.HowConfig);
        this.line2 = this.add.text(this.spacerX, this.centerY-this.spacerY*3, "" , this.HowConfig);
        this.line3 = this.add.text(this.spacerX, this.centerY-this.spacerY*2, "" , this.HowConfig);
        this.line4 = this.add.text(this.spacerX, this.centerY-this.spacerY, "" , this.HowConfig);
        this.line5 = this.add.text(this.spacerX, this.centerY, "" , this.HowConfig);
        this.line6 = this.add.text(this.spacerX, this.centerY+this.spacerY, "" , this.HowConfig);

        //back to main menu button, next page and previous page buttons
        this.add.text(this.centerX, this.centerY+this.spacerY*5.5, ' Press \'M\' to return to menu ', this.HowConfig).setOrigin(0.5);
        this.prevPage = this.add.text(this.spacerX*2.2, this.centerY+this.spacerY*5, ' ... ', this.HowConfig).setOrigin(0.5);
        this.nextPage = this.add.text(game.config.width-this.spacerX*2, this.centerY+this.spacerY*5, ' Press \'P\' -> ', this.HowConfig).setOrigin(0.5);

        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }

        if(Phaser.Input.Keyboard.JustDown(keyQ)) {
            if(this.sceneNum > 0)
            {
                this.sceneNum--;
                this.newScene = true;
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyP)) {
            if(this.sceneNum < 4)
            {
                this.sceneNum++;
                this.newScene = true;
            }
        }

        //
        if(this.newScene)
        {
            if(this.sceneNum == 0)
            {
                this.pageNum.text = " Page: " + (1 + this.sceneNum) + " " ;
                this.prevPage.text = " ... ";
                this.nextPage.text = " Press \'P\' -> ";

                //lines
                this.line1.text = " So you wanna get slap'n? It's pretty simple. ";
                this.line2.text = " You and your opponent only have three options: ";
                this.line3.text = " (once you choose, you're locked in until your opponent does) ";
                this.line4.text = " 1) Reload ";
                this.line5.text = " 2) SLAP! ";
                this.line6.text = " 3) Block ";
                

                //pics
                this.helpPic1.visible = true;
                this.helpPic2.visible = false;
                this.helpPic3.visible = false;
                this.helpPic4.visible = false;

                
            }
            else if(this.sceneNum == 1)
            {
                this.pageNum.text = " Page: " + (1 + this.sceneNum) + " " ;
                this.prevPage.text = " <- Press \'Q\' ";
                this.nextPage.text = " Press \'P\' -> ";

                //lines
                this.line1.text = " RELOAD: ";
                this.line2.text = " - adds one to your slap count (unless it's full) ";
                this.line3.text = " ... BUT, leaves you vulnerable to gettn SLAP!'d ";
                this.line4.text = "";
                this.line5.text = "";
                this.line6.text = "";

                //pics
                this.helpPic1.visible = false;
                this.helpPic2.visible = true;
                this.helpPic3.visible = false;
                this.helpPic4.visible = false;


            }
            else if(this.sceneNum == 2)
            {
                this.pageNum.text = " Page: " + (1 + this.sceneNum) + " " ;
                this.prevPage.text = " <- Press \'Q\' ";
                this.nextPage.text = " Press \'P\' -> ";

                //lines
                this.line1.text = " SLAP!: ";
                this.line2.text = " - must have at least one slap loaded ";
                this.line3.text = " - subtracts one from slap count ";
                this.line4.text = " - get a point if other player is reloading ";
                this.line5.text = " ... BUT, can be blocked ";
                this.line6.text = "";

                //pics
                this.helpPic1.visible = false;
                this.helpPic2.visible = false;
                this.helpPic3.visible = true;
                this.helpPic4.visible = false;

            }
            else if(this.sceneNum == 3)
            {
                this.pageNum.text = " Page: " + (1 + this.sceneNum) + " " ;
                this.prevPage.text = " <- Press \'Q\' ";
                this.nextPage.text = " Press \'P\' -> ";

                //lines
                this.line1.text = " BLOCK: ";
                this.line2.text = " - succecful (opponet chose to slap) -> negates the opponent's slap ";
                this.line3.text = " - failed (opponet chose something else) -> adds one to block meter ";
                this.line4.text = " - cannot block when block meter is full ";
                this.line5.text = " - block meter resets to zero after a succecful block or reload ";
                this.line6.text = "";

                //pics
                this.helpPic1.visible = false;
                this.helpPic2.visible = false;
                this.helpPic3.visible = false;
                this.helpPic4.visible = true;

            }
            else if(this.sceneNum == 4)
            {
                this.pageNum.text = " Page: " + (1 + this.sceneNum) + " " ;
                this.prevPage.text = " <- Press \'Q\' ";
                this.nextPage.text = " ... ";

                //lines
                this.line1.text = " That should be all you need to know. ";
                this.line2.text = " The best way to understand your options is to play a few games! ";
                this.line3.text = " (remember to cover your buttons in real life) ";
                this.line4.text = " MODES: ";
                this.line5.text = " default: no timer, first to 3 ";
                this.line6.text = " simple: the mindgame distilled ";

                //pics
                this.helpPic1.visible = false;
                this.helpPic2.visible = false;
                this.helpPic3.visible = false;
                this.helpPic4.visible = false;

            }
            else{

                console.log("That's a big oof buddy.");
            }

            this.newScene = false;
        }

        
    }
}