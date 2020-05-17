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

    //are getter and setter methods even needed when the object's fields can just be accesed in the play scene?
    // decSlaps()
    // {
        
    // }

}