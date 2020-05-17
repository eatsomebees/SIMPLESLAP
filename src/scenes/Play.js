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

        //helpful variables
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        this.gameOver = false;
        this.p1Choice = null;
        this.p2Choice = null;


        //background music

        //animations

        //background
        this.add.image(centerX, centerY, 'background');

        //spawn prefabs
        this.p1 = new Player(this, centerX - 480, centerY - 240, 'player1').setOrigin(0,0);
        this.p2 = new Player(this, centerX, centerY - 240, 'player2').setOrigin(0,0);

        //score display
        let scoreConfig = {
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

        //vert spacer
        let spacerY = 45;
        //horis spacer left
        let spacerXL = 5;
        //horis spacer right
        let spacerXR = 830;


        //p1 display
        this.p1score = this.add.text(spacerXL, game.config.height-spacerY, "Score: " + this.p1.score, scoreConfig);
        this.p1slaps = this.add.text(spacerXL, game.config.height-spacerY*2, "Slaps: " + this.p1.slaps + "/" + game.settings.maxSlaps, scoreConfig);
        this.p1blocks = this.add.text(spacerXL, game.config.height-spacerY*3, "Blocks: " + this.p1.blocks + "/" + game.settings.maxBlocks, scoreConfig);

        //p2 display
        this.p2score = this.add.text(spacerXR, game.config.height-spacerY, "Score: " + this.p2.score, scoreConfig);
        this.p2slaps = this.add.text(spacerXR, game.config.height-spacerY*2, "Slaps: " + this.p2.slaps + "/" + game.settings.maxSlaps, scoreConfig);
        this.p2blocks = this.add.text(spacerXR, game.config.height-spacerY*3, "Blocks: " + this.p2.blocks + "/" + game.settings.maxBlocks, scoreConfig);
        
        //first to *firstTo* display
        this.goal = this.add.text(game.config.width/2 - 40, 10, "first to " + game.settings.firstTo, scoreConfig);

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

    //logic for checking if game is over goes here

    //EVERYTHING below GOES IN A FAT WHILE LOOP THAT NEEDS TO GO HERE
    //while(this.p1.score < game.settings.firstTo && this.p2.score < game.settings.firstTo){}

        //fill the p1Choice and p2Choice variables
        //TESTED!: variables fill correctly
        /*
        p1:
        Q = SLAP
        W = BLOCK
        A = RELAOD
        */
        if(this.p1Choice == null)
        {
            if(Phaser.Input.Keyboard.JustDown(keyQ)){
                this.p1Choice = "s";
            }
            if(Phaser.Input.Keyboard.JustDown(keyW)){
                this.p1Choice = "b";
            }
            if(Phaser.Input.Keyboard.JustDown(keyA)){
                this.p1Choice = "r";
            }
        }
        /*
        p2:
        O = SLAP
        P = BLOCK
        L = RELAOD
        */
        if(this.p2Choice == null)
        {
            if(Phaser.Input.Keyboard.JustDown(keyO)){
                this.p2Choice = "s";
            }
            if(Phaser.Input.Keyboard.JustDown(keyP)){
                this.p2Choice = "b";
            }
            if(Phaser.Input.Keyboard.JustDown(keyL)){
                this.p2Choice = "r";
            }
        }


        //where the MAGIC happens (logic converted from my java protoype)
        //sound and animations triggers go in here, when we have them
        //extra question, difference between just using 'if' statments and 'if else' in this case?
        //all cases TESTED to activate right, so if they're bugs they're inside the choice check if statements 

        //extra if statement to try and improve preformance?
        if(this.p1Choice != null && this.p2Choice != null)
        {
            //at max blocks report
            if(this.p1.blocks == game.settings.maxBlocks)
            {
                //add another text object
            }
            
            else if(this.p2.blocks == game.settings.maxBlocks)
            {
                //add another text object
            }
            
            //scenario 1, both slap
            else if(this.p1Choice == "s" && this.p2Choice == "s")
            {
                //test 
                console.log("both slap!");
                //MORE LOGIC GOES HERE
            }
            //scenario 2, p1: slap , p2: block
            else if(this.p1Choice == "s" && this.p2Choice == "b")
            {
                //test 
                console.log("p1: slap! p2: block.");
                //MORE LOGIC GOES HERE
            }
            //scenario 3, p1: slap , p2: reload
            else if(this.p1Choice == "s" && this.p2Choice == "r")
            {
                //test 
                console.log("p1: slap! p2: reload.");
                //MORE LOGIC GOES HERE
            }
            //scenario 4, both block
            else if(this.p1Choice == "b" && this.p2Choice == "b")
            {
                //test 
                console.log("both block.");
                //MORE LOGIC GOES HERE
            }
            //scenario 5, p1: block , p2: reload
            else if(this.p1Choice == "b" && this.p2Choice == "r")
            {
                //test 
                console.log("p1: block. p2: reload.");
                //MORE LOGIC GOES HERE
            }
            //scenario 6, p1: block , p2: slap
            else if(this.p1Choice == "b" && this.p2Choice == "s")
            {
                //test 
                console.log("p1: block. p2: slap!");
                //MORE LOGIC GOES HERE
            }
            //scenario 7, p1: reload , p2: slap (same as 3 but swapped)
            else if(this.p1Choice == "r" && this.p2Choice == "s")
            {
                //test 
                console.log("p1: reload. p2: slap!");
                //MORE LOGIC GOES HERE
            }
            //scenario 8, p1: reload , p2: block (same as 5 but swapped)
            else if(this.p1Choice == "r" && this.p2Choice == "b")
            {
                //test 
                console.log("p1: reload. p2: block.");
                //MORE LOGIC GOES HERE
            }
            //scenario 9, both reload
            else if(this.p1Choice == "r" && this.p2Choice == "r")
            {
                //test 
                console.log("both reload");
                //MORE LOGIC GOES HERE
            }
            else
            {
                console.log("oh dear god has abandoned me");
            }
                
        }
        
        
    }

}