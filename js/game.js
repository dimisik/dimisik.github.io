//game.js

var game = new Phaser.Game(720, 640, Phaser.AUTO, null, 'gameDiv');

//add each game state

game.state.add('load', loadState);
game.state.add('play', playState);

//call the boot state
game.state.start('load');
