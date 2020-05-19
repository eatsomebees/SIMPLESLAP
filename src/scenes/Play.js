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

        //animations

        //background
        this.add.image(centerX, centerY, 'background');

        //spawn prefabs
        this.p1 = new Player(this, centerX - 480, centerY - 240, 'player1').setOrigin(0,0);
        this.p2 = new Player(this, centerX, centerY - 240, 'player2').setOrigin(0,0);

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
        let spacerXR = 825;


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

        //announcer display
        this.announcer = this.add.text(game.config.width/2, game.config.height-spacerY, "PREPARE YOURSELF!", scoreConfig).setOrigin(0.5);
        //status display
        this.status = this.add.text(game.config.width/2, game.config.height-spacerY*2, "", scoreConfig).setOrigin(0.5);


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

        if(this.gameOver)
        {
            console.log("gameover");
            if(this.p1.score > this.p2.score)
            {
                this.status.text = "p1 wins!";
            }
            else
            {
                this.status.text = "p2 wins!";
            }

            this.announcer.text = "press \'Q\' to play again or \'P\' to return to menu.";
            if (Phaser.Input.Keyboard.JustDown(keyQ)) {
                this.scene.restart();
            }
            if (Phaser.Input.Keyboard.JustDown(keyP)) {
                this.scene.start("menuScene");
            }
        }
    

    //logic for checking if game is over goes here

    //EVERYTHING below GOES IN A FAT WHILE LOOP THAT NEEDS TO GO HERE (since update is already looping this is NOT the move...
    //...use gameover boolean instead)
    //while(this.p1.score < game.settings.firstTo && this.p2.score < game.settings.firstTo){}
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
       //sound and animations triggers go in here somewhere, when we have them 
       //extra question, advantages between just using 'if' statments and 'if else' in this case?
       //all 9 cases TESTED to activate correctly, so if there're bugs they're inside of the choice check if statements 
       //remove console.log() stuff later?

       //extra if statement to try and improve preformance? (also makes the ending else statment work)
       if(this.p1Choice != null && this.p2Choice != null)
       {

           //blocks going over max test(delete at end if ya want)
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

               //both fail -> round resets
               if(!this.p1.canSlap() && !this.p2.canSlap())
               {
                   console.log("BOTH OF Y'all DON'T HAVE SLAPS! AGAIN!");
                   this.announcer.text = "BOTH OF Y'all DON'T HAVE SLAPS! AGAIN!";
                   //added announcer text object  

                   this.roundReset();

               }
               //p1 fail, p2: succ -> p2 gets point, resources reset, round resets
               else if(!this.p1.canSlap() && this.p2.canSlap())
               {
                   console.log("Player 2 gets a point!");
                   this.announcer.text = "Player 2 gets a point!";
                   //added announcer text object  

                   //p2 get point
                   this.p2.score++;

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
                   console.log("Player 1 gets a point!");
                   this.announcer.text = "Player 1 gets a point!";
                   //added announcer text object 

                   //p1 get point
                   this.p1.score++;
                   
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
                   //added announcer text object 

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

               //both fail -> reset p2's blocks, round resets
               if(!this.p1.canSlap() && !this.p2.canBlock())
               {
                   console.log("p1 slapped w/ no slaps!");
                   this.announcer.text = "p1 slapped w/ no slaps!";
                   //added announcer text object 

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
                   //added announcer text object

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
                   console.log("p2 bocks the slap!");
                   this.announcer.text = "p2 bocks the slap!";
                   //added announcer text object

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

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //round resets
                   this.roundReset();

                   this.p2update = true;
                   

               }
               //p1 succ, p2: fail -> both succ -> p1's gets point, resources reset, round resets
               else if(this.p1.canSlap())
               {
                   console.log("p1 lands a slap and gets a point!");
                   this.announcer.text = "p1 lands a slap and gets a point!";
                   //added announcer text object 

                   //p1's gets point
                   this.p1.score++;

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

               //both fail -> reset p1's blocks, reset p2's blocks, round resets
               if(!this.p1.canBlock() && !this.p2.canReload())
               {
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
                   //added announcer text object

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
                   console.log("p1 bocks the slap!");
                   this.announcer.text = "p1 bocks the slap!";
                   //added announcer text object

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

                   //inc p1's slaps
                   this.p1.slaps++;

                   //round resets
                   this.roundReset();

                   this.p1update = true;

               }
               //p2 succ, p1: fail -> both succ -> p2's gets point, resources reset, round resets
               else if(this.p2.canSlap())
               {
                   console.log("p2 lands a slap and gets a point!");
                   this.announcer.text = "p2 lands a slap and gets a point!";
                   //added announcer text object 

                   //p2's gets point
                   this.p2.score++;

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

               //both fail -> reset p2's blocks, reset p1's blocks, round resets
               if(!this.p2.canBlock() && !this.p1.canReload())
               {
                   //reset p2's blocks
                   this.p2.blocks = 0;

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

               //both fail -> reset p1's blocks, reset p2's blocks, round resets
               if(!this.p1.canReload() && !this.p2.canReload())
               {
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
               else if(!this.p1.canReload() && this.p2.canReload())
               {
                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //inc p2's slaps
                   this.p2.slaps++;

                   //round resets
                   this.roundReset();

                   this.p1update = true;
                   this.p2update = true;
               }
               //p1 succ, p2: fail -> reset p1's blocks, inc p1's slaps, reset p2's blocks, round resets
               else if(this.p1.canReload() && !this.p2.canReload())
               {
                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //inc p1's slaps
                   this.p1.slaps++;

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
                   //reset p1's blocks
                   this.p1.blocks = 0;

                   //inc p1's slaps
                   this.p1.slaps++;

                   //reset p2's blocks
                   this.p2.blocks = 0;

                   //inc p2's slaps
                   this.p2.slaps++;

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
           {
               this.p1score.text = "Score: " + this.p1.score;
               this.p1slaps.text = "Slaps: " + this.p1.slaps + "/" + game.settings.maxSlaps;
               this.p1blocks.text = "Blocks: " + this.p1.blocks + "/" + game.settings.maxBlocks;
               this.p1update = false;
           }
           
           //p2 display update
           if(this.p2update)
           {
               this.p2score.text = "Score: " + this.p2.score;
               this.p2slaps.text = "Slaps: " + this.p2.slaps + "/" + game.settings.maxSlaps;
               this.p2blocks.text = "Blocks: " + this.p2.blocks + "/" + game.settings.maxBlocks;
               this.p2update = false;
           }

            if(this.p1.score >= game.settings.firstTo || this.p2.score >= game.settings.firstTo){
                this.gameOver = true;
            }
            else{

                //at max blocks report
                if(!this.p1.canBlock())
                {
                    console.log("P1 can't block!");
                    this.announcer.text = "P1 can't blocks!";
                    //added announcer text object
                }
                if(!this.p2.canBlock())
                {
                    console.log("P2 can't blocks!");
                    this.announcer.text = "P2 can't block!";
                    //added announcer text object       
                }

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
