/*
William Gadd
Kenice Washington

Title: SIMP. SLAP prototype

Date Completed: 

*/

let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 640,
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH
    },

    //REMEMBER TO ADD NEW SCENES HERE
    scene: [ Menu, Play ] 
  }

let game = new Phaser.Game(config);

// DEFINE GAME SETTINGS AS NEEDED 
//(mplayer specific things go in player prefab?)
//maybe difficulty/complexity in here?
//or would it be better to put everything in here? research before deciding
game.settings = {
   
    //universal(change to effect complexity)
    firstTo: 3,
    maxSlaps: 2,
    maxBlocks:2,

    //player specific(moved to player prefab)
   
}

// reserve keyboard vars (selected for real world playability on one keyboard)
//player 1
let keyQ, keyW, keyA;
//player 2
let keyO, keyP, keyL;