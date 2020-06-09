class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

         //add object to existing scene
         scene.add.existing(this);

        //add the object's fields (java pleb lingo)
        this.score = 0;
        this.slaps = 0;
        this.blocks = 0;

        //add sfx

        //add animations?
    }

    //react to key presses to play sounds (and animations?)
    update() {

    }

    //ADD METHODS (java pleb lingo) AS NEEDED HERE

    resetResources()
    {
        this.slaps = 0;
        this.blocks = 0;
    }

    resetAll()
    {
        this.score = 0;
        this.slaps = 0;
        this.blocks = 0;
    }

    //normally pass in 1, but considering bonus point for hit when opponent has full blocks? 
    //downside to just changing field directly w/ out method?
    incScore(amount)
    {
        this.score += amount;
    }


    //STATE CHECKING FUNCTIONS (p sure they work but can't officially test yet)
    //returns true if player is able to slap, false otherwise
    canSlap()
    {
        if(this.slaps > 0)
        {
            return true;
        }

        return false;
    }
    //returns true if player is able to block, false otherwise
    canBlock()
    {
        if(this.blocks < game.settings.maxBlocks)
        {
            return true;
        }

        return false;

    }
    
    //returns true if player is able to relaod, false otherwise
    //will be implemented a lil differently in the game logic
    canReload()
    {
        if(this.slaps < game.settings.maxSlaps)
        {
            return true;
        }

        return false;

    }
    

    //are getter and setter methods even needed when the object's fields can just be accesed in the play scene?
    // decSlaps()
    // {
        
    // }

}