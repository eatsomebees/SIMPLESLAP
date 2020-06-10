class Play extends Phaser.Scene {

    constructor() {
        super("playScene")
    }
animation
    preload() {
        //background music
        this.load.audio('bg', './assets/bg.mp3');
        //background
        this.load.image('bg1', './assets/backgroundd1.png');
        this.load.image('bg2', './assets/backgroundd2.png');
        this.load.image('bg3', './assets/backgroundd3.png');

        //player sprites 
        this.load.image('player2slapped1', './assets/player2slapped1.png');
        this.load.image('player2slapped2', './assets/player2slapped2.png');
        this.load.image('player2slapped3', './assets/player2slapped3.png');
        this.load.image('player1', './assets/player11.png');
        this.load.image('player2', './assets/player2.png');
        this.load.image('player3', './assets/player3.png');
        this.load.image('player4', './assets/player4.png');
        this.load.image('player5', './assets/player5.png');
        this.load.image('player21', './assets/player21.png');
        this.load.image('player22', './assets/player22.png');
        this.load.image('player23', './assets/player23.png');
        this.load.image('p1slapped1', './assets/player1slapped1.png');
        this.load.image('p1slapped2', './assets/player1slapped2.png');
        this.load.image('p1slapped3', './assets/player1slapped3.png');
        this.load.image('p1slapped4', './assets/player1slapped4.png');
        this.load.image('p1slapped5', './assets/player1slapped5.png');
        this.load.image('p1slapped6', './assets/player1slapped6.png');
        this.load.image('p2reload1', './assets/player2eload1.png');
        this.load.image('p2reload2', './assets/player2eload2.png');
        this.load.image('p2reload3', './assets/player2eload3.png');
        this.load.image('p2reload5', './assets/player2eload5.png');
        this.load.image('p2reload6', './assets/player2eload6.png');
        this.load.image('p2reload7', './assets/player2eload7.png');
        this.load.image('p2reload8', './assets/player2eload8.png');
        this.load.image('p2block5', './assets/player2block5.png');
        this.load.image('p2block6', './assets/player2block6.png');
        this.load.image('p2block7', './assets/player2block7.png');
        this.load.image('p2block8', './assets/player2block8.png');
        this.load.image('p2slap6', './assets/player2slap6.png');
        this.load.image('p2slap7', './assets/player2slap7.png');
        this.load.image('p2slap8', './assets/player2slap8.png');
        this.load.image('p2slap9', './assets/player2slap9.png');

        this.load.image('p1reload1', './assets/player1reload1.png');
        this.load.image('p1reload2', './assets/player1reload2.png');
        this.load.image('p1reload3', './assets/player1reload3.png');
        this.load.image('p1reload4', './assets/player1reload4.png');
        this.load.image('p1reload5', './assets/player1reload5.png');
        this.load.image('p1reload6', './assets/player1reload6.png');
        this.load.image('p1reload7', './assets/player1reload7.png');
        this.load.image('p1block5', './assets/player1block5.png');
        this.load.image('p1block6', './assets/player1block6.png');
        this.load.image('p1block7', './assets/player1block7.png');
        this.load.image('p1block8', './assets/player1block8.png');
        this.load.image('p1slap6', './assets/player1slap6.png');
        this.load.image('p1slap7', './assets/player1slap7.png');
        this.load.image('p1slap8', './assets/player1slap8.png');
        this.load.image('p1slap9', './assets/player1slap9.png');
       





        //load spritesheets(if needed)
    }

    create() {

        //HELPFUL VARIABLES
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        this.gameOver = false;
        this.p1Choice = null;
        this.p2Choice = null;
        //check is display needs to be updated
        this.p1update = false;
        this.p2update = false;

        //background music
        //loops background music until player restarts
        this.bgm = this.sound.add('bg', {
            mute:false,
            volume:0.3,
            rate:1,
            loop:true
        });
        this.bgm.play();

        //animations

        
        
       this.anims.create({
        key: 'bg',
        frames: [
            { key: 'bg1' },
            { key: 'bg2' },
            { key: 'bg3', duration:50 }
            
        ],
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'p1',
        frames: [
            { key: 'player1' },
            { key: 'player2' },
            { key: 'player2' },
            { key: 'player3' },
            { key: 'player3' },
            { key: 'player4' },
            { key: 'player4' },

            { key: 'player1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'p1slapped',
        frames: [
            { key: 'p1slapped1' },
            { key: 'p1slapped2' },
            { key: 'p1slapped3' },
            { key: 'p1slapped4' },
            { key: 'p1slapped5' },
            { key: 'p1slapped6' },

            { key: 'player1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p2slapped',
        frames: [
            { key: 'player2slapped1' },
            { key: 'player2slapped1' },
            { key: 'player2slapped2' },
            { key: 'player2slapped2' },
             { key: 'player21', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p2',
        frames: [
            { key: 'player21' },
            { key: 'player21' },
            { key: 'player21' },
            { key: 'player22' },
            { key: 'player22' },
            { key: 'player23' },
            { key: 'player23', duration:50 }
            
        ],
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'p2reload',
        frames: [
            { key: 'p2reload1' },
            { key: 'p2reload2' },
            { key: 'p2reload3' },
            { key: 'p2reload5' },
            { key: 'p2reload6' },
            { key: 'p2reload7' },
            { key: 'p2reload8' },     
            { key: 'p2reload1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p1reload',
        frames: [
            { key: 'p1reload1' },
            { key: 'p1reload2' },
            { key: 'p1reload3' },
            { key: 'p1reload4' },
            { key: 'p1reload5' },
            { key: 'p1reload6' },
            { key: 'p1reload1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p2block',
        frames: [
            { key: 'p2reload1' },
            { key: 'p2reload2' },
            { key: 'p2reload3' },
            { key: 'p2block5' },
            { key: 'p2block6' },
            { key: 'p2block7' },
            { key: 'p2block8' },     
            { key: 'p2reload1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p2slap',
        frames: [
            { key: 'p2reload1' },
            { key: 'p2reload2' },
            { key: 'p2reload3' },
            { key: 'p2slap6' },
            { key: 'p2slap7' },
            { key: 'p2slap8' },
            { key: 'p2slap9' },     
            { key: 'p2reload1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p1block',
        frames: [
            { key: 'p1reload1' },
            { key: 'p1reload2' },
            { key: 'p1reload3' },
            { key: 'p1block5' },
            { key: 'p1block6' },
            { key: 'p1block7' },
            { key: 'p1block8' },     
            { key: 'p1reload1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'p1slap',
        frames: [
            { key: 'p1reload1' },
            { key: 'p1reload2' },
            { key: 'p1reload3' },
            { key: 'p1slap6' },
            { key: 'p1slap7' },
            { key: 'p1slap8' },
            { key: 'p1slap9' },     
            { key: 'p1reload1', duration:50 }
            
        ],
        frameRate: 8,
        repeat: 1
    });
    //plays background animation
    this.add.sprite(centerX, centerY, 'bg1').play('bg');
        
        //spawn prefabs
        this.p1 = new Player(this, centerX - 480, centerY - 240, 'player1').setOrigin(0,0).play('p1');
        this.p2 = new Player(this, centerX, centerY - 240, 'player21').setOrigin(0,0).play('p2');
        this.p2reloadd = new Player(this, centerX+10, 450, 'p2reload1');
        this.p1reloadd = new Player(this, 400, centerY+60, 'p1reload1');
       

        //score display (and more)
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
        let spacerXR = 775;


        //p1 display
        this.p1score = this.add.text(spacerXL, game.config.height-spacerY, "Score: " + this.p1.score, scoreConfig);
        this.p1slaps = this.add.text(spacerXL, game.config.height-spacerY*2, "(\'Q\')Slaps: " + this.p1.slaps + "/" + game.settings.maxSlaps, scoreConfig);
        this.p1blocks = this.add.text(spacerXL, game.config.height-spacerY*3, "(\'W\')Blocks: " + this.p1.blocks + "/" + game.settings.maxBlocks, scoreConfig);
        this.p1Reload = this.add.text(spacerXL, game.config.height-spacerY*4, "(\'A\')reload >:( ", scoreConfig);

        //p2 display
        this.p2score = this.add.text(spacerXR, game.config.height-spacerY, "Score: " + this.p2.score, scoreConfig);
        this.p2slaps = this.add.text(spacerXR, game.config.height-spacerY*2, "(\'O\')Slaps: " + this.p2.slaps + "/" + game.settings.maxSlaps, scoreConfig);
        this.p2blocks = this.add.text(spacerXR, game.config.height-spacerY*3, "(\'P\')Blocks: " + this.p2.blocks + "/" + game.settings.maxBlocks, scoreConfig);
        this.p2Reload = this.add.text(spacerXR, game.config.height-spacerY*4, "(\'L\')reload .__. ", scoreConfig);
        
        //first to *firstTo* display
        this.goal = this.add.text(game.config.width/2 - 40, 10, "first to " + game.settings.firstTo, scoreConfig);

        //announcer display
        this.announcer = this.add.text(game.config.width/2, game.config.height-spacerY, "PREPARE YOUR FACE!", scoreConfig).setOrigin(0.5);
        //status display
        this.status = this.add.text(game.config.width/2, game.config.height-spacerY*2, "", scoreConfig).setOrigin(0.5);

        //win display
        this.winner = this.add.text(centerX, centerY-spacerY, "", scoreConfig).setOrigin(0.5);
        this.message = this.add.text(centerX, centerY, "", scoreConfig).setOrigin(0.5);

        //return to menue display
        this.add.text(115, 25, " Press \'M\' for menu ", scoreConfig).setOrigin(0.5);


        //define keys
        //player 1
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //player 2
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        //menu button
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }

    update() {

        if(this.gameOver)
        {
            console.log("gameover");
            if(this.p1.score > this.p2.score)
            {
                this.winner.text = "p1 wins!";
            }
            else
            {
                this.winner.text = "p2 wins!";
            }

            this.message.text = "press \'Q\' to play again or \'M\' to return to menu.";
            if (Phaser.Input.Keyboard.JustDown(keyQ)) {
                this.scene.restart();
                this.bgm.destroy();
              
            }
            if (Phaser.Input.Keyboard.JustDown(keyM)) {
                this.scene.start("menuScene");
                this.bgm.destroy();
            }
        }

    //quit and go to menu at any point
    if (Phaser.Input.Keyboard.JustDown(keyM)) {
        this.scene.start("menuScene");
        this.bgm.destroy();
    }
    

    //logic for checking if game is over goes here

    //EVERYTHING below GOES IN A FAT WHILE LOOP THAT NEEDS TO GO HERE (since update is already looping this is NOT the move...
    //...use gameover boolean instead)
    //while(this.p1.score < game.settings.firstTo && this.p2.score < game.settings.firstTo){}(<- WRONG AF)
    if(!this.gameOver)
    {

        
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
               this.sound.play('select1');
           }
           if(Phaser.Input.Keyboard.JustDown(keyW)){
               this.p1Choice = "b";
               this.sound.play('select1');
           }
           if(Phaser.Input.Keyboard.JustDown(keyA)){
               this.p1Choice = "r";
               this.sound.play('select1');
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
               this.sound.play('select2');
           }
           if(Phaser.Input.Keyboard.JustDown(keyP)){
               this.p2Choice = "b";
               this.sound.play('select2');
           }
           if(Phaser.Input.Keyboard.JustDown(keyL)){
               this.p2Choice = "r";
               this.sound.play('select2');
           }
       }

      

       //where the MAGIC happens (logic converted from my java protoype)
       //sound and animations triggers go in here somewhere, when we have them 
       //extra question, advantages between just using 'if' statments and 'if else' in this case?
       //all 9 cases TESTED to activate correctly, so if there're bugs they're inside of the choice check if statements 
       //remove console.log() stuff later?
       //BETTER SOLUTION: make three methods in the player prefab, pass in opponent's choice to all, move if statements inside.
       //EVEN BETTER SOLUTION: research state machines

       //extra if statement to try and improve preformance? (also makes the ending else statment work)
       if(this.p1Choice != null && this.p2Choice != null)
       {

           //blocks going over max test
           if(this.p1.blocks > game.settings.maxBlocks)
           {
               console.log("oh dear god has abandoned me p1 bs");
           }
           if(this.p2.blocks > game.settings.maxBlocks)
           {
               console.log("oh dear god has abandoned p2 bs");
           }



           //SCENARIO COMPARISON START (round resets -> p1choice and p2choice set back to null, use 'roundReset()')
           //scenario 1: both slap (DONE, TESTING NEEDED)
           if(this.p1Choice == "s" && this.p2Choice == "s")
           {
               console.log("both slap!");
               this.status.text = "both slap!";
               //added STATUS text object 
               this.p2reloadd.play('p2slap');
               this.p1reloadd.play('p1slap');

               //both fail -> round resets
               if(!this.p1.canSlap() && !this.p2.canSlap())
               {
                   console.log("BOTH OF Y'all DON'T HAVE SLAPS! AGAIN!");
                   this.announcer.text = "BOTH OF Y'all DON'T HAVE SLAPS! AGAIN!";
                   //added announcer text object  
                   this.p2reloadd.play('p2slap');
                   this.p1reloadd.play('p1slap');


                   this.roundReset();

               }
               
               //p1 fail, p2: succ -> p2 gets point, resources reset, round resets
               else if(!this.p1.canSlap() && this.p2.canSlap())
               {
                   if(this.p1.canBlock())
                   {
                    console.log("Player 2 gets a point!");
                    this.announcer.text = "Player 2 gets a point!";
                    this.sound.play('cymbal');
                   
                    this.p1.play('p1slapped');
                    //added announcer text object  
 
                    //p2 get point
                    this.p2.score++;
                   }
                   else{
                    console.log("p2 landed a SUPER SLAP! (2 points)");
                    this.announcer.text = "p2 landed a SUPER SLAP! (2 points)";
                    this.sound.play('inception');
                    //added announcer text object
                    this.p1.play('p1slapped');
                    //p2 get 2 points
                    this.p2.score += 2;
                   }
                   

                   //resources reset
                   this.p1.resetResources();
                   this.p2.resetResources();

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;


               }
               //p1 succ, p2: fail -> p1 gets point, resources reset, round resets
               else if(this.p1.canSlap() && !this.p2.canSlap())
               {
                if(this.p2.canBlock())
                {
                 console.log("Player 1 gets a point!");
                 this.announcer.text = "Player 1 gets a point!";
                 this.sound.play('cymbal');
                 //added announcer text object 
                 this.p2.play('p2slapped'); 

                 //p1 get point
                 this.p1.score++;
                }
                else{
                 console.log("p1 landed a SUPER SLAP! (2 points)");
                 this.announcer.text = "p1 landed a SUPER SLAP! (2 points)";
                 this.sound.play('inception');
                 //added announcer text object
                 this.p1.play('p1slapped');
                 //p1 get 2 points
                 this.p1.score += 2;
                }

                  
                   
                   //resources reset
                   this.p1.resetResources();
                   this.p2.resetResources();

                   //round resets
                   this.roundReset();

                   this.p1update = true;

               }
               //both succ -> p1 and p2 loose a slap, round resets
               else if(this.p1.canSlap() && this.p2.canSlap())
               {
                   console.log("The slaps clash!");
                   this.announcer.text = "The slaps clash!";
                   this.sound.play('clash');
                   //added announcer text object 
                   this.p1.play('p1slapped');
                   this.p2.play('p2slapped'); 
                   //p1 and p2 loose a slap
                   this.p1.slaps--;
                   this.p2.slaps--;
                   
                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               else
               {
                   console.log("oh dear god has abandond me 1");
               }

           }
           //scenario 2: p1: slap , p2: blocks (DONE, TESTING NEEDED)
           else if(this.p1Choice == "s" && this.p2Choice == "b")
           {   
               console.log("p1: slaps! p2: blocks.");
               this.status.text = "p1: slaps! p2: blocks.";
               //added STATUS text object 
               this.p2reloadd.play('p2block');
               this.p1reloadd.play('p1slap');

               //both fail -> reset p2's blocks, round resets
               if(!this.p1.canSlap() && !this.p2.canBlock())
               {
                   console.log("p1 slapped w/ no slaps!");
                   this.announcer.text = "p1 slapped w/ no slaps!";
                   //added announcer text object 
                   this.p1.play('p1slapped');

                   //reset p2's blocks
                   this.p2.blocks == 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;

               }
               //p1 fail, p2: succ -> inc p2's blocks, round resets
               else if(!this.p1.canSlap() && this.p2.canBlock())
               {
                   console.log("p1 slapped w/ no slaps!");
                   this.announcer.text = "p1 slapped w/ no slaps!";
                   //added announcer text object 

                   //inc p2's blocks
                   this.p2.blocks++;

                   //round resets
                   this.roundReset();

                   this.p2update = true;
               }
               //p1 succ, p2: fail -> p1 gets 2 points, recourses reset, round resets
               else if(this.p1.canSlap() && !this.p2.canBlock())
               {
                   console.log("p1 landed a SUPER SLAP! (2 points)");
                   this.announcer.text = "p1 landed a SUPER SLAP! (2 points)";
                   this.sound.play('inception');
                   //added announcer text object
                   this.p2.play('p2slapped');

                   //p1 gets 2 points
                   this.p1.score += 2;

                   //resources reset
                   this.p1.resetResources();
                   this.p2.resetResources();

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               //both succ -> dec p1's slaps, reset p2's blocks, round resets
               else if(this.p1.canSlap() && this.p2.canBlock())
               {
                   console.log("p2 blocks the slap!");
                   this.announcer.text = "p2 blocks the slap!";
                   this.sound.play('duck');
                   //added announcer text object
                   this.p2reloadd.play('p2block');

                   //dec p1's slaps
                   this.p1.slaps--;

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               }
               else
               {
                   console.log("oh dear god has abandond me 2");
               }

           }
           //scenario 3: p1: slap , p2: reload (DONE, TESTING NEEDED)
           else if(this.p1Choice == "s" && this.p2Choice == "r")
           {   
               console.log("p1: slaps! p2: reloads.");
               this.status.text = "p1: slaps! p2: reloads.";
               //added STATUS text object 
               this.p1reloadd.play('p1slap');
               this.p2reloadd.play('p2reload');
               //both fail -> reset p2's blocks, round resets
               if(!this.p1.canSlap() && !this.p2.canReload())
               {
                   console.log("p1 slapped w/ no slaps!");
                   this.announcer.text = "p1 slapped w/ no slaps!";
                   //added announcer text object 

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p2update = true;

               }
               //p1 fail, p2: succ -> inc p2's slaps, reset p2's blocks, round resets
               else if(!this.p1.canSlap() && this.p2.canReload())
               {
                   console.log("p1 slapped w/ no slaps!");
                   this.announcer.text = "p1 slapped w/ no slaps!";
                   //added announcer text object 
                   //inc p2's slaps
                   this.p2.slaps++;
                   this.sound.play('guncock');

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p2update = true;
                   

               }
               //p1 succ, p2: fail -> both succ -> p1's gets point, resources reset, round resets
               else if(this.p1.canSlap())
               {
                if(this.p2.canBlock())
                {
                 console.log("Player 1 gets a point!");
                 this.announcer.text = "Player 1 gets a point!";
                 this.sound.play('cymbal');
                 //added announcer text object  
                 this.p2.play('p2slapped');

                 //p2 get point
                 this.p1.score++;
                }
                else{
                 console.log("p1 landed a SUPER SLAP! (2 points)");
                 this.announcer.text = "p1 landed a SUPER SLAP! (2 points)";
                 this.sound.play('inception');
                 //added announcer text object
                 this.p2.play('p2slapped');

                 //p2 get 2 points
                 this.p1.score += 2;
                } 


                   //resources reset
                   this.p1.resetResources();
                   this.p2.resetResources();

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               else
               {
                   console.log("oh dear god has abandond me 3");
               }

           }
           //scenario 4: both blocks (DONE, TESTING NEEDED)
           else if(this.p1Choice == "b" && this.p2Choice == "b")
           {   
               console.log("both block.");
               this.status.text = "both block.";
               //added STATUS text object 
               this.announcer.text = "...";
               //added announcer text object
               this.p2reloadd.play('p2block');
               this.p1reloadd.play('p1block');

               //p1 blockthing, inc or reset blocks
               if(this.p1.canBlock())
               {

                   this.p1.blocks++;

                   this.p1update = true;
               }
               else
               {
              
                   this.p1.blocks = 0;

                   this.p1update = true;
               }

               //p2 blockthing, inc or reset blocks
               if(this.p2.canBlock())
               {
                   this.p2.blocks++;

                   this.p2update = true;
               }
               else
               {
                   this.p2.blocks = 0;

                   this.p2update = true;
               }

               //round resets
               this.roundReset();

           }
           //scenario 5: p1: blocks , p2: reload (DONE, TESTING NEEDED)
           else if(this.p1Choice == "b" && this.p2Choice == "r")
           {       
               
               console.log("p1: blocks. p2: reloads.");
               this.status.text = "p1: blocks. p2: reloads.";
               //added STATUS text object 
               this.announcer.text = "...";
               //added announcer text object
               this.p2reloadd.play('p2reload');
               this.p1reloadd.play('p1block');

               //both fail -> reset p1's blocks, reset p2's blocks, round resets
               if(!this.p1.canBlock() && !this.p2.canReload())
               {
                    this.announcer.text = "p2 TAUNTS!";
                    this.sound.play('haha');
                    //added announcer text object
                    
                    //reset p1's blocks
                   this.p1.blocks = 0;
                   
                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               } 
               //p1 fail, p2: succ -> reset p1's blocks, reset p2's blocks, inc p2's slaps, round resets
               else if(!this.p1.canBlock() && this.p2.canReload())
               {
                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //inc p2's slaps
                   this.p2.slaps++;
                   this.sound.play('guncock');

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               //p1 succ, p2: fail -> inc p1's blocks, reset p2's blocks, round resets
               else if(this.p1.canBlock() && !this.p2.canReload())
               {
                   //inc p1's blocks
                   this.p1.blocks++;

                   this.announcer.text = "p2 TAUNTS!"
                   this.sound.play('haha');
                   //added announcer text object

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
                   
               }
               //both succ -> inc p1's blocks, inc p2's slaps, reset p2's blocks, round resets
               else if(this.p1.canBlock() && this.p2.canReload())
               {
                   //inc p1's blocks
                   this.p1.blocks++;

                   //inc p2's slaps
                   this.p2.slaps++;
                   this.sound.play('guncock');

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               }
               else
               {
                   console.log("oh dear god has abandond me 5");
               }

           }

           //scenario 6: p1: blocks , p2: slap [scenario 2 flipped] (DONE, TESTING NEEDED)
           else if(this.p1Choice == "b" && this.p2Choice == "s")
           {       
               console.log("p1: blocks. p2: slaps!");
               this.status.text = "p1: blocks. p2: slaps!";
               //added STATUS text object 
               this.p2reloadd.play('p2slap');
               this.p1reloadd.play('p1block');

               //both fail -> reset p1's blocks, round resets
               if(!this.p2.canSlap() && !this.p1.canBlock())
               {
                   console.log("p2 slapped w/ no slaps!");
                   this.announcer.text = "p2 slapped w/ no slaps!";
                   //added announcer text object 

                   //reset p1's blocks
                   this.p1.blocks == 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;

               }
               //p2 fail, p1: succ -> inc p1's blocks, round resets
               else if(!this.p2.canSlap() && this.p1.canBlock())
               {
                   console.log("p2 slapped w/ no slaps!");
                   this.announcer.text = "p2 slapped w/ no slaps!";
                   //added announcer text object 

                   //inc p1's blocks
                   this.p1.blocks++;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
               }
               //p2 succ, p1: fail -> p2 gets 2 points, recourses reset, round resets
               else if(this.p2.canSlap() && !this.p1.canBlock())
               {
                   console.log("p2 landed a SUPER SLAP! (2 points)");
                   this.announcer.text = "p2 landed a SUPER SLAP! (2 points)";
                   this.sound.play('inception');
                   //added announcer text object
                   this.p1.play('p1slapped');

                   //p2 gets 2 points
                   this.p2.score += 2;

                   //resources reset
                   this.p2.resetResources();
                   this.p1.resetResources();

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               //both succ -> dec p2's slaps, reset p1's blocks, round resets
               else if(this.p2.canSlap() && this.p1.canBlock())
               {
                   console.log("p1 blocks the slap!");
                   this.announcer.text = "p1 blocks the slap!";
                   this.sound.play('duck');
                   //added announcer text object
                   this.p1reloadd.play('p1block');
                   //dec p2's slaps
                   this.p2.slaps--;

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               }
               else
               {
                   console.log("oh dear god has abandond me 6");
               }

           }

           //scenario 7: p1: reload , p2: slap [scenario 3 flipped] (DONE TESTING NEEDED)
           else if(this.p1Choice == "r" && this.p2Choice == "s")
           {          
               console.log("p1: reloads. p2: slaps!");
               this.status.text = "p1: reloads. p2: slaps!";
               //added STATUS text object 
               this.p2reloadd.play('p2slap');
               this.p1reloadd.play('p1reload');

               //both fail -> reset p1's blocks, round resets
               if(!this.p2.canSlap() && !this.p1.canReload())
               {
                   console.log("p2 slapped w/ no slaps!");
                   this.announcer.text = "p2 slapped w/ no slaps!";
                   //added announcer text object 
                   

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;

               }
               //p2 fail, p1: succ -> inc p1's slaps, round resets
               else if(!this.p2.canSlap() && this.p1.canReload())
               {
                   console.log("p2 slapped w/ no slaps!");
                   this.announcer.text = "p2 slapped w/ no slaps!";
                   //added announcer text object 
                   this.p2reloadd.play('p2slap');

                   //inc p1's slaps
                   this.p1.slaps++;
                   this.sound.play('guncock');

                   //round resets
                   this.roundReset();

                   this.p1update = true;

               }
               //p2 succ, p1: fail -> both succ -> p2's gets point, resources reset, round resets
               else if(this.p2.canSlap())
               {
                if(this.p1.canBlock())
                {
                 console.log("Player 2 gets a point!");
                 this.announcer.text = "Player 2 gets a point!";
                 this.sound.play('cymbal');
                 //added announcer text object  
                 this.p1.play('p1slapped');

                 //p2 get point
                 this.p2.score++;
                }
                else{
                 console.log("p2 landed a SUPER SLAP! (2 points)");
                 this.announcer.text = "p2 landed a SUPER SLAP! (2 points)";
                 this.sound.play('inception');
                 //added announcer text object
                 this.p1.play('p1slapped');
                 //p2 get 2 points
                 this.p2.score += 2;
                }

                   

                   //resources reset
                   this.p1.resetResources();
                   this.p2.resetResources();

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               else
               {
                   console.log("oh dear god has abandond me 7");
               }

           }

           //scenario 8: p1: reload , p2: blocks [scenario 5 flipped] (DONE TESTING NEEDED)
           else if(this.p1Choice == "r" && this.p2Choice == "b")
           {              
               console.log("p1: reloads. p2: blocks.");
               this.status.text = "p1: reloads. p2: blocks.";
               //added STATUS text object 
               this.announcer.text = "...";
               //added announcer text object 
               this.p2reloadd.play('p2block');
               this.p1reloadd.play('p1reload');
               
        
                
                

            
                
               //both fail -> reset p2's blocks, reset p1's blocks, round resets
               if(!this.p2.canBlock() && !this.p1.canReload())
               {
                   //reset p2's blocks
                   this.p2.blocks = 0;

                   this.announcer.text = "p1 TAUNTS!"
                   this.sound.play('haha');
                   //added announcer text object

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               } 
               //p2 fail, p1: succ -> reset p2's blocks, reset p1's blocks, inc p1's slaps, round resets
               else if(!this.p2.canBlock() && this.p1.canReload())
               {
                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //inc p1's slaps
                   this.p1.slaps++;
                   this.sound.play('guncock');

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               //p2 succ, p1: fail -> inc p2's blocks, reset p1's blocks, round resets
               else if(this.p2.canBlock() && !this.p1.canReload())
               {
                   //inc p2's blocks
                   this.p2.blocks++;

                   this.announcer.text = "p1 TAUNTS!"
                   this.sound.play('haha');
                   //added announcer text object

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
                   
               }
               //both succ -> inc p2's blocks, inc p1's slaps, reset p1's blocks, round resets
               else if(this.p2.canBlock() && this.p1.canReload())
               {
                   //inc p2's blocks
                   this.p2.blocks++;

                   //inc p1's slaps
                   this.p1.slaps++;
                   this.sound.play('guncock');

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               }
               else
               {
                   console.log("oh dear god has abandond me 8");
               }

           }

           //scenario 9: both reload (DONE TESTING NEEDED)
           else if(this.p1Choice == "r" && this.p2Choice == "r")
           {
               console.log("both reload");
               this.status.text = "both reload";
               //added STATUS text object 
               this.p1reloadd.play('p1reload');
               this.p2reloadd.play('p2reload');
               
               

               //both fail -> reset p1's blocks, reset p2's blocks, round resets
               if(!this.p1.canReload() && !this.p2.canReload())
               {
                   //reset p1's blocks
                   this.p1.blocks = 0;

                   this.announcer.text = "You TAUNT eachother. dramatic.";
                   //added ANNOUNCER text object

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               }
               //p1 fail, p2: succ -> reset p1's blocks, reset p2's blocks, inc p2's slaps, round resets
               else if(!this.p1.canReload() && this.p2.canReload())
               {

                   this.announcer.text = "p1 TAUNTS! (for the worse)";
                   //added ANNOUNCER text object

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //inc p2's slaps
                   this.p2.slaps++;
                   this.sound.play('guncock');

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               //p1 succ, p2: fail -> reset p1's blocks, inc p1's slaps, reset p2's blocks, round resets
               else if(this.p1.canReload() && !this.p2.canReload())
               {
                   this.announcer.text = "p2 TAUNTS! (for the worse)";
                   //added ANNOUNCER text object

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //inc p1's slaps
                   this.p1.slaps++;
                   this.sound.play('guncock');

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;

               }
               //both succ -> reset p1's blocks, inc p1's slaps, reset p2's blocks, inc p2's slaps, round resets
               else if(this.p1.canReload() && this.p2.canReload())
               {
                   this.announcer.text = "...";
                   //added ANNOUNCER text object

                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //inc p1's slaps
                   this.p1.slaps++;

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //inc p2's slaps
                   this.p2.slaps++;
                   this.sound.play('guncock');

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               else
               {
                   console.log("oh dear god has abandond me 9");
               }

           }
           else
           {
               console.log("oh dear god has abandoned you and it's time to start over bich boi");
           }
               
           //UPDATE THE ON SCREEN TEXT TO MATCH CURRENT PLAYER FIELD VALUES
           //p1 display update
           if(this.p1update)
               this.p1score.text = "Score: " + this.p1.score;
               this.p1slaps.text = "(\'Q\')Slaps: " + this.p1.slaps + "/" + game.settings.maxSlaps;
               this.p1blocks.text = "(\'W\')Blocks: " + this.p1.blocks + "/" + game.settings.maxBlocks;
               this.p1update = false;
           }
           
           //p2 display update
           if(this.p2update)
           {
               this.p2score.text = "Score: " + this.p2.score;
               this.p2slaps.text = "(\'O\')Slaps: " + this.p2.slaps + "/" + game.settings.maxSlaps;
               this.p2blocks.text = "(\'P\')Blocks: " + this.p2.blocks + "/" + game.settings.maxBlocks;
               this.p2update = false;
           }

            if(this.p1.score >= game.settings.firstTo || this.p2.score >= game.settings.firstTo){
                this.sound.play('slowclap');
                this.gameOver = true;
            }
            else{

                //at max blocks report
                if(!this.p1.canBlock())
                {
                    console.log("P1 can't block!");
                    this.announcer.text = "P1 can't block!";
                    //added announcer text object
                }
                if(!this.p2.canBlock())
                {
                    console.log("P2 can't block!");
                    this.announcer.text = "P2 can't block!";
                    //added announcer text object       
                }

                if(!this.p1.canBlock() && !this.p2.canBlock())
                {
                    console.log("none can block!");
                    this.announcer.text = "none can block!";
                    //added announcer text object       
                }

            }
            

    }
      
        

   
}

roundReset()
{
    this.p1Choice = null;
    this.p2Choice = null;
}

    }




